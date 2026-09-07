// /components/SiteHeader.tsx
// Centred wordmark with the navigation beneath it — the layout a fashion
// house uses, rather than the logo-left/menu-right of a software product.
// It costs a little vertical space and buys the register the whole brand
// depends on.

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BRAND } from "@/config/brand";

const LINKS = [
  { href: "/collection", label: "Collection" },
  { href: "/atelier", label: "Atelier" },
  { href: "/mascots", label: "The House" },
  { href: "/series", label: "The Series" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="border-b border-[var(--rule)]">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-6 sm:py-8">
        <Link href="/" className="display text-3xl tracking-[0.02em] sm:text-4xl">
          {BRAND.name}
        </Link>

        {/* Scrolls sideways on a phone rather than wrapping. Four items
            plus padding is right at the edge of a 360px screen, and a
            ragged second line reads as broken. */}
        <nav
          aria-label="Main"
          className="flex w-full items-center justify-start gap-x-7 overflow-x-auto whitespace-nowrap sm:justify-center [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`label shrink-0 pb-0.5 transition-colors ${
                  active
                    ? "border-b border-[var(--foreground)] text-[var(--foreground)]"
                    : "text-[var(--muted)] hover:text-[var(--foreground)]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
