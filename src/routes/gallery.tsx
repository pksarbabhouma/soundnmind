import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { X } from "lucide-react";
import photo1 from "@/assets/gallery/mindwell.jpg.asset.json";
import photo2 from "@/assets/gallery/mindwell_1.jpg.asset.json";
import photo3 from "@/assets/gallery/sound-healing.jpg.asset.json";
import photo4 from "@/assets/gallery/cancer-warrior.jpg.asset.json";
import photo5 from "@/assets/gallery/mindfulness.jpg.asset.json";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | Sound ’N’ Mind" },
      { name: "description", content: "Explore moments of connection, learning, compassion, and community through our programs, events, and initiatives." },
      { property: "og:title", content: "Gallery | Sound ’N’ Mind" },
      { property: "og:description", content: "Photos and videos from our programs, workshops, and community initiatives." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GalleryPage,
});

const PHOTOS: { src: string; alt: string }[] = [
  { src: photo1.url, alt: "MindWell Club school assembly — emotional literacy session with students" },
  { src: photo2.url, alt: "Interactive classroom workshop with school students" },
  { src: photo3.url, alt: "Sound-based healing session with a young cancer warrior" },
  { src: photo4.url, alt: "Pediatric cancer warrior in hospital ward" },
  { src: photo5.url, alt: "Group mindfulness and sound healing session for adults" },
];

// Easy-to-replace placeholder YouTube video IDs
const VIDEOS: { id: string; title: string }[] = [
  { id: "Bh7MiaeDubk", title: "Sound 'N' Mind Foundation - The Journey" },
  { id: "nOPCBNOB1aU", title: "WORKSHOP ON MANAGING STRESS THROUGH MINDFULNESS" },
  { id: "uTMHh5V8bs0", title: "Share Your Story!! Share Your Experience!! Mental Health Awareness Month!! #iknowmyemotions" },
  { id: "-MS-8_ZSygg", title: "Course Introduction" },
];

function GalleryPage() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setLightbox(null);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar variant="page" />

      {/* Hero */}
      <section className="relative overflow-hidden px-4 pt-16 pb-20 sm:px-6 lg:px-8 bg-card border-b border-border">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[400px] w-[600px] rounded-full bg-teal-light/30 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 h-[300px] w-[500px] rounded-full bg-coral-light/20 blur-3xl" />
        </div>
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5 text-sm text-muted-foreground mb-6">
            Moments That Inspire
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl text-balance leading-[1.1]">
            Gallery
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl text-balance">
            Explore moments of connection, learning, compassion, and community through our programs, events, and initiatives.
          </p>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="section-heading text-[2rem] sm:text-[2.25rem] md:text-5xl font-semibold tracking-tight text-foreground leading-[1.15]">Photo Gallery</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
              Snapshots from our community programs, workshops, training sessions, and outreach initiatives.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {PHOTOS.map((photo, idx) => (
              <button
                key={idx}
                onClick={() => setLightbox(photo)}
                className="group relative aspect-square overflow-hidden rounded-2xl shadow-card ring-1 ring-border/50 transition-all hover:shadow-cta hover:ring-primary/30 focus:outline-none focus:ring-2 focus:ring-primary"
                aria-label={`Open ${photo.alt}`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </button>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Explore More Moments</h3>
            <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
              Discover more photographs from our community programs, workshops, outreach initiatives, and events.
            </p>
            <a
              href="https://photos.app.goo.gl/Vm2NcXLGqCbut5bq6"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3 text-base font-semibold text-primary-foreground shadow-cta transition-all hover:opacity-90 hover:shadow-lg"
            >
              View Complete Gallery
            </a>
          </div>
        </div>
      </section>

      {/* Video Gallery */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 bg-card border-t border-border">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="section-heading text-[2rem] sm:text-[2.25rem] md:text-5xl font-semibold tracking-tight text-foreground leading-[1.15]">Video Gallery</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
              Watch our talks, workshops, community activities, and emotional well-being initiatives.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {VIDEOS.map((video, idx) => (
              <div
                key={idx}
                className="group overflow-hidden rounded-2xl bg-background shadow-card ring-1 ring-border/50 transition-all hover:shadow-cta hover:ring-primary/30"
              >
                <div className="aspect-video w-full overflow-hidden">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="h-full w-full border-0"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-foreground">{video.title}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Explore More Videos</h3>
            <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
              Visit our YouTube channel to discover more talks, workshops, interviews, and emotional well-being resources.
            </p>
            <a
              href="https://youtube.com/@soundnmindfoundation?si=DXYLui8cP4o3lbJ9"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3 text-base font-semibold text-primary-foreground shadow-cta transition-all hover:opacity-90 hover:shadow-lg"
            >
              Visit Our YouTube Channel
            </a>
          </div>
        </div>
      </section>

      <Footer />

      {/* Lightbox */}
      {lightbox && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.alt}
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm animate-in fade-in"
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[90vh] max-w-[95vw] rounded-2xl object-contain shadow-2xl"
          />
        </div>
      )}
    </div>
  );
}
