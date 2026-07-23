import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { info } from "@/lib/info";

export const metadata: Metadata = {
  title: "Kontakt & Anfahrt – Restaurant zum goldenen Rössli Wil",
  description:
    "Restaurant zum goldenen Rössli, Toggenburgerstrasse 59, 9500 Wil SG. Telefon +41 71 913 97 50. Mo–Sa 11.30–15.00 und 17.30–23.00 Uhr, Sonntag geschlossen.",
  alternates: { canonical: "/kontakt" },
};

const fragen = [
  {
    frage: "Wo kann ich parkieren?",
    antwort:
      "Das Haus verfügt über eine Tiefgarage mit eigenen Parkplätzen. Die Toggenburgerstrasse 59 liegt wenige Gehminuten von der Wiler Altstadt entfernt.",
  },
  {
    frage: "Gibt es vegetarische und vegane Gerichte?",
    antwort:
      "Ja. Auf der Karte stehen unter anderem vegane Ravioli mit Tofu, getrockneten Tomaten und Pinienkernen sowie laktose- und glutenfreie Ravioli. Sagen Sie uns Allergien bei der Reservation — die Küche stellt sich darauf ein.",
  },
  {
    frage: "Kann man am Sonntag essen?",
    antwort:
      "Sonntags ist das Restaurant geschlossen. Für Familienfeste, Firmenanlässe und Bankette öffnen wir auf Anfrage — der Saal fasst bis zu 50 Personen.",
  },
  {
    frage: "Kann ich für eine grössere Gruppe reservieren?",
    antwort:
      "Ja, bis 50 Personen im Saal. Rufen Sie uns an, dann besprechen wir Menü und Ablauf direkt mit Ihnen.",
  },
  {
    frage: "Kann ich im Haus übernachten?",
    antwort:
      "Ja — über dem Restaurant liegen die Boutique-Zimmer des Gasthauses: Doppelzimmer CHF 180.–, Einzelzimmer CHF 150.–. Details auf der Hotel-Seite.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: fragen.map((f) => ({
    "@type": "Question",
    name: f.frage,
    acceptedAnswer: { "@type": "Answer", text: f.antwort },
  })),
};

export default function KontaktPage() {
  return (
    <>
      <Nav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main>
        <section className="max-w-6xl mx-auto px-5 md:px-10 pt-14 md:pt-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            <div>
              <h1 className="font-serif text-[clamp(2.6rem,7vw,4.5rem)] leading-[1.02]">
                Kontakt & Anfahrt
              </h1>

              <div className="mt-10 space-y-8">
                <div className="border-t border-[var(--line)] pt-5">
                  <h2 className="text-sm uppercase tracking-[0.18em] text-[var(--stube-faint)]">
                    Adresse
                  </h2>
                  <p className="mt-3 leading-[1.8]">
                    {info.name}
                    <br />
                    {info.strasse}
                    <br />
                    {info.plzOrt}
                  </p>
                  <a
                    href={info.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-draw mt-3 inline-block text-[var(--laden)]"
                  >
                    Route planen (Google Maps)
                  </a>
                </div>

                <div className="border-t border-[var(--line)] pt-5">
                  <h2 className="text-sm uppercase tracking-[0.18em] text-[var(--stube-faint)]">
                    Reservation
                  </h2>
                  <p className="mt-3 leading-[1.8]">
                    Telefon:{" "}
                    <a href={`tel:${info.telefonE164}`} className="link-draw text-[var(--laden)]">
                      {info.telefonInternational}
                    </a>
                    <br />
                    E-Mail:{" "}
                    <a href={`mailto:${info.email}`} className="link-draw break-all">
                      {info.email}
                    </a>
                  </p>
                </div>

                <div className="border-t border-[var(--line)] pt-5">
                  <h2 className="text-sm uppercase tracking-[0.18em] text-[var(--stube-faint)]">
                    Öffnungszeiten
                  </h2>
                  <p className="mt-3 leading-[1.8]">
                    {info.zeiten.text}
                    <br />
                    {info.zeiten.sonntag}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <Image
                src="/images/home-03-hochformat.jpg"
                alt="Fassade des Gasthauses Rössli in Wil: weisses Haus mit roten Fensterläden und goldenem Schriftzug"
                width={828}
                height={1283}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </section>

        <section className="max-w-3xl mx-auto px-5 md:px-10 py-16 md:py-24">
          <h2 className="font-serif italic text-2xl md:text-3xl text-[var(--laden)]">
            Häufige Fragen
          </h2>
          <div className="mt-8">
            {/* Native <details>: klappbar, aber die Antworten bleiben als Text im HTML (GEO) */}
            {fragen.map((f) => (
              <details
                key={f.frage}
                className="group border-b border-[var(--line)] py-5 first:border-t"
              >
                <summary className="flex items-baseline justify-between gap-4 cursor-pointer list-none font-serif text-xl [&::-webkit-details-marker]:hidden">
                  {f.frage}
                  <span
                    aria-hidden
                    className="text-[var(--gold)] transition-transform duration-300 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 text-[var(--stube-muted)] leading-[1.7] max-w-prose">
                  {f.antwort}
                </p>
              </details>
            ))}
          </div>
          <p className="mt-10 text-[var(--stube-muted)]">
            Ihre Frage ist nicht dabei? <a href={`tel:${info.telefonE164}`} className="link-draw text-[var(--laden)]">Rufen Sie an</a> oder{" "}
            <Link href="/reservation" className="link-draw text-[var(--laden)]">
              schreiben Sie uns über das Reservationsformular
            </Link>
            .
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
