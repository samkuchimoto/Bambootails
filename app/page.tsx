import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BRAND } from "@/config/brand";
import { CURRENCY, PIECES, CONCEPTS, isBuyable, findPiece, categoryOf } from "@/lib/catalog";
import { EPISODES, EPISODE_STATUS_LABEL, FOUNDERS, GUILD, mascotBySlug } from "@/lib/universe";
import { HookMarquee } from "@/components/HookMarquee";
import { HeroVideo } from "@/components/HeroVideo";
import { CastCharge } from "@/components/CastCharge";
import { ConceptVote } from "@/components/ConceptVote";
import { NewsletterForm } from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "BambooTails — Haute couture & stories born from an unlikely world",
  description:
    "A maison founded by two dogs and twelve masters. Hand-loomed Thai silk, and a serial about the craft that nearly died making it.",
};

// The homepage follows the architecture in the strategy report, in its
// order and in its vocabulary: hero canvas, The Live Chronicle, The
// Atelier, The Laboratory. The order is the argument — story first,
// because nobody buys a EUR 249 scarf from a house they have never heard
// of; they buy the scarf Lumi wears.

export default function Home() {
  const hero = PIECES[0];
  const chronicle = EPISODES.slice(0, 6);

  return (
    <div>
      {/* ---------------------------------------------------------------
          HERO. Real footage instead of the flat colour field — the three
          episode-01 test renders cycling in sequence (HeroVideo), with a
          dark scrim so type stays fully legible over live-action rather
          than a graphic ground. The product photograph still sits on top
          as a hard-edged object, so the Superflat collision (manga
          graphic vs. real photograph) still holds even with video
          underneath it.
          --------------------------------------------------------------- */}
      <section className="relative min-h-[88vh] overflow-hidden border-b-2 border-[var(--foreground)] bg-[var(--foreground)]">
        <HeroVideo />
        {/* Dark scrim, not the old dots pattern — the video already
            supplies texture, and this is what keeps "Leap anyway." and
            the nav crisp over moving footage. */}
        <div className="absolute inset-0 bg-black/60" aria-hidden />

        {/* The charge runs behind and beneath the type: the whole guild
            leaping left to right on a rising diagonal, scaling up, the
            leaders breaking the right edge. Speed lines converge on the
            direction of travel. This is the composition every shonen key
            visual uses to mean "forward", and it is the difference
            between a cast standing still and a cast going somewhere. */}
        <CastCharge />

        <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-center px-6 py-20">
          <p className="label text-white/80">
            Chiang Mai · Bangkok · Paris · Tokyo · Kyoto · Milan · New York · Seoul
          </p>

          {/* Set enormous and printed out of register — a gold plate
              behind an ink plate. At this size the misregistration reads
              as force rather than as a mistake. */}
          <h1 className="pop-in relative mt-6 max-w-4xl">
            <span
              aria-hidden
              className="pop absolute left-[5px] top-[5px] block text-[3.4rem] leading-[0.84] text-[var(--gold)] sm:text-8xl lg:text-[8.5rem]"
            >
              Leap
              <br />
              anyway.
            </span>
            <span className="pop relative block text-[3.4rem] leading-[0.84] text-white sm:text-8xl lg:text-[8.5rem]">
              Leap
              <br />
              anyway.
            </span>
          </h1>

          <p className="display mt-8 max-w-2xl text-2xl italic leading-tight text-white sm:text-4xl">
            Fourteen characters. One drop live right now. The first fifty go first.
          </p>

          <p className="mt-6 max-w-lg leading-relaxed text-white/85">
            Two dogs founded the house. The masters who joined are a cat, a chick, a tortoise and a
            panda — because when the factories forgot how to do this, the ones who remembered were
            not who anybody expected, and what&apos;s left of that craft gets cut in fifties now,
            never reprinted.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/series"
              className="keyline label bg-[var(--gold)] px-8 py-4 text-[var(--foreground)] transition-transform hover:-translate-y-1"
            >
              Explore Saga 01
            </Link>
            <Link
              href="/collection"
              className="keyline label bg-white px-8 py-4 text-[var(--foreground)] transition-transform hover:-translate-y-1"
            >
              Own a numbered cut
            </Link>
          </div>

          {/* The product, small and pinned into the corner of the
              explosion. The scarf does not need to shout here — the point
              is that it exists inside this world, not that it competes
              with it for attention. */}
          <Link
            href={`/collection/${hero.slug}`}
            className="keyline keyline-lift mt-14 flex w-full max-w-sm items-center gap-4 bg-[var(--background)] p-3"
          >
            <div className="relative aspect-square w-20 shrink-0 overflow-hidden bg-black">
              <Image
                src={hero.images[0].src}
                alt={hero.images[0].alt}
                fill
                priority
                sizes="80px"
                className="object-cover"
              />
            </div>
            <div>
              <p className="label text-[var(--madder)]">Batch 01 — 50 numbered cuts. No reprint.</p>
              <p className="display mt-1 text-xl">
                {hero.name} — {CURRENCY.symbol}
                {isBuyable(hero) ? hero.price : "—"}
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* The moving band. Fourteen opening lines, each written to make a
          stranger stop scrolling. This is the site's answer to "nothing
          moves" — and unlike a decorative animation it is also the best
          advertisement the series has. */}
      <HookMarquee />

      {/* ---------------------------------------------------------------
          THE LIVE CHRONICLE. Vertical 9:16 frames, the shape the videos
          are actually cut in, so the page previews the format rather
          than describing it.
          --------------------------------------------------------------- */}
      <section className="border-b-2 border-[var(--foreground)] bg-[var(--background)]">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="label text-[var(--madder)]">The live chronicle</p>
              <h2 className="pop mt-3 text-3xl sm:text-5xl">Fourteen chapters. None of them end.</h2>
              <p className="mt-4 max-w-xl leading-relaxed text-[var(--muted)]">
                Told a minute at a time, in the shape a phone holds. Three threads run underneath
                and none of them are written to resolve — a house is not a thing you complete.
              </p>
            </div>
            <Link
              href="/series"
              className="keyline-sm label shrink-0 bg-[var(--foreground)] px-5 py-3 text-white transition-transform hover:-translate-y-0.5"
            >
              All 14 chapters
            </Link>
          </div>

          <ul className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
            {chronicle.map((episode, i) => {
              const lead = mascotBySlug(episode.castSlugs[0]);
              return (
                <li
                  key={episode.number}
                  className="pop-in"
                  style={{ ["--pop-delay" as string]: `${i * 0.06}s` }}
                >
                  <Link href="/series" className="keyline-lift block">
                    {/* 9:16 — the actual delivery format. */}
                    <div className="keyline-sm relative aspect-[9/16] overflow-hidden bg-[var(--indigo)]">
                      <div className="stripes absolute inset-0 text-white" aria-hidden />
                      {lead && (
                        <Image
                          src={lead.portrait}
                          alt=""
                          aria-hidden
                          fill
                          sizes="(max-width: 640px) 45vw, 16vw"
                          className="object-contain p-3"
                        />
                      )}
                      <div className="absolute inset-x-0 top-0 flex items-center justify-between p-2">
                        <span className="pop text-xs text-white">
                          {String(episode.number).padStart(2, "0")}
                        </span>
                        <span
                          className={`label text-[0.55rem] ${
                            episode.status === "in-production"
                              ? "text-[var(--gold)]"
                              : "text-white/60"
                          }`}
                        >
                          {EPISODE_STATUS_LABEL[episode.status]}
                        </span>
                      </div>
                      <div className="absolute inset-x-0 bottom-0 bg-[var(--foreground)]/85 p-2">
                        <p className="display text-sm leading-tight text-white">{episode.title}</p>
                        <p className="label mt-1 text-[0.55rem] text-white/50">
                          {episode.city} · {episode.seconds}s
                        </p>
                      </div>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* ---------------------------------------------------------------
          THE HOUSE. A saturated band with the whole cast, founders at
          scale and the guild as a row of silhouettes. The row is the
          argument for a multi-species cast: a cat, a chick, a tortoise
          and a penguin read apart at eighty pixels. Fourteen dogs would
          not.
          --------------------------------------------------------------- */}
      <section className="field-indigo relative overflow-hidden border-b-2 border-[var(--foreground)]">
        <div className="dots absolute inset-0 text-white" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="label text-[var(--gold)]">The house</p>
              <h2 className="pop mt-3 text-3xl text-white sm:text-5xl">
                Two founders. Twelve masters.
              </h2>
            </div>
            <Link
              href="/mascots"
              className="keyline-sm label shrink-0 bg-[var(--gold)] px-5 py-3 text-[var(--foreground)] transition-transform hover:-translate-y-0.5"
            >
              Meet them all
            </Link>
          </div>

          <div className="mt-12 grid max-w-2xl grid-cols-2 gap-8">
            {FOUNDERS.map((mascot, i) => (
              <Link
                key={mascot.slug}
                href={`/mascots#${mascot.slug}`}
                className="keyline-lift group block"
              >
                <div className="keyline relative aspect-square w-full overflow-hidden bg-white">
                  <Image
                    src={mascot.portrait}
                    alt={`${mascot.name}, the ${mascot.species} from ${mascot.city}`}
                    fill
                    priority={i === 0}
                    sizes="(max-width: 640px) 45vw, 24vw"
                    className="object-contain p-4"
                  />
                </div>
                <p className="pop mt-4 text-2xl text-white">{mascot.name}</p>
                <p className="label mt-1 text-white/50">
                  {mascot.city} · {mascot.species}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{mascot.role}</p>
              </Link>
            ))}
          </div>

          <div className="mt-14 border-t border-white/20 pt-10">
            <p className="label text-white/50">
              And the guild — twelve species, eight cities, one craft each
            </p>
            <div className="mt-6 flex flex-wrap items-start gap-x-5 gap-y-7">
              {GUILD.map((mascot, i) => (
                <Link
                  key={mascot.slug}
                  href={`/mascots#${mascot.slug}`}
                  className="group w-16 text-center sm:w-20"
                >
                  <div
                    className="float keyline-sm relative aspect-square w-full overflow-hidden bg-white"
                    style={
                      {
                        "--float-delay": `${(i % 6) * 0.4}s`,
                        "--float-duration": `${3.6 + (i % 4) * 0.5}s`,
                      } as React.CSSProperties
                    }
                  >
                    <Image
                      src={mascot.portrait}
                      alt={`${mascot.name}, the ${mascot.species}`}
                      fill
                      sizes="80px"
                      className="object-contain p-1.5"
                    />
                  </div>
                  <p className="display mt-2 text-base text-white">{mascot.name}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------
          DROP 01 — THE FOUNDATION. Three real, photographed pieces, in
          one dedicated section between the cast (The House, pure story)
          and the numbered scarf batches (The Atelier, the full
          collection) — so "buyable right now" gets its own place
          instead of living inside either of those.
          --------------------------------------------------------------- */}
      <section className="border-b-2 border-[var(--foreground)] bg-[var(--background)]">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <p className="label text-[var(--madder)]">The stair-step</p>
          <h2 className="pop mt-3 text-3xl sm:text-5xl">Drop 01 — three ways in</h2>
          <p className="mt-4 max-w-xl leading-relaxed text-[var(--muted)]">
            The cheapest way in is twelve euros. Real checkout, live now — three pieces to start
            with.
          </p>

          {/* Ordered low to high on purpose — a real stair-step, not just
              three unrelated prices. Cheapest entry point first. */}
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                slug: "sora",
                image: "/images/product-sticker-sora.png",
                alt: "Studio mockup of one of the four vinyl stickers in the pack, on a laptop lid",
                title: "Start Here — Guild Sticker Pack",
                price: "12 €",
                cta: "GET IN — 12 €",
              },
              {
                slug: "mochi",
                image: "/images/product-mochi-phone-case.png",
                alt: "Studio mockup of the Mochi phone case design",
                title: "Carry It Everywhere — Mochi Case",
                price: "35 €",
                cta: "CARRY IT — 35 €",
              },
              {
                slug: "tao",
                image: "/images/drop01-tao-foulard.jpg",
                alt: "The hand-loomed silk foulard, photographed on the actual weave sold at checkout",
                title: "The Piece This House Was Built For",
                price: "249 €",
                cta: "CLAIM YOUR CUT — 249 €",
              },
            ].map((item) => {
              // stripeUrl lives on the mascot record (lib/universe.ts) —
              // read from there rather than duplicating the URL here, so
              // there's one place to update when the real Stripe links
              // replace the placeholders.
              const mascot = mascotBySlug(item.slug);
              if (!mascot?.stripeUrl) return null;
              return (
                <div key={item.slug} className="keyline flex flex-col bg-white">
                  <div className="relative aspect-[4/3] w-full overflow-hidden border-b-2 border-[var(--foreground)]">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="display text-xl">{item.title}</h3>
                    <p className="pop mt-2 text-2xl text-[var(--madder)]">{item.price}</p>
                    <a
                      href={mascot.stripeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="keyline-sm label mt-6 inline-block self-start bg-[var(--gold)] px-4 py-2.5 transition-transform hover:-translate-y-0.5"
                    >
                      {item.cta}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------
          THE ATELIER — the commerce engine. Numbered batches of 50, per
          the strategy: it protects the margin, it is the honest reason
          the thing is scarce, and a number on a label is worth more to a
          collector than any adjective.
          --------------------------------------------------------------- */}
      <section className="border-b-2 border-[var(--foreground)]">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="label text-[var(--madder)]">The atelier</p>
              <h2 className="pop mt-3 text-3xl sm:text-5xl">Batch 01 — fifty numbered cuts</h2>
              <p className="mt-4 max-w-xl leading-relaxed text-[var(--muted)]">
                Hand-reeled in Northern Thailand, hand-rolled to order. Fifty is not a marketing
                number — it is how many one pair of hands can finish before the season turns.
              </p>
            </div>
            <Link
              href="/collection"
              className="keyline-sm label shrink-0 bg-[var(--foreground)] px-5 py-3 text-white transition-transform hover:-translate-y-0.5"
            >
              The full collection
            </Link>
          </div>

          {/* Silk only. This grid sits under "Batch 01 — fifty cuts", so it
              must not pick up the capsule, canine or collectible pieces
              that now share the PIECES array — they have their own drops
              below. */}
          <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
            {PIECES.filter((piece) => categoryOf(piece) === "silk").map((piece, i) => (
              <li key={piece.slug} className="pop-in" style={{ ["--pop-delay" as string]: `${i * 0.07}s` }}>
                <Link href={`/collection/${piece.slug}`} className="keyline-lift block">
                  <div className="keyline relative aspect-[4/5] w-full overflow-hidden bg-[var(--hairline)]">
                    <Image
                      src={piece.images[0].src}
                      alt={piece.images[0].alt}
                      fill
                      sizes="(max-width: 640px) 90vw, 24vw"
                      className="object-cover"
                    />
                  </div>
                  <h3 className="display mt-4 text-2xl">{piece.name}</h3>
                  {isBuyable(piece) && (
                    <p className="pop mt-1 text-lg text-[var(--madder)]">{CURRENCY.symbol}{piece.price}</p>
                  )}
                  {piece.provenance && (
                    <p className="label mt-2 text-[var(--muted)]">
                      {piece.provenance.silkGrade} · {piece.provenance.handHours}h by hand
                    </p>
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* The transparency ledger. The report asks for source tracing
              to the Chiang Mai weaving families; this is the version of
              that which is true today, stated without inflation. */}
          <div className="keyline mt-14 bg-[var(--gold)] p-7 sm:p-10">
            <p className="label text-[var(--foreground)]/60">The ledger</p>
            <h3 className="pop mt-3 text-2xl sm:text-3xl">What you are actually paying for</h3>
            <dl className="mt-8 grid gap-8 sm:grid-cols-3">
              {[
                ["The silk", "Four-ply Thai, reeled by hand. A skilled reeler makes enough for two scarves in a day."],
                ["The hem", "Forty minutes per edge. Four edges. It cannot be hurried and it cannot be delegated."],
                ["The number", "Fifty per batch, numbered on the label. When they are gone the print is not cut again."],
              ].map(([term, detail]) => (
                <div key={term}>
                  <dt className="display text-xl">{term}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-[var(--foreground)]/75">
                    {detail}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------
          DROP 02 — THE ATELIER CAPSULE. Human apparel and one leather
          good, off the dog and onto the owner. These are real pieces
          added to lib/catalog.ts's PIECES like anything else, so their
          own /collection and /order pages already exist for free —
          this section is just a curated showcase of that same data,
          the same relationship Drop 01 has to its mascot records.
          --------------------------------------------------------------- */}
      <section className="border-b-2 border-[var(--foreground)]">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <p className="label text-[var(--madder)]">Drop 02</p>
          <h2 className="pop mt-3 text-3xl sm:text-5xl">The atelier capsule</h2>
          <p className="mt-4 max-w-xl leading-relaxed text-[var(--muted)]">
            Off the dog and onto the owner. Archival prints on real cotton, and one bag cut by hand
            in Paris.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                slug: "sl15-artist-tee-raw",
                badge: "Limited to 50 pieces",
                cta: "CLAIM YOUR PIECE — 85 €",
              },
              {
                slug: "sl15-cyber-monolith-tee",
                badge: "Limited to 50 pieces",
                cta: "CLAIM YOUR PIECE — 85 €",
              },
              {
                slug: "paris-atelier-tote-sl15",
                badge: "Façonné à Paris — 15 cuts",
                cta: "RESERVE BESPOKE CUT — 280 €",
              },
            ].map((item) => {
              const piece = findPiece(item.slug);
              if (!piece || !isBuyable(piece)) return null;
              return (
                <div key={item.slug} className="keyline flex flex-col bg-white">
                  <div className="relative aspect-[4/3] w-full overflow-hidden border-b-2 border-[var(--foreground)]">
                    <Image
                      src={piece.images[0].src}
                      alt={piece.images[0].alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                    <span className="keyline-sm label absolute left-3 top-3 bg-[var(--gold)] px-2.5 py-1 text-[0.65rem]">
                      {item.badge}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="display text-xl">{piece.name}</h3>
                    <p className="pop mt-2 text-2xl text-[var(--madder)]">
                      {CURRENCY.symbol}
                      {piece.price}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                      {piece.description}
                    </p>
                    {/* Prefers a real Stripe link the moment piece.stripeUrl
                        exists (same pattern as the mascot cards). Until
                        then, falls back to the working made-to-order
                        confirm-by-email flow every scarf already uses —
                        never a placeholder URL that would just be broken. */}
                    {piece.stripeUrl ? (
                      <a
                        href={piece.stripeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="keyline-sm label mt-6 inline-block self-start bg-[var(--gold)] px-4 py-2.5 transition-transform hover:-translate-y-0.5"
                      >
                        {item.cta}
                      </a>
                    ) : (
                      <Link
                        href={`/order/${piece.slug}`}
                        className="keyline-sm label mt-6 inline-block self-start bg-[var(--gold)] px-4 py-2.5 transition-transform hover:-translate-y-0.5"
                      >
                        {item.cta}
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Same ledger pattern as the Atelier section above. No hours
              figure here — nobody's measured one for these yet, and a
              guessed number would be exactly the kind of spec this
              catalogue's own rules exist to keep out. */}
          <div className="keyline mt-14 bg-[var(--gold)] p-7 sm:p-10">
            <p className="label text-[var(--foreground)]/60">The ledger</p>
            <h3 className="pop mt-3 text-2xl sm:text-3xl">What you are actually paying for</h3>
            <dl className="mt-8 grid gap-8 sm:grid-cols-3">
              {[
                [
                  "The material",
                  "260-280gsm organic cotton for the tees; vegetable-tanned bridle leather and unbleached French linen for the tote.",
                ],
                [
                  "The making",
                  "Archival DTG and screenprint for the capsule tees. The tote is patterned, cut and hand-embroidered by an independent atelier in Paris — no two panels match.",
                ],
                ["The batch", "Fifty of each tee, fifteen totes per drop. The smallest run in the house."],
              ].map(([term, detail]) => (
                <div key={term}>
                  <dt className="display text-xl">{term}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-[var(--foreground)]/75">
                    {detail}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------
          DROP 03 — CANINE PRESTIGE. The dog's side of the lead. Same
          relationship to lib/catalog.ts as Drop 02: a curated showcase
          of real PIECES entries, not a second product list.
          --------------------------------------------------------------- */}
      <section className="border-b-2 border-[var(--foreground)] bg-[var(--background)]">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <p className="label text-[var(--madder)]">Drop 03</p>
          <h2 className="pop mt-3 text-3xl sm:text-5xl">Canine prestige</h2>
          <p className="mt-4 max-w-xl leading-relaxed text-[var(--muted)]">
            For the dog on the other end of the lead. Leather, French linen and solid brass,
            assembled in Paris.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { slug: "prestige-harness-leash-set", cta: "ORDER THE SET — 120 €" },
              { slug: "reversible-linen-bandana", cta: "ORDER — 45 €" },
              { slug: "leather-poop-bag-charm", cta: "ADD TO LEASH — 48 €" },
              { slug: "tao-brass-collar-charm", cta: "ACQUIRE CHARM — 35 €" },
            ].map((item) => {
              const piece = findPiece(item.slug);
              if (!piece || !isBuyable(piece)) return null;
              return (
                <div key={item.slug} className="keyline flex flex-col bg-white">
                  <div className="relative aspect-[4/3] w-full overflow-hidden border-b-2 border-[var(--foreground)]">
                    <Image
                      src={piece.images[0].src}
                      alt={piece.images[0].alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover"
                    />
                    <span className="keyline-sm label absolute left-3 top-3 bg-[var(--gold)] px-2.5 py-1 text-[0.65rem]">
                      {piece.badge ?? "Canine prestige"}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="display text-xl">{piece.name}</h3>
                    <p className="pop mt-2 text-2xl text-[var(--madder)]">
                      {CURRENCY.symbol}
                      {piece.price}
                    </p>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--muted)]">
                      {piece.description}
                    </p>
                    {/* Same rule as Drop 02: a real Stripe link when one
                        exists, otherwise the working order form. */}
                    {piece.stripeUrl ? (
                      <a
                        href={piece.stripeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="keyline-sm label mt-6 inline-block self-start bg-[var(--gold)] px-4 py-2.5 transition-transform hover:-translate-y-0.5"
                      >
                        {item.cta}
                      </a>
                    ) : (
                      <Link
                        href={`/order/${piece.slug}`}
                        className="keyline-sm label mt-6 inline-block self-start bg-[var(--gold)] px-4 py-2.5 transition-transform hover:-translate-y-0.5"
                      >
                        {item.cta}
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="keyline mt-14 bg-[var(--gold)] p-7 sm:p-10">
            <p className="label text-[var(--foreground)]/60">The ledger</p>
            <h3 className="pop mt-3 text-2xl sm:text-3xl">What you are actually paying for</h3>
            <dl className="mt-8 grid gap-8 sm:grid-cols-3">
              {[
                [
                  "The leather",
                  "The harness and leash use apple-waste bio-based leather, tanned without toxic chromium. The waste-bag charm is vegetable-tanned bridle leather.",
                ],
                [
                  "The hardware",
                  "Solid cast brass, no zinc zamak.",
                ],
                [
                  "The assembly",
                  "Assembled locally in Paris, with no added chemical treatments.",
                ],
              ].map(([term, detail]) => (
                <div key={term}>
                  <dt className="display text-xl">{term}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-[var(--foreground)]/75">
                    {detail}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------
          DROP 04 — GUILD COLLECTIBLES. Pocket-sized pieces from the
          14-mascot universe. Same showcase-of-real-PIECES relationship as
          Drops 02 and 03. The brass Tao tag is deliberately shown here as
          well as in Drop 03: it is both a dog's ID tag and a mascot
          collectible, and the catalog says so via alsoIn.
          --------------------------------------------------------------- */}
      <section className="border-b-2 border-[var(--foreground)]">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <p className="label text-[var(--madder)]">Drop 04</p>
          <h2 className="pop mt-3 text-3xl sm:text-5xl">Guild collectibles</h2>
          <p className="mt-4 max-w-xl leading-relaxed text-[var(--muted)]">
            Pocket artifacts, acrylic shaker charms, and mystery enamel pins from the 14-mascot
            universe.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { slug: "guild-shaker-keychain-mochi", cta: "ORDER CHARM — 12 €" },
              { slug: "guild-mystery-blind-bag-pin", cta: "PULL A PIN — 15 €" },
              { slug: "eco-vinyl-sticker-pack", cta: "ORDER PACK — 12 €" },
              { slug: "tao-brass-collar-charm", cta: "ACQUIRE CHARM — 35 €" },
            ].map((item) => {
              const piece = findPiece(item.slug);
              if (!piece || !isBuyable(piece)) return null;
              return (
                <div key={item.slug} className="keyline flex flex-col bg-white">
                  <div className="relative aspect-[4/3] w-full overflow-hidden border-b-2 border-[var(--foreground)]">
                    <Image
                      src={piece.images[0].src}
                      alt={piece.images[0].alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover"
                    />
                    <span className="keyline-sm label absolute left-3 top-3 bg-[var(--gold)] px-2.5 py-1 text-[0.65rem]">
                      {piece.badge ?? "Guild collectible"}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="display text-xl">{piece.name}</h3>
                    <p className="pop mt-2 text-2xl text-[var(--madder)]">
                      {CURRENCY.symbol}
                      {piece.price}
                    </p>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--muted)]">
                      {piece.description}
                    </p>
                    {piece.stripeUrl ? (
                      <a
                        href={piece.stripeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="keyline-sm label mt-6 inline-block self-start bg-[var(--gold)] px-4 py-2.5 transition-transform hover:-translate-y-0.5"
                      >
                        {item.cta}
                      </a>
                    ) : (
                      <Link
                        href={`/order/${piece.slug}`}
                        className="keyline-sm label mt-6 inline-block self-start bg-[var(--gold)] px-4 py-2.5 transition-transform hover:-translate-y-0.5"
                      >
                        {item.cta}
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------
          THE LABORATORY. Concepts that can be voted for and never
          bought, with the threshold stated: 500 votes cuts a real run.
          A number turns a poll into a commitment, which is the whole
          difference between a wishlist and a pre-order.
          --------------------------------------------------------------- */}
      <section className="field-blossom relative overflow-hidden border-b-2 border-[var(--foreground)]">
        <div className="stripes absolute inset-0 text-[var(--foreground)]" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <p className="label text-[var(--foreground)]/60">The laboratory</p>
          <h2 className="pop mt-3 text-3xl sm:text-5xl">Five hundred votes. One real cut. Nothing else gets made.</h2>
          <p className="mt-4 max-w-xl leading-relaxed text-[var(--foreground)]/80">
            Drawn, not made — yet. Vote with your interest, not your opinion: whichever concept
            hits five hundred first gets fifty units cut for real. The rest stay drawings.
          </p>

          <ul className="mt-12 grid gap-8 sm:grid-cols-2">
            {CONCEPTS.map((concept) => (
              <li key={concept.slug} className="keyline bg-[var(--background)] p-7">
                <p className="label text-[var(--madder)]">Concept — vote to make it real</p>
                <h3 className="display mt-3 text-2xl">{concept.name}</h3>
                <p className="mt-3 leading-relaxed text-[var(--muted)]">{concept.description}</p>
                <div className="mt-6">
                  <ConceptVote slug={concept.slug} name={concept.name} />
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-12 max-w-md">
            <p className="label text-[var(--foreground)]/60">First access, not a newsletter</p>
            <p className="mt-2 text-sm leading-relaxed text-[var(--foreground)]/80">
              Every new drop, before it goes public. No spam — one line, only when something&apos;s
              real.
            </p>
            <div className="mt-4">
              <NewsletterForm source="home-laboratory" cta="First access" />
            </div>
          </div>
        </div>
      </section>

      {/* Proof points, quiet on purpose. After four saturated fields the
          page needs one plain surface, and these are the only claims on
          the site that are externally verifiable. */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <ul className="grid gap-6 sm:grid-cols-3">
          {BRAND.proofPoints.map((point) => (
            <li key={point} className="border-t-2 border-[var(--foreground)] pt-4 text-sm leading-relaxed">
              {point}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
