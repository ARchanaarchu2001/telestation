// src/components/careers/CareersOpenings.jsx
import React, { useEffect, useMemo, useState } from "react";
import ReactDOM from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import CareersForm from "./CareerFrom";

const COMPANY_LOCATION = "Calicut, Kerala";

const JOBS = [
  {
    id: 1,
    title: "Business Development Executive (B2B)",
    type: "Onsite",
    location: COMPANY_LOCATION,
  },
  {
    id: 2,
    title: "Business Development Executive (B2C)",
    type: "Onsite",
    location: COMPANY_LOCATION,
  },
];

function JobCard({ job, onApply }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5 }}
      className="
        group rounded-2xl border border-black/10 bg-white
        p-5 sm:p-6 md:p-7 lg:p-8
        shadow-[0_25px_80px_-60px_rgba(0,0,0,0.35)]
      "
    >
      {/* ✅ stack on mobile, row on sm+ */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-6">
        <div className="min-w-0">
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold tracking-tight text-black leading-tight">
            {job.title}
          </h3>
          <p className="mt-2 text-xs sm:text-sm md:text-base text-black/55">
            {job.location}
          </p>
        </div>

        <span className="shrink-0 text-xs sm:text-sm font-semibold text-black/80 rounded-full border border-black/10 px-3 py-1 self-start">
          {job.type}
        </span>
      </div>

      {/* ✅ full width button on mobile */}
      <button
        onClick={onApply}
        className="
          mt-6 sm:mt-8 md:mt-10
          w-full sm:w-auto
          inline-flex items-center justify-center gap-3
          rounded-xl
          border border-black/20
          px-6 sm:px-8 md:px-10
          py-3 sm:py-3.5 md:py-4
          text-sm sm:text-base font-semibold text-black
          transition-all duration-200
          hover:border-black/60 hover:bg-black hover:text-white
          active:scale-[0.99]
        "
      >
        Apply
        <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
      </button>
    </motion.div>
  );
}

function ModalShell({ open, onClose, title, children }) {
  // ✅ lock body scroll
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  if (typeof window === "undefined") return null;

  return ReactDOM.createPortal(
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-[9998] bg-black/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Center wrapper */}
          <motion.div
            className="fixed inset-0 z-[9999] grid place-items-center p-3 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          >
            {/* ✅ Panel: full height on small screens, centered on desktop */}
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ y: 22, scale: 0.98, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 22, scale: 0.98, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="
                w-full
                max-w-[980px]
                rounded-2xl sm:rounded-3xl
                border border-white/10 bg-black
                shadow-2xl overflow-hidden
                max-h-[92svh]
                flex flex-col
              "
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-3 p-4 sm:p-6 border-b border-white/10">
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm text-white/55">
                    Career Application
                  </p>
                  <h4 className="text-lg sm:text-2xl font-bold text-white truncate">
                    {title}
                  </h4>
                </div>

                <button
                  onClick={onClose}
                  className="
                    inline-flex h-10 w-10 sm:h-11 sm:w-11
                    items-center justify-center
                    rounded-xl
                    border border-white/15
                    bg-white/5 text-white
                    hover:bg-white/10
                  "
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6 overflow-auto">
                {children}
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}

export default function CareersOpenings() {
  const [open, setOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const modalTitle = useMemo(() => {
    if (!selectedJob) return "Apply Now";
    return `Apply for ${selectedJob.title}`;
  }, [selectedJob]);

  const handleApply = (job) => {
    setSelectedJob(job);
    setOpen(true);
  };

  const close = () => {
    setOpen(false);
    setSelectedJob(null);
  };

  return (
    <section id="openings" className="bg-black py-10 sm:py-12 md:py-16">
      <div className="mx-auto w-[min(1100px,92vw)] px-4 sm:px-0">
        <div className="mb-6 sm:mb-8 md:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Open Positions
          </h2>
          <p className="mt-2 sm:mt-3 text-sm sm:text-base text-white/60 max-w-2xl">
            Explore our current openings and apply in a minute.
          </p>
        </div>

        {/* ✅ responsive grid:
            1 col mobile, 2 cols sm+, 3 cols lg+
        */}
        <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {JOBS.map((job) => (
            <JobCard key={job.id} job={job} onApply={() => handleApply(job)} />
          ))}
        </div>

        <ModalShell open={open} onClose={close} title={modalTitle}>
          {selectedJob && (
            <div className="mb-4 sm:mb-5 rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <p className="text-white font-semibold">{selectedJob.title}</p>
                <span className="w-fit rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-white/80">
                  {selectedJob.type}
                </span>
              </div>
              <p className="mt-1 text-xs sm:text-sm text-white/60">
                {selectedJob.location}
              </p>
            </div>
          )}

          {/* ✅ important: modal variant removes double padding */}
          <CareersForm variant="modal" />
        </ModalShell>
      </div>
    </section>
  );
}
