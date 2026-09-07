// /lib/universe.ts
// The BambooTails story bible.
//
// ---------------------------------------------------------------------
// The decision this file is built on: BambooTails is the world, not a
// character. Nobody in One Piece is named One Piece. The house is the
// banner; Tao and Lumi are the two who raised it.
//
// The cast is a multi-species guild rather than fourteen dog breeds, and
// the reason is mechanical rather than aesthetic. Stylised into chibi
// proportions, canine anatomy compresses — a Shiba, an Akita and a Corgi
// become colour variations on one base mesh, and a twelve-piece blind
// box set reads as one figure printed twelve times. A rabbit, a chick, a
// tortoise, a panda and a penguin do not have that problem: each is a
// distinct silhouette at a glance, from across a shop, in a black
// cutout. That silhouette variety is the entire reason collectors buy
// the case instead of the single.
//
// It also unboxes the audience. An all-dog roster addresses dog owners.
// A guild addresses everyone who has ever bought a plush of something.
//
// The bridge is in the fiction and it is not a stretch: Tao and Lumi
// found a house to make adornments for fellow travellers, and discover
// that the masters still keeping hand-craft alive — after the factories
// forgot it — are an underground society of animals across every
// continent. The dyer in Kyoto is a cat. The runner in Seoul is a chick.
// The one who knows how businesses die is a panda in Tokyo.
// ---------------------------------------------------------------------
//
// Two further rules the whole file obeys:
//
// 1. EVERY EPISODE HAS A COST. The `stakes` field is not decoration — if
//    it is empty the episode is not ready to film. "Never give up" with
//    nothing at risk is a caption, not a story.
//
// 2. THE COVENANT BEAT STAYS OFF SCREEN. Each episode carries a Tanakh
//    structure underneath, and it is a writing constraint, not a caption.
//    It is what keeps characters behaving consistently across chapters
//    written months apart, and what lets the corpus grow without a
//    planned ending.

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
  species: string;
  city: string;
  role: string;
  bio: string;
  /** What they bring the house. A character in a serial needs a function. */
  gift: string;
  /** The one idea they stand for. A character who stands for one thing
   *  can carry a 20-second video alone — which is the actual unit of
   *  production here. */
  carries: Theme;
  /** The Tanakh figure they rhyme with. Never stated on screen. */
  archetype: string;
  traits: [string, string, string];
  portrait: string;
  tier: "founder" | "guild";
};

// ---------------------------------------------------------------------
// The founders. Two dogs, because canine loyalty is the emotional centre
// the rest of the guild orbits, and because the house is named for them.
// ---------------------------------------------------------------------

export const MASCOTS: Mascot[] = [
  {
    slug: "tao",
    name: "Tao",
    species: "Shiba-Spitz pup",
    city: "Chiang Mai",
    role: "The Heir — who was handed the thread",
    bio: "Tao grew up between the teakwood looms of San Kamphaeng and can tell a hand-rolled hem by sound. He was in the room when the last loom was broken up for scrap, and he is the one the dying master pressed the square into. He has not put it down since. Named for the path, which is the only thing he has ever been certain of.",
    gift: "The relic, and the obligation that came with it",
    carries: "Family",
    archetype: "Joseph — bearer of the coat, sent into exile, saves the family",
    traits: ["Courage", "Loyalty", "Endurance"],
    portrait: "/mascots/chibi/tao.png",
    tier: "founder",
  },
  {
    slug: "lumi",
    name: "Lumi",
    species: "Toy Poodle",
    city: "Paris",
    role: "The Architect — who said it out loud first",
    bio: "Lumi declared the house on a Chiang Mai rooftop in a monsoon, with no silk, no money and no buyer. Everything since has been him making that sentence true. He is vain in the way that is forgivable, because he is the first to share and the last to quit. Named for light, which is what he keeps insisting is at the end of it.",
    gift: "Belief, spoken before there is any evidence for it",
    carries: "Positive thinking",
    archetype: "Moses — raised in the palace, walks out, leads the exile",
    traits: ["Vision", "Style", "Defiance"],
    portrait: "/mascots/chibi/lumi.png",
    tier: "founder",
  },

  // -------------------------------------------------------------------
  // The guild. Twelve masters, twelve species, twelve silhouettes. Each
  // holds one craft, in one city, and stands for one idea — which is how
  // a set of twelve becomes a set worth completing.
  // -------------------------------------------------------------------
  {
    slug: "miko",
    name: "Miko",
    species: "Shiba Inu",
    city: "Tokyo",
    role: "The Edge",
    bio: "Miko studied their first scarf for four minutes, then cut it down the middle with iron shears and showed them the frayed edge. A loose thread is a lie told to the customer. Then she rolled the edge by hand and gave it back, and it was a different object.",
    gift: "The standard nobody else could see",
    carries: "Craft",
    archetype: "Levi — the guardians of the sanctuary, keepers of the discipline",
    traits: ["Precision", "Discipline", "Silence"],
    portrait: "/mascots/chibi/miko.png",
    tier: "guild",
  },
  {
    slug: "sora",
    name: "Sora",
    species: "Scottish Fold",
    city: "Kyoto",
    role: "The Dyer",
    bio: "Sora works the indigo and madder vats and will only dip in the twenty minutes after the sun clears the ridge, because that is the only light that does not lie about a colour. He has made the whole crew wait a full day rather than dip early, and did it without raising his voice or putting down his coffee.",
    gift: "Colour, and the patience it costs",
    carries: "Craft",
    archetype: "Issachar — who knew how to read the seasons and the hours",
    traits: ["Patience", "Solitude", "Certainty"],
    portrait: "/mascots/chibi/sora.png",
    tier: "guild",
  },
  {
    slug: "ren",
    name: "Ren",
    species: "Panda",
    city: "Tokyo",
    role: "The Ledger",
    bio: "Ren watched two fashion houses go under and keeps the books of both. He talks about the failures rather than the survivor, which makes him the least glamorous voice in the room and the most useful one. He reads the accounts in sunglasses so nobody can tell which line he stopped at.",
    gift: "The mistakes they would otherwise have to make themselves",
    carries: "Honesty",
    archetype: "Dan — who judges, carefully, and is right",
    traits: ["Wisdom", "Sobriety", "Protection"],
    portrait: "/mascots/chibi/ren.png",
    tier: "guild",
  },
  {
    slug: "luna",
    name: "Luna",
    species: "Italian Greyhound",
    city: "Milan",
    role: "The Judge",
    bio: "Luna is the most feared independent eye in European luxury and she is merciless for exactly as long as it takes. Eleven minutes on the first collection, right about all of it. She is the reason the house improves between cities instead of only between years.",
    gift: "Honest criticism, delivered while it can still be acted on",
    carries: "Honesty",
    archetype: "Deborah — the judge under the palm tree",
    traits: ["Elegance", "Rigour", "Nerve"],
    portrait: "/mascots/luna.png",
    tier: "guild",
  },
  {
    slug: "chika",
    name: "Chika",
    species: "Fox",
    city: "New York",
    role: "The Planner",
    bio: "Chika has read the contract. All of it, including the part everyone skipped. She keeps the ledgers, the maps and the production calendar, and she is the reason a sample that has to be in three cities on Thursday is in three cities on Thursday.",
    gift: "Order, and the nerve to use the freight door",
    carries: "Enterprise",
    archetype: "Joseph's administration — the one who plans through the seven lean years",
    traits: ["Order", "Cunning", "Loyalty"],
    portrait: "/mascots/chibi/chika.png",
    tier: "guild",
  },
  {
    slug: "bao",
    name: "Bao",
    species: "Bichon Frise",
    city: "Paris",
    role: "The Artist",
    bio: "Bao paints every print by hand before it ever reaches silk — the cloth only gets the second draft. He recognised the weave across a crowded backstage and asked where it came from, which is the first time anyone outside Thailand had seen the pattern before.",
    gift: "The print, and the memory of what the relic is",
    carries: "Craft",
    archetype: "Bezalel — the artisan given the skill to build the sanctuary",
    traits: ["Imagination", "Taste", "Devotion"],
    portrait: "/mascots/chibi/bao.png",
    tier: "guild",
  },
  {
    slug: "pika",
    name: "Pika",
    species: "Chick",
    city: "Seoul",
    role: "The Courier",
    bio: "Three cities, forty hours, one sample, one storm and a ferry nobody has fully explained. Pika has never lost a package, though several have arrived by remarkable routes, and he has never once put one down.",
    gift: "Speed, and refusing to let go of the parcel",
    carries: "Never give up",
    archetype: "Naphtali — the swift runner, loosed and carrying good news",
    traits: ["Speed", "Cleverness", "Grit"],
    portrait: "/mascots/chibi/pika.png",
    tier: "guild",
  },
  {
    slug: "hikari",
    name: "Hikari",
    species: "Rabbit",
    city: "Seoul",
    role: "The Bright One",
    bio: "Hikari arrives first, leaves last, and has never once been talked out of a good mood. She met Pika halfway across a country in a storm at three in the morning and has never mentioned it since, which is the part that tells you who she is.",
    gift: "Turning up, loudly, when it is difficult",
    carries: "Positive thinking",
    archetype: "Zebulun — who rejoices in the going out",
    traits: ["Joy", "Energy", "Loyalty"],
    portrait: "/mascots/chibi/hikari.png",
    tier: "guild",
  },
  {
    slug: "yuki",
    name: "Yuki",
    species: "Penguin",
    city: "Milan",
    role: "The Keeper of Names",
    bio: "Yuki keeps a hand-bound ledger of every customer, their animal, and the date. He greeted a returning client by asking after a spaniel's paw four hundred days later. Small, round, and always the first one out onto the ice.",
    gift: "Making people feel remembered",
    carries: "Friendship",
    archetype: "Gad — the troop that holds, and comes back at the last",
    traits: ["Warmth", "Precision", "Steadfastness"],
    portrait: "/mascots/chibi/yuki.png",
    tier: "guild",
  },
  {
    slug: "kuma",
    name: "Kuma",
    species: "Bear",
    city: "Chiang Mai",
    role: "The Hearth",
    bio: "Kuma keeps the workshop. He was there the day the loom came apart and he is still there, which is why there is a workshop to come back to at all. Turns up with the heart — that is the entire job and he is extremely good at it.",
    gift: "The room they can always return to",
    carries: "Family",
    archetype: "Chesed — lovingkindness, which holds the covenant together",
    traits: ["Warmth", "Strength", "Constancy"],
    portrait: "/mascots/chibi/kuma.png",
    tier: "guild",
  },
  {
    slug: "kai",
    name: "Kai",
    species: "Tortoise",
    city: "Bangkok",
    role: "The Explorer",
    bio: "Slowest in the house. Has been to more cities than anyone else in it. Kai carries a brass seal older than most of the companies that refuse to see him, and he has never once accepted that a door is closed — he simply outlasts it.",
    gift: "Access, taken by outlasting rather than asking",
    carries: "Never give up",
    archetype: "Reuben — the firstborn, the ancient walker",
    traits: ["Patience", "Audacity", "Endurance"],
    portrait: "/mascots/chibi/kai.png",
    tier: "guild",
  },
  {
    slug: "mochi",
    name: "Mochi",
    species: "Mochi",
    city: "Kyoto",
    role: "The Little Joy",
    bio: "Does nothing. Is essential. Everybody checks on him before they leave. When the crew has been awake for thirty hours arguing about three grams of drape, Mochi is the reason somebody eventually laughs.",
    gift: "The reminder of why any of it is worth doing",
    carries: "Friendship",
    archetype: "Asher — whose portion is bread, and delight",
    traits: ["Purity", "Calm", "Delight"],
    portrait: "/mascots/chibi/mochi.png",
    tier: "guild",
  },
];

export const FOUNDERS = MASCOTS.filter((m) => m.tier === "founder");
export const GUILD = MASCOTS.filter((m) => m.tier === "guild");

// Kept as aliases so nothing that imported the old names breaks.
export const CORE_CAST = FOUNDERS;
export const WIDER_PACK = GUILD;

// ---------------------------------------------------------------------
// Threads: the long game. Planted early, surfacing across sagas,
// deliberately unresolved.
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
      "One uneven square of Mudmee silk, pressed into Tao's paws by a dying master. The structure cannot be reproduced by any machine without snapping the thread, and the master's last words were that whoever wove it is still breathing. Tao has carried it in every city since.",
    status: "open",
  },
  {
    slug: "the-house-that-said-no",
    title: "The House That Said No",
    question:
      "Maison Verreaux gave them four minutes and used ninety seconds of it. \"Uneven tension. Coarse slub. This is a cleaning cloth.\" Lumi folded the silk back into his coat and said: remember that laughter. Neither house has forgotten.",
    status: "surfacing",
  },
  {
    slug: "grandmothers-loom",
    title: "The Loom in San Kamphaeng",
    question:
      "Broken up for scrap in the first chapter. Kuma never left the room it stood in. Everything the guild learns in Tokyo, Kyoto, Milan and New York is, though none of them say it out loud, being carried back towards that workshop.",
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
    region: "Chiang Mai & Bangkok, Thailand",
    premise:
      "Before there was a house there was an inheritance, and it arrived on the worst day of someone's life. A craft lineage is being scrapped for timber, and what survives it is handed to the least likely heir in the room.",
    episodes: [
      {
        number: 1,
        title: "The Loom That Died",
        city: "Chiang Mai",
        logline:
          "The last handloom in San Kamphaeng is broken up for scrap, and a dying master presses one impossible square of silk into Tao's paws.",
        synopsis:
          "An iron pry-bar takes the frame of a teakwood loom apart. Dust falls through the light. The old weaver, who has no apprentice, folds a small uneven square of yellow Mudmee into Tao's paws — a weave with a two-tone structural depth no machine can copy without snapping the thread. His last instruction: do not let the machine eat this thread; find the one who wove it, they are still breathing. Kuma stands in the doorway and does not move. The shutter comes down and locks out the sun.",
        stakes: "A craft lineage ends today. There is no apprentice and no second copy.",
        theme: "Family",
        covenant: "The passing of the mantle — Elijah to Elisha.",
        status: "in-production",
        seconds: 45,
        castSlugs: ["tao", "kuma"],
        featuredSlug: "golden-palms",
        threadSlugs: ["lost-pattern", "grandmothers-loom"],
      },
      {
        number: 2,
        title: "The Rooftop Covenant",
        city: "Chiang Mai",
        logline:
          "Soaked through on a tin roof with no silk, no money and no buyer, Lumi says the sentence out loud: we are a fashion house.",
        synopsis:
          "The rain comes sideways. Tao keeps the square dry under his chest. Lumi stands into the storm and says it — not as a hope, as a fact — and the only witness in the world does not laugh. That is the moment the house exists, and the last moment for a long time that costs nothing.",
        stakes: "Say it and it can be taken from you. Say nothing and it never happens at all.",
        theme: "Positive thinking",
        covenant: "Lech-Lecha — go out from your country, to a land you will be shown.",
        status: "planned",
        seconds: 50,
        castSlugs: ["lumi", "tao"],
        threadSlugs: ["lost-pattern"],
      },
      {
        number: 3,
        title: "The Iron Warehouse",
        city: "Bangkok",
        logline:
          "A textile syndicate does not sell to outsiders. Kai walks in with a brass seal older than the company and simply outlasts them.",
        synopsis:
          "Rolls of polyester stacked like pillars, guard dogs in the aisles, a merchant who does not look up. Kai sets an old royal weavers' seal on the glass and waits. And waits. The merchant looks up somewhere in the second hour, at the oldest thing in the room, and finds it is not the tortoise. Forty metres of untainted silk leave under escort.",
        stakes: "No yarn, no house. This is the only supplier in the country who has any.",
        theme: "Never give up",
        covenant: "Tamar — the right claimed by nerve and a token.",
        status: "planned",
        seconds: 45,
        castSlugs: ["kai", "tao", "lumi"],
      },
    ],
  },
  {
    number: 2,
    title: "The Crucible of Exile",
    region: "Paris, France",
    premise:
      "The capital of luxury does not want them, and says so to their faces. This is where the house learns that a shut door is information rather than a verdict.",
    episodes: [
      {
        number: 4,
        title: "The Cold Awning",
        city: "Paris",
        logline:
          "Two animals from a warm country sleep in sleet under the awning of a shop that will one day stock them.",
        synopsis:
          "Turned away from five boarding houses. Tao's paws slip on wet cobbles; Lumi hauls the trunk with forty metres of Chiang Mai silk in it. They split the last dried sweet potato. Across the road, a couture house burns its chandeliers all night for nobody.",
        stakes: "The silk must stay dry. Everything they own is in one trunk.",
        theme: "Courage",
        covenant: "Jacob at Bethel — the stone for a pillow, on the first night of exile.",
        status: "planned",
        seconds: 45,
        castSlugs: ["lumi", "tao"],
        featuredSlug: "golden-palms",
      },
      {
        number: 5,
        title: "Ninety Seconds of Contempt",
        city: "Paris",
        logline:
          "Maison Verreaux gives them four minutes and uses ninety seconds of it to call their inheritance a cleaning cloth.",
        synopsis:
          "A director lifts the square with the tip of a ruler rather than touch it. Uneven tension. Coarse slub. Clear your circus out of my foyer. Lumi folds the silk back into his coat without a word, and in the rain outside — with Tao crying and not hiding it — he says the only useful thing available: remember the laughter. That is the fuel.",
        stakes: "The one meeting they had. There is no second appointment in this city.",
        theme: "Never give up",
        covenant: "Moses before Pharaoh — mocked in the court before anything moves.",
        status: "planned",
        seconds: 55,
        castSlugs: ["lumi", "tao"],
        threadSlugs: ["the-house-that-said-no"],
      },
      {
        number: 6,
        title: "The Velvet Shadows",
        city: "Paris",
        logline:
          "They get through a service door they should not have, and a painter backstage recognises the weave on sight.",
        synopsis:
          "A back alley in the 8th, a name they do not have, and an iron door held open four seconds too long. Backstage among the racks, Bao watches them and does not call security — his eyes go straight to the silk at Lumi's collar. Paint still on his paws: \"I have not seen that structure since 1968. I have tried to paint it twice. Where did you get it?\"",
        stakes: "Caught here and Paris closes for good.",
        theme: "Friendship",
        covenant: "Rahab — the ally inside the walls who hides the travellers.",
        status: "planned",
        seconds: 50,
        castSlugs: ["bao", "lumi", "tao"],
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
          "Tao gasps. Miko holds up the severed edge and says a loose thread is a lie told to the customer. Then she rolls the raw edge inward by a fraction of a millimetre, eight micro-stitches without looking down, and hands it back transformed. \"Do that five thousand times without failing. Then you may speak to me.\"",
        stakes: "Their single best piece, destroyed in front of them, to make a point that is correct.",
        theme: "Craft",
        covenant: "The refiner's fire — what survives it is the only part worth keeping.",
        status: "planned",
        seconds: 45,
        castSlugs: ["miko", "lumi", "tao"],
        featuredSlug: "chrysanthemum",
      },
      {
        number: 8,
        title: "The Autopsy of Two Houses",
        city: "Tokyo",
        logline: "A panda who buried two fashion houses shows them the ledgers, line by line.",
        synopsis:
          "An empty warehouse over the bay, two faded banners, and the books of both. Everyone loves the dream, Ren says; the dream is free. If your margin cannot absorb one ruined pallet in the Pacific, you die. If you soften the weave for a discount buyer, you die. Lumi fills a notebook. Nothing about the evening is glamorous.",
        stakes: "The two most likely ways this house ends, named out loud.",
        theme: "Honesty",
        covenant: "Lamentations — counting the ruins honestly before rebuilding.",
        status: "planned",
        seconds: 55,
        castSlugs: ["ren", "lumi", "miko"],
      },
      {
        number: 9,
        title: "The Hour of Living Pigment",
        city: "Kyoto",
        logline:
          "The crew want to dye at dawn. Sora makes them wait, and the light arrives exactly when he said it would.",
        synopsis:
          "4:45am, mist on the sheds, vats of fermented indigo and crushed madder. The young ones reach for the yarn and Sora stops the room without raising his voice. He watches the ridge, coffee in one paw. When the sun clears it a clean beam hits the surface of the vat: now — the light does not lie for twenty minutes. Dip. Mochi, who has done nothing all morning, is the only one who was not nervous.",
        stakes: "Dip early and the whole seasonal run is wrong, and nobody will see it until evening.",
        theme: "Craft",
        covenant: "The anointing — the ritual that only counts at the appointed hour.",
        status: "planned",
        seconds: 50,
        castSlugs: ["sora", "mochi", "miko"],
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
        title: "The Inquest of Via Montenapoleone",
        city: "Milan",
        logline:
          "Luna takes eleven minutes to dismantle the collection and is right about every minute of it.",
        synopsis:
          "A marble table above the Duomo. The drape is heavy by three grams. The border will vanish under evening light. This motif says souvenir stall. She drops the scarf. Lumi — rigid, jaw set — puts out a paw, thanks her, and says they will work through the night. Something shifts behind Luna's eyes.",
        stakes: "The collection they crossed three countries to build, called ordinary.",
        theme: "Honesty",
        covenant: "Nathan before David — the truth told to someone who can still act on it.",
        status: "planned",
        seconds: 50,
        castSlugs: ["luna", "lumi", "miko"],
        featuredSlug: "orchid",
      },
      {
        number: 11,
        title: "The Sacred Ledger",
        city: "Milan",
        logline:
          "A customer returns after four hundred days and Yuki greets her dog by name before she reaches the counter.",
        synopsis:
          "Rain, a small showroom, an elderly spaniel in a worn coat. Yuki does not reach for a catalogue — he opens a hand-bound ledger. \"Signora. Four hundred and twelve days. How is Matteo's paw after the frost?\" The woman buys three pieces without asking the price. From the back room Ren says quietly: this is the fortress. They can buy billboards. They cannot buy memory.",
        stakes: "Whether the house is built on scale or on being known.",
        theme: "Friendship",
        covenant: "The book of remembrance — to be written down is to be kept.",
        status: "planned",
        seconds: 45,
        castSlugs: ["yuki", "luna", "ren"],
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
        title: "The Underground Network",
        city: "New York",
        logline:
          "The elevator is out, so Chika takes a department-store buyer down a wet freight ramp into a basement.",
        synopsis:
          "7th Avenue, 11:30pm, ninety minutes late, three stylists and a buyer who were not told where they were going. Under a single work-lamp among steam pipes, the collection is unrolled on a crate. The rawness of it cuts through every showroom they have seen this year. Chika had the route planned since Tuesday. The contract is signed on the crate.",
        stakes: "Their one chance with this buyer, in the worst room in Manhattan.",
        theme: "Enterprise",
        covenant: "Nehemiah — the wall rebuilt at night, with what is to hand.",
        status: "planned",
        seconds: 50,
        castSlugs: ["chika", "lumi"],
      },
      {
        number: 13,
        title: "Ten Thousand, By Friday",
        city: "New York",
        logline:
          "Ten thousand units, machine-hemmed, polyester, by Friday — more money than the house has ever seen.",
        synopsis:
          "48th floor, mahogany, an eight-figure order slid across the table. Drop the hand-rolled edge. Swap the handloom for satin-twill. No customer will ever know the difference. The room goes quiet. Miko does not argue — she walks forward and lays the original Chiang Mai square on top of the contract, hem glowing under the downlights. Lumi: \"Our customers know the difference. Declined.\"",
        stakes: "Solvency, against the one thing that makes the house worth anything.",
        theme: "Never give up",
        covenant: "The golden calf refused — the shortcut that costs the covenant.",
        status: "planned",
        seconds: 60,
        castSlugs: ["miko", "lumi", "chika", "luna"],
        featuredSlug: "chrysanthemum",
        threadSlugs: ["the-house-that-said-no"],
      },
      {
        number: 14,
        title: "The Midnight Crossing",
        city: "Seoul",
        logline:
          "One exhibition sample, three borders, forty hours, a storm that grounds every flight — and a chick who will not put it down.",
        synopsis:
          "Incheon, air freight cancelled, trains stopped. Pika makes a night ferry as the gangway lifts. Hikari, who was not asked, is on the far shore at 3am with a van and an unreasonable amount of enthusiasm. The sample reaches the gallery three minutes before the doors. And a cable arrives from Chiang Mai: Kuma has the loom standing again, and the weaver is alive.",
        stakes: "The showcase, and with it every door the house has not yet opened.",
        theme: "Friendship",
        covenant: "Ahimaaz — the runner who carries the news through, whatever it takes.",
        status: "planned",
        seconds: 45,
        castSlugs: ["pika", "hikari", "tao"],
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
