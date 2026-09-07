import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CORE_CAST, MASCOT_LINE, WIDER_PACK, episodesFor } from "@/lib/universe";
import { ConceptVote } from "@/components/ConceptVote";

export const metadata: Metadata = {
  title: "The House",
  description:
    "Fourteen dogs, eight cities, one fashion house — and thirteen mascots in felt.",
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
            Different breeds.
            <br />
            Same dream.
          </h1>
          <p className="mt-7 max-w-xl leading-relaxed text-white/60">
            Five of them started it. The rest arrived one city at a time, and every one of them
            brought something the house could not have made without them.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        {/* The five who carry the story, at full weight. */}
        <p className="label text-[var(--muted)]">The crew</p>
        <div className="mt-10 space-y-24">
          {CORE_CAST.map((mascot, index) => {
            const appearances = episodesFor(mascot.slug);
            return (
              <article
                key={mascot.slug}
                id={mascot.slug}
                className="grid scroll-mt-28 items-center gap-10 lg:grid-cols-2 lg:gap-16"
              >
                <div
                  className={`relative aspect-square w-full max-w-md ${
                    // Alternating sides so five long profiles don't read
                    // as one undifferentiated column.
                    index % 2 === 1 ? "lg:order-2 lg:ml-auto" : ""
                  }`}
                >
                  <Image
                    src={mascot.portrait}
                    alt={`${mascot.name}, a ${mascot.breed} from ${mascot.city}`}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-contain"
                  />
                </div>

                <div>
                  <p className="label text-[var(--muted)]">
                    {mascot.city} · {mascot.breed}
                  </p>
                  <h2 className="display mt-3 text-4xl sm:text-6xl">{mascot.name}</h2>
                  <p className="display mt-1 text-xl text-[var(--muted)]">{mascot.role}</p>
                  <p className="mt-6 max-w-md leading-relaxed text-[var(--muted)]">{mascot.bio}</p>

                  {/* What they bring to the crew, stated plainly. A
                      character in a serial needs a function, not only a
                      personality. */}
                  <p className="mt-5 max-w-md border-l-2 border-[var(--accent)] pl-4 text-sm leading-relaxed">
                    <span className="label text-[var(--accent)]">Brings</span>
                    <br />
                    {mascot.gift}
                  </p>

                  <ul className="mt-7 flex flex-wrap gap-2">
                    {mascot.traits.map((trait) => (
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

        {/* The wider pack, as a grid. Present and findable, without
            competing with the five who carry the story. */}
        <section className="mt-28 border-t-2 border-[var(--foreground)] pt-10">
          <p className="label text-[var(--muted)]">The pack</p>
          <h2 className="display mt-3 text-3xl sm:text-5xl">Nine more, in six cities</h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--muted)]">
            The house could not run without them, and most of them would say they don&apos;t work
            for it at all.
          </p>

          <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3">
            {WIDER_PACK.map((mascot) => (
              <article key={mascot.slug} id={mascot.slug} className="scroll-mt-28">
                <div className="relative aspect-square w-full overflow-hidden bg-[var(--rule)]">
                  <Image
                    src={mascot.portrait}
                    alt={`${mascot.name}, a ${mascot.breed} from ${mascot.city}`}
                    fill
                    sizes="(max-width: 640px) 45vw, 30vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="display mt-4 text-2xl">{mascot.name}</h3>
                <p className="label mt-1 text-[var(--muted)]">
                  {mascot.city} · {mascot.breed}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{mascot.bio}</p>
                <p className="mt-3 text-xs leading-relaxed text-[var(--accent)]">{mascot.gift}</p>
              </article>
            ))}
          </div>
        </section>

        {/* The mascot line. Deliberately a different visual register
            from everything above it: photoreal dogs in real silk carry
            the house, needle-felt characters carry the pocket. Showing
            them on the same page with the border stated out loud is what
            keeps the collectible from reading as a cheap version of the
            scarf — they are not the same object at two prices. */}
        <section className="mt-28 border-t-2 border-[var(--foreground)] pt-10">
          <p className="label text-[var(--accent)]">The mascot line</p>
          <h2 className="display mt-3 text-3xl sm:text-5xl">Thirteen, in felt</h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--muted)]">
            The other half of the house. A scarf is a considered purchase; a mascot fits in a
            pocket, on a bag, on a desk. Each one carries a single idea, which is also what makes
            them easy to tell a very short story about.
          </p>

          <ul className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
            {MASCOT_LINE.map((toy) => (
              <li key={toy.slug}>
                <div className="relative aspect-square w-full bg-[#f4f1ec]">
                  <Image
                    src={toy.image}
                    alt={`${toy.name}, the ${toy.species} mascot`}
                    fill
                    sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 22vw"
                    className="object-contain p-3"
                  />
                </div>
                <h3 className="display mt-3 text-xl">{toy.name}</h3>
                <p className="label mt-1 text-[var(--muted)]">
                  {toy.species} · {toy.carries}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{toy.line}</p>

                {/* A vote per character, not one for the line. Which
                    mascot gets manufactured first is the single most
                    expensive guess in the whole plan, and this is the
                    cheapest way to stop guessing: the same endpoint the
                    concepts already use, so the answer arrives as an
                    email list sorted by demand. */}
                <div className="mt-3">
                  <ConceptVote slug={`mascot-${toy.slug}`} name={toy.name} />
                </div>
              </li>
            ))}
          </ul>

          <p className="mt-10 max-w-xl text-xs leading-relaxed text-[var(--muted)]">
            Not yet made — the characters are finished, the line is not. Vote for the one you want
            and we make that one first: fifty of it, and you hear before anyone else.
          </p>
        </section>

        <div className="mt-24 border-t border-[var(--rule)] pt-10">
          <Link
            href="/series"
            className="label border-b border-[var(--foreground)] pb-1 transition-opacity hover:opacity-60"
          >
            Read the sagas
          </Link>
        </div>
      </div>
    </div>
  );
}
