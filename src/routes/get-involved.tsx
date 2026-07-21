import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HandHeart, Users, Heart, GraduationCap, Gift, ArrowRight, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/get-involved")({
  head: () => ({
    meta: [
      { title: "Get Involved | Sound ’N’ Mind Foundation" },
      { name: "description", content: "Partner, volunteer, train, or donate with Sound ’N’ Mind Foundation to support emotionally resilient individuals and compassionate communities." },
      { property: "og:title", content: "Get Involved | Sound ’N’ Mind Foundation" },
      { property: "og:description", content: "Partner, volunteer, train, or donate to support emotional wellbeing across India." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Get Involved | Sound ’N’ Mind Foundation" },
      { name: "twitter:description", content: "Partner, volunteer, train, or donate to support emotional wellbeing." },
    ],
  }),
  component: GetInvolvedPage,
});

const PARTNERSHIP_ITEMS = [
  "Program implementation",
  "CSR-supported community initiatives",
  "Research and impact measurement",
  "Capacity-building collaborations",
];

const VOLUNTEER_ROLES = [
  { title: "Volunteers", description: "Offer your time and presence to community programs and emotional support circles." },
  { title: "Emotional companions", description: "Provide non-clinical emotional presence and listening to those navigating difficult seasons." },
  { title: "Mindfulness facilitators", description: "Guide secular mindfulness and regulation practices in schools, care centers, and communities." },
  { title: "Sound practitioners", description: "Use voice, instruments, and sound-based techniques to support relaxation and emotional release." },
];

const CAUSES = [
  { title: "Senior Emotional Companionship", description: "Bring presence, memory, and sound to older adults and dementia care settings." },
  { title: "School Emotional Literacy Access", description: "Help children and educators build emotional awareness, regulation, and connection." },
  { title: "Cancer Care Emotional Support", description: "Support patients and caregivers with emotional resilience during diagnosis, treatment, and recovery." },
];

function GetInvolvedPage() {
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
            <HandHeart className="h-4 w-4" />
            Join Us
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl text-balance leading-[1.1]">
            Get <span className="text-primary">Involved</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl text-balance">
            There are many ways to be part of Sound ’N’ Mind Foundation. Partner with us, volunteer your presence, train as a practitioner, or donate to make emotional care accessible to all.
          </p>
        </div>
      </section>

      {/* Partner With Us */}
      <section id="partner" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground mb-4">
                <Users className="h-4 w-4" />
                Collaboration
              </div>
              <h2 className="section-heading-left text-[2rem] sm:text-[2.25rem] md:text-5xl font-semibold tracking-tight text-foreground text-balance leading-[1.15] mb-6">
                Partner With Us
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground text-balance mb-8">
                We collaborate with schools, hospitals, NGOs, housing societies, CSR partners, and service organizations to design and deliver sustainable emotional well-being programs.
              </p>
              <a
                href="/contact#start-a-conversation"
                className="inline-flex items-center justify-center rounded-xl bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-cta transition-all hover:scale-105 hover:bg-primary/90"
              >
                Start a Conversation
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
            <div className="rounded-2xl border border-border bg-card p-8 shadow-card">
              <h3 className="text-lg font-semibold text-foreground mb-6">
                Partnerships may include
              </h3>
              <ul className="space-y-4">
                {PARTNERSHIP_ITEMS.map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <div className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-light text-teal">
                      <CheckCircle2 className="h-4 w-4" strokeWidth={2.5} />
                    </div>
                    <span className="text-base text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer / Train */}
      <section id="volunteer" className="px-4 py-20 sm:px-6 lg:px-8 bg-card border-y border-border">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5 text-sm text-muted-foreground mb-4">
              <Heart className="h-4 w-4" />
              Give Your Presence
            </div>
            <h2 className="section-heading text-[2rem] sm:text-[2.25rem] md:text-5xl font-semibold tracking-tight text-foreground text-balance leading-[1.15] mb-6">
              Volunteer / Train
            </h2>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground text-balance">
              Individuals who feel called to support emotional well-being can join us as:
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {VOLUNTEER_ROLES.map((role) => (
              <div
                key={role.title}
                className="rounded-2xl border border-border bg-background p-6 shadow-card transition-all hover:shadow-lg hover:-translate-y-1"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-coral-light text-coral">
                  <Heart className="h-6 w-6" strokeWidth={2} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {role.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {role.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 rounded-2xl border border-border bg-background p-8 text-center shadow-card">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-light text-teal mb-4">
              <GraduationCap className="h-6 w-6" strokeWidth={2} />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Training pathways are offered through the Sound ’N’ Mind Academy.
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Build the skills, ethics, and supervised practice you need to serve your community with confidence.
            </p>
            <Link
              to="/academy"
              className="inline-flex items-center justify-center rounded-xl bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-cta transition-all hover:scale-105 hover:bg-primary/90"
            >
              Explore Academy
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Donate */}
      <section id="donate" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground mb-4">
              <Gift className="h-4 w-4" />
              Give
            </div>
            <h2 className="section-heading-left text-[2rem] sm:text-[2.25rem] md:text-5xl font-semibold tracking-tight text-foreground text-balance leading-[1.15] mb-6">
              Donate
            </h2>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground text-balance">
              Your support helps make preventive emotional care accessible to those who need it most.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-12 shadow-card sm:px-12 lg:py-16">
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-coral-light/30 via-transparent to-teal-light/20" />
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-balance mb-4">
                Support a Cause
              </h3>
              <p className="mx-auto max-w-2xl text-muted-foreground text-balance">
                Choose where your contribution creates impact.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3 mb-12">
              {CAUSES.map((cause) => (
                <div
                  key={cause.title}
                  className="rounded-2xl border border-border bg-background p-6 text-center transition-all hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-coral-light text-coral">
                    <Heart className="h-6 w-6" strokeWidth={2} />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    {cause.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-muted-foreground mb-6">
                    {cause.description}
                  </p>
                  <a
                    href="/#donate"
                    className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-cta transition-all hover:scale-105 hover:bg-primary/90"
                  >
                    Support Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              ))}
            </div>
            <div className="text-center">
              <p className="text-muted-foreground max-w-2xl mx-auto text-balance">
                Every contribution supports ethical, human-centered emotional care.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
