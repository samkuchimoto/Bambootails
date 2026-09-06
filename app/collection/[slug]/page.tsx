import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PIECES, isBuyable } from "@/lib/catalog";
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
            <div key={image.src} className="relative aspect-[4/5] w-full bg-[var(--rule)]">
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
          <h1 className="display text-4xl sm:text-5xl">{piece.name}</h1>
          {isBuyable(piece) && (
            <p className="mt-3 text-lg text-[var(--muted)]">€{piece.priceEur}</p>
          )}
          <p className="mt-6 max-w-md leading-relaxed text-[var(--muted)]">{piece.description}</p>

          <dl className="mt-10 divide-y divide-[var(--rule)] border-y border-[var(--rule)] text-sm">
            {[
              ["Material", "100% silk, hand-rolled hem"],
              ["Made", "By hand, in small batches"],
              ["Sizing", "Fits small to medium dogs — and a human neck"],
              ["Care", "Dry clean, or cold hand wash and hang"],
              ["Sent in", "A hand-loomed linen pouch"],
            ].map(([term, detail]) => (
              <div key={term} className="flex gap-6 py-3">
                <dt className="label w-28 shrink-0 pt-0.5 text-[var(--muted)]">{term}</dt>
                <dd className="text-[var(--foreground)]">{detail}</dd>
              </div>
            ))}
          </dl>

          {/* Order is a route, not a modal — it survives a refresh, can
              be linked to from an episode, and leaves the product page
              about the product. */}
          <div className="mt-8">
            <Link
              href={`/order/${piece.slug}`}
              className="label inline-block bg-[var(--foreground)] px-8 py-4 text-[var(--background)] transition-opacity hover:opacity-85"
            >
              Order — €{piece.priceEur}
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
