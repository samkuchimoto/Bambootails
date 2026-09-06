import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MASCOTS } from "@/lib/universe";

export const metadata: Metadata = {
  title: "Bamboo & Tails",
  description: "The two who run the atelier.",
};

// One photograph each, so the characters read as specific animals rather
// than as a logo. The images are of the same real dog the collection is
// shot on, which is the point: the house and its mascots are not
// separate fictions.
const PORTRAITS: Record<string, { src: string; alt: string }> = {
  bamboo: {
    src: "/images/scarf-hibiscus-hero.jpg",
    alt: "Bamboo, a cream Pomeranian, seated in the Golden Palms silk scarf",
  },
  tails: {
    src: "/images/scarf-meadow-03.jpg",
    alt: "Tails, a cream Pomeranian, wearing the Orchid scarf tied over the head",
  },
};

export default function Mascots() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
      <h1 className="display text-4xl sm:text-6xl">Bamboo &amp; Tails</h1>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--muted)]">
        Two dogs who believe they run a fashion house. One of them is right.
      </p>

      <div className="mt-14 space-y-20">
        {MASCOTS.map((mascot, index) => {
          const portrait = PORTRAITS[mascot.slug];
          return (
            <article
              key={mascot.slug}
              className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
            >
              <div
                className={`relative aspect-[4/5] w-full bg-[var(--rule)] ${
                  // Alternating sides stops two long profiles reading as
                  // one undifferentiated column.
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                {portrait && (
                  <Image
                    src={portrait.src}
                    alt={portrait.alt}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                )}
              </div>

              <div>
                <h2 className="display text-4xl">{mascot.name}</h2>
                <p className="label mt-3 text-[var(--muted)]">{mascot.role}</p>
                <p className="mt-6 leading-relaxed text-[var(--muted)]">{mascot.bio}</p>

                <ul className="mt-8 divide-y divide-[var(--rule)] border-y border-[var(--rule)]">
                  {mascot.traits.map((trait) => (
                    <li key={trait} className="py-3 text-sm text-[var(--muted)]">
                      {trait}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          );
        })}
      </div>

      <div className="mt-20 border-t border-[var(--rule)] pt-10">
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
