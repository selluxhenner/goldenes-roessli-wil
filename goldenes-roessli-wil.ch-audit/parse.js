const fs = require('fs');
const file = process.argv[2] || 'homepage.html';
const raw = fs.readFileSync(file, 'utf8');
const grab = (re) => { const m = raw.match(re); return m ? m[1].trim() : null; };
const out = {};
out.title = grab(/<title[^>]*>([\s\S]*?)<\/title>/i);
for (const n of ['description', 'robots', 'viewport', 'generator', 'keywords']) {
  out['meta_' + n] = grab(new RegExp(`<meta[^>]+name=["']${n}["'][^>]*content=["']([^"']*)`, 'i'))
    || grab(new RegExp(`<meta[^>]+content=["']([^"']*)["'][^>]*name=["']${n}`, 'i'));
}
out.canonical = grab(/<link[^>]+rel=["']canonical["'][^>]*href=["']([^"']*)/i) || grab(/<link[^>]+href=["']([^"']*)["'][^>]*rel=["']canonical/i);
out.lang = grab(/<html[^>]+lang=["']([^"']*)/i);
for (const og of ['og:title', 'og:description', 'og:image', 'og:type', 'og:url']) {
  out[og] = grab(new RegExp(`property=["']${og}["'][^>]*content=["']([^"']*)`, 'i'))
    || grab(new RegExp(`content=["']([^"']*)["'][^>]*property=["']${og}["']`, 'i'));
}
out.headings = {};
for (let l = 1; l <= 4; l++) {
  const hs = [...raw.matchAll(new RegExp(`<h${l}[^>]*>([\\s\\S]*?)</h${l}>`, 'gi'))]
    .map(m => m[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim().slice(0, 100));
  out.headings['h' + l] = hs;
}
out.jsonld = [];
for (const s of raw.matchAll(/<script[^>]+application\/ld\+json[^>]*>([\s\S]*?)<\/script>/gi)) {
  try {
    const d = JSON.parse(s[1]);
    out.jsonld.push(d);
  } catch (e) { out.jsonld.push({ INVALID: e.message.slice(0, 80) }); }
}
const imgs = [...raw.matchAll(/<img[^>]*>/gi)].map(m => m[0]);
const noalt = imgs.filter(i => !/alt=["'][^"']+["']/.test(i));
out.images = { total: imgs.length, missingAlt: noalt.length, samplesNoAlt: noalt.slice(0, 5).map(s => s.slice(0, 150)) };
out.lazyImgs = imgs.filter(i => /loading=["']lazy/.test(i)).length;
out.internalPaths = [...new Set([...raw.matchAll(/href=["'](\/[^"'#?]*)/g)].map(m => m[1]))];
out.externalLinks = [...new Set([...raw.matchAll(/href=["'](https?:\/\/[^"']+)/g)].map(m => m[1]))].filter(u => !u.includes('goldenes-roessli-wil.ch')).slice(0, 30);
out.tech = [];
for (const h of ['wp-content', 'wp-json', 'wix', 'jimdo', 'webflow', 'squarespace', 'hostpoint', 'localsearch', 'shopify', 'typo3', '__NEXT', 'nuxt', 'astro', 'elementor', 'divi', 'gatsby', 'drupal', 'sitejet', 'site-builder', 'weebly', 'one.com', 'mywebsite']) {
  if (raw.toLowerCase().includes(h.toLowerCase())) out.tech.push(h);
}
out.scripts = [...new Set([...raw.matchAll(/<script[^>]+src=["']([^"']+)/gi)].map(m => m[1]))].slice(0, 25);
out.stylesheets = [...new Set([...raw.matchAll(/<link[^>]+rel=["']stylesheet["'][^>]*href=["']([^"']+)/gi)].map(m => m[1]))].slice(0, 15);
out.inlineStyleKB = Math.round([...raw.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)].reduce((a, m) => a + m[1].length, 0) / 1024);
out.sizeKB = Math.round(raw.length / 1024);
const text = raw.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<style[\s\S]*?<\/style>/gi, '').replace(/<[^>]+>/g, ' ').replace(/&\w+;/g, ' ').replace(/\s+/g, ' ');
out.visibleWords = text.split(' ').filter(Boolean).length;
out.textSample = text.slice(0, 1200);
console.log(JSON.stringify(out, null, 1));
