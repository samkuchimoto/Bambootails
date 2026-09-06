// /components/ServiceWorkerRegistrar.tsx
// Registers the service worker on load, which is what makes Android
// offer to install the site. Registering it lazily — only when someone
// reaches an "install" page — means most visitors are never offered the
// app at all.

"use client";

import { useEffect } from "react";

export function ServiceWorkerRegistrar() {
  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;
    // Fire-and-forget. A failed registration costs installability and
    // the offline page, not the site — and it fails legitimately in
    // private windows and in some in-app browsers.
    navigator.serviceWorker.register("/sw.js").catch((err) => {
      console.warn("service worker registration failed:", err);
    });
  }, []);

  return null;
}
