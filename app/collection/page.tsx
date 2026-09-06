import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PIECES, COMING_SOON, CONCEPTS, AVAILABILITY_LABEL } from "@/lib/catalog";
import { NewsletterForm } from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "Collection",
  description: "Handmade silk scarves for dogs, in three prints.",
};

export default function Collection() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
      <h1 className="display text-4xl sm:text-6xl">Collection</h1>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--muted)]">
        Three prints, cut and hand-rolled in small batches. Each is photographed on a real dog, in the
        scarf you will actually receive.
      </p>

      <div className="mt-14 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
        {PIECES.map((piece) => (
          <Link key={piece.slug} href={`/collection/${piece.slug}`} className="group block">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-[var(--rule)]">
              <Image
                src={piece.images[0].src}
                alt={piece.images[0].alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
            <div className="mt-4 flex items-baseline justify-between gap-4">
              <h2 className="display text-2xl">{piece.name}</h2>
              <p className="text-sm text-[var(--muted)]">€{piece.priceEur}</p>
            </div>
            <p className="mt-1 text-sm leading-relaxed text-[var(--muted)]">{piece.description}</p>
          </Link>
        ))}
      </div>

      {/* Coming soon and concepts share a list, and each row states its
          own status. Grouping them under one heading would let a reader
          assume the whole block is nearly real. */}
      <section className="mt-24 border-t border-[var(--rule)] pt-14">
        <h2 className="display text-3xl sm:text-4xl">Not yet in the atelier</h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-[var(--muted)]">
          Two of these are being made. Three are drawings. We label which is which because the
          difference matters more to us than the page looking full.
        </p>

        <ul className="mt-10 divide-y divide-[var(--rule)] border-y border-[var(--rule)]">
          {[...COMING_SOON, ...CONCEPTS].map((piece) => (
            <li key={piece.slug} className="flex flex-wrap items-baseline gap-x-6 gap-y-1 py-5">
              <h3 className="display text-2xl">{piece.name}</h3>
              <span
                className={`label ${
                  piece.availability === "soon" ? "text-[var(--muted)]" : "text-[var(--accent)]"
                }`}
              >
                {AVAILABILITY_LABEL[piece.availability]}
              </span>
              <p className="w-full text-sm text-[var(--muted)] sm:w-auto sm:flex-1">
                {piece.description}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-10">
          <p className="label text-[var(--muted)]">Tell us which to make</p>
          <div className="mt-4">
            <NewsletterForm source="collection-vote" cta="Send" />
          </div>
        </div>
      </section>
    </div>
  );
}
