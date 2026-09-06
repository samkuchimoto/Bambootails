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

export type Availability = "atelier" | "soon" | "concept";

export type Piece = {
  slug: string;
  name: string;
  /** The story of the print — what a boutique card would say. */
  description: string;
  availability: Availability;
  /** Only ever set for "atelier". Enforced by the type guard below. */
  priceEur?: number;
  images: { src: string; alt: string }[];
};

// One number, one place. Taken from the working figure in the brand's
// own commercial notes rather than invented here.
export const SCARF_PRICE_EUR = 49;

export const PIECES: Piece[] = [
  {
    slug: "hibiscus",
    name: "Hibiscus",
    description:
      "Deep madder red, with gold hibiscus opening across the silk. The first print BambooTails ever cut, and still the one people reach for.",
    availability: "atelier",
    priceEur: SCARF_PRICE_EUR,
    images: [
      {
        src: "/images/scarf-hibiscus-hero.jpg",
        alt: "A cream Pomeranian wearing the Hibiscus silk scarf in red and gold, seated on black leather",
      },
      {
        src: "/images/scarf-detail-knot.jpg",
        alt: "Close detail of the hand-rolled hem and knot of the Hibiscus silk scarf",
      },
    ],
  },
  {
    slug: "chrysanthemum",
    name: "Chrysanthemum",
    description:
      "Amber, coral and old gold, layered into chrysanthemum heads. The warmest print in the atelier — it reads almost metallic in low light.",
    availability: "atelier",
    priceEur: SCARF_PRICE_EUR,
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
        src: "/images/scarf-chrysanthemum-04.jpg",
        alt: "The Chrysanthemum scarf worn draped over the head, framing the dog's face",
      },
    ],
  },
  {
    slug: "meadow",
    name: "Meadow",
    description:
      "Pale green and cream, drawn from pressed spring flowers. The quietest of the three, and the one that suits a pale coat best.",
    availability: "atelier",
    priceEur: SCARF_PRICE_EUR,
    images: [
      {
        src: "/images/scarf-meadow-01.jpg",
        alt: "A cream Pomeranian standing, wearing the Meadow silk scarf in pale green and cream",
      },
      {
        src: "/images/scarf-meadow-03.jpg",
        alt: "The Meadow silk scarf worn over the head like a headscarf",
      },
    ],
  },
];

// Not yet made, and honest about it. These carry no price and no cart —
// only a way to say "tell me when this exists", which is also the
// cheapest possible demand signal before committing to a production run.
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
  {
    slug: "travel-pouch",
    name: "The Travel Pouch",
    description: "Hand-loomed linen, to keep a scarf clean in a bag. The most likely of these to become real.",
    availability: "concept",
    images: [],
  },
];

/** Only atelier pieces may be bought. Used everywhere a price renders. */
export function isBuyable(piece: Piece): piece is Piece & { priceEur: number } {
  return piece.availability === "atelier" && typeof piece.priceEur === "number";
}

export const AVAILABILITY_LABEL: Record<Availability, string> = {
  atelier: "In the atelier",
  soon: "Coming soon",
  concept: "Concept — not for sale",
};
