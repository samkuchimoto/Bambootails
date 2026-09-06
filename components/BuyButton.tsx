// /components/BuyButton.tsx
// bambootails.com already points at a Shopify store (the DNS A record is
// Shopify's, and www is a CNAME to shops.myshopify.com). So checkout is
// a solved problem that lives elsewhere — this site's job is to make
// someone want the scarf and then hand them over cleanly.
//
// NEXT_PUBLIC_SHOP_URL is that handover. Until it's set the button falls
// back to an email enquiry, which is a real way to buy from a house that
// makes things by hand — and is honest, unlike a cart that 404s.

"use client";

import { BRAND } from "@/config/brand";

export function BuyButton({ pieceName }: { pieceName: string }) {
  const shopUrl = process.env.NEXT_PUBLIC_SHOP_URL;

  if (shopUrl) {
    return (
      <a
        href={shopUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="label inline-block bg-[var(--foreground)] px-8 py-4 text-[var(--background)] transition-opacity hover:opacity-85"
      >
        Add to bag
      </a>
    );
  }

  const subject = encodeURIComponent(`${pieceName} — order enquiry`);
  const body = encodeURIComponent(
    `Hello,\n\nI'd like to order the ${pieceName} scarf.\n\nMy dog's neck measurement is: \n\nThank you,\n`,
  );

  return (
    <div>
      <a
        href={`mailto:${BRAND.email}?subject=${subject}&body=${body}`}
        className="label inline-block bg-[var(--foreground)] px-8 py-4 text-[var(--background)] transition-opacity hover:opacity-85"
      >
        Enquire to order
      </a>
      <p className="mt-3 max-w-sm text-xs text-[var(--muted)]">
        We take orders by hand while the shop is being finished. Write to us and we&apos;ll confirm
        the print, the size and the shipping.
      </p>
    </div>
  );
}
