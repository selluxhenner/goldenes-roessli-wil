# Technical SEO — goldenes-roessli-wil.ch

## What works
- HTTPS valid (Let's Encrypt-class cert), apex → www 301 in place
- Valid XML sitemap index + child sitemap, referenced in robots.txt
- Googlebot/Bingbot fully allowed (`User-agent: * / Allow: /`)
- Fast server: TTFB ~100ms, edge cache (X-Cache: HIT), nginx/openresty
- `viewport` meta present; responsive builder templates
- Canonicals present and self-referencing on all pages

## Findings

| Severity | Finding |
|---|---|
| High | **robots.txt blocks 81 AI crawlers** (`Disallow: /` for GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot/Claude-SearchBot, PerplexityBot, Google-Extended, Meta, Apple etc.) — Hoststar "AI protection: high [81]" preset. Site cannot be cited or recommended by ChatGPT, Perplexity, Claude, Gemini-grounded answers. For a restaurant relying on discovery, this suppresses a growing share of "beste Restaurants in Wil" queries. |
| Medium | **Non-ASCII URL** `/über-uns` — works (serves 200 via `%C3%BCber-uns`) but breaks in some share/copy contexts; naked `curl` with unencoded `ü` returns 404. Prefer `/ueber-uns`. |
| Medium | **HTML bloat**: homepage HTML is 200KB for ~255 visible words (BaseKit inlines widget markup). |
| Medium | **No HSTS, no CSP, no Referrer-Policy** headers (only X-XSS-Protection, X-Content-Type-Options). |
| Low | 2-hop redirect chain `http://apex → http://www → https://www`. |
| Low | `Cache-Control: no-store, private` on HTML — prevents browser caching entirely (server edge cache compensates). |
| Info | Platform: **BaseKit sitebuilder (Hoststar Designer)** — limited control over head tags, schema injection, image formats. |

## Crawl summary
5 indexable pages total: `/`, `/über-uns`, `/hotel`, `/speisekarte`, `/weinkarte`. No 404s among linked pages, no orphans, no redirect loops. Sitemap lastmod: homepage 2024-03, Speise-/Weinkarte 2025-04.
