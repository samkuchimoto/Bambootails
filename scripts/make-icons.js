// Generates the launcher icons from the wordmark's initials.
//
// A photographic icon turns to mush at 48px, and the brand has no logo
// file yet — so the mark is a monogram: "BT" in the display serif on the
// house's own paper colour. It reads at any size and is trivially
// replaced when a real logo exists.
//
// Usage: node scripts/make-icons.js public/icons

const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const outDir = process.argv[2] || "public/icons";
fs.mkdirSync(outDir, { recursive: true });

const PAPER = "#faf8f5";
const INK = "#16130f";

// inset: fraction kept clear around the monogram. Maskable icons are
// cropped to whatever shape the launcher uses, so they need more room.
function svg(size, inset) {
  const fontSize = size * (1 - inset * 2) * 0.52;
  return Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
       <rect width="${size}" height="${size}" fill="${PAPER}"/>
       <text x="50%" y="50%" dy="0.34em" text-anchor="middle"
             font-family="Georgia, 'Times New Roman', serif"
             font-size="${fontSize}" font-weight="400"
             letter-spacing="${fontSize * 0.02}" fill="${INK}">BT</text>
     </svg>`,
  );
}

const targets = [
  { name: "icon-192.png", size: 192, inset: 0.16 },
  { name: "icon-512.png", size: 512, inset: 0.16 },
  { name: "icon-maskable-512.png", size: 512, inset: 0.28 },
  { name: "apple-touch-icon.png", size: 180, inset: 0.16 },
];

(async () => {
  for (const t of targets) {
    const buf = await sharp(svg(t.size, t.inset)).png().toBuffer();
    fs.writeFileSync(path.join(outDir, t.name), buf);
    console.log(`${t.name}  ${t.size}x${t.size}  ${buf.length} bytes`);
  }
})();
