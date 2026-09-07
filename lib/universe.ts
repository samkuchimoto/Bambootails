// /lib/universe.ts
// The cast and the story. This is the half of BambooTails that isn't a
// shop, and the reason the brand can be manga as well as Hermès.
//
// The commercial logic: a print sells once, a character people are fond
// of sells for years. Nobody wants "a silk scarf from a house they have
// never heard of" — they want the scarf Bamboo wears. That is what a
// fashion house actually sells, and it is why the cast belongs on the
// home page rather than filed behind an About link.
//
// Five dogs, five cities. The cast is deliberately small: five
// characters can be kept visually consistent across every episode and
// every drop, and consistency is what turns drawings into intellectual
// property. A cast of twenty would drift within a month.

export type Mascot = {
  slug: string;
  name: string;
  city: string;
  /** One line, the way a character sheet would put it. */
  role: string;
  bio: string;
  /** Three words, shown as chips. Keeps each character legible at a glance. */
  traits: [string, string, string];
  portrait: string;
};

export const MASCOTS: Mascot[] = [
  {
    slug: "bamboo",
    name: "Bamboo",
    city: "Paris",
    role: "The Parisian",
    bio: "Elegant, curious, and always ready for the next adventure. Bamboo brings the style, the charm and the French chic — and believes every doorway is an entrance worth making properly.",
    traits: ["Style", "Curiosity", "Adventure"],
    portrait: "/mascots/bamboo.png",
  },
  {
    slug: "tails",
    name: "Tails",
    city: "Bangkok",
    role: "The Thai",
    bio: "Joyful, playful and full of life. Tails brings warmth and laughter wherever he goes, and knows every silk merchant worth knowing between Chinatown and the river.",
    traits: ["Joy", "Playfulness", "Kindness"],
    portrait: "/mascots/tails.png",
  },
  {
    slug: "miko",
    name: "Miko",
    city: "Tokyo",
    role: "The Tokyoite",
    bio: "Smart, creative, and a little bit of a dreamer. Miko loves art, technology, and finding beauty in very small things — a hem, a fold, the way light sits on a fabric.",
    traits: ["Creativity", "Vision", "Harmony"],
    portrait: "/mascots/miko.png",
  },
  {
    slug: "luna",
    name: "Luna",
    city: "Milan",
    role: "The Milanese",
    bio: "Stylish, confident and artistic. Luna has an eye for beauty and an opinion about everything — which is inconvenient, and usually correct.",
    traits: ["Elegance", "Art", "Inspiration"],
    portrait: "/mascots/luna.png",
  },
  {
    slug: "nori",
    name: "Nori",
    city: "New York",
    role: "The New Yorker",
    bio: "Bold, energetic and always on the move. Nori loves the city, new people and big dreams, and has never once arrived anywhere on time.",
    traits: ["Energy", "Freedom", "Fun"],
    portrait: "/mascots/nori.png",
  },
];

export type EpisodeStatus = "released" | "in-production" | "planned";

export type Episode = {
  number: number;
  title: string;
  city: string;
  synopsis: string;
  status: EpisodeStatus;
  /** Short on purpose — these live or die on a phone. */
  seconds: number;
  /** Which of the cast it belongs to. */
  castSlugs: string[];
  /** The piece that appears in it, linking story to shop. */
  featuredSlug?: string;
};

// Modelled with a status so the slate can be shown honestly before a
// frame is animated. Nothing here claims an episode exists when it
// doesn't — a slate implying four finished films and delivering none is
// a promise broken on the first click.
export const EPISODES: Episode[] = [
  {
    number: 1,
    title: "Arrival",
    city: "Paris",
    synopsis:
      "Two dogs from Bangkok step off the train at Gare du Nord with one trunk between them and no appointments. Bamboo has a plan. Tails has snacks.",
    status: "in-production",
    seconds: 45,
    castSlugs: ["bamboo", "tails"],
    featuredSlug: "golden-palms",
  },
  {
    number: 2,
    title: "They Hate Parisian Fashion",
    city: "Paris",
    synopsis:
      "Four shows in one afternoon. Tails falls asleep in the third. Bamboo declares he could do better, which is how most fashion houses begin.",
    status: "planned",
    seconds: 50,
    castSlugs: ["bamboo", "tails"],
  },
  {
    number: 3,
    title: "The Silk",
    city: "Bangkok",
    synopsis:
      "Tails takes Bamboo home and shows him what he grew up around: a bolt of madder-red silk in a shop that is closing after sixty years.",
    status: "planned",
    seconds: 55,
    castSlugs: ["tails", "bamboo"],
    featuredSlug: "golden-palms",
  },
  {
    number: 4,
    title: "Miko Fixes the Hem",
    city: "Tokyo",
    synopsis:
      "The first scarf is nearly right and entirely wrong. Miko says nothing for a long time, then turns the edge by hand and hands it back.",
    status: "planned",
    seconds: 45,
    castSlugs: ["miko"],
    featuredSlug: "chrysanthemum",
  },
  {
    number: 5,
    title: "Luna Has Notes",
    city: "Milan",
    synopsis: "The collection is shown to Luna. Luna has notes. The collection gets better.",
    status: "planned",
    seconds: 40,
    castSlugs: ["luna"],
    featuredSlug: "orchid",
  },
  {
    number: 6,
    title: "Nori Sells the Lot",
    city: "New York",
    synopsis:
      "Nori knows a buyer, a stylist and a man with a van. None of them were expecting dogs.",
    status: "planned",
    seconds: 50,
    castSlugs: ["nori"],
  },
];

export const EPISODE_STATUS_LABEL: Record<EpisodeStatus, string> = {
  released: "Watch now",
  "in-production": "In production",
  planned: "Written",
};

export function mascotBySlug(slug: string): Mascot | undefined {
  return MASCOTS.find((m) => m.slug === slug);
}
