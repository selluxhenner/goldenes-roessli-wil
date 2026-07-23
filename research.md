# Research — Restaurant zum goldenen Rössli, Wil SG

Stand 2026-07-23. Primärquellen: eigene Website (Inhalte in
[material/content/](material/content/)), externe Recherche in
[material/content/external-research.md](material/content/external-research.md),
SEO-Audit in [goldenes-roessli-wil.ch-audit/](goldenes-roessli-wil.ch-audit/).
Dieses Dokument konsolidiert, was der Build tatsächlich verwendet.

## 1. Die Geschichte (der wertvollste Stoff)

- Historisches **Gasthaus Rössli** an der Toggenburgerstrasse 59, Wil SG.
  Fassade trägt in Goldschrift "Gasthaus Rössli"; Website nennt sich
  "Restaurant zum goldenen Rössli". → Naming im Build: **Restaurant zum
  goldenen Rössli** (wie GBP/Website), Gebäudename als Story-Element.
- Vorgänger **Familie Geissbühler** schloss Ende 2023. Eigentümer
  **Turi Breitenmoser** holte **Franco Lindura** als Pächter;
  **Neueröffnung 1. März 2024**.
- Konzept (Tagblatt): "Gehobene Küche für alle" — Spitzenküche plus
  Mittagsmenüs ab CHF 25.50 für Arbeiter.
- **Franco Lindura**: geboren in Benevento (Kampanien), lernte in München
  (~30 Jahre dort), Stationen: Hangar-7/Ikarus Salzburg, Vila Joya Algarve
  (2 Michelin-Sterne), Rosa Alpina Südtirol, La Barakka Luzern, Spanien,
  Portugal. Arbeitete mit Juan Amador, Dieter Müller, Eckart Witzigmann.
- Tagblatt-Restauranttest "Kulinarik mit Sterne-Touch": sehr positiv —
  aufmerksamer Service, tadellose Technik, aussergewöhnliches
  Preis-Leistungs-Verhältnis.
- Rössli-Motiv physisch im Haus: Pferdekopf-Wandlampen, Stickkissen,
  gestickte Frotteetücher. Goldenes Vordach, rote Fensterläden.

## 2. Harte Fakten

| | |
|---|---|
| Name | Restaurant zum goldenen Rössli |
| Adresse | Toggenburgerstrasse 59, 9500 Wil SG (Achtung: alte Site schreibt falsch "Toggenburgerstrase") |
| Telefon | +41 71 913 97 50 |
| E-Mail | reservation@goldenes-roessli-wil.ch |
| Öffnungszeiten | Mo–Sa 11.30–15.00 / 17.30–23.00, So geschlossen (für Anlässe auf Anfrage) |
| Mittagsmenüs | täglich 3 Menüs inkl. Salat/Suppe + Dessert ab CHF 25.50, nicht vorab publiziert |
| Hotel | Boutique-Hotel: DZ CHF 180, EZ CHF 150 |
| Bankett | Saal bis 50 Personen (aus Verzeichnissen — NICHT auf alter Website; TODO:CLIENT bestätigen) |
| Parken | Tiefgarage/Parkplätze (aus Verzeichnissen; TODO:CLIENT bestätigen) |
| Bewertungen | Google 4.4★ · search.ch 4.8★ (12 Bew.) |
| Kapazität Restaurant | NOT FOUND |
| Barrierefreiheit | NOT FOUND |
| Feiertagsregelung | NOT FOUND |

## 3. Signature-Gerichte (Wortlaut der Küche)

- **Kalbs-Ossobuco "Francos Geheimtipp"**, für 2 Personen, Wurzelgemüse +
  Risotto, CHF 120 — eigenes Foto vorhanden (Kupferpfanne).
- **Entrecôte Rössli** ("Hausklassiker"), Kräuterbutter gratiniert, CHF 49
- Ganze Fische auf Vorbestellung — **Branzino im Salzteig, am Tisch
  tranchiert** (eigenes Foto: Chef flambiert/tranchiert am Tisch)
- Rössli-Rindstatar mit Kartoffel-Espuma, Wachtelei, Belper Knolle 27/37
- Tagliolini mit schwarzem Trüffel und Babyspinat 29/38
- Volle Speise- und Weinkarte: material/content/speisekarte.md + weinkarte.md
- Weinkarten-Motto: **"Vinum bonum deorum donum"** / "Ein guter Wein ist
  Geschenk der Götter" — steht so auf der Weinkarte, Seite heisst "Vinothek".

## 4. Bilder

Alle in [material/images/](material/images/), Quelle: eigenes CDN der
Website → **Eigentum des Restaurants, frei nutzbar**. Details + Zuordnung in
[material/MANIFEST.md](material/MANIFEST.md). Kein Vektor-Logo vorhanden
(nur JPG mit Hintergrund) → Wortmarke im Build, Logo als TODO:CLIENT.

## 5. Stimme

Alte Website: förmliches Hochdeutsch mit ß-Fehlern ("Genießen" auf einer
CH-Site) und viel Füllstoff. Presse-Zitat Franco: "Mit meiner Leidenschaft
möchte ich meine Gäste mit Gerichten verwöhnen, die das Herz und die Seele
erwärmen." Instagram-Ton: NOT FOUND (Handle unklar). → Build-Stimme:
Schweizer Hochdeutsch (ss statt ß), konkret statt blumig, Sie-Form.

## 6. SEO-Vorgaben aus dem Audit

- Page-Titles gemäss ACTION-PLAN.md Phase 1 übernehmen.
- `/ueber-uns` als ASCII-Slug, 301 von `/über-uns`.
- Alte Slugs beibehalten: `/speisekarte`, `/weinkarte`, `/hotel`.
- Kontakt-/Anfahrt-Seite und Anlässe/Bankett-Inhalt ergänzen ("Sonntag für
  Anlässe geöffnet" ist unsichtbar).
- robots.txt: AI-Search-Agents zulassen; llms.txt anlegen.
- JSON-LD: Restaurant + Hotel + Menu + OpeningHours; keine erfundene
  aggregateRating.
