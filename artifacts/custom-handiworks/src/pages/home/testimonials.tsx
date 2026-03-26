import { motion } from "framer-motion";
import { Star } from "lucide-react";

export function Testimonials() {
  const reviews = [
    {
      name: "Maura A.",
      location: "Southwest Denver, CO",
      date: "February 2026",
      text: "Hunter completely rebuilt my wood gate after years of sagging and sticking — a few big wind gusts were the final straw. The new gate is solid, perfectly aligned, and opens and closes smoothly. He did great work at a fair price and clearly takes pride in doing it right. Highly recommend.",
      rating: 5
    },
    {
      name: "Holden P.",
      location: "Englewood, CO",
      date: "February 2026",
      text: "Very helpful and quick to respond! Hunter was able to assess the problem with my dryer quickly and had the new part installed the same day. Highly recommend!",
      rating: 5
    },
    {
      name: "Stevie G.",
      location: "Denver, CO",
      date: "February 2026",
      text: "Hunter was wonderful in rebuilding my wooden back gate promptly and with attention to detail. My new gate is much sturdier and I will definitely be hiring Hunter again in the future.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-14 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6"
          >
            Word on the <span className="text-[#41b75b]">Street</span>
          </motion.h2>
          <p className="text-lg text-muted-foreground">
            What your Denver neighbors are saying about Custom Handiworks.
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
              className="bg-card border border-border p-8 rounded-3xl shadow-sm hover:shadow-xl transition-shadow duration-300 relative flex flex-col"
            >
              <div className="flex gap-1 mb-5 text-[#41b75b]">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-foreground text-base leading-relaxed mb-8 italic flex-1">
                "{review.text}"
              </p>
              <div className="mt-auto pt-4 border-t border-border">
                <p className="font-bold text-foreground">{review.name}</p>
                <p className="text-sm text-muted-foreground">{review.location}</p>
                <p className="text-xs text-muted-foreground/60 mt-0.5">{review.date}</p>
              </div>
              <div className="absolute top-6 right-8 text-primary/10 font-display text-8xl leading-none font-bold select-none">
                "
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
