# Performance, Images & Visual/UX — goldenes-roessli-wil.ch

## Performance (lab observations; no CrUX field data available for this low-traffic origin)
- TTFB excellent (~100ms, edge-cached)
- **DOMContentLoaded ~5.2s in test browser** — heavy synchronous BaseKit JS (5 render-blocking bundles: site-libs, site, twig-widget-views, scroll-out, translations) + widget markup inflates HTML to 200KB
- Estimated homepage weight ≈ 3MB, dominated by images
- `Cache-Control: no-store` on HTML disables browser caching

## Images
| Severity | Finding |
|---|---|
| High | **13 of 14 homepage images have empty alt=""** (same pattern site-wide: über-uns 9/10, hotel 4/5). Only the logo has alt text. Zero Google Images visibility for food/room photos. |
| High | All images are **JPEG, no WebP/AVIF**, 200–425KB each (sample: 425KB, 249KB, 224KB, 214KB). ~40–60% savings available. |
| High | **No lazy loading** — all 14 homepage images load eagerly, including 6 lightbox images displayed at 0x0. |
| Medium | Oversized delivery: e.g. 1158×869 served for a 545×409 slot; 1939×1454 gallery originals loaded on page load. |

## Visual / UX (DOM-level review; screenshots unavailable in this session)
- Navigation: clean 5-item nav, mobile menu button present, responsive viewport meta — basic mobile usability OK
- **No reservation CTA**: table reservation = plain phone/email lines at top; no button, no form, no reservation widget (Foratable/OpenTable/local equivalent). For a gourmet restaurant in 2026 this loses evening/weekend bookings placed outside opening hours.
- **No hotel booking path** beyond phone/email
- Gallery links labeled generically ("Bildvorschau"), lightbox pattern from builder
- No Google Maps embed, no directions, no social media links detected
- Footer "©2024" — signals staleness
- Design: standard Hoststar/BaseKit template look; functional but not matching the "Gourmet / Boutique Hotel" positioning the copy claims
