import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

export default function NotFound() {
  return (
    <>
      <Nav />
      <main className="min-h-[60dvh] flex items-center">
        <div className="max-w-6xl mx-auto px-5 md:px-10 py-20">
          <p className="font-serif italic text-lg text-[var(--gold)]">Seite nicht gefunden</p>
          <h1 className="mt-3 font-serif text-[clamp(2.6rem,7vw,4.5rem)] leading-[1.02]">
            Da ist das Rössli durchgegangen.
          </h1>
          <p className="mt-6 text-[var(--stube-muted)]">
            Diese Seite gibt es nicht — die Karte und die Reservation aber schon:
          </p>
          <div className="mt-8 flex flex-wrap gap-6">
            <Link href="/" className="link-draw text-[var(--laden)]">
              Zur Startseite
            </Link>
            <Link href="/speisekarte" className="link-draw text-[var(--laden)]">
              Speisekarte
            </Link>
            <Link href="/reservation" className="link-draw text-[var(--laden)]">
              Tisch reservieren
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
