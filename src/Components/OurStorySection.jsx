import React from "react";
import { motion } from "framer-motion";
import ColorBrushText from "./ColorBrushText";
import ColorBrushWiggleText from "./ColorBrushWiggleText";
import ColorBrushLetterWiggleText from "./ColorBrushWiggleText";
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
    paragraph: `We live in a world that never stands still—technology evolves, businesses transform, and audiences demand more every day. As a marketing agency, IT solutions partner, and production house, we exist to help brands move confidently into that future. We combine creativity with technology, ideas with execution, and vision with measurable growth. It’s not about preparing for tomorrow—we design it, power it, and bring it to life. With Digtel, your next chapter begins, and together, we shape what comes after.`,
  },
}) {
  return (
    <section className="w-full bg-black text-white ">
      <div className="mx-auto w-[min(1180px,92vw)]">
       

        <TeleHeroHeading/>

        {/* Paragraph (standard size + subtle hover drift) */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.85, ease: EASE, delay: 0.12 }}
          whileHover={{ x: [0, -1, 1, -0.6, 0] }}
          className="
            mt-3 max-w-[120ch] pt-2
            text-base sm:text-lg md:text-xl
            leading-relaxed md:leading-[1.8]
            text-white/75
          "
        >
           <ColorBrushText
            text={data.paragraph}
            baseColor="rgba(255,255,255,0.78)"
            palette={HOVER_PALETTE}
            neighbor={1}
            className="
              text-white/80
              text-2xl sm:text-3xl
              leading-[1.9]
              font-light cursor-pointer
            "
          />
       
        </motion.p>
      </div>
    </section>
  );
}
