import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Route = createFileRoute("/our-work")({
  head: () => ({
    meta: [
      { title: "Our Work | Sound N Mind Foundation" },
      { name: "description", content: "Discover Sound N Mind Foundation's programs for seniors, schools, and cancer warriors — built on emotional literacy, mindfulness, sound-based healing, and human connection." },
      { property: "og:title", content: "Our Work | Sound N Mind Foundation" },
      { property: "og:description", content: "Programs for seniors, schools, and cancer warriors — preventive, inclusive, and non-clinical." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Our Work | Sound N Mind" },
      { name: "twitter:description", content: "Discover Sound N Mind Foundation's programs." },
    ],
  }),
  component: OurWorkPage,
});

const pillars = [
  {
    title: "Emotional Literacy & Awareness",
    description: "Building the vocabulary and self-knowledge to understand, name, and express feelings with confidence.",
    icon: "🌱",
  },
  {
    title: "Mindfulness & Emotional Regulation",
    description: "Practical skills to notice emotions, steady the mind, and respond rather than react.",
    icon: "🧘",
  },
  {
    title: "Sound-Based Emotional Support",
    description: "Using music, tone, rhythm, and silence to soothe, connect, and create safe emotional space.",
    icon: "🎵",
  },
  {
    title: "Human Connection & Reflection",
    description: "Shared listening, dialogue, and reflective practices that reduce isolation and build belonging.",
    icon: "🤝",
  },
];

function OurWorkPage() {
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
            What We Do
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl text-balance leading-[1.1]">
            Our <span className="text-primary">Work</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl text-balance">
            Preventive, inclusive, and non-clinical programs that support emotional well-being across the lifespan.
          </p>
        </div>
      </section>

      {/* Foundational Pillars */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Four Foundational Pillars
            </h2>
            <p className="mt-4 text-lg text-muted-foreground text-balance">
              All our programs are built on four foundational pillars.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar) => (
              <Card key={pillar.title} className="border-border shadow-card">
                <CardHeader className="pb-3">
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teal-light text-2xl">
                    {pillar.icon}
                  </div>
                  <CardTitle className="text-lg">{pillar.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {pillar.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="mt-10 text-center text-lg text-muted-foreground text-balance">
            Programs are non-clinical, inclusive, and designed to complement — not replace — medical or psychological care.
          </p>
        </div>
      </section>

      {/* Seniors & Dementia Care */}
      <section id="senior-care" className="px-4 py-20 sm:px-6 lg:px-8 bg-sand/40">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 items-start">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground mb-4">
                Older Adults
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance mb-4">
                Seniors & Dementia Care
              </h2>
              <p className="text-xl font-medium text-primary mb-6">
                Reconnecting Through Presence, Sound, and Memory
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground text-balance">
                Older adults — especially those living with dementia — often experience loneliness, anxiety, and emotional distress. Our programs focus on restoring emotional safety, familiarity, and connection.
              </p>
            </div>
            <div className="grid gap-6">
              <Card className="border-border shadow-card">
                <CardHeader>
                  <CardTitle className="text-lg">What we offer</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Emotional companionship and presence-based listening</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Mindfulness practices adapted for aging bodies and minds</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Sound and memory sessions using familiar music and gentle instruments</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Emotional support and reflective circles for caregivers</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-border shadow-card">
                <CardHeader>
                  <CardTitle className="text-lg">Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-accent">•</span>
                      <span>Improved mood and emotional regulation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">•</span>
                      <span>Reduced agitation and behavioural distress</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">•</span>
                      <span>Stronger sense of belonging and dignity</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Schools */}
      <section id="schools" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 items-start">
            <div className="order-2 lg:order-1 grid gap-6">
              <Card className="border-border shadow-card">
                <CardHeader>
                  <CardTitle className="text-lg">Program Tracks</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Students</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2"><span className="text-primary">•</span><span>Emotional vocabulary and self-awareness</span></li>
                      <li className="flex items-start gap-2"><span className="text-primary">•</span><span>Daily emotional check-ins</span></li>
                      <li className="flex items-start gap-2"><span className="text-primary">•</span><span>Mindfulness and peer empathy circles</span></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Parents</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2"><span className="text-primary">•</span><span>Understanding adolescent emotional development</span></li>
                      <li className="flex items-start gap-2"><span className="text-primary">•</span><span>Mindful parenting and emotional co-regulation tools</span></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Teachers</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2"><span className="text-primary">•</span><span>Emotional resilience and burnout prevention</span></li>
                      <li className="flex items-start gap-2"><span className="text-primary">•</span><span>Trauma-sensitive, emotionally responsive classrooms</span></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Whole-School Integration</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2"><span className="text-primary">•</span><span>Assemblies and experiential workshops</span></li>
                      <li className="flex items-start gap-2"><span className="text-primary">•</span><span>Student ambassadors</span></li>
                      <li className="flex items-start gap-2"><span className="text-primary">•</span><span>Annual emotional well-being audits</span></li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-border shadow-card bg-primary/5">
                <CardContent className="pt-6">
                  <p className="text-sm font-medium text-foreground">
                    Outcome: Schools evolve into emotionally safe, aligned, and compassionate learning environments.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground mb-4">
                Education
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance mb-4">
                Schools
              </h2>
              <p className="text-xl font-medium text-primary mb-4">
                MindWell Club – ELMA
              </p>
              <p className="text-lg font-medium text-foreground mb-4">
                Building Emotionally Intelligent School Ecosystems
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground text-balance">
                MindWell Club for Schools is powered by ELMA — the Emotional Literacy & Mindfulness Approach, adapted from ELMA Academy (Australia) and contextualized for Indian schools.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-balance">
                ELMA provides a shared emotional language and a progressive learning journey — from awareness to regulation, empathy, and reflection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cancer Warriors & Caregivers */}
      <section id="cancer-warriors" className="px-4 py-20 sm:px-6 lg:px-8 bg-coral-light/30">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 items-start">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground mb-4">
                Cancer Support
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance mb-4">
                Cancer Warriors & Caregivers
              </h2>
              <p className="text-xl font-medium text-primary mb-6">
                Holding Space Through the Emotional Journey of Illness
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground text-balance">
                A cancer diagnosis affects not only the body, but the emotional world of patients and caregivers alike. Our programs support emotional resilience during diagnosis, treatment, and recovery.
              </p>
            </div>
            <div className="grid gap-6">
              <Card className="border-border shadow-card">
                <CardHeader>
                  <CardTitle className="text-lg">Program elements</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2"><span className="text-primary">•</span><span>Emotional presence and sharing circles</span></li>
                    <li className="flex items-start gap-2"><span className="text-primary">•</span><span>Gentle mindfulness and body awareness</span></li>
                    <li className="flex items-start gap-2"><span className="text-primary">•</span><span>Sound-based relaxation and personalized sessions</span></li>
                    <li className="flex items-start gap-2"><span className="text-primary">•</span><span>Joint caregiver–warrior emotional processing</span></li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-border shadow-card">
                <CardHeader>
                  <CardTitle className="text-lg">Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2"><span className="text-accent">•</span><span>Reduced anxiety and emotional fatigue</span></li>
                    <li className="flex items-start gap-2"><span className="text-accent">•</span><span>Improved coping and resilience</span></li>
                    <li className="flex items-start gap-2"><span className="text-accent">•</span><span>Enhanced quality of life</span></li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance mb-6">
            Want to bring this work to your community?
          </h2>
          <p className="text-lg text-muted-foreground text-balance mb-8">
            Partner with us, volunteer, or support our mission through a donation.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/about"
              className="inline-flex items-center justify-center rounded-xl border-2 border-border bg-background px-8 py-4 text-base font-semibold text-foreground transition-all hover:bg-muted hover:scale-105"
            >
              Learn About Us
            </a>
            <a
              href="/#donate"
              className="inline-flex items-center justify-center rounded-xl bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-cta transition-all hover:scale-105 hover:bg-primary/90"
            >
              Donate for Impact
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
