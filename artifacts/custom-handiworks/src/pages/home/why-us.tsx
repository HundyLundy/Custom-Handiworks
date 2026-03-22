import { motion } from "framer-motion";
import { Shield, Clock, MapPin, Award, ThumbsUp, Zap } from "lucide-react";

export function WhyUs() {
  const reasons = [
    { icon: Shield, title: "Licensed & Insured", desc: "Full coverage for your peace of mind." },
    { icon: Clock, title: "10+ Years Experience", desc: "A decade of honing our craft." },
    { icon: MapPin, title: "Local Denver Experts", desc: "We know Denver homes inside and out." },
    { icon: Award, title: "Quality Guaranteed", desc: "We don't leave until it's perfect." },
    { icon: Zap, title: "Fast Response", desc: "Prompt communication and scheduling." },
    { icon: ThumbsUp, title: "Free Estimates", desc: "Transparent pricing upfront." },
  ];

  return (
    <section id="why-us" className="py-24 bg-secondary text-secondary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        {/* Subtle texture overlay for the dark section */}
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
              Why Choose Custom Handiworks?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-secondary-foreground/80 mb-8"
            >
              We know that inviting a contractor into your home requires trust. That's why we operate with total transparency, unwavering professionalism, and a commitment to doing things right the first time. We treat every Denver home like it's our own.
            </motion.p>
            
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
                Schedule Your Project
              </a>
            </motion.div>
          </div>

          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((reason, idx) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * idx }}
                className="bg-white/5 border border-white/10 backdrop-blur-sm p-6 rounded-2xl flex items-start gap-4 hover:bg-white/10 transition-colors duration-300"
              >
                <div className="bg-primary/20 p-3 rounded-lg text-primary shrink-0">
                  <reason.icon className="w-6 h-6" />
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
