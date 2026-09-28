// /lib/digital.ts
// The Digital Atelier: characters drawn for virtual formats (VTuber
// avatars, game and stream rigs). None of them is released, so none of
// this lives in lib/catalog.ts — PIECES feeds the order flow, and a piece
// there is a claim that it can be bought and delivered. What exists today
// is the art on this page; the rigs are not built. Until a character has a
// real listing link (see DigitalCharacter.links), its card shows a vote
// instead of buy buttons — the same mechanism as the laboratory.

export type DigitalImage = { src: string; alt: string; width: number; height: number; caption?: string };

export type DigitalCharacter = {
  /** Page anchor (/digital-atelier#lunarr) and vote slug. */
  id: string;
  name: string;
  title: string;
  place?: string;
  description: string;
  /** The first image is the card image. */
  images: DigitalImage[];
  /** Named looks, where they have been named. */
  looks?: string[];
  /** Real listing URLs, once the character is released. Until there is
   *  one, the card shows the vote rather than buy buttons. */
  links?: Partial<Record<DigitalChannel, string>>;
};

export type DigitalChannel = "direct" | "fab" | "unity" | "booth" | "vgen";

// Where a released character is sold, in the order offered: the first
// channel a character has a link for becomes its main button, the rest go
// under "Also on". No TikTok Shop: its EU policy (updated 6 Aug 2026)
// lists digital media and downloads as unsupported, so it carries the
// physical pieces only.
export const CHANNELS: Record<DigitalChannel, { name: string; note: string }> = {
  direct: { name: "BambooTails", note: "Every format" },
  fab: { name: "Fab", note: "Unreal Engine" },
  unity: { name: "Unity Asset Store", note: "Unity" },
  booth: { name: "Booth", note: "VRM for VRChat and VTubing" },
  vgen: { name: "VGen", note: "Creator license" },
};

/** Planned release tiers, in the site currency. Shown as "at release":
 *  nothing is sold until a rig exists. */
export const RELEASE_TIERS = { single: 49, master: 149 } as const;

export const SEVEN_BRANCHES: DigitalCharacter[] = [
  {
    id: "lunarr",
    name: "Lunarr",
    title: "The Explorer",
    place: "Bangkok · Deep Orbit",
    description:
      "Celestial entity with champagne-gold pearlescent skin, gemstone eyes and translucent crystal-bud antler branches. Travels with a blue coconut familiar.",
    images: [
      {
        src: "/images/digital/lunarr-spacefarer.jpg", width: 1254, height: 1254,
        alt: "Lunarr in a cobalt mecha flight suit, blowing a bubblegum bubble on a floating island beside a blue coconut familiar",
        caption: "The Spacefarer",
      },
      {
        src: "/images/digital/lunarr-haute-couture.jpg", width: 1145, height: 1374,
        alt: "Lunarr in an iridescent crystal-feather coat, seated in a strawberry armchair with chocolate and a strawberry drink",
        caption: "Haute Couture — Strawberry Palace",
      },
    ],
  },
  {
    id: "zeno",
    name: "Zeno",
    title: "The Dreamer",
    description: "Pale-silver branches, a glowing tablet and a crystal outcrop to read it on.",
    images: [{ src: "/images/digital/branch-zeno.jpg", width: 512, height: 512, alt: "Zeno reading a glowing tablet on a crystal outcrop" }],
  },
  {
    id: "pika",
    name: "Pika",
    title: "The Traveller",
    description: "Pink branches under a cap, a drink in hand, and signposts to Tokyo, Bangkok, Paris and space.",
    images: [{ src: "/images/digital/branch-pika.jpg", width: 512, height: 512, alt: "Pika in a cap with pink antler branches, beside signposts to Tokyo, Bangkok and Paris" }],
  },
  {
    id: "ren",
    name: "Ren",
    title: "The Builder",
    description: "Headphones on, laptop open, screens floating overhead.",
    images: [{ src: "/images/digital/branch-ren.jpg", width: 512, height: 425, alt: "Ren in headphones working on a laptop among floating screens" }],
  },
  {
    id: "sora",
    name: "Sora",
    title: "The Guide",
    description: "Robed, with a staff, keeping watch from a crescent moon.",
    images: [{ src: "/images/digital/branch-sora.jpg", width: 512, height: 425, alt: "Sora in a violet robe with a staff, seated on a crescent moon" }],
  },
  {
    id: "tao",
    name: "Tao",
    title: "The Warrior",
    description: "Sunglasses pushed up, treasure chests behind, a palm island to guard.",
    images: [{ src: "/images/digital/branch-tao-warrior.jpg", width: 512, height: 425, alt: "Tao the Warrior in sunglasses, between treasure chests on a palm island" }],
  },
];

export const LIVING_RELICS: DigitalCharacter[] = [
  {
    id: "petit-foyer",
    name: "Le Petit Foyer",
    title: "The Living Hearth",
    description:
      "Sentient red brick building with chimney antennae, expressive eyes and a blue door — shown in six biomes.",
    looks: ["Surreal Caldera", "Cosmic Asteroid", "Verdant Forest", "Deep Coral", "Alpine Summit", "Solar Canyon"],
    images: [
      {
        src: "/images/digital/petit-foyer-looks.jpg", width: 1312, height: 1199,
        alt: "Le Petit Foyer, a red brick building with eyes and a blue door, in six settings: a ketchup sea, an asteroid, a forest, a coral reef, snowy mountains and a desert",
      },
    ],
  },
  {
    id: "monsieur-marbre",
    name: "Monsieur Marbre",
    title: "The Parisian Café Totem",
    description:
      "Hand-carved, black-veined marble chimney column with a porcelain espresso cup, a leather-bound book and a following of Parisian pigeons.",
    images: [
      {
        src: "/images/digital/monsieur-marbre-paris.jpg", width: 1254, height: 1254,
        alt: "Monsieur Marbre, a marble chimney column holding an espresso cup and a book, surrounded by pigeons at a Paris café",
      },
      {
        src: "/images/digital/monsieur-marbre-looks.jpg", width: 1254, height: 1254,
        alt: "Monsieur Marbre in six settings: a Paris café, a neon city, the Alps, a coral reef, a cosy reading room and deep space",
        caption: "Six looks",
      },
    ],
  },
  {
    id: "neo-k",
    name: "Neo-K",
    title: "The Akihabara Karaoke Tower",
    description:
      "A tower of CRT screens and retro handheld consoles in paint-splashed overalls, with mirrored sunglasses and an illuminated microphone.",
    images: [
      {
        src: "/images/digital/neo-k-looks.jpg", width: 1312, height: 1199,
        alt: "Neo-K, a tower of retro screens in paint-splashed overalls, in six settings: a neon karaoke street, a beach, the moon, a mountain trail, a coral reef and a ski slope",
      },
    ],
  },
  {
    id: "roaming-dojo",
    name: "The Roaming Dojo",
    title: "The Pagoda Roller Kiosk",
    description:
      "A small tiled building in a samurai kabuto, a white puffer jacket, mirrored sunglasses and rainbow rollerblades.",
    images: [
      {
        src: "/images/digital/roaming-dojo-jungle.jpg", width: 1145, height: 1374,
        alt: "The Roaming Dojo in a samurai helmet and puffer jacket, rollerblading through a jungle with parrots and a toucan",
      },
      {
        src: "/images/digital/roaming-dojo-looks.jpg", width: 1536, height: 1024,
        alt: "The Roaming Dojo in six settings: a jungle, deep space, snowy mountains, a coral reef, a Tokyo street and a desert ruin",
        caption: "Six looks",
      },
    ],
  },
  {
    id: "gentle-colossus",
    name: "The Gentle Colossus",
    title: "The Manga Sanctuary Guardian",
    description:
      "Ivory monolith reading manga on a glowing tablet in a flower garden, with five kitten familiars: calico, ginger, silver, white and black.",
    images: [
      {
        src: "/images/digital/gentle-colossus-kittens.jpg", width: 1254, height: 1254,
        alt: "The Gentle Colossus, an ivory monolith reading manga on a tablet, surrounded by five kittens and flowers",
      },
      {
        src: "/images/digital/gentle-colossus-looks.jpg", width: 1536, height: 1024,
        alt: "The Gentle Colossus in six settings: a flower garden, a neon city, a coral reef, cherry blossoms by Mount Fuji, the moon and a manga-filled bedroom",
        caption: "Six looks",
      },
    ],
  },
];
