// /components/InstallAppButton.tsx
// Installs BambooTails to the home screen from the site itself — no
// store, no download, no review queue.

"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

// Chrome hands the page a deferred prompt instead of installing on its
// own. Not in the DOM lib's types.
type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

// Whether we're already running as an installed app. Read as external
// browser state rather than copied into state inside an effect — and it
// genuinely changes, since a page can be launched into standalone mode.
const standaloneQuery = () => window.matchMedia("(display-mode: standalone)");

function subscribeToDisplayMode(onChange: () => void) {
  const mq = standaloneQuery();
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

type InstallState = "unknown" | "ready" | "installed" | "ios" | "unsupported";

export function InstallAppButton() {
  const [state, setState] = useState<InstallState>("unknown");
  const [promptEvent, setPromptEvent] = useState<BeforeInstallPromptEvent | null>(null);

  const isStandalone = useSyncExternalStore(
    subscribeToDisplayMode,
    () => standaloneQuery().matches,
    () => false,
  );

  useEffect(() => {
    if (isStandalone) return;

    const onBeforeInstallPrompt = (event: Event) => {
      // Without this, Chrome shows its own mini-infobar and the page has
      // no say in when the prompt appears.
      event.preventDefault();
      setPromptEvent(event as BeforeInstallPromptEvent);
      setState("ready");
    };
    const onInstalled = () => setState("installed");

    window.addEventListener("beforeinstallprompt", onBeforeInstallPrompt);
    window.addEventListener("appinstalled", onInstalled);

    // iOS Safari can install but never fires beforeinstallprompt, so it
    // can only be offered as instructions. Detected by touch + Apple
    // platform rather than the user-agent string, which iPadOS lies
    // about (it reports as a Mac).
    const isApple =
      /iPad|iPhone|iPod/.test(navigator.userAgent) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

    // Chrome fires its event shortly after load. Waiting before
    // concluding "unsupported" avoids flashing a fallback at someone who
    // was about to be offered the real thing.
    const timer = setTimeout(() => {
      setState((current) => (current === "unknown" ? (isApple ? "ios" : "unsupported") : current));
    }, 1500);

    return () => {
      window.removeEventListener("beforeinstallprompt", onBeforeInstallPrompt);
      window.removeEventListener("appinstalled", onInstalled);
      clearTimeout(timer);
    };
  }, [isStandalone]);

  async function handleInstall() {
    if (!promptEvent) return;
    await promptEvent.prompt();
    const { outcome } = await promptEvent.userChoice;
    // The event is single-use; Chrome fires a fresh one later if the
    // person declines, so holding a spent one would give a dead button.
    setPromptEvent(null);
    if (outcome === "accepted") setState("installed");
  }

  if (isStandalone || state === "unknown" || state === "installed") return null;

  if (state === "ready") {
    return (
      <button
        onClick={handleInstall}
        className="label bg-[var(--foreground)] px-8 py-4 text-[var(--background)] transition-opacity hover:opacity-85"
      >
        Install BambooTails
      </button>
    );
  }

  if (state === "ios") {
    return (
      <p className="text-sm text-[var(--muted)]">
        To install: tap <span className="text-[var(--foreground)]">Share</span>, then{" "}
        <span className="text-[var(--foreground)]">Add to Home Screen</span>.
      </p>
    );
  }

  return (
    <p className="text-sm text-[var(--muted)]">
      Open this page on your phone in Chrome to install the app.
    </p>
  );
}
