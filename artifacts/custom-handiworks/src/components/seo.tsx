import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
}

export function SEO({ 
  title = "Custom Handiworks | Premium Carpentry & Handyman in Denver, CO", 
  description = "Denver's trusted local experts for custom carpentry, deck building, home repairs, and renovations. Serving Denver and surrounding neighborhoods. Get a free quote today!" 
}: SEOProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "Custom Handiworks",
    "image": "https://customhandiworks.com/images/logo.png",
    "@id": "https://customhandiworks.com",
    "url": "https://customhandiworks.com",
    "telephone": "(720) 937-3004",
    "email": "hunter@customhandiworks.com",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 39.7294,
      "longitude": -104.9314
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 39.7294,
        "longitude": -104.9314
      },
      "geoRadius": "12874" // approx 8 miles in meters
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"
      ],
      "opens": "09:00",
      "closes": "17:00"
    },
    "priceRange": "$$"
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://customhandiworks.com" />
      <meta property="og:locale" content="en_US" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}
