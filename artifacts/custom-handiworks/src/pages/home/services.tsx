import { motion } from "framer-motion";
import { 
  Hammer, Ruler, DoorOpen, Trees, 
  Wrench, Sofa, PaintRoller, Home
} from "lucide-react";

const services = [
  {
    icon: Ruler,
    title: "Custom Carpentry",
    description: "Built-ins, custom shelving, mantels, and bespoke wood projects tailored to your home's unique style."
  },
  {
    icon: Trees,
    title: "Deck Building & Repair",
    description: "Create your perfect outdoor living space or restore your existing deck to its former glory safely."
  },
  {
    icon: DoorOpen,
    title: "Door & Window Installation",
    description: "Professional installation and repair of interior/exterior doors and energy-efficient windows."
  },
  {
    icon: PaintRoller,
    title: "Trim & Molding",
    description: "Crown molding, baseboards, wainscoting, and casing to give your rooms an elegant finished look."
  },
  {
    icon: Sofa,
    title: "Furniture Assembly",
    description: "Save time and frustration. We expertly assemble all types of flat-pack furniture quickly and correctly."
  },
  {
    icon: Wrench,
    title: "Home Repairs & Maintenance",
    description: "From fixing leaky faucets to patching drywall, we handle the annoying to-dos around the house."
  },
  {
    icon: Home,
    title: "Fence Installation",
    description: "Sturdy, attractive wood fencing solutions for privacy, security, and enhanced curb appeal."
  },
  {
    icon: Hammer,
    title: "Interior Renovations",
    description: "Small to medium remodeling projects to update your living spaces, closets, or basements."
  }
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
            Craftsmanship You Can <span className="text-primary">Count On</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            We specialize in fine carpentry and comprehensive handyman services, bringing skill and attention to detail to every job, big or small.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -mr-12 -mt-12 transition-transform duration-500 group-hover:scale-150" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground text-primary transition-colors duration-300">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
