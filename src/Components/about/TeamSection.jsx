import React from "react";

const BRAND = {
  accent: "#37C6D9", // ✅ change this to your brand color
};

const team = [
  { name: "FUHAD ZENIN", role: "Team Lead", image: "/image/tl1.jpg" },
  { name: "ANANDHAN", role: "Team Lead", image: "/image/tl2.png" },
  { name: "VIMAL", role: "Team Lead", image: "/image/tl3.png" },
  { name: "ANITA", role: "Team Lead", image: "/image/tl4.jpeg" },
   { name: "ZAINAB", role: "Team Lead", image: "/image/tl5.jpeg" },
  { name: "LUFNA NASRIN T", role: "Senior Developer", image: "/image/developer1.jpeg" },
  { name: "ASHIK ", role: "Developer", image: "/image/developer2.jpeg" },
  { name: "ARCHANA C", role: "Developer", image: "image/developer3.jpeg" },
 
];

const TeamSection = () => {
  return (
    <section className="w-full bg-black py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block">
            <span
              className="text-md font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full border"
              style={{
                color: BRAND.accent,
                backgroundColor: `${BRAND.accent}1A`, // ~10%
                borderColor: `${BRAND.accent}33`,     // ~20%
              }}
            >
              Our Team
            </span>
          </div>

          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Meet the creative minds driving innovation and excellence
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

          {team.map((member, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              style={{
                boxShadow: "0 0 0 rgba(0,0,0,0)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${BRAND.accent}55`;
                e.currentTarget.style.boxShadow = `0 25px 60px ${BRAND.accent}22`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.10)";
                e.currentTarget.style.boxShadow = "0 0 0 rgba(0,0,0,0)";
              }}
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden bg-gradient-to-br from-white/10 to-white/5">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  loading="lazy"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                {/* Hover Glow (brand) */}
                <div
                  className="absolute inset-0 bg-gradient-to-t to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ from: `${BRAND.accent}33` }}
                />
                {/* Tailwind can't read dynamic "from", so do this instead: */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(to top, ${BRAND.accent}33, transparent)`,
                  }}
                />
              </div>

              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-0 group-hover:-translate-y-2 transition-transform duration-500">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white uppercase tracking-wide">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium" style={{ color: BRAND.accent }}>
                    {member.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <a
            href="/contact"
            className="px-8 py-4 font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            style={{
              backgroundColor: BRAND.accent,
              color: "#000",
              boxShadow: `0 22px 55px ${BRAND.accent}33`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = `0 28px 70px ${BRAND.accent}44`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = `0 22px 55px ${BRAND.accent}33`;
            }}
          >
            Join Our Team
          </a>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
