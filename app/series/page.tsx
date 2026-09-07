import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { EPISODES, EPISODE_STATUS_LABEL, mascotBySlug } from "@/lib/universe";
import { PIECES } from "@/lib/catalog";
import { NewsletterForm } from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "The Series",
  description: "Two dogs from Bangkok arrive in Paris to start a fashion house.",
};

export default function Series() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
      <p className="label text-[var(--muted)]">The series</p>
      <h1 className="display mt-4 max-w-3xl text-4xl sm:text-6xl">
        Two dogs from Bangkok arrive in Paris to start a fashion house.
      </h1>
      <p className="mt-6 max-w-xl leading-relaxed text-[var(--muted)]">
        Told in under a minute an episode. Every scarf that appears in it is one you can actually
        buy — that&apos;s the rule we set ourselves, and it&apos;s why the slate is short.
      </p>

      {/* Each row carries its own status. A slate that implies six
          finished films and delivers none is a promise broken on the
          first click. */}
      <ol className="mt-16 space-y-16">
        {EPISODES.map((episode) => {
          const featured = PIECES.find((p) => p.slug === episode.featuredSlug);
          return (
            <li key={episode.number} className="grid gap-8 border-t border-[var(--rule)] pt-8 lg:grid-cols-[1fr_auto] lg:gap-16">
              <div>
                <div className="flex flex-wrap items-baseline gap-x-5 gap-y-2">
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

                <h2 className="display mt-4 text-3xl sm:text-4xl">{episode.title}</h2>
                <p className="mt-4 max-w-2xl leading-relaxed text-[var(--muted)]">
                  {episode.synopsis}
                </p>

                {/* Story to product in one tap — the whole commercial
                    argument for making the series at all. */}
                {featured && (
                  <Link
                    href={`/collection/${featured.slug}`}
                    className="label mt-6 inline-block border-b border-[var(--foreground)] pb-0.5 transition-opacity hover:opacity-60"
                  >
                    The scarf in this episode — {featured.name}
                  </Link>
                )}
              </div>

              {/* Who's in it, shown rather than listed. */}
              <div className="flex shrink-0 items-start gap-3">
                {episode.castSlugs.map((slug) => {
                  const mascot = mascotBySlug(slug);
                  if (!mascot) return null;
                  return (
                    <Link key={slug} href={`/mascots#${slug}`} className="group w-24 text-center sm:w-28">
                      <div className="relative aspect-square w-full overflow-hidden rounded-full bg-[var(--rule)]">
                        <Image
                          src={mascot.portrait}
                          alt={`${mascot.name}, the ${mascot.city} dog`}
                          fill
                          sizes="112px"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <p className="display mt-2 text-lg">{mascot.name}</p>
                    </Link>
                  );
                })}
              </div>
            </li>
          );
        })}
      </ol>

      <section className="mt-20 max-w-xl border-t border-[var(--rule)] pt-10">
        <h2 className="display text-2xl sm:text-3xl">Told when the first one is finished</h2>
        <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
          Episode 01 is in production. Leave your address and you&apos;ll see it before it goes
          anywhere else.
        </p>
        <div className="mt-5">
          <NewsletterForm source="series" cta="Notify me" />
        </div>
      </section>
    </div>
  );
}
