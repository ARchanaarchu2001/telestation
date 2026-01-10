import React, { useMemo, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const BRAND = {
  primary: "#007399",
  accent: "#37C6D9",
};

const DEFAULT_SECTIONS = [
  {
    number: "01",
    title: "B2B Telecommunication",
    description:
      "We generate targeted leads and qualify prospects with a personalized approach—building stronger relationships and long-term brand awareness.",
    image: "/image/about1.jpg",
    tags: ["Lead gen", "Qualification", "Follow-ups"],
    color: "#EAF6FA",
  },
  {
    number: "02",
    title: "B2C Telecommunication",
    description:
      "We build customer relationships through personal interaction—understanding challenges and presenting targeted offers that drive measurable outcomes.",
    image: "/image/about2.jpg",
    tags: ["Customer care", "Offers", "Retention"],
    color: "#E6F9FC",
  },
  {
    number: "03",
    title: "Inbound Telemarketing",
    description:
      "When customers reach out, we respond with speed, clarity, and a human-first approach—converting inbound interest into trust and retention.",
    image: "/image/about3.jpg",
    tags: ["Inbound", "Support", "Upsell"],
    color: "#EAF2FF",
  },
  {
    number: "04",
    title: "Outbound Telemarketing",
    description:
      "We proactively connect with prospects using a tactical outreach process—improving conversions while keeping customer experience at the center.",
    image: "/image/about1.jpg",
    tags: ["Outbound", "Conversion", "Insights"],
    color: "#E8F7FF",
  },
  {
    number: "05",
    title: "Cold Calling",
    description:
      "Cold calling connects your brand with potential customers who haven't shown prior interest—turning first conversations into real opportunities.",
    image: "/image/about2.jpg",
    tags: ["Prospecting", "Scripts", "Qualification"],
    color: "#EAFBFF",
  },
  {
    number: "06",
    title: "Consulting Service",
    description:
      "Telestation delivers end-to-end consulting with action plans, assessments, and roadmaps to run call center operations smoothly.",
    image: "/image/about3.jpg",
    tags: ["Assessments", "Roadmaps", "Optimization"],
    color: "#F0FAFF",
  },
  {
    number: "07",
    title: "Product Support",
    description:
      "We maximize customer satisfaction with multi-channel support and empathetic communication—building trust and long-term retention.",
    image: "/image/about1.jpg",
    tags: ["Support", "Multi-channel", "Retention"],
    color: "#E9F7F5",
  },
  {
    number: "08",
    title: "Direct Sale",
    description:
      "We help you sell virtually through structured conversations, instant feedback, and tailored messaging—driving higher conversions.",
    image: "/image/about2.jpg",
    tags: ["Conversion", "Feedback", "Sales enablement"],
    color: "#EAF4F9",
  }
];

function StackingCard({ item, index, total, scrollYProgress }) {
  const cardRef = useRef(null);

  const targetScale = 1 - (total - 1 - index) * 0.05;
  const scaleRange = [index / total, (index + 1) / total];

  const scale = useTransform(scrollYProgress, scaleRange, [1, targetScale]);

  return (
    <div
      ref={cardRef}
      className="sticky top-0 h-screen flex items-center justify-center"
      style={{ top: `${index * 20}px` }}
    >
      <motion.div
        style={{
          scale,
          backgroundColor: item.color,
        }}
        className="
          w-[min(1150px,92vw)]
          rounded-[36px]
          border border-black/10
          shadow-[0_40px_120px_rgba(0,0,0,0.12)]
          overflow-hidden
          origin-top
        "
      >
        <div className="grid lg:grid-cols-2 gap-10 p-7 sm:p-10 lg:p-12">
          {/* LEFT */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-14 w-14 rounded-2xl flex items-center justify-center border border-black/10 bg-white/70">
                  <span className="text-xl font-bold text-black">
                    {item.number}
                  </span>
                </div>

                <div className="h-px w-16 bg-black/10" />
                <span className="text-sm font-semibold tracking-wider uppercase text-black/40">
                  Telestation
                </span>
              </div>

              <h3 className="text-4xl sm:text-5xl font-semibold tracking-tight text-black leading-[1.05]">
                {item.title}
              </h3>

              <p className="mt-5 text-lg sm:text-xl leading-relaxed text-black/70 max-w-[56ch]">
                {item.description}
              </p>

              {!!item.tags?.length && (
                <div className="mt-7 flex flex-wrap gap-2.5">
                  {item.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm text-black/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <button
                className="px-7 py-3.5 rounded-full text-white font-semibold shadow-sm transition hover:opacity-90"
                style={{ backgroundColor: BRAND.primary }}
              >
                Explore
              </button>

              <button className="px-7 py-3.5 rounded-full font-semibold border border-black/10 bg-white/70 text-black hover:bg-white transition">
                Learn more
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden border border-black/10 bg-white shadow-[0_30px_90px_rgba(0,0,0,0.10)]">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full aspect-[4/3] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
            </div>

            <div
              className="absolute -z-10 -top-10 -right-10 h-44 w-44 rounded-full blur-3xl"
              style={{ backgroundColor: `${BRAND.accent}22` }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}









function BottomSection() {
  return (
    <section className="bg-white py-14">
      <div className="mx-auto w-[min(1150px,92vw)]">
        <div className="rounded-3xl border border-black/10 bg-white shadow-[0_20px_70px_rgba(0,0,0,0.08)] p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
          <div>
            <p className="text-sm font-semibold tracking-wider uppercase text-black/40">
              Telestation
            </p>
            <h3 className="mt-1 text-2xl sm:text-3xl font-semibold text-black">
              Ready to scale your sales?
            </h3>
            <p className="mt-2 text-black/60">
              Let’s plan a strategy that improves conversions and customer trust.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              className="px-6 py-3 rounded-full text-white font-semibold hover:opacity-90 transition"
              style={{ backgroundColor: BRAND.primary }}
            >
              Get started
            </button>
            <button className="px-6 py-3 rounded-full font-semibold border border-black/10 bg-white text-black hover:bg-black/5 transition">
              Contact us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}


export default function PremiumServicesAlt({ sections }) {
  const data = useMemo(
    () => (sections?.length ? sections : DEFAULT_SECTIONS),
    [sections]
  );
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={containerRef} className="relative w-full bg-white">
      {/* STACK */}
      <div style={{ height: `${data.length * 120}vh` }}>
        {data.map((item, i) => (
          <StackingCard
            key={`${item.number}-${i}`}
            item={item}
            index={i}
            total={data.length}
            scrollYProgress={scrollYProgress}
          />
        ))}
      </div>

      {/* ✅ BOTTOM SECTION */}
      <BottomSection />
    </section>
  );
}
