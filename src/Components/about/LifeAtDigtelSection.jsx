import React, { useState } from "react";

const LifeAtDigtelSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const teamMembers = [
    { name: "RIYADMON", role: "Creative Director", image: "/image/about1.jpg", color: "bg-red-600" },
    { name: "SHEHA HASEENA", role: "Designer", image: "/image/about2.jpg", color: "bg-yellow-500" },
    { name: "THAHSEENA CA", role: "Developer", image: "/image/about3.jpg", color: "bg-yellow-500" },
    { name: "JISHNU LALAN", role: "Strategist", image: "/image/about1.jpg", color: "bg-blue-600" },
    { name: "RITHUL", role: "Marketing", image: "/image/about2.jpg", color: "bg-red-600" },
    { name: "RAZEEN", role: "Content Writer", image: "/image/about3.jpg", color: "bg-lime-500" },
    { name: "SHAFEEQ", role: "Developer", image: "/image/about1.jpg", color: "bg-red-600" },
    { name: "ANNA", role: "Designer", image: "/image/about2.jpg", color: "bg-purple-600" },
    { name: "DEEN", role: "Manager", image: "/image/about3.jpg", color: "bg-yellow-500" },
    { name: "RIZWAN", role: "Developer", image: "/image/about1.jpg", color: "bg-blue-600" },
    { name: "MUHAMMED CHRISTOPER", role: "Lead Designer", image: "/image/about2.jpg", color: "bg-purple-600" },
  ];

  return (
    <section className="w-full bg-black text-white py-16 md:py-24 px-4 md:px-8 overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        {/* Mobile View - Stack */}
        <div className="lg:hidden">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              DesGro
              <br />
              <span className="text-5xl md:text-6xl">Growth</span>
              <br />
              <span className="text-5xl md:text-6xl">Squad</span>
            </h1>
            <div className="mt-6 w-1 h-20 bg-white/30" />
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className={`relative overflow-hidden ${member.color} aspect-[3/4] group cursor-pointer`}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <p className="text-white text-xs font-bold uppercase tracking-wider">
                    {member.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop View - Masonry Layout */}
        <div className="hidden lg:flex gap-6 items-start justify-center">
          {/* Column 1 - Title + 2 images */}
          <div className="flex-shrink-0 w-[240px]">
            <div className="mb-8">
              <h1 className="text-5xl font-bold leading-tight">
                Life
                
                <span className="text-6xl">At</span>
                <br />
                <span className="text-6xl">Digtel</span>
              </h1>
              <div className="mt-6 w-1 h-24 bg-white/30" />
            </div>

            <div className="flex flex-col gap-4">
              {/* Riyadmon */}
              <div
                className={`relative overflow-hidden ${teamMembers[0].color} h-[280px] group cursor-pointer transition-all duration-500 ${activeIndex === 0 ? 'scale-[1.02] z-20' : 'z-10'} ${activeIndex !== null && activeIndex !== 0 ? 'opacity-70' : 'opacity-100'}`}
                onMouseEnter={() => setActiveIndex(0)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                <img src={teamMembers[0].image} alt={teamMembers[0].name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white text-sm font-bold uppercase tracking-wider">{teamMembers[0].name}</p>
                </div>
              </div>

              {/* Shafeeq */}
              <div
                className={`relative overflow-hidden ${teamMembers[6].color} h-[240px] group cursor-pointer transition-all duration-500 ${activeIndex === 6 ? 'scale-[1.02] z-20' : 'z-10'} ${activeIndex !== null && activeIndex !== 6 ? 'opacity-70' : 'opacity-100'}`}
                onMouseEnter={() => setActiveIndex(6)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                <img src={teamMembers[6].image} alt={teamMembers[6].name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white text-sm font-bold uppercase tracking-wider">{teamMembers[6].name}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2 - 3 images */}
          <div className="flex-shrink-0 w-[200px]">
            <div className="flex flex-col gap-4">
              {/* Sheha */}
              <div
                className={`relative overflow-hidden ${teamMembers[1].color} h-[180px] group cursor-pointer transition-all duration-500 ${activeIndex === 1 ? 'scale-[1.02] z-20' : 'z-10'} ${activeIndex !== null && activeIndex !== 1 ? 'opacity-70' : 'opacity-100'}`}
                onMouseEnter={() => setActiveIndex(1)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                <img src={teamMembers[1].image} alt={teamMembers[1].name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white text-sm font-bold uppercase tracking-wider">{teamMembers[1].name}</p>
                </div>
              </div>

              {/* Jishnu */}
              <div
                className={`relative overflow-hidden ${teamMembers[3].color} h-[280px] group cursor-pointer transition-all duration-500 ${activeIndex === 3 ? 'scale-[1.02] z-20' : 'z-10'} ${activeIndex !== null && activeIndex !== 3 ? 'opacity-70' : 'opacity-100'}`}
                onMouseEnter={() => setActiveIndex(3)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                <img src={teamMembers[3].image} alt={teamMembers[3].name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white text-sm font-bold uppercase tracking-wider">{teamMembers[3].name}</p>
                </div>
              </div>

              {/* Anna */}
              <div
                className={`relative overflow-hidden ${teamMembers[7].color} h-[160px] group cursor-pointer transition-all duration-500 ${activeIndex === 7 ? 'scale-[1.02] z-20' : 'z-10'} ${activeIndex !== null && activeIndex !== 7 ? 'opacity-70' : 'opacity-100'}`}
                onMouseEnter={() => setActiveIndex(7)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                <img src={teamMembers[7].image} alt={teamMembers[7].name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white text-sm font-bold uppercase tracking-wider">{teamMembers[7].name}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3 - 2 images */}
          <div className="flex-shrink-0 w-[220px]">
            <div className="flex flex-col gap-4">
              {/* Thahseena */}
              <div
                className={`relative overflow-hidden ${teamMembers[2].color} h-[380px] group cursor-pointer transition-all duration-500 ${activeIndex === 2 ? 'scale-[1.02] z-20' : 'z-10'} ${activeIndex !== null && activeIndex !== 2 ? 'opacity-70' : 'opacity-100'}`}
                onMouseEnter={() => setActiveIndex(2)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                <img src={teamMembers[2].image} alt={teamMembers[2].name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white text-sm font-bold uppercase tracking-wider">{teamMembers[2].name}</p>
                </div>
              </div>

              {/* Deen */}
              <div
                className={`relative overflow-hidden ${teamMembers[8].color} h-[240px] group cursor-pointer transition-all duration-500 ${activeIndex === 8 ? 'scale-[1.02] z-20' : 'z-10'} ${activeIndex !== null && activeIndex !== 8 ? 'opacity-70' : 'opacity-100'}`}
                onMouseEnter={() => setActiveIndex(8)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                <img src={teamMembers[8].image} alt={teamMembers[8].name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white text-sm font-bold uppercase tracking-wider">{teamMembers[8].name}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4 - 2 images with offset */}
          <div className="flex-shrink-0 w-[200px]">
            <div className="flex flex-col gap-4 pt-32">
              {/* Rithul */}
              <div
                className={`relative overflow-hidden ${teamMembers[4].color} h-[240px] group cursor-pointer transition-all duration-500 ${activeIndex === 4 ? 'scale-[1.02] z-20' : 'z-10'} ${activeIndex !== null && activeIndex !== 4 ? 'opacity-70' : 'opacity-100'}`}
                onMouseEnter={() => setActiveIndex(4)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                <img src={teamMembers[4].image} alt={teamMembers[4].name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white text-sm font-bold uppercase tracking-wider">{teamMembers[4].name}</p>
                </div>
              </div>

              {/* Razeen */}
              <div
                className={`relative overflow-hidden ${teamMembers[5].color} h-[160px] group cursor-pointer transition-all duration-500 ${activeIndex === 5 ? 'scale-[1.02] z-20' : 'z-10'} ${activeIndex !== null && activeIndex !== 5 ? 'opacity-70' : 'opacity-100'}`}
                onMouseEnter={() => setActiveIndex(5)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                <img src={teamMembers[5].image} alt={teamMembers[5].name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white text-sm font-bold uppercase tracking-wider">{teamMembers[5].name}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifeAtDigtelSection;