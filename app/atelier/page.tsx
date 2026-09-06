import type { Metadata } from "next";
import Image from "next/image";
import { BRAND } from "@/config/brand";

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

      <section className="mt-24 grid items-center gap-10 border-t border-[var(--rule)] pt-14 sm:grid-cols-2">
        <div className="relative aspect-square w-full bg-[var(--rule)]">
          <Image
            src="/images/product-packaging.jpg"
            alt="A BambooTails silk scarf folded inside its hand-loomed linen pouch"
            fill
            sizes="(max-width: 640px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="display text-3xl sm:text-4xl">It arrives in linen</h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-[var(--muted)]">
            Every scarf is sent folded in a hand-loomed linen pouch — no plastic, no printed carton
            that goes straight in the bin. The pouch is meant to be kept and used; it is where the
            scarf lives between wearings.
          </p>
        </div>
      </section>
    </div>
  );
}
