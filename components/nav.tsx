"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { info } from "@/lib/info";

const links = [
  { href: "/speisekarte", label: "Speisekarte" },
  { href: "/weinkarte", label: "Weinkarte" },
  { href: "/hotel", label: "Hotel" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/kontakt", label: "Kontakt" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-[var(--kalk)]/95 backdrop-blur-sm border-b border-[var(--line)]">
      <nav className="max-w-6xl mx-auto px-5 md:px-10 h-16 md:h-20 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-3 font-serif text-lg md:text-xl leading-none"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/images/logo-roessli-horse.png"
            alt=""
            width={601}
            height={548}
            className="h-9 md:h-10 w-auto"
            priority
          />
          <span>
            zum{" "}
            <em className="not-italic font-serif italic text-[var(--gold)]">goldenen</em>{" "}
            Rössli
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`link-draw text-sm transition-colors duration-300 ${
                pathname === l.href
                  ? "text-[var(--laden)]"
                  : "text-[var(--stube-muted)] hover:text-[var(--stube)]"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/reservation"
            className="rounded-full border border-[var(--nacht)] text-[var(--nacht)] px-5 py-2 text-sm
                       hover:bg-[var(--nacht)] hover:text-[var(--kalk)] transition-colors duration-300"
          >
            Tisch reservieren
          </Link>
        </div>

        <div className="flex lg:hidden items-center gap-4">
          <a href={`tel:${info.telefonE164}`} className="text-sm text-[var(--laden)]">
            {info.telefonAnzeige}
          </a>
          <button
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? "Menü schliessen" : "Menü öffnen"}
            className="flex flex-col gap-[5px] p-2"
          >
            <span
              className={`block h-px w-6 bg-[var(--stube)] transition-transform ${open ? "translate-y-[3px] rotate-45" : ""}`}
            />
            <span
              className={`block h-px w-6 bg-[var(--stube)] transition-transform ${open ? "-translate-y-[3px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-[var(--line)] bg-[var(--kalk)]">
          <div className="px-5 py-6 flex flex-col gap-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`text-lg font-serif ${
                  pathname === l.href ? "text-[var(--laden)]" : "text-[var(--stube)]"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/reservation"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full border border-[var(--stube)] px-5 py-3 text-center
                         hover:bg-[var(--stube)] hover:text-[var(--kalk)] transition-colors"
            >
              Tisch reservieren
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
