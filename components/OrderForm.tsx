// /components/OrderForm.tsx
// The first-party order flow. Payment is arranged by hand for now, so
// this captures exactly what's needed to make and send a scarf, and
// nothing else — every extra field on a checkout form costs orders.

"use client";

import { useState, type FormEvent } from "react";
import { BRAND } from "@/config/brand";
import { MAX_QUANTITY } from "@/lib/commerce";
import { CURRENCY } from "@/lib/catalog";

type Status = "idle" | "sending" | "done" | "unconfigured" | "error";

export function OrderForm({
  pieceSlug,
  pieceName,
  price,
}: {
  pieceSlug: string;
  pieceName: string;
  price: number;
}) {
  const [quantity, setQuantity] = useState(1);
  const [status, setStatus] = useState<Status>("idle");
  const total = price * quantity;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setStatus("sending");
    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          pieceSlug,
          quantity,
          name: form.get("name"),
          email: form.get("email"),
          address: form.get("address"),
          neckCm: form.get("neckCm"),
          note: form.get("note"),
        }),
      });
      if (res.ok) setStatus("done");
      else if (res.status === 503) setStatus("unconfigured");
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="border-y border-[var(--rule)] py-8">
        <p className="display text-2xl">Your order is placed.</p>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-[var(--muted)]">
          We&apos;ll write within a day to confirm the {pieceName} and arrange payment. Nothing is
          charged until we&apos;ve confirmed it fits.
        </p>
      </div>
    );
  }

  const field =
    "w-full border-b border-[var(--rule)] bg-transparent pb-2 text-sm outline-none transition-colors placeholder:text-[var(--muted)] focus:border-[var(--foreground)]";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex items-end justify-between gap-6 border-b border-[var(--rule)] pb-4">
        <div>
          <p className="label text-[var(--muted)]">Quantity</p>
          <div className="mt-2 flex items-center gap-4">
            <button
              type="button"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              aria-label="Decrease quantity"
              className="h-8 w-8 border border-[var(--rule)] text-lg leading-none transition-colors hover:border-[var(--foreground)]"
            >
              −
            </button>
            <span className="w-6 text-center text-sm tabular-nums">{quantity}</span>
            <button
              type="button"
              onClick={() => setQuantity((q) => Math.min(MAX_QUANTITY, q + 1))}
              aria-label="Increase quantity"
              className="h-8 w-8 border border-[var(--rule)] text-lg leading-none transition-colors hover:border-[var(--foreground)]"
            >
              +
            </button>
          </div>
        </div>
        <p className="display text-3xl">{CURRENCY.symbol}{total}</p>
      </div>

      <label className="block">
        <span className="label text-[var(--muted)]">Your name</span>
        <input name="name" required autoComplete="name" className={`${field} mt-2`} />
      </label>

      <label className="block">
        <span className="label text-[var(--muted)]">Email</span>
        <input name="email" type="email" required autoComplete="email" className={`${field} mt-2`} />
      </label>

      <label className="block">
        <span className="label text-[var(--muted)]">Shipping address</span>
        <textarea name="address" required rows={3} autoComplete="street-address" className={`${field} mt-2 resize-none`} />
      </label>

      <label className="block">
        <span className="label text-[var(--muted)]">Dog&apos;s neck, in cm (optional)</span>
        <input name="neckCm" inputMode="decimal" placeholder="e.g. 32" className={`${field} mt-2`} />
        <span className="mt-2 block text-xs text-[var(--muted)]">
          A tape measure around the neck where a collar sits. If you&apos;re unsure, leave it — we&apos;ll ask.
        </span>
      </label>

      <label className="block">
        <span className="label text-[var(--muted)]">Anything else (optional)</span>
        <textarea name="note" rows={2} className={`${field} mt-2 resize-none`} />
      </label>

      <button
        type="submit"
        disabled={status === "sending"}
        className="keyline label w-full bg-[var(--madder)] px-8 py-4 text-white transition-transform hover:-translate-y-1 disabled:opacity-40 sm:w-auto"
      >
        {status === "sending" ? "Placing…" : `Place order — ${CURRENCY.symbol}${total}`}
      </button>

      <p className="text-xs leading-relaxed text-[var(--muted)]">
        Nothing is charged now. We confirm the piece and the fit by email first, then send a payment
        link. Made to order, so allow a week before it ships.
      </p>

      {status === "unconfigured" && (
        <p className="text-xs text-[var(--accent)]">
          Orders aren&apos;t open through the site yet — write to{" "}
          <a href={`mailto:${BRAND.email}`} className="underline underline-offset-2">
            {BRAND.email}
          </a>{" "}
          and we&apos;ll take it by hand.
        </p>
      )}
      {status === "error" && (
        <p className="text-xs text-[var(--accent)]">
          That didn&apos;t send. Try again, or write to{" "}
          <a href={`mailto:${BRAND.email}`} className="underline underline-offset-2">
            {BRAND.email}
          </a>
          .
        </p>
      )}
    </form>
  );
}
