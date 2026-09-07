// /lib/production.ts
// The production layer, taken straight from the Gemini report.
//
// Kept in its own file, keyed by episode number, rather than folded into
// lib/universe.ts. Two reasons: the story bible should stay readable as
// a story bible, and this layer changes on a completely different clock
// — model names and tool choices go stale in months, while the episodes
// do not.
//
// Everything here is a brief for making the thing, not copy for selling
// it. That is why it renders on its own page and never on the shop.

// ---------------------------------------------------------------------
// The 45-60 second structure.
//
// The discipline that matters: no logo, no ambient drift, no establishing
// wide. Short-form gives you three seconds before the audience decides,
// and a beautiful slow open spends all three of them.
// ---------------------------------------------------------------------

export type Beat = {
  window: string;
  name: string;
  brief: string;
  /** What goes wrong if this beat is missed. */
  failure: string;
};

export const TIKTOK_RHYTHM: Beat[] = [
  {
    window: "0–3s",
    name: "The Kinetic Hook",
    brief:
      "Open mid-action on a macro close-up: the iron bar taking the loom apart, a tear landing on raw silk, a gate closing. On-screen text states the stake in one line.",
    failure: "A logo, a fade-in or an establishing wide spends the only three seconds you are given.",
  },
  {
    window: "4–25s",
    name: "The Crucible",
    brief:
      "Four shots, escalating. Exhaustion, rejection, or odds that do not close. Low-angle dolly, weather, and tight on the eyes.",
    failure: "Explaining instead of escalating. Nothing here should be exposition.",
  },
  {
    window: "26–45s",
    name: "The Flashpoint",
    brief:
      "One uncompromising stand, taken by one character. Miko will not accept the hem; Bamboo will not leave the door. Score lifts here and only here.",
    failure: "Two characters sharing the moment halves it. One person decides.",
  },
  {
    window: "46–60s",
    name: "The Covenant Loop",
    brief:
      "The immediate crisis resolves and a deeper one opens. The silk catches light and shows something it should not. Close on an unresolved line so the video loops and the comments argue.",
    failure: "A clean ending. A finished story is watched once.",
  },
];

// ---------------------------------------------------------------------
// The 0–3s on-screen line, per episode. This is the single highest-value
// sentence in each video — it is what a viewer reads before deciding, and
// it is the only place the stake gets stated rather than dramatised.
// ---------------------------------------------------------------------

export const HOOKS: Record<number, string> = {
  1: "The last handloom in San Kamphaeng was quiet today.",
  2: "They had no silk, no money, and no buyer. He said it anyway.",
  3: "This warehouse does not sell to outsiders. She did not ask.",
  4: "Five boarding houses said no. Then it started to sleet.",
  5: "They were given four minutes. It took ninety seconds.",
  6: "He burned a favour he cannot get back to open one door.",
  7: "She studied it for four minutes. Then she cut it in half.",
  8: "He buried two fashion houses. Tonight he shows them the books.",
  9: "Dip early and the whole season is wrong. Nobody will know until evening.",
  10: "Eleven minutes. She was right about every one of them.",
  11: "Four hundred and twelve days later, she remembered the dog's name.",
  12: "The elevator was out. So the buyer went down the freight ramp.",
  13: "Ten thousand units. More money than they have ever seen. One condition.",
  14: "Three borders, forty hours, one sample, and every flight grounded.",
};

// ---------------------------------------------------------------------
// The toolchain. Named models go stale fast — treat the Function column
// as the requirement and the platform as this month's answer to it.
// ---------------------------------------------------------------------

export type ToolPhase = {
  phase: string;
  platform: string;
  function: string;
  /** The bar it has to clear to be usable. */
  metric: string;
};

export const TOOLCHAIN: ToolPhase[] = [
  {
    phase: "Character pre-production",
    platform: "Midjourney V8.1 / Kolors",
    function: "Turnaround sheets, eight angles per character, locked lighting and seed.",
    metric: "Zero facial drift across 100+ generations.",
  },
  {
    phase: "Generative motion",
    platform: "Kling 3.0 Omni",
    function: "Image-to-video, multi-shot storyboard mode, fabric drape simulation.",
    metric: "Fur that moves like fur and silk that falls like silk.",
  },
  {
    phase: "Cinematic staging",
    platform: "Google Veo 3.1",
    function: "9:16 vertical master plates, architectural city lighting.",
    metric: "Photoreal texture with no artifacting on the weave.",
  },
  {
    phase: "Precision dynamics",
    platform: "Runway Gen-4.5",
    function: "Multi-motion brush — wind on a frayed edge while the gaze stays locked.",
    metric: "Directional control over one element without moving the rest.",
  },
  {
    phase: "Acoustic master",
    platform: "ElevenLabs + edit",
    function: "Voice, plus foley: loom batten, Paris wind, the snap of shears.",
    metric: "Retention past the three-second barrier.",
  },
];

// ---------------------------------------------------------------------
// The commercial pyramid.
//
// The point the report makes best: a €249 scarf cannot carry customer
// acquisition on paid channels at 65-78% margin, and it was never
// supposed to. It is the halo. Everything underneath it is what actually
// compounds — and the layer with the highest margin is the cheapest
// object in the range.
// ---------------------------------------------------------------------

export type PyramidLayer = {
  layer: string;
  asset: string;
  audience: string;
  price: string;
  margin: string;
  purpose: string;
  /** Whether this layer exists yet. Honesty about the gap is the plan. */
  status: "live" | "designed" | "planned";
};

export const PYRAMID: PyramidLayer[] = [
  {
    layer: "Haute couture crown",
    asset: "Hand-rolled Thai Mudmee silk scarves",
    audience: "Collectors, high-net-worth pet owners",
    price: "€249",
    margin: "65–75%",
    purpose:
      "Establishes that the craft is real. Everything below it borrows credibility from this and gives back reach.",
    status: "live",
  },
  {
    layer: "Diffusion lifestyle",
    asset: "Canvas leads, matching human twillies",
    audience: "Design buyers who are not yet collectors",
    price: "€45–95",
    margin: "78–84%",
    purpose:
      "Cash-flow stabiliser, and the bridge between what the dog wears and what the owner wears.",
    status: "planned",
  },
  {
    layer: "Mascot collectibles",
    asset: "Blind-box vinyl, plush charms, stickers",
    audience: "Global Gen Z, anime and design-toy fandoms",
    price: "€15–35",
    margin: "82–88%",
    purpose:
      "The reach engine. Highest margin in the range, lowest price in the range, and the only tier that travels by itself.",
    status: "designed",
  },
  {
    layer: "Transmedia rights",
    asset: "Short-form series, animated shorts, licensing",
    audience: "Everyone the other three layers never reach",
    price: "Free",
    margin: "Licensing",
    purpose:
      "Audience acquisition at zero marginal cost. This is what makes the pyramid a business rather than a catalogue.",
    status: "designed",
  },
];

// ---------------------------------------------------------------------
// The Maritime Silk Road. The answer to why a Chiang Mai house has a
// Tokyo hemmer, a Kyoto dyer and a Milan critic.
//
// Without this the names read as arbitrary. With it, the spread is the
// point: for centuries silk, dye, technique and breeding stock moved
// between Canton, Edo, Nagasaki, Malacca, Venice and Lyon, and a house
// assembled along that route is a house assembled the way silk actually
// travelled. It is the difference between a cast and a diaspora.
// ---------------------------------------------------------------------

export const SILK_ROAD = {
  principle:
    "The house is not a family and not a nationality. It is a trade route — the one raw silk, indigo, technique and breeding stock have moved along for four hundred years.",
  strands: [
    {
      name: "The Seed",
      region: "Chiang Mai — San Kamphaeng",
      claim:
        "The loom, the relic, and the Isan Mudmee resist that reached the north in somebody's hands and never went home. Tails carries it because he was in the room.",
    },
    {
      name: "The Craft",
      region: "Tokyo, Kyoto",
      claim:
        "Guild families who moved between Ayutthaya, Kyoto and Edo on the same route the silk did. They hold the hem, the dye vat and the shuttle. Their names are Japanese because their teachers were.",
    },
    {
      name: "The Crucible",
      region: "Paris, Milan",
      claim:
        "The salons that decide what counts. Bamboo, Louis, Coco and Luna are of that world — which is precisely why their judgement carries, and why leaving it cost them something.",
    },
    {
      name: "The Passage",
      region: "New York, Seoul",
      claim:
        "The people who move it. Nori knows the freight door, Pika has never put a package down, Nami re-routes the storm. No route, no house.",
    },
  ],
} as const;
