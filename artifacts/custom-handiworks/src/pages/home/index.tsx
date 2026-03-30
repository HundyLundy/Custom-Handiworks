import { SEO } from "@/components/seo";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "./hero";
import { Services } from "./services";
import { WhyUs } from "./why-us";
import { BestFit } from "./best-fit";
import { ServiceArea } from "./service-area";
import { Testimonials } from "./testimonials";
import { Contact } from "./contact";
import { Tips } from "./tips";
import { Gallery } from "./gallery";
import { PSSCrossSell } from "./pss-crosssell";
import { ServiceAreasLinks } from "./service-areas-links";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SEO />
      <Navbar />
      
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <BestFit />
        <ServiceArea />
        <Gallery />
        <Testimonials />
        <Tips />
        <Contact />
        <PSSCrossSell />
        <ServiceAreasLinks />
      </main>

      <Footer />
    </div>
  );
}
