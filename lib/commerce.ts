// /lib/commerce.ts
// BambooTails owns its own commerce. There is no Shopify, no Wix store,
// no external cart — the DNS records pointing at Shopify are leftovers
// from an experiment that was never live.
//
// The seam here exists so that adding Stripe later is a new file, not a
// redesign. Everything downstream (product pages, order form, emails)
// talks to `PaymentMode` and never to a provider directly.
//
// Today the mode is "order-form": a real order is captured with the
// details needed to fulfil it, and payment is arranged by hand. That is
// the correct first step for a house making things one at a time — it
// produces revenue this week without a payment integration, and every
// captured order is a demand signal that tells you whether to build the
// automated version at all.

export type PaymentMode = "stripe" | "order-form";

/**
 * Which checkout the site should present.
 *
 * Deliberately reads env at call time rather than at module load: on a
 * serverless platform a module can be evaluated during build, before
 * the runtime environment exists, and a mode decided then would be
 * wrong for the life of the deployment.
 */
export function paymentMode(): PaymentMode {
  return process.env.STRIPE_SECRET_KEY ? "stripe" : "order-form";
}

export type OrderRequest = {
  /** Catalogue slug. Validated server-side against buyable pieces. */
  pieceSlug: string;
  quantity: number;
  name: string;
  email: string;
  /** Free text. Fulfilment is by hand, so a formatted address is not
   *  worth the friction of five separate fields. */
  address: string;
  /** The one measurement that decides whether the scarf fits. */
  neckCm?: string;
  note?: string;
};

export type OrderRecord = OrderRequest & {
  pieceName: string;
  unitPriceEur: number;
  totalEur: number;
  placedAt: string;
};

/** Kept here so the form, the API and any future provider agree. */
export const MAX_QUANTITY = 10;
