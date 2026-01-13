import React, { useState } from "react";
import { Rocket, CheckCircle2, ArrowRight } from "lucide-react";

const BRAND = {
  accent: "#6EF1F7",
  primary: "#1353CD",
  secondary: "#007399",
};

const CareersForm = ({ variant = "card" }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    experience: "",
    coverLetter: "",
  });

  const [resume, setResume] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!resume) return alert("Please upload your resume!");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const wrapperClass =
    variant === "modal"
      ? "w-full"
      : `
        bg-white/5 border border-white/10 rounded-3xl
        p-5 sm:p-7 md:p-10 lg:p-12
        shadow-2xl
      `;

  const inputBase =
    "w-full rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 outline-none transition";
  const inputPad = "px-4 py-3 sm:px-5 sm:py-4";
  const labelPad = "p-5 sm:p-6";
  const focusRing =
    "focus:border-transparent focus:ring-2 focus:ring-[rgba(110,241,247,0.45)]";

  return (
    <div
      className={wrapperClass}
      style={
        variant === "modal"
          ? undefined
          : { boxShadow: `0 25px 80px -60px ${BRAND.primary}` }
      }
    >
      {variant !== "modal" && (
        <div className="flex items-start sm:items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
          <div
            className="shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center"
            style={{ backgroundColor: BRAND.accent }}
          >
            <Rocket className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
          </div>

          <div className="min-w-0">
            <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
              Apply Now
            </h2>
            <p className="text-white/60 text-xs sm:text-sm mt-1">
              Let's start your journey
            </p>
          </div>
        </div>
      )}

      {/* ✅ Responsive grid:
          - 1 col on mobile
          - 2 cols from md and up
          - Resume + CoverLetter span full width
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
        <input
          name="fullName"
          onChange={handleChange}
          placeholder="Full Name"
          className={`${inputBase} ${inputPad} ${focusRing}`}
          onFocus={(e) =>
            (e.currentTarget.style.borderColor = `${BRAND.accent}99`)
          }
          onBlur={(e) =>
            (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")
          }
        />

        <input
          name="email"
          onChange={handleChange}
          placeholder="Email"
          className={`${inputBase} ${inputPad} ${focusRing}`}
          onFocus={(e) =>
            (e.currentTarget.style.borderColor = `${BRAND.accent}99`)
          }
          onBlur={(e) =>
            (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")
          }
        />

        <input
          name="phone"
          onChange={handleChange}
          placeholder="Phone"
          className={`${inputBase} ${inputPad} ${focusRing}`}
          onFocus={(e) =>
            (e.currentTarget.style.borderColor = `${BRAND.accent}99`)
          }
          onBlur={(e) =>
            (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")
          }
        />

        <input
          name="experience"
          onChange={handleChange}
          placeholder="Experience (e.g., 2 years)"
          className={`${inputBase} ${inputPad} ${focusRing}`}
          onFocus={(e) =>
            (e.currentTarget.style.borderColor = `${BRAND.accent}99`)
          }
          onBlur={(e) =>
            (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")
          }
        />

        {/* Resume upload (full width) */}
        <label
          className={`md:col-span-2 block border border-dashed rounded-xl ${labelPad} text-center cursor-pointer text-white/70 hover:bg-white/5 transition`}
          style={{ borderColor: `${BRAND.accent}55` }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
            <span className="font-medium">
              {resume ? resume.name : "Click to upload resume"}
            </span>
            {!resume && (
              <span className="text-xs text-white/45">
                (PDF/DOC, max recommended 5MB)
              </span>
            )}
          </div>
          <input
            type="file"
            onChange={(e) => setResume(e.target.files[0])}
            hidden
          />
        </label>

        {/* Cover letter (full width) */}
        <textarea
          name="coverLetter"
          onChange={handleChange}
          placeholder="Cover Letter"
          rows={4}
          className={`${inputBase} ${inputPad} ${focusRing} md:col-span-2 resize-y`}
          onFocus={(e) =>
            (e.currentTarget.style.borderColor = `${BRAND.accent}99`)
          }
          onBlur={(e) =>
            (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")
          }
        />

        {/* Button (full width) */}
        <button
          onClick={handleSubmit}
          className="
            md:col-span-2
            w-full py-3.5 sm:py-4
            rounded-xl
            flex justify-center items-center gap-2
            font-semibold
            transition
            active:scale-[0.99]
          "
          style={{
            backgroundColor: submitted ? "#22c55e" : BRAND.accent,
            color: submitted ? "#fff" : "#000",
          }}
        >
          {submitted ? (
            <>
              <CheckCircle2 className="w-5 h-5" />
              Submitted
            </>
          ) : (
            <>
              Submit <ArrowRight className="w-5 h-5" />
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default CareersForm;
