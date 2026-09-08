import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CURRENCY, PIECES, isBuyable } from "@/lib/catalog";
import { OrderForm } from "@/components/OrderForm";

// Only buyable pieces get an order page. A concept or a coming-soon
// piece has no route here at all, which is the structural version of
// the rule the catalogue states — not a check that could be forgotten.
export function generateStaticParams() {
  return PIECES.filter(isBuyable).map((piece) => ({ slug: piece.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const piece = PIECES.find((p) => p.slug === slug);
  return piece ? { title: `Order ${piece.name}` } : {};
}

export default async function OrderPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const piece = PIECES.find((p) => p.slug === slug);
  if (!piece || !isBuyable(piece)) notFound();

  return (
    <div className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
      <Link
        href={`/collection/${piece.slug}`}
        className="label text-[var(--muted)] hover:text-[var(--foreground)]"
      >
        ← {piece.name}
      </Link>

      <div className="mt-8 grid gap-12 lg:grid-cols-2 lg:gap-16">
        {/* The piece stays on screen while the form is filled in. A
            checkout that hides what you're buying is how carts get
            abandoned. */}
        <div className="lg:sticky lg:top-8 lg:self-start">
          <div className="relative aspect-[4/5] w-full bg-[var(--rule)]">
            <Image
              src={piece.images[0].src}
              alt={piece.images[0].alt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <h1 className="display mt-6 text-3xl">{piece.name}</h1>
          <p className="mt-1 text-sm text-[var(--muted)]">{CURRENCY.symbol}{piece.price} each</p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-[var(--muted)]">
            {piece.description}
          </p>
        </div>

        <div>
          <h2 className="display text-3xl sm:text-4xl">Place your order</h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-[var(--muted)]">
            Each piece is made to order. Tell us where it&apos;s going and we&apos;ll confirm the fit
            before anything is charged.
          </p>
          <div className="mt-10">
            <OrderForm
              pieceSlug={piece.slug}
              pieceName={piece.name}
              price={piece.price}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
