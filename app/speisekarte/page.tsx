import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { KarteSektion, KarteItem } from "@/components/karte";
import { Reveal } from "@/components/reveal";
import { info } from "@/lib/info";

export const metadata: Metadata = {
  title: "Speisekarte – Restaurant zum goldenen Rössli Wil",
  description:
    "Die Karte im goldenen Rössli Wil: Rössli-Rindstatar, Tagliolini mit schwarzem Trüffel, Entrecôte Rössli, Kalbs-Ossobuco für zwei. Mittags drei Menüs ab CHF 25.50.",
  alternates: { canonical: "/speisekarte" },
};

const vorspeisen: KarteItem[] = [
  {
    name: "Rössli-Rindstatar",
    beschrieb: "zart gewürzt, mit Kartoffel-Espuma, Wachtelei und Belper Knolle",
    preis: "27 / 37",
  },
  {
    name: "Cremige Burrata",
    beschrieb: "mit sanft pochierter Tomate, Basilikumsorbet und Balsamico-Perlen",
    preis: "24",
  },
  {
    name: "Randen-Carpaccio",
    beschrieb:
      "mit ausgelöster Wachtelbrust und Wachtelkeule, Mascarpone-Mousse und schwarzem Trüffel",
    preis: "28",
  },
  {
    name: "Thunfisch-Tataki",
    beschrieb: "mit Gurken, Avocadocreme und Poke-Sauce",
    preis: "29",
  },
  {
    name: "Kartoffel-Spinat-Suppe",
    beschrieb: "mit Stunden-Ei und schwarzem Trüffel",
    preis: "15",
  },
  {
    name: "Nüsslisalat",
    beschrieb: "mit Orangenfilets, Parmigiano, Bündnerfleisch und Senf-Honig-Dressing",
    preis: "18",
  },
  {
    name: "Bunt gemischter Salat",
    beschrieb: "mit gerösteten Kürbiskernen und Haus-Dressing",
    preis: "13",
  },
  {
    name: "Tomatensalat",
    beschrieb: "mit eingelegten Zwiebeln und Avocado",
    preis: "14",
  },
];

const pasta: KarteItem[] = [
  {
    name: "Tagliolini",
    beschrieb: "mit schwarzem Trüffel und Babyspinat",
    preis: "29 / 38",
  },
  {
    name: "Cremiges Zitronenrisotto",
    beschrieb: "mit geräuchertem Lachs und Dillschaum",
    preis: "24 / 32",
  },
  {
    name: "Ravioli mit Carbonara-Füllung",
    beschrieb: "und Parmesan-Schaum",
    preis: "23 / 31",
  },
  {
    name: "Vegane Ravioli",
    beschrieb: "mit Tofu, getrockneten Tomaten, Oliven, Cherrytomaten und Pinienkernen",
    preis: "20 / 26",
  },
  {
    name: "Ravioli laktose- und glutenfrei",
    beschrieb: "mit Champignons, Zucchetti, Basilikum und Tomaten-Concassé",
    preis: "20 / 26",
  },
];

const hauptspeisen: KarteItem[] = [
  {
    name: "Seezunge",
    beschrieb: "mit Belper Knolle, Spinat und Karotten-Ingwer-Sauce, dazu Gemüse",
    preis: "62",
  },
  {
    name: "Maispoulardenbrust",
    beschrieb: "mit Rohschinken, Risotto, Rotweinsauce, Salbeischaum und Gemüse",
    preis: "39",
  },
  {
    name: "Entrecôte Rössli",
    beschrieb: "der Hausklassiker — mit Kräuterbutter gratiniert, dazu Gemüse und Kartoffelgratin",
    preis: "49",
  },
  {
    name: "Rinds-Stroganoff",
    beschrieb: "mit hausgemachten Spätzli",
    preis: "49",
  },
  {
    name: "Kalbssteak im Kartoffelmantel",
    beschrieb: "mit schwarzem Trüffel, dazu Gemüse und Trüffel-Hollandaise-Schaum",
    preis: "56",
  },
  {
    name: "Wienerschnitzel vom Kalb",
    beschrieb: "mit Preiselbeeren und Bratkartoffeln",
    preis: "49",
  },
  {
    name: "Kalbs-Ossobuco, Francos Geheimtipp",
    beschrieb: "für 2 Personen, dazu Wurzelgemüse und Risotto",
    preis: "120",
  },
];

const desserts: KarteItem[] = [
  { name: "Hausgemachtes Tiramisu", preis: "10" },
  {
    name: "Warmes Schokoladensoufflé",
    beschrieb: "mit Passionsfrucht und Orangenkompott",
    preis: "14",
  },
  { name: "Toblerone-Mousse", beschrieb: "mit Waldfrucht-Coulis", preis: "12" },
  { name: "Panna Cotta", beschrieb: "mit Mango", preis: "10" },
  { name: "Rosmarin-Crème-brûlée", preis: "12" },
];

// Menu-Schema aus denselben Arrays wie die sichtbare Karte — kann nicht driften.
const menuSchema = {
  "@context": "https://schema.org",
  "@type": "Menu",
  name: "Speisekarte Restaurant zum goldenen Rössli",
  inLanguage: "de-CH",
  hasMenuSection: (
    [
      ["Vorspeisen", vorspeisen],
      ["Pasta", pasta],
      ["Hauptspeisen", hauptspeisen],
      ["Dessert", desserts],
    ] as const
  ).map(([name, items]) => ({
    "@type": "MenuSection",
    name,
    hasMenuItem: items.map((item) => ({
      "@type": "MenuItem",
      name: item.name,
      ...(item.beschrieb ? { description: item.beschrieb } : {}),
      offers: {
        "@type": "Offer",
        price: item.preis.split(" / ")[0],
        priceCurrency: "CHF",
      },
    })),
  })),
};

export default function SpeisekartePage() {
  return (
    <>
      <Nav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(menuSchema) }}
      />
      <main>
        <section className="max-w-6xl mx-auto px-5 md:px-10 pt-14 md:pt-24 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-14 items-end">
            <div className="md:col-span-3">
              <p className="font-serif italic text-[var(--gold)] text-lg">Preise in CHF</p>
              <h1 className="mt-3 font-serif text-[clamp(2.6rem,7vw,4.5rem)] leading-[1.02]">
                Speisekarte
              </h1>
              <p className="mt-6 text-[var(--stube-muted)] max-w-prose leading-[1.7]">
                Mittags kommen dazu drei Tagesmenüs mit Salat oder Tagessuppe und Dessert, ab
                CHF {info.mittagsmenuPreis} — Franco stellt sie jeden Morgen nach dem
                Frischangebot zusammen, darum stehen sie nicht im Voraus online.
              </p>
            </div>
            <figure className="md:col-span-2">
              <Image
                src="/images/speisekarte-01-osso-bucco.jpg"
                alt="Kalbs-Ossobuco in der Kupferpfanne im Restaurant zum goldenen Rössli Wil"
                width={1939}
                height={1454}
                className="w-full h-auto"
                priority
              />
              <figcaption className="mt-2 text-xs text-[var(--stube-faint)]">
                Francos Ossobuco, geschmort und in der Kupferpfanne serviert — für zwei.
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="max-w-3xl mx-auto px-5 md:px-10 pb-20 md:pb-28">
          <Reveal>
            <KarteSektion titel="Vorspeisen" items={vorspeisen} />
          </Reveal>
          <Reveal>
            <KarteSektion titel="Pasta" items={pasta} />
          </Reveal>
          <Reveal>
            <KarteSektion titel="Hauptspeisen" items={hauptspeisen} />
          </Reveal>
          <Reveal>
            <KarteSektion titel="Dessert" items={desserts} />
          </Reveal>

          <div className="mt-16 border-t border-[var(--line)] pt-8">
            <p className="text-[var(--stube-muted)] max-w-prose leading-[1.7]">
              Ganze Fische servieren wir auf Vorbestellung — zum Beispiel Branzino im Salzteig,
              am Tisch tranchiert. Sagen Sie uns bei der{" "}
              <Link href="/reservation" className="link-draw text-[var(--laden)]">
                Reservation
              </Link>{" "}
              Bescheid.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
