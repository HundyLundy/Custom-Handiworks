import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ArrowRight, Wrench, Hammer, Ruler, Clock, Star, CheckCircle2 } from "lucide-react";

const SERVICES = [
  {
    icon: Wrench,
    name: "Repairs & Problem Solving",
    tagline: "When something's broken — or was never done right.",
    bullets: [
      "Doors that stick, won't latch, or swing wrong",
      "Trim, casing, and baseboard fixes",
      "Drywall patching and wall repairs",
      "Fixing previous contractor mistakes",
      "Weatherstripping and draft sealing",
    ],
  },
  {
    icon: Hammer,
    name: "Precision Installations",
    tagline: "Installed clean, level, and built to last.",
    bullets: [
      "Interior door installation and hardware",
      "Fixture and lighting installs",
      "Cabinetry and shelving install",
      "Flooring layout and finish cuts",
      "Tile and backsplash work",
    ],
  },
  {
    icon: Ruler,
    name: "Custom Carpentry & Finish Work",
    tagline: "Designed to fit your space, built to last decades.",
    bullets: [
      "Built-ins, shelving, and mantels",
      "Crown molding, trim, and wainscoting",
      "Custom furniture and benches",
      "Walk-in closet systems",
      "Punch-list and detail finish work",
    ],
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
    desc: "Transparent, upfront pricing. You know the number before any work begins.",
  },
];

export default function ServicesHub() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Finish Carpentry & Home Repair Services | Custom Handiworks | Denver, CO</title>
        <meta
          name="description"
          content="Custom carpentry, home repairs, and precision installs across the Denver metro. Hunter Lundquist — local craftsman with free estimates and no-surprise pricing. Call (720) 937-3003."
        />
        <link rel="canonical" href="https://customhandiworks.com/services" />
      </Helmet>

      <Navbar />

      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 bg-[#0d1117] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent pointer-events-none" />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
              Finish Carpentry & Home Repair Services in Denver, CO
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed mb-10">
              Repairs, precision installs, and custom carpentry — especially the jobs that weren't done right the first time. Serving the Denver metro with 22 years of craftsmanship.
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
              Craftsmanship You Can Count On
            </h2>
            <p className="text-muted-foreground mb-12 max-w-xl">
              Three clear categories. If you're not sure which fits, we'll figure it out quickly.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {SERVICES.map((s) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.name}
                    className="p-7 rounded-2xl border border-border bg-card hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
                  >
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4 text-primary">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-foreground text-lg mb-1">{s.name}</h3>
                    <p className="text-sm text-muted-foreground italic mb-4">{s.tagline}</p>
                    <ul className="space-y-2">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-[#41b75b] font-bold mt-0.5 shrink-0">—</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Where We're a Good Fit */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-12 items-start">
              <div className="lg:w-1/2">
                <p className="text-sm font-semibold uppercase tracking-widest text-[#41b75b] mb-3">Is This a Good Fit?</p>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                  Where We're the Best Fit
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Some jobs need more than a basic handyman. These are the kinds of projects where our approach makes the biggest difference.
                </p>
              </div>
              <div className="lg:w-1/2">
                <ul className="space-y-4">
                  {[
                    "Repairs after poor previous work — done right this time",
                    "Precision installs that need to look clean and last",
                    "Custom trim, built-ins, and finish carpentry",
                    "Punch-list and detail work before a sale or move-in",
                    "Homeowners who are tired of settling for 'good enough'",
                    "Residential or light commercial finish carpentry",
                  ].map((fit) => (
                    <li key={fit} className="flex items-start gap-3 text-foreground">
                      <CheckCircle2 className="w-5 h-5 text-[#41b75b] shrink-0 mt-0.5" />
                      <span className="text-base leading-snug">{fit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-background">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-10">
              Why Clients Call Custom Handiworks
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
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
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#0d1117]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Ready to get started?
            </h2>
            <p className="text-white/60 max-w-xl mx-auto mb-8 leading-relaxed">
              Free estimates, no runaround. Tell us what you're dealing with — we'll give you a straight answer before any work begins.
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
