// /lib/universe.ts
// The BambooTails story bible.
//
// Structure borrowed from the shonen serials this is modelled on: a
// crew that grows one city at a time (One Piece), a protagonist nobody
// takes seriously who refuses to stop (Naruto), and threads that are
// planted long before they pay off (Demon Slayer, Frieren). Nothing here
// is written to conclude. Sagas open, characters join, threads run
// underneath and surface chapters later — the corpus grows rather than
// ends.
//
// Every episode carries a `logline` sized for a 45–60 second video and a
// single `theme`. One theme per episode is the discipline that keeps a
// short film about dogs and silk from becoming a mood board: a viewer
// should be able to say what an episode was *about* in four words.
//
// The spine, stated once so it never drifts: five dogs decide to build a
// fashion house. Nobody believes them. They do it anyway. Positive
// thinking is not decoration here — it is the engine of the plot, and
// the reason each defeat is followed by a decision rather than a sulk.

export type City =
  | "Bangkok"
  | "Chiang Mai"
  | "Paris"
  | "Tokyo"
  | "Kyoto"
  | "Milan"
  | "New York"
  | "Seoul";

export type Theme =
  | "Positive thinking"
  | "Never give up"
  | "Friendship"
  | "Courage"
  | "Family"
  | "Craft"
  | "Enterprise"
  | "Honesty";

export type Mascot = {
  slug: string;
  name: string;
  breed: string;
  city: string;
  /** One line, the way a character sheet would put it. */
  role: string;
  bio: string;
  /** What they carry into the story — their function in the crew. */
  gift: string;
  traits: [string, string, string];
  portrait: string;
  /** Core crew appear first and largest; the wider pack fills the world. */
  tier: "core" | "pack";
};

export const MASCOTS: Mascot[] = [
  {
    slug: "bamboo",
    name: "Bamboo",
    breed: "Pomeranian",
    city: "Paris",
    role: "The Parisian — who decided they were a fashion house",
    bio: "Bamboo said the words out loud first: we are a fashion house. Nothing existed yet — no silk, no scarf, no buyer, no money. He said it anyway, and then spent every day since making the sentence true. He is vain in the way that is forgivable, because he is also the first to share.",
    gift: "Belief, said out loud, before there is any evidence for it",
    traits: ["Style", "Curiosity", "Adventure"],
    portrait: "/mascots/bamboo.png",
    tier: "core",
  },
  {
    slug: "tails",
    name: "Tails",
    breed: "Pomeranian",
    city: "Bangkok",
    role: "The Thai — who knew where the silk was",
    bio: "Tails grew up between the looms of his grandmother's neighbourhood and can tell a real hand-rolled hem by sound. He brings warmth, laughter, and the only actual expertise the house had on the first day.",
    gift: "The silk, and everyone who makes it",
    traits: ["Joy", "Playfulness", "Kindness"],
    portrait: "/mascots/tails.png",
    tier: "core",
  },
  {
    slug: "miko",
    name: "Miko",
    breed: "Pomeranian",
    city: "Tokyo",
    role: "The Tokyoite — who fixed the hem",
    bio: "Miko says very little and notices everything. She joined after looking at the first scarf for four full minutes, turning the edge by hand, and giving it back better without a word of criticism.",
    gift: "The standard nobody else could see",
    traits: ["Creativity", "Vision", "Harmony"],
    portrait: "/mascots/miko.png",
    tier: "core",
  },
  {
    slug: "luna",
    name: "Luna",
    breed: "Pomeranian",
    city: "Milan",
    role: "The Milanese — who tells them the truth",
    bio: "Luna has an opinion about everything, which is inconvenient and usually correct. She is the only one who will say a piece is not good enough, and the house is better because she keeps saying it.",
    gift: "Honesty, delivered before it is too late to fix anything",
    traits: ["Elegance", "Art", "Inspiration"],
    portrait: "/mascots/luna.png",
    tier: "core",
  },
  {
    slug: "nori",
    name: "Nori",
    breed: "Pomeranian",
    city: "New York",
    role: "The New Yorker — who knows everyone",
    bio: "Nori has never arrived anywhere on time and has never failed to arrive with someone useful. Bold, loud, generous, and completely certain the house is going to be enormous.",
    gift: "Doors, and the nerve to knock on them",
    traits: ["Energy", "Freedom", "Fun"],
    portrait: "/mascots/nori.png",
    tier: "core",
  },

  // The wider pack. Each is tied to a place and a craft, so a later saga
  // has somewhere to go and someone waiting when it gets there.
  {
    slug: "sora",
    name: "Sora",
    breed: "Shiba Inu",
    city: "Kyoto",
    role: "The Guardian",
    bio: "Loyal, brave and calm. Sora keeps the workshop in Kyoto and has never once raised his voice, which is why everyone listens when he speaks.",
    gift: "Steadiness when the house is panicking",
    traits: ["Loyalty", "Bravery", "Calm"],
    portrait: "/mascots/sora.png",
    tier: "pack",
  },
  {
    slug: "hana",
    name: "Hana",
    breed: "Japanese Spitz",
    city: "Kyoto",
    role: "The Gentle One",
    bio: "Gentle, sweet and pure. Hana dyes the silk, and knows the exact hour of the morning when a colour tells the truth about itself.",
    gift: "Colour, and patience with it",
    traits: ["Gentleness", "Purity", "Care"],
    portrait: "/mascots/hana.png",
    tier: "pack",
  },
  {
    slug: "ren",
    name: "Ren",
    breed: "Akita",
    city: "Tokyo",
    role: "The Elder",
    bio: "Noble, protective and wise. Ren has watched three fashion houses rise and two collapse, and tells the crew about the two far more often than the one.",
    gift: "The mistakes they would otherwise have to make themselves",
    traits: ["Nobility", "Protection", "Wisdom"],
    portrait: "/mascots/ren.png",
    tier: "pack",
  },
  {
    slug: "mochi",
    name: "Mochi",
    breed: "Pekingese",
    city: "Bangkok",
    role: "The Royal",
    bio: "Calm, affectionate and entirely convinced of his own importance. Mochi opens doors in Bangkok that money cannot, largely by refusing to acknowledge they might be closed.",
    gift: "Access, and complete confidence",
    traits: ["Calm", "Warmth", "Presence"],
    portrait: "/mascots/mochi.png",
    tier: "pack",
  },
  {
    slug: "pika",
    name: "Pika",
    breed: "Corgi",
    city: "Seoul",
    role: "The Messenger",
    bio: "Playful, clever and full of charm. Pika carries samples between cities and has never lost one, though several have arrived by remarkable routes.",
    gift: "Speed, and an unreasonable number of contacts",
    traits: ["Cleverness", "Charm", "Speed"],
    portrait: "/mascots/pika.png",
    tier: "pack",
  },
  {
    slug: "nami",
    name: "Nami",
    breed: "Jindo",
    city: "Seoul",
    role: "The Independent",
    bio: "Loyal, independent and strong. Nami works alone by preference and shows up for the crew anyway, every single time, which is a kind of loyalty worth more than enthusiasm.",
    gift: "Showing up when it is difficult",
    traits: ["Loyalty", "Independence", "Strength"],
    portrait: "/mascots/nami.png",
    tier: "pack",
  },
  {
    slug: "coco",
    name: "Coco",
    breed: "Toy Poodle",
    city: "Paris",
    role: "The Sophisticate",
    bio: "Chic, sophisticated and classy. Coco knows which Paris rooms matter and, more usefully, which ones only believe they do.",
    gift: "Taste, and a map of where it is respected",
    traits: ["Chic", "Poise", "Discernment"],
    portrait: "/mascots/coco.png",
    tier: "pack",
  },
  {
    slug: "louis",
    name: "Louis",
    breed: "French Bulldog",
    city: "Paris",
    role: "The Charmer",
    bio: "Stylish, charming and bold. Louis has talked the house into three rooms it had no business entering and out of two it should never have been in.",
    gift: "Nerve",
    traits: ["Style", "Charm", "Boldness"],
    portrait: "/mascots/louis.png",
    tier: "pack",
  },
  {
    slug: "bella",
    name: "Bella",
    breed: "Maltese",
    city: "Milan",
    role: "The Heart",
    bio: "Pure, elegant and loving. Bella remembers every customer's name and every dog they bought for, and is the reason people come back a second time.",
    gift: "Making people feel remembered",
    traits: ["Elegance", "Warmth", "Loyalty"],
    portrait: "/mascots/bella.png",
    tier: "pack",
  },
];

// ---------------------------------------------------------------------
// Threads: the long game.
//
// Planted early, surfacing across sagas, deliberately unresolved. This
// is what makes the corpus feel like one continuous world rather than a
// set of unrelated shorts, and it gives every new episode somewhere to
// reach back to.
// ---------------------------------------------------------------------

export type Thread = {
  slug: string;
  title: string;
  question: string;
  status: "open" | "surfacing";
};

export const THREADS: Thread[] = [
  {
    slug: "lost-pattern",
    title: "The Lost Pattern",
    question:
      "A single square of silk from the shop that closed, in a weave nobody living can reproduce. Tails keeps it folded in his pocket. Every saga, someone claims they know who made it.",
    status: "open",
  },
  {
    slug: "the-house-that-said-no",
    title: "The House That Said No",
    question:
      "The maison on rue Saint-Honoré that laughed them out of the room in Episode 02. They have not forgotten. Neither has the maison.",
    status: "surfacing",
  },
  {
    slug: "grandmothers-loom",
    title: "The Grandmother's Loom",
    question:
      "Still standing in Bangkok, still threaded, still waiting. Tails has not gone back to it yet. He will have to.",
    status: "open",
  },
];

// ---------------------------------------------------------------------
// Sagas and episodes.
// ---------------------------------------------------------------------

export type EpisodeStatus = "released" | "in-production" | "planned";

export type Episode = {
  number: number;
  title: string;
  city: City;
  /** One sentence. This is the video's hook and its whole shape. */
  logline: string;
  synopsis: string;
  theme: Theme;
  status: EpisodeStatus;
  /** Short on purpose — these live or die on a phone. */
  seconds: number;
  castSlugs: string[];
  /** A real, buyable piece. Story to shop in one tap. */
  featuredSlug?: string;
  /** Threads this chapter touches. */
  threadSlugs?: string[];
};

export type Saga = {
  number: number;
  title: string;
  region: string;
  premise: string;
  episodes: Episode[];
};

export const SAGAS: Saga[] = [
  {
    number: 1,
    title: "The Bangkok Saga",
    region: "Thailand",
    premise:
      "Before there was a house, there was a boy, a grandmother and a room full of looms. Everything the crew later becomes is already here, and none of them know it yet.",
    episodes: [
      {
        number: 1,
        title: "The Shop That Closed",
        city: "Bangkok",
        logline:
          "A silk shop closes after sixty years, and Tails takes home one square nobody can explain.",
        synopsis:
          "The old man locks the door for the last time and hands Tails a folded square of silk. It is a weave neither of them recognises. Tails asks who made it. The old man says: someone who is still alive.",
        theme: "Family",
        status: "in-production",
        seconds: 45,
        castSlugs: ["tails"],
        featuredSlug: "golden-palms",
        threadSlugs: ["lost-pattern", "grandmothers-loom"],
      },
      {
        number: 2,
        title: "Two Dogs, One Sentence",
        city: "Bangkok",
        logline:
          "Bamboo says 'we are a fashion house' out loud, with no silk, no money and no buyer.",
        synopsis:
          "They have a square of silk and a train ticket. Bamboo announces the house on a Bangkok rooftop to an audience of one. Tails does not laugh — which is the moment the house actually begins.",
        theme: "Positive thinking",
        status: "planned",
        seconds: 50,
        castSlugs: ["bamboo", "tails"],
        threadSlugs: ["lost-pattern"],
      },
      {
        number: 3,
        title: "Mochi Opens a Door",
        city: "Bangkok",
        logline: "A Pekingese who has never been refused anything gets them their first bolt of silk.",
        synopsis:
          "Mochi walks into a warehouse that does not sell to strangers and walks out with forty metres, entirely by declining to consider that it might not work.",
        theme: "Enterprise",
        status: "planned",
        seconds: 45,
        castSlugs: ["mochi", "tails", "bamboo"],
      },
    ],
  },
  {
    number: 2,
    title: "The Paris Saga",
    region: "France",
    premise:
      "The city they came for does not want them. This is the saga where the house learns that the door being shut is information, not a verdict.",
    episodes: [
      {
        number: 4,
        title: "Arrival",
        city: "Paris",
        logline:
          "Two dogs step off the train at Gare du Nord with one trunk and no appointments.",
        synopsis:
          "Bamboo has a plan. Tails has snacks. Neither has an address. They sleep the first night under the awning of a shop that will later stock them, which neither of them finds out for two years.",
        theme: "Courage",
        status: "planned",
        seconds: 45,
        castSlugs: ["bamboo", "tails"],
        featuredSlug: "golden-palms",
      },
      {
        number: 5,
        title: "The House That Said No",
        city: "Paris",
        logline: "The oldest maison on the street laughs them out of the room in ninety seconds.",
        synopsis:
          "They are given four minutes and used ninety seconds. Walking out, Bamboo is quiet for a long time, then says the only thing that matters: 'Right. So we come back better.'",
        theme: "Never give up",
        status: "planned",
        seconds: 55,
        castSlugs: ["bamboo", "tails"],
        threadSlugs: ["the-house-that-said-no"],
      },
      {
        number: 6,
        title: "Louis Knows a Room",
        city: "Paris",
        logline: "A French Bulldog with more nerve than sense gets them into a room they shouldn't be in.",
        synopsis:
          "Louis talks them past a doorman using a name he does not have. Coco is already inside and is not remotely surprised to see them.",
        theme: "Friendship",
        status: "planned",
        seconds: 50,
        castSlugs: ["louis", "coco", "bamboo"],
      },
    ],
  },
  {
    number: 3,
    title: "The Tokyo Saga",
    region: "Japan",
    premise:
      "They can sell it. They cannot yet make it properly. Japan is where the house stops being an idea and becomes a craft.",
    episodes: [
      {
        number: 7,
        title: "Four Minutes of Silence",
        city: "Tokyo",
        logline: "Miko looks at their first scarf for four full minutes and says nothing at all.",
        synopsis:
          "Then she turns the edge by hand and gives it back. It is the same scarf and a completely different object. Nobody mentions what changed. Miko joins the house that afternoon.",
        theme: "Craft",
        status: "planned",
        seconds: 45,
        castSlugs: ["miko", "bamboo", "tails"],
        featuredSlug: "chrysanthemum",
      },
      {
        number: 8,
        title: "Ren Counts the Failures",
        city: "Tokyo",
        logline: "An Akita who has watched two fashion houses collapse explains exactly how.",
        synopsis:
          "Ren tells them about the two that failed rather than the one that succeeded. Bamboo takes notes. It is the least glamorous evening of the saga and the most useful.",
        theme: "Honesty",
        status: "planned",
        seconds: 55,
        castSlugs: ["ren", "bamboo", "miko"],
      },
      {
        number: 9,
        title: "The Hour Colour Tells the Truth",
        city: "Kyoto",
        logline: "Hana will only dye at one hour of the morning, and finally explains why.",
        synopsis:
          "Sora keeps the workshop quiet. Hana waits for the light. The crew, who wanted to start at dawn, learn the difference between fast and finished.",
        theme: "Craft",
        status: "planned",
        seconds: 50,
        castSlugs: ["hana", "sora", "miko"],
        featuredSlug: "orchid",
      },
    ],
  },
  {
    number: 4,
    title: "The Milan Saga",
    region: "Italy",
    premise:
      "Someone finally tells them the truth about the work. It is not kind, and it is the best thing that happens to the house.",
    episodes: [
      {
        number: 10,
        title: "Luna Has Notes",
        city: "Milan",
        logline: "The collection is shown to Luna. Luna has notes. Many notes.",
        synopsis:
          "She is merciless for eleven minutes and right for all of them. Bamboo thanks her, which surprises everyone including Bamboo. The collection gets better that week.",
        theme: "Honesty",
        status: "planned",
        seconds: 50,
        castSlugs: ["luna", "bamboo", "miko"],
        featuredSlug: "orchid",
      },
      {
        number: 11,
        title: "Bella Remembers Everyone",
        city: "Milan",
        logline: "The first customer comes back — because someone remembered her dog's name.",
        synopsis:
          "Bella has kept every name and every dog. A woman returns for a second scarf and is greeted by both. This, Ren observes, is the entire business.",
        theme: "Friendship",
        status: "planned",
        seconds: 45,
        castSlugs: ["bella", "luna"],
      },
    ],
  },
  {
    number: 5,
    title: "The New York Saga",
    region: "United States",
    premise:
      "The offer that would make them big, immediately, at the cost of everything Miko fixed. The saga is not about the money.",
    episodes: [
      {
        number: 12,
        title: "Nori Knows a Guy",
        city: "New York",
        logline: "Nori arrives ninety minutes late with a buyer, a stylist and a man with a van.",
        synopsis:
          "None of them were expecting dogs. All three stay. Nori has still not explained how he knows any of them.",
        theme: "Enterprise",
        status: "planned",
        seconds: 50,
        castSlugs: ["nori", "bamboo"],
      },
      {
        number: 13,
        title: "Ten Thousand, By Friday",
        city: "New York",
        logline: "A buyer wants ten thousand scarves. Machine-hemmed. By Friday.",
        synopsis:
          "It is more money than the house has ever seen and it means the end of the hand-rolled edge. Miko does not argue. She simply puts the first scarf on the table and waits.",
        theme: "Never give up",
        status: "planned",
        seconds: 60,
        castSlugs: ["miko", "bamboo", "nori", "luna"],
        featuredSlug: "chrysanthemum",
        threadSlugs: ["the-house-that-said-no"],
      },
      {
        number: 14,
        title: "Pika Runs It Back",
        city: "Seoul",
        logline: "One sample, three cities, forty hours, and a corgi who refuses to lose it.",
        synopsis:
          "Nami meets him halfway without being asked. The sample arrives. Nobody ever finds out about the ferry.",
        theme: "Friendship",
        status: "planned",
        seconds: 45,
        castSlugs: ["pika", "nami"],
      },
    ],
  },
];

// Flattened, for anywhere that wants a simple list.
export const EPISODES: Episode[] = SAGAS.flatMap((saga) => saga.episodes);

export const EPISODE_STATUS_LABEL: Record<EpisodeStatus, string> = {
  released: "Watch now",
  "in-production": "In production",
  planned: "Written",
};

export function mascotBySlug(slug: string): Mascot | undefined {
  return MASCOTS.find((m) => m.slug === slug);
}

export function episodesFor(slug: string): Episode[] {
  return EPISODES.filter((e) => e.castSlugs.includes(slug));
}

export const CORE_CAST = MASCOTS.filter((m) => m.tier === "core");
export const WIDER_PACK = MASCOTS.filter((m) => m.tier === "pack");
