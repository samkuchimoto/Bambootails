import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CURRENCY, PIECES, TIER_LABEL, isBuyable } from "@/lib/catalog";
import { PYRAMID } from "@/lib/production";
import { NewsletterForm } from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "Collection",
  description:
    "Hand-rolled Thai silk, cut in numbered batches of fifty. Photographed on a real dog, in the scarf you will actually receive.",
};

const STATUS_LABEL = { live: "In the atelier", designed: "Designed", planned: "Planned" } as const;

// Concepts and coming-soon pieces moved to /laboratory. Keeping them on
// the shop page meant a customer scrolled past three real objects into a
// wall of things they could not buy, which is the fastest way to teach
// someone that your prices are hypothetical.

export default function Collection() {
  return (
    <div>
      <section className="field-gold relative overflow-hidden border-b-2 border-[var(--foreground)]">
        <div className="stripes absolute inset-0 text-[var(--foreground)]" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <p className="label text-[var(--foreground)]/60">Batch 01</p>
          <h1 className="relative mt-5 max-w-3xl">
            <span
              aria-hidden
              className="pop absolute left-[4px] top-[4px] block text-[2.8rem] leading-[0.85] text-white sm:text-7xl"
            >
              Fifty cuts.
              <br />
              Then never again.
            </span>
            <span className="pop relative block text-[2.8rem] leading-[0.85] sm:text-7xl">
              Fifty cuts.
              <br />
              Then never again.
            </span>
          </h1>
          <p className="mt-8 max-w-xl leading-relaxed text-[var(--foreground)]/85">
            Fifty is not a marketing number. It is how many one pair of hands can hem before the
            season turns. Every piece here is photographed on a real dog, in the scarf you will
            actually receive.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <ul className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {PIECES.map((piece, i) => (
            <li
              key={piece.slug}
              className="pop-in"
              style={{ ["--pop-delay" as string]: `${i * 0.07}s` }}
            >
              <Link href={`/collection/${piece.slug}`} className="keyline-lift block">
                <div className="keyline relative aspect-[4/5] w-full overflow-hidden bg-black">
                  <Image
                    src={piece.images[0].src}
                    alt={piece.images[0].alt}
                    fill
                    priority={i < 2}
                    sizes="(max-width: 640px) 90vw, 32vw"
                    className="object-cover"
                  />
                  {piece.tier && (
                    <span className="keyline-sm label absolute left-3 top-3 bg-[var(--background)] px-2.5 py-1">
                      {TIER_LABEL[piece.tier]}
                    </span>
                  )}
                </div>

                <h2 className="display mt-5 text-3xl">{piece.name}</h2>
                {isBuyable(piece) && (
                  <p className="pop mt-1 text-2xl text-[var(--madder)]">
                    {CURRENCY.symbol}
                    {piece.price}
                  </p>
                )}
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                  {piece.description}
                </p>
                {piece.provenance && (
                  <p className="label mt-3 text-[var(--muted)]">
                    {piece.provenance.silkGrade} · {piece.provenance.handHours}h by hand
                  </p>
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* The ladder, published on the shop page rather than hidden in a
            strategy deck. The crown is not the business, and saying so
            here is what makes the price legible instead of arbitrary:
            this is what exists, this is what is coming, and this is what
            each rung is actually for. */}
        <section className="mt-24 border-t-2 border-[var(--foreground)] pt-12">
          <p className="label text-[var(--madder)]">The ladder</p>
          <h2 className="pop mt-3 text-3xl sm:text-5xl">Four rungs, one house</h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-[var(--muted)]">
            The silk is the crown and it is deliberately the hardest thing to buy. Everything
            underneath exists so the house can be met before it is afforded — and the rung with the
            best margin in the range is the cheapest object in it.
          </p>

          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PYRAMID.map((layer) => (
              <li
                key={layer.layer}
                className={`keyline p-6 ${
                  layer.status === "live" ? "field-madder" : "bg-[var(--background)]"
                }`}
              >
                <span
                  className={`label keyline-sm inline-block px-2.5 py-1 ${
                    layer.status === "live"
                      ? "bg-[var(--gold)] text-[var(--foreground)]"
                      : "bg-[var(--background)] text-[var(--muted)]"
                  }`}
                >
                  {STATUS_LABEL[layer.status]}
                </span>
                <h3 className="display mt-4 text-2xl">{layer.layer}</h3>
                <p className="pop mt-2 text-2xl">{layer.price}</p>
                <p className="mt-3 text-sm leading-relaxed opacity-80">{layer.asset}</p>
                <p className="label mt-4 opacity-60">Margin {layer.margin}</p>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/laboratory"
              className="keyline label bg-[var(--blossom)] px-6 py-3 transition-transform hover:-translate-y-0.5"
            >
              Vote on what gets cut next
            </Link>
            <Link
              href="/atelier"
              className="keyline label bg-[var(--background)] px-6 py-3 transition-transform hover:-translate-y-0.5"
            >
              How it is made
            </Link>
          </div>
        </section>

        <section className="mt-20 max-w-xl">
          <div className="keyline bg-[var(--indigo)] p-7 text-white">
            <h2 className="pop text-2xl sm:text-3xl">Batch 02 has no date yet</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/80">
              When the next fifty are cut, the list is told before the shop is.
            </p>
            <div className="mt-5">
              <NewsletterForm source="collection" cta="Join the list" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
