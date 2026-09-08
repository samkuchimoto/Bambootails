import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BRAND } from "@/config/brand";
import { SILK_GRADES, TECHNIQUES, LINEAGE } from "@/lib/world";

export const metadata: Metadata = {
  title: "The Atelier",
  description:
    "Three silks, three techniques, and the hours each one costs. The argument for the price, published rather than asserted.",
};

export default function Atelier() {
  return (
    <div>
      <section className="field-indigo relative overflow-hidden border-b-2 border-[var(--foreground)]">
        <div className="dots absolute inset-0 text-white" aria-hidden />
        <div
          className="speedlines absolute inset-0 text-white"
          style={{ ["--burst-x" as string]: "78%", ["--burst-y" as string]: "30%" }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <p className="label text-white/60">The atelier</p>
          <h1 className="relative mt-5 max-w-3xl">
            <span
              aria-hidden
              className="pop absolute left-[4px] top-[4px] block text-[2.8rem] leading-[0.85] text-[var(--gold)] sm:text-7xl"
            >
              Forty minutes
              <br />
              per edge.
            </span>
            <span className="pop relative block text-[2.8rem] leading-[0.85] text-white sm:text-7xl">
              Forty minutes
              <br />
              per edge.
            </span>
          </h1>
          <p className="mt-8 max-w-xl leading-relaxed text-white/85">
            Four edges to a scarf. It cannot be hurried and it cannot be delegated. This page is the
            argument for the price — published as hours and mastery rather than asserted as
            adjectives.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="keyline relative aspect-[4/5] w-full overflow-hidden bg-black">
            <Image
              src="/images/scarf-detail-knot.jpg"
              alt="Close detail of the hand-rolled hem and knotted silk of a BambooTails scarf"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="space-y-6 leading-relaxed text-[var(--muted)]">
            <p className="display text-2xl leading-snug text-[var(--foreground)]">
              It began with an objection: everything sold for dogs is made as though the dog were a
              joke, and the person buying it had no taste to offend.
            </p>
            <p>
              {BRAND.name} is a French-Canadian house making silk accessories for animals. We make
              one thing properly — real silk, chosen for how it falls and how it ages, cut by hand,
              hemmed by hand. The rolled edge on every scarf is turned and stitched by a person,
              which is slow, and which is the reason each batch is fifty.
            </p>
            <p>
              We have shown the scarves in person to luxury boutiques in Paris, and we have been in
              conversation with the Jane Goodall Institute about what an ethical animal brand owes
              the animals it depends on. Both of those conversations changed what we make.
            </p>
            <p className="keyline bg-[var(--gold)] p-5 text-[var(--foreground)]">
              Nothing on this site is photographed on a model that isn&apos;t a real dog, in a scarf
              that doesn&apos;t exist. Where we show something imagined, we say so on the same line.
            </p>
          </div>
        </div>

        {/* Values. */}
        <section className="mt-24 border-t-2 border-[var(--foreground)] pt-12">
          <p className="label text-[var(--madder)]">What we hold to</p>
          <h2 className="pop mt-3 text-3xl sm:text-5xl">Four rules, no exceptions</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {BRAND.values.map((value) => (
              <div key={value.title} className="keyline-sm bg-[var(--background)] p-6">
                <h3 className="display text-2xl">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{value.body}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* The material. Silk grades with real properties and real
          scarcity — the same data the product pages read provenance
          from, so the shop and the craft can never drift apart. */}
      <section className="field-madder relative overflow-hidden border-y-2 border-[var(--foreground)]">
        <div className="dots absolute inset-0 text-white" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <p className="label text-[var(--gold)]">The material</p>
          <h2 className="pop mt-3 text-3xl sm:text-5xl">Three silks</h2>
          <dl className="mt-12 grid gap-6 sm:grid-cols-3">
            {SILK_GRADES.map((silk) => (
              <div key={silk.slug} className="keyline bg-[var(--background)] p-6 text-[var(--foreground)]">
                <dt className="display text-2xl">{silk.name}</dt>
                <p className="label mt-1 text-[var(--madder)]">{silk.origin}</p>
                <dd className="mt-4 text-sm leading-relaxed text-[var(--muted)]">{silk.property}</dd>
                <p className="mt-4 bg-[var(--foreground)] p-3 text-xs leading-relaxed text-white">
                  {silk.constraint}
                </p>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* The hands. Techniques with a named master, a named city, and a
          real cost — the craft system that doubles as the story's power
          system. */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <p className="label text-[var(--madder)]">The hands</p>
        <h2 className="pop mt-3 text-3xl sm:text-5xl">Three techniques</h2>
        <p className="mt-4 max-w-xl leading-relaxed text-[var(--muted)]">
          None of these can be bought and none can be hurried. Each has to be learned from someone
          who already has it.
        </p>

        <ol className="mt-12 space-y-8">
          {TECHNIQUES.map((technique, index) => (
            <li
              key={technique.slug}
              className="keyline grid gap-5 bg-[var(--background)] p-6 sm:grid-cols-[auto_1fr] sm:gap-10 sm:p-8"
            >
              <p className="pop text-6xl text-[var(--gold)] sm:w-24">
                {String(index + 1).padStart(2, "0")}
              </p>
              <div>
                <h3 className="display text-3xl">{technique.name}</h3>
                <p className="label mt-2 text-[var(--madder)]">
                  {technique.city} · taught by {technique.master}
                </p>
                <p className="mt-4 max-w-2xl leading-relaxed text-[var(--muted)]">
                  {technique.effect}
                </p>
                <p className="mt-4 max-w-2xl bg-[var(--foreground)] p-4 text-sm leading-relaxed text-white">
                  <span className="label text-[var(--gold)]">What it costs</span>
                  <br />
                  {technique.cost}
                </p>
              </div>
            </li>
          ))}
        </ol>

        {/* The lineage. Craft, not blood — which is why a Chiang Mai
            house can have a Tokyo hemmer without owing anyone a family
            tree. */}
        <section className="mt-20">
          <div className="keyline field-gold p-7 sm:p-10">
            <p className="label text-[var(--foreground)]/60">The lineage</p>
            <h2 className="pop mt-3 text-2xl sm:text-4xl">Taught, not inherited</h2>
            <p className="display mt-6 max-w-2xl text-xl italic leading-snug">
              {LINEAGE.principle}
            </p>
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-[var(--foreground)]/80">
              {LINEAGE.rule}
            </p>
            <p className="label mt-6 text-[var(--madder)]">{LINEAGE.origin}</p>
          </div>
        </section>
      </section>

      {/* Packaging. */}
      <section className="border-t-2 border-[var(--foreground)]">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 sm:grid-cols-2 sm:py-24">
          <div className="keyline relative aspect-square w-full overflow-hidden bg-[var(--hairline)]">
            <Image
              src="/images/product-packaging.jpg"
              alt="A BambooTails silk scarf folded inside its hand-loomed hemp pochette"
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="label text-[var(--madder)]">It arrives in hemp</p>
            <h2 className="pop mt-3 text-3xl sm:text-4xl">No plastic, no printed carton</h2>
            <p className="mt-5 max-w-md leading-relaxed text-[var(--muted)]">
              Every scarf is sent folded in a hand-loomed hemp pochette — nothing that goes straight
              in the bin. The pouch is meant to be kept and used; it is where the scarf lives
              between wearings.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/collection"
                className="keyline label bg-[var(--foreground)] px-6 py-3 text-white transition-transform hover:-translate-y-0.5"
              >
                The collection
              </Link>
              <Link
                href="/production"
                className="keyline label bg-[var(--background)] px-6 py-3 transition-transform hover:-translate-y-0.5"
              >
                How the series is made
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
