import { useEffect } from "react";
import { motion } from "framer-motion";
import tableImg from "@assets/Image_3-21-26_at_11.04_PM_1774157549013.png";

export function Contact() {
  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src="https://js-na2.hsforms.net/forms/embed/244877209.js"]'
    );
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://js-na2.hsforms.net/forms/embed/244877209.js";
      script.defer = true;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <section id="contact" className="py-14 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl shadow-black/5 overflow-hidden flex flex-col lg:flex-row border border-border">

          <div className="lg:w-3/5 p-8 md:p-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Get a Free Quote
              </h2>
              <p className="text-muted-foreground mb-8">
                Ready to start your project? Fill out the form below and we'll get back to you within 24 hours to discuss details and scheduling.
              </p>

              <div
                className="hs-form-frame"
                data-region="na2"
                data-form-id="a0a6608d-a766-485c-9ae3-52a889e0b1ae"
                data-portal-id="244877209"
              />
            </motion.div>
          </div>

          <div className="lg:w-2/5 relative hidden lg:block">
            <img
              src={tableImg}
              alt="Live edge floating shelves with steel brackets built by Custom Handiworks Denver"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-stone-900/30" />
            <div className="absolute bottom-0 left-0 right-0 p-12 bg-gradient-to-t from-stone-950/90 to-transparent">
              <p className="text-white text-xl font-display font-medium leading-relaxed italic">
                "He who works with his hands is a laborer. He who works with his hands and his head is a craftsman. He who works with his hands and his head and his heart is an artist."
              </p>
              <p className="text-white/60 text-sm mt-3">― Author in Dispute</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
