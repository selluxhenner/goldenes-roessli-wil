"use client";

import { useState } from "react";
import { info } from "@/lib/info";

// Baut eine E-Mail im Mailprogramm des Gastes zusammen — kein Server, keine Speicherung.
export function ReservationForm() {
  const [name, setName] = useState("");
  const [telefon, setTelefon] = useState("");
  const [datum, setDatum] = useState("");
  const [zeit, setZeit] = useState("");
  const [personen, setPersonen] = useState("2");
  const [mitteilung, setMitteilung] = useState("");

  const mailto = () => {
    const subject = `Tisch-Reservation: ${datum || "Datum offen"}, ${personen} Personen`;
    const body = [
      `Guten Tag`,
      ``,
      `Ich möchte gerne einen Tisch reservieren.`,
      ``,
      `Name: ${name}`,
      `Telefon: ${telefon}`,
      `Datum: ${datum}`,
      `Zeit: ${zeit}`,
      `Personen: ${personen}`,
      mitteilung ? `Mitteilung: ${mitteilung}` : ``,
      ``,
      `Freundliche Grüsse`,
      name,
    ].join("\n");
    return `mailto:${info.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const feld =
    "w-full bg-transparent border-b border-[var(--line)] py-3 outline-none " +
    "focus:border-[var(--laden)] transition-colors placeholder:text-[var(--stube-faint)]";

  return (
    <form
      className="mt-8"
      onSubmit={(e) => {
        e.preventDefault();
        window.location.href = mailto();
      }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
        <label className="block">
          <span className="text-sm text-[var(--stube-faint)]">Name</span>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={feld}
            autoComplete="name"
          />
        </label>
        <label className="block">
          <span className="text-sm text-[var(--stube-faint)]">Telefon für Rückfragen</span>
          <input
            required
            type="tel"
            value={telefon}
            onChange={(e) => setTelefon(e.target.value)}
            className={feld}
            autoComplete="tel"
          />
        </label>
        <label className="block">
          <span className="text-sm text-[var(--stube-faint)]">Datum</span>
          <input
            required
            type="date"
            value={datum}
            onChange={(e) => setDatum(e.target.value)}
            className={feld}
          />
        </label>
        <label className="block">
          <span className="text-sm text-[var(--stube-faint)]">Zeit</span>
          <input
            required
            type="time"
            value={zeit}
            onChange={(e) => setZeit(e.target.value)}
            className={feld}
          />
        </label>
        <label className="block">
          <span className="text-sm text-[var(--stube-faint)]">Personen</span>
          <input
            required
            type="number"
            min="1"
            max="50"
            value={personen}
            onChange={(e) => setPersonen(e.target.value)}
            className={feld}
          />
        </label>
        <label className="block sm:col-span-2">
          <span className="text-sm text-[var(--stube-faint)]">
            Mitteilung (z. B. ganzer Fisch auf Vorbestellung, Allergien)
          </span>
          <input
            value={mitteilung}
            onChange={(e) => setMitteilung(e.target.value)}
            className={feld}
          />
        </label>
      </div>

      <button
        type="submit"
        className="mt-8 rounded-full bg-[var(--laden)] text-[var(--kalk)] px-7 py-3
                   hover:opacity-90 transition-opacity"
      >
        Anfrage per E-Mail senden
      </button>
      <p className="mt-3 text-sm text-[var(--stube-faint)]">
        Öffnet Ihr E-Mail-Programm mit der fertigen Anfrage an {info.email}. Die Reservation
        gilt erst nach unserer Bestätigung.
      </p>
    </form>
  );
}
