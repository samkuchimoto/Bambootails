import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BRAND } from "@/config/brand";
import { InstallAppButton } from "@/components/InstallAppButton";
import { NewsletterForm } from "@/components/NewsletterForm";
import { MascotField } from "@/components/MascotField";

export const metadata: Metadata = {
  title: "The App",
  description: "Tao, Lumi, the sagas and the collection — on your home screen.",
};

// Framed as membership rather than as a download, because that is what it
// actually is: there is nothing to fetch from a store, and the reason to
// install is early access, not convenience.
const REASONS: [string, string][] = [
  ["New chapters first", "Episodes land on the app 48 hours before TikTok."],
  ["Batches announced early", "Fifty cuts go to the app before the shop sees them."],
  ["No store, no download", "It opens from your home screen like any other app."],
];

export default function GetApp() {
  return (
    <div>
      <section className="field-blossom relative overflow-hidden border-b-2 border-[var(--foreground)]">
        <div className="stripes absolute inset-0 text-[var(--foreground)]" aria-hidden />
        <MascotField count={14} className="opacity-30" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 sm:py-24 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="label text-[var(--foreground)]/60">The app</p>
            <h1 className="relative mt-5">
              <span
                aria-hidden
                className="pop absolute left-[4px] top-[4px] block text-[2.6rem] leading-[0.85] text-white sm:text-6xl"
              >
                Forty-eight
                <br />
                hours early.
              </span>
              <span className="pop relative block text-[2.6rem] leading-[0.85] sm:text-6xl">
                Forty-eight
                <br />
                hours early.
              </span>
            </h1>

            <p className="mt-7 max-w-md leading-relaxed text-[var(--foreground)]/85">
              The sagas, the guild and everything in the collection, installed to your phone in one
              tap. Nothing to download from a store.
            </p>

            <ul className="mt-10 space-y-4">
              {REASONS.map(([title, detail]) => (
                <li key={title} className="keyline-sm bg-[var(--background)] p-4">
                  <p className="display text-lg">{title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-[var(--muted)]">{detail}</p>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <InstallAppButton />
            </div>
          </div>

          <div className="keyline relative aspect-[4/5] w-full overflow-hidden bg-black">
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
      </section>

      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 sm:grid-cols-2">
          <div className="keyline bg-[var(--gold)] p-7">
            <p className="label text-[var(--foreground)]/60">On a computer?</p>
            <p className="pop mt-3 text-2xl">Send it to your phone</p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-[var(--foreground)]/80">
              Leave your address and we&apos;ll send the link to open on the device you actually
              carry.
            </p>
            <div className="mt-5">
              <NewsletterForm source="get-app" cta="Send" />
            </div>
          </div>

          <div>
            <p className="label text-[var(--madder)]">While you are here</p>
            <div className="mt-4 flex flex-wrap gap-4">
              <Link
                href="/series"
                className="keyline label bg-[var(--foreground)] px-6 py-3 text-white transition-transform hover:-translate-y-0.5"
              >
                Read the sagas
              </Link>
              <Link
                href="/mascots"
                className="keyline label bg-[var(--background)] px-6 py-3 transition-transform hover:-translate-y-0.5"
              >
                Meet the guild
              </Link>
            </div>
            <p className="mt-8 text-xs text-[var(--muted)]">
              Questions?{" "}
              <a href={`mailto:${BRAND.email}`} className="underline underline-offset-2">
                {BRAND.email}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
