import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CURRENCY, PIECES, isBuyable, TIER_LABEL } from "@/lib/catalog";
import { EPISODES } from "@/lib/universe";
import { BRAND } from "@/config/brand";
import { NewsletterForm } from "@/components/NewsletterForm";

// Only real pieces get a page. A concept has no detail view by design —
// there is nothing to detail, and a product-shaped page for something
// that doesn't exist is exactly the confusion the catalogue avoids.
export function generateStaticParams() {
  return PIECES.map((piece) => ({ slug: piece.slug }));
}

// params is a Promise in Next 16 — synchronous access was removed.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const piece = PIECES.find((p) => p.slug === slug);
  if (!piece) return {};
  return {
    title: piece.name,
    description: piece.description,
    openGraph: { images: [{ url: piece.images[0].src }] },
  };
}

export default async function PiecePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const piece = PIECES.find((p) => p.slug === slug);
  if (!piece) notFound();

  // The episode this piece is worn in, if any. Story to object in one
  // hop: someone who arrived from a video can find the scarf, and
  // someone who arrived from the shop can find where it came from.
  const episode = EPISODES.find((e) => e.number === piece.provenance?.episodeNumber);

  return (
    <div className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
      <Link href="/collection" className="label text-[var(--muted)] hover:text-[var(--foreground)]">
        ← Collection
      </Link>

      <div className="mt-8 grid gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Images stack rather than sitting in a carousel. On a product
            this visual, scrolling through every shot beats hiding all
            but one behind controls people have to discover. */}
        <div className="flex flex-col gap-4">
          {piece.images.map((image, index) => (
            <div key={image.src} className="relative aspect-[4/5] w-full bg-[var(--hairline)]">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority={index === 0}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* Sticky on desktop so the price and the buy action stay
            reachable however far the photographs run. */}
        <div className="lg:sticky lg:top-8 lg:self-start">
          {/* The tier is named above the piece. At this price the
              customer is buying a position in a house, not a scarf, and
              naming the rung is what makes the number legible. */}
          {piece.tier && <p className="label text-[var(--muted)]">{TIER_LABEL[piece.tier]}</p>}
          <h1 className="display mt-2 text-4xl sm:text-5xl">{piece.name}</h1>
          {isBuyable(piece) && (
            <p className="mt-3 text-lg text-[var(--muted)]">{CURRENCY.symbol}{piece.price}</p>
          )}
          <p className="mt-6 max-w-md leading-relaxed text-[var(--muted)]">{piece.description}</p>

          <dl className="mt-10 divide-y divide-[var(--hairline)] border-y border-[var(--rule)] text-sm">
            {[
              ["Material", "100% silk, hand-rolled hem"],
              ["Made", "By hand, in small batches"],
              ["Sizing", "Fits small to medium dogs — and a human neck"],
              ["Care", "Dry clean, or cold hand wash and hang"],
              ["Sent in", "The Heritage Hemp Pochette"],
            ].map(([term, detail]) => (
              <div key={term} className="flex gap-6 py-3">
                <dt className="label w-28 shrink-0 pt-0.5 text-[var(--muted)]">{term}</dt>
                <dd className="text-[var(--foreground)]">{detail}</dd>
              </div>
            ))}
          </dl>

          {/* Provenance. At this price the question is never whether it
              is beautiful, it is what makes it worth that. The honest
              answer is a bill of materials in hours and mastery rather
              than an argument about value, and it is the same document
              as the fiction: every technique named here is one the crew
              earn on screen, from a named master, in a named city. */}
          {piece.provenance && (
            <div className="keyline mt-10 bg-[var(--gold)] p-6">
              <p className="label text-[var(--madder)]">Provenance</p>
              <dl className="mt-5 space-y-4 text-sm">
                <div>
                  <dt className="label text-[var(--muted)]">Silk</dt>
                  <dd className="mt-1">{piece.provenance.silkGrade}</dd>
                </div>
                <div>
                  <dt className="label text-[var(--muted)]">Techniques</dt>
                  <dd className="mt-1">{piece.provenance.techniques.join(" · ")}</dd>
                </div>
                <div>
                  <dt className="label text-[var(--muted)]">Hand work</dt>
                  <dd className="mt-1">
                    {piece.provenance.handHours} hours, by one pair of hands
                  </dd>
                </div>
              </dl>
              {episode && (
                <Link
                  href="/series"
                  className="label mt-6 inline-block border-b border-[var(--foreground)] pb-0.5 transition-opacity hover:opacity-60"
                >
                  Worn in Ep. {String(episode.number).padStart(2, "0")} — {episode.title}
                </Link>
              )}
            </div>
          )}

          {/* Order is a route, not a modal — it survives a refresh, can
              be linked to from an episode, and leaves the product page
              about the product. */}
          <div className="mt-8">
            <Link
              href={`/order/${piece.slug}`}
              className="keyline label inline-block bg-[var(--madder)] px-8 py-4 text-white transition-transform hover:-translate-y-1"
            >
              Order — {CURRENCY.symbol}{piece.price}
            </Link>
            <p className="mt-3 max-w-sm text-xs leading-relaxed text-[var(--muted)]">
              Made to order. We confirm the fit by email before anything is charged.
            </p>
          </div>

          <div className="mt-12 border-t border-[var(--rule)] pt-8">
            <p className="label text-[var(--muted)]">Sold out, or want another print?</p>
            <p className="mt-2 max-w-sm text-sm text-[var(--muted)]">
              Batches are small. Leave your address and we&apos;ll write when {piece.name} is cut
              again.
            </p>
            <div className="mt-4">
              <NewsletterForm source={`piece:${piece.slug}`} cta="Notify me" />
            </div>
          </div>

          <p className="mt-8 text-xs text-[var(--muted)]">
            Questions about sizing?{" "}
            <a href={`mailto:${BRAND.email}`} className="underline underline-offset-2">
              {BRAND.email}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
