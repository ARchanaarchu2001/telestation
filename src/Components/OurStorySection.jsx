import React from "react";
import { motion } from "framer-motion";
import ColorBrushText from "./ColorBrushText";
import TeleHeroHeading from "./TeleHeroHeading";

const EASE = [0.22, 1, 0.36, 1];
const HOVER_PALETTE = ["#A78BFA", "#22D3EE", "#F472B6", "#FBBF24"];

export default function OurStoryTextBlock({
  data = {
    eyebrow: "Our Story",
    heading: {
      before: "Turning conversations into",
      highlight: "business opportunities",
      after: ".",
    },
    paragraph: [
      "TSPL is a BPO service provider delivering end-to-end telecommunication operations and customer engagement solutions. We work closely with leading Middle East telecom providers such as du and Etisalat, supporting high-volume, performance-driven telecom programs with precision and reliability.",
      "We have special OSP license certified by Department Of Telecommunications to regulate our services, which sets us apart from the major telecom service providers in the market. TSPL services solve critical business challenges, optimize business efficiency, minimize time, and save operational costs.",
      "Approaching your potential clients in an organized and personalized methodology to market services and products is our number one priority. We market your services based on your business value by leveraging the latest technology",
    ],
  },
  className = "",
}) {
  return (
    <section className={`w-full bg-black text-white ${className}`}>
      <div className="mx-auto w-[min(1180px,92vw)] py-12 sm:py-16">
        {/* Your hero heading component */}
        <TeleHeroHeading />

        {/* Responsive paragraphs */}
        <div className="mt-6 sm:mt-8 space-y-5 sm:space-y-6 md:space-y-7 max-w-[68rem] mx-auto">
          {data.paragraph.map((para, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                duration: 0.85,
                ease: EASE,
                delay: 0.08 + idx * 0.08,
              }}
              className="text-white/75"
            >
              <ColorBrushText
                text={para}
                baseColor="rgba(255,255,255,0.78)"
                palette={HOVER_PALETTE}
                neighbor={1}
                className="
                  cursor-pointer font-light
                  text-[15px] leading-[1.75]
                  sm:text-lg sm:leading-[1.85]
                  md:text-xl md:leading-[1.9]
                  lg:text-[22px] lg:leading-[2]
                  text-white/80
                "
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
