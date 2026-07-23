import { ReactNode } from "react";

// Die gesetzte Karte: einspaltige Liste wie die gedruckte Karte auf dem Tisch.
// Keine Cards, keine Bilder in der Liste — siehe design-direction.md.

export interface KarteItem {
  name: string;
  beschrieb?: string;
  preis: string;
}

export function KarteSektion({
  titel,
  items,
  intro,
}: {
  titel: string;
  items: KarteItem[];
  intro?: ReactNode;
}) {
  return (
    <section className="mt-14 first:mt-0">
      <h2 className="font-serif italic text-2xl md:text-3xl text-[var(--laden)]">{titel}</h2>
      {intro && <div className="mt-3 text-[var(--stube-muted)] max-w-prose">{intro}</div>}
      <ul className="mt-6 space-y-6">
        {items.map((item) => (
          <li key={item.name} className="border-b border-[var(--line)] pb-5 last:border-b-0">
            <p className="font-serif text-lg md:text-xl leading-snug">
              {item.name} <span className="karte-preis text-base md:text-lg">{item.preis}</span>
            </p>
            {item.beschrieb && (
              <p className="mt-1 text-[15px] text-[var(--stube-muted)] max-w-prose">
                {item.beschrieb}
              </p>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
