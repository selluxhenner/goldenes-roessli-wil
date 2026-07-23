import Link from "next/link";
import { info } from "@/lib/info";

export function Footer() {
  return (
    <footer className="bg-[var(--stube)] text-[var(--kalk)]">
      <div className="max-w-6xl mx-auto px-5 md:px-10 pt-16 md:pt-24 pb-14">
        <p className="text-sm uppercase tracking-[0.18em] text-[var(--gold)]">
          Toggenburgerstrasse 59, Wil
        </p>
        <p className="mt-4 font-serif text-[clamp(2.6rem,8vw,5.5rem)] leading-[0.98]">
          zum <em className="text-[var(--gold)]">goldenen</em> Rössli
        </p>

        <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-14">
          <div className="border-t border-[rgba(244,238,227,0.2)] pt-6">
            <h3 className="text-sm uppercase tracking-[0.18em] text-[rgba(244,238,227,0.5)]">
              Adresse
            </h3>
            <p className="mt-4 text-[rgba(244,238,227,0.75)] leading-[1.7]">
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
              className="link-draw mt-4 inline-block text-sm hover:text-[var(--gold)] transition-colors duration-300"
            >
              Route planen
            </a>
          </div>

          <div className="border-t border-[rgba(244,238,227,0.2)] pt-6">
            <h3 className="text-sm uppercase tracking-[0.18em] text-[rgba(244,238,227,0.5)]">
              Öffnungszeiten
            </h3>
            <p className="mt-4 text-[rgba(244,238,227,0.75)] leading-[1.7]">
              {info.zeiten.text}
              <br />
              {info.zeiten.sonntag}
            </p>
          </div>

          <div className="border-t border-[rgba(244,238,227,0.2)] pt-6">
            <h3 className="text-sm uppercase tracking-[0.18em] text-[rgba(244,238,227,0.5)]">
              Reservation
            </h3>
            <p className="mt-4 leading-[1.7]">
              <a
                href={`tel:${info.telefonE164}`}
                className="link-draw hover:text-[var(--gold)] transition-colors duration-300"
              >
                {info.telefonInternational}
              </a>
              <br />
              <a
                href={`mailto:${info.email}`}
                className="link-draw break-all text-[rgba(244,238,227,0.75)] hover:text-[var(--gold)] transition-colors duration-300"
              >
                {info.email}
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-[rgba(244,238,227,0.15)]">
        <div className="max-w-6xl mx-auto px-5 md:px-10 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-[rgba(244,238,227,0.5)]">
          <p>© 2026 {info.name} · Alle Rechte vorbehalten.</p>
          <div className="flex gap-5">
            <Link href="/impressum" className="link-draw hover:text-[var(--kalk)] transition-colors">
              Impressum
            </Link>
            <Link href="/datenschutz" className="link-draw hover:text-[var(--kalk)] transition-colors">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
