// src/components/careers/CareersForm.jsx
import React, { useState } from "react";
import { Rocket, CheckCircle2, ArrowRight } from "lucide-react";

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

  // ✅ Only show card wrapper when used standalone
  const wrapperClass =
    variant === "modal"
      ? "w-full"
      : "bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl shadow-[#D9F70D]/5";

  return (
    <div className={wrapperClass}>
      {/* ✅ Hide header inside modal (optional) */}
      {variant !== "modal" && (
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 bg-[#D9F70D] rounded-2xl flex items-center justify-center">
            <Rocket className="w-6 h-6 text-black" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white">Apply Now</h2>
            <p className="text-gray-400 text-sm">Let's start your journey</p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 gap-4">
        <input
          name="fullName"
          onChange={handleChange}
          placeholder="Full Name"
          className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 outline-none focus:border-[#D9F70D]/60"
        />
        <input
          name="email"
          onChange={handleChange}
          placeholder="Email"
          className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 outline-none focus:border-[#D9F70D]/60"
        />
        <input
          name="phone"
          onChange={handleChange}
          placeholder="Phone"
          className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 outline-none focus:border-[#D9F70D]/60"
        />

        <label className="block border border-dashed border-[#D9F70D]/30 rounded-xl p-6 text-center cursor-pointer text-white/70 hover:bg-white/5 transition">
          {resume ? resume.name : "Click to upload resume"}
          <input
            type="file"
            onChange={(e) => setResume(e.target.files[0])}
            hidden
          />
        </label>

        <textarea
          name="coverLetter"
          onChange={handleChange}
          placeholder="Cover Letter"
          rows={4}
          className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 outline-none focus:border-[#D9F70D]/60"
        />

        <button
          onClick={handleSubmit}
          className={`w-full py-4 rounded-xl flex justify-center items-center gap-2 font-semibold transition ${
            submitted ? "bg-green-500 text-white" : "bg-[#D9F70D] text-black"
          }`}
        >
          {submitted ? <CheckCircle2 /> : <>Submit <ArrowRight /></>}
        </button>
      </div>
    </div>
  );
};

export default CareersForm;
