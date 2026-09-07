// /lib/universe.ts
// The BambooTails story bible.
//
// Rebuilt against three converging critiques. What changed and why:
//
// 1. ORIGIN MOVED TO CHIANG MAI (San Kamphaeng). Bangkok is a trading
//    capital; the Lanna north is where hand-loomed silk actually lives.
//    It is also correct shonen structure — Luffy starts in a windmill
//    village, Naruto in a forest, Tanjiro on a charcoal mountain. Nobody
//    starts in the capital. The misty hills give every later city
//    something to be contrasted against.
//
// 2. THE COST IS REAL NOW. The old draft had a mild rejection and a
//    polite critique. Every critique said the same thing: nothing hurts,
//    so nothing lands. A loom is destroyed. A master dies. A sample is
//    cut in half. Somebody nearly loses the thing they came with. The
//    "never give up" is earned through visible failure rather than
//    asserted in a caption.
//
// 3. TANAKH ANCHORING IS STRUCTURAL, NOT DECORATIVE. Each episode
//    carries a covenant beat — the passing of a mantle, the call to
//    leave, the refusal of the golden calf. That is what gives a
//    45-second cartoon about dogs the weight to survive repetition, and
//    it is why the corpus can grow without a planned ending.
//
// 4. THE OPPOSITION IS PRESENT IN THE TEXT. See lib/world.ts. The
//    Volume is winning, and it is winning with a good argument. Episodes
//    are written so the antagonist is felt even when off screen.
//
// Every episode still carries a logline sized for 45–60 seconds and
// exactly one theme. One theme is the discipline that keeps a short film
// about silk from becoming a mood board.

export type Theme =
  | "Positive thinking"
  | "Never give up"
  | "Friendship"
  | "Courage"
  | "Family"
  | "Craft"
  | "Enterprise"
  | "Honesty";

// ---------------------------------------------------------------------
// The cast.
//
// Two registers, deliberately assigned rather than blended:
//
//   "atelier" — photoreal, in real silk. These are the dogs of the
//               house, shot like a fashion campaign. They carry the
//               €249 tier and the luxury register.
//   "mascot"  — needle-felt chibi. The Chiikawa layer: blind-box vinyl,
//               plush charms, stickers, the app widget. They carry the
//               volume tier and the manga register.
//
// This is the resolution to "manga or Hermes": not a compromise between
// the two, but two coherent worlds with a clear border. A luxury house
// can have a mascot line. It cannot have a confused house style.
// ---------------------------------------------------------------------

export type Register = "atelier" | "mascot";

export type Mascot = {
  slug: string;
  name: string;
  breed: string;
  city: string;
  role: string;
  bio: string;
  /** What they bring the house. A character in a serial needs a function. */
  gift: string;
  /** The Tanakh figure they rhyme with. Never stated on screen — it is
   *  a writing constraint, not a caption, and it keeps each character
   *  behaving consistently across chapters written months apart. */
  archetype: string;
  traits: [string, string, string];
  portrait: string;
  register: Register;
  tier: "core" | "pack";
};

export const MASCOTS: Mascot[] = [
  {
    slug: "tails",
    name: "Tails",
    breed: "Pomeranian / Thai Bangkaew",
    city: "Chiang Mai",
    role: "The Heir — who was handed the thread",
    bio: "Tails grew up between the teakwood looms of San Kamphaeng and can tell a hand-rolled hem by sound. He was in the room when the last loom was broken up for scrap, and he is the one the old master handed the square to. He has not put it down since.",
    gift: "The relic, and the obligation that came with it",
    archetype: "Joseph — bearer of the coat, sent into exile, saves the family",
    traits: ["Joy", "Loyalty", "Endurance"],
    portrait: "/mascots/tails.png",
    register: "atelier",
    tier: "core",
  },
  {
    slug: "bamboo",
    name: "Bamboo",
    breed: "Pomeranian",
    city: "Paris",
    role: "The Architect — who said it out loud first",
    bio: "Bamboo declared the house on a Chiang Mai rooftop in a monsoon, with no silk, no money and no buyer. Everything since has been him making that sentence true. He is vain in the way that is forgivable, because he is the first to share and the last to quit.",
    gift: "Belief, spoken before there is any evidence for it",
    archetype: "Moses — raised in the palace, walks out, leads the exile",
    traits: ["Style", "Vision", "Defiance"],
    portrait: "/mascots/bamboo.png",
    register: "atelier",
    tier: "core",
  },
  {
    slug: "miko",
    name: "Miko",
    breed: "Shiba Inu",
    city: "Tokyo",
    role: "The Edge — who cut their best work in half",
    bio: "Miko studied their first scarf for four minutes, then cut it down the middle with iron shears and showed them the frayed edge. She said a loose thread is a lie told to the customer. Then she rolled the edge by hand and gave it back, and it was a different object.",
    gift: "The standard nobody else could see",
    archetype: "Bezalel — the artisan given the skill to build the sanctuary",
    traits: ["Precision", "Discipline", "Silence"],
    portrait: "/mascots/miko.png",
    register: "atelier",
    tier: "core",
  },
  {
    slug: "luna",
    name: "Luna",
    breed: "Italian Greyhound",
    city: "Milan",
    role: "The Judge — who tells them the truth first",
    bio: "Luna is the most feared independent eye in European luxury and she is merciless for exactly as long as it takes. Eleven minutes on the first collection, right about all of it. She is the reason the house improves between cities instead of only between years.",
    gift: "Honest criticism, delivered while it can still be acted on",
    archetype: "Deborah — the judge under the palm tree",
    traits: ["Elegance", "Rigour", "Nerve"],
    portrait: "/mascots/luna.png",
    register: "atelier",
    tier: "core",
  },
  {
    slug: "nori",
    name: "Nori",
    breed: "Jack Russell Terrier",
    city: "New York",
    role: "The Broker — who knows the freight door",
    bio: "Nori has never arrived anywhere on time and has never arrived without someone useful. He found the buyer, the stylist and the man with the van, and he has still not explained how he knows any of them.",
    gift: "Doors, and the nerve to use the back one",
    archetype: "Nehemiah — rebuilds the walls, working at night",
    traits: ["Energy", "Cunning", "Loyalty"],
    portrait: "/mascots/nori.png",
    register: "atelier",
    tier: "core",
  },

  // The wider pack. Each is tied to a place and a craft, so a later saga
  // has somewhere to go and someone waiting when it gets there.
  {
    slug: "hana",
    name: "Hana",
    breed: "Akita Inu",
    city: "Kyoto",
    role: "The Dyer",
    bio: "Hana works the indigo and madder vats and will only dye in the twenty minutes after the sun clears the ridge, because that is the only light that does not lie about a colour. She has made the whole crew wait a full day rather than dip early.",
    gift: "Colour, and the patience it costs",
    archetype: "The priestly dyers of the tabernacle",
    traits: ["Patience", "Purity", "Certainty"],
    portrait: "/mascots/hana.png",
    register: "atelier",
    tier: "pack",
  },
  {
    slug: "sora",
    name: "Sora",
    breed: "Kishu Ken",
    city: "Kyoto",
    role: "The Loom Keeper",
    bio: "Sora balances shuttle tension and keeps the workshop silent while Hana watches the light. He has never raised his voice, which is why the room stops when he speaks.",
    gift: "Steadiness while everyone else panics",
    archetype: "Hur — who held up the arms that were failing",
    traits: ["Loyalty", "Calm", "Vigilance"],
    portrait: "/mascots/sora.png",
    register: "atelier",
    tier: "pack",
  },
  {
    slug: "ren",
    name: "Ren",
    breed: "Akita",
    city: "Tokyo",
    role: "The Ledger",
    bio: "Ren survived two fashion houses going under and keeps the books of both. He talks about the failures rather than the survivor, which makes him the least glamorous voice in the room and the most useful.",
    gift: "The mistakes they would otherwise have to make themselves",
    archetype: "Jeremiah — who watched it fall and wrote it down",
    traits: ["Wisdom", "Sobriety", "Protection"],
    portrait: "/mascots/ren.png",
    register: "atelier",
    tier: "pack",
  },
  {
    slug: "mochi",
    name: "Mochi",
    breed: "Pekingese",
    city: "Bangkok",
    role: "The Diplomat",
    bio: "Mochi carries an old royal weavers' seal and an absolute refusal to consider that a door might be closed. She walked into a syndicate warehouse that does not sell to outsiders and walked out with forty metres.",
    gift: "Access, taken rather than requested",
    archetype: "Tamar — who claimed her right by nerve and a token",
    traits: ["Poise", "Audacity", "Warmth"],
    portrait: "/mascots/mochi.png",
    register: "atelier",
    tier: "pack",
  },
  {
    slug: "coco",
    name: "Coco",
    breed: "Toy Poodle",
    city: "Paris",
    role: "The Archive",
    bio: "A retired runway muse who recognised the weave on sight and asked where it came from. She is the first person outside Thailand to have seen the pattern before.",
    gift: "Memory — she knows what the relic is",
    archetype: "Huldah — the keeper who authenticates the scroll",
    traits: ["Taste", "Discretion", "Memory"],
    portrait: "/mascots/coco.png",
    register: "atelier",
    tier: "pack",
  },
  {
    slug: "louis",
    name: "Louis",
    breed: "French Bulldog",
    city: "Paris",
    role: "The Scout",
    bio: "Torn ear, no invitation, and a service door he should not have been able to open. Louis puts his own standing at risk every time he gets them into a room, and does it anyway.",
    gift: "Nerve, spent on other people",
    archetype: "Caleb — who saw the opening where others saw giants",
    traits: ["Boldness", "Charm", "Loyalty"],
    portrait: "/mascots/louis.png",
    register: "atelier",
    tier: "pack",
  },
  {
    slug: "bella",
    name: "Bella",
    breed: "Maltese",
    city: "Milan",
    role: "The Book of Names",
    bio: "Bella keeps a hand-bound ledger of every customer, their dog, and the date. She greeted a returning client by asking after a spaniel's paw, four hundred days later. That is the entire business, Ren said, watching.",
    gift: "Making people feel remembered",
    archetype: "The book of remembrance",
    traits: ["Warmth", "Precision", "Devotion"],
    portrait: "/mascots/bella.png",
    register: "atelier",
    tier: "pack",
  },
  {
    slug: "pika",
    name: "Pika",
    breed: "Corgi",
    city: "Seoul",
    role: "The Courier",
    bio: "Three cities, forty hours, one sample, one storm and a ferry nobody has explained. Pika has never lost a package, though several have arrived by remarkable routes.",
    gift: "Speed, and refusing to put the package down",
    archetype: "Ahimaaz — the runner who outran the other runner",
    traits: ["Speed", "Cleverness", "Grit"],
    portrait: "/mascots/pika.png",
    register: "atelier",
    tier: "pack",
  },
  {
    slug: "nami",
    name: "Nami",
    breed: "Jindo",
    city: "Seoul",
    role: "The Navigator",
    bio: "Nami works alone by preference and turns up for the crew anyway, every time, without being asked. She met Pika halfway across a country in a storm and never mentioned it again.",
    gift: "Turning up when it is difficult",
    archetype: "The daughters of Zelophehad — who secured the inheritance",
    traits: ["Independence", "Strength", "Loyalty"],
    portrait: "/mascots/nami.png",
    register: "atelier",
    tier: "pack",
  },
];

// ---------------------------------------------------------------------
// Threads: the long game. Planted early, surfacing across sagas,
// deliberately unresolved — the mechanic every critique singled out as
// the strongest thing already built.
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
      "One uneven square of Mudmee silk, pressed into Tails' paws by a dying master. The structure cannot be reproduced by any machine without snapping the thread, and the master's last words were that whoever wove it is still breathing. Tails has carried it in every city since.",
    status: "open",
  },
  {
    slug: "the-house-that-said-no",
    title: "The House That Said No",
    question:
      "Maison Verreaux gave them four minutes and used ninety seconds of it. \"Uneven tension. Coarse slub. This is a cleaning cloth.\" Bamboo folded the silk back into his coat and said: remember that laughter. Neither house has forgotten.",
    status: "surfacing",
  },
  {
    slug: "grandmothers-loom",
    title: "The Grandmother's Loom",
    question:
      "Still standing in San Kamphaeng. Still threaded. Everything the crew learns in Tokyo, Milan and New York is, though none of them say it, being carried back towards that room.",
    status: "open",
  },
];

// ---------------------------------------------------------------------
// Sagas.
// ---------------------------------------------------------------------

export type EpisodeStatus = "released" | "in-production" | "planned";

export type Episode = {
  number: number;
  title: string;
  city: string;
  /** The hook. This is what the 45 seconds actually has to deliver. */
  logline: string;
  synopsis: string;
  /** What is genuinely at risk. If this is blank, don't film it. */
  stakes: string;
  theme: Theme;
  /** The covenant beat underneath. A writing constraint, not a caption. */
  covenant: string;
  status: EpisodeStatus;
  seconds: number;
  castSlugs: string[];
  featuredSlug?: string;
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
    title: "The Covenant",
    region: "Chiang Mai, Thailand",
    premise:
      "Before there was a house there was an inheritance, and it arrived on the worst day of someone's life. A craft lineage is being scrapped for timber, and the thing that survives it is handed to the least likely heir in the room.",
    episodes: [
      {
        number: 1,
        title: "The Loom That Died",
        city: "Chiang Mai",
        logline:
          "The last handloom in San Kamphaeng is broken up for scrap, and a dying master presses one impossible square of silk into Tails' paws.",
        synopsis:
          "An iron pry-bar takes the frame of a teakwood loom apart. Dust falls through the light. The old weaver, who has no apprentice, folds a small uneven square of yellow Mudmee into Tails' paws — a weave with a two-tone structural depth no machine can copy without snapping the thread. His last instruction: do not let the machine eat this thread; find the one who wove it, they are still breathing. The shutter comes down and locks out the sun.",
        stakes: "A craft lineage ends today. There is no apprentice and no second copy.",
        theme: "Family",
        covenant: "The passing of the mantle — Elijah to Elisha.",
        status: "in-production",
        seconds: 45,
        castSlugs: ["tails"],
        featuredSlug: "golden-palms",
        threadSlugs: ["lost-pattern", "grandmothers-loom"],
      },
      {
        number: 2,
        title: "The Rooftop in the Monsoon",
        city: "Chiang Mai",
        logline:
          "Soaked through on a tin roof with no silk, no money and no buyer, Bamboo says the sentence out loud: we are a fashion house.",
        synopsis:
          "The rain comes sideways. Tails keeps the square dry under his chest. Bamboo stands into the storm and says it — not as a hope, as a fact — and the only witness in the world does not laugh. That is the moment the house exists, and it is the last moment for a long time that costs nothing.",
        stakes: "Say it and it can be taken from you. Say nothing and it never happens at all.",
        theme: "Positive thinking",
        covenant: "Lech-Lecha — go out from your country, to a land you will be shown.",
        status: "planned",
        seconds: 50,
        castSlugs: ["bamboo", "tails"],
        threadSlugs: ["lost-pattern"],
      },
      {
        number: 3,
        title: "The Iron Warehouse",
        city: "Bangkok",
        logline:
          "A textile syndicate does not sell to outsiders. Mochi walks in with a brass seal older than the company.",
        synopsis:
          "Rolls of polyester stacked like pillars, guard dogs in the aisles, and a merchant who does not look up. Mochi puts an old royal weavers' seal on the glass and waits. Forty metres of untainted silk leave under escort. She never raises her voice and never once considers that it might not work.",
        stakes: "No yarn, no house. This is the only supplier who has any.",
        theme: "Enterprise",
        covenant: "Tamar — the right claimed by nerve and a token.",
        status: "planned",
        seconds: 45,
        castSlugs: ["mochi", "tails", "bamboo"],
      },
    ],
  },
  {
    number: 2,
    title: "The Crucible of Exile",
    region: "Paris, France",
    premise:
      "The capital of luxury does not want them, and says so to their faces. This is where the house learns that a door being shut is information rather than a verdict.",
    episodes: [
      {
        number: 4,
        title: "The Cold Awning",
        city: "Paris",
        logline:
          "Two dogs from a warm country sleep in sleet under the awning of a shop that will one day stock them.",
        synopsis:
          "Turned away from five boarding houses. Tails' paws slip on wet cobbles; Bamboo hauls the trunk with forty metres of Chiang Mai silk in it. They split the last dried sweet potato. Across the road, a couture house burns its chandeliers all night for nobody.",
        stakes: "The silk must stay dry. Everything they own is in one trunk.",
        theme: "Courage",
        covenant: "Jacob at Bethel — the stone for a pillow, on the first night of exile.",
        status: "planned",
        seconds: 45,
        castSlugs: ["bamboo", "tails"],
        featuredSlug: "golden-palms",
      },
      {
        number: 5,
        title: "Ninety Seconds",
        city: "Paris",
        logline:
          "Maison Verreaux gives them four minutes and uses ninety seconds of it to call their inheritance a cleaning cloth.",
        synopsis:
          "A director lifts the square with the tip of a ruler rather than touch it. Uneven tension. Coarse slub. Clear your circus out of my foyer. Bamboo folds the silk back into his coat without a word, and in the rain outside — with Tails crying and not hiding it — he says the only useful thing available: remember the laughter. That is the fuel.",
        stakes: "The one meeting they had. There is no second appointment in this city.",
        theme: "Never give up",
        covenant: "Moses before Pharaoh — mocked in the court before anything moves.",
        status: "planned",
        seconds: 55,
        castSlugs: ["bamboo", "tails"],
        threadSlugs: ["the-house-that-said-no"],
      },
      {
        number: 6,
        title: "The Velvet Shadows",
        city: "Paris",
        logline:
          "Louis burns a favour he cannot replace to get them through a service door, and someone inside recognises the weave.",
        synopsis:
          "A back alley in the 8th, a name Louis does not have, and an iron door held open four seconds too long. Backstage among the racks, Coco watches them and does not call security. Her eyes go to the silk at Bamboo's collar. \"I have not seen that weave since 1968. Where did you get it?\"",
        stakes: "Louis' standing on that street, spent in one night on strangers.",
        theme: "Friendship",
        covenant: "Rahab — the ally inside the walls who hides the travellers.",
        status: "planned",
        seconds: 50,
        castSlugs: ["louis", "coco", "bamboo"],
        threadSlugs: ["lost-pattern"],
      },
    ],
  },
  {
    number: 3,
    title: "The Fires of Mastery",
    region: "Tokyo & Kyoto, Japan",
    premise:
      "They can sell it. They cannot yet make it. Japan is where the house stops being a claim and becomes a craft, and the tuition is paid in ruined work.",
    episodes: [
      {
        number: 7,
        title: "The Blade of Asakusa",
        city: "Tokyo",
        logline:
          "Miko studies their best scarf for four minutes, then cuts it in half with iron shears.",
        synopsis:
          "Tails gasps. Miko holds up the severed edge and says a loose thread is a lie told to the customer. Then she rolls the raw edge inward by a fraction of a millimetre, eight micro-stitches without looking down, and hands it back transformed. \"Do that five thousand times without failing. Then you may speak to me.\"",
        stakes: "Their single best piece, destroyed in front of them, to make a point that is correct.",
        theme: "Craft",
        covenant: "The refiner's fire — what survives it is the only part worth keeping.",
        status: "planned",
        seconds: 45,
        castSlugs: ["miko", "bamboo", "tails"],
        featuredSlug: "chrysanthemum",
      },
      {
        number: 8,
        title: "The Autopsy of Two Houses",
        city: "Tokyo",
        logline:
          "An Akita who buried two fashion houses shows them the ledgers, line by line.",
        synopsis:
          "An empty warehouse over the bay, two faded banners, and the books of both. Everyone loves the dream, Ren says; the dream is free. If your margin cannot absorb one ruined pallet in the Pacific, you die. If you soften the weave for a discount buyer, you die. Bamboo fills a notebook. Nothing about the evening is glamorous.",
        stakes: "The two most likely ways this house ends, named out loud.",
        theme: "Honesty",
        covenant: "Lamentations — counting the ruins honestly before rebuilding.",
        status: "planned",
        seconds: 55,
        castSlugs: ["ren", "bamboo", "miko"],
      },
      {
        number: 9,
        title: "The Hour Colour Tells the Truth",
        city: "Kyoto",
        logline:
          "The crew want to dye at dawn. Hana makes them wait, and the light arrives exactly when she said.",
        synopsis:
          "4:45am, mist on the sheds, vats of fermented indigo and crushed madder. The young ones reach for the yarn and Hana stops the room with her staff. She watches the ridge. When the sun clears it a clean beam hits the surface of the vat and she says: now — the light does not lie for twenty minutes. Dip.",
        stakes: "Dip early and the whole seasonal run is wrong, and nobody will see it until evening.",
        theme: "Craft",
        covenant: "The anointing — the ritual that only counts at the appointed hour.",
        status: "planned",
        seconds: 50,
        castSlugs: ["hana", "sora", "miko"],
        featuredSlug: "orchid",
      },
    ],
  },
  {
    number: 4,
    title: "The Crucible of Truth",
    region: "Milan, Italy",
    premise:
      "Somebody finally tells them the truth about the work. It is not kind, it is not softened, and it is the best thing that happens to the house.",
    episodes: [
      {
        number: 10,
        title: "The Inquest",
        city: "Milan",
        logline:
          "Luna takes eleven minutes to dismantle the collection and is right about every minute of it.",
        synopsis:
          "A marble table above the Duomo. The drape is heavy by three grams. The border will vanish under evening light. This motif says souvenir stall. She drops the scarf. Bamboo — rigid, jaw set — puts out a paw and thanks her, and says they will work through the night. Something shifts behind Luna's eyes.",
        stakes: "The collection they crossed three countries to build, called ordinary.",
        theme: "Honesty",
        covenant: "Nathan before David — the truth told to someone who can still act on it.",
        status: "planned",
        seconds: 50,
        castSlugs: ["luna", "bamboo", "miko"],
        featuredSlug: "orchid",
      },
      {
        number: 11,
        title: "The Sacred Ledger",
        city: "Milan",
        logline:
          "A customer returns after four hundred days and Bella greets her dog by name before she reaches the counter.",
        synopsis:
          "Rain, a small showroom, an elderly spaniel in a worn coat. Bella does not reach for a catalogue — she opens a hand-bound ledger. \"Signora. Four hundred and twelve days. How is Matteo's paw after the frost?\" The woman buys three pieces without asking the price. From the back room Ren says quietly: this is the fortress. They can buy billboards. They cannot buy memory.",
        stakes: "Whether the house is built on scale or on being known.",
        theme: "Friendship",
        covenant: "The book of remembrance — to be written down is to be kept.",
        status: "planned",
        seconds: 45,
        castSlugs: ["bella", "luna", "ren"],
      },
    ],
  },
  {
    number: 5,
    title: "The Great Trial",
    region: "New York & Seoul",
    premise:
      "The offer that makes them large immediately, and costs them the only thing that makes them worth buying. This saga is not about the money.",
    episodes: [
      {
        number: 12,
        title: "The Freight Ramp",
        city: "New York",
        logline:
          "The elevator is out, so Nori takes a department-store buyer down a wet freight ramp into a basement.",
        synopsis:
          "7th Avenue, 11:30pm, ninety minutes late, three stylists and a buyer who were not told they were meeting dogs. Under a single work-lamp among steam pipes, the collection is unrolled on a crate. The rawness of it cuts through every showroom they have seen this year. The contract is signed on the crate.",
        stakes: "Their one chance with this buyer, in the worst room in Manhattan.",
        theme: "Enterprise",
        covenant: "Nehemiah — the wall rebuilt at night, with what is to hand.",
        status: "planned",
        seconds: 50,
        castSlugs: ["nori", "bamboo"],
      },
      {
        number: 13,
        title: "Ten Thousand, By Friday",
        city: "New York",
        logline:
          "Ten thousand units, machine-hemmed, polyester, by Friday — more money than the house has ever seen.",
        synopsis:
          "48th floor, mahogany, an eight-figure order slid across the table. Drop the hand-rolled edge. Swap the handloom for satin-twill. No customer will ever know the difference. The room goes quiet. Miko does not argue — she walks forward and lays the original Chiang Mai square on top of the contract, hem glowing under the downlights. Bamboo: \"Our customers know the difference. Declined.\"",
        stakes: "Solvency, against the one thing that makes the house worth anything.",
        theme: "Never give up",
        covenant: "The golden calf refused — the shortcut that costs the covenant.",
        status: "planned",
        seconds: 60,
        castSlugs: ["miko", "bamboo", "nori", "luna"],
        featuredSlug: "chrysanthemum",
        threadSlugs: ["the-house-that-said-no"],
      },
      {
        number: 14,
        title: "The Midnight Crossing",
        city: "Seoul",
        logline:
          "One exhibition sample, three borders, forty hours, a storm that grounds every flight — and a corgi who will not put it down.",
        synopsis:
          "Incheon, air freight cancelled, trains stopped. Pika makes a night ferry as the gangway lifts. Nami re-routes him through the fog without being asked and never mentions it. The sample reaches the gallery three minutes before the doors. And a cable arrives from Chiang Mai: the loom has been restored, and the weaver is alive.",
        stakes: "The showcase, and with it every door the house has not yet opened.",
        theme: "Friendship",
        covenant: "Ahimaaz — the runner who carries the news through, whatever it takes.",
        status: "planned",
        seconds: 45,
        castSlugs: ["pika", "nami", "tails"],
        threadSlugs: ["grandmothers-loom", "lost-pattern"],
      },
    ],
  },
];

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
