import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { info } from "@/lib/info";

export const metadata: Metadata = {
  title: "Impressum – Restaurant zum goldenen Rössli Wil",
  description: "Impressum der Website des Restaurants zum goldenen Rössli in Wil SG.",
  robots: { index: false },
};

export default function ImpressumPage() {
  return (
    <>
      <Nav />
      <main className="min-h-[60dvh]">
        <div className="max-w-3xl mx-auto px-5 md:px-10 py-16 md:py-24">
          <Link
            href="/"
            className="link-draw text-sm text-[var(--stube-muted)] hover:text-[var(--stube)] transition-colors"
          >
            Zurück zur Startseite
          </Link>

          <h1 className="mt-8 font-serif text-[clamp(2rem,5vw,3rem)]">Impressum</h1>

          <div className="mt-10 space-y-10">
            <section>
              <h2 className="text-sm uppercase tracking-[0.18em] text-[var(--stube-faint)]">
                Betrieb
              </h2>
              <p className="mt-3 leading-[1.8]">
                {info.name}
                <br />
                {info.strasse}
                <br />
                {info.plzOrt}
                <br />
                Telefon:{" "}
                <a href={`tel:${info.telefonE164}`} className="link-draw">
                  {info.telefonInternational}
                </a>
                <br />
                E-Mail:{" "}
                <a href={`mailto:${info.email}`} className="link-draw">
                  {info.email}
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-sm uppercase tracking-[0.18em] text-[var(--stube-faint)]">
                Verantwortlich für den Inhalt
              </h2>
              <p className="mt-3 leading-[1.8]">
                Franco Lindura, Geschäftsführer und Küchenchef
              </p>
            </section>

            <section>
              <h2 className="text-sm uppercase tracking-[0.18em] text-[var(--stube-faint)]">
                Website
              </h2>
              <p className="mt-3 leading-[1.8]">
                Konzept, Gestaltung und Umsetzung:
                <br />
                Serviweb · Kevin Schmid
              </p>
            </section>

            <section>
              <h2 className="text-sm uppercase tracking-[0.18em] text-[var(--stube-faint)]">
                Haftungsausschluss
              </h2>
              <p className="mt-3 text-[var(--stube-muted)] leading-[1.8]">
                Alle Angaben auf dieser Website wurden sorgfältig geprüft. Für die Richtigkeit,
                Vollständigkeit und Aktualität der Inhalte kann trotzdem keine Gewähr übernommen
                werden. Änderungen bei Öffnungszeiten, Karte und Preisen bleiben jederzeit
                vorbehalten.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
