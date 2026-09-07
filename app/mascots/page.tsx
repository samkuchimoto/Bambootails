import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FOUNDERS, GUILD, episodesFor } from "@/lib/universe";
import { SILK_ROAD } from "@/lib/production";
import { ConceptVote } from "@/components/ConceptVote";

export const metadata: Metadata = {
  title: "The House",
  description:
    "Two founders, twelve masters, eight cities. An unlikely alliance of different creatures keeping hand-craft alive.",
};

export default function Mascots() {
  return (
    <div>
      <section className="bg-[#16130f] text-[#faf8f5]">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <p className="label text-white/40">
            Chiang Mai · Bangkok · Paris · Tokyo · Kyoto · Milan · New York · Seoul
          </p>
          <h1 className="display mt-5 max-w-3xl text-5xl sm:text-7xl">
            An unlikely
            <br />
            alliance.
          </h1>
          <p className="mt-7 max-w-xl leading-relaxed text-white/60">
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
        <section className="border-b border-[var(--rule)] pb-16">
          <p className="label text-[var(--accent)]">Why these names</p>
          <h2 className="display mt-3 max-w-2xl text-3xl sm:text-5xl">
            A house assembled along a trade route
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-[var(--muted)]">{SILK_ROAD.principle}</p>

          <ol className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {SILK_ROAD.strands.map((strand) => (
              <li key={strand.name} className="border-t border-[var(--rule)] pt-5">
                <h3 className="display text-xl">{strand.name}</h3>
                <p className="label mt-1 text-[var(--muted)]">{strand.region}</p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{strand.claim}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* The two who carry the story, at full weight. */}
        <p className="label mt-20 text-[var(--muted)]">The founders</p>
        <div className="mt-10 space-y-24">
          {FOUNDERS.map((mascot, index) => {
            const appearances = episodesFor(mascot.slug);
            return (
              <article
                key={mascot.slug}
                id={mascot.slug}
                className="grid scroll-mt-28 items-center gap-10 lg:grid-cols-2 lg:gap-16"
              >
                <div
                  className={`relative aspect-square w-full max-w-md ${
                    index % 2 === 1 ? "lg:order-2 lg:ml-auto" : ""
                  }`}
                >
                  <Image
                    src={mascot.portrait}
                    alt={`${mascot.name}, the ${mascot.species} from ${mascot.city}`}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-contain"
                  />
                </div>

                <div>
                  <p className="label text-[var(--muted)]">
                    {mascot.city} · {mascot.species}
                  </p>
                  <h2 className="display mt-3 text-4xl sm:text-6xl">{mascot.name}</h2>
                  <p className="display mt-1 text-xl text-[var(--muted)]">{mascot.role}</p>
                  <p className="mt-6 max-w-md leading-relaxed text-[var(--muted)]">{mascot.bio}</p>

                  {/* What they bring, stated plainly. A character in a
                      serial needs a function, not only a personality. */}
                  <p className="mt-5 max-w-md border-l-2 border-[var(--accent)] pl-4 text-sm leading-relaxed">
                    <span className="label text-[var(--accent)]">Brings</span>
                    <br />
                    {mascot.gift}
                  </p>

                  <ul className="mt-7 flex flex-wrap gap-2">
                    {[mascot.carries, ...mascot.traits].map((trait) => (
                      <li
                        key={trait}
                        className="label border border-[var(--rule)] px-3.5 py-2 text-[var(--muted)]"
                      >
                        {trait}
                      </li>
                    ))}
                  </ul>

                  {appearances.length > 0 && (
                    <div className="mt-8 border-t border-[var(--rule)] pt-5">
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

        {/* The guild. Twelve species, twelve silhouettes, and a vote on
            each — which one gets manufactured first is the single most
            expensive guess in the plan, and fifty units of the wrong one
            is real money sitting on a shelf. The same endpoint the
            concepts use, so the answer arrives as a list sorted by
            demand. */}
        <section className="mt-28 border-t-2 border-[var(--foreground)] pt-10">
          <p className="label text-[var(--accent)]">The guild</p>
          <h2 className="display mt-3 text-3xl sm:text-5xl">Twelve masters, twelve species</h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--muted)]">
            Each holds one craft, in one city, and stands for one idea — which is what lets any of
            them carry a twenty-second story alone, and what makes a set of twelve a set worth
            completing.
          </p>

          <ul className="mt-12 grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-4">
            {GUILD.map((mascot) => (
              <li key={mascot.slug} id={mascot.slug} className="scroll-mt-28">
                <div className="relative aspect-square w-full bg-[#f4f1ec]">
                  <Image
                    src={mascot.portrait}
                    alt={`${mascot.name}, the ${mascot.species} from ${mascot.city}`}
                    fill
                    sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 22vw"
                    className="object-contain p-3"
                  />
                </div>
                <h3 className="display mt-3 text-2xl">{mascot.name}</h3>
                <p className="label mt-1 text-[var(--muted)]">
                  {mascot.species} · {mascot.city}
                </p>
                <p className="label mt-1 text-[var(--accent)]">
                  {mascot.role} · {mascot.carries}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{mascot.bio}</p>
                <div className="mt-3">
                  <ConceptVote slug={`mascot-${mascot.slug}`} name={mascot.name} />
                </div>
              </li>
            ))}
          </ul>

          <p className="mt-12 max-w-xl text-xs leading-relaxed text-[var(--muted)]">
            The figures are not yet made — the characters are finished, the line is not. Vote for
            the one you want and we make that one first: fifty of it, and you hear before anyone
            else.
          </p>
        </section>

        <div className="mt-24 flex flex-wrap gap-x-8 gap-y-3 border-t border-[var(--rule)] pt-10">
          <Link
            href="/series"
            className="label border-b border-[var(--foreground)] pb-1 transition-opacity hover:opacity-60"
          >
            Read the sagas
          </Link>
          <Link
            href="/production"
            className="label border-b border-[var(--foreground)] pb-1 transition-opacity hover:opacity-60"
          >
            How the figures would be made
          </Link>
        </div>
      </div>
    </div>
  );
}
