import type React from "react";
import type { Metadata } from "next";
import { Fraunces, Instrument_Sans } from "next/font/google";
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
  metadataBase: new URL("https://goldenes-roessli-wil.ch"),
  title: "Restaurant zum goldenen Rössli – Gourmet-Restaurant & Boutique-Hotel in Wil SG",
  description:
    "Franco Lindura kocht im historischen Gasthaus Rössli an der Toggenburgerstrasse 59 in Wil SG: Mittagsmenüs ab CHF 25.50, Fisch im Salzteig, grosse Weinkarte. Mo–Sa geöffnet. Reservation: +41 71 913 97 50.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de-CH" className="scroll-smooth">
      <body className={`${fraunces.variable} ${instrument.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
