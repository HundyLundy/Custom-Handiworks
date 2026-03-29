import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function PSSCrossSell() {
  return (
    <section className="bg-[#0d1117] py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-white/40 border border-white/15 rounded-full px-4 py-1.5 mb-6">
            A Perfect Synergy Solutions Company
          </span>

          <h2 className="text-2xl md:text-4xl font-display font-bold text-white mb-4">
            Also need help with water efficiency?
          </h2>
          <p className="text-white/55 text-base md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            If your property is spending $5,000+ a month on water, Perfect Water Valve can cut that significantly. Same quality. Same standards.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://perfectwatervalve.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-white/25 text-white/80 hover:text-white hover:border-white/50 text-sm font-semibold transition-colors"
            >
              Learn About Perfect Water Valve
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://perfectsynergysolutions.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#41b75b] text-white hover:bg-[#39a351] text-sm font-bold transition-colors shadow-lg"
            >
              I Want the Combo — Handiworks + Water
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
