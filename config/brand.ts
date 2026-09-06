// /config/brand.ts
// Single source of truth for brand-facing strings, taken from the
// existing brand documents (BambooTails_Intro_Sheet, Executive Summary)
// rather than invented: French-Canadian luxury pet brand, handmade silk,
// ethics + craftsmanship + luxury, US and Europe, based in Europe.

export const BRAND = {
  name: "BambooTails",
  domain: "bambootails.com",
  email: "contact@bambootails.com",

  // The line the whole site hangs on. "Haute couture for dogs" is the
  // brand's own positioning from the intro sheet; the second clause is
  // what makes it a fashion house rather than a pet-accessory shop.
  tagline: "Haute couture for dogs.",
  heroHeadline: "Silk, made by hand,\nfor the one who follows you everywhere.",
  heroSub:
    "BambooTails is a French-Canadian atelier making silk scarves for dogs — each one cut, rolled and hemmed by hand.",

  // Verifiable claims only. Everything here comes from the brand docs.
  proofPoints: [
    "Hand-rolled silk, made in small batches",
    "Presented in person to luxury boutiques in Paris",
    "In conversation with the Jane Goodall Institute",
  ],

  values: [
    {
      title: "Ethics & animal welfare",
      body: "A brand built around dogs should be measured by how it treats them. No animal is a prop, and nothing we make is worn for a photograph and then discarded.",
    },
    {
      title: "Craft above volume",
      body: "Each scarf is cut and hand-rolled. That limits how many exist, which is the point — this is an atelier, not a production line.",
    },
    {
      title: "Materials that last",
      body: "Real silk, chosen to age well rather than photograph well once. Longevity is the most honest form of sustainability.",
    },
    {
      title: "Timeless over seasonal",
      body: "We are not chasing a trend cycle. A BambooTails scarf should look correct in ten years.",
    },
  ],
} as const;
