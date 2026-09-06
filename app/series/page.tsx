import type { Metadata } from "next";
import Link from "next/link";
import { EPISODES, EPISODE_STATUS_LABEL } from "@/lib/universe";
import { PIECES } from "@/lib/catalog";
import { NewsletterForm } from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "The Series",
  description: "A short animated series about two dogs who run a silk atelier in Paris.",
};

export default function Series() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
      <h1 className="display max-w-3xl text-4xl sm:text-6xl">
        Two dogs, one bolt of silk, and a city that does not need another fashion house.
      </h1>
      <p className="mt-6 max-w-xl text-sm leading-relaxed text-[var(--muted)]">
        A short series, told in under a minute an episode. Every scarf that appears in it is one you
        can actually buy — that&apos;s the rule we set ourselves, and it&apos;s why the slate is
        short.
      </p>

      {/* Status is on every row. An episode that is written but not made
          says so, because a slate that implies four finished films and
          delivers none is a promise broken on the first click. */}
      <ol className="mt-14 divide-y divide-[var(--rule)] border-y border-[var(--rule)]">
        {EPISODES.map((episode) => {
          const featured = PIECES.find((p) => p.slug === episode.featuredSlug);
          return (
            <li key={episode.number} className="py-8">
              <div className="flex flex-wrap items-baseline gap-x-5 gap-y-2">
                <span className="label text-[var(--muted)]">
                  Ep. {String(episode.number).padStart(2, "0")}
                </span>
                <h2 className="display text-3xl">{episode.title}</h2>
                <span
                  className={`label ${
                    episode.status === "released"
                      ? "text-[var(--foreground)]"
                      : "text-[var(--muted)]"
                  }`}
                >
                  {EPISODE_STATUS_LABEL[episode.status]}
                </span>
                <span className="label text-[var(--muted)]">{episode.seconds}s</span>
              </div>

              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--muted)]">
                {episode.synopsis}
              </p>

              {/* Story to product, in one tap. This link is the whole
                  commercial argument for making the series at all. */}
              {featured && (
                <Link
                  href={`/collection/${featured.slug}`}
                  className="label mt-4 inline-block border-b border-[var(--foreground)] pb-0.5 transition-opacity hover:opacity-60"
                >
                  The scarf in this episode — {featured.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>

      <section className="mt-16 max-w-xl">
        <h2 className="display text-2xl">Told when the first one is finished</h2>
        <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
          Episode 01 is in production. Leave your address and you&apos;ll see it before it goes
          anywhere else.
        </p>
        <div className="mt-4">
          <NewsletterForm source="series" cta="Notify me" />
        </div>
      </section>
    </div>
  );
}
