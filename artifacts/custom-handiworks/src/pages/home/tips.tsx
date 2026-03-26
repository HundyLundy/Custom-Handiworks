import { motion } from "framer-motion";
import { Sun, Snowflake, Wrench, Home } from "lucide-react";

const articles = [
  {
    icon: Home,
    tag: "Home Basics",
    title: "Denver's Unique Home Maintenance Challenges",
    excerpt:
      "Denver's high altitude, semi-arid climate, and dramatic seasonal swings put real stress on homes. The thin air accelerates wear on wood and paint. Intense UV exposure fades and cracks exterior finishes faster than at lower elevations. And that back-and-forth between dry cold and heavy spring rain? It's a recipe for wood rot, cracked caulk, and moisture intrusion — if you're not staying ahead of it.",
    tips: [
      "Inspect exterior wood every spring for soft spots or discoloration",
      "Repaint or re-stain wood surfaces every 3–5 years to block UV damage",
      "Check foundation and siding after heavy rains for new cracks",
    ],
  },
  {
    icon: Wrench,
    tag: "Drywall & Interior",
    title: "Drywall Repair Tips for Denver Homes",
    excerpt:
      "Denver's dry air and temperature swings cause drywall to expand and contract constantly — leading to hairline cracks, nail pops, and occasionally larger gaps around door frames. Most of these repairs are straightforward if caught early. Left alone, they get worse and start looking worse on home valuations.",
    tips: [
      "Fill hairline cracks with lightweight spackle and sand smooth before painting",
      "For holes larger than an inch, use a mesh patch kit and joint compound in thin coats",
      "Match your paint sheen exactly — mismatched sheen shows more than mismatched color",
    ],
  },
  {
    icon: Sun,
    tag: "Seasonal",
    title: "Seasonal Maintenance Checklist for Denver Homeowners",
    excerpt:
      "Each Denver season brings its own punch list. Staying on top of these makes the difference between a routine maintenance call and an expensive emergency repair. Here's a quick cheat sheet to work from.",
    tips: [
      "Spring: Clean gutters, inspect roof, check exterior walls for winter damage",
      "Summer: Re-stain decks & fences, check window seals, service irrigation",
      "Fall: Seal drafts around doors & windows, clear gutters, drain exterior hoses",
      "Winter: Insulate exposed pipes, test smoke & CO detectors, keep walkways clear",
    ],
  },
  {
    icon: Snowflake,
    tag: "Carpentry",
    title: "Carpentry Solutions That Hold Up in Colorado",
    excerpt:
      "Wood moves in Colorado — a lot. The constant cycle of dry air and moisture means joints loosen, doors stick, and decks degrade faster than anywhere with a more stable climate. The fix isn't always replacement: strategic repairs, the right sealants, and using materials appropriate for Colorado conditions can add decades to wooden structures.",
    tips: [
      "Use exterior-grade wood glue and hardware rated for freeze-thaw cycling",
      "Sticking doors usually just need a planed edge — don't over-cut, humidity swings back",
      "Treat fence posts at ground level every 2–3 years to prevent rot at the most vulnerable point",
    ],
  },
];

export function Tips() {
  return (
    <section id="tips" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold uppercase tracking-widest text-[#41b75b] mb-3"
          >
            Denver Home Tips
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-3xl md:text-5xl font-display font-bold text-foreground mb-5"
          >
            Advice From Someone Who's <span className="text-[#41b75b]">Seen It All</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Denver homes face real challenges — altitude, dry air, dramatic seasons. Here's what working on them has taught us.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article, index) => {
            const Icon = article.icon;
            return (
              <motion.article
                key={article.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="bg-card border border-border rounded-3xl p-8 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-primary/80">{article.tag}</span>
                    <h3 className="text-xl font-bold text-foreground mt-0.5 leading-snug">{article.title}</h3>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed text-sm mb-5">{article.excerpt}</p>

                <ul className="space-y-2">
                  {article.tips.map((tip) => (
                    <li key={tip} className="flex items-start gap-2.5 text-sm text-foreground/80">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
