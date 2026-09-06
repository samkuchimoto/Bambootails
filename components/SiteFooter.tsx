// /components/SiteFooter.tsx

import Link from "next/link";
import { BRAND } from "@/config/brand";
import { NewsletterForm } from "@/components/NewsletterForm";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-[var(--rule)]">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 sm:grid-cols-2">
        <div>
          <p className="display text-2xl">{BRAND.name}</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-[var(--muted)]">
            {BRAND.tagline} Made by hand in small batches. Based in Europe, shipping worldwide.
          </p>
          <a
            href={`mailto:${BRAND.email}`}
            className="mt-4 inline-block text-sm underline underline-offset-4 hover:text-[var(--accent)]"
          >
            {BRAND.email}
          </a>
        </div>

        <div>
          <p className="label text-[var(--muted)]">The list</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-[var(--muted)]">
            New prints are cut in small numbers. The list hears first.
          </p>
          <div className="mt-4">
            <NewsletterForm />
          </div>
        </div>
      </div>

      <div className="border-t border-[var(--rule)]">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-6 text-xs text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {BRAND.name}
          </p>
          <div className="flex gap-6">
            <Link href="/atelier" className="hover:text-[var(--foreground)]">
              Our story
            </Link>
            <Link href="/collection" className="hover:text-[var(--foreground)]">
              Collection
            </Link>
            <Link href="/get-app" className="hover:text-[var(--foreground)]">
              The app
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
