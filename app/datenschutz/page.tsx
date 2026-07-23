import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { info } from "@/lib/info";

export const metadata: Metadata = {
  title: "Datenschutz – Restaurant zum goldenen Rössli Wil",
  description: "Datenschutzerklärung der Website des Restaurants zum goldenen Rössli in Wil SG.",
  robots: { index: false },
};

const abschnitte = [
  {
    titel: "Grundsatz",
    text: `Der Schutz Ihrer Daten ist uns wichtig. Wir bearbeiten Personendaten nach schweizerischem Datenschutzrecht (revDSG) und nur so weit, wie es für den Betrieb dieser Website und die Beantwortung Ihrer Anfragen nötig ist.`,
  },
  {
    titel: "Verantwortliche Stelle",
    text: `${info.name}, ${info.strasse}, ${info.plzOrt}. E-Mail: ${info.email}, Telefon: ${info.telefonInternational}.`,
  },
  {
    titel: "Reservationsanfragen",
    text: `Wenn Sie uns über das Reservationsformular oder direkt per E-Mail schreiben, erhalten wir die Angaben, die Sie machen (Name, Kontaktdaten, Datum, Personenzahl, Mitteilung). Diese Angaben verwenden wir ausschliesslich zur Bearbeitung Ihrer Reservation und löschen sie, sobald sie dafür nicht mehr benötigt werden. Das Formular öffnet eine E-Mail in Ihrem eigenen E-Mail-Programm — es werden keine Formulardaten auf einem Server dieser Website gespeichert.`,
  },
  {
    titel: "Server-Logdaten",
    text: `Beim Aufruf der Website fallen beim Hosting-Anbieter technisch bedingt Zugriffsdaten an (IP-Adresse, Datum und Uhrzeit, aufgerufene Seite, Browsertyp). Diese Daten dienen der Sicherheit und Stabilität des Betriebs und werden nicht mit anderen Datenquellen zusammengeführt.`,
  },
  {
    titel: "Keine Cookies, kein Tracking",
    text: `Diese Website setzt keine Analyse- oder Marketing-Cookies ein und bindet keine Karten- oder Social-Media-Dienste ein. Schriften werden von unserem eigenen Server geladen; es werden keine Daten an Font-Dienste Dritter übermittelt. Der Link "Route planen" führt zu Google Maps — erst wenn Sie ihn anklicken, gelten die Datenschutzbestimmungen von Google.`,
  },
  {
    titel: "Ihre Rechte",
    text: `Sie haben das Recht auf Auskunft über die zu Ihrer Person bearbeiteten Daten sowie auf deren Berichtigung oder Löschung. Wenden Sie sich dazu an die oben genannte verantwortliche Stelle.`,
  },
];

export default function DatenschutzPage() {
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

          <h1 className="mt-8 font-serif text-[clamp(2rem,5vw,3rem)]">Datenschutz</h1>
          <p className="mt-4 text-sm text-[var(--stube-faint)]">Stand: Juli 2026</p>

          <div className="mt-10 space-y-10">
            {abschnitte.map((a) => (
              <section key={a.titel}>
                <h2 className="text-sm uppercase tracking-[0.18em] text-[var(--stube-faint)]">
                  {a.titel}
                </h2>
                <p className="mt-3 text-[var(--stube-muted)] leading-[1.8]">{a.text}</p>
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
