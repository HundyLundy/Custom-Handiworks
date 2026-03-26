import { motion } from "framer-motion";
import { Wrench, Hammer, Ruler } from "lucide-react";
import trimImg from "@assets/IMG_0596_1774146982331.jpeg";
import barnDoorsImg from "@assets/IMG_0755_1774146982330.jpeg";
import banquetteImg from "@assets/6672B2C3-361B-4E11-A962-1B0CD6DCDE74_1774146982331.jpeg";

const buckets = [
  {
    icon: Wrench,
    title: "Repairs & Problem Solving",
    tagline: "When something's broken — or was never done right.",
    image: trimImg,
    imageAlt: "Door and trim repair work in a Denver home — fixing previous contractor mistakes",
    bullets: [
      "Doors that stick, won't latch, or swing wrong",
      "Trim, casing, and baseboard fixes",
      "Drywall patching and wall repairs",
      "Fixing previous contractor mistakes",
      "Weatherstripping and draft sealing",
    ],
  },
  {
    icon: Hammer,
    title: "Precision Installations",
    tagline: "Installed clean, level, and built to last.",
    image: barnDoorsImg,
    imageAlt: "Interior door and fixture installation in a Denver home",
    bullets: [
      "Interior door installation and hardware",
      "Fixture and lighting installs",
      "Cabinetry and shelving install",
      "Flooring layout and finish cuts",
      "Tile and backsplash work",
    ],
  },
  {
    icon: Ruler,
    title: "Custom Carpentry & Finish Work",
    tagline: "Designed to fit your space, built to last decades.",
    image: banquetteImg,
    imageAlt: "Custom built-in banquette seating with finish carpentry — Denver, CO",
    bullets: [
      "Built-ins, shelving, and mantels",
      "Crown molding, trim, and wainscoting",
      "Custom furniture and benches",
      "Walk-in closet systems",
      "Punch-list and detail finish work",
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6"
          >
            Craftsmanship You Can <span className="text-[#41b75b]">Count On</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Three clear categories. If you're not sure which fits, we'll figure it out quickly.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {buckets.map((bucket, index) => {
            const Icon = bucket.icon;
            return (
              <motion.div
                key={bucket.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group rounded-2xl bg-card border border-border hover:border-primary/40 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 overflow-hidden flex flex-col"
              >
                <div className="h-52 overflow-hidden">
                  <img
                    src={bucket.image}
                    alt={bucket.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-7 flex flex-col flex-1">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground text-primary transition-colors duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-1">{bucket.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 italic">{bucket.tagline}</p>
                  <ul className="space-y-2 mt-auto">
                    {bucket.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-[#41b75b] font-bold mt-0.5 shrink-0">—</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Nursery bathroom project video */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden border border-border shadow-sm mb-8"
        >
          <video
            src="/bathroom-remodel.mov"
            controls
            playsInline
            muted
            className="w-full h-auto block"
            aria-label="Closet converted to nursery bathroom — Custom Handiworks Denver"
          />
          <div className="bg-white px-6 py-4 border-t border-border">
            <p className="text-sm font-semibold text-foreground">A closet turned nursery bathroom — for a very special reason</p>
            <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
              Hunter's little sister is expecting a baby girl in late July, so we converted a tiny closet into a full bathroom right off the nursery. (The pink paint was chosen to match the wallpaper — and in the right light, it really does.)
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
