# SEO Audit — goldenes-roessli-wil.ch
**Restaurant zum goldenen Rössli, Toggenburgerstrasse 59, 9500 Wil SG**
Audit date: 2026-07-23 · Pages crawled: 5/5 · Platform: BaseKit (Hoststar Designer), built 2024

---

## Executive Summary

## SEO Health Score: 34 / 100

| Category | Weight | Score | Weighted |
|---|---|---|---|
| Technical SEO | 22% | 62 | 13.6 |
| Content Quality | 23% | 42 | 9.7 |
| On-Page SEO | 20% | 22 | 4.4 |
| Schema / Structured Data | 10% | 0 | 0.0 |
| Performance (CWV) | 10% | 45 | 4.5 |
| AI Search Readiness | 10% | 8 | 0.8 |
| Images | 5% | 15 | 0.8 |
| **Total** | | | **≈ 34** |

**Business type detected:** Local Service — hybrid brick-and-mortar (gourmet restaurant + boutique hotel), Wil SG, German-language, single location.

### Top 5 critical issues
1. **Homepage title tag is "Startseite"** — no brand, no location, no keyword. This is what Google shows in search results.
2. **No H1 on any page**; identical broken meta description (with literal line breaks) on all 5 pages.
3. **Zero structured data** — no Restaurant/Hotel/Menu/OpeningHours schema on a business that lives from local search.
4. **robots.txt blocks 81 AI crawlers site-wide** (ChatGPT, Claude, Perplexity, Google-Extended …) — invisible to AI-assisted restaurant discovery.
5. **13/14 homepage images have no alt text**; all uncompressed JPEG, no lazy loading → ~3MB homepage, ~5s DOMContentLoaded.

### Top 5 quick wins
1. Rewrite all 5 title tags + 5 unique meta descriptions (doable inside Hoststar Designer, ~1h).
2. Add alt text to all images (~1h).
3. Fix footer typo "Toggenburgerstra**s**e" and align business name with the Google Business Profile ("Gasthaus zum goldenen Rössli" vs "Restaurant zum goldenen Rössli" — pick one everywhere).
4. Lower Hoststar's "AI protection" level so at least search agents (OAI-SearchBot, PerplexityBot, Claude-SearchBot) can read the site.
5. Embed Google reviews / rating and a Maps map — ratings (4.4 Google, 4.8 search.ch) are the site's strongest unused asset.

### What genuinely works
- Fast, stable Swiss hosting (TTFB ~100ms), valid HTTPS, clean sitemap, Google fully crawlable
- Menu and wine list as indexable HTML text (not PDF) — rare and valuable
- Named chef (Franco Lindura), real prices, maintained seasonal content
- Strong review reputation off-site (Google 4.4 · search.ch 4.8 · TripAdvisor #3 of 8)

---

## Detailed findings
See [findings/technical.md](findings/technical.md), [findings/onpage-content.md](findings/onpage-content.md), [findings/schema-local-geo.md](findings/schema-local-geo.md), [findings/performance-images-visual.md](findings/performance-images-visual.md).

---

## Redesign assessment ("is a redesign worth it?")

**Verdict: Yes — a rebuild is justified, but for capability reasons, not aesthetics.**

The site (built 2024, ©2024 footer) is not "old" by age, but it is **capped by its platform**. On BaseKit/Hoststar Designer you realistically cannot:
- inject JSON-LD schema (Restaurant/Hotel/Menu) — category score is 0 and will stay 0
- serve WebP/AVIF, lazy-load, or fix the 5 render-blocking JS bundles
- add an online table-reservation widget or hotel booking flow
- control robots.txt granularly (AI-block is a preset toggle)
- set per-page og:images for social sharing

Roughly **40 of the missing 66 points are locked behind the platform**. The fixable-in-place items (titles, descriptions, alts, name consistency) are worth doing immediately regardless — they cost ~2–3 hours and would lift the score to roughly 45–50.

The stronger argument is commercial: this is a **gourmet restaurant with a boutique hotel and a 4.4–4.8 rating** whose website offers no online reservation, no booking path, no review proof, no social preview, and a homepage that Google lists as "Startseite". A rebuild (any modern stack or even a schema-capable CMS) with online reservation, hotel booking links, structured data, review integration and compressed images directly converts existing demand — the reputation already exists, the website just fails to capture it.

**Recommendation:** do the in-platform quick wins this week; plan the redesign as a small 5–8 page project (Startseite, Restaurant/Speisekarte, Weinkarte, Hotel + Buchung, Über uns, Kontakt/Anfahrt, optional Events/Bankette) with reservation widget and full local schema.
