import { Zap, Heart, Rocket, Sparkles } from "lucide-react";

const perks = [
  { icon: <Zap />, text: "Fast-paced growth" },
  { icon: <Heart />, text: "Work-life balance" },
  { icon: <Rocket />, text: "Innovation driven" },
  { icon: <Sparkles />, text: "Creative freedom" },
];

const CareersPerks = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-16 animate-fadeIn delay-500">
      {perks.map((perk, i) => (
        <div
          key={i}
          className="bg-white/5 border border-white/10 rounded-2xl p-4 hover:bg-[#D9F70D]/5 hover:border-[#D9F70D]/30 hover:scale-105 transition-all duration-300"
        >
          <div className="text-[#D9F70D] mb-2">{perk.icon}</div>
          <p className="text-sm font-medium">{perk.text}</p>
        </div>
      ))}
    </div>
  );
};

export default CareersPerks;
