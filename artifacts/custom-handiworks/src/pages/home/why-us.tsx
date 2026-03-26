import { motion } from "framer-motion";
import { Clock, MapPin, Award, ThumbsUp, Zap, Star } from "lucide-react";

export function WhyUs() {
  const reasons = [
    { icon: Clock, title: "22 Years of Experience", desc: "Two decades of honing the craft — every joint, every cut done right." },
    { icon: MapPin, title: "Local Denver Craftsman", desc: "We know Denver homes inside and out. No drive fees, fast response." },
    { icon: Award, title: "Quality Guaranteed", desc: "We don't leave until the work is something we're proud of." },
    { icon: Star, title: "Custom Work Welcome", desc: "Bring us your vision. If you can sketch it, we can build it." },
    { icon: ThumbsUp, title: "Free Estimates", desc: "Transparent, upfront pricing. No surprises on the final bill." },
    { icon: Zap, title: "Fast Response", desc: "Prompt communication and flexible scheduling — no weeks-long waits." },
  ];

  return (
    <section id="why-us" className="py-24 bg-secondary text-secondary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?q=80&w=1920&auto=format&fit=crop')] mix-blend-overlay bg-cover bg-center" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          <div className="lg:w-1/2">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-display font-bold text-white mb-6"
            >
              Why Clients Call <span className="text-[#41b75b]">Custom Handiworks</span>
            </motion.h2>
            <motion.ul
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-4 text-secondary-foreground/80 text-lg mb-8"
            >
              <li className="flex items-start gap-3">
                <span className="text-[#41b75b] mt-1 font-bold shrink-0">—</span>
                We fix problems at the root, not just the surface
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#41b75b] mt-1 font-bold shrink-0">—</span>
                Clean, precise work that lasts
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#41b75b] mt-1 font-bold shrink-0">—</span>
                Clear communication from start to finish
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#41b75b] mt-1 font-bold shrink-0">—</span>
                Respect for your home, your time, and your budget
              </li>
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-xl bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-all duration-300"
              >
                Request a Project Review
              </a>
            </motion.div>
          </div>

          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {reasons.map((reason, idx) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * idx }}
                className="bg-white/5 border border-white/10 backdrop-blur-sm p-6 rounded-2xl flex items-start gap-4 hover:bg-white/10 transition-colors duration-300"
              >
                <div className="bg-[#41b75b]/20 p-3 rounded-lg text-[#41b75b] shrink-0">
                  <reason.icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">{reason.title}</h4>
                  <p className="text-sm text-secondary-foreground/70">{reason.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
