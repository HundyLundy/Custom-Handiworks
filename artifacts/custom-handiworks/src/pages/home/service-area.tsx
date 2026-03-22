import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import gateImg from "@assets/Image_3-21-26_at_11.12_PM_1774157483011.png";

export function ServiceArea() {
  const neighborhoods = [
    "Capitol Hill", "Congress Park", "Cherry Creek", "Cherry Hills",
    "Park Hill", "Hilltop", "Mayfair", "Montclair",
    "Lowry", "Stapleton / Central Park", "Virginia Village", "Whittier",
    "Five Points", "Englewood", "Centennial", "Aurora",
  ];

  return (
    <section id="service-area" className="py-14 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl shadow-black/5 border border-border overflow-hidden flex flex-col lg:flex-row">

          <div className="lg:w-1/2 p-10 md:p-16 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 text-primary font-semibold mb-4">
              <MapPin className="w-5 h-5" />
              <span>Local Denver Coverage</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Serving Denver's Best Neighborhoods
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We focus our services locally so we can offer fast response times, flexible scheduling, and the kind of personal attention that bigger companies can't provide.
            </p>

            <h3 className="font-semibold text-foreground mb-4">Neighborhoods We Serve:</h3>
            <ul className="grid grid-cols-2 gap-y-2.5 gap-x-4">
              {neighborhoods.map((hood) => (
                <li key={hood} className="flex items-center gap-2 text-muted-foreground text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  {hood}
                </li>
              ))}
            </ul>
            <p className="text-sm text-muted-foreground/70 mt-6 italic">Not seeing your neighborhood? Reach out — we may still be able to help.</p>
          </div>

          <div className="lg:w-1/2 relative min-h-[400px]">
            <img
              src={gateImg}
              alt="Custom modern slatted fence gate installation"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent lg:block hidden" />
            <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white to-transparent lg:hidden" />
          </div>

        </div>
      </div>
    </section>
  );
}
