import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BRAND } from "@/config/brand";
import { CURRENCY, PIECES, CONCEPTS, isBuyable } from "@/lib/catalog";
import { EPISODES, EPISODE_STATUS_LABEL, FOUNDERS, GUILD, mascotBySlug } from "@/lib/universe";
import { HookMarquee } from "@/components/HookMarquee";
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
          HERO. A saturated field with the cast drifting across it, and
          the product photograph cut into it as a hard-edged object.
          That collision — screaming graphic ground against a still,
          real photograph — is the Superflat move, and it is also the
          brand's actual thesis: manga and Hermes in one frame rather
          than in two separate sections.
          --------------------------------------------------------------- */}
      <section className="field-madder relative min-h-[88vh] overflow-hidden border-b-2 border-[var(--foreground)]">
        <div className="dots absolute inset-0 text-white" aria-hidden />

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
            Fourteen outcasts. One sacred weave. A maison reborn.
          </p>

          <p className="mt-6 max-w-lg leading-relaxed text-white/85">
            Two dogs founded the house. The masters who joined are a cat, a chick, a tortoise and a
            panda — because when the factories forgot how to do this, the ones who remembered were
            not who anybody expected.
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
              Acquire the collection
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
              <p className="label text-[var(--madder)]">Batch 01 — 50 numbered cuts</p>
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
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-7">
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

          <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {PIECES.map((piece, i) => (
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
          THE LABORATORY. Concepts that can be voted for and never
          bought, with the threshold stated: 500 votes cuts a real run.
          A number turns a poll into a commitment, which is the whole
          difference between a wishlist and a pre-order.
          --------------------------------------------------------------- */}
      <section className="field-blossom relative overflow-hidden border-b-2 border-[var(--foreground)]">
        <div className="stripes absolute inset-0 text-[var(--foreground)]" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <p className="label text-[var(--foreground)]/60">The laboratory</p>
          <h2 className="pop mt-3 text-3xl sm:text-5xl">Five hundred votes cuts it for real</h2>
          <p className="mt-4 max-w-xl leading-relaxed text-[var(--foreground)]/80">
            Drawn, not made. Everything here is labelled a concept on its own card, because a house
            that blurs the line between what it imagines and what it ships only gets to do it once.
            Back one and we cut fifty.
          </p>

          <ul className="mt-12 grid gap-8 sm:grid-cols-2">
            {CONCEPTS.map((concept) => (
              <li key={concept.slug} className="keyline bg-[var(--background)] p-7">
                <p className="label text-[var(--madder)]">Concept — not for sale</p>
                <h3 className="display mt-3 text-2xl">{concept.name}</h3>
                <p className="mt-3 leading-relaxed text-[var(--muted)]">{concept.description}</p>
                <div className="mt-6">
                  <ConceptVote slug={concept.slug} name={concept.name} />
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-12 max-w-md">
            <p className="label text-[var(--foreground)]/60">The list hears first</p>
            <p className="mt-2 text-sm leading-relaxed text-[var(--foreground)]/80">
              New chapters and new batches, before they go anywhere else.
            </p>
            <div className="mt-4">
              <NewsletterForm source="home-laboratory" cta="Join" />
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
