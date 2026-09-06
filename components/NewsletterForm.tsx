// /components/NewsletterForm.tsx
// Used in the footer, on a product page, and under a concept vote — the
// `source` field is what keeps those distinguishable in one list.

"use client";

import { useState, type FormEvent } from "react";
import { BRAND } from "@/config/brand";

type Status = "idle" | "sending" | "done" | "invalid" | "unconfigured" | "error";

export function NewsletterForm({
  source = "footer",
  cta = "Join",
  placeholder = "your@email.com",
}: {
  source?: string;
  cta?: string;
  placeholder?: string;
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const trimmed = email.trim();
    if (!trimmed) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed, source }),
      });
      if (res.ok) {
        setStatus("done");
        return;
      }
      // Each failure gets its own message. "Something went wrong" tells
      // the person nothing and tells us nothing either.
      if (res.status === 400) setStatus("invalid");
      else if (res.status === 503) setStatus("unconfigured");
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <p className="text-sm text-[var(--foreground)]">
        You&apos;re on the list. We write rarely, and only when something is ready.
      </p>
    );
  }

  return (
    <div className="w-full max-w-sm">
      <form onSubmit={handleSubmit} className="flex items-end gap-3">
        <label className="flex-1">
          <span className="sr-only">Email address</span>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={placeholder}
            className="w-full border-b border-[var(--rule)] bg-transparent pb-2 text-sm outline-none transition-colors placeholder:text-[var(--muted)] focus:border-[var(--foreground)]"
          />
        </label>
        <button
          type="submit"
          disabled={status === "sending"}
          className="label shrink-0 border-b border-[var(--foreground)] pb-2 transition-opacity hover:opacity-60 disabled:opacity-40"
        >
          {status === "sending" ? "…" : cta}
        </button>
      </form>

      {status === "invalid" && (
        <p className="mt-2 text-xs text-[var(--accent)]">That address doesn&apos;t look right.</p>
      )}
      {/* Honest rather than reassuring: if the list isn't connected, say
          so and give a route that works, instead of swallowing the
          address and showing a tick. */}
      {status === "unconfigured" && (
        <p className="mt-2 text-xs text-[var(--muted)]">
          Our list isn&apos;t open yet — write to{" "}
          <a href={`mailto:${BRAND.email}`} className="underline underline-offset-2">
            {BRAND.email}
          </a>{" "}
          and we&apos;ll add you by hand.
        </p>
      )}
      {status === "error" && (
        <p className="mt-2 text-xs text-[var(--accent)]">
          That didn&apos;t send. Try again, or write to{" "}
          <a href={`mailto:${BRAND.email}`} className="underline underline-offset-2">
            {BRAND.email}
          </a>
          .
        </p>
      )}
    </div>
  );
}
