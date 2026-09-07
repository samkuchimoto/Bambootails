// Ingests the raw ChatGPT renders from assets-inbox into public/mascots.
//
// The character art is chibi 3D designer-toy, deliberately and for a
// commercial reason rather than a taste one: stylised into chibi
// proportions, dog breeds converge on one base mesh, and a twelve-piece
// blind box set of near-identical silhouettes does not sell as a case.
// A rabbit, a chick, a tortoise and a penguin read apart instantly.
//
// So: characters live in public/mascots/chibi/. The photoreal images in
// public/images/ are product photography of real scarves on a real dog,
// which is a different job — proving the product exists — and is why the
// two never share a frame.
//
// Inbox filenames are timestamps, so the mapping lives here rather than
// in the filenames. Re-runnable: it only ever writes into public/.
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const IN = "assets-inbox";
const MAP = {
  "ChatGPT Image 7 sept. 2026, 23_58_15.png": ["chibi", "hikari"],
  "ChatGPT Image 7 sept. 2026, 23_58_29.png": ["chibi", "ren"],
  "ChatGPT Image 7 sept. 2026, 23_58_43.png": ["chibi", "yuki"],
  "ChatGPT Image 8 sept. 2026, 00_16_02.png": ["chibi", "mochi"],
  // Luna is the one photoreal render kept: an Italian Greyhound in a silk
  // headscarf. She still needs a chibi pass to match the rest of the set.
  "ChatGPT Image 8 sept. 2026, 00_28_42.png": ["portrait", "luna"],
  "ChatGPT Image 8 sept. 2026, 00_50_08.png": ["chibi", "pika"],
  "ChatGPT Image Sep 7, 2026, 11_34_10 PM.png": ["chibi", "tao"],
  "ChatGPT Image Sep 7, 2026, 11_35_25 PM.png": ["chibi", "lumi"],
  "ChatGPT Image Sep 7, 2026, 11_36_29 PM.png": ["chibi", "miko"],
  "ChatGPT Image Sep 7, 2026, 11_37_56 PM.png": ["chibi", "sora"],
  "ChatGPT Image Sep 8, 2026, 12_10_47 AM.png": ["chibi", "chika"],
  "ChatGPT Image Sep 8, 2026, 12_14_49 AM.png": ["chibi", "kuma"],
  "ChatGPT Image Sep 8, 2026, 12_15_48 AM.png": ["chibi", "kai"],
  "ChatGPT Image Sep 8, 2026, 12_50_50 AM.png": ["chibi", "bao"],
};

const OUT = { portrait: "public/mascots", chibi: "public/mascots/chibi" };
fs.mkdirSync(OUT.chibi, { recursive: true });

(async () => {
  let n = 0;
  for (const [file, [kind, slug]] of Object.entries(MAP)) {
    const src = path.join(IN, file);
    if (!fs.existsSync(src)) {
      console.log(`skip (missing)  ${file}`);
      continue;
    }
    const dest = path.join(OUT[kind], `${slug}.png`);
    // Buffer in, buffer out: writing back through sharp to a path it is
    // still reading holds a lock on Windows.
    const buf = await sharp(src)
      .resize(1200, 1200, { fit: "inside", withoutEnlargement: true })
      .png({ quality: 82, compressionLevel: 9 })
      .toBuffer();
    fs.writeFileSync(dest, buf);
    console.log(`${(buf.length / 1024).toFixed(0).padStart(5)} KB  ${dest}`);
    n++;
  }
  console.log(`\n${n} written`);
})();
