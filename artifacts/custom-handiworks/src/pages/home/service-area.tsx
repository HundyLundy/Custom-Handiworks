import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export function ServiceArea() {
  const neighborhoods = [
    "Capitol Hill", "Congress Park", "Park Hill", "Cherry Creek",
    "Hilltop", "Mayfair", "Montclair", "Lowry",
    "Virginia Village", "Stapleton", "Whittier", "Five Points"
  ];

  return (
    <section id="service-area" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl shadow-black/5 border border-border overflow-hidden flex flex-col lg:flex-row">
          
          <div className="lg:w-1/2 p-10 md:p-16 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 text-primary font-semibold mb-4">
              <MapPin className="w-5 h-5" />
              <span>Local Denver Coverage</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Serving an 8-Mile Radius from Central Denver
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Based at 761 Eudora Street, we focus our services locally to ensure prompt response times and reliable scheduling for our neighbors.
            </p>
            
            <h3 className="font-semibold text-foreground mb-4">Neighborhoods We Frequently Serve:</h3>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-4">
              {neighborhoods.map((hood) => (
                <li key={hood} className="flex items-center gap-2 text-muted-foreground text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {hood}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:w-1/2 relative min-h-[400px]">
            {/* landing page service area map denver colorado abstract beautiful minimal */}
            <img 
              src="https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=1920&auto=format&fit=crop"
              alt="Denver Colorado Map View"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Map Overlay to make it feel like a stylized map area */}
            <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent lg:block hidden" />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent lg:hidden" />
            
            {/* Center Pin */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="w-32 h-32 bg-primary/20 rounded-full animate-ping absolute" />
              <div className="w-16 h-16 bg-primary/30 rounded-full absolute" />
              <div className="bg-primary text-white p-3 rounded-full relative z-10 shadow-lg">
                <MapPin className="w-8 h-8" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
