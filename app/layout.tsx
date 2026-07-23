import type React from "react";
import type { Metadata } from "next";
import { Fraunces, Instrument_Sans } from "next/font/google";
import { info } from "@/lib/info";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  axes: ["opsz"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL(info.url),
  title: {
    default:
      "Restaurant zum goldenen Rössli – Gourmet-Restaurant & Boutique-Hotel in Wil SG",
    template: "%s",
  },
  description:
    "Franco Lindura kocht im historischen Gasthaus Rössli an der Toggenburgerstrasse 59 in Wil SG: Mittagsmenüs ab CHF 25.50, Fisch im Salzteig, grosse Weinkarte. Mo–Sa geöffnet. Reservation: +41 71 913 97 50.",
  openGraph: {
    type: "website",
    locale: "de_CH",
    siteName: info.name,
    images: [
      {
        url: "/images/home-04-breit.jpg",
        width: 1600,
        height: 900,
        alt: "Getäferte Gaststube des Gasthauses Rössli in Wil",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

// Restaurant-Schema: Werte müssen zeichengenau mit dem Google Business Profile
// übereinstimmen — Quelle ist lib/info.ts. Keine erfundene aggregateRating.
const restaurantSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: info.name,
  image: [
    `${info.url}/images/home-03-hochformat.jpg`,
    `${info.url}/images/home-04-breit.jpg`,
    `${info.url}/images/speisekarte-01-osso-bucco.jpg`,
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: info.strasse,
    addressLocality: "Wil",
    postalCode: "9500",
    addressRegion: "SG",
    addressCountry: "CH",
  },
  telephone: info.telefonE164,
  email: info.email,
  url: info.url,
  servesCuisine: ["Italienisch", "Mediterran", "Schweizerisch"],
  priceRange: "$$$",
  acceptsReservations: "True",
  hasMenu: `${info.url}/speisekarte`,
  foundingDate: "2024-03-01",
  founder: { "@type": "Person", name: "Franco Lindura" },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "11:30",
      closes: "15:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "17:30",
      closes: "23:00",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de-CH" className="scroll-smooth">
      <body className={`${fraunces.variable} ${instrument.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
