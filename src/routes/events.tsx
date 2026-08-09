import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { trackEvent } from "@/lib/analytics";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionBadge } from "@/components/SectionBadge";
import { Calendar, Clock, MapPin } from "lucide-react";
import {
  fetchEvents,
  formatEventDate,
  splitEvents,
  type SnmEvent,
} from "@/lib/events";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events | Sound ’N’ Mind" },
      {
        name: "description",
        content:
          "Workshops, sessions, and community gatherings from Sound ’N’ Mind Foundation. See what's coming up and what we've hosted.",
      },
      { property: "og:title", content: "Events | Sound ’N’ Mind" },
      {
        property: "og:description",
        content:
          "Upcoming and past workshops, sessions, and community gatherings from Sound ’N’ Mind Foundation.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: EventsPage,
});

const FORM_BASE =
  "https://docs.google.com/forms/d/e/1FAIpQLSeW9WIoMpvHlcz0brIxn8oAoo2WcAfbYNBYHf6BSPW5TQW-eA/viewform";
const EVENT_ENTRY_ID = "entry.1166368428";

function buildFormUrl(title: string): string {
  return `${FORM_BASE}?usp=pp_url&embedded=true&${EVENT_ENTRY_ID}=${encodeURIComponent(title)}`;
}

function EventCard({
  event,
  past,
  onRegister,
}: {
  event: SnmEvent;
  past: boolean;
  onRegister: (event: SnmEvent) => void;
}) {
  const heading = event.title || event.description || "Event";
  const body = event.title ? event.description : "";

  return (
    <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:shadow-cta hover:ring-1 hover:ring-primary/30 sm:p-7">
      <h3 className="text-xl font-semibold leading-snug text-foreground">
        {heading}
      </h3>

      <dl className="mt-4 space-y-2 text-sm text-muted-foreground">
        <div className="flex items-start gap-2">
          <Calendar className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
          <dd>{formatEventDate(event.date)}</dd>
        </div>
        {event.time && (
          <div className="flex items-start gap-2">
            <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
            <dd>{event.time}</dd>
          </div>
        )}
        {event.location && (
          <div className="flex items-start gap-2">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
            <dd>{event.location}</dd>
          </div>
        )}
      </dl>

      {body && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          {body}
        </p>
      )}

      {!past && event.register && (
        <div className="mt-6 pt-2">
          <button
            type="button"
            onClick={() => onRegister(event)}
            className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-cta transition-colors hover:bg-primary/90"
          >
            Register Now
          </button>
        </div>
      )}
    </article>
  );
}

function CardSkeleton() {
  return (
    <div className="h-56 animate-pulse rounded-2xl border border-border bg-card" />
  );
}

function EventsPage() {
  const { data, isPending, isError } = useQuery({
    queryKey: ["events"],
    queryFn: fetchEvents,
    staleTime: 60_000,
    retry: 1,
  });

  const { upcoming, past } = splitEvents(data ?? []);
  const [selected, setSelected] = useState<SnmEvent | null>(null);

  const handleRegister = (event: SnmEvent) => {
    trackEvent("event_register_click", {
      event_id: event.event_id,
      event_title: event.title,
    });
    setSelected(event);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar variant="page" />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-card px-4 pt-20 pb-24 sm:px-6 sm:pt-24 sm:pb-28 lg:px-8">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-teal-light/30 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 h-[300px] w-[500px] rounded-full bg-coral-light/20 blur-3xl" />
        </div>
        <div className="mx-auto max-w-4xl text-center">
          <SectionBadge className="mb-6">What's Happening</SectionBadge>
          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-balance text-foreground sm:text-5xl md:text-6xl">
            Events
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-balance text-muted-foreground sm:text-xl">
            Workshops, sessions, and community gatherings that bring emotional
            wellbeing into everyday life. Join us in person and be part of the
            conversation.
          </p>
        </div>
      </section>

      {/* Upcoming */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <SectionBadge className="mb-6">Coming Up</SectionBadge>
            <h2 className="section-heading text-[2rem] font-semibold leading-[1.15] tracking-tight text-foreground sm:text-[2.25rem] md:text-5xl">
              Upcoming Events
            </h2>
          </div>

          {isError ? (
            <p className="mx-auto max-w-xl rounded-2xl border border-border bg-card p-6 text-center text-base text-muted-foreground">
              We're unable to load events right now. Please check back in a
              little while.
            </p>
          ) : isPending ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
            </div>
          ) : upcoming.length === 0 ? (
            <p className="text-center text-base text-muted-foreground">
              No upcoming events at the moment.
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {upcoming.map((e) => (
                <EventCard
                  key={e.event_id || e.title}
                  event={e}
                  past={false}
                  onRegister={handleRegister}
                />

              ))}
            </div>
          )}
        </div>
      </section>

      {/* Past */}
      <section className="border-t border-border bg-card px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <SectionBadge variant="card" className="mb-6">
              Looking Back
            </SectionBadge>
            <h2 className="section-heading text-[2rem] font-semibold leading-[1.15] tracking-tight text-foreground sm:text-[2.25rem] md:text-5xl">
              Past Events
            </h2>
          </div>

          {isError ? (
            <p className="text-center text-base text-muted-foreground">
              Past events are unavailable right now.
            </p>
          ) : isPending ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
            </div>
          ) : past.length === 0 ? (
            <p className="text-center text-sm text-muted-foreground">
              No past events to display.
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {past.map((e) => (
                <EventCard
                  key={e.event_id || e.title}
                  event={e}
                  past
                  onRegister={handleRegister}
                />

              ))}
            </div>
          )}
        </div>
      </section>

      <Dialog
        open={selected !== null}
        onOpenChange={(open) => !open && setSelected(null)}
      >
        <DialogContent className="max-h-[90vh] w-[calc(100vw-2rem)] max-w-2xl overflow-hidden p-0 sm:w-full">
          <DialogHeader className="border-b border-border px-5 py-4 text-left sm:px-6">
            <DialogTitle className="pr-8 text-lg font-semibold leading-snug">
              Register for {selected?.title || "this event"}
            </DialogTitle>
            <DialogDescription className="sr-only">
              Registration form for {selected?.title || "this event"}
            </DialogDescription>
          </DialogHeader>
          {selected && (
            <iframe
              key={selected.event_id || selected.title}
              src={buildFormUrl(selected.title)}
              title={`Registration form for ${selected.title}`}
              className="h-[70vh] max-h-[70vh] w-full border-0"
              loading="lazy"
            >
              Loading…
            </iframe>
          )}
        </DialogContent>
      </Dialog>

      <Footer />

    </div>
  );
}
