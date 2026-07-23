"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
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
  const reduce = useReducedMotion();

  // Overlay offen: Seite dahinter nicht scrollen, Escape schliesst.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        open
          ? "bg-[var(--nacht)] border-[rgba(244,238,227,0.15)]"
          : "bg-[var(--kalk)]/95 backdrop-blur-sm border-[var(--line)]"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-5 md:px-10 h-16 md:h-20 flex items-center justify-between">
        <Link
          href="/"
          className={`flex items-center gap-3 font-serif text-lg md:text-xl leading-none transition-colors duration-300 ${
            open ? "text-[var(--kalk)]" : ""
          }`}
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
          {/* Auf sehr schmalen Screens fällt die Nummer weg — sie steht auch im Overlay */}
          <a
            href={`tel:${info.telefonE164}`}
            className={`max-[399px]:hidden text-sm transition-colors duration-300 ${
              open ? "text-[var(--gold)]" : "text-[var(--laden)]"
            }`}
          >
            {info.telefonAnzeige}
          </a>
          <button
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? "Menü schliessen" : "Menü öffnen"}
            className="flex flex-col gap-[5px] p-2"
          >
            <span
              className={`block h-px w-6 transition-all ${
                open ? "translate-y-[3px] rotate-45 bg-[var(--kalk)]" : "bg-[var(--stube)]"
              }`}
            />
            <span
              className={`block h-px w-6 transition-all ${
                open ? "-translate-y-[3px] -rotate-45 bg-[var(--kalk)]" : "bg-[var(--stube)]"
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile: Vollbild-Overlay in Nachtblau — die Stube am Abend.
          Links gesetzt wie die Karte, das Rössli als Wasserzeichen. */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden fixed inset-0 top-16 z-40 bg-[var(--nacht)] text-[var(--kalk)] overflow-hidden"
          >
            <Image
              src="/images/logo-roessli-horse.png"
              alt=""
              width={601}
              height={548}
              className="pointer-events-none select-none absolute -bottom-10 -right-8 w-80 opacity-[0.08]"
            />

            <div className="relative flex h-full flex-col px-6 pt-6 pb-8">
              <p className="font-serif italic text-[var(--gold)]">
                Gasthaus Rössli, Wil
              </p>

              <motion.ul
                initial={reduce ? false : "closed"}
                animate="open"
                variants={{
                  open: { transition: { staggerChildren: 0.06, delayChildren: 0.08 } },
                }}
                className="mt-4"
              >
                {links.map((l) => (
                  <motion.li
                    key={l.href}
                    variants={{
                      closed: { opacity: 0, y: 22 },
                      open: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
                      },
                    }}
                    className="border-b border-[rgba(184,145,78,0.3)]"
                  >
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className={`block py-3 font-serif text-[clamp(1.5rem,4.5vh,1.875rem)] leading-none ${
                        pathname === l.href
                          ? "italic text-[var(--gold)]"
                          : "text-[var(--kalk)]"
                      }`}
                    >
                      {l.label}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div
                initial={reduce ? false : { opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
                className="mt-auto pt-6"
              >
                <Link
                  href="/reservation"
                  onClick={() => setOpen(false)}
                  className="block rounded-full bg-[var(--laden)] text-[var(--kalk)] px-6 py-3
                             text-center text-lg"
                >
                  Tisch reservieren
                </Link>
                <a
                  href={`tel:${info.telefonE164}`}
                  className="mt-4 block text-center font-serif text-xl text-[var(--gold)]"
                >
                  {info.telefonInternational}
                </a>
                <p className="mt-2 text-center text-sm text-[rgba(244,238,227,0.6)] leading-[1.7]">
                  {info.zeiten.text}
                  <br />
                  {info.zeiten.sonntag}
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
