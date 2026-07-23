import sharp from "sharp";

const SRC = "D:/03 Business/Aufträge/03_Demos/goldenes-roessli-wil/material/images/logo-goldenes-roessli.jpg";
const OUT = "D:/03 Business/Aufträge/03_Demos/goldenes-roessli-wil/public/images";

const { data, info } = await sharp(SRC).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const { width, height, channels } = info;

// 1) full logo: white -> transparent (flat artwork, threshold is safe)
const full = Buffer.from(data);
for (let i = 0; i < width * height; i++) {
  const o = i * channels;
  if (full[o] > 242 && full[o + 1] > 242 && full[o + 2] > 242) full[o + 3] = 0;
}
await sharp(full, { raw: { width, height, channels } })
  .trim()
  .png()
  .toFile(`${OUT}/logo-roessli-full.png`);

// 2) horse only: additionally wipe the bottom text row, keeping the x-window
//    where the hind legs/hooves reach down between the two text blocks
const horse = Buffer.from(full);
const yText = Math.round(height * 0.78);
const xKeepMin = Math.round(width * 0.495);
const xKeepMax = Math.round(width * 0.625);
for (let y = yText; y < height; y++) {
  for (let x = 0; x < width; x++) {
    if (x < xKeepMin || x > xKeepMax) horse[(y * width + x) * channels + 3] = 0;
  }
}
await sharp(horse, { raw: { width, height, channels } })
  .trim()
  .png()
  .toFile(`${OUT}/logo-roessli-horse.png`);

const a = await sharp(`${OUT}/logo-roessli-full.png`).metadata();
const b = await sharp(`${OUT}/logo-roessli-horse.png`).metadata();
console.log("full:", a.width, "x", a.height, "| horse:", b.width, "x", b.height);
