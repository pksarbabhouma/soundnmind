// Lightweight GA4 event helper. Safe on SSR and when gtag hasn't loaded yet.
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  if (typeof window.gtag !== "function") {
    // gtag script not ready yet — fail quietly instead of throwing.
    return;
  }
  try {
    window.gtag("event", name, params);
  } catch {
    // no-op
  }
}
