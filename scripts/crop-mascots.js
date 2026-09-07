// Crops the five core mascots out of the cast sheet.
//
// The sheet is the only artwork where all five are rendered in one
// consistent style, lighting and scale — cutouts collected from separate
// generations drift, and a cast that doesn't look like one cast is worse
// than no cast at all. Cropping from a single source guarantees they
// belong together.
//
// Usage: node scripts/crop-mascots.js "<sheet.png>" public/mascots

const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const [sheetPath, outDir] = process.argv.slice(2);
fs.mkdirSync(outDir, { recursive: true });

// Measured against the 1536x1024 sheet. The dogs sit in five even
// columns; the band below them holds names and copy, which the site
// renders itself as real text rather than baking into an image.
const SHEET_W = 1536;
const SHEET_H = 1024;
const BAND_TOP = 185; // just above the ears
const BAND_HEIGHT = 400; // down to the paws, above the name
const COLUMN_W = Math.floor(SHEET_W / 5);

const NAMES = ["bamboo", "tails", "miko", "luna", "nori"];

(async () => {
  const base = sharp(sheetPath).resize(SHEET_W, SHEET_H, { fit: "fill" });
  const buffer = await base.png().toBuffer();

  for (let i = 0; i < NAMES.length; i++) {
    const out = await sharp(buffer)
      .extract({
        left: i * COLUMN_W,
        top: BAND_TOP,
        width: COLUMN_W,
        height: BAND_HEIGHT,
      })
      // Square-ish portrait, which is what the grid on the site expects.
      .resize(600, 600, { fit: "cover", position: "top" })
      .png({ compressionLevel: 9 })
      .toBuffer();

    const file = path.join(outDir, `${NAMES[i]}.png`);
    fs.writeFileSync(file, out);
    console.log(`${NAMES[i]}.png  ${(out.length / 1024).toFixed(0)}KB`);
  }
})();
