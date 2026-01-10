"use client";

import { useState } from "react";
import { FaInstagram, FaFacebookF, FaLinkedin } from "react-icons/fa6";

const FOOTER_CONTENT = {
  top: {
    titleLine1: "Let's Work",
    titleLine2: "Together",
    subtitle: "Ready to create something extraordinary?",
    cta: {
      label: "Start Project",
      whatsappNumber: "971503535409",
      message: "I want to know about your service",
    },
  },

  links: [
    {
      category: "Services",
      items: [
        { label: "Web Design", href: "/website" },
        { label: "Video Graphy", href: "/video-graphy" },
        { label: "SEO", href: "/seo" },
      ],
    },
    {
      category: "Company",
      items: [
        { label: "About", href: "/about" },
        { label: "Careers", href: "/career" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      category: "Social",
      items: [
        { label: "Facebook", href: "https://www.facebook.com/", key: "facebook" },
        { label: "Instagram", href: "https://www.instagram.com/digtel.ae/", key: "instagram" },
        { label: "Linkedin", href: "https://www.linkedin.com/company/digtel/", key: "linkedIn" },
      ],
    },
  ],

  newsletter: {
    title: "Stay Updated",
    subtitle: "Get insights and updates directly to your inbox.",
    inputPlaceholder: "Enter your email",
    buttonLabel: "Subscribe",
    whatsappNumber: "971503535409",
  },
};

const SocialReactIcon = ({ type }) => {
  const cls = "text-[18px]";
  if (type === "instagram") return <FaInstagram className={cls} />;
  if (type === "facebook") return <FaFacebookF className={cls} />;
  if (type === "linkedIn") return <FaLinkedin className={cls} />;
  return <FaXTwitter className={cls} />;
};

export default function Footer() {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [email, setEmail] = useState("");

  const c = FOOTER_CONTENT;

  const handleSubscribe = () => {
    if (!email || !email.includes("@")) {
      alert("Please enter a valid email address");
      return;
    }
    const message = encodeURIComponent(`New newsletter subscription:\nEmail: ${email}`);
    window.open(`https://wa.me/${c.newsletter.whatsappNumber}?text=${message}`, "_blank");
    setEmail("");
  };

  const startProjectLink = `https://wa.me/${c.top.cta.whatsappNumber}?text=${encodeURIComponent(
    c.top.cta.message
  )}`;

  const services = c.links.find((g) => g.category === "Services");
  const company = c.links.find((g) => g.category === "Company");
  const social = c.links.find((g) => g.category === "Social");

  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div
          className="absolute top-10 left-1/4 w-56 h-56 sm:w-64 sm:h-64 rounded-full blur-3xl animate-pulse"
          style={{ background: "#D9F70D" }}
        />
        <div
          className="absolute bottom-10 right-1/4 w-56 h-56 sm:w-64 sm:h-64 rounded-full blur-3xl animate-pulse"
          style={{ background: "#D9F70D", animationDelay: "1s" }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        {/* Top section */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between mb-10 sm:mb-12 pb-8 sm:pb-10 border-b border-white/10">
          <div className="min-w-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 leading-tight">
              {c.top.titleLine1}
              <br />
              <span className="inline-block" style={{ color: "#D9F70D" }}>
                {c.top.titleLine2}
              </span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-md">{c.top.subtitle}</p>
          </div>

          <a
            href={startProjectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex w-full md:w-auto items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold overflow-hidden transition-all duration-300 md:hover:scale-105 border-2 rounded-full"
            style={{ borderColor: "#D9F70D", color: "#D9F70D" }}
          >
            <span className="relative z-10 group-hover:text-black transition-colors duration-300">
              {c.top.cta.label}
            </span>
            <div
              className="absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
              style={{ background: "#D9F70D" }}
            />
          </a>
        </div>

        {/* 3 columns */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 mb-10 sm:mb-12 text-center sm:text-left">
          {/* Services */}
          <div className="sm:justify-self-start">
            <h3 className="text-xs font-semibold tracking-wider uppercase text-gray-500 mb-3">
              {services.category}
            </h3>
            <ul className="space-y-2">
              {services.items.map((item, idx) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-300 relative inline-block"
                    onMouseEnter={() => setHoveredLink(`Services-${idx}`)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    <span className="relative">
                      {item.label}
                      <span
                        className={`absolute -bottom-1 left-0 w-full h-px transform origin-left transition-transform duration-300 ${
                          hoveredLink === `Services-${idx}` ? "scale-x-100" : "scale-x-0"
                        }`}
                        style={{ background: "#D9F70D" }}
                      />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="sm:justify-self-center">
            <h3 className="text-xs font-semibold tracking-wider uppercase text-gray-500 mb-3">
              {company.category}
            </h3>
            <ul className="space-y-2">
              {company.items.map((item, idx) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-300 relative inline-block"
                    onMouseEnter={() => setHoveredLink(`Company-${idx}`)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    <span className="relative">
                      {item.label}
                      <span
                        className={`absolute -bottom-1 left-0 w-full h-px transform origin-left transition-transform duration-300 ${
                          hoveredLink === `Company-${idx}` ? "scale-x-100" : "scale-x-0"
                        }`}
                        style={{ background: "#D9F70D" }}
                      />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="sm:justify-self-end">
            <h3 className="text-xs font-semibold tracking-wider uppercase text-gray-500 mb-3 text-center sm:text-left">
              {social.category}
            </h3>

            <div className="flex items-center justify-center sm:justify-start gap-3">
              {social.items.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200/70 transition hover:border-[#D9F70D]/30 hover:text-white"
                >
                  <span className="transition-transform duration-300 group-hover:scale-110">
                    <SocialReactIcon type={item.key} />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter section */}
        <div className="mb-6 sm:mb-10 pb-8 sm:pb-10 border-b border-white/10">
          <div className="mx-auto w-full max-w-xl text-center">
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{c.newsletter.title}</h3>
            <p className="text-gray-400 text-sm sm:text-base mb-4">{c.newsletter.subtitle}</p>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={c.newsletter.inputPlaceholder}
                className="w-full flex-1 px-4 py-2.5 bg-white/5 border border-white/10 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-white/30 transition-colors duration-300 rounded-md"
              />
              <button
                type="button"
                onClick={handleSubscribe}
                className="w-full sm:w-auto px-6 py-2.5 font-semibold transition-all duration-300 sm:hover:scale-105 hover:shadow-lg text-black rounded-md"
                style={{ background: "#D9F70D", boxShadow: "0 0 20px rgba(217, 247, 13, 0.3)" }}
              >
                {c.newsletter.buttonLabel}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar (optional) */}
        {/* <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} DIGTEL. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a className="hover:text-white transition" href="/privacy">
              Privacy
            </a>
            <a className="hover:text-white transition" href="/terms">
              Terms
            </a>
          </div>
        </div> */}
      </div>
    </footer>
  );
}
