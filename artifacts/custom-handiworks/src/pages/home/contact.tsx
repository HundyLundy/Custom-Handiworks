import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import tableImg from "@assets/Image_3-21-26_at_11.04_PM_1774157549013.png";

const GHL_WEBHOOK = "https://services.leadconnectorhq.com/hooks/WO8ipaZDubipU34hUEA7/webhook-trigger/cda57822-76b1-4518-b6ef-a44e59a8c06c";

const serviceOptions = [
  "Custom Carpentry",
  "Custom Furniture",
  "Trim & Molding",
  "Door Installation",
  "Home Repairs",
  "Interior Renovations",
  "Other",
];

const trustBadges = [
  "Free Estimates",
  "Responds Within 1 Business Day",
  "No Surprise Charges",
];

const inputClass =
  "w-full rounded-lg bg-white/8 border border-white/15 text-white placeholder-white/30 px-4 py-3 text-sm focus:outline-none focus:border-[#41b75b]/60 focus:ring-1 focus:ring-[#41b75b]/40 transition-colors";
const labelClass = "block text-sm font-medium text-white/80 mb-1.5";

export function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    serviceNeeded: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch(GHL_WEBHOOK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          source: "custom-handiworks-website",
          division: "handiworks",
        }),
      });
      if (!res.ok) throw new Error("Non-2xx response");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-14 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl shadow-2xl shadow-black/10 overflow-hidden flex flex-col lg:flex-row border border-white/10 bg-[#0d1117]">

          {/* Form panel */}
          <div className="lg:w-3/5 p-8 md:p-14">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-3">
                Tell Us What You're Dealing With
              </h2>
              <p className="text-white/60 text-base mb-8 leading-relaxed">
                Most projects are assessed and scheduled within 48 hours. No long waitlists. No runaround. Just a straight answer on what it'll take and what it'll cost — before work begins.
              </p>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-4 mb-8">
                {trustBadges.map((badge) => (
                  <div key={badge} className="flex items-center gap-1.5 text-sm text-white/70">
                    <CheckCircle2 className="w-4 h-4 text-[#41b75b] shrink-0" />
                    <span>{badge}</span>
                  </div>
                ))}
              </div>

              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-start gap-3 rounded-xl bg-[#41b75b]/15 border border-[#41b75b]/30 px-6 py-5"
                >
                  <CheckCircle2 className="w-6 h-6 text-[#41b75b] shrink-0 mt-0.5" />
                  <p className="text-[#41b75b] font-semibold text-base">
                    Got it. Hunter will be in touch within 1 business day.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Row 1 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className={labelClass}>First Name</label>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        placeholder="Jane"
                        value={form.firstName}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className={labelClass}>Last Name</label>
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        required
                        placeholder="Smith"
                        value={form.lastName}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className={labelClass}>Email</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className={labelClass}>Phone</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="(720) 000-0000"
                        value={form.phone}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  {/* Row 3 */}
                  <div>
                    <label htmlFor="serviceNeeded" className={labelClass}>Service Needed</label>
                    <select
                      id="serviceNeeded"
                      name="serviceNeeded"
                      required
                      value={form.serviceNeeded}
                      onChange={handleChange}
                      className={`${inputClass} appearance-none`}
                    >
                      <option value="" disabled>Select a service…</option>
                      {serviceOptions.map((s) => (
                        <option key={s} value={s} className="bg-[#0d1117] text-white">{s}</option>
                      ))}
                    </select>
                  </div>

                  {/* Row 4 */}
                  <div>
                    <label htmlFor="message" className={labelClass}>Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Tell us what's going on — the more detail, the better."
                      value={form.message}
                      onChange={handleChange}
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-red-400 text-sm">
                      Something went wrong. Call or text Hunter directly at{" "}
                      <a href="tel:7209373003" className="underline font-semibold">(720) 937-3003</a>.
                    </p>
                  )}

                  <div>
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-xl bg-[#41b75b] text-white font-bold text-base hover:bg-[#39a351] transition-colors disabled:opacity-60 disabled:cursor-not-allowed shadow-lg"
                    >
                      {status === "loading" ? "Sending…" : (
                        <>Request a Free Estimate <ArrowRight className="w-4 h-4" /></>
                      )}
                    </button>
                    <p className="text-white/35 text-xs mt-3">
                      No commitment required. We'll assess your project and give you a straight number.
                    </p>
                  </div>
                </form>
              )}
            </motion.div>
          </div>

          {/* Image panel */}
          <div className="lg:w-2/5 relative hidden lg:block">
            <img
              src={tableImg}
              alt="Custom woodworking project by Custom Handiworks Denver"
              className="absolute inset-0 w-full h-full object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-[#0d1117]/50" />
            <div className="absolute bottom-0 left-0 right-0 p-12 bg-gradient-to-t from-[#0d1117]/95 to-transparent">
              <p className="text-white text-xl font-display font-medium leading-relaxed italic">
                "He who works with his hands is a laborer. He who works with his hands and his head is a craftsman. He who works with his hands and his head and his heart is an artist."
              </p>
              <p className="text-white/50 text-sm mt-3">― Author in Dispute</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
