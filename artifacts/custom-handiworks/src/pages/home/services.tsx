import { motion } from "framer-motion";
import { Ruler, PaintRoller, Sofa, Wrench, Hammer, Home } from "lucide-react";
import banquetteImg from "@assets/6672B2C3-361B-4E11-A962-1B0CD6DCDE74_1774146982331.jpeg";
import tableImg from "@assets/Image_3-21-26_at_11.03_PM_1774157549013.png";
import barnDoorsImg from "@assets/IMG_0755_1774146982330.jpeg";
import trimImg from "@assets/IMG_0596_1774146982331.jpeg";
import gateImg from "@assets/Image_3-21-26_at_11.05_PM_1774157483013.png";
import bathroomImg from "@assets/IMG_5557_1774147985854.jpeg";

const primaryServices = [
  {
    icon: Ruler,
    title: "Custom Carpentry",
    description: "Built-ins, custom shelving, mantels, and bespoke wood projects designed and built to fit your home perfectly.",
    image: banquetteImg,
    imageAlt: "Custom built banquette seating with walnut tabletop",
    video: null,
  },
  {
    icon: Home,
    title: "Custom Furniture",
    description: "One-of-a-kind dining tables, benches, and seating built from fine hardwoods. Designed to last generations.",
    image: tableImg,
    imageAlt: "Custom cedar outdoor bench built in Denver",
    video: null,
  },
  {
    icon: PaintRoller,
    title: "Trim & Molding",
    description: "Crown molding, baseboards, wainscoting, and casing to give your rooms an elegant, finished look.",
    image: trimImg,
    imageAlt: "Custom trim and crown molding carpentry work",
    video: null,
  },
  {
    icon: Sofa,
    title: "Furniture Assembly & Door Installation",
    description: "Flat-pack furniture assembled correctly, plus interior door installation and hardware — done right the first time.",
    image: barnDoorsImg,
    imageAlt: "Interior door installation in Denver home",
    video: null,
  },
  {
    icon: Wrench,
    title: "Home Repairs",
    description: "From patching drywall to fixing doors and weatherproofing — we handle all the annoying to-dos around your home.",
    image: gateImg,
    imageAlt: "Custom cedar gate and fence repair",
    video: null,
  },
  {
    icon: Hammer,
    title: "Interior Renovations",
    description: "Small-to-medium remodeling projects to refresh bathrooms, closets, living spaces, or any room in need of an upgrade.",
    image: bathroomImg,
    imageAlt: "Bathroom remodel with designer wallpaper and beadboard wainscoting",
    video: "/bathroom-remodel.mov",
  },
];

const additionalServices = [
  "Deck Building & Repair",
  "Fence Installation",
  "Furniture Assembly",
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
            Most jobs fall into one of three categories. If you're not sure, we'll figure it out quickly.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {primaryServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
                className="group rounded-2xl bg-card border border-border hover:border-primary/40 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 overflow-hidden"
              >
                {service.image && (
                  <div className="h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.imageAlt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                <div className="p-7">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground text-primary transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{service.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Video sits below the last 2 cards (Home Repairs + Interior Renovations) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8"
        >
          <div className="hidden lg:block" />
          <div className="lg:col-span-2 rounded-2xl overflow-hidden border border-border shadow-sm">
            <video
              src="/bathroom-remodel.mov"
              controls
              playsInline
              muted
              className="w-full h-auto block"
              aria-label="Sister's bathroom remodel project by Custom Handiworks"
            />
            <div className="bg-white px-6 py-4 border-t border-border">
              <p className="text-sm font-semibold text-foreground">A closet turned nursery bathroom — for a very special reason</p>
              <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                Hunter's little sister is expecting a baby girl in late July, so we converted a tiny closet into a full bathroom right off the nursery. (The pink paint was chosen to match the wallpaper — and in the right light, it really does.)
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-muted/40 border border-border rounded-2xl px-8 py-6 flex flex-col sm:flex-row sm:items-center gap-4"
        >
          <p className="text-sm font-semibold text-muted-foreground shrink-0">Also available:</p>
          <div className="flex flex-wrap gap-3">
            {additionalServices.map((s) => (
              <span key={s} className="text-sm text-muted-foreground bg-background border border-border px-3 py-1 rounded-full">
                {s}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
