import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { ReservationForm } from "@/components/reservation-form";
import { info } from "@/lib/info";

export const metadata: Metadata = {
  title: "Tisch reservieren – Restaurant zum goldenen Rössli Wil",
  description:
    "Tisch reservieren im goldenen Rössli Wil: telefonisch unter +41 71 913 97 50 oder per E-Mail. Mo–Sa 11.30–15.00 und 17.30–23.00 Uhr, sonntags für Anlässe auf Anfrage.",
  alternates: { canonical: "/reservation" },
};

export default function ReservationPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="max-w-6xl mx-auto px-5 md:px-10 pt-14 md:pt-24 pb-20 md:pb-28">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-20">
            <div className="md:col-span-3">
              <h1 className="font-serif text-[clamp(2.6rem,7vw,4.5rem)] leading-[1.02]">
                Tisch reservieren
              </h1>
              <p className="mt-6 text-[var(--stube-muted)] max-w-prose leading-[1.7]">
                Am schnellsten geht es telefonisch — mittags und abends nimmt das Team direkt
                im Service ab:
              </p>
              <a
                href={`tel:${info.telefonE164}`}
                className="mt-4 inline-block font-serif text-[clamp(1.8rem,4vw,2.8rem)] text-[var(--laden)]"
              >
                {info.telefonInternational}
              </a>

              <ReservationForm />
            </div>

            <aside className="md:col-span-2">
              <div className="border-t-2 border-[var(--gold)] pt-6">
                <h2 className="text-sm uppercase tracking-[0.18em] text-[var(--stube-faint)]">
                  Öffnungszeiten
                </h2>
                <p className="mt-4 leading-[1.8] text-[var(--stube-muted)]">
                  {info.zeiten.text}
                  <br />
                  {info.zeiten.sonntag}
                </p>
              </div>

              <div className="mt-10 border-t-2 border-[var(--gold)] pt-6">
                <h2 className="text-sm uppercase tracking-[0.18em] text-[var(--stube-faint)]">
                  Ganze Fische
                </h2>
                <p className="mt-4 leading-[1.8] text-[var(--stube-muted)]">
                  Branzino im Salzteig und andere ganze Fische bereiten wir auf Vorbestellung
                  zu und tranchieren sie am Tisch. Bitte bei der Reservation angeben.
                </p>
              </div>

              <div className="mt-10 border-t-2 border-[var(--gold)] pt-6">
                <h2 className="text-sm uppercase tracking-[0.18em] text-[var(--stube-faint)]">
                  Anlässe & Bankette
                </h2>
                <p className="mt-4 leading-[1.8] text-[var(--stube-muted)]">
                  Für Familienfeste und Firmenanlässe öffnen wir das Rössli auch am Sonntag.
                  Der Saal im Haus fasst bis zu 50 Personen — rufen Sie uns für ein Angebot an.
                </p>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
