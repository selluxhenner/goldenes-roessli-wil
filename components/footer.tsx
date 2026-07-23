import Image from "next/image";
import Link from "next/link";
import { info } from "@/lib/info";

export function Footer() {
  return (
    <footer className="bg-[var(--nacht)] text-[var(--kalk)]">
      <div className="max-w-6xl mx-auto px-5 md:px-10 py-10 md:py-12">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo-roessli-horse.png"
                alt=""
                width={601}
                height={548}
                className="h-10 w-auto"
              />
              <p className="font-serif text-2xl leading-none">
                zum <em className="text-[var(--gold)]">goldenen</em> Rössli
              </p>
            </div>
            <p className="mt-3 text-sm text-[rgba(244,238,227,0.7)] leading-[1.7]">
              {info.strasse}, {info.plzOrt}
              <br />
              <a
                href={info.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link-draw hover:text-[var(--gold)] transition-colors duration-300"
              >
                Route planen
              </a>
            </p>
          </div>

          <div className="text-sm text-[rgba(244,238,227,0.7)] leading-[1.7]">
            <p>{info.zeiten.text}</p>
            <p>{info.zeiten.sonntag}</p>
          </div>

          <div className="text-sm leading-[1.7]">
            <a
              href={`tel:${info.telefonE164}`}
              className="link-draw hover:text-[var(--gold)] transition-colors duration-300"
            >
              {info.telefonInternational}
            </a>
            <br />
            <a
              href={`mailto:${info.email}`}
              className="link-draw text-[rgba(244,238,227,0.7)] hover:text-[var(--gold)] transition-colors duration-300"
            >
              {info.email}
            </a>
          </div>
        </div>

        <div className="mt-8 pt-5 border-t border-[rgba(244,238,227,0.15)] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-[rgba(244,238,227,0.55)]">
          <p>© 2026 {info.name}</p>
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
