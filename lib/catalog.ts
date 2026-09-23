// /lib/catalog.ts
// The catalogue, and the distinction the whole brand rests on:
//
//   "atelier"  — real. Photographed on a real dog, in stock, buyable.
//   "soon"     — real intent, not yet made. No buy button, waitlist only.
//   "concept"  — imagined. Explicitly labelled as not a product.
//
// Keeping these in one union rather than three separate lists is
// deliberate: it makes it impossible to render a concept piece with a
// price and a buy button by accident. A luxury brand survives on the
// customer trusting that what they're shown is what they'll receive —
// blurring an AI concept into the shop would spend that trust once and
// never get it back.
//
// Product names are BambooTails' own, carried over from the earlier
// site: Golden Palms, Chrysanthemum, Orchid, Heritage Hemp Pochette.
// Renaming a customer's own products for tidiness would break every
// link, invoice and conversation that already used them.

export type Availability = "atelier" | "soon" | "concept";

export type Piece = {
  slug: string;
  name: string;
  /** The story of the print — what a boutique card would say. */
  description: string;
  availability: Availability;
  /** Which rung of the ladder. Only meaningful alongside a price. */
  tier?: PriceTier;
  /** Only ever set for "atelier". Enforced by the type guard below. */
  price?: number;
  images: { src: string; alt: string }[];
  /**
   * What made it, and who. This is the piece that turns a scarf into an
   * artifact: a buyer can read which silk, which techniques, and which
   * chapter of the story it belongs to.
   *
   * It is also the honest answer to "why $349" — not an argument about
   * value, but a bill of materials in hours and mastery. Every entry
   * here is a real constraint from lib/world.ts, so the lore and the
   * production reality are the same document.
   */
  provenance?: {
    silkGrade: string;
    techniques: string[];
    /** The episode it appears in, if any. Story to object. */
    episodeNumber?: number;
    /** Hours of hand work in one piece. */
    handHours: number;
  };
  /**
   * A real Stripe Payment Link, when one exists. Optional on purpose:
   * most pieces route through the order-form/email flow in
   * app/order/[slug], and setting this is a claim that instant Stripe
   * checkout is live for this specific piece — don't set it ahead of
   * the link actually existing (see the Mochi/Sora/Tao mascot cards for
   * the same pattern and the placeholder-URL mistake to avoid repeating).
   */
  stripeUrl?: string;
};

// The price ladder.
//
// Set deliberately high, because the opening price is the brand, not a
// conversion knob. The asymmetry decides it: launching at $349 and
// discovering $249 converts better is a cheap lesson, while launching at
// $49 and discovering people would gladly have paid $349 is
// unrecoverable margin on every unit already sold.
//
// But the crown is not the business, and pretending otherwise is the
// mistake this ladder exists to prevent. At 65-75% margin the signature
// scarf cannot carry paid acquisition — it earns the right to be
// believed. The tiers that compound are underneath it: a $29 blind-box
// figure runs 82-88% and travels on its own, and a $69 lead is what
// turns one purchase into a habit. A house with only a crown is a
// lookbook with a checkout.
//
// Tiers exist ahead of the products that will fill them, so adding a
// limited or numbered edition later is a data change and not a pricing
// argument had again from scratch.
/** One place to change the currency, rather than a symbol typed into
 *  fourteen components and missed in three of them. */
export const CURRENCY = { symbol: "$", code: "USD" } as const;

export const PRICE_TIERS = {
  /** Blind-box vinyl, plush charms, stickers. Highest margin in the
   *  range and the only tier that travels on its own. */
  collectible: 29,
  /** Leads and matching human twillies — the bridge between what the dog
   *  wears and what the owner wears, and the cash-flow stabiliser. */
  diffusion: 69,
  /** Small silk goods and the pochette. */
  accessory: 89,
  /** Human apparel, off the dog and onto the owner: the printed and
   *  embroidered capsule tees. */
  apparel: 85,
  /** The flagship: hand-rolled artisan silk. Where the house begins. */
  signature: 249,
  /** A print that will not be cut again. */
  limited: 429,
  /** Hand-assembled leather goods, cut to order by an outside atelier
   *  rather than in-house — the smallest runs in the range. */
  bespoke: 280,
  /** Numbered, with the number on the label. */
  collector: 549,
} as const;

export type PriceTier = keyof typeof PRICE_TIERS;

/** What each rung is called to a customer. */
export const TIER_LABEL: Record<PriceTier, string> = {
  collectible: "Collectible",
  diffusion: "Diffusion",
  accessory: "Accessory",
  apparel: "Atelier Capsule",
  signature: "Signature Artisan Silk",
  limited: "Limited Edition",
  bespoke: "Bespoke — numbered cuts",
  collector: "Collector — numbered",
};

export const PIECES: Piece[] = [
  {
    slug: "golden-palms",
    name: "Golden Palms",
    description:
      "Deep madder red, with gold palms opening across the silk. The first print BambooTails ever cut, and still the one people reach for.",
    availability: "atelier",
    tier: "signature",
    price: PRICE_TIERS.signature,
    images: [
      {
        src: "/images/scarf-hibiscus-hero.jpg",
        alt: "A cream Pomeranian wearing the Golden Palms silk scarf in red and gold, seated on black leather",
      },
      {
        src: "/images/scarf-detail-knot.jpg",
        alt: "Close detail of the hand-rolled hem and knot of the Golden Palms silk scarf",
      },
    ],
    provenance: {
      silkGrade: "Four-Ply Thai",
      techniques: ["The Hand-Rolled Hem", "First-Light Dye"],
      episodeNumber: 1,
      handHours: 6,
    },
  },
  {
    slug: "chrysanthemum",
    name: "Chrysanthemum",
    description:
      "Amber, coral and old gold, layered into chrysanthemum heads. The warmest print in the atelier — it reads almost metallic in low light.",
    availability: "atelier",
    tier: "signature",
    price: PRICE_TIERS.signature,
    images: [
      {
        src: "/images/scarf-chrysanthemum-01.jpg",
        alt: "A cream Pomeranian wearing the Chrysanthemum silk scarf in amber and gold",
      },
      {
        src: "/images/product-chrysanthemum-flat.jpg",
        alt: "The Chrysanthemum silk scarf laid flat, showing the full amber and coral print",
      },
      {
        src: "/images/scarf-chrysanthemum-05.jpg",
        alt: "The Chrysanthemum silk scarf tied at the neck, shown in profile",
      },
    ],
    provenance: {
      silkGrade: "Four-Ply Thai",
      techniques: ["The Hand-Rolled Hem", "First-Light Dye"],
      episodeNumber: 7,
      handHours: 6,
    },
  },
  {
    slug: "orchid",
    name: "Orchid",
    description:
      "Pale green and cream, drawn from pressed spring flowers. The quietest of the three, and the one that suits a pale coat best.",
    availability: "atelier",
    tier: "signature",
    price: PRICE_TIERS.signature,
    images: [
      {
        src: "/images/scarf-orchid-01.jpg",
        alt: "A cream Pomeranian standing side-on, wearing the Orchid silk scarf in pale green, grey and cream",
      },
      {
        src: "/images/scarf-orchid-02.jpg",
        alt: "The Orchid silk scarf worn tied under the chin like a headscarf",
      },
      {
        src: "/images/scarf-orchid-03.jpg",
        alt: "The Orchid scarf draped over the back, the dog seated on black leather",
      },
    ],
    provenance: {
      silkGrade: "Four-Ply Thai",
      techniques: ["First-Light Dye", "The Hand-Rolled Hem"],
      episodeNumber: 9,
      handHours: 7,
    },
  },
  {
    // A real product in its own right, not only the packaging. It was
    // sold separately on the earlier site and there is a proper shot of
    // it, so it belongs in the collection rather than in a footnote.
    slug: "heritage-hemp-pochette",
    name: "Heritage Hemp Pochette",
    description:
      "Hand-loomed hemp, cut and sewn to hold one scarf. Every order ships in one; this is a spare, for the second scarf or the drawer.",
    availability: "atelier",
    tier: "accessory",
    price: PRICE_TIERS.accessory,
    images: [
      {
        src: "/images/product-packaging.jpg",
        alt: "The Heritage Hemp Pochette in natural hand-loomed hemp, with a silk scarf folded inside",
      },
    ],
    provenance: {
      silkGrade: "Hand-loomed hemp",
      techniques: ["Reverse Planning"],
      handHours: 2,
    },
  },
  // The Atelier Capsule — human apparel and one leather good, off the
  // dog and onto the owner. No provenance.handHours here: unlike the
  // silk's hand-rolled hem, nobody's given a real hours figure for these
  // yet, and a guessed number would be exactly the kind of fabricated
  // spec this file's own header comment exists to prevent.
  {
    slug: "sl15-artist-tee-raw",
    name: "SL15 Artist Tee — Raw 2015 Canvas",
    description:
      "Ten years in the vault. A raw 2015 ink-and-watercolour painting, reproduced in full on 260gsm French combed organic cotton — paper grain, signature and all. Relaxed boxy cut, drop shoulder, left-chest micro-embroidery reading \"SL15.\"",
    availability: "atelier",
    tier: "apparel",
    price: PRICE_TIERS.apparel,
    images: [
      {
        src: "/images/atelier/sl15-artist-tee-raw.png",
        alt: "The SL15 Artist Tee in raw ecru, front with left-chest embroidery and back with the full 2015 archival print",
      },
    ],
  },
  {
    slug: "sl15-cyber-monolith-tee",
    name: "SL15 Cyber Monolith Tee — Mineral Black",
    description:
      "The 2015 runic entity, reimagined in obsidian and electric cyan. Heavyweight 280gsm enzyme-washed jersey, tonal \"Bambootails Atelier\" screenprint at the collarbone, full-back luminous print.",
    availability: "atelier",
    tier: "apparel",
    price: PRICE_TIERS.apparel,
    images: [
      {
        src: "/images/atelier/sl15-cyber-monolith-tee.png",
        alt: "The SL15 Cyber Monolith Tee in mineral black, front with a tonal collarbone print and back with the glowing runic figure",
      },
    ],
  },
  {
    slug: "paris-atelier-tote-sl15",
    name: "The Paris Atelier Tote — Bambootails x SL15",
    description:
      "Patterned, cut and hand-embroidered by an independent couture atelier in Paris — no two panels are identical. Vegetable-tanned chestnut bridle leather base and handles, unbleached French linen front, hot-stamped leather branding, full cotton drill lining.",
    availability: "atelier",
    tier: "bespoke",
    price: PRICE_TIERS.bespoke,
    images: [
      {
        src: "/images/atelier/paris-atelier-tote.png",
        alt: "The Paris Atelier Tote, hand-embroidered canvas front with a vegetable-tanned leather base, photographed in a Paris studio",
      },
    ],
  },
];

// Not yet made, and honest about it. No price and no cart — only a way
// to say "tell me when this exists", which is also the cheapest possible
// demand signal before committing to a production run.
export const COMING_SOON: Piece[] = [
  {
    slug: "matching-human",
    name: "The Matching Human Scarf",
    description:
      "The same print, cut at 90cm for the other end of the lead. The most requested thing we do not yet make.",
    availability: "soon",
    images: [],
  },
  {
    slug: "hair-ribbon",
    name: "Silk Hair Ribbon",
    description: "Offcut silk, hand-rolled, for a topknot or a collar tie. Nothing is wasted.",
    availability: "soon",
    images: [],
  },
];

// Imagined, and labelled as imagined everywhere it appears. These exist
// to be voted on, not sold.
export const CONCEPTS: Piece[] = [
  {
    slug: "paris-jacket",
    name: "The Paris Jacket",
    description: "Quilted silk, cut like a bomber. Drawn after a week of showing the scarves in Paris.",
    availability: "concept",
    images: [],
  },
  {
    slug: "kimono",
    name: "The Kimono",
    description: "A full silk kimono, wrapped and tied at the back. Absurd, and we keep drawing it anyway.",
    availability: "concept",
    images: [],
  },
];

/** Only atelier pieces may be bought. Used everywhere a price renders. */
export function isBuyable(piece: Piece): piece is Piece & { price: number } {
  return piece.availability === "atelier" && typeof piece.price === "number";
}

export function findPiece(slug: string): Piece | undefined {
  return [...PIECES, ...COMING_SOON, ...CONCEPTS].find((p) => p.slug === slug);
}

export const AVAILABILITY_LABEL: Record<Availability, string> = {
  atelier: "In the atelier",
  soon: "Coming soon",
  concept: "Concept — not for sale",
};
