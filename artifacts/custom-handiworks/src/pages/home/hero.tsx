import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-[90vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=1920&auto=format&fit=crop"
          alt="Master carpenter working on wood in workshop"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-stone-900/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/25 border border-primary/40 text-primary-foreground backdrop-blur-md mb-6"
          >
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-white/90">Serving Denver & Surrounding Neighborhoods</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.1] mb-6"
          >
            Bringing 22 Years of <span className="text-primary">Craftsmanship</span> to Denver
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-2xl"
          >
            Custom carpentry, built-in furniture, trim, molding, and everyday home repairs — all done with the attention to detail your home deserves.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-xl bg-primary text-primary-foreground shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              Get a Free Quote
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-xl bg-white/10 text-white hover:bg-white/20 backdrop-blur-md border border-white/20 transition-all duration-300"
            >
              View Our Work
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 flex flex-wrap items-center gap-6 text-sm font-medium text-white/70"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span className="text-white font-semibold">Local Denver Business</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span>Free Estimates</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span>Custom Work Welcome</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
