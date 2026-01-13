import React from "react";
import { motion } from "framer-motion";

const BRAND = { accent: "#37C6D9" };
const EASE = [0.22, 1, 0.36, 1];

/* ✅ EDIT ONLY THIS DATA */
const AWARDS_DATA = {
  employeeOfMonth: [
    {
      category: "Consumer",
      month: "December 2025",
      name: "SHAHANAS",
      image: "/image/employee1.jpeg",
    },
    {
      category: "du",
      month: "December 2025",
      name: "AJAL BABU",
      image: "/image/employee2.jpeg",
    },
    {
      category: "Etisalat",
      month: "December 2025",
      name: "MUNNAWARA",
      image: "/image/employee3.jpeg",
    },
    {
      category: "Digtel",
      month: "December 2025",
      name: "ANITA",
      image: "/image/employee4.jpeg",
    },
  ],

  topPerformers: [
    { name: "Fuhad Zenin", image: "/image/tl1.jpg" },
    { name: "Anandhan", image: "/image/tl2.jpg" },
  ],
};

export default function AwardsImageCards() {
  const employeeList = AWARDS_DATA.employeeOfMonth || [];
  const performers = AWARDS_DATA.topPerformers || [];

  return (
    <section className="min-h-screen bg-black text-white py-14 sm:py-16">
      <div className="mx-auto w-[min(1180px,92vw)]">
        {/* ✅ TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="my-6 text-center sm:text-left"
        >
          <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight uppercase flex justify-center sm:justify-start items-center">
            Employee of the Month
          </h2>
          <div className="mt-4 h-px w-full bg-white/10" />
        </motion.div>

        {/* ✅ 4 EMPLOYEE CARDS */}
        {employeeList.length ? (
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.08 }}
            className="mt-6"
          >
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {employeeList.map((p, idx) => (
                <ImageAwardCard
                  key={`${p.category}-${p.name}-${idx}`}
                  type="normal"
                  image={p.image}
                  alt={p.name || "Employee"}
                  meta={p.month}
                  name={p.name}
                  category={p.category}
                />
              ))}
            </div>
          </motion.div>
        ) : null}

        {/* ✅ TITLE: Top Performers */}
        {performers.length ? (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.18 }}
            className="mt-12 text-center sm:text-left"
          >
            <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight uppercase flex justify-center sm:justify-start items-center">
              Top Performers
            </h2>
            <div className="mt-4 h-px w-full bg-white/10" />
          </motion.div>
        ) : null}

        {/* ✅ Top Performers grid */}
        {performers.length ? (
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.22 }}
            className="mt-6"
          >
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {performers.map((p, idx) => (
                <ImageAwardCard
                  key={p.name || p.image || idx}
                  type="normal"
                  image={p.image}
                  alt={p.name || "Top performer"}
                  name={p.name}
                  category="Top Performer"
                />
              ))}
            </div>
          </motion.div>
        ) : null}
      </div>
    </section>
  );
}

/* ✅ Animated Card Component */
function ImageAwardCard({ type = "normal", image, alt = "Award", meta, name, category }) {
  const isFeatured = type === "featured";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.5, ease: EASE }}
      className={[
        "group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-sm shadow-2xl",
        isFeatured ? "p-5 sm:p-7" : "p-4 sm:p-5",
      ].join(" ")}
    >
      {/* ✅ Category Badge */}
      {category && (
        <div className="absolute left-3 top-3 z-30">
          <span
            className="rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-wider"
            style={{
              borderColor: `${BRAND.accent}55`,
              color: BRAND.accent,
              backgroundColor: "rgba(0,0,0,0.55)",
              backdropFilter: "blur(10px)",
            }}
          >
            {category}
          </span>
        </div>
      )}

      {/* Month badge */}
      {meta && (
        <div className="absolute right-3 top-3 z-30">
          <span className="rounded-full border border-white/10 bg-black/60 px-3 py-1 text-[11px] text-white/70">
            {meta}
          </span>
        </div>
      )}

      {/* Image */}
      <div
        className={[
          "relative overflow-hidden rounded-xl border border-white/10",
          isFeatured ? "h-[420px] sm:h-[520px]" : "aspect-[4/3]",
        ].join(" ")}
      >
        <motion.img
          src={image}
          alt={alt}
          className="h-full w-full object-cover"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.7, ease: EASE }}
        />

        {/* Name */}
        {name && (
          <div className="absolute bottom-0 left-0 right-0 p-4 text-center bg-gradient-to-t from-black/80 via-black/30 to-transparent">
            <h3 className="text-lg sm:text-xl font-bold text-white">{name}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}
