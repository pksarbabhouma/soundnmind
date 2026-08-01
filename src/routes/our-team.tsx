import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/our-team")({
  head: () => ({
    meta: [
      { title: "Our Team | Sound N Mind Foundation" },
      { name: "description", content: "Meet the people behind Sound 'N' Mind Foundation — leaders in emotional wellbeing, mindfulness, coaching, healthcare, education, and community service." },
      { property: "og:title", content: "Our Team | Sound N Mind Foundation" },
      { property: "og:description", content: "Meet the leadership team and supporting network making emotional wellbeing accessible and compassionate." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Our Team | Sound N Mind" },
      { name: "twitter:description", content: "Meet the leadership team behind Sound 'N' Mind Foundation." },
    ],
  }),
  component: OurTeamPage,
});

type Member = {
  name: string;
  role: string;
  initials: string;
  intro: string;
  more: string[];
  expertise: string[];
  accent: "teal" | "coral";
};

const TEAM: Member[] = [
  {
    name: "Sourish Choudhury",
    role: "Founder & Director",
    initials: "SC",
    accent: "teal",
    intro:
      "Sourish Choudhury is the Founder and Director of Sound \u2019N\u2019 Mind Foundation and a passionate advocate for emotional wellbeing and preventive mental health.",
    more: [
      "Trained in applied psychology, mindfulness, life coaching, counselling, NLP, cognitive behavioural coaching, clinical music therapy, and sound healing, he has designed wellbeing initiatives for schools, colleges, cancer support groups, senior citizens, caregivers, and corporate organisations.",
      "He is the creator of the MindWell Club, a student wellbeing programme that promotes emotional literacy and resilience, and actively collaborates with Rotary, healthcare institutions, and non-profit organisations to expand access to emotional support.",
    ],
    expertise: [
      "Emotional Wellbeing",
      "Mindfulness",
      "Life Coaching",
      "Emotional Literacy",
      "Sound Healing",
      "Cancer Care Support",
      "Dementia Care Advocacy",
      "Community Mental Health",
    ],
  },
  {
    name: "Debashish Das",
    role: "Co-Founder & Director",
    initials: "DD",
    accent: "coral",
    intro:
      "Debashish Das is a mindfulness-based emotional wellness practitioner and sound frequency guide with professional experience across the medical and technology sectors.",
    more: [
      "His multidisciplinary perspective enables him to support individuals in navigating emotional challenges through mindfulness, self-awareness, and holistic wellbeing practices.",
      "He leads the Foundation\u2019s Elderly Care Emotional Companionship Programme, creating compassionate spaces that foster emotional resilience, dignity, and meaningful connection while helping expand community-based mental wellness initiatives.",
    ],
    expertise: [
      "Mindfulness",
      "Emotional Wellness",
      "Sound-Based Relaxation",
      "Elderly Emotional Care",
      "Community Wellbeing",
    ],
  },
  {
    name: "Susanto Paul",
    role: "Chief Operating Officer",
    initials: "SP",
    accent: "coral",
    intro:
      "Susanto Paul oversees operations and programme implementation, helping translate the Foundation\u2019s vision into impactful community initiatives.",
    more: [
      "He has played a key role in expanding the MindWell Club across schools through Rotary partnerships and building collaborations with educational institutions, healthcare organisations, NGOs, and service clubs.",
      "A Past President of the Rotary Club of Calcutta Newbies, he is committed to creating sustainable, community-driven emotional wellbeing programmes.",
    ],
    expertise: [
      "Community Leadership",
      "Programme Management",
      "Strategic Partnerships",
      "School Wellbeing",
      "Organisational Development",
      "Rotary Service",
    ],
  },
  {
    name: "Tanushree Biswas",
    role: "Strategy Advisor",
    initials: "TB",
    accent: "teal",
    intro:
      "Tanushree Biswas supports the Foundation\u2019s strategic planning, programme coordination, and community engagement initiatives.",
    more: [
      "She works to develop inclusive, participant-focused programmes that promote emotional awareness, mindfulness, and personal growth while strengthening partnerships with beneficiaries and collaborating organisations.",
    ],
    expertise: [
      "Strategy",
      "Programme Coordination",
      "Community Engagement",
      "Emotional Wellness",
      "Outreach",
    ],
  },
];

const NETWORK = [
  { label: "Healthcare Professionals", icon: "🩺" },
  { label: "Counsellors", icon: "💬" },
  { label: "Educators", icon: "📚" },
  { label: "Mindfulness Practitioners", icon: "🧘" },
  { label: "Volunteers", icon: "🤝" },
  { label: "NGOs", icon: "🌍" },
  { label: "Community Partners", icon: "🏡" },
  { label: "Schools", icon: "🏫" },
  { label: "Healthcare Institutions", icon: "🏥" },
];

function MemberCard({ member }: { member: Member }) {
  const [open, setOpen] = useState(false);
  const avatarBg = member.accent === "teal" ? "bg-teal-light" : "bg-coral-light";

  return (
    <article className="group rounded-2xl border border-border bg-card p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-cta">
      <div className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left sm:gap-6">
        <div
          className={`mb-5 grid h-24 w-24 shrink-0 place-items-center overflow-hidden rounded-full ${avatarBg} text-2xl font-bold text-foreground/70 ring-4 ring-background transition-transform duration-300 group-hover:scale-105 sm:mb-0`}
          aria-hidden="true"
        >
          {member.initials}
        </div>
        <div>
          <h3 className="text-xl font-semibold tracking-tight text-foreground">{member.name}</h3>
          <p className="mt-1 text-sm font-medium text-primary">{member.role}</p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{member.intro}</p>

          <div
            className={`grid transition-all duration-300 ease-out ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
          >
            <div className="overflow-hidden">
              <div className="space-y-3 pt-4">
                {member.more.map((p) => (
                  <p key={p.slice(0, 24)} className="text-sm leading-relaxed text-muted-foreground">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className="mt-4 inline-flex items-center gap-1 rounded-md text-sm font-semibold text-primary transition-colors hover:text-primary/80"
          >
            {open ? "Read Less" : "Read More"}
            <svg
              className={`h-4 w-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <div className="mt-6">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/70">Expertise</h4>
            <ul className="mt-3 flex flex-wrap justify-center gap-2 sm:justify-start">
              {member.expertise.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}

function OurTeamPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar variant="page" />

      {/* Hero */}
      <section className="relative overflow-hidden px-4 pt-20 pb-24 sm:px-6 sm:pt-24 sm:pb-28 lg:px-8 bg-card border-b border-border">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[400px] w-[600px] rounded-full bg-teal-light/30 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 h-[300px] w-[500px] rounded-full bg-coral-light/20 blur-3xl" />
        </div>
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5 text-sm text-muted-foreground mb-6">
            Our People
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl text-balance leading-[1.1]">
            Meet Our <span className="text-primary">Team</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground sm:text-xl text-balance">
            At Sound &rsquo;N&rsquo; Mind Foundation, our team brings together expertise in emotional wellbeing,
            mindfulness, coaching, healthcare, education, and community leadership. United by a shared vision, we are
            committed to making emotional wellbeing accessible, compassionate, and practical for individuals, families,
            schools, workplaces, and communities.
          </p>
        </div>
      </section>

      {/* Leadership */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground mb-6">
              Leadership
            </div>
            <h2 className="section-heading text-[2rem] sm:text-[2.25rem] md:text-5xl font-semibold tracking-tight text-foreground leading-[1.15]">
              Our Leadership Team
            </h2>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            {TEAM.map((m) => (
              <MemberCard key={m.name} member={m} />
            ))}
          </div>
        </div>
      </section>

      {/* Together We Care */}
      <section className="bg-muted/50 border-y border-border px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground mb-6">
              Our Network
            </div>
            <h2 className="section-heading text-[2rem] sm:text-[2.25rem] md:text-5xl font-semibold tracking-tight text-foreground leading-[1.15]">
              Together, We Care
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground text-balance">
              Our leadership team is supported by a growing network of facilitators, healthcare professionals,
              educators, counsellors, mindfulness practitioners, volunteers, and community partners who share one
              mission: to make emotional wellbeing accessible, compassionate, and a part of everyday life for everyone.
            </p>
          </div>
          <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {NETWORK.map((n) => (
              <li
                key={n.label}
                className="flex items-center gap-3 rounded-2xl border border-border bg-card p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-cta"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-teal-light text-lg" aria-hidden="true">
                  {n.icon}
                </span>
                <span className="text-sm font-medium text-foreground">{n.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="section-heading text-[2rem] sm:text-[2.25rem] md:text-5xl font-semibold tracking-tight text-foreground leading-[1.15]">
            Join Us in Building Emotionally Healthier Communities
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-balance">
            Whether you&rsquo;re an educator, healthcare professional, volunteer, organisation, or community leader,
            we&rsquo;d love to collaborate in making emotional wellbeing more accessible to everyone.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/get-involved#partner"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-cta transition-colors hover:bg-primary/90"
            >
              Partner With Us
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
