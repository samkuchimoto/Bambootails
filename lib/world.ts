// /lib/world.ts
// The world engine: the opposition, the craft system, and the lineage.
//
// Three critiques landed on the same structural gap and it is worth
// stating plainly: the house had no antagonist. Without one there is no
// ideology, no escalating threat, and no reason the hand-rolled hem
// matters beyond taste — which is why the stakes read as cosy and the
// premise felt finite. A story about people who are simply good at
// something runs out after twenty chapters. A story about people
// defending something that is being destroyed does not.
//
// So the opposition is not a rival with better taste. It is an
// industrial logic that makes the craft economically impossible, and it
// is winning. That is true in the real world, which is what gives it
// teeth — every closed silk shop in the fiction has a real counterpart.
//
// The craft system is the other half. Shonen worlds scale because
// ability is legible: techniques are named, ranked, learned from
// specific masters in specific places, and combine. Here the "power
// system" is craft — silk grades with real properties, city techniques
// that unlock capability, mastery that must be earned from someone. It
// makes the world fractal (every new city can carry a technique), it
// makes the product legible (a scarf states which techniques made it),
// and it is entirely true, which means it never has to be retconned.

// ---------------------------------------------------------------------
// The opposition.
// ---------------------------------------------------------------------

export type Opposition = {
  slug: string;
  name: string;
  /** What they actually believe. An antagonist without a coherent
   *  argument is a cardboard cut-out; this one has to be persuasive. */
  doctrine: string;
  method: string;
  /** Why they are genuinely winning. */
  advantage: string;
  /** The line the house refuses to cross in response. */
  counter: string;
};

export const OPPOSITION: Opposition[] = [
  {
    slug: "the-volume",
    name: "The Volume",
    doctrine:
      "Anything a hand can do, a machine can do ten thousand times before lunch, and nobody can tell the difference from two metres away. Craft is nostalgia with a markup.",
    method:
      "Buy the pattern, copy the print, machine the hem, undercut by ninety percent, and be in the shop before the original.",
    advantage:
      "They are not wrong about the two metres. Most people cannot tell, most of the time, and they are cheaper for everyone.",
    counter:
      "The house never competes on price and never explains the hem. It only ever puts the two scarves side by side and lets someone hold both.",
  },
  {
    slug: "maison-verreaux",
    name: "Maison Verreaux",
    doctrine:
      "Luxury is a door, and the value of a door is who is kept outside it. Heritage cannot be earned inside one lifetime.",
    method:
      "Gatekeeping — the ninety seconds in Episode 05, the buyer who will not take a meeting, the show nobody is invited to.",
    advantage:
      "Two hundred years of archive, and every buyer in Paris takes their call.",
    counter:
      "The house keeps going back. Not to be let in — to be impossible to keep out.",
  },
];

// ---------------------------------------------------------------------
// The craft system. This is the power system, and it is all true.
// ---------------------------------------------------------------------

export type SilkGrade = {
  slug: string;
  name: string;
  origin: string;
  property: string;
  /** Why it is hard to get. Scarcity that is real, not manufactured. */
  constraint: string;
};

export const SILK_GRADES: SilkGrade[] = [
  {
    slug: "four-ply",
    name: "Four-Ply Thai",
    origin: "Isan, north-east Thailand",
    property:
      "Four strands reeled together by hand. Heavy enough to hold a fold and fall properly on a small body, which is why it works on a dog at all.",
    constraint: "A skilled reeler produces enough for perhaps two scarves in a day.",
  },
  {
    slug: "mudmee",
    name: "Mudmee",
    origin: "Khon Kaen",
    property:
      "Tie-dyed thread by thread before it is ever woven, so the pattern exists in the yarn rather than on the surface. It cannot be printed and it cannot be faked.",
    constraint: "The pattern must be planned in reverse, before a single pass of the loom.",
  },
  {
    slug: "the-lost-weave",
    name: "The Lost Weave",
    origin: "Unplaceable — and that is the clue",
    property:
      "The square handed over in Episode 01. Every expert who has held it has placed it wrongly, because it is two traditions in one cloth: an Isan Mudmee thread-resist, woven on a northern Lanna loom. Nobody looks for a Khon Kaen technique nine hundred kilometres north of Khon Kaen, which is exactly why it has stayed lost.",
    constraint: "One square exists. Two people have claimed they could reproduce it; neither could.",
  },
];

export type Technique = {
  slug: string;
  name: string;
  city: string;
  /** Who it must be learned from. Mastery has a source. */
  master: string;
  effect: string;
  cost: string;
};

export const TECHNIQUES: Technique[] = [
  {
    slug: "hand-rolled-hem",
    name: "The Hand-Rolled Hem",
    city: "Tokyo",
    master: "Miko",
    effect:
      "The edge is turned and stitched by hand so the hem is part of the cloth rather than attached to it. It is the difference between a scarf that falls and a scarf that hangs.",
    cost: "Forty minutes per edge. Four edges. It cannot be hurried and it cannot be delegated.",
  },
  {
    slug: "first-light-dye",
    name: "First-Light Dye",
    city: "Kyoto",
    master: "Hana",
    effect:
      "Dyeing in the one hour of morning when the light does not lie about a colour. What is matched at noon is wrong by evening.",
    cost: "One hour a day. Miss it and the batch waits until tomorrow.",
  },
  {
    slug: "reverse-planning",
    name: "Reverse Planning",
    city: "Khon Kaen",
    master: "The San Kamphaeng master",
    effect:
      "Designing the finished pattern backwards into the undyed thread, so the image emerges from the weave rather than sitting on it. Isan by origin — the master carried it nine hundred kilometres north and worked it on a Lanna loom, which is the whole reason nobody can place The Lost Weave.",
    cost: "Every error is invisible until the cloth is finished, and then it is total.",
  },
];

// ---------------------------------------------------------------------
// The lineage. Answers the naming question structurally.
//
// Not a bloodline — a craft lineage. Nobody in this house is related to
// anybody. They were taught, or they taught themselves and were
// recognised. That is why a Tokyo name, a Milan name and a Chiang Mai
// origin sit together without needing to be explained: the through-line
// is the craft, not the family tree. It is also the Straw Hats model,
// and found family is a stronger theme than genealogy.
// ---------------------------------------------------------------------

export const LINEAGE = {
  origin:
    "A teakwood handloom in San Kamphaeng, Chiang Mai. Broken up for scrap in Episode 01. Standing and threaded again by Episode 14.",
  principle:
    "The house is not a bloodline. It is a lineage of craft — everyone in it was taught by someone, and owes that debt forward. Where a member is from says only where the house found them.",
  rule: "You are in the house when someone in the house has taught you something and you have taught it on.",
} as const;
