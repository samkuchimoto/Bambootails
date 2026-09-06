// /app/api/orders/route.ts
// First-party order capture. No Shopify, no external cart.
//
// The route re-derives the piece, its name and its price from the
// server-side catalogue using only the slug the client sent. It never
// trusts a price, a name or an availability from the request body —
// otherwise anyone could POST a €0 order for a concept piece, and the
// first person to open devtools would find that out.

import { NextResponse } from "next/server";
import { PIECES, isBuyable } from "@/lib/catalog";
import { MAX_QUANTITY, type OrderRecord } from "@/lib/commerce";

const EMAIL = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

function str(value: unknown, max: number): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  const webhook = process.env.ORDERS_WEBHOOK_URL;
  // An order that isn't recorded anywhere is a lost customer and a lost
  // sale, so this refuses rather than accepting into a void. Same rule
  // as the newsletter, with more at stake.
  if (!webhook) {
    return NextResponse.json({ error: "not_configured" }, { status: 503 });
  }

  const body = await request.json().catch(() => null);
  if (!body) return NextResponse.json({ error: "invalid_request" }, { status: 400 });

  // Only pieces that are actually buyable. This is the single check that
  // stops a concept or a coming-soon piece being ordered — the UI hides
  // them, but the UI is not a security boundary.
  const piece = PIECES.find((p) => p.slug === str(body.pieceSlug, 80));
  if (!piece || !isBuyable(piece)) {
    return NextResponse.json({ error: "not_orderable" }, { status: 400 });
  }

  const quantity = Number.isInteger(body.quantity) ? (body.quantity as number) : 0;
  if (quantity < 1 || quantity > MAX_QUANTITY) {
    return NextResponse.json({ error: "invalid_quantity" }, { status: 400 });
  }

  const email = str(body.email, 254);
  const name = str(body.name, 120);
  const address = str(body.address, 600);
  if (!EMAIL.test(email) || !name || !address) {
    return NextResponse.json({ error: "invalid_details" }, { status: 400 });
  }

  // Price comes from the catalogue, never from the client.
  const record: OrderRecord = {
    pieceSlug: piece.slug,
    pieceName: piece.name,
    quantity,
    unitPriceEur: piece.priceEur,
    totalEur: piece.priceEur * quantity,
    name,
    email,
    address,
    neckCm: str(body.neckCm, 20) || undefined,
    note: str(body.note, 600) || undefined,
    placedAt: new Date().toISOString(),
  };

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(record),
    });
    // Only report success if the order actually landed somewhere. A
    // failed forward reported as a confirmed order is the worst outcome
    // available: the customer waits for a scarf nobody knows to make.
    if (!res.ok) {
      console.error("orders webhook rejected:", res.status);
      return NextResponse.json({ error: "upstream_failed" }, { status: 502 });
    }
  } catch (err) {
    console.error("orders webhook unreachable:", err);
    return NextResponse.json({ error: "upstream_failed" }, { status: 502 });
  }

  return NextResponse.json({ ordered: true, total: record.totalEur });
}
