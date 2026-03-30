import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ArrowRight, Wrench, Building2, ShieldCheck, Clock, Users, CheckCircle2 } from "lucide-react";

const SERVICES = [
  {
    icon: Building2,
    name: "Commercial Renovation",
    desc: "Full-scope commercial renovation from demo to finish. We keep your project on schedule and your tenants informed.",
  },
  {
    icon: Wrench,
    name: "Tenant Improvements",
    desc: "Custom buildouts tailored to each tenant's space requirements — delivered on time and within budget.",
  },
  {
    icon: ShieldCheck,
    name: "Property Maintenance",
    desc: "Ongoing maintenance programs that protect your investment and prevent small issues from becoming expensive ones.",
  },
  {
    icon: Building2,
    name: "Interior Buildouts",
    desc: "From framing to final finishes — complete interior buildouts for retail, office, and mixed-use commercial spaces.",
  },
  {
    icon: Wrench,
    name: "Exterior Repairs & Upgrades",
    desc: "Siding, trim, doors, storefronts, and structural exterior work that improves both curb appeal and durability.",
  },
  {
    icon: Clock,
    name: "Emergency Repair Services",
    desc: "When something fails, we respond fast. Denver-metro based with quick dispatch to commercial properties across the area.",
  },
];

const WHY_US = [
  {
    icon: ShieldCheck,
    title: "Licensed & Insured",
    desc: "Fully licensed and insured for commercial work across Colorado. Every project is documented and compliant.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    desc: "Most projects are assessed within 48 hours. We work efficiently to minimize disruption to your business.",
  },
  {
    icon: Users,
    title: "Property Manager Specialists",
    desc: "We understand the demands of managing multiple properties. Straight communication, no runaround.",
  },
];

export default function ServicesHub() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Commercial Contractor Services | Custom Handiworks | Denver, CO</title>
        <meta
          name="description"
          content="Custom Handiworks provides commercial construction, renovation, tenant improvements, and property maintenance across the Denver metro. Licensed, insured, fast turnaround."
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
              Commercial Construction & Renovation Services in Denver, CO
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed mb-10">
              From tenant improvements to full commercial renovations, Custom Handiworks delivers licensed, insured work on time and on budget.
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#41b75b] hover:bg-[#39a351] text-white font-bold text-base rounded-xl shadow-lg transition-colors"
            >
              Get a Free Quote <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-background">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-10">
              What We Do
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICES.map((s) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.name}
                    className="p-6 rounded-2xl border border-border bg-card hover:border-[#41b75b]/40 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#41b75b]/10 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-[#41b75b]" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{s.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-10">
              Why Choose Us
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
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#0d1117]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Ready to get started?
            </h2>
            <p className="text-white/60 max-w-xl mx-auto mb-8 leading-relaxed">
              Get a free quote today. We'll assess your project and give you a straight number — before any work begins.
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
