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
        <Testimonials />
        <Tips />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
