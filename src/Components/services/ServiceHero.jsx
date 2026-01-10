import { useState, useRef, useEffect } from "react";
import * as THREE from "three";
import BlurText from "../BlurText";
import { FiArrowRight, FiPlay } from "react-icons/fi";


const vertexShader = `
uniform float time;
varying vec2 vUv;
varying vec3 vPosition;

void main() {
  vUv = uv;
  vPosition = position;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`;

const fragmentShader = `
uniform sampler2D uDataTexture;
uniform sampler2D uTexture;
uniform vec4 resolution;
varying vec2 vUv;

void main() {
  vec2 uv = vUv;
  vec4 offset = texture2D(uDataTexture, vUv);
  gl_FragColor = texture2D(uTexture, uv - 0.02 * offset.rg);
}`;

// ---------------- GridDistortion ----------------
const GridDistortion = ({
  grid = 15,
  mouse = 0.1,
  strength = 0.15,
  relaxation = 0.9,
  imageSrc,
  className = "",
}) => {
  const containerRef = useRef(null);
  const animationIdRef = useRef(null);
  const resizeObserverRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    // ✅ IMPORTANT: container must have size
    // If your parent gives height/width (absolute inset-0), you're good.

    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);

    container.innerHTML = "";
    container.appendChild(renderer.domElement);

    const camera = new THREE.OrthographicCamera(0, 0, 0, 0, -1000, 1000);
    camera.position.z = 2;

    const uniforms = {
      time: { value: 0 },
      resolution: { value: new THREE.Vector4() },
      uTexture: { value: null },
      uDataTexture: { value: null },
    };

    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(
      imageSrc,
      (texture) => {
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;
        texture.wrapS = THREE.ClampToEdgeWrapping;
        texture.wrapT = THREE.ClampToEdgeWrapping;
        uniforms.uTexture.value = texture;
        handleResize();
      },
      undefined,
      (err) => console.error("Texture load error:", err)
    );

    const size = grid;
    const data = new Float32Array(4 * size * size);
    for (let i = 0; i < size * size; i++) {
      data[i * 4] = Math.random() * 255 - 125;
      data[i * 4 + 1] = Math.random() * 255 - 125;
      data[i * 4 + 2] = 0;
      data[i * 4 + 3] = 1;
    }

    const dataTexture = new THREE.DataTexture(
      data,
      size,
      size,
      THREE.RGBAFormat,
      THREE.FloatType
    );
    dataTexture.needsUpdate = true;
    uniforms.uDataTexture.value = dataTexture;

    const material = new THREE.ShaderMaterial({
      side: THREE.DoubleSide,
      uniforms,
      vertexShader,
      fragmentShader,
      transparent: true,
    });

    const geometry = new THREE.PlaneGeometry(1, 1, size - 1, size - 1);
    const plane = new THREE.Mesh(geometry, material);
    scene.add(plane);

    const handleResize = () => {
      const rect = container.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      if (!width || !height) return;

      const aspect = width / height;
      renderer.setSize(width, height);

      plane.scale.set(aspect, 1, 1);

      const frustumHeight = 1;
      const frustumWidth = frustumHeight * aspect;

      camera.left = -frustumWidth / 2;
      camera.right = frustumWidth / 2;
      camera.top = frustumHeight / 2;
      camera.bottom = -frustumHeight / 2;
      camera.updateProjectionMatrix();

      uniforms.resolution.value.set(width, height, 1, 1);
    };

    if (window.ResizeObserver) {
      const ro = new ResizeObserver(handleResize);
      ro.observe(container);
      resizeObserverRef.current = ro;
    } else {
      window.addEventListener("resize", handleResize);
    }

    const mouseState = { x: 0, y: 0, prevX: 0, prevY: 0, vX: 0, vY: 0 };

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = 1 - (e.clientY - rect.top) / rect.height;

      mouseState.vX = x - mouseState.prevX;
      mouseState.vY = y - mouseState.prevY;

      mouseState.x = x;
      mouseState.y = y;
      mouseState.prevX = x;
      mouseState.prevY = y;
    };

    const handleMouseLeave = () => {
      mouseState.x = 0;
      mouseState.y = 0;
      mouseState.prevX = 0;
      mouseState.prevY = 0;
      mouseState.vX = 0;
      mouseState.vY = 0;
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    handleResize();

    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);
      uniforms.time.value += 0.05;

      const d = dataTexture.image.data;

      // relax
      for (let i = 0; i < size * size; i++) {
        d[i * 4] *= relaxation;
        d[i * 4 + 1] *= relaxation;
      }

      const gridMouseX = size * mouseState.x;
      const gridMouseY = size * mouseState.y;
      const maxDist = size * mouse;

      for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
          const distSq = (gridMouseX - i) ** 2 + (gridMouseY - j) ** 2;
          if (distSq < maxDist * maxDist) {
            const idx = 4 * (i + size * j);
            const power = Math.min(maxDist / Math.sqrt(distSq + 0.00001), 10);
            d[idx] += strength * 100 * mouseState.vX * power;
            d[idx + 1] -= strength * 100 * mouseState.vY * power;
          }
        }
      }

      dataTexture.needsUpdate = true;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      if (animationIdRef.current) cancelAnimationFrame(animationIdRef.current);

      if (resizeObserverRef.current) resizeObserverRef.current.disconnect();
      else window.removeEventListener("resize", handleResize);

      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);

      renderer.dispose();
      if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement);

      geometry.dispose();
      material.dispose();
      dataTexture.dispose();
      if (uniforms.uTexture.value) uniforms.uTexture.value.dispose();
    };
  }, [grid, mouse, strength, relaxation, imageSrc]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      style={{ width: "100%", height: "100%", minWidth: 0, minHeight: 0 }}
    />
  );
};

// ---------------- AnimatedHero (with BlurText) ----------------
export default function AnimatedHero() {
  return (
    <section className="relative w-full h-screen bg-black overflow-hidden">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90" />

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(55,198,217,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(55,198,217,0.05)_1px,transparent_1px)] bg-[size:90px_90px] [mask-image:radial-gradient(ellipse_at_center,black_25%,transparent_75%)]" />

      {/* Brand Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#37C6D9]/10 rounded-full blur-[140px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#0B2C73]/20 rounded-full blur-[160px]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center space-y-6">

        {/* Line 1 */}
        <BlurText
          text="Turning conversations"
          animateBy="words"
          delay={120}
          direction="top"
          className="justify-center text-6xl md:text-8xl lg:text-9xl font-black leading-none text-white"
        />

        {/* Line 2 */}
        <BlurText
          text="into opportunities"
          animateBy="letters"
          delay={35}
          direction="bottom"
          className="justify-center text-6xl md:text-8xl lg:text-9xl font-black leading-none text-[#37C6D9]"
        />

        {/* Subheading */}
        <BlurText
          text="We deliver B2B and B2C telecommunication solutions that generate qualified leads, build customer trust, and drive long-term business growth."
          animateBy="words"
          delay={55}
          stepDuration={0.25}
          direction="top"
          className="justify-center mt-8 max-w-4xl text-lg md:text-2xl text-white/70 leading-relaxed"
        />

      </div>
    </section>
  );
}

