// /components/SiteFooter.tsx
//
// The footer is on every page, so leaving it as quiet grey hairlines
// undid the treatment everywhere the moment someone scrolled to the
// bottom. It gets the ink ground: the page ends on the house's darkest
// surface with the wordmark set large, which reads as a colophon rather
// than as a page running out.

import Link from "next/link";
import { BRAND } from "@/config/brand";
import { NewsletterForm } from "@/components/NewsletterForm";

const FOOTER_LINKS = [
  { href: "/mascots", label: "The House" },
  { href: "/series", label: "The Sagas" },
  { href: "/collection", label: "Collection" },
  { href: "/atelier", label: "The Atelier" },
  { href: "/laboratory", label: "The Laboratory" },
  { href: "/production", label: "How it's made" },
  { href: "/get-app", label: "The app" },
];

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t-2 border-[var(--foreground)] bg-[var(--foreground)] text-white">
      <div className="stripes absolute inset-0 text-[var(--madder)]" aria-hidden />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-16 sm:grid-cols-2">
        <div>
          {/* Same out-of-register printing as the masthead, inverted for
              the dark ground so the pairing reads as one identity rather
              than two treatments. */}
          <Link href="/" className="relative inline-block" aria-label={BRAND.name}>
            <span
              aria-hidden
              className="absolute left-[3px] top-[3px] whitespace-nowrap text-3xl text-[var(--madder)]"
            >
              <span className="display">Bamboo</span>
              <span className="pop">Tails</span>
            </span>
            <span className="relative whitespace-nowrap text-3xl text-white">
              <span className="display">Bamboo</span>
              <span className="pop">Tails</span>
            </span>
          </Link>

          <p className="mt-5 max-w-sm leading-relaxed text-white/70">
            Haute couture and stories born from an unlikely world. Hand-loomed Thai silk, cut in
            numbered batches of fifty. Based in Europe, shipping worldwide.
          </p>

          <a
            href={`mailto:${BRAND.email}`}
            className="keyline-sm label mt-6 inline-block bg-[var(--gold)] px-4 py-2.5 text-[var(--foreground)] transition-transform hover:-translate-y-0.5"
          >
            {BRAND.email}
          </a>

          <nav aria-label="Footer" className="mt-8 flex flex-wrap gap-x-5 gap-y-2">
            {FOOTER_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="label text-white/50 transition-colors hover:text-[var(--gold)]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <div className="keyline bg-[var(--background)] p-6 text-[var(--foreground)]">
            <p className="label text-[var(--madder)]">The list</p>
            <p className="pop mt-3 text-2xl">Fifty at a time</p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-[var(--muted)]">
              New prints are cut in small numbers and new chapters land before they go anywhere
              else. The list hears first.
            </p>
            <div className="mt-5">
              <NewsletterForm source="footer" />
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/15">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {BRAND.name}
          </p>
          <p>Chiang Mai · Bangkok · Paris · Tokyo · Kyoto · Milan · New York · Seoul</p>
        </div>
      </div>
    </footer>
  );
}
