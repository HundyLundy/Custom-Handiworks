import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ArrowRight, CheckCircle2, MapPin, Clock, Star, Ruler } from "lucide-react";

const SERVICES = [
  {
    name: "Repairs & Problem Solving",
    desc: "Doors that stick, trim that's pulling away, drywall that needs patching — and fixing the jobs a previous contractor didn't get right. We find the root cause and fix it properly.",
  },
  {
    name: "Precision Installations",
    desc: "Interior door installation, fixture and lighting installs, cabinetry, shelving, flooring finish cuts, tile and backsplash. Installed clean, level, and built to last.",
  },
  {
    name: "Custom Carpentry & Finish Work",
    desc: "Built-ins, shelving, and mantels. Crown molding, trim, and wainscoting. Custom furniture, benches, and walk-in closet systems. Designed to fit your space, built to last decades.",
  },
  {
    name: "Trim & Molding",
    desc: "Baseboard, casing, crown, and panel molding — installed with tight miters and clean reveals. New installs and repairs both welcome.",
  },
  {
    name: "Punch-List & Pre-Sale Work",
    desc: "Got a list of things that need to be right before a sale or move-in? We knock it out efficiently and leave everything looking finished.",
  },
  {
    name: "Specialty & Custom Projects",
    desc: "If you can describe it or sketch it, we can probably build it. Bring your idea and we'll tell you straight whether it's a fit.",
  },
];

const WHY_US = [
  {
    icon: Star,
    title: "22 Years of Experience",
    desc: "Two decades of honing the craft — every joint, every cut, done right the first time.",
  },
  {
    icon: Clock,
    title: "Fast Response, No Waitlists",
    desc: "Most projects are assessed within 48 hours. Prompt communication and flexible scheduling.",
  },
  {
    icon: Ruler,
    title: "Free Estimates, Straight Pricing",
    desc: "Transparent, upfront pricing with no surprise charges. You know the number before work begins.",
  },
];

export interface LocationPageProps {
  city: string;
  slug: string;
  description: string;
  nearby: string;
}

export function LocationPage({ city, slug, description, nearby }: LocationPageProps) {
  const shortCity = city.split(",")[0].trim();

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Custom Handiworks",
    url: `https://customhandiworks.com/${slug}`,
    telephone: "(720) 937-3003",
    areaServed: city,
    description: `Custom Handiworks provides finish carpentry, custom woodwork, home repairs, and precision installations in ${city}. Call (720) 937-3003.`,
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Finish Carpenter & Handyman in {city} | Custom Handiworks</title>
        <meta
          name="description"
          content={`Custom carpentry, home repairs, and precision installs in ${city}. Hunter Lundquist — local craftsman with free estimates and no-surprise pricing. Call (720) 937-3003.`}
        />
        <link rel="canonical" href={`https://customhandiworks.com/${slug}`} />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <Navbar />

      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 bg-[#0d1117] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent pointer-events-none" />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="flex items-center gap-2 text-[#41b75b] text-sm font-medium mb-4">
              <MapPin className="w-4 h-4" />
              <span>Serving Denver & Surrounding Neighborhoods</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
              Finish Carpenter & Handyman in {city}
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed mb-10">
              {description}
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#41b75b] hover:bg-[#39a351] text-white font-bold text-base rounded-xl shadow-lg transition-colors"
            >
              Request a Free Estimate <ArrowRight className="w-4 h-4" />
            </a>
            <p className="mt-4 text-white/40 text-sm">Tell us what you're dealing with — we'll take it from there.</p>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 bg-background">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">
              What We Do in {shortCity}
            </h2>
            <p className="text-muted-foreground mb-10 max-w-xl">
              Three clear categories of work. If you're not sure which fits, we'll figure it out quickly.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {SERVICES.map((s) => (
                <div
                  key={s.name}
                  className="p-6 rounded-2xl border border-border bg-card hover:border-primary/40 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-[#41b75b] font-bold shrink-0 mt-0.5 text-lg leading-none">—</span>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{s.name}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-10">
              Why {shortCity} Clients Call Custom Handiworks
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {WHY_US.map((w) => {
                const Icon = w.icon;
                return (
                  <div key={w.title} className="flex flex-col items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#41b75b]/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-[#41b75b]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{w.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-10 bg-card border border-border rounded-2xl p-6">
              <ul className="space-y-3 text-foreground/80">
                {[
                  "We fix problems at the root, not just the surface",
                  "Clean, precise work that lasts",
                  "Clear communication from start to finish",
                  "Respect for your home, your time, and your budget",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#41b75b] shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Surrounding Areas */}
        <section className="py-20 bg-background">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Serving {shortCity} and Surrounding Areas
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl">
              {nearby}
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#0d1117]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Ready to Start Your {shortCity} Project?
            </h2>
            <p className="text-white/60 max-w-xl mx-auto mb-8 leading-relaxed">
              Free estimates, no runaround. We'll give you a straight answer on what it'll take and what it'll cost — before any work begins.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#41b75b] hover:bg-[#39a351] text-white font-bold text-base rounded-xl shadow-lg transition-colors"
              >
                Request a Free Estimate <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="tel:7209373003"
                className="text-white/70 hover:text-white font-medium transition-colors"
              >
                or call (720) 937-3003
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
