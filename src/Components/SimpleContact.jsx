import React, { useState } from "react";
import { motion } from "framer-motion";

const BRAND = {
  primary: "#007399",
  accent: "#37C6D9",
};

export default function SimpleContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
    setError("");
  };

  const submit = async (e) => {
    e.preventDefault();
    setDone(false);

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Please fill all fields.");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      setError("Please enter a valid email.");
      return;
    }

    try {
      setSending(true);
      // ✅ Replace this with API/EmailJS later
      await new Promise((r) => setTimeout(r, 900));
      setDone(true);
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="bg-white py-16">
      <div className="mx-auto w-[min(720px,92vw)]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl border border-black/10 bg-white shadow-[0_30px_90px_rgba(0,0,0,0.10)]"
        >
          {/* subtle glow */}
          <div
            className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full blur-3xl"
            style={{ backgroundColor: `${BRAND.accent}22` }}
          />

          <div className="p-7 sm:p-10">
            <p className="text-sm font-semibold tracking-wider uppercase text-black/40">
              Contact
            </p>

            <h2 className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight text-black">
              Let’s talk
            </h2>

            <p className="mt-3 text-black/60">
              Send us a message and we’ll get back to you soon.
            </p>

            <form onSubmit={submit} className="mt-8 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  placeholder="Your name"
                  className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none focus:border-black/20"
                />
                <input
                  name="email"
                  value={form.email}
                  onChange={onChange}
                  placeholder="Email address"
                  className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none focus:border-black/20"
                />
              </div>

              <textarea
                name="message"
                value={form.message}
                onChange={onChange}
                placeholder="Your message"
                rows={5}
                className="w-full resize-none rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none focus:border-black/20"
              />

              {error ? (
                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-red-600"
                >
                  {error}
                </motion.p>
              ) : null}

              <div className="flex items-center justify-center gap-3">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={sending}
                  type="submit"
                  className="rounded-full px-7 py-3.5 font-semibold text-white shadow-sm disabled:opacity-60 "
                  style={{ backgroundColor: BRAND.primary }}
                >
                  {sending ? "Sending..." : "Send message"}
                </motion.button>

                {done ? (
                  <motion.span
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-sm font-semibold"
                    style={{ color: BRAND.primary }}
                  >
                    ✅ Sent successfully!
                  </motion.span>
                ) : (
                  <span className="text-sm text-black/50"></span>
                )}
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
