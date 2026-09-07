// Crops all fourteen cast members out of the full cast sheet.
//
// One source sheet, one lighting setup, one style. Cutouts collected
// from separate generations drift in colour and scale, and a cast that
// doesn't look like one cast reads as clip art rather than as
// intellectual property. Consistency is the whole asset.
//
// Boxes are measured against the 1536x1024 sheet: five core characters
// in the upper row, nine in the lower row across three groups.
//
// Usage: node scripts/crop-cast.js "<sheet.png>" public/mascots

const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const [sheetPath, outDir] = process.argv.slice(2);
fs.mkdirSync(outDir, { recursive: true });

const W = 1536;
const H = 1024;

// centre-x, plus the row's shared top/height. Padded to keep ears, hats
// and the fall of a scarf inside the frame.
const CORE_TOP = 140;
const CORE_H = 272;
const CORE_HALF = 115;

const SMALL_TOP = 575;
const SMALL_H = 192;
const SMALL_HALF = 82;

const CAST = [
  { slug: "bamboo", cx: 345, row: "core" },
  { slug: "tails", cx: 592, row: "core" },
  { slug: "miko", cx: 835, row: "core" },
  { slug: "luna", cx: 1080, row: "core" },
  { slug: "nori", cx: 1325, row: "core" },

  { slug: "sora", cx: 103, row: "small" },
  { slug: "hana", cx: 250, row: "small" },
  { slug: "ren", cx: 396, row: "small" },

  { slug: "mochi", cx: 578, row: "small" },
  { slug: "pika", cx: 730, row: "small" },
  { slug: "nami", cx: 880, row: "small" },

  { slug: "coco", cx: 1118, row: "small" },
  { slug: "louis", cx: 1268, row: "small" },
  { slug: "bella", cx: 1420, row: "small" },
];

(async () => {
  const sheet = await sharp(sheetPath).resize(W, H, { fit: "fill" }).png().toBuffer();

  for (const member of CAST) {
    const isCore = member.row === "core";
    const half = isCore ? CORE_HALF : SMALL_HALF;
    const top = isCore ? CORE_TOP : SMALL_TOP;
    const height = isCore ? CORE_H : SMALL_H;

    // Clamp so a character near the sheet edge doesn't throw.
    const left = Math.max(0, Math.min(W - half * 2, member.cx - half));

    const out = await sharp(sheet)
      .extract({ left, top, width: half * 2, height })
      .resize(560, 560, { fit: "contain", background: { r: 250, g: 248, b: 245, alpha: 1 } })
      .png({ compressionLevel: 9, palette: true })
      .toBuffer();

    fs.writeFileSync(path.join(outDir, `${member.slug}.png`), out);
    console.log(`${member.slug.padEnd(8)} ${(out.length / 1024).toFixed(0)}KB`);
  }
})();
