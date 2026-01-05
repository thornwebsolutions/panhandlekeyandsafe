import { Metadata } from "next";
import Page from "@/components/home";

export const metadata: Metadata = {
  title: "Panhandle Key & Safe | Professional Locksmith Services in Panama City, FL",
  description: "Panhandle Key & Safe - Panama City's trusted locksmith since 1984. Car lockouts, home security, commercial locks & safes. Call (850) 769-3030.",
  openGraph: {
    title: "Panhandle Key & Safe | Professional Locksmith Services",
    description: "Panhandle Key & Safe - Panama City's trusted locksmith since 1984. Car lockouts, home security, commercial locks & safes. Call (850) 769-3030.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Panhandle Key & Safe - Panama City Locksmith",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Panhandle Key & Safe",
  "description": "Professional locksmith services for automotive, residential, and commercial needs in Panama City, Florida since 1984.",
  "url": "https://www.panhandlekeyandsafe.com",
  "telephone": "+1-850-769-3030",
  "email": "panhandlekey1@yahoo.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1316 Jenks Ave",
    "addressLocality": "Panama City",
    "addressRegion": "FL",
    "postalCode": "32401",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 30.1588,
    "longitude": -85.6602
  },
  "areaServed": {
    "@type": "City",
    "name": "Panama City, FL"
  },
  "priceRange": "$$",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "07:30",
      "closes": "17:00"
    }
  ],
  "foundingDate": "1984",
  "image": "https://www.panhandlekeyandsafe.com/images/og-image.png",
  "sameAs": []
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Page />
    </>
  );
}
