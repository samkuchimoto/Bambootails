// Compresses the product photography for the web.
// The originals are 6-10MB studio JPEGs — correct for print, absurd to
// commit to a repo or ship to a phone. Next/Image would resize them on
// delivery, but the source files would still bloat the repo and the
// deployment bundle.
//
// 2400px wide is enough for a full-bleed hero on a retina laptop; the
// browser never receives more than it can show.

const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const dir = process.argv[2];
const MAX_WIDTH = 2400;

(async () => {
  const files = fs.readdirSync(dir).filter((f) => /\.jpe?g$/i.test(f));
  let before = 0;
  let after = 0;

  for (const file of files) {
    const full = path.join(dir, file);

    // Read to a Buffer rather than handing sharp the path. Sharp opens
    // the source lazily and keeps the handle, so writing back to that
    // same path fails on Windows with UNKNOWN/-4094. Buffer in, buffer
    // out, no handle to collide with.
    const input = fs.readFileSync(full);
    before += input.length;

    const output = await sharp(input)
      .rotate() // honour EXIF orientation before stripping metadata
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .jpeg({ quality: 82, mozjpeg: true, progressive: true })
      .toBuffer();

    fs.writeFileSync(full, output);
    after += output.length;
    console.log(
      `${file.padEnd(34)} ${(input.length / 1e6).toFixed(1)}MB -> ${(output.length / 1e6).toFixed(2)}MB`,
    );
  }

  console.log(`\nTotal: ${(before / 1e6).toFixed(0)}MB -> ${(after / 1e6).toFixed(1)}MB`);
})();
