import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
}

export function SEO({ 
  title = "Custom Handiworks | Precision Carpentry & Handyman Services in Denver, CO", 
  description = "Precision home repairs, custom carpentry, and finish work in Denver, CO. We fix what wasn't done right — and build things that last. Serving Denver and surrounding neighborhoods. Free estimates."
}: SEOProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "Custom Handiworks",
    "image": "https://www.customhandiworks.com/images/logo.png",
    "@id": "https://www.customhandiworks.com",
    "url": "https://www.customhandiworks.com",
    "telephone": "(720) 937-3004",
    "email": "hunter@customhandiworks.com",
    "description": "Custom carpentry, precision installations, and home repairs serving Denver, CO and surrounding neighborhoods including Capitol Hill, Cherry Creek, Park Hill, Lowry, and more.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Denver",
      "addressRegion": "CO",
      "postalCode": "80220",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 39.7294,
      "longitude": -104.9314
    },
    "areaServed": [
      { "@type": "City", "name": "Denver", "addressRegion": "CO" },
      { "@type": "Neighborhood", "name": "Capitol Hill" },
      { "@type": "Neighborhood", "name": "Cherry Creek" },
      { "@type": "Neighborhood", "name": "Park Hill" },
      { "@type": "Neighborhood", "name": "Lowry" },
      { "@type": "Neighborhood", "name": "Congress Park" },
      { "@type": "Neighborhood", "name": "Hilltop" },
      { "@type": "City", "name": "Aurora", "addressRegion": "CO" },
      { "@type": "City", "name": "Englewood", "addressRegion": "CO" }
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "00:00",
        "description": "By appointment"
      }
    ],
    "priceRange": "$$",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Carpentry & Handyman Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Home Repairs & Problem Solving", "areaServed": "Denver, CO" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Precision Installations", "areaServed": "Denver, CO" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom Carpentry & Finish Work", "areaServed": "Denver, CO" } }
      ]
    }
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="keywords" content="custom carpentry Denver, handyman Denver CO, home repairs Denver, finish carpentry Denver, precision installs Denver, built-ins Denver, trim work Denver, door installation Denver" />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.customhandiworks.com" />
      <meta property="og:locale" content="en_US" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}
