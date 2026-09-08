// /components/SiteHeader.tsx
//
// The wordmark carries the thesis, so it stops being a quiet serif.
//
// It is now printed twice and slightly out of register — a madder plate
// under an ink plate, offset by three pixels. That misregistration is
// the signature of cheap fast printing: manga tankobon covers, gig
// posters, silkscreen. Putting it on a couture wordmark is the whole
// high-low collision in two words, and it costs one extra span.
//
// "Bamboo" stays in the serif and "Tails" goes heavy and uppercase, so
// the two registers of the house are legible in the name itself before
// anyone reads a word of copy: the maison and the toy line, joined.
//
// Nav items are keylined pills rather than underlined text. A row of
// quiet links reads as a corporate site; a row of hard-outlined buttons
// reads as a sticker sheet, which is what this house is.

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BRAND } from "@/config/brand";

// Vocabulary taken from the strategy report's site architecture: The
// House, The Sagas, The Atelier, The Laboratory. Collection is kept
// alongside Atelier rather than folded into it, because one is the shop
// and the other is the craft, and collapsing them would bury the
// techniques that justify the price.
const LINKS = [
  { href: "/mascots", label: "The House" },
  { href: "/series", label: "The Sagas" },
  { href: "/collection", label: "Collection" },
  { href: "/atelier", label: "The Atelier" },
  { href: "/laboratory", label: "The Laboratory" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="relative overflow-hidden border-b-2 border-[var(--foreground)] bg-[var(--background)]">
      <div className="stripes absolute inset-0 text-[var(--madder)]" aria-hidden />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-5 px-6 py-6 sm:py-8">
        <Link href="/" className="group relative block" aria-label={BRAND.name}>
          {/* The madder plate, offset. aria-hidden because it is the same
              word printed twice — a screen reader should hear it once. */}
          <span
            aria-hidden
            className="absolute left-[3px] top-[3px] select-none whitespace-nowrap text-3xl text-[var(--madder)] sm:text-5xl"
          >
            <span className="display">Bamboo</span>
            <span className="pop">Tails</span>
          </span>
          <span className="relative whitespace-nowrap text-3xl text-[var(--foreground)] transition-transform duration-200 group-hover:-translate-x-[2px] group-hover:-translate-y-[2px] sm:text-5xl">
            <span className="display">Bamboo</span>
            <span className="pop">Tails</span>
          </span>
        </Link>

        {/* Scrolls sideways on a phone rather than wrapping. Five pills
            plus padding is well past a 360px screen, and a ragged second
            line reads as broken. */}
        <nav
          aria-label="Main"
          className="flex w-full items-center justify-start gap-x-2.5 overflow-x-auto whitespace-nowrap pb-1 sm:justify-center [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`label keyline-sm shrink-0 px-3.5 py-2 transition-transform hover:-translate-y-0.5 ${
                  active
                    ? "bg-[var(--madder)] text-white"
                    : "bg-[var(--background)] text-[var(--foreground)] hover:bg-[var(--gold)]"
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
