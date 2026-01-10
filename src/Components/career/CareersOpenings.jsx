// src/components/careers/CareersOpenings.jsx
import React, { useEffect, useMemo, useState } from "react";
import ReactDOM from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import CareersForm from "./CareerFrom";

const COMPANY_LOCATION = "Abu Hail, Deira — Dubai";

const JOBS = [
  { id: 1, title: "Graphic Designer", type: "Onsite", location: COMPANY_LOCATION },
  { id: 2, title: "Video Editor", type: "Onsite", location: COMPANY_LOCATION },
  { id: 3, title: "Cinematographer", type: "Onsite", location: COMPANY_LOCATION },
  { id: 4, title: "Digital Marketing Executive", type: "Onsite", location: COMPANY_LOCATION },
  { id: 5, title: "Performance Marketing Executive", type: "Onsite", location: COMPANY_LOCATION },
  { id: 6, title: "Project Coordinator", type: "Onsite", location: COMPANY_LOCATION },
];


function JobCard({ job, onApply }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5 }}
      className="group rounded-2xl border border-black/10 bg-white p-8 shadow-[0_25px_80px_-60px_rgba(0,0,0,0.35)]"
    >
      <div className="flex items-start justify-between gap-6">
        <div className="min-w-0">
          <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-black leading-tight">
            {job.title}
          </h3>
          <p className="mt-2 text-sm md:text-base text-black/55">{job.location}</p>
        </div>
        <span className="shrink-0 text-sm font-semibold text-black/80">
          {job.type}
        </span>
      </div>

      <button
        onClick={onApply}
        className="mt-10 inline-flex items-center justify-center gap-3 border border-black/20 px-10 py-4 text-base font-semibold text-black transition-all duration-200 hover:border-black/60 hover:bg-black hover:text-white"
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
            className="fixed inset-0 z-[9999] grid place-items-center p-4 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          >
            {/* Panel */}
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ y: 22, scale: 0.98, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 22, scale: 0.98, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="w-full max-w-3xl rounded-3xl border border-white/10 bg-black shadow-2xl overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4 p-5 sm:p-6 border-b border-white/10">
                <div>
                  <p className="text-sm text-white/55">Career Application</p>
                  <h4 className="text-xl sm:text-2xl font-bold text-white">
                    {title}
                  </h4>
                </div>

                <button
                  onClick={onClose}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white hover:bg-white/10"
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6 max-h-[75vh] overflow-auto">
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
    <section id="openings" className="bg-black py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 md:mb-10">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Open Positions
          </h2>
          <p className="mt-3 text-white/60 max-w-2xl">
            Explore our current openings and apply in a minute.
          </p>
        </div>

        <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {JOBS.map((job) => (
            <JobCard key={job.id} job={job} onApply={() => handleApply(job)} />
          ))}
        </div>

        <ModalShell open={open} onClose={close} title={modalTitle}>
          {selectedJob && (
            <div className="mb-5 rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="text-white font-semibold">{selectedJob.title}</p>
                <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-white/80">
                  {selectedJob.type}
                </span>
              </div>
              <p className="mt-1 text-sm text-white/60">{selectedJob.location}</p>
            </div>
          )}

          {/* ✅ important: modal variant removes double padding */}
          <CareersForm variant="modal" />
        </ModalShell>
      </div>
    </section>
  );
}
