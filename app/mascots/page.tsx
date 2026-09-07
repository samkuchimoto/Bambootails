import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MASCOTS, EPISODES } from "@/lib/universe";

export const metadata: Metadata = {
  title: "The House",
  description: "Five dogs, five cities, one fashion house.",
};

export default function Mascots() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
      <p className="label text-[var(--muted)]">Bangkok · Paris · Tokyo · Milan · New York</p>
      <h1 className="display mt-4 max-w-3xl text-4xl sm:text-6xl">
        Five dogs who believe they run a fashion house.
      </h1>
      <p className="mt-5 max-w-xl leading-relaxed text-[var(--muted)]">
        Some of them are right. They met in Bangkok, they argue in Paris, and every piece we make
        passes at least one of them first.
      </p>

      <div className="mt-16 space-y-24">
        {MASCOTS.map((mascot, index) => {
          const appearances = EPISODES.filter((e) => e.castSlugs.includes(mascot.slug));
          return (
            <article
              key={mascot.slug}
              // Anchor so the home page cast strip can link straight to a
              // character rather than dropping people at the top.
              id={mascot.slug}
              className="grid scroll-mt-28 items-center gap-10 lg:grid-cols-2 lg:gap-16"
            >
              <div
                className={`relative aspect-square w-full max-w-md ${
                  // Alternating sides so five long profiles don't read as
                  // one undifferentiated column.
                  index % 2 === 1 ? "lg:order-2 lg:ml-auto" : ""
                }`}
              >
                <Image
                  src={mascot.portrait}
                  alt={`${mascot.name}, the ${mascot.city} dog`}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain"
                />
              </div>

              <div>
                <p className="label text-[var(--muted)]">{mascot.city}</p>
                <h2 className="display mt-3 text-4xl sm:text-5xl">{mascot.name}</h2>
                <p className="display mt-1 text-xl text-[var(--muted)]">{mascot.role}</p>
                <p className="mt-6 max-w-md leading-relaxed text-[var(--muted)]">{mascot.bio}</p>

                <ul className="mt-8 flex flex-wrap gap-2">
                  {mascot.traits.map((trait) => (
                    <li
                      key={trait}
                      className="label border border-[var(--rule)] px-4 py-2 text-[var(--muted)]"
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

      <div className="mt-24 border-t border-[var(--rule)] pt-10">
        <Link
          href="/series"
          className="label border-b border-[var(--foreground)] pb-1 transition-opacity hover:opacity-60"
        >
          Watch them in the series
        </Link>
      </div>
    </div>
  );
}
