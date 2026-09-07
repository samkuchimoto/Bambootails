import Image from "next/image";
import Link from "next/link";
import { BRAND } from "@/config/brand";
import { PIECES, CONCEPTS, COMING_SOON, PRICE_TIERS } from "@/lib/catalog";
import { CORE_CAST, WIDER_PACK, EPISODES, EPISODE_STATUS_LABEL, mascotBySlug } from "@/lib/universe";
import { NewsletterForm } from "@/components/NewsletterForm";
import { ConceptVote } from "@/components/ConceptVote";

export default function Home() {
  const hero = PIECES[0];
  const firstEpisode = EPISODES[0];

  return (
    <>
      {/* Cinematic, not commercial. One photograph at full bleed with the
          house line over it — the register of a magazine cover rather
          than a product grid. The first three seconds have to say
          "fashion house", because at €249 the visitor decides what kind
          of thing this is before they ever reach a price. */}
      <section className="relative">
        <div className="relative aspect-[3/4] w-full sm:aspect-[16/9] lg:aspect-[21/9]">
          <Image
            src={hero.images[0].src}
            alt={hero.images[0].alt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/10" />
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 lg:p-16">
            <div className="mx-auto max-w-6xl">
              <p className="label text-white/70">Bangkok · Paris · Tokyo · Milan · New York</p>
              <h1 className="display mt-4 max-w-4xl text-4xl text-white sm:text-6xl lg:text-8xl">
                Two dogs. One dream.
                <br />A fashion house.
              </h1>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-white/80">
                {BRAND.heroSub}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
                <Link
                  href="/collection"
                  className="label bg-white px-7 py-3.5 text-[var(--foreground)] transition-opacity hover:opacity-85"
                >
                  The Collection
                </Link>
                <Link
                  href="/mascots"
                  className="label border-b border-white/50 pb-1 text-white transition-colors hover:border-white"
                >
                  Meet the house
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE CAST. High on the page on purpose — this is the half of the
          brand that isn't a shop, and burying it behind an About link is
          what made the site read as a storefront. Nobody wants a scarf
          from a house they've never heard of; they want the scarf Bamboo
          wears. */}
      <section className="border-b border-[var(--rule)] bg-[#16130f] text-[#faf8f5]">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="label text-white/40">The house</p>
              <h2 className="display mt-3 text-3xl sm:text-5xl">Five dogs, five cities</h2>
            </div>
            <Link
              href="/mascots"
              className="label shrink-0 border-b border-white pb-0.5 transition-opacity hover:opacity-60"
            >
              Meet them all
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
            {CORE_CAST.map((mascot) => (
              <Link key={mascot.slug} href={`/mascots#${mascot.slug}`} className="group block">
                <div className="relative aspect-square w-full overflow-hidden rounded-full bg-white/5">
                  <Image
                    src={mascot.portrait}
                    alt={`${mascot.name}, the ${mascot.city} dog`}
                    fill
                    sizes="(max-width: 640px) 45vw, 20vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="display mt-4 text-2xl">{mascot.name}</p>
                <p className="label mt-1 text-white/40">{mascot.city}</p>
                <p className="mt-2 text-xs leading-relaxed text-white/60">{mascot.role}</p>
              </Link>
            ))}
          </div>

          {/* The wider pack, smaller. Showing the whole world exists
              without competing with the five who carry the story — a
              cast of fourteen at equal weight is a crowd, not a crew. */}
          <div className="mt-16 border-t border-white/10 pt-10">
            <p className="label text-white/40">And the pack — Kyoto, Seoul, Bangkok, Paris, Milan</p>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-8">
              {WIDER_PACK.map((mascot) => (
                <Link
                  key={mascot.slug}
                  href={`/mascots#${mascot.slug}`}
                  className="group w-16 text-center sm:w-20"
                >
                  <div className="relative aspect-square w-full overflow-hidden rounded-full bg-white/5">
                    <Image
                      src={mascot.portrait}
                      alt={`${mascot.name}, a ${mascot.breed} from ${mascot.city}`}
                      fill
                      sizes="80px"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <p className="display mt-2 text-base">{mascot.name}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The episode in production, given real estate. A house with a
          story running is a different proposition to a house with a
          catalogue. */}
      <section className="border-b border-[var(--rule)]">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 sm:py-24 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="label text-[var(--muted)]">
              Episode {String(firstEpisode.number).padStart(2, "0")} ·{" "}
              {EPISODE_STATUS_LABEL[firstEpisode.status]}
            </p>
            <h2 className="display mt-4 text-3xl sm:text-5xl">{firstEpisode.title}</h2>
            <p className="mt-5 max-w-md leading-relaxed text-[var(--muted)]">
              {firstEpisode.synopsis}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
              <Link
                href="/series"
                className="label border-b border-[var(--foreground)] pb-1 transition-opacity hover:opacity-60"
              >
                The whole series
              </Link>
              <span className="label text-[var(--muted)]">{firstEpisode.seconds} seconds</span>
            </div>
          </div>

          {/* The two characters in the episode, not a still we don't have. */}
          <div className="flex items-end justify-center gap-4 sm:gap-8">
            {firstEpisode.castSlugs.map((slug) => {
              const mascot = mascotBySlug(slug);
              if (!mascot) return null;
              return (
                <div key={slug} className="w-1/2 max-w-[220px]">
                  <div className="relative aspect-square w-full">
                    <Image
                      src={mascot.portrait}
                      alt={`${mascot.name}, the ${mascot.city} dog`}
                      fill
                      sizes="(max-width: 640px) 45vw, 220px"
                      className="object-contain"
                    />
                  </div>
                  <p className="display mt-2 text-center text-xl">{mascot.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* The real collection. Priced, buyable, photographed on a real dog. */}
      <section className="border-b border-[var(--rule)]">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="label text-[var(--muted)]">In the atelier — real, and for sale</p>
              <h2 className="display mt-3 text-3xl sm:text-5xl">The Collection</h2>
            </div>
            <Link
              href="/collection"
              className="label shrink-0 border-b border-[var(--foreground)] pb-0.5 transition-opacity hover:opacity-60"
            >
              All pieces
            </Link>
          </div>

          <div className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {PIECES.slice(0, 3).map((piece) => (
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
                <p className="mt-1 text-sm leading-relaxed text-[var(--muted)]">
                  {piece.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* THE LABORATORY. Merged into the page rather than hidden behind a
          link — this is what makes the site a living thing instead of a
          catalogue. Every card says AI CONCEPT on itself, and the vote is
          the mechanism: nothing gets manufactured until people ask for
          it twice. */}
      <section className="border-b border-[var(--rule)] bg-[#f2ece2]">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <p className="label text-[var(--accent)]">The laboratory</p>
          <h2 className="display mt-3 max-w-2xl text-3xl sm:text-5xl">
            Drawn, not made. You decide which ones become real.
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-[var(--muted)]">
            We imagine far more than we produce. None of these exist — they are concepts, made with
            AI from our own silk. Vote for one and if enough people agree, we cut fifty and you hear
            first.
          </p>

          <ul className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2">
            {[...CONCEPTS, ...COMING_SOON].map((piece) => (
              <li
                key={piece.slug}
                className="flex flex-col justify-between border-t border-[var(--rule)] pt-6"
              >
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <h3 className="display text-2xl">{piece.name}</h3>
                    <span
                      className={`label ${
                        piece.availability === "concept"
                          ? "text-[var(--accent)]"
                          : "text-[var(--muted)]"
                      }`}
                    >
                      {piece.availability === "concept" ? "AI concept" : "Being made"}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                    {piece.description}
                  </p>
                </div>
                <div className="mt-5">
                  <ConceptVote slug={piece.slug} name={piece.name} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Closing: the one real thing, priced plainly. */}
      <section>
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
            <p className="label mt-6 text-[var(--muted)]">
              The Signature scarf — €{PRICE_TIERS.signature}
            </p>
            <Link
              href="/collection"
              className="label mt-8 inline-block bg-[var(--foreground)] px-7 py-3.5 text-[var(--background)] transition-opacity hover:opacity-85"
            >
              Choose a print
            </Link>

            <div className="mt-12 border-t border-[var(--rule)] pt-8">
              <p className="label text-[var(--muted)]">The list</p>
              <p className="mt-2 max-w-sm text-sm text-[var(--muted)]">
                New episodes, new prints, and the drops before they open.
              </p>
              <div className="mt-4">
                <NewsletterForm source="home" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
