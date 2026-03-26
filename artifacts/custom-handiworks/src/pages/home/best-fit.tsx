import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const fits = [
  "Repairs after poor previous work — done right this time",
  "Precision installs that need to look clean and last",
  "Custom trim, built-ins, and finish carpentry",
  "Punch-list and detail work before a sale or move-in",
  "Homeowners who are tired of settling for 'good enough'",
];

export function BestFit() {
  return (
    <section className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto flex flex-col lg:flex-row gap-12 items-start">

          <div className="lg:w-1/2">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-semibold uppercase tracking-widest text-[#41b75b] mb-3"
            >
              Is This a Good Fit?
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4"
            >
              Where We're the <span className="text-[#41b75b]">Best Fit</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground"
            >
              Some jobs need more than a basic handyman. These are the kinds of projects where our approach makes the biggest difference.
            </motion.p>
          </div>

          <div className="lg:w-1/2">
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="space-y-4"
            >
              {fits.map((fit, i) => (
                <motion.li
                  key={fit}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.07 }}
                  className="flex items-start gap-3 text-foreground"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#41b75b] shrink-0 mt-0.5" />
                  <span className="text-base leading-snug">{fit}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-8"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
              >
                Tell us about your project →
              </a>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
