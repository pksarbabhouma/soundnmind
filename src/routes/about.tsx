import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Sound N Mind Foundation" },
      { name: "description", content: "Learn about Sound N Mind Foundation — a not-for-profit dedicated to building emotionally resilient individuals and compassionate communities." },
      { property: "og:title", content: "About Us | Sound N Mind Foundation" },
      { property: "og:description", content: "Learn about Sound N Mind Foundation — our vision, philosophy, and operating model." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "About Us | Sound N Mind" },
      { name: "twitter:description", content: "Learn about Sound N Mind Foundation." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
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
            Our Journey
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl text-balance leading-[1.1]">
            About <span className="text-primary">Us</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl text-balance">
            Sound &rsquo;N&rsquo; Mind Foundation works at the intersection of emotional literacy, mindfulness, sound-based healing, and human connection.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-20">
          {/* Who We Are */}
          <div>
            <h2 className="section-heading-left text-[2rem] sm:text-[2.25rem] md:text-5xl font-semibold tracking-tight text-foreground leading-[1.15] mb-6">Who We Are</h2>
            <p className="text-lg leading-relaxed text-muted-foreground text-balance">
              Sound &rsquo;N&rsquo; Mind Foundation is a not-for-profit organization dedicated to building emotionally resilient individuals and compassionate communities. Our work is preventive, inclusive, secular, and evidence-informed.
            </p>
          </div>

          {/* Our Vision */}
          <div>
            <h2 className="section-heading-left text-[2rem] sm:text-[2.25rem] md:text-5xl font-semibold tracking-tight text-foreground leading-[1.15] mb-6">Our Vision</h2>
            <p className="text-lg leading-relaxed text-muted-foreground text-balance">
              To create emotionally resilient individuals and compassionate communities by integrating emotional literacy, mindfulness, sound-based healing, and human connection across the lifespan.
            </p>
          </div>

          {/* Our Philosophy */}
          <div>
            <h2 className="section-heading-left text-[2rem] sm:text-[2.25rem] md:text-5xl font-semibold tracking-tight text-foreground leading-[1.15] mb-6">Our Philosophy</h2>
            <p className="text-lg leading-relaxed text-muted-foreground text-balance">
              Healing does not always require fixing. Sometimes it requires presence, sound, safety, and understanding.
            </p>
          </div>

          {/* Our Operating Model */}
          <div>
            <h2 className="section-heading-left text-[2rem] sm:text-[2.25rem] md:text-5xl font-semibold tracking-tight text-foreground leading-[1.15] mb-8">Our Operating Model</h2>
            <p className="text-lg leading-relaxed text-muted-foreground text-balance mb-10">
              We function through a dual-engine model:
            </p>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-2xl border border-border bg-card p-8 shadow-card">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teal-light text-2xl">🌿</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">MindWell Club</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Our community impact arm, delivering direct emotional well-being programs.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-8 shadow-card">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-coral-light text-2xl">🎓</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Sound &rsquo;N&rsquo; Mind Academy</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Our capacity-building arm, training ethically grounded practitioners who sustain and scale our work.
                </p>
              </div>
            </div>
            <p className="mt-10 text-lg leading-relaxed text-muted-foreground text-balance text-center italic">
              The Academy feeds the Club. The Club grounds the Academy in lived community experience.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
