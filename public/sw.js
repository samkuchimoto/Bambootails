// Service worker for BambooTails.
//
// Its only jobs are making the site installable and giving an offline
// page a shape. It deliberately does NOT cache product pages or imagery:
// prices, availability and the episode slate all change, and a scarf
// shown as available after it has sold out is a refund and an apology,
// not a performance win.

const SHELL_CACHE = "bambootails-shell-v1";
const SHELL_ASSETS = ["/offline.html", "/icons/icon-192.png", "/icons/icon-512.png"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(SHELL_CACHE)
      .then((cache) => cache.addAll(SHELL_ASSETS))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== SHELL_CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  // Page navigations only. Everything else — data, images, fonts — goes
  // straight to the network untouched.
  if (request.mode !== "navigate") return;

  event.respondWith(
    fetch(request).catch(() => caches.match("/offline.html").then((r) => r ?? Response.error())),
  );
});
