# Schema, Local SEO & AI Readiness — goldenes-roessli-wil.ch

## Schema / Structured Data
- **Zero JSON-LD / microdata on the entire site.** No Restaurant, no Hotel, no LocalBusiness, no Menu, no OpeningHoursSpecification.
- Impact: no rich results eligibility (hours, price range, ratings in SERP), weaker entity understanding for a dual restaurant+hotel business.
- Recommended graph: `Restaurant` (servesCuisine: Italian/Mediterranean, priceRange CHF 25–65, openingHoursSpecification, acceptsReservations telephone) + `Hotel` (same address) + `Menu` with sections, linked to the Speisekarte page.
- Caveat: BaseKit (Hoststar Designer) has limited/no custom head-code injection per page — schema realistically requires a platform change.

## Local SEO
| Severity | Finding |
|---|---|
| High | **Name inconsistency across the ecosystem**: website says "Restaurant zum goldenen Rössli" / "Goldenes Rössli Wil", Google/TripAdvisor/search.ch list "Gasthaus Rössli" / "Gasthaus zum goldenen Rössli". Split entity signals dilute local rankings. |
| High | Website shows **no reviews, no Google rating, no Maps embed, no link to GBP** despite strong ratings (Google 4.4, search.ch 4.8/12, TripAdvisor #3 of 8 B&Bs in Wil). |
| Medium | Footer address typo "Toggenburgerstrase" hurts NAP consistency matching. |
| Medium | No dedicated Kontakt/Anfahrt page (contact only in footer) — no parking info, no directions, no Maps. |
| Medium | Hotel is bookable only by phone/email; no booking.com/OTA links visible on site, no availability info, no prices ("Preise und Reservation" section is thin). |
| Info | Strengths: NAP present on every page footer, clickable phone, opening hours listed, local directory presence exists (search.ch, guidle, myswitzerland.com, restaurantguru). |

## AI Search Readiness (GEO)
- robots.txt `Disallow: /` for 81 AI agents including **retrieval/user-agents** (ChatGPT-User, Claude-User, Perplexity-User, OAI-SearchBot, Claude-SearchBot). This is not just training opt-out — it blocks live citation fetches. AI assistants asked "gutes Restaurant in Wil SG" cannot read or verify this site; competitors remain citable.
- No llms.txt.
- Content structure (menu as HTML, named chef, clear hours) would otherwise be quite citable.
- Recommendation: keep training-crawler blocks if desired (CCBot, GPTBot, Google-Extended is a judgment call), but **allow search/user-triggered agents** (OAI-SearchBot, ChatGPT-User, Claude-SearchBot, Claude-User, PerplexityBot, Perplexity-User). In Hoststar this means lowering the "AI protection" level or a custom robots.txt — another point where the platform limits control.
