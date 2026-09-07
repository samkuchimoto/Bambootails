import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SAGAS, THREADS, EPISODE_STATUS_LABEL, mascotBySlug } from "@/lib/universe";
import { PIECES } from "@/lib/catalog";
import { NewsletterForm } from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "The Series",
  description:
    "Five dogs decide to build a fashion house. Nobody believes them. Told in sagas, from Bangkok to New York.",
};

export default function Series() {
  return (
    <div>
      {/* Full-bleed dark opening. The series is the loud half of the
          brand — it should not open on the same warm paper the shop
          does. */}
      <section className="bg-[#16130f] text-[#faf8f5]">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <p className="label text-white/40">Bangkok · Paris · Tokyo · Kyoto · Milan · New York · Seoul</p>
          <h1 className="display mt-5 max-w-4xl text-5xl sm:text-7xl lg:text-8xl">
            Five dogs decide to build a fashion house.
          </h1>
          <p className="display mt-4 text-2xl text-white/50 sm:text-4xl">Nobody believes them.</p>
          <p className="mt-8 max-w-xl leading-relaxed text-white/60">
            Told in sagas, a minute at a time. The crew grows one city at a time, the threads run
            underneath, and nothing here is written to finish — a house is not a thing you complete.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        {/* Threads first. Naming the unresolved questions up front is
            what makes a slate feel like a world instead of a playlist. */}
        <section>
          <p className="label text-[var(--accent)]">Running underneath</p>
          <h2 className="display mt-3 text-3xl sm:text-4xl">Threads</h2>
          <ul className="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-3">
            {THREADS.map((thread) => (
              <li key={thread.slug} className="border-t border-[var(--rule)] pt-5">
                <div className="flex flex-wrap items-baseline gap-x-3">
                  <h3 className="display text-xl">{thread.title}</h3>
                  <span
                    className={`label ${
                      thread.status === "surfacing" ? "text-[var(--accent)]" : "text-[var(--muted)]"
                    }`}
                  >
                    {thread.status === "surfacing" ? "Surfacing" : "Open"}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{thread.question}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Sagas. */}
        <div className="mt-24 space-y-24">
          {SAGAS.map((saga) => (
            <section key={saga.number}>
              <div className="border-t-2 border-[var(--foreground)] pt-6">
                <div className="flex flex-wrap items-baseline gap-x-5 gap-y-1">
                  <span className="label text-[var(--muted)]">
                    Saga {String(saga.number).padStart(2, "0")}
                  </span>
                  <span className="label text-[var(--muted)]">{saga.region}</span>
                </div>
                <h2 className="display mt-3 text-4xl sm:text-6xl">{saga.title}</h2>
                <p className="mt-4 max-w-2xl leading-relaxed text-[var(--muted)]">{saga.premise}</p>
              </div>

              <ol className="mt-12 space-y-12">
                {saga.episodes.map((episode) => {
                  const featured = PIECES.find((p) => p.slug === episode.featuredSlug);
                  return (
                    <li
                      key={episode.number}
                      className="grid gap-8 border-t border-[var(--rule)] pt-8 lg:grid-cols-[1fr_auto] lg:gap-14"
                    >
                      <div>
                        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
                          <span className="label text-[var(--muted)]">
                            Ep. {String(episode.number).padStart(2, "0")}
                          </span>
                          <span className="label text-[var(--muted)]">{episode.city}</span>
                          <span
                            className={`label ${
                              episode.status === "released"
                                ? "text-[var(--foreground)]"
                                : episode.status === "in-production"
                                  ? "text-[var(--accent)]"
                                  : "text-[var(--muted)]"
                            }`}
                          >
                            {EPISODE_STATUS_LABEL[episode.status]}
                          </span>
                          <span className="label text-[var(--muted)]">{episode.seconds}s</span>
                        </div>

                        <h3 className="display mt-3 text-3xl sm:text-4xl">{episode.title}</h3>

                        {/* The logline is set large: it's the hook, and
                            it's what a video actually has to deliver. */}
                        <p className="display mt-3 max-w-2xl text-xl leading-snug text-[var(--muted)] sm:text-2xl">
                          {episode.logline}
                        </p>

                        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--muted)]">
                          {episode.synopsis}
                        </p>

                        <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2">
                          <span className="label border border-[var(--rule)] px-3 py-1.5 text-[var(--muted)]">
                            {episode.theme}
                          </span>
                          {featured && (
                            <Link
                              href={`/collection/${featured.slug}`}
                              className="label border-b border-[var(--foreground)] pb-0.5 transition-opacity hover:opacity-60"
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
                              className="group w-20 text-center sm:w-24"
                            >
                              <div className="relative aspect-square w-full overflow-hidden rounded-full bg-[var(--rule)]">
                                <Image
                                  src={mascot.portrait}
                                  alt={`${mascot.name}, the ${mascot.city} dog`}
                                  fill
                                  sizes="96px"
                                  className="object-cover transition-transform duration-500 group-hover:scale-110"
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
            </section>
          ))}
        </div>

        <section className="mt-24 max-w-xl border-t border-[var(--rule)] pt-10">
          <h2 className="display text-2xl sm:text-3xl">The sagas continue</h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
            New chapters as they are finished. Leave your address and you&apos;ll see each one before
            it goes anywhere else.
          </p>
          <div className="mt-5">
            <NewsletterForm source="series" cta="Notify me" />
          </div>
        </section>
      </div>
    </div>
  );
}
