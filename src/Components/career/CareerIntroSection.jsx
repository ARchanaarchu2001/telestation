import React, { useEffect, useRef, useState } from "react";

// Simple typing animation component
const TextType = ({ text, typingSpeed = 50, pauseDuration = 1500, showCursor = true, cursorCharacter = "|" }) => {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const fullText = Array.isArray(text) ? text[0] : text;

  useEffect(() => {
    let index = 0;
    setDisplayText("");
    setIsTyping(true);

    const typeInterval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(typeInterval);
      }
    }, typingSpeed);

    return () => clearInterval(typeInterval);
  }, [fullText, typingSpeed]);

  return (
    <span>
      {displayText}
      {showCursor && isTyping && (
        <span className="animate-pulse">{cursorCharacter}</span>
      )}
    </span>
  );
};

const CareersIntroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const images = [
    {
      src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=1000&fit=crop",
      alt: "Team playing foosball",
    },
    {
      src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=600&fit=crop",
      alt: "Team working together on laptops",
    },
    {
      src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=600&fit=crop",
      alt: "Team collaborating at desks",
    },
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative bg-gradient-to-b from-black via-neutral-950 to-black text-white py-16 md:py-24 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-40 w-96 h-96 bg-[#d8f60c]/10 rounded-full blur-3xl opacity-20 animate-[pulse_8s_ease-in-out_infinite]" />
        <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl opacity-20 animate-[pulse_10s_ease-in-out_infinite]" 
             style={{ animationDelay: '2s' }} />
        
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(216, 246, 12, 0.15) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(216, 246, 12, 0.15) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-center">
          {/* Left: Text */}
          <div 
            className={`transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            {/* Eyebrow text */}
            {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#d8f60c]/30 bg-[#d8f60c]/5 mb-8 backdrop-blur-sm">
              <div className="w-2 h-2 rounded-full bg-[#d8f60c] animate-pulse" />
              <span className="text-sm font-medium text-[#d8f60c]">Join Our Team</span>
            </div> */}

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
              {/* Static main part with gradient */}
              <span className="block bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
                Are you passionate
                <br /> about helping brands
                <br /> grow with{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">creative</span>
                  <span className="absolute bottom-2 left-0 right-0 h-3 bg-[#d8f60c]/20 -rotate-1" />
                </span>
                <br /> strategies?
              </span>

              {/* Animated "Join us..." part */}
              <span className="block mt-8 text-2xl md:text-4xl lg:text-5xl text-transparent bg-gradient-to-r from-[#d8f60c] via-[#f5ffb0] to-[#d8f60c] bg-clip-text">
                <TextType
                  text={[
                    "Join us in\nbecoming a\nchangemaker for\nbrands.",
                  ]}
                  typingSpeed={75}
                  pauseDuration={1500}
                  showCursor={true}
                  cursorCharacter="|"
                />
              </span>
            </h2>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href="#openings"
                className="group inline-flex items-center gap-3 rounded-full bg-[#d8f60c] px-8 py-4 text-base font-bold text-black shadow-lg shadow-[#d8f60c]/40 transition-all duration-300 hover:shadow-2xl hover:shadow-[#d8f60c]/60 hover:scale-105 active:scale-95"
              >
                <span>View Open Positions</span>
                <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
              
              <a
                href="/about"
                className="group inline-flex items-center gap-3 rounded-full border-2 border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/40 hover:scale-105 active:scale-95"
              >
                <span>Learn About Us</span>
              </a>
            </div>
          </div>

          {/* Right: Image collage */}
          <div className="grid grid-cols-2 grid-rows-2 gap-4 h-[500px] lg:h-[600px]">
            {/* Large image spanning two rows */}
            <div 
              className={`row-span-2 rounded-2xl overflow-hidden bg-neutral-900 group relative transition-all duration-1000 ease-out delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            >
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-[#d8f60c]/20 to-purple-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
              <div className="relative h-full overflow-hidden rounded-2xl">
                <img
                  src={images[0].src}
                  alt={images[0].alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                
                {/* Overlay label */}
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="px-4 py-2 rounded-lg bg-black/60 backdrop-blur-sm border border-white/10">
                    <p className="text-sm font-medium text-white">Collaborative Environment</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Top-right */}
            <div 
              className={`rounded-2xl overflow-hidden bg-neutral-900 group relative transition-all duration-1000 ease-out delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            >
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-purple-500/20 to-[#d8f60c]/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
              <div className="relative h-full overflow-hidden rounded-2xl">
                <img
                  src={images[1].src}
                  alt={images[1].alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                
                <div className="absolute bottom-3 left-3 right-3 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-sm border border-white/10">
                    <p className="text-xs font-medium text-white">Innovation Hub</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom-right */}
            <div 
              className={`rounded-2xl overflow-hidden bg-neutral-900 group relative transition-all duration-1000 ease-out delay-400 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            >
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-[#d8f60c]/20 to-blue-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
              <div className="relative h-full overflow-hidden rounded-2xl">
                <img
                  src={images[2].src}
                  alt={images[2].alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                
                <div className="absolute bottom-3 left-3 right-3 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-sm border border-white/10">
                    <p className="text-xs font-medium text-white">Growth Mindset</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersIntroSection;