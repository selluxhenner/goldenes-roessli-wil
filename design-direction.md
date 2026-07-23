# Design Direction — Restaurant zum goldenen Rössli, Wil

## Grundentscheid

Helle Site. Das Rössli ist kein dunkler Club — die Stube ist sonnendurchflutet,
die Fassade kalkweiss. Die Site steht auf Kalk-Creme, nicht auf Nachtschwarz
(bewusster Kontrast zum Löwen-Pub-Build).

## Palette (jede Farbe hat eine Quelle im Haus)

```
--kalk:        #F4EEE3  /* der Kalkputz der Fassade und die Limewash-Wände der Stube */
--kalk-tief:   #ECE3D2  /* dieselbe Wand im Schatten — für abgesetzte Flächen */
--stube:       #26201A  /* das dunkle Nussbaum-Wainscot und der Nachtteppich — Text-Ink */
--laden:       #A63C28  /* das Oxidrot der Fensterläden — der Akzent, sparsam */
--gold:        #B8914E  /* Goldschrift "Gasthaus Rössli", Vordach, Messing-Pferdelampen */
--holz:        #8A6B49  /* das Honig-Holz von Täfer und Eingangstür — Muted/Sekundär */
--nacht:       #33405C  /* Nachtblau: Boxspringbetten + Kontrastfarbe der alten Site — Titel (h1/h2) und Footer, als Gegengewicht zum Rot */
```

Kontrast: --stube auf --kalk = ~13:1. Gold nie für Fliesstext (zu hell auf
Creme), nur für Eyebrows/Linien ≥ und grosse Ziffern; Rot auf Kalk = 5.9:1, ok
für Links und Akzente.

## Typografie

- **Display: Fraunces** (mit Optical Sizing + Italic). Altständige Serife mit
  weichen Tintenfallen — passt zu einem Gasthaus von Bestand, das eine
  Sterne-Küche beherbergt, ohne Didone-Steifheit. Die *Italic* übernimmt die
  Rolle der goldenen Schreibschrift auf der Fassade (Eyebrows, "Francos
  Empfehlung"), ohne eine Script-Font zu imitieren.
- **Body: Instrument Sans.** Unauffällig, gut lesbar, verschwindet.
- Beide via next/font self-hosted (kein Google-CDN-Request).

## Signature Move: **Die Karte als Karte**

Franco publiziert seine Tagesmenüs bewusst nicht im Voraus ("lassen Sie sich
überraschen") — auf den Tischen liegt die gedruckte Empfehlungskarte. Die Site
übernimmt das: **Speise-, Wein- und Empfehlungs-Inhalte werden als gesetzte
typografische Karte gezeigt** — einspaltige Listen auf Kalk-Grund, Preise in
Gold, feine Linien, keine Cards, keine Food-Grid-Kacheln, keine Icons. Der
Homepage-Mittelpunkt ist "Francos Empfehlung" als grosse gesetzte Karte.
Fotos rahmen die Karten (Fassade, Stube, Osso Bucco), sie ersetzen sie nie.

## Drei Adjektive

**gastlich · goldgefasst · bodenständig**
(nicht: modern, elegant, warm, rustikal, minimal)

## Weitere Festlegungen

- Logo: das goldene Pferd aus dem JPG-Logo, freigestellt als PNG
  (`scripts/logo.mjs` — Weiss→transparent, Textzeile weggeschnitten für die
  Pferd-Solo-Variante). Pferd in Nav + Footer, volles Logo mit Schriftzug im
  Hero. Ein echtes Vektor-Logo bleibt wünschenswert (TODO:CLIENT).
- Hero: die Fassade (Hochformat) bzw. die Stube — Text NEBEN dem Bild auf
  Kalkfläche, kein dunkler Gradient über dem Foto.
- Motion: eine Handvoll gezielter Reveals (Karten "legen sich auf den Tisch"),
  Rest statisch. prefers-reduced-motion respektiert. Nichts above the fold
  animiert beim Load.
- Hotel-Seite darf als einzige das Nachtblau tragen — die Zimmer sind
  tatsächlich blau.
