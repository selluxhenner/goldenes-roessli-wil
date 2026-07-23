import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/reveal";
import { KarteSektion, KarteItem } from "@/components/karte";
import { info } from "@/lib/info";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const empfehlung: KarteItem[] = [
  {
    name: "Vitello Tonnato",
    beschrieb: "zart gegartes Kalbfleisch in feiner Thunfisch-Kapern-Crème",
    preis: "35",
  },
  {
    name: "Thunfisch-Tatar und gebratene Jakobsmuscheln",
    beschrieb: "auf erfrischender Tomaten-Wassermelonen-Gazpacho",
    preis: "39",
  },
  {
    name: "Eisbergsalat mit gegrillten Riesencrevetten",
    beschrieb: "dazu marinierte Zucchini-Julienne und eingelegter Randen-Lachs",
    preis: "45",
  },
  {
    name: "Frische Spinat-Tagliolini",
    beschrieb: "mit Sommertrüffel und Wachtelei",
    preis: "39",
  },
  {
    name: "Rosa gebratene Entenbrust",
    beschrieb: "fein geschnitten, mit Balsamico-Kirschen und grilliertem Chicorée",
    preis: "35",
  },
  {
    name: "Gegrilltes Branzino-Filet",
    beschrieb: "mit Minz-Tomaten-Vinaigrette und frischem Marktgemüse",
    preis: "49",
  },
  {
    name: "Rindsmedaillon mit schwarzem Trüffel",
    beschrieb: "gegrillte Crevette und grillierte Rande, kräftige Portweinsauce",
    preis: "65",
  },
];

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero: füllt den Viewport (abzüglich Nav), Text neben dem Bild, kein Gradient über dem Foto */}
        <section className="max-w-6xl mx-auto px-5 md:px-10 py-10 min-h-[calc(100dvh-4rem)] md:min-h-[calc(100dvh-5rem)] flex items-center">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-16 items-center">
            <div className="md:col-span-3">
              <Image
                src="/images/logo-roessli-full.png"
                alt="Logo: goldenes Rössli, Zum goldenen Rössli Wil"
                width={895}
                height={571}
                className="w-40 md:w-52 h-auto"
                priority
              />
              <h1 className="mt-6 font-serif text-[clamp(2.8rem,8vw,5.5rem)] leading-[1.0] tracking-[-0.01em]">
                Gehobene Küche
                <br />
                für alle.
              </h1>
              <p className="mt-7 max-w-[52ch] text-[var(--stube-muted)] leading-[1.75]">
                Seit März 2024 kocht Franco Lindura — Benevento, München, Hangar-7 Salzburg,
                Vila Joya an der Algarve — im weissen Gasthaus mit den roten Fensterläden.
                Abends Seezunge und Ossobuco, mittags drei Menüs ab CHF{" "}
                {info.mittagsmenuPreis} inklusive Suppe oder Salat und Dessert.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-5">
                <Link
                  href="/reservation"
                  className="rounded-full bg-[var(--laden)] text-[var(--kalk)] px-7 py-3
                             hover:opacity-90 transition-opacity"
                >
                  Tisch reservieren
                </Link>
                <a
                  href={`tel:${info.telefonE164}`}
                  className="link-draw text-[var(--stube)] hover:text-[var(--laden)] transition-colors"
                >
                  {info.telefonInternational}
                </a>
              </div>
              <p className="mt-8 text-sm text-[var(--stube-faint)]">
                {info.zeiten.text} · {info.zeiten.sonntag}
              </p>
            </div>

            <div className="md:col-span-2">
              <Image
                src="/images/home-03-hochformat.jpg"
                alt="Weisse Fassade des Gasthauses Rössli in Wil mit roten Fensterläden, goldenem Schriftzug und goldenem Vordach"
                width={828}
                height={1283}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </section>

        {/* Signature Move: Francos Empfehlung als gesetzte Karte */}
        <section className="bg-[var(--kalk-tief)] border-y border-[var(--line)]">
          <div className="max-w-3xl mx-auto px-5 md:px-10 py-16 md:py-24">
            <Reveal>
              <p className="text-sm uppercase tracking-[0.18em] text-[var(--stube-faint)]">
                Wechselt nach Markt und Saison
              </p>
              <h2 className="mt-3 font-serif text-[clamp(2.2rem,6vw,3.8rem)] leading-[1.05] text-[var(--nacht)]">
                Francos <em className="text-[var(--gold)]">Empfehlung</em>
              </h2>
              <p className="mt-5 max-w-prose text-[var(--stube-muted)] leading-[1.7]">
                Die Empfehlungskarte entsteht aus dem, was der Markt hergibt. Die Mittagsmenüs
                stellt Franco jeden Morgen frisch zusammen — sie stehen bewusst nicht im
                Voraus online. Lassen Sie sich überraschen.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <KarteSektion titel="Zuletzt auf der Karte" items={empfehlung} />
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-10">
                <Link href="/speisekarte" className="link-draw text-[var(--laden)]">
                  Zur ganzen Speisekarte
                </Link>
              </p>
            </Reveal>
          </div>
        </section>

        {/* Fisch am Tisch */}
        <section className="max-w-6xl mx-auto px-5 md:px-10 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <Reveal>
              <Image
                src="/images/home-01-frischer-fisch.jpg"
                alt="Frische Branzini auf einem Tablett vor dem Weinregal im goldenen Rössli Wil"
                width={1600}
                height={1200}
                className="w-full h-auto"
              />
            </Reveal>
            <div>
              <h2 className="font-serif text-[clamp(1.9rem,4vw,3rem)] leading-[1.1] text-[var(--nacht)]">
                Ganze Fische, am Tisch tranchiert
              </h2>
              <p className="mt-6 max-w-prose text-[var(--stube-muted)] leading-[1.75]">
                Auf Vorbestellung serviert Franco ganze Fische — zum Beispiel mediterranen
                Branzino im Salzteig, der am Tisch aufgeschlagen und tranchiert wird. Bestellen
                Sie ihn bei der Reservation vor.
              </p>
              <p className="mt-6">
                <Link href="/reservation" className="link-draw text-[var(--laden)]">
                  Fisch vorbestellen
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* Die Stube — fixierter Bildgrund, die Seite scrollt darüber hinweg */}
        <section>
          <div
            role="img"
            aria-label="Getäferte Gaststube mit Kassettendecke, Kristallleuchten und Pferdekopf-Wandlampen im Gasthaus Rössli Wil"
            className="h-[50vh] bg-cover bg-center bg-fixed"
            style={{ backgroundImage: "url(/images/home-04-breit.jpg)" }}
          />
          <div className="max-w-6xl mx-auto px-5 md:px-10 py-10 md:py-14 grid grid-cols-1 md:grid-cols-2 gap-6">
            <p className="font-serif text-[clamp(1.5rem,3vw,2.2rem)] leading-[1.2]">
              Täfer, Kassettendecke, Pferdekopf-Lampen aus Messing.
            </p>
            <p className="text-[var(--stube-muted)] leading-[1.75] self-end">
              Die Stube ist die alte geblieben — das Rössli hängt hier buchstäblich an der
              Wand. Neu ist, was aus der Küche kommt.
            </p>
          </div>
        </section>

        {/* Echte Bewertungen, verlinkt */}
        <section className="border-y border-[var(--line)] bg-[var(--kalk-tief)]">
          <div className="max-w-6xl mx-auto px-5 md:px-10 py-12 md:py-16">
            <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-14">
              <p className="font-serif text-[clamp(1.4rem,2.5vw,1.9rem)] leading-[1.3] max-w-xl">
                «Kulinarik mit Sterne-Touch» — das St.&nbsp;Galler Tagblatt über seinen
                Restauranttest im Rössli.
              </p>
              <div className="flex gap-8 md:ml-auto">
                <a
                  href="https://maps.google.com/?q=Restaurant+zum+goldenen+R%C3%B6ssli+Wil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-draw"
                >
                  <span className="karte-preis font-serif text-3xl">4.4</span>
                  <span className="block text-sm text-[var(--stube-faint)]">auf Google</span>
                </a>
                <a
                  href="https://search.ch/tel/wil/toggenburgerstrasse-59/roessli-gasthaus.de.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-draw"
                >
                  <span className="karte-preis font-serif text-3xl">4.8</span>
                  <span className="block text-sm text-[var(--stube-faint)]">auf search.ch</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Hotel-Teaser */}
        <section className="max-w-6xl mx-auto px-5 md:px-10 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="md:order-2">
              <Reveal>
                <Image
                  src="/images/hotel-01.jpg"
                  alt="Doppelzimmer mit nachtblauem Boxspringbett im Boutique-Hotel des Gasthauses Rössli Wil"
                  width={1600}
                  height={1200}
                  className="w-full h-auto"
                />
              </Reveal>
            </div>
            <div className="md:order-1">
              <p className="font-serif italic text-lg text-[var(--nacht)]">
                Und danach die Treppe hoch
              </p>
              <h2 className="mt-3 font-serif text-[clamp(1.9rem,4vw,3rem)] leading-[1.1] text-[var(--nacht)]">
                Zimmer über der Stube
              </h2>
              <p className="mt-6 max-w-prose text-[var(--stube-muted)] leading-[1.75]">
                Doppelzimmer CHF {info.hotel.doppelzimmer}.–, Einzelzimmer CHF{" "}
                {info.hotel.einzelzimmer}.–. Boxspringbetten in Nachtblau, und aufs Frottee
                ist ein goldenes Rössli gestickt.
              </p>
              <p className="mt-6">
                <Link href="/hotel" className="link-draw text-[var(--laden)]">
                  Zum Hotel
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
