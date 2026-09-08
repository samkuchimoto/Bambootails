import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SAGAS, THREADS, EPISODE_STATUS_LABEL, mascotBySlug } from "@/lib/universe";
import { OPPOSITION } from "@/lib/world";
import { HOOKS } from "@/lib/production";
import { PIECES } from "@/lib/catalog";
import { NewsletterForm } from "@/components/NewsletterForm";
import { CastCharge } from "@/components/CastCharge";

export const metadata: Metadata = {
  title: "The Sagas",
  description:
    "Two dogs decide to build a fashion house. Nobody believes them. Fourteen chapters from a loom broken up for scrap in Chiang Mai to a boardroom in New York.",
};

// Colour rotates per saga rather than repeating one accent. Five sagas
// on one page in a single palette reads as one long article; five fields
// reads as five places, which is what they are.
const SAGA_FIELD = ["field-madder", "field-indigo", "field-gold", "field-blossom", "field-madder"];

export default function Series() {
  return (
    <div>
      {/* Full-bleed opening with the cast charging across it. The series
          is the loud half of the house and it should not open on the same
          quiet paper the shop does. */}
      <section className="field-indigo relative min-h-[70vh] overflow-hidden border-b-2 border-[var(--foreground)]">
        <div className="dots absolute inset-0 text-white" aria-hidden />
        <CastCharge className="opacity-80" />

        <div className="relative mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-center px-6 py-20">
          <p className="label text-white/70">
            Chiang Mai · Bangkok · Paris · Tokyo · Kyoto · Milan · New York · Seoul
          </p>

          <h1 className="relative mt-6 max-w-4xl">
            <span
              aria-hidden
              className="pop absolute left-[5px] top-[5px] block text-[3rem] leading-[0.85] text-[var(--gold)] sm:text-7xl lg:text-8xl"
            >
              Nobody
              <br />
              believes them.
            </span>
            <span className="pop relative block text-[3rem] leading-[0.85] text-white sm:text-7xl lg:text-8xl">
              Nobody
              <br />
              believes them.
            </span>
          </h1>

          <p className="display mt-8 max-w-2xl text-2xl italic leading-tight text-white sm:text-3xl">
            Two dogs decide to build a fashion house.
          </p>

          <p className="mt-6 max-w-xl leading-relaxed text-white/85">
            Told a minute at a time. The guild grows one city at a time — and the masters who join
            are a cat, a chick, a tortoise, a panda. Three threads run underneath, and nothing here
            is written to finish; a house is not a thing you complete.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        {/* Threads first. Naming the unresolved questions up front is what
            makes a slate feel like a world instead of a playlist, and it
            is the mechanic every critique singled out as already right. */}
        <section>
          <p className="label text-[var(--madder)]">Running underneath</p>
          <h2 className="pop mt-3 text-3xl sm:text-5xl">Three threads. None resolved.</h2>
          <ul className="mt-10 grid gap-6 sm:grid-cols-3">
            {THREADS.map((thread) => (
              <li key={thread.slug} className="keyline bg-[var(--background)] p-6">
                <div className="flex flex-wrap items-baseline gap-x-3">
                  <h3 className="display text-2xl">{thread.title}</h3>
                  <span
                    className={`label ${
                      thread.status === "surfacing"
                        ? "text-[var(--madder)]"
                        : "text-[var(--muted)]"
                    }`}
                  >
                    {thread.status === "surfacing" ? "Surfacing" : "Open"}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{thread.question}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* The opposition. A house that is merely good at something has a
            story that ends the moment it gets good. Both forces get their
            real argument rather than a strawman. */}
        <section className="mt-20">
          <p className="label text-[var(--madder)]">What they are up against</p>
          <h2 className="pop mt-3 text-3xl sm:text-5xl">The opposition is winning</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {OPPOSITION.map((force) => (
              <article key={force.slug} className="keyline field-madder p-7">
                <h3 className="pop text-2xl">{force.name}</h3>
                <p className="display mt-4 text-lg italic leading-snug">
                  &ldquo;{force.doctrine}&rdquo;
                </p>
                <dl className="mt-6 space-y-4 text-sm leading-relaxed">
                  <div>
                    <dt className="label text-white/60">Why they are winning</dt>
                    <dd className="mt-1 text-white/90">{force.advantage}</dd>
                  </div>
                  <div>
                    <dt className="label text-[var(--gold)]">The house&apos;s answer</dt>
                    <dd className="mt-1">{force.counter}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </section>
      </div>

      {/* Sagas. Each gets its own colour field, so scrolling the page
          feels like crossing borders rather than turning pages. */}
      {SAGAS.map((saga, sagaIndex) => (
        <section
          key={saga.number}
          className={`${SAGA_FIELD[sagaIndex % SAGA_FIELD.length]} relative overflow-hidden border-y-2 border-[var(--foreground)]`}
        >
          <div className="dots absolute inset-0 text-current" aria-hidden />

          <div className="relative mx-auto max-w-6xl px-6 py-16 sm:py-24">
            <div className="flex flex-wrap items-baseline gap-x-6 gap-y-2">
              <span className="pop text-6xl opacity-40 sm:text-8xl">
                {String(saga.number).padStart(2, "0")}
              </span>
              <div>
                <p className="label opacity-70">{saga.region}</p>
                <h2 className="pop mt-1 text-3xl sm:text-5xl">{saga.title}</h2>
              </div>
            </div>
            <p className="mt-6 max-w-2xl leading-relaxed opacity-90">{saga.premise}</p>

            <ol className="mt-14 space-y-8">
              {saga.episodes.map((episode) => {
                const featured = PIECES.find((p) => p.slug === episode.featuredSlug);
                return (
                  <li
                    key={episode.number}
                    className="keyline grid gap-7 bg-[var(--background)] p-6 text-[var(--foreground)] sm:p-8 lg:grid-cols-[1fr_auto] lg:gap-12"
                  >
                    <div>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                        <span className="pop text-3xl text-[var(--madder)]">
                          {String(episode.number).padStart(2, "0")}
                        </span>
                        <span className="label text-[var(--muted)]">{episode.city}</span>
                        <span
                          className={`label keyline-sm px-2.5 py-1 ${
                            episode.status === "in-production"
                              ? "bg-[var(--gold)]"
                              : "bg-[var(--background)] text-[var(--muted)]"
                          }`}
                        >
                          {EPISODE_STATUS_LABEL[episode.status]}
                        </span>
                        <span className="label text-[var(--muted)]">{episode.seconds}s</span>
                      </div>

                      <h3 className="pop mt-4 text-2xl sm:text-4xl">{episode.title}</h3>

                      {/* The three-second hook, set as the loudest line in
                          the card — it is the sentence the video actually
                          opens on, and the one that decides whether the
                          other fifty-seven seconds get watched. */}
                      {HOOKS[episode.number] && (
                        <p className="display mt-4 max-w-2xl border-l-4 border-[var(--madder)] pl-4 text-xl italic leading-snug sm:text-2xl">
                          {HOOKS[episode.number]}
                        </p>
                      )}

                      <p className="mt-5 max-w-2xl text-sm leading-relaxed text-[var(--muted)]">
                        {episode.synopsis}
                      </p>

                      <p className="mt-5 max-w-2xl bg-[var(--foreground)] p-4 text-sm leading-relaxed text-white">
                        <span className="label text-[var(--gold)]">At stake</span>
                        <br />
                        {episode.stakes}
                      </p>

                      <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
                        <span className="label keyline-sm bg-[var(--background)] px-3 py-1.5">
                          {episode.theme}
                        </span>
                        {featured && (
                          <Link
                            href={`/collection/${featured.slug}`}
                            className="label keyline-sm bg-[var(--gold)] px-3 py-1.5 transition-transform hover:-translate-y-0.5"
                          >
                            The scarf in this episode — {featured.name}
                          </Link>
                        )}
                      </div>
                    </div>

                    {/* Who's in it, shown rather than listed. */}
                    <div className="flex shrink-0 flex-wrap items-start gap-3">
                      {episode.castSlugs.map((slug) => {
                        const mascot = mascotBySlug(slug);
                        if (!mascot) return null;
                        return (
                          <Link
                            key={slug}
                            href={`/mascots#${slug}`}
                            className="keyline-lift w-20 text-center sm:w-24"
                          >
                            <div className="keyline-sm relative aspect-square w-full overflow-hidden bg-[var(--background)]">
                              <Image
                                src={mascot.portrait}
                                alt={`${mascot.name}, the ${mascot.species} from ${mascot.city}`}
                                fill
                                sizes="96px"
                                className="object-contain p-1.5"
                              />
                            </div>
                            <p className="display mt-1.5 text-base">{mascot.name}</p>
                          </Link>
                        );
                      })}
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </section>
      ))}

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="keyline max-w-xl bg-[var(--gold)] p-7">
          <h2 className="pop text-2xl sm:text-3xl">The sagas continue</h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--foreground)]/80">
            New chapters as they are finished. Leave your address and you&apos;ll see each one
            before it goes anywhere else.
          </p>
          <div className="mt-5">
            <NewsletterForm source="series" cta="Notify me" />
          </div>
        </div>
      </section>
    </div>
  );
}
