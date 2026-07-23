import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { KarteSektion, KarteItem } from "@/components/karte";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Weinkarte & Vinothek – Goldenes Rössli Wil",
  description:
    "Die Weinkarte im goldenen Rössli Wil: Offenweine ab CHF 10, Schweizer Gewächse, Toskana von Le Volte bis Biserno, Ribera del Duero, Champagne Deutz und Ruinart.",
  alternates: { canonical: "/weinkarte" },
};

const schaumwein: KarteItem[] = [
  {
    name: "Prosecco Borgo Antico Superiore Brut",
    beschrieb: "Conegliano Valdobbiadene, Italien – Glera",
    preis: "10 / 55",
  },
  {
    name: "Champagne Deutz Brut Classic",
    beschrieb: "Champagne, Frankreich – Chardonnay, Pinot Noir, Pinot Meunier",
    preis: "18 / 98",
  },
  {
    name: "Champagne Ruinart Rosé",
    beschrieb: "Champagne, Frankreich – Chardonnay, Pinot Noir",
    preis: "155",
  },
  {
    name: "Champagne Ruinart Blanc de Blancs",
    beschrieb: "Champagne, Frankreich – Chardonnay",
    preis: "150",
  },
];

const weissOffen: KarteItem[] = [
  {
    name: "Nadine Saxer Chardonnay",
    beschrieb: "Neftenbach, Ostschweiz – Chardonnay",
    preis: "10 / 55",
  },
  {
    name: "Nadine Saxer Sauvignon Blanc",
    beschrieb: "Neftenbach, Ostschweiz – Sauvignon Blanc",
    preis: "10 / 55",
  },
  {
    name: "Terlan Pinot Grigio Tradition",
    beschrieb: "Südtirol, Italien – Pinot Grigio",
    preis: "10 / 49",
  },
  {
    name: "Terlaner Cuvée",
    beschrieb: "Südtirol, Italien – Pinot Bianco, Chardonnay, Sauvignon Blanc",
    preis: "10 / 49",
  },
  {
    name: "Beringer Chardonnay",
    beschrieb: "Napa Valley, USA – Chardonnay",
    preis: "13 / 69",
  },
];

const roseOffen: KarteItem[] = [
  {
    name: "Ultimate Provence Rosé",
    beschrieb: "Provence, Frankreich – Cinsault, Syrah, Rolle, Grenache Noir",
    preis: "10 / 59",
  },
  {
    name: "Domaines Ott, Château de Selle",
    beschrieb: "Provence, Frankreich – Cinsault, Grenache, Mourvèdre",
    preis: "15 / 89",
  },
];

const rotOffen: KarteItem[] = [
  {
    name: "Vinattieri Roncaia Riserva",
    beschrieb: "Tessin, Schweiz – Merlot",
    preis: "10 / 55",
  },
  {
    name: "Le Volte dell'Ornellaia",
    beschrieb: "Toskana, Italien – Cabernet Sauvignon, Merlot, Petit Verdot",
    preis: "12 / 65",
  },
  {
    name: "Bricco dell'Uccellone",
    beschrieb: "Piemont, Italien – Barbera",
    preis: "18 / 118",
  },
  {
    name: "Tamaral Crianza",
    beschrieb: "Ribera del Duero DO, Spanien – Tempranillo",
    preis: "10 / 60",
  },
  {
    name: "Mauro",
    beschrieb: "Castilla y León, Spanien – Tempranillo, Syrah, Cabernet Sauvignon, Graciano",
    preis: "15 / 85",
  },
];

const weisswein: KarteItem[] = [
  {
    name: "Dézaley Médinette Grand Cru",
    beschrieb: "Waadt, Schweiz – Chasselas",
    preis: "65",
  },
  {
    name: "Fläscher Meta",
    beschrieb: "Fläsch, Graubünden – Chardonnay, Viognier",
    preis: "69",
  },
  {
    name: "Terlaner Cuvée",
    beschrieb: "Südtirol, Italien – Pinot Bianco, Chardonnay, Sauvignon Blanc",
    preis: "49",
  },
  {
    name: "Maria Costanza Bianco",
    beschrieb: "Sizilien, Italien – Chardonnay, Inzolia",
    preis: "59",
  },
  {
    name: "Pouilly-Fumé",
    beschrieb: "Loire, Frankreich – Sauvignon Blanc",
    preis: "75",
  },
  {
    name: "Meursault, Louis Latour",
    beschrieb: "Burgund, Frankreich – Chardonnay",
    preis: "125",
  },
  {
    name: "Famille Perrin Châteauneuf-du-Pape Les Sinards Blanc",
    beschrieb: "Rhône, Frankreich – Clairette, Grenache Blanc, Roussanne",
    preis: "99",
  },
  {
    name: "Aalto Blanco",
    beschrieb: "Ribera del Duero DO, Spanien – Verdejo, Godello, Albillo",
    preis: "99",
  },
  {
    name: "Beringer Chardonnay",
    beschrieb: "Napa Valley, USA – Chardonnay",
    preis: "69",
  },
];

const rotSchweiz: KarteItem[] = [
  {
    name: "Vinattieri Roncaia Riserva",
    beschrieb: "Tessin, Schweiz – Merlot",
    preis: "55",
  },
  {
    name: "Irene Grünenfelder Alte Reben",
    beschrieb: "Jenins, Graubünden – Pinot Noir",
    preis: "90",
  },
];

const rotFrankreich: KarteItem[] = [
  {
    name: "Château Phélan Ségur",
    beschrieb: "Bordeaux, Frankreich – Cabernet Sauvignon, Merlot, Cabernet Franc",
    preis: "89",
  },
  {
    name: "Château Ferrière Margaux",
    beschrieb: "Bordeaux, Frankreich – Cabernet Sauvignon, Merlot, Petit Verdot, Cabernet Franc",
    preis: "99",
  },
  {
    name: "Famille Perrin Châteauneuf-du-Pape Les Sinards Rouge",
    beschrieb: "Rhône, Frankreich – Grenache, Mourvèdre, Syrah",
    preis: "85",
  },
];

const rotItalien: KarteItem[] = [
  {
    name: "Bricco dell'Uccellone",
    beschrieb: "Piemont, Italien – Barbera",
    preis: "118",
  },
  {
    name: "Speri Amarone Classico della Valpolicella",
    beschrieb: "Venetien, Italien – Corvina, Molinara, Rondinella",
    preis: "89",
  },
  {
    name: "Le Volte dell'Ornellaia",
    beschrieb: "Toskana, Italien – Cabernet Sauvignon, Merlot, Petit Verdot",
    preis: "65",
  },
  {
    name: "Guidalberto",
    beschrieb: "Toskana, Italien – Cabernet Sauvignon, Merlot",
    preis: "79",
  },
  {
    name: "Le Serre Nuove dell'Ornellaia",
    beschrieb: "Toskana, Italien – Merlot, Cabernet Sauvignon, Cabernet Franc",
    preis: "109",
  },
  {
    name: "Il Pino di Biserno",
    beschrieb: "Toskana, Italien – Cabernet Franc, Cabernet Sauvignon, Merlot, Petit Verdot",
    preis: "99",
  },
  {
    name: "Argentiera Bolgheri",
    beschrieb: "Toskana, Italien – Merlot, Cabernet Sauvignon, Cabernet Franc",
    preis: "145",
  },
  {
    name: "Biserno",
    beschrieb: "Toskana, Italien – Cabernet Sauvignon, Cabernet Franc, Merlot, Petit Verdot",
    preis: "245",
  },
  {
    name: "Tignanello, Marchesi Antinori",
    beschrieb: "Toskana, Italien – Sangiovese, Cabernet Sauvignon, Cabernet Franc",
    preis: "220",
  },
];

const rotSpanien: KarteItem[] = [
  {
    name: "Tamaral Crianza",
    beschrieb: "Ribera del Duero DO, Spanien – Tempranillo",
    preis: "60",
  },
  {
    name: "Hacienda Monasterio",
    beschrieb: "Ribera del Duero DO, Spanien – Tempranillo, Merlot, Cabernet Sauvignon, Malbec",
    preis: "89",
  },
  {
    name: "Aalto",
    beschrieb: "Ribera del Duero DO, Spanien – Tempranillo",
    preis: "89",
  },
  {
    name: "Flor de Pingus",
    beschrieb: "Ribera del Duero DO, Spanien – Tempranillo, Cabernet Sauvignon, Graciano",
    preis: "149",
  },
  {
    name: "Mauro",
    beschrieb: "Castilla y León, Spanien – Tempranillo, Syrah, Cabernet Sauvignon, Graciano",
    preis: "85",
  },
  {
    name: "Clio",
    beschrieb: "Jumilla, Spanien – Monastrell, Cabernet Sauvignon",
    preis: "99",
  },
];

const rotWelt: KarteItem[] = [
  {
    name: "Penfolds Bin 389",
    beschrieb: "Südaustralien, Australien – Shiraz, Cabernet Sauvignon",
    preis: "125",
  },
  {
    name: "Beringer Cabernet Sauvignon",
    beschrieb: "Napa Valley, USA – Cabernet Sauvignon, Petit Verdot, Merlot",
    preis: "99",
  },
  {
    name: "BV Beaulieu Vineyard",
    beschrieb: "Napa Valley, USA – Cabernet Sauvignon, Petite Syrah, Malbec, Charbono",
    preis: "89",
  },
  {
    name: "Overture, Release by Opus One",
    beschrieb: "Napa Valley, USA – Cabernet Sauvignon, Merlot, Cabernet Franc, Petit Verdot",
    preis: "245",
  },
  {
    name: "The Chocolate Block",
    beschrieb: "Franschhoek, Südafrika – Syrah, Grenache, Cinsault, Cabernet Sauvignon, Viognier",
    preis: "69",
  },
];

export default function WeinkartePage() {
  return (
    <>
      <Nav />
      <main>
        <section className="max-w-3xl mx-auto px-5 md:px-10 pt-14 md:pt-24 pb-6">
          <p className="font-serif italic text-[var(--gold)] text-lg">
            Vinum bonum deorum donum
          </p>
          <h1 className="mt-3 font-serif text-[clamp(2.6rem,7vw,4.5rem)] leading-[1.02]">
            Weinkarte
          </h1>
          <p className="mt-6 text-[var(--stube-muted)] max-w-prose leading-[1.7]">
            Offene Weine stehen mit Glas- und Flaschenpreis (CHF pro dl / Flasche). Die Karte
            reicht von Neftenbach und Fläsch über das Tessin bis nach Bolgheri, Ribera del
            Duero und ins Napa Valley.
          </p>
        </section>

        <section className="max-w-3xl mx-auto px-5 md:px-10 pb-20 md:pb-28">
          <Reveal>
            <KarteSektion titel="Schaumwein" items={schaumwein} />
          </Reveal>
          <Reveal>
            <KarteSektion titel="Weisswein offen" items={weissOffen} />
          </Reveal>
          <Reveal>
            <KarteSektion titel="Roséwein offen" items={roseOffen} />
          </Reveal>
          <Reveal>
            <KarteSektion titel="Rotwein offen" items={rotOffen} />
          </Reveal>
          <Reveal>
            <KarteSektion titel="Weisswein" items={weisswein} />
          </Reveal>
          <Reveal>
            <KarteSektion titel="Rotwein Schweiz" items={rotSchweiz} />
          </Reveal>
          <Reveal>
            <KarteSektion titel="Rotwein Frankreich" items={rotFrankreich} />
          </Reveal>
          <Reveal>
            <KarteSektion titel="Rotwein Italien" items={rotItalien} />
          </Reveal>
          <Reveal>
            <KarteSektion titel="Rotwein Spanien" items={rotSpanien} />
          </Reveal>
          <Reveal>
            <KarteSektion titel="Übersee & Südafrika" items={rotWelt} />
          </Reveal>

          <p className="mt-16 border-t border-[var(--line)] pt-8 font-serif italic text-[var(--stube-muted)]">
            «Ein guter Wein ist Geschenk der Götter.»
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
