import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FOUNDERS, GUILD, episodesFor } from "@/lib/universe";
import { SILK_ROAD } from "@/lib/production";
import { ConceptVote } from "@/components/ConceptVote";
import { CastCharge } from "@/components/CastCharge";

export const metadata: Metadata = {
  title: "The House",
  description:
    "Two founders, twelve masters, eight cities. An unlikely alliance of different creatures keeping hand-craft alive.",
};

// Each guild member gets a colour from the house palette, cycled. A grid
// of twelve on one ground reads as a spreadsheet; twelve different
// grounds reads as a set — and a set is the thing a collector completes.
const GUILD_FIELD = [
  "bg-[var(--gold)]",
  "bg-[var(--orchid)]",
  "bg-[var(--blossom)]",
  "bg-[var(--amber)]",
  "bg-[var(--coral)]",
  "bg-[var(--indigo)] text-white",
];

export default function Mascots() {
  return (
    <div>
      <section className="field-madder relative min-h-[72vh] overflow-hidden border-b-2 border-[var(--foreground)]">
        <div className="dots absolute inset-0 text-white" aria-hidden />
        <CastCharge className="opacity-90" />

        <div className="relative mx-auto flex min-h-[72vh] max-w-6xl flex-col justify-center px-6 py-20">
          <p className="label text-white/70">
            Chiang Mai · Bangkok · Paris · Tokyo · Kyoto · Milan · New York · Seoul
          </p>
          <h1 className="relative mt-6 max-w-4xl">
            <span
              aria-hidden
              className="pop absolute left-[5px] top-[5px] block text-[3rem] leading-[0.85] text-[var(--gold)] sm:text-7xl lg:text-8xl"
            >
              An unlikely
              <br />
              alliance.
            </span>
            <span className="pop relative block text-[3rem] leading-[0.85] text-white sm:text-7xl lg:text-8xl">
              An unlikely
              <br />
              alliance.
            </span>
          </h1>
          <p className="mt-8 max-w-xl leading-relaxed text-white/85">
            Two dogs founded the house. The masters who joined it are a cat, a chick, a tortoise, a
            panda and a penguin — because when the factories forgot how to do this, the ones who
            remembered were not who anybody expected.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        {/* The route, stated before the cast rather than after it. The
            objection to a Chiang Mai house with a Tokyo hemmer and a
            Milan critic was never that the cast is diverse — it is that
            nothing explained it, and unexplained diversity reads as
            arbitrary. Naming the route first turns a cast into a
            diaspora, and it happens to be how silk actually moved. */}
        <section>
          <p className="label text-[var(--madder)]">Why these names</p>
          <h2 className="pop mt-3 max-w-2xl text-3xl sm:text-5xl">
            A house assembled along a trade route
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-[var(--muted)]">
            {SILK_ROAD.principle}
          </p>

          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SILK_ROAD.strands.map((strand) => (
              <li key={strand.name} className="keyline-sm bg-[var(--background)] p-5">
                <h3 className="display text-2xl">{strand.name}</h3>
                <p className="label mt-1 text-[var(--madder)]">{strand.region}</p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{strand.claim}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* The two who carry the story, at full weight. */}
        <p className="label mt-24 text-[var(--madder)]">The founders</p>
        <div className="mt-8 space-y-20">
          {FOUNDERS.map((mascot, index) => {
            const appearances = episodesFor(mascot.slug);
            return (
              <article
                key={mascot.slug}
                id={mascot.slug}
                className="grid scroll-mt-28 items-center gap-10 lg:grid-cols-2 lg:gap-16"
              >
                <div
                  className={`keyline relative aspect-square w-full max-w-md bg-[var(--gold)] ${
                    index % 2 === 1 ? "lg:order-2 lg:ml-auto" : ""
                  }`}
                >
                  <div className="dots absolute inset-0 text-[var(--foreground)]" aria-hidden />
                  <Image
                    src={mascot.portrait}
                    alt={`${mascot.name}, the ${mascot.species} from ${mascot.city}`}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="cutout object-contain p-8"
                  />
                </div>

                <div>
                  <p className="label text-[var(--madder)]">
                    {mascot.city} · {mascot.species}
                  </p>
                  <h2 className="pop mt-3 text-4xl sm:text-6xl">{mascot.name}</h2>
                  <p className="display mt-2 text-xl text-[var(--muted)]">{mascot.role}</p>
                  <p className="mt-6 max-w-md leading-relaxed text-[var(--muted)]">{mascot.bio}</p>

                  <p className="keyline-sm mt-6 max-w-md bg-[var(--gold)] p-4 text-sm leading-relaxed">
                    <span className="label text-[var(--madder)]">Brings</span>
                    <br />
                    {mascot.gift}
                  </p>

                  <ul className="mt-6 flex flex-wrap gap-2">
                    {[mascot.carries, ...mascot.traits].map((trait) => (
                      <li key={trait} className="label keyline-sm bg-[var(--background)] px-3 py-1.5">
                        {trait}
                      </li>
                    ))}
                  </ul>

                  {appearances.length > 0 && (
                    <div className="mt-8 border-t-2 border-[var(--foreground)] pt-5">
                      <p className="label text-[var(--muted)]">Appears in</p>
                      <ul className="mt-3 space-y-1.5">
                        {appearances.map((episode) => (
                          <li key={episode.number}>
                            <Link
                              href="/series"
                              className="text-sm text-[var(--muted)] underline-offset-4 hover:text-[var(--foreground)] hover:underline"
                            >
                              Ep. {String(episode.number).padStart(2, "0")} — {episode.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* The guild — twelve species, twelve silhouettes, twelve grounds.
          A vote on each, because which figure gets manufactured first is
          the single most expensive guess in the plan and fifty units of
          the wrong one is real money on a shelf. */}
      <section className="border-y-2 border-[var(--foreground)] bg-[var(--background)]">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <p className="label text-[var(--madder)]">The guild</p>
          <h2 className="pop mt-3 text-3xl sm:text-5xl">Twelve masters, twelve species</h2>
          <p className="mt-4 max-w-xl leading-relaxed text-[var(--muted)]">
            Each holds one craft, in one city, and stands for one idea — which is what lets any of
            them carry a twenty-second story alone, and what makes a set of twelve a set worth
            completing.
          </p>

          <ul className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {GUILD.map((mascot, i) => (
              <li
                key={mascot.slug}
                id={mascot.slug}
                className="keyline scroll-mt-28 bg-[var(--background)] p-4"
              >
                <div
                  className={`relative aspect-square w-full overflow-hidden ${
                    GUILD_FIELD[i % GUILD_FIELD.length]
                  }`}
                >
                  <div className="dots absolute inset-0 text-[var(--foreground)]" aria-hidden />
                  <Image
                    src={mascot.portrait}
                    alt={`${mascot.name}, the ${mascot.species} from ${mascot.city}`}
                    fill
                    sizes="(max-width: 640px) 45vw, 22vw"
                    className="cutout object-contain p-3"
                  />
                  <span className="pop absolute left-2 top-2 text-xs opacity-50">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="pop mt-4 text-xl">{mascot.name}</h3>
                <p className="label mt-1 text-[var(--muted)]">
                  {mascot.species} · {mascot.city}
                </p>
                <p className="label mt-1 text-[var(--madder)]">{mascot.carries}</p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{mascot.bio}</p>
                <div className="mt-4">
                  <ConceptVote slug={`mascot-${mascot.slug}`} name={mascot.name} />
                </div>
              </li>
            ))}
          </ul>

          <p className="mt-10 max-w-xl text-xs leading-relaxed text-[var(--muted)]">
            The figures are not yet made — the characters are finished, the line is not. Vote for
            the one you want and we make that one first: fifty of it, and you hear before anyone
            else.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-wrap gap-4">
          <Link
            href="/series"
            className="keyline label bg-[var(--foreground)] px-6 py-3 text-white transition-transform hover:-translate-y-0.5"
          >
            Read the sagas
          </Link>
          <Link
            href="/laboratory"
            className="keyline label bg-[var(--blossom)] px-6 py-3 transition-transform hover:-translate-y-0.5"
          >
            Vote in the laboratory
          </Link>
        </div>
      </div>
    </div>
  );
}
