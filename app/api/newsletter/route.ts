// /app/api/newsletter/route.ts
// The list. Every email here is a person who might buy the next drop, so
// the one behaviour this route must never have is accepting an address
// and quietly dropping it.
//
// There is no database in this project yet, and adding one to hold a
// list of strings would be the wrong trade. Instead the route forwards
// to whatever NEWSLETTER_WEBHOOK_URL points at — Formspree, a Zapier or
// Make hook, a Google Apps Script, a Shopify customer endpoint. All are
// a two-minute setup and all keep the list somewhere the owner can
// actually read it.
//
// With no webhook configured the route returns 503 and the form says so,
// showing the contact address instead. A form that reports success into
// a void is worse than one that admits it isn't wired up: the first
// loses customers silently, the second loses none.

import { NextResponse } from "next/server";

const EMAIL = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

export async function POST(request: Request) {
  const webhook = process.env.NEWSLETTER_WEBHOOK_URL;
  if (!webhook) {
    return NextResponse.json({ error: "not_configured" }, { status: 503 });
  }

  const body = await request.json().catch(() => null);
  const email = typeof body?.email === "string" ? body.email.trim() : "";
  // Source lets one endpoint serve the footer, the product page and the
  // concept vote without three integrations.
  const source = typeof body?.source === "string" ? body.source.slice(0, 60) : "unknown";

  if (!EMAIL.test(email) || email.length > 254) {
    return NextResponse.json({ error: "invalid_email" }, { status: 400 });
  }

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ email, source, submittedAt: new Date().toISOString() }),
    });

    // Only report success if the destination actually accepted it. A
    // failed forward reported as success is the exact silent loss this
    // route exists to prevent.
    if (!res.ok) {
      console.error("newsletter webhook rejected:", res.status);
      return NextResponse.json({ error: "upstream_failed" }, { status: 502 });
    }
  } catch (err) {
    console.error("newsletter webhook unreachable:", err);
    return NextResponse.json({ error: "upstream_failed" }, { status: 502 });
  }

  return NextResponse.json({ subscribed: true });
}
