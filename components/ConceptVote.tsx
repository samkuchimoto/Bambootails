// /components/ConceptVote.tsx
// The laboratory loop, made interactive on the page rather than parked
// in a blog post: real product → imagined concept → "should we make
// this?" → vote → waitlist → preorder → real product.
//
// This is the mechanism that turns a catalogue into market research. A
// concept nobody votes for is never manufactured, which is the whole
// capital advantage of running the brand this way.
//
// Every concept is labelled AI CONCEPT on its own card — not in a
// section heading someone can scroll past. Beyond honesty, TikTok's
// current AIGC rules for commerce require that AI content not invent
// product characteristics or imply a product exists when it doesn't, and
// the site is where that boundary has to be visibly true.

"use client";

import { useState } from "react";
import { BRAND } from "@/config/brand";

type Status = "idle" | "sending" | "voted" | "unconfigured" | "error";

export function ConceptVote({ slug, name }: { slug: string; name: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [email, setEmail] = useState("");
  const [open, setOpen] = useState(false);

  async function submit() {
    const trimmed = email.trim();
    if (!trimmed) return;
    setStatus("sending");
    try {
      // Reuses the newsletter endpoint: a vote is an email plus which
      // concept it was for, which is exactly the shape that route
      // already forwards. A second integration to maintain would buy
      // nothing.
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed, source: `vote:${slug}` }),
      });
      if (res.ok) setStatus("voted");
      else if (res.status === 503) setStatus("unconfigured");
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "voted") {
    return (
      <p className="text-sm text-[var(--foreground)]">
        Noted — you want {name}. If enough people agree, we make fifty and you hear first.
      </p>
    );
  }

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="label border-b border-[var(--foreground)] pb-0.5 transition-opacity hover:opacity-60"
      >
        Make this one
      </button>
    );
  }

  return (
    <div className="w-full max-w-sm">
      <div className="flex items-end gap-3">
        <label className="flex-1">
          <span className="sr-only">Email address</span>
          <input
            type="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && submit()}
            placeholder="your@email.com"
            className="w-full border-b border-[var(--rule)] bg-transparent pb-2 text-sm outline-none placeholder:text-[var(--muted)] focus:border-[var(--foreground)]"
          />
        </label>
        <button
          onClick={submit}
          disabled={status === "sending"}
          className="label shrink-0 border-b border-[var(--foreground)] pb-2 transition-opacity hover:opacity-60 disabled:opacity-40"
        >
          {status === "sending" ? "…" : "Vote"}
        </button>
      </div>

      {status === "unconfigured" && (
        <p className="mt-2 text-xs text-[var(--muted)]">
          Voting isn&apos;t open yet — write to{" "}
          <a href={`mailto:${BRAND.email}`} className="underline underline-offset-2">
            {BRAND.email}
          </a>
          .
        </p>
      )}
      {status === "error" && (
        <p className="mt-2 text-xs text-[var(--accent)]">That didn&apos;t send. Try again.</p>
      )}
    </div>
  );
}
