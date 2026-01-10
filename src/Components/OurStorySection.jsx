import { useEffect, useState } from "react";


export default function OurStorySection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = document.getElementById("our-story");
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="our-story"
      className="relative w-full text-white overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <video
  src="/client_video1.mp4"
  className="w-full h-full object-cover"
  autoPlay      // start automatically
  muted         // must be muted for autoplay to work in browsers
  loop          // repeat forever
  playsInline   // avoid full-screen on mobile
  aria-label="Abstract black motion background"
/>

       {/* <Silk
  speed={5}
  scale={1}
  color="#7B7481"
  noiseIntensity={1.5}
  rotation={0}
/> */}
        {/* Slight dark overlay so text is readable */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 lg:py-28">
        <div className="grid lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] gap-8 lg:gap-16 items-center">
          {/* LEFT: Title + Paragraph + Button */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
              Our Story
            </h2>

            <p className="text-lg leading-relaxed font-light mb-8 max-w-4xl text-justify">
              We live in a world that never stands still, technology evolves, businesses transform, and 
audiences demand more every day. As a marketing agency, IT solutions partner, and 
production house, we exist to help brands move confidently into that future. We combine 
creativity with technology, ideas with execution, and vision with measurable growth. It’s not 
about preparing for tomorrow, we design it, power it, and bring it to life. With Digtel, your next 
chapter begins, and together, we shape what comes after.
            </p>

            <a 
            href="/about"className="inline-flex items-center gap-3 px-8 py-3 border border-white rounded-lg bg-black/40 hover:bg-white hover:text-black transition-all duration-300 text-base md:text-lg font-medium">
              Learn More
              <span className="inline-block translate-y-[1px]">→</span>
            </a>
          </div>

          {/* RIGHT: Huge translucent brand text */}
          <div
            className={`hidden lg:flex justify-end items-center transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="text-[96px] xl:text-[140px] 2xl:text-[160px] font-bold text-white/25 leading-none tracking-tight">
              Digtel
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
