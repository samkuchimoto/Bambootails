import type { Metadata } from "next";
import Image from "next/image";
import { BRAND } from "@/config/brand";
import { InstallAppButton } from "@/components/InstallAppButton";
import { NewsletterForm } from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "The App",
  description: "Bamboo & Tails, the series, and the collection — on your home screen.",
};

const REASONS = [
  "New episodes first, before they go anywhere else",
  "Limited cuts announced to the app before the site",
  "Opens from the home screen, no browser",
];

export default function GetApp() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <h1 className="display text-4xl sm:text-6xl">The BambooTails app</h1>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-[var(--muted)]">
            The series, the two who run the atelier, and everything in the collection — installed to
            your phone in one tap. Nothing to download from a store.
          </p>

          <ul className="mt-10 divide-y divide-[var(--rule)] border-y border-[var(--rule)]">
            {REASONS.map((reason) => (
              <li key={reason} className="py-4 text-sm text-[var(--muted)]">
                {reason}
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <InstallAppButton />
          </div>

          <div className="mt-12 border-t border-[var(--rule)] pt-8">
            <p className="label text-[var(--muted)]">On a computer?</p>
            <p className="mt-2 max-w-sm text-sm text-[var(--muted)]">
              Leave your address and we&apos;ll send the link to open on your phone.
            </p>
            <div className="mt-4">
              <NewsletterForm source="get-app" cta="Send" />
            </div>
          </div>

          <p className="mt-8 text-xs text-[var(--muted)]">
            Questions?{" "}
            <a href={`mailto:${BRAND.email}`} className="underline underline-offset-2">
              {BRAND.email}
            </a>
          </p>
        </div>

        <div className="relative aspect-[4/5] w-full bg-[var(--rule)]">
          <Image
            src="/images/scarf-chrysanthemum-04.jpg"
            alt="A cream Pomeranian wearing the Chrysanthemum silk scarf draped over the head"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
