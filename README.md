# BambooTails

Haute couture for dogs. Handmade silk scarves, a French-Canadian atelier.

The site and the app are one codebase: a Next.js app that installs to a
phone's home screen. There is no separate mobile project to keep in sync.

## The rule the whole thing is built on

Everything shown is labelled by what it actually is:

| State | Meaning | Gets a price? |
| --- | --- | --- |
| `atelier` | Real. Photographed on a real dog. In stock. | Yes |
| `soon` | Real intent, not yet made. | No — waitlist only |
| `concept` | Imagined. A drawing. | No — labelled "Concept" on the row itself |

This lives in [`lib/catalog.ts`](lib/catalog.ts) as one union rather than
three separate lists, so a concept piece cannot be rendered with a price
and a buy button by accident. A luxury brand runs on the customer
trusting that what they are shown is what they will receive — blurring an
AI concept into the shop spends that trust once and never gets it back.

## Structure

```
config/brand.ts     Brand strings, taken from the existing brand docs
lib/catalog.ts      Pieces: real / coming soon / concept
lib/universe.ts     Bamboo & Tails, and the episode slate
app/                Home, collection, atelier, mascots, series, get-app
scripts/            Image compression, icon generation
```

## Content

**Photography** is the real product shoot, compressed from 80MB to 5.2MB
by `scripts/compress-images.js` (2400px, mozjpeg q82). Re-run it after
adding new originals — the studio JPEGs are 6–10MB each and must not be
committed at that size.

```bash
node scripts/compress-images.js public/images
node scripts/make-icons.js public/icons
```

**Episodes** are data with a `status`, so the series can be shown as a
real slate before a frame is animated. Nothing claims an episode exists
when it doesn't.

## Configuration

Both are optional and both degrade honestly — see `.env.example`.

- `NEWSLETTER_WEBHOOK_URL` — where the mailing list goes
- `NEXT_PUBLIC_SHOP_URL` — Shopify handover for checkout

## Deploying

The domain currently resolves to Shopify. **Nothing here changes DNS.**
Deploy to Vercel first, review it on the preview URL, and only then
decide what `bambootails.com` should point at — the existing store is
live revenue, and this repo does not assume it should be replaced.

## Local

```bash
npm run dev
npm run build && npx next start
```
