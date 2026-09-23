// /components/CollectionBrowser.tsx
// The /collection grid with filter tabs. Client-side because filtering is
// pure UI state — the page itself stays static, and every piece is in the
// HTML from the first paint.

"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { COLLECTION_TABS, CURRENCY, type PieceCategory } from "@/lib/catalog";

export type CollectionItem = {
  slug: string;
  name: string;
  description: string;
  image: { src: string; alt: string };
  price: number | null;
  label: string | null;
  provenance: string | null;
  category: PieceCategory;
};

export function CollectionBrowser({ items }: { items: CollectionItem[] }) {
  const [tabId, setTabId] = useState<(typeof COLLECTION_TABS)[number]["id"]>("all");
  const tab = COLLECTION_TABS.find((t) => t.id === tabId) ?? COLLECTION_TABS[0];
  const visible = items.filter((item) =>
    (tab.categories as readonly PieceCategory[]).includes(item.category),
  );

  return (
    <>
      <div className="flex flex-wrap gap-2.5" role="group" aria-label="Filter the collection">
        {COLLECTION_TABS.map((t) => {
          const active = t.id === tabId;
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => setTabId(t.id)}
              aria-pressed={active}
              className={`label keyline-sm px-4 py-2 transition-transform hover:-translate-y-0.5 ${
                active
                  ? "bg-[var(--madder)] text-white"
                  : "bg-[var(--background)] text-[var(--foreground)] hover:bg-[var(--gold)]"
              }`}
            >
              {t.label}
            </button>
          );
        })}
      </div>

      <ul className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((item, i) => (
          <li
            key={item.slug}
            className="pop-in"
            style={{ ["--pop-delay" as string]: `${i * 0.07}s` }}
          >
            <Link href={`/collection/${item.slug}`} className="keyline-lift block">
              <div className="keyline relative aspect-[4/5] w-full overflow-hidden bg-black">
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  priority={i < 2}
                  sizes="(max-width: 640px) 90vw, 32vw"
                  className="object-cover"
                />
                {item.label && (
                  <span className="keyline-sm label absolute left-3 top-3 bg-[var(--background)] px-2.5 py-1">
                    {item.label}
                  </span>
                )}
              </div>

              <h2 className="display mt-5 text-3xl">{item.name}</h2>
              {item.price !== null && (
                <p className="pop mt-1 text-2xl text-[var(--madder)]">
                  {CURRENCY.symbol}
                  {item.price}
                </p>
              )}
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                {item.description}
              </p>
              {item.provenance && (
                <p className="label mt-3 text-[var(--muted)]">{item.provenance}</p>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
