import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { BRAND } from "@/config/brand";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ServiceWorkerRegistrar } from "@/components/ServiceWorkerRegistrar";
import "./globals.css";

// Cormorant Garamond for display: a French old-style face, the right
// register for an atelier and the wrong one for a pet shop. Inter
// carries everything a person actually has to read.
const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  // The template matters more than it looks: every shared link carries
  // the house name, whatever page it points at.
  title: {
    default: `${BRAND.name} — ${BRAND.tagline}`,
    template: `%s — ${BRAND.name}`,
  },
  description: BRAND.heroSub,
  metadataBase: new URL(`https://${BRAND.domain}`),
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: `${BRAND.name} — ${BRAND.tagline}`,
    description: BRAND.heroSub,
    type: "website",
    locale: "en",
    siteName: BRAND.name,
    images: [{ url: "/images/scarf-hibiscus-hero.jpg", width: 2400, height: 1600 }],
  },
  icons: {
    icon: [
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/icons/apple-touch-icon.png",
  },
  appleWebApp: { capable: true, title: BRAND.name, statusBarStyle: "default" },
};

export const viewport: Viewport = {
  themeColor: "#faf8f5",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <ServiceWorkerRegistrar />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
