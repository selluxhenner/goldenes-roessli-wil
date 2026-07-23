import type { Metadata } from "next";
import Image from "next/image";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/reveal";
import { info } from "@/lib/info";

export const metadata: Metadata = {
  title: "Boutique-Hotel in Wil SG – Zimmer & Preise | Goldenes Rössli",
  description:
    "Übernachten im Gasthaus Rössli in Wil SG: Boutique-Zimmer über dem Restaurant, Doppelzimmer CHF 180, Einzelzimmer CHF 150. Reservation: +41 71 913 97 50.",
  alternates: { canonical: "/hotel" },
};

const hotelSchema = {
  "@context": "https://schema.org",
  "@type": "Hotel",
  name: `Boutique-Hotel ${info.gebaeude}`,
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
  url: `${info.url}/hotel`,
  priceRange: "CHF 150–180",
  image: [`${info.url}/images/hotel-01.jpg`],
};

export default function HotelPage() {
  return (
    <>
      <Nav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hotelSchema) }}
      />
      <main>
        <section className="max-w-6xl mx-auto px-5 md:px-10 pt-14 md:pt-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <p className="font-serif italic text-lg text-[var(--nacht)]">
                Schlafen, wo Sie gegessen haben
              </p>
              <h1 className="mt-3 font-serif text-[clamp(2.6rem,7vw,4.5rem)] leading-[1.02]">
                Boutique-Hotel
              </h1>
              <p className="mt-6 text-[var(--stube-muted)] max-w-prose leading-[1.7]">
                Über der Gaststube liegen die Zimmer des Gasthauses: Boxspringbetten in
                Nachtblau, goldene Leuchten — und aufs Frottee ist ein goldenes Rössli
                gestickt. Wer abends das Menü mit Weinbegleitung nimmt, muss danach nur noch
                die Treppe hoch.
              </p>

              <div className="mt-10 border-t border-[var(--line)]">
                <div className="flex items-baseline justify-between border-b border-[var(--line)] py-4">
                  <p className="font-serif text-xl">Doppelzimmer</p>
                  <p className="karte-preis text-xl">CHF {info.hotel.doppelzimmer}.–</p>
                </div>
                <div className="flex items-baseline justify-between border-b border-[var(--line)] py-4">
                  <p className="font-serif text-xl">Einzelzimmer</p>
                  <p className="karte-preis text-xl">CHF {info.hotel.einzelzimmer}.–</p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={`tel:${info.telefonE164}`}
                  className="rounded-full bg-[var(--nacht)] text-[var(--kalk)] px-6 py-3
                             hover:opacity-90 transition-opacity"
                >
                  Zimmer anfragen: {info.telefonAnzeige}
                </a>
                <a
                  href={`mailto:${info.email}?subject=Zimmer-Reservation`}
                  className="link-draw self-center text-[var(--stube-muted)] hover:text-[var(--stube)] transition-colors"
                >
                  oder per E-Mail
                </a>
              </div>
            </div>

            <Reveal>
              <Image
                src="/images/hotel-01.jpg"
                alt="Doppelzimmer mit nachtblauem Boxspringbett und goldenen Leuchten im Gasthaus Rössli Wil"
                width={1600}
                height={1200}
                className="w-full h-auto"
                priority
              />
            </Reveal>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-5 md:px-10 py-16 md:py-24">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            <Reveal>
              <Image
                src="/images/hotel-02.jpg"
                alt="Hotelzimmer mit Sessel, Wand-TV und zwei Fenstern im Gasthaus Rössli Wil"
                width={1600}
                height={1200}
                className="w-full h-auto"
              />
            </Reveal>
            <Reveal delay={80}>
              <Image
                src="/images/hotel-03.jpg"
                alt="Zimmer mit grauem Polsterbett, Orchidee und blauem Teppich im Gasthaus Rössli Wil"
                width={1600}
                height={1200}
                className="w-full h-auto"
              />
            </Reveal>
            <Reveal delay={160} className="col-span-2 md:col-span-1">
              <Image
                src="/images/hotel-04.jpg"
                alt="Weisse Frotteetücher mit gesticktem goldenem Rössli im Badezimmer"
                width={1600}
                height={1200}
                className="w-full h-auto"
              />
            </Reveal>
          </div>
          <p className="mt-6 text-sm text-[var(--stube-faint)]">
            Ob Geschäftsreise oder Kurzaufenthalt: Reservation direkt beim Haus, telefonisch
            oder per E-Mail.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
