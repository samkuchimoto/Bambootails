import Image from "next/image";
import Link from "next/link";
import { BRAND } from "@/config/brand";
import { PIECES, CONCEPTS, PRICE_TIERS } from "@/lib/catalog";
import { MASCOTS } from "@/lib/universe";
import { NewsletterForm } from "@/components/NewsletterForm";

export default function Home() {
  const hero = PIECES[0];

  return (
    <>
      {/* Hero: one photograph, full width, almost no words on top of it.
          The scarves are the only colour in the design system, so the
          fastest way to establish the brand is to get out of their way. */}
      <section className="relative">
        <div className="relative aspect-[4/5] w-full sm:aspect-[16/9] lg:aspect-[21/9]">
          <Image
            src={hero.images[0].src}
            alt={hero.images[0].alt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          {/* Gradient only at the foot, where the type sits. A full
              overlay would dull the silk, which is the thing being sold. */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 lg:p-14">
            <div className="mx-auto max-w-6xl">
              <h1 className="display max-w-3xl whitespace-pre-line text-4xl text-white sm:text-6xl lg:text-7xl">
                {BRAND.heroHeadline}
              </h1>
              <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3">
                <Link
                  href="/collection"
                  className="label border-b border-white pb-1 text-white transition-opacity hover:opacity-70"
                >
                  See the collection
                </Link>
                <Link
                  href="/atelier"
                  className="label border-b border-white/40 pb-1 text-white/80 transition-colors hover:border-white hover:text-white"
                >
                  How it&apos;s made
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The claim, stated once, plainly. */}
      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <p className="display mx-auto max-w-3xl text-center text-2xl leading-snug sm:text-4xl">
          {BRAND.heroSub}
        </p>
        <ul className="mx-auto mt-12 flex max-w-4xl flex-col items-center gap-4 sm:flex-row sm:justify-between">
          {BRAND.proofPoints.map((point) => (
            <li key={point} className="label text-center text-[var(--muted)] sm:text-left">
              {point}
            </li>
          ))}
        </ul>
      </section>

      {/* The collection. Three real pieces, priced, buyable. */}
      <section className="border-t border-[var(--rule)]">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <div className="flex items-baseline justify-between gap-6">
            <h2 className="display text-3xl sm:text-5xl">The Collection</h2>
            <Link
              href="/collection"
              className="label shrink-0 border-b border-[var(--foreground)] pb-0.5 transition-opacity hover:opacity-60"
            >
              All pieces
            </Link>
          </div>

          <div className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
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
                  <h3 className="display text-2xl">{piece.name}</h3>
                  <p className="text-sm text-[var(--muted)]">€{piece.priceEur}</p>
                </div>
                <p className="mt-1 text-sm leading-relaxed text-[var(--muted)]">{piece.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bamboo & Tails: the reason to come back once you already own a
          scarf. A print sells once; a character people are fond of sells
          for years. */}
      <section className="border-t border-[var(--rule)] bg-[#16130f] text-[#faf8f5]">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <p className="label text-white/50">The house</p>
          <h2 className="display mt-4 max-w-2xl text-3xl sm:text-5xl">
            Every atelier has a founder. Ours have four legs each.
          </h2>
          <div className="mt-12 grid gap-10 sm:grid-cols-2">
            {MASCOTS.map((mascot) => (
              <div key={mascot.slug}>
                <h3 className="display text-3xl">{mascot.name}</h3>
                <p className="label mt-2 text-white/50">{mascot.role}</p>
                <p className="mt-4 text-sm leading-relaxed text-white/70">{mascot.bio}</p>
              </div>
            ))}
          </div>
          <Link
            href="/series"
            className="label mt-12 inline-block border-b border-white pb-1 transition-opacity hover:opacity-70"
          >
            The series
          </Link>
        </div>
      </section>

      {/* Concepts, labelled as concepts on the card itself rather than
          only in a heading someone might scroll past. This is the line
          the brand cannot afford to blur. */}
      <section className="border-t border-[var(--rule)]">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <p className="label text-[var(--muted)]">Not for sale</p>
          <h2 className="display mt-4 text-3xl sm:text-5xl">Things we have drawn but not made</h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--muted)]">
            Sketches from the atelier. None of these exist yet. Tell us which one should, and it moves
            to the front of the queue.
          </p>

          <ul className="mt-10 divide-y divide-[var(--rule)] border-y border-[var(--rule)]">
            {CONCEPTS.map((concept) => (
              <li key={concept.slug} className="flex flex-wrap items-baseline gap-x-6 gap-y-1 py-5">
                <h3 className="display text-2xl">{concept.name}</h3>
                <span className="label text-[var(--accent)]">Concept</span>
                <p className="w-full text-sm text-[var(--muted)] sm:w-auto sm:flex-1">
                  {concept.description}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <p className="label text-[var(--muted)]">Vote with your address</p>
            <p className="mt-2 max-w-md text-sm text-[var(--muted)]">
              Leave your email and tell us which one you&apos;d actually buy. We only make what people
              ask for twice.
            </p>
            <div className="mt-4">
              <NewsletterForm source="concept-vote" cta="Send" />
            </div>
          </div>
        </div>
      </section>

      {/* Closing: the one real product, priced, with a route to buy. */}
      <section className="border-t border-[var(--rule)]">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 sm:grid-cols-2 sm:py-24">
          <div className="relative aspect-square w-full overflow-hidden bg-[var(--rule)]">
            <Image
              src="/images/product-chrysanthemum-flat.jpg"
              alt="A BambooTails silk scarf laid flat, showing the full chrysanthemum print in amber and coral"
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="display text-3xl sm:text-5xl">One scarf. Made properly.</h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-[var(--muted)]">
              Artisan silk, cut and hand-rolled one at a time, sent in a hand-loomed hemp pochette.
              Three prints, made to order.
            </p>
            {/* The price is stated as where the house begins, not as a
                figure to be justified. At this level the number is
                positioning: quoting it plainly is more convincing than
                explaining it. */}
            <p className="mt-6 label text-[var(--muted)]">
              The Signature scarf — €{PRICE_TIERS.signature}
            </p>
            <Link
              href="/collection"
              className="label mt-8 inline-block border-b border-[var(--foreground)] pb-1 transition-opacity hover:opacity-60"
            >
              Choose a print
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
