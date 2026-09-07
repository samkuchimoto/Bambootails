const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const dir = "assets-inbox";
const files = fs.readdirSync(dir).filter((f) => f.toLowerCase().endsWith(".png")).sort();
const CELL = 360, LABEL = 34, COLS = 4;
const ROWS = Math.ceil(files.length / COLS);

(async () => {
  const cells = [];
  for (let i = 0; i < files.length; i++) {
    const buf = await sharp(path.join(dir, files[i]))
      .resize(CELL, CELL, { fit: "contain", background: "#ffffff" })
      .toBuffer();
    const label = Buffer.from(
      `<svg width="${CELL}" height="${LABEL}"><rect width="${CELL}" height="${LABEL}" fill="#111"/>` +
      `<text x="8" y="24" font-family="sans-serif" font-size="22" fill="#fff">${i + 1}</text></svg>`
    );
    const col = i % COLS, row = Math.floor(i / COLS);
    cells.push({ input: buf, left: col * CELL, top: row * (CELL + LABEL) + LABEL });
    cells.push({ input: label, left: col * CELL, top: row * (CELL + LABEL) });
    console.log(`${i + 1}\t${files[i]}`);
  }
  await sharp({
    create: { width: COLS * CELL, height: ROWS * (CELL + LABEL), channels: 3, background: "#ffffff" },
  })
    .composite(cells)
    .jpeg({ quality: 82 })
    .toFile(process.argv[2]);
  console.log("sheet written");
})();
