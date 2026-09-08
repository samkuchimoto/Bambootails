import type { Metadata } from "next";
import Link from "next/link";
import { COMING_SOON, CONCEPTS } from "@/lib/catalog";
import { GUILD } from "@/lib/universe";
import { ConceptVote } from "@/components/ConceptVote";
import { NewsletterForm } from "@/components/NewsletterForm";
import { MascotField } from "@/components/MascotField";

export const metadata: Metadata = {
  title: "The Laboratory",
  description:
    "Drawn, not made. Vote on what gets cut next — five hundred votes turns a concept into a run of fifty.",
};

// The Laboratory, per the strategy report's site architecture.
//
// The mechanic it exists to fix: the concept gallery was clever but
// ornamental — a poll with no consequence attached. A stated threshold
// changes that. "Back this concept; 500 votes unlocks a physical run" is
// a commitment in both directions, and it converts an opinion into a
// pre-order signal that can actually be planned against.
//
// It is also the cheapest market research available to a house with no
// capital: nothing is cut until demand is proven, so a wrong guess costs
// a drawing rather than fifty metres of silk.

const THRESHOLD = 500;

export default function Laboratory() {
  return (
    <div>
      <section className="field-blossom relative overflow-hidden border-b-2 border-[var(--foreground)]">
        <div className="stripes absolute inset-0 text-[var(--foreground)]" aria-hidden />
        <MascotField count={16} className="opacity-25" />
        <div className="relative mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <p className="label text-[var(--foreground)]/60">The laboratory</p>
          <h1 className="pop mt-5 max-w-3xl text-4xl sm:text-6xl lg:text-7xl">
            Five hundred votes
            <br />
            cuts it for real.
          </h1>
          <p className="mt-7 max-w-xl leading-relaxed text-[var(--foreground)]/80">
            Everything on this page is drawn and not made, and every card says so. A house that
            blurs the line between what it imagines and what it ships only gets to do that once.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        {/* Concepts — imagined, votable, never buyable. */}
        <section>
          <p className="label text-[var(--madder)]">On the table</p>
          <h2 className="pop mt-3 text-3xl sm:text-5xl">Concepts</h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--muted)]">
            Reach {THRESHOLD} and we cut fifty, numbered, and everyone who voted hears before
            anyone else does.
          </p>

          <ul className="mt-12 grid gap-8 sm:grid-cols-2">
            {CONCEPTS.map((concept) => (
              <li key={concept.slug} className="keyline bg-[var(--background)] p-7">
                <p className="label text-[var(--madder)]">Concept — not for sale</p>
                <h3 className="display mt-3 text-3xl">{concept.name}</h3>
                <p className="mt-3 leading-relaxed text-[var(--muted)]">{concept.description}</p>

                {/* The threshold, drawn. An empty bar is honest about
                    where this is: nothing has been cut yet, and the page
                    should not imply momentum it does not have. */}
                <div className="mt-6">
                  <div className="keyline-sm h-4 w-full bg-[var(--hairline)]">
                    <div className="h-full w-0 bg-[var(--madder)]" />
                  </div>
                  <p className="label mt-2 text-[var(--muted)]">0 / {THRESHOLD} votes</p>
                </div>

                <div className="mt-5">
                  <ConceptVote slug={concept.slug} name={concept.name} />
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Coming soon — real intent, not yet made. Kept separate from
            concepts because "we will make this" and "we might make this"
            are different promises and should never share a card style. */}
        <section className="mt-24 border-t-2 border-[var(--foreground)] pt-10">
          <p className="label text-[var(--madder)]">Decided, not yet cut</p>
          <h2 className="pop mt-3 text-3xl sm:text-5xl">Coming</h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--muted)]">
            These are going to exist. The only open question is when, and the list decides the
            order.
          </p>

          <ul className="mt-10 grid gap-8 sm:grid-cols-2">
            {COMING_SOON.map((piece) => (
              <li key={piece.slug} className="keyline-sm bg-[var(--background)] p-6">
                <p className="label text-[var(--muted)]">Coming soon</p>
                <h3 className="display mt-2 text-2xl">{piece.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                  {piece.description}
                </p>
                <div className="mt-5">
                  <ConceptVote slug={piece.slug} name={piece.name} />
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* The mascot line. Same mechanic, different tier — and the tier
            with the highest margin and the widest reach in the whole
            range, which is why it gets a vote of its own rather than a
            footnote. */}
        <section className="mt-24 border-t-2 border-[var(--foreground)] pt-10">
          <p className="label text-[var(--madder)]">The figures</p>
          <h2 className="pop mt-3 text-3xl sm:text-5xl">Which one gets made first</h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--muted)]">
            Twelve masters, one first production run. Fifty units of the wrong character is real
            money on a shelf, so this is the guess we would rather not make alone.
          </p>

          <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-4">
            {GUILD.map((mascot) => (
              <li key={mascot.slug} className="keyline-sm bg-[var(--background)] p-4">
                <h3 className="display text-xl">{mascot.name}</h3>
                <p className="label mt-1 text-[var(--muted)]">{mascot.species}</p>
                <div className="mt-3">
                  <ConceptVote slug={`mascot-${mascot.slug}`} name={mascot.name} />
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <Link
              href="/mascots"
              className="keyline-sm label inline-block bg-[var(--foreground)] px-5 py-3 text-white transition-transform hover:-translate-y-0.5"
            >
              See who they are first
            </Link>
          </div>
        </section>

        <section className="mt-24 max-w-xl border-t-2 border-[var(--foreground)] pt-10">
          <h2 className="pop text-2xl sm:text-3xl">Hear it first</h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
            When a concept crosses the line, the list is told before the shop is.
          </p>
          <div className="mt-5">
            <NewsletterForm source="laboratory" cta="Join" />
          </div>
        </section>
      </div>
    </div>
  );
}
