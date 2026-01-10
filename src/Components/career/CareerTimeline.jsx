const process = [
  { step: "01", title: "Apply", desc: "Submit your application" },
  { step: "02", title: "Review", desc: "We review your profile" },
  { step: "03", title: "Interview", desc: "Meet the team" },
  { step: "04", title: "Offer", desc: "Join us!" },
];

const CareersTimeline = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 pb-20 relative">
      <h3 className="text-3xl md:text-4xl font-bold text-center mb-20">
        Our Hiring Process
      </h3>

      {/* Horizontal Line */}
      <div className="hidden md:block absolute top-[105px] left-1/2 -translate-x-1/2 w-[75%] h-[3px] bg-gradient-to-r from-[#D9F70D]/0 via-[#D9F70D] to-[#D9F70D]/0 rounded-full"></div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
        {process.map((item, i) => (
          <div key={i} className="relative text-center">
            
            {/* Connector Dot */}
            <div className="relative z-10 flex justify-center">
              <div className="w-16 h-16 bg-[#D9F70D] rounded-xl flex items-center justify-center text-black text-xl font-bold shadow-lg shadow-[#D9F70D]/40">
                {item.step}
              </div>
            </div>

            {/* Title & description */}
            <h4 className="text-lg font-semibold mt-4">{item.title}</h4>
            <p className="text-sm text-gray-400 mt-1">{item.desc}</p>

            {/* Vertical line for mobile */}
            {i < process.length - 1 && (
              <div className="md:hidden h-10 w-1 bg-[#D9F70D]/40 mx-auto mt-6 rounded-full"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareersTimeline;
