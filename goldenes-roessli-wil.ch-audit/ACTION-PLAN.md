# Action Plan — goldenes-roessli-wil.ch

## Phase 1 — Critical fixes, inside Hoststar Designer (Week 1, ~3h)
- [ ] **Titles** (Critical):
  - `/` → "Restaurant zum goldenen Rössli – Gourmet-Restaurant & Boutique-Hotel in Wil SG"
  - `/speisekarte` → "Speisekarte – Restaurant zum goldenen Rössli Wil"
  - `/weinkarte` → "Weinkarte & Vinothek – Goldenes Rössli Wil"
  - `/hotel` → "Boutique-Hotel in Wil SG – Zimmer & Preise | Goldenes Rössli"
  - `/über-uns` → "Über uns – Franco Lindura & das Team | Goldenes Rössli Wil"
- [ ] **Unique meta description per page** (Critical) — full sentences, 150 chars, with "Wil SG", phone, CTA. Remove the current line-break fragment used site-wide.
- [ ] **H1 per page** (Critical) — promote the first H2 to H1 in each page's layout.
- [ ] **Alt text for all images** (High) — descriptive German: "Vitello Tonnato im Restaurant zum goldenen Rössli Wil".
- [ ] **Fix "Toggenburgerstrase" → "Toggenburgerstrasse"** in footer (High, 5 min).
- [ ] **Unify business name** with Google Business Profile everywhere (High).
- [ ] **Lower "AI protection" from high to a level that allows AI search agents** (High) — at minimum OAI-SearchBot, ChatGPT-User, PerplexityBot, Perplexity-User, Claude-SearchBot, Claude-User, Google-Extended.

## Phase 2 — High-impact, partly platform-limited (Weeks 2–3)
- [ ] Compress/re-upload key images ≤150KB (pre-compress before upload since builder won't).
- [ ] Add og:image (hero dish or house facade) if builder allows; otherwise note for rebuild.
- [ ] Embed Google Maps + link to Google Business Profile; add "Route planen".
- [ ] Show ratings: "4.4★ auf Google · 4.8★ auf search.ch" with links.
- [ ] Update GBP: ensure website URL, menu link, attributes, fresh photos; reply to reviews.
- [ ] Hotel page: add room count, prices from/bis, photos, checkin info (currently 85 words).

## Phase 3 — Rebuild (Month 2) — items impossible on BaseKit
- [ ] New site, 5–8 pages, schema-capable stack (e.g. static site or CMS of choice).
- [ ] JSON-LD: Restaurant + Hotel + Menu + OpeningHoursSpecification + aggregateRating source links.
- [ ] Online table reservation widget (e.g. Foratable/aleno/local Swiss solution) — biggest conversion lever.
- [ ] Hotel booking path (direct form or OTA link).
- [ ] WebP/AVIF, lazy loading, responsive srcset, single small CSS/JS bundle → CWV green.
- [ ] `/ueber-uns` ASCII slug + 301 from `/über-uns`; add Kontakt/Anfahrt page; optional Events/Bankette page (banquet keyword demand: "Sonntag für Anlässe geöffnet" is currently invisible).
- [ ] Custom robots.txt (allow AI search agents, keep training-bots opt-out if desired) + llms.txt.
- [ ] HSTS + security headers, proper cache headers.

## Phase 4 — Ongoing
- [ ] Keep Speise-/Weinkarte lastmod fresh (currently updated ~quarterly — good, continue).
- [ ] Monthly review responses on Google; photo uploads.
- [ ] Track "restaurant wil", "gourmet restaurant wil sg", "hotel wil sg", "bankett wil" in Search Console (set up GSC — no verification currently detectable).
