import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Heart, Brain, Music, Compass, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/academy")({
  head: () => ({
    meta: [
      { title: "Sound ’N’ Mind Academy | Training in Emotional Wellbeing" },
      { name: "description", content: "Train as an emotionally skilled, ethically grounded practitioner with Sound ’N’ Mind Academy. Certifications in emotional companionship, mindfulness, sound healing, and life coaching." },
      { property: "og:title", content: "Sound ’N’ Mind Academy | Training in Emotional Wellbeing" },
      { property: "og:description", content: "Train as an emotionally skilled, ethically grounded practitioner with Sound ’N’ Mind Academy." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Sound ’N’ Mind Academy" },
      { name: "twitter:description", content: "Train as an emotionally skilled, ethically grounded practitioner." },
    ],
  }),
  component: AcademyPage,
});

const TRAINING_STREAMS = [
  {
    icon: Heart,
    title: "Emotional Companion Certification",
    description: "Active listening, emotional literacy, empathy, dementia-sensitive communication, ethics",
    accent: "bg-coral-light text-coral",
  },
  {
    icon: Brain,
    title: "Mindfulness Trainer & Coach Program",
    description: "Secular mindfulness, emotional regulation, trauma-sensitive facilitation",
    accent: "bg-teal-light text-teal",
  },
  {
    icon: Music,
    title: "Sound Healer & Trainer Program",
    description: "Sound science, voice and instruments, ethical sound healing practice",
    accent: "bg-coral-light text-coral",
  },
  {
    icon: Compass,
    title: "Life Coach & Mentor Program",
    description: "Emotional intelligence, purpose, life transitions",
    accent: "bg-teal-light text-teal",
  },
];

const TRAINING_DESIGN = [
  "Modular certifications",
  "Blended learning (online + in-person)",
  "Supervised practicum through MindWell Club",
  "Ongoing professional development",
];

function AcademyPage() {
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
            🎓 The Academy
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl text-balance leading-[1.1]">
            Sound <span className="text-primary">’N’ Mind</span> Academy
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl text-balance">
            The Academy exists to build a new category of emotionally skilled, ethically grounded, community-based practitioners.
          </p>
        </div>
      </section>

      {/* Training Streams */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground mb-4">
              Training Streams
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Four Pathways to Practice
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Each stream combines theory, supervised practice, and ethical grounding to prepare you for real community work.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {TRAINING_STREAMS.map((stream) => (
              <div
                key={stream.title}
                className="group rounded-2xl border border-border bg-card p-8 shadow-card transition-all hover:shadow-lg hover:-translate-y-1"
              >
                <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${stream.accent} transition-colors`}>
                  <stream.icon className="h-7 w-7" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {stream.title}
                </h3>
                <p className="text-base leading-relaxed text-muted-foreground">
                  {stream.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Design */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 bg-card border-y border-border">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5 text-sm text-muted-foreground mb-4">
                How We Train
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance mb-6">
                Training Design
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground text-balance mb-8">
                Our programs are built for working professionals, caregivers, educators, and changemakers who want to bring emotional wellbeing into their communities with confidence and care.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-cta transition-all hover:scale-105 hover:bg-primary/90"
              >
                Enquire Now
              </a>
            </div>
            <div className="rounded-2xl border border-border bg-background p-8 shadow-card">
              <ul className="space-y-5">
                {TRAINING_DESIGN.map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <div className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-light text-teal">
                      <CheckCircle2 className="h-4 w-4" strokeWidth={2.5} />
                    </div>
                    <span className="text-lg font-medium text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
}
