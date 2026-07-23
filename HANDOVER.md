# Handover — goldenes-roessli-wil (Demo-Build, 2026-07-23)

Next.js 16 / Tailwind 4 / framer-motion, statisch exportierbar. Dev: `npm run dev`,
Build: `npm run build`. Design-Begründungen in [design-direction.md](design-direction.md),
Faktenbasis in [research.md](research.md).

## TODO:CLIENT — vor Launch vom Client zu liefern/bestätigen

**Fakten bestätigen (auf der Site sichtbar!):**
- [ ] **Saal bis 50 Personen** (Reservation + Kontakt-FAQ) — Quelle ist local.ch,
      evtl. noch aus der Geissbühler-Ära. Zahl bestätigen oder korrigieren.
- [ ] **Tiefgarage/Parkplätze** (Kontakt-FAQ) — gleiche Quelle, bestätigen.
- [ ] Google-Bewertung **4.4★** / search.ch **4.8★** (Startseite) — Stand Juli 2026,
      bei Launch aktualisieren.
- [ ] "Zuletzt auf der Karte" (Startseite) = Sommer-Empfehlungskarte — beim
      Saisonwechsel ersetzen.

**Fehlende Inhalte:**
- [ ] Vektor-Logo — das JPG-Logo ist jetzt freigestellt eingebaut (Pferd in
      Nav/Footer, volles Logo im Hero; erzeugt via `scripts/logo.mjs`). Für
      Druck/Retina bleibt eine echte Vektorversion wünschenswert.
- [ ] Impressum: Rechtsform + Handelsregister-/MwSt-Nummer, falls eingetragen
      (bewusst nichts erfunden — aktuell nur Betrieb + Verantwortlicher)
- [ ] Datenschutz: Hosting-Anbieter benennen, sobald Deployment-Ziel feststeht
- [ ] Hotel: Zimmeranzahl, Check-in-Zeiten, Frühstück ja/nein
- [ ] Kapazität Restaurant, Barrierefreiheit, Feiertagsregelung
- [ ] Instagram-/Facebook-Links, falls gewünscht (Handles unklar, alte FB-Page
      evtl. vom Vorgänger — nicht verlinkt)

## Bildrechte

Alle 27 Bilder stammen vom eigenen CDN der bisherigen Website
(files.designer.hoststar.ch) → Eigentum des Restaurants, **frei nutzbar**.
Zuordnung Original-URL ↔ Datei in [material/MANIFEST.md](material/MANIFEST.md).
Keine Presse- oder Fremdbilder verwendet.

## Drittdienste im Einsatz

- **Keine.** Fonts self-hosted (next/font), keine Cookies, kein Tracking,
  keine Maps-Einbettung (nur Link zu Google Maps), Formular = mailto (keine
  Server-Speicherung). Datenschutzerklärung entspricht diesem Stand — bei
  jedem neuen Dienst (Analytics, Reservations-Widget) ergänzen.

## Empfehlungen für den nächsten Schritt

1. **Reservations-Widget** (Foratable/aleno o. ä.) statt mailto-Formular —
   grösster Conversion-Hebel laut Audit. Dann Datenschutz ergänzen!
2. 301-Redirects sind für `/über-uns` → `/ueber-uns` konfiguriert; alte Slugs
   (`/speisekarte`, `/weinkarte`, `/hotel`) blieben identisch.
3. Citation-Cleanup (local.ch etc. führen Alt-Daten) — Liste in
   [material/content/external-research.md](material/content/external-research.md).
4. Google Search Console einrichten (bisher keine Verifikation vorhanden).
5. Geo-Koordinaten im Restaurant-Schema nachtragen, sobald exakt geokodiert
   (bewusst weggelassen statt geschätzt).
