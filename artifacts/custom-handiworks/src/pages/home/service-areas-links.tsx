import { MapPin } from "lucide-react";

const AREAS = [
  { city: "Aurora, CO", slug: "commercial-contractor-aurora-co" },
  { city: "Denver, CO", slug: "commercial-contractor-denver-co" },
  { city: "Englewood, CO", slug: "commercial-contractor-englewood-co" },
  { city: "Littleton, CO", slug: "commercial-contractor-littleton-co" },
  { city: "Cherry Creek", slug: "commercial-contractor-cherry-creek-denver" },
  { city: "Cherry Hills Village", slug: "commercial-contractor-cherry-hills-village-co" },
  { city: "Cheesman Park", slug: "commercial-contractor-cheesman-park-denver" },
  { city: "Congress Park", slug: "commercial-contractor-congress-park-denver" },
];

export function ServiceAreasLinks() {
  return (
    <section className="py-16 bg-muted/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-2">
          <MapPin className="w-5 h-5 text-[#41b75b]" />
          <span className="text-sm font-semibold text-[#41b75b] uppercase tracking-wider">Coverage</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8">
          Service Areas
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {AREAS.map((area) => (
            <a
              key={area.slug}
              href={`/${area.slug}`}
              className="flex items-center gap-2 px-4 py-3 rounded-xl border border-border bg-background hover:border-[#41b75b]/50 hover:bg-[#41b75b]/5 transition-colors group"
            >
              <MapPin className="w-4 h-4 text-[#41b75b] shrink-0" />
              <span className="text-sm font-medium text-foreground group-hover:text-[#41b75b] transition-colors">
                {area.city}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
