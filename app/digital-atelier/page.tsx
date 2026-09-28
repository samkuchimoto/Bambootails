import type { Metadata } from "next";
import Image from "next/image";
import { CURRENCY } from "@/lib/catalog";
import { LIVING_RELICS, RELEASE_TIERS, SEVEN_BRANCHES } from "@/lib/digital";
import { ConceptVote } from "@/components/ConceptVote";
import { NewsletterForm } from "@/components/NewsletterForm";
import { ScrollToCharacter } from "@/components/ScrollToCharacter";

export const metadata: Metadata = {
  title: "The Digital Atelier",
  description:
    "Living cast members for screens: a celestial crew and five architectural spirits, drawn for VTuber and game rigs. Not released yet — vote for the one you want first.",
};

// Every character has its own anchor, so a TikTok bio link can point
// straight at one: /digital-atelier#lunarr, or ?character=lunarr.

function doneNote(name: string) {
  return `Noted — you want ${name}. The most-wanted character is rigged first, and you hear the day it's ready.`;
}

export default function DigitalAtelier() {
  const [lunarr, ...branches] = SEVEN_BRANCHES;

  return (
    <div>
      <ScrollToCharacter />
      <section className="field-indigo relative overflow-hidden border-b-2 border-[var(--foreground)]">
        <div className="dots absolute inset-0 text-white" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <p className="label text-[var(--gold)]">Drop 05 — the virtual guild</p>
          <h1 className="relative mt-6 max-w-4xl">
            <span
              aria-hidden
              className="pop absolute left-[5px] top-[5px] block text-[3rem] leading-[0.85] text-[var(--gold)] sm:text-7xl lg:text-8xl"
            >
              The digital
              <br />
              atelier.
            </span>
            <span className="pop relative block text-[3rem] leading-[0.85] text-white sm:text-7xl lg:text-8xl">
              The digital
              <br />
              atelier.
            </span>
          </h1>
          <p className="mt-8 max-w-xl leading-relaxed text-white/85">
            Living cast members for screens — a celestial crew and five architectural spirits, drawn
            for VTuber avatars and game rigs. The characters are finished; the rigs are not. Vote for
            the one you want, and it is rigged first.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#seven-branches"
              className="keyline label bg-[var(--gold)] px-6 py-3 text-[var(--foreground)] transition-transform hover:-translate-y-0.5"
            >
              Capsule 01 — The seven branches
            </a>
            <a
              href="#living-relics"
              className="keyline label bg-white px-6 py-3 text-[var(--foreground)] transition-transform hover:-translate-y-0.5"
            >
              Capsule 02 — The living relics
            </a>
          </div>
        </div>
      </section>

      {/* Capsule 01. Lunarr leads at full width with the two looks that
          have art; the other five share the grid below. */}
      <section id="seven-branches" className="scroll-mt-6 border-b-2 border-[var(--foreground)]">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <p className="label text-[var(--madder)]">Capsule 01</p>
          <h2 className="pop mt-3 text-3xl sm:text-5xl">The seven branches</h2>
          <p className="mt-4 max-w-xl leading-relaxed text-[var(--muted)]">
            Six celestial explorers with crystal-bud antlers and one galaxy between them.
          </p>

          <article
            id={lunarr.id}
            className="keyline mt-12 grid scroll-mt-6 bg-white lg:grid-cols-[1.4fr_1fr]"
          >
            <div className="grid grid-cols-2 border-b-2 border-[var(--foreground)] lg:border-b-0 lg:border-r-2">
              {lunarr.images.map((img, i) => (
                <figure
                  key={img.src}
                  className={`relative aspect-[4/5] overflow-hidden ${i === 0 ? "border-r-2 border-[var(--foreground)]" : ""}`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 50vw, 30vw"
                    className="object-cover"
                  />
                  {img.caption && (
                    <figcaption className="keyline-sm label absolute left-3 top-3 bg-[var(--gold)] px-2.5 py-1 text-[0.6rem]">
                      {img.caption}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
            <div className="flex flex-col p-6 sm:p-8">
              <p className="label text-[var(--madder)]">Master #01 · {lunarr.place}</p>
              <h3 className="pop mt-3 text-4xl sm:text-5xl">{lunarr.name}</h3>
              <p className="display mt-1 text-xl text-[var(--muted)]">{lunarr.title}</p>
              <p className="mt-5 leading-relaxed text-[var(--muted)]">{lunarr.description}</p>
              <p className="label mt-6 text-[var(--muted)]">Not released — the rig isn&apos;t built yet</p>
              <div className="mt-4">
                <ConceptVote slug={`digital-${lunarr.id}`} name={lunarr.name} doneNote={doneNote(lunarr.name)} />
              </div>
            </div>
          </article>

          <ul className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {branches.map((c) => (
              <li key={c.id} id={c.id} className="keyline flex scroll-mt-6 flex-col bg-white">
                <div className="relative aspect-[6/5] overflow-hidden border-b-2 border-[var(--foreground)] bg-[var(--indigo)]">
                  <Image
                    src={c.images[0].src}
                    alt={c.images[0].alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                    className="object-cover object-[50%_20%]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <h3 className="pop text-2xl">{c.name}</h3>
                  <p className="display text-lg text-[var(--muted)]">{c.title}</p>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--muted)]">{c.description}</p>
                  <div className="mt-4">
                    <ConceptVote slug={`digital-${c.id}`} name={c.name} doneNote={doneNote(c.name)} />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Capsule 02. Each relic keeps its images at their own proportions:
          most are six-look grids, and cropping one cuts looks off. */}
      <section id="living-relics" className="scroll-mt-6 border-b-2 border-[var(--foreground)] bg-[var(--background)]">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <p className="label text-[var(--madder)]">Capsule 02</p>
          <h2 className="pop mt-3 text-3xl sm:text-5xl">The living relics</h2>
          <p className="mt-4 max-w-xl leading-relaxed text-[var(--muted)]">
            Architectural and wholesome spirits — buildings that woke up with a personality each.
          </p>

          <div className="mt-12 space-y-10">
            {LIVING_RELICS.map((c, i) => {
              const [main, ...more] = c.images;
              return (
                <article
                  key={c.id}
                  id={c.id}
                  className="keyline grid scroll-mt-6 items-start gap-0 bg-white lg:grid-cols-2"
                >
                  <div
                    className={`border-b-2 border-[var(--foreground)] lg:border-b-0 ${
                      i % 2 === 1 ? "lg:order-2 lg:border-l-2" : "lg:border-r-2"
                    }`}
                  >
                    <Image
                      src={main.src}
                      alt={main.alt}
                      width={main.width}
                      height={main.height}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="h-auto w-full"
                    />
                  </div>
                  <div className="p-6 sm:p-8">
                    <p className="label text-[var(--madder)]">Relic {String(i + 1).padStart(2, "0")}</p>
                    <h3 className="pop mt-3 text-3xl sm:text-4xl">{c.name}</h3>
                    <p className="display mt-1 text-xl text-[var(--muted)]">{c.title}</p>
                    <p className="mt-4 leading-relaxed text-[var(--muted)]">{c.description}</p>
                    {c.looks && (
                      <ul className="mt-5 flex flex-wrap gap-2">
                        {c.looks.map((look) => (
                          <li key={look} className="label keyline-sm bg-[var(--background)] px-2.5 py-1 text-[0.65rem]">
                            {look}
                          </li>
                        ))}
                      </ul>
                    )}
                    {more.map((img) => (
                      <figure key={img.src} className="keyline-sm mt-6">
                        <Image
                          src={img.src}
                          alt={img.alt}
                          width={img.width}
                          height={img.height}
                          sizes="(max-width: 1024px) 100vw, 45vw"
                          className="h-auto w-full"
                        />
                        {img.caption && (
                          <figcaption className="label border-t-2 border-[var(--foreground)] bg-[var(--background)] px-3 py-1.5 text-[0.65rem]">
                            {img.caption}
                          </figcaption>
                        )}
                      </figure>
                    ))}
                    <p className="label mt-6 text-[var(--muted)]">Not released — the rig isn&apos;t built yet</p>
                    <div className="mt-4">
                      <ConceptVote slug={`digital-${c.id}`} name={c.name} doneNote={doneNote(c.name)} />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div className="keyline bg-[var(--gold)] p-7 sm:p-10">
          <p className="label text-[var(--foreground)]/60">The ledger</p>
          <h2 className="pop mt-3 text-2xl sm:text-3xl">What exists, and what doesn&apos;t yet</h2>
          <dl className="mt-8 grid gap-8 sm:grid-cols-3">
            {[
              ["The characters", "Drawn, named and dressed. Everything on this page exists as art today."],
              [
                "The rigs",
                "Not built yet. The votes decide which character is rigged first for VTuber and game use.",
              ],
              [
                "At release",
                `A Single Cut — one look — at ${CURRENCY.symbol}${RELEASE_TIERS.single}, or the Master Dossier with every look at ${CURRENCY.symbol}${RELEASE_TIERS.master}. Nothing is charged before then.`,
              ],
            ].map(([term, detail]) => (
              <div key={term}>
                <dt className="display text-xl">{term}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-[var(--foreground)]/75">{detail}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-12 max-w-md">
          <p className="label text-[var(--muted)]">First access, not a newsletter</p>
          <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
            The day a rig is ready, the list hears before it goes public.
          </p>
          <div className="mt-4">
            <NewsletterForm source="digital-atelier" cta="First access" />
          </div>
        </div>
      </section>
    </div>
  );
}
