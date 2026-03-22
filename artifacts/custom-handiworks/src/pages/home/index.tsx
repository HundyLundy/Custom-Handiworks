import { SEO } from "@/components/seo";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "./hero";
import { Services } from "./services";
import { WhyUs } from "./why-us";
import { ServiceArea } from "./service-area";
import { Testimonials } from "./testimonials";
import { Contact } from "./contact";
import { Tips } from "./tips";
import { Gallery } from "./gallery";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SEO />
      <Navbar />
      
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <ServiceArea />
        <Gallery />

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-8 text-center bg-background"
        >
          <p className="text-sm text-muted-foreground">
            Got a home project in Denver?{" "}
            <a href="#contact" className="text-primary font-semibold hover:underline">
              Get a free estimate →
            </a>
          </p>
        </motion.div>

        <Testimonials />
        <Tips />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
