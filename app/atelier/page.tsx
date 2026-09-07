import type { Metadata } from "next";
import Image from "next/image";
import { BRAND } from "@/config/brand";
import { SILK_GRADES, TECHNIQUES } from "@/lib/world";

export const metadata: Metadata = {
  title: "Atelier",
  description: "How a BambooTails scarf is made, and why there are never many of them.",
};

export default function Atelier() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
      <h1 className="display max-w-3xl text-4xl sm:text-6xl">
        A small house, making a small number of things.
      </h1>

      <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="relative aspect-[4/5] w-full bg-[var(--rule)]">
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
          <p>
            {BRAND.name} is a French-Canadian house making silk accessories for dogs. It began with a
            simple objection: everything sold for dogs is made as though the dog were a joke, and the
            person buying it had no taste to offend.
          </p>
          <p>
            So we make one thing properly. Real silk, chosen for how it falls and how it ages. Cut by
            hand. Hemmed by hand — the rolled edge on every scarf is turned and stitched by a person,
            which is slow and is the reason each batch is small.
          </p>
          <p>
            We have shown the scarves in person to luxury boutiques in Paris, and we have been in
            conversation with the Jane Goodall Institute about what an ethical animal brand owes the
            animals it depends on. Both of those conversations changed what we make.
          </p>
          <p className="text-[var(--foreground)]">
            Nothing on this site is photographed on a model that isn&apos;t a real dog, in a scarf
            that doesn&apos;t exist. Where we show something imagined, we say so on the same line.
          </p>
        </div>
      </div>

      <section className="mt-24 border-t border-[var(--rule)] pt-14">
        <h2 className="display text-3xl sm:text-4xl">What we hold to</h2>
        <div className="mt-10 grid gap-x-12 gap-y-10 sm:grid-cols-2">
          {BRAND.values.map((value) => (
            <div key={value.title}>
              <h3 className="display text-2xl">{value.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{value.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The craft system, published. This is the same data the product
          pages read provenance from and the same data the series treats
          as a power system: silk with real properties, techniques with a
          named master and a real cost. Publishing it is the argument for
          the price — not "we care", but here is what it takes in hours,
          and here is who you have to learn it from. */}
      <section className="mt-24 border-t border-[var(--rule)] pt-14">
        <p className="label text-[var(--accent)]">The material</p>
        <h2 className="display mt-3 text-3xl sm:text-4xl">Three silks</h2>
        <dl className="mt-10 grid gap-x-12 gap-y-10 sm:grid-cols-3">
          {SILK_GRADES.map((silk) => (
            <div key={silk.slug}>
              <dt className="display text-2xl">{silk.name}</dt>
              <p className="label mt-1 text-[var(--muted)]">{silk.origin}</p>
              <dd className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{silk.property}</dd>
              <p className="mt-3 border-l-2 border-[var(--rule)] pl-3 text-xs leading-relaxed text-[var(--muted)]">
                {silk.constraint}
              </p>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-20 border-t border-[var(--rule)] pt-14">
        <p className="label text-[var(--accent)]">The hands</p>
        <h2 className="display mt-3 text-3xl sm:text-4xl">Three techniques</h2>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--muted)]">
          None of these can be bought and none can be hurried. Each one has to be learned from
          someone who already has it.
        </p>
        <ol className="mt-10 space-y-10">
          {TECHNIQUES.map((technique, index) => (
            <li
              key={technique.slug}
              className="grid gap-4 border-t border-[var(--rule)] pt-6 sm:grid-cols-[auto_1fr] sm:gap-10"
            >
              <p className="display text-4xl text-[var(--rule)] sm:w-20">
                {String(index + 1).padStart(2, "0")}
              </p>
              <div>
                <h3 className="display text-2xl">{technique.name}</h3>
                <p className="label mt-1 text-[var(--muted)]">
                  {technique.city} · taught by {technique.master}
                </p>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--muted)]">
                  {technique.effect}
                </p>
                <p className="mt-3 max-w-2xl border-l-2 border-[var(--accent)] pl-3 text-sm leading-relaxed">
                  <span className="label text-[var(--accent)]">What it costs</span>
                  <br />
                  {technique.cost}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-24 grid items-center gap-10 border-t border-[var(--rule)] pt-14 sm:grid-cols-2">
        <div className="relative aspect-square w-full bg-[var(--rule)]">
          <Image
            src="/images/product-packaging.jpg"
            alt="A BambooTails silk scarf folded inside its hand-loomed hemp pochette"
            fill
            sizes="(max-width: 640px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="display text-3xl sm:text-4xl">It arrives in hemp</h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-[var(--muted)]">
            Every scarf is sent folded in a hand-loomed hemp pochette — no plastic, no printed carton
            that goes straight in the bin. The pouch is meant to be kept and used; it is where the
            scarf lives between wearings.
          </p>
        </div>
      </section>
    </div>
  );
}
