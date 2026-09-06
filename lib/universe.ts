// /lib/universe.ts
// The characters and the mini-series.
//
// This is the part of BambooTails that isn't a shop. The scarf is the
// thing that earns money now; Bamboo and Tails are the thing that makes
// a second purchase likely. Characters are the durable asset — a print
// sells once, a character someone is fond of sells for years.
//
// Episodes are deliberately modelled as data with a `status`, so the
// site can show the series as a real slate before a single frame is
// animated. Nothing here claims an episode exists when it doesn't.

export type Mascot = {
  slug: string;
  name: string;
  /** One line, the way a character sheet would put it. */
  role: string;
  bio: string;
  /** Consistency notes — the reason the character stays recognisable. */
  traits: string[];
};

export const MASCOTS: Mascot[] = [
  {
    slug: "bamboo",
    name: "Bamboo",
    role: "The one who cares deeply about being looked at",
    bio: "Bamboo believes every room is a runway and every doorway an entrance. He is vain in the way that is forgivable, because he is also the first to share. He chose the Hibiscus print himself and has not stopped mentioning it.",
    traits: ["Cream coat, dark eyes", "Sits square, chin lifted", "Always wears the scarf knotted at the shoulder"],
  },
  {
    slug: "tails",
    name: "Tails",
    role: "The one who actually runs the atelier",
    bio: "Tails does the work. She measures, she cuts, she decides what stays in the collection. Where Bamboo performs, Tails edits — and every piece that reaches the shop passed her first.",
    traits: ["Fuller tail, softer expression", "Wears the scarf over the head, tied under", "Never photographed mid-bark"],
  },
];

export type EpisodeStatus = "released" | "in-production" | "planned";

export type Episode = {
  number: number;
  title: string;
  synopsis: string;
  status: EpisodeStatus;
  /** Runtime target. Short on purpose — these live or die on a phone. */
  seconds: number;
  /** The piece that appears in the episode, linking story to shop. */
  featuredSlug?: string;
};

export const EPISODES: Episode[] = [
  {
    number: 1,
    title: "Arrival",
    synopsis:
      "Bamboo and Tails step off the train at Gare du Nord with one trunk between them and no appointments.",
    status: "in-production",
    seconds: 45,
    featuredSlug: "hibiscus",
  },
  {
    number: 2,
    title: "The First Scarf",
    synopsis:
      "Tails finds a bolt of madder-red silk in a shop that is closing. Bamboo claims he found it.",
    status: "planned",
    seconds: 50,
    featuredSlug: "hibiscus",
  },
  {
    number: 3,
    title: "The Buyer",
    synopsis:
      "A boutique on the rue Saint-Honoré agrees to look. They are given four minutes.",
    status: "planned",
    seconds: 60,
    featuredSlug: "chrysanthemum",
  },
  {
    number: 4,
    title: "Bamboo Is Not Jealous",
    synopsis: "Tails is photographed alone for a magazine. Bamboo is completely fine about it.",
    status: "planned",
    seconds: 40,
    featuredSlug: "meadow",
  },
];

export const EPISODE_STATUS_LABEL: Record<EpisodeStatus, string> = {
  released: "Watch now",
  "in-production": "In production",
  planned: "Written",
};
