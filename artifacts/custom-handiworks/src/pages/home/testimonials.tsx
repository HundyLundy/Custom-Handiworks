import { motion } from "framer-motion";
import { Star } from "lucide-react";

export function Testimonials() {
  const reviews = [
    {
      name: "Paul M.",
      location: "Park Hill, Denver",
      text: "Hunter built a beautiful gate for me — cedar, solid as a rock, and it looks amazing. He came out for the quote the same week and had it done faster than expected. Super professional, great communicator. Will definitely hire again for future projects.",
      rating: 5
    },
    {
      name: "Jessica T.",
      location: "Congress Park, Denver",
      text: "I had Hunter install crown molding and new baseboards throughout my entire first floor. The detail work is flawless — perfectly mitered corners, no gaps, painted and ready to go. You can tell he takes real pride in his craft. Highly recommend for any carpentry work.",
      rating: 5
    },
    {
      name: "Mike & Sandra R.",
      location: "Cherry Creek, Denver",
      text: "Hunter built us a custom banquette and dining table for our breakfast nook. It fits perfectly, the walnut top is gorgeous, and the whole thing feels like it belongs in a high-end restaurant. We've gotten so many compliments. Worth every penny.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-muted/30">
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
              <div className="flex gap-1 mb-5 text-primary">
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
