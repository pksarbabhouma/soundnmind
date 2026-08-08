export type SnmEvent = {
  event_id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  register: boolean;
  published: boolean;
};

const EVENTS_API_URL =
  "https://script.google.com/macros/s/AKfycbxwWFY6S7QG8Ll0nZjaRKbxfrdt20X0wE-TLcXT-JXDWdajoDZAlfO2RxHMd3nSczz3ag/exec";

function toBool(value: unknown): boolean {
  if (typeof value === "boolean") return value;
  if (typeof value === "string") return value.trim().toLowerCase() === "true";
  return Boolean(value);
}

function normalize(raw: Record<string, unknown>): SnmEvent {
  return {
    event_id: String(raw["event_id"] ?? ""),
    title: String(raw["title"] ?? "").trim(),
    date: String(raw["date"] ?? ""),
    time: String(raw["time"] ?? "").trim(),
    location: String(raw["location"] ?? "").trim(),
    description: String(raw["description"] ?? "").trim(),
    register: toBool(raw["register"]),
    published: toBool(raw["published"]),
  };
}

/** Fetches published events from the Google Sheet-backed API. */
export async function fetchEvents(): Promise<SnmEvent[]> {
  const res = await fetch(EVENTS_API_URL, { redirect: "follow" });
  if (!res.ok) throw new Error("events_request_failed");
  const data: unknown = await res.json();
  if (!Array.isArray(data)) throw new Error("events_bad_payload");
  return data
    .map((item) => normalize(item as Record<string, unknown>))
    .filter((e) => e.published);
}

/** Start of today, used to split upcoming vs past. */
function startOfToday(): number {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d.getTime();
}

export function isUpcoming(event: SnmEvent): boolean {
  const t = new Date(event.date).getTime();
  if (Number.isNaN(t)) return true;
  return t >= startOfToday();
}

export function splitEvents(events: SnmEvent[]) {
  const upcoming = events.filter(isUpcoming).sort(byDateAsc);
  const past = events.filter((e) => !isUpcoming(e)).sort(byDateDesc);
  return { upcoming, past };
}

function byDateAsc(a: SnmEvent, b: SnmEvent) {
  return new Date(a.date).getTime() - new Date(b.date).getTime();
}
function byDateDesc(a: SnmEvent, b: SnmEvent) {
  return new Date(b.date).getTime() - new Date(a.date).getTime();
}

export function formatEventDate(value: string): string {
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return value;
  return d.toLocaleDateString("en-IN", {
    weekday: "short",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
