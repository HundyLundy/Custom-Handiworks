import { motion } from "framer-motion";
import { Star } from "lucide-react";

export function Testimonials() {
  const reviews = [
    {
      name: "Sarah Jenkins",
      location: "Park Hill, Denver",
      text: "Custom Handiworks built a stunning custom bookshelf for our living room. The attention to detail and craftsmanship is phenomenal. They showed up on time, kept the workspace clean, and were a pleasure to work with.",
      rating: 5
    },
    {
      name: "Mark T.",
      location: "Cherry Creek, Denver",
      text: "I needed several doors replaced and some complex trim work done. They nailed it. The finish is flawless, and the pricing was very fair for the high quality of work provided. Highly recommended for any local carpentry needs.",
      rating: 5
    },
    {
      name: "Emily R.",
      location: "Congress Park, Denver",
      text: "Finding a reliable handyman in Denver has been tough, but Custom Handiworks is the real deal. Fixed our deck, repaired some drywall, and assembled our new furniture all in one day. Will definitely hire them again.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6"
          >
            Word on the <span className="text-primary">Street</span>
          </motion.h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it. See what your Denver neighbors have to say about our work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card border border-border p-8 rounded-3xl shadow-sm hover:shadow-xl transition-shadow duration-300 relative"
            >
              <div className="flex gap-1 mb-6 text-primary">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-foreground text-lg leading-relaxed mb-8 italic">
                "{review.text}"
              </p>
              <div className="mt-auto">
                <p className="font-bold text-foreground">{review.name}</p>
                <p className="text-sm text-muted-foreground">{review.location}</p>
              </div>
              <div className="absolute top-8 right-8 text-primary/10 font-display text-8xl leading-none font-bold">
                "
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
