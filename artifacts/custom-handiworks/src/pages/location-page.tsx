import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ArrowRight, CheckCircle2, MapPin, Zap, Shield } from "lucide-react";

const SERVICES = [
  {
    name: "Commercial Renovation",
    desc: "Full-scale commercial renovations designed to minimize downtime and maximize the value of your property.",
  },
  {
    name: "Tenant Improvements",
    desc: "Custom buildouts and modifications tailored to each tenant's needs — delivered on schedule and within budget.",
  },
  {
    name: "Property Maintenance",
    desc: "Ongoing maintenance programs that keep your commercial property in top condition and prevent costly repairs.",
  },
  {
    name: "Interior Buildouts",
    desc: "From framing to finish work, we handle complete interior buildouts for retail, office, and mixed-use spaces.",
  },
  {
    name: "Exterior Repairs & Upgrades",
    desc: "Curb appeal and structural integrity — we handle siding, trim, doors, and exterior finish work.",
  },
  {
    name: "Emergency Repair Services",
    desc: "Fast-response repairs when something breaks or fails. We're based in the Denver metro and respond quickly.",
  },
];

export interface LocationPageProps {
  city: string;
  slug: string;
  description: string;
  nearby: string;
}

export function LocationPage({ city, slug, description, nearby }: LocationPageProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Custom Handiworks",
    url: `https://customhandiworks.com/${slug}`,
    telephone: "(720) 937-3004",
    areaServed: city,
    description: `Custom Handiworks provides commercial construction, renovation, and property maintenance in ${city}. Licensed, insured, and serving the Denver metro.`,
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Commercial Contractor in {city} | Custom Handiworks</title>
        <meta
          name="description"
          content={`Custom Handiworks provides commercial construction, renovation, and property maintenance in ${city}. Licensed, insured, and serving the Denver metro. Call (720) 937-3004.`}
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
              <span>Denver Metro Area</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
              Commercial Contractor in {city}
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed mb-10">
              {description}
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#41b75b] hover:bg-[#39a351] text-white font-bold text-base rounded-xl shadow-lg transition-colors"
            >
              Get a Free Quote <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 bg-background">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-10">
              Our Services in {city}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {SERVICES.map((s) => (
                <div
                  key={s.name}
                  className="p-6 rounded-2xl border border-border bg-card"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#41b75b] shrink-0 mt-0.5" />
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
              Why {city} Businesses Choose Custom Handiworks
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#41b75b]/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-[#41b75b]" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Local Zoning Knowledge</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Deep familiarity with {city} commercial zoning and permit requirements — no surprises mid-project.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#41b75b]/10 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-[#41b75b]" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Fast Response Times</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Based in the Denver metro, we respond quickly to {city} projects — no long waitlists.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#41b75b]/10 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-[#41b75b]" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Property Manager Specialists</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Trusted by property managers and business owners across {city} for reliable, professional work.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Surrounding Areas */}
        <section className="py-20 bg-background">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Serving {city} and Surrounding Areas
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
              Ready to Start Your {city} Project?
            </h2>
            <p className="text-white/60 max-w-xl mx-auto mb-8 leading-relaxed">
              Get a straight answer on what it'll take and what it'll cost — before any work begins. Free estimates, no runaround.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#41b75b] hover:bg-[#39a351] text-white font-bold text-base rounded-xl shadow-lg transition-colors"
              >
                Get a Free Quote <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="tel:7209373004"
                className="text-white/70 hover:text-white font-medium transition-colors"
              >
                or call (720) 937-3004
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
