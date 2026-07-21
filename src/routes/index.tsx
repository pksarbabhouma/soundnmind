import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import { CountUp } from "@/components/CountUp";
import premashrayaLogo from "@/assets/partners/premashraya.png.asset.json";
import stJudeLogo from "@/assets/partners/st-jude.png.asset.json";
import cankidsLogo from "@/assets/partners/cankids.png.asset.json";
import diaLogo from "@/assets/partners/dia.png.asset.json";
import ichLogo from "@/assets/partners/ich.png.asset.json";
import elmaLogo from "@/assets/partners/elma.png.asset.json";
import heroImage from "@/assets/gallery/mindfulness.jpg.asset.json";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sound N Mind | Emotional Resilience & Compassionate Communities" },
      { name: "description", content: "Sound N Mind creates emotionally resilient individuals and compassionate communities through care for seniors, schools, and cancer warriors." },
      { property: "og:title", content: "Sound N Mind | Emotional Resilience & Compassionate Communities" },
      { property: "og:description", content: "Creating emotionally resilient individuals and compassionate communities." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Sound N Mind" },
      { name: "twitter:description", content: "Creating emotionally resilient individuals and compassionate communities." },
    ],
  }),
  component: LandingPage,
});


function LandingPage() {
  return (
    <div id="home" className="min-h-screen bg-background">
      <Navbar variant="home" />

      {/* Hero Section */}
      <section className="relative">
        <div className="relative w-full overflow-hidden min-h-[520px] sm:min-h-[560px] lg:min-h-[600px]">
          {/* Background image */}
          <img
            src={heroImage.url}
            alt="Group mindfulness and sound healing session — participants gathered in a circle in a moment of collective calm and connection"
            className="absolute inset-0 h-full w-full object-cover"
            loading="eager"
          />
          {/* Overlays for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

          {/* Text overlay */}
          <div className="relative mx-auto flex min-h-[520px] max-w-7xl items-center px-4 py-20 sm:min-h-[560px] sm:px-6 lg:min-h-[600px] lg:px-8">
            <div className="max-w-2xl text-white">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-sm text-white backdrop-blur-sm mb-6">
                <span className="inline-block h-2 w-2 rounded-full bg-accent animate-pulse" />
                10,000+ lives touched since 2018
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-balance leading-[1.1] drop-shadow-lg">
                Creating Emotionally Resilient Individuals &amp; Compassionate Communities
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/90 sm:text-xl text-balance drop-shadow">
                Emotional literacy, mindfulness, sound-based healing, and human connection.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="/our-work"
                  className="inline-flex items-center justify-center rounded-xl bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-cta transition-all hover:scale-105 hover:bg-primary/90"
                >
                  Explore Our Work
                </a>
                <a
                  href="#donate"
                  className="inline-flex items-center justify-center rounded-xl border-2 border-white/70 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white hover:text-foreground hover:scale-105"
                >
                  Donate for Impact
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Impact metrics */}
        <div className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-teal-light/40 blur-3xl" />
            <div className="absolute bottom-0 right-1/4 h-[400px] w-[600px] rounded-full bg-coral-light/30 blur-3xl" />
          </div>
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground">
                Our Impact
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
              {[
                { icon: "🌱", value: "25+", label: "Communities Reached" },
                { icon: "💛", value: "5,000+", label: "Lives Touched" },
                { icon: "🎓", value: "150+", label: "Practitioners Trained" },
                { icon: "🤝", value: "40+", label: "Partner Institutions" },
              ].map((m, i) => (
                <div
                  key={m.label}
                  className="rounded-2xl border border-border bg-card p-6 shadow-card text-center animate-fade-in transition-all hover:shadow-lg hover:-translate-y-1"
                  style={{ animationDelay: `${i * 100}ms`, animationFillMode: "both" }}
                >
                  <div className="mx-auto mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-teal-light text-2xl">
                    {m.icon}
                  </div>
                  <div className="text-3xl font-extrabold text-foreground sm:text-4xl"><CountUp value={m.value} /></div>
                  <div className="mt-2 text-sm font-medium text-muted-foreground">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* About Section */}
      <section id="about" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground mb-6">
              About Sound 'N' Mind
            </div>
            <h2 className="section-heading text-[2rem] sm:text-[2.25rem] md:text-5xl font-semibold tracking-tight text-foreground text-balance leading-[1.15]">
              About Sound 'N' Mind
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground text-balance">
              Sound 'N' Mind is dedicated to building emotionally resilient individuals and communities through preventive emotional well-being initiatives, compassionate care, and professional capacity building. We believe emotional well-being should be accessible, ethical, and community-driven.
            </p>
          </div>

          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground">
              Our Dual Engine
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                icon: "🤝",
                title: "MindWell Club",
                subtitle: "Community Impact",
                description:
                  "MindWell Club creates safe, inclusive spaces where individuals and communities access preventive emotional well-being programs, peer support, mindfulness practices, and compassionate care.",
              },
              {
                icon: "🎓",
                title: "Sound 'N' Mind Academy",
                subtitle: "Capacity Building",
                description:
                  "The Academy develops emotionally skilled and ethically grounded practitioners through structured certification programs, practical learning, and continuous professional development.",
              },
            ].map((c, i) => (
              <div
                key={c.title}
                className="group rounded-2xl border border-border bg-card p-8 shadow-card transition-all hover:shadow-lg hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${i * 100}ms`, animationFillMode: "both" }}
              >
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-teal-light text-3xl transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  {c.icon}
                </div>
                <div className="text-xs font-semibold uppercase tracking-wider text-primary">
                  {c.subtitle}
                </div>
                <h3 className="mt-1 text-2xl font-bold text-foreground">{c.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {c.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Our Focus Areas Section */}
      <section id="focus-areas" className="px-4 py-20 sm:px-6 lg:px-8 bg-card border-y border-border">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5 text-sm text-muted-foreground mb-4">
              How We Create Impact
            </div>
            <h2 className="section-heading text-[2rem] sm:text-[2.25rem] md:text-5xl font-semibold tracking-tight text-foreground text-balance leading-[1.15]">
              Our Focus Areas
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Our work is centered around building emotionally resilient individuals and communities through preventive, compassionate, and evidence-informed approaches.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: "💗", title: "Emotional Literacy", description: "Building awareness, understanding, and healthy expression of emotions." },
              { icon: "🧘", title: "Mindfulness & Regulation", description: "Developing calm, resilience, focus, and emotional balance through mindfulness practices." },
              { icon: "🎵", title: "Sound-Based Support", description: "Using sound, voice, and vibration to promote relaxation, healing, and well-being." },
              { icon: "🤝", title: "Human Connection", description: "Creating safe spaces for empathy, listening, belonging, and meaningful relationships." },
              { icon: "🌿", title: "Caregiver Well-being", description: "Supporting caregivers with emotional resilience, self-care, and sustainable well-being." },
              { icon: "🎓", title: "Capacity Building", description: "Developing skilled practitioners and community leaders through structured learning and training." },
            ].map((c, i) => (
              <div
                key={c.title}
                className="group flex h-full flex-col rounded-2xl border border-border bg-background p-7 shadow-card transition-all hover:shadow-lg hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${i * 80}ms`, animationFillMode: "both" }}
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teal-light text-2xl transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  {c.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Snapshot Section */}
      <section id="programs-snapshot" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground mb-4">
              Programs Snapshot
            </div>
            <h2 className="section-heading text-[2rem] sm:text-[2.25rem] md:text-5xl font-semibold tracking-tight text-foreground text-balance leading-[1.15]">
              Programs Snapshot
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Creating meaningful impact across communities through focused emotional well-being initiatives.
            </p>
          </div>
          <div className="space-y-8">
            {[
              {
                icon: "👵",
                title: "Seniors & Dementia Care",
                partner: "In collaboration with Dementia India Alliance",
                description: "Supporting seniors and individuals living with dementia through emotional companionship, caregiver support, meaningful engagement, and community-based care.",
                primary: { label: "Learn More", href: "/our-work#senior-care" },
                secondary: { label: "Support This Cause", href: "/get-involved#donate" },
                iconBg: "bg-teal-light",
                reverse: false,
              },
              {
                icon: "🏫",
                title: "Schools – MindWell Club",
                partner: "ELMA Initiative",
                description: "Helping students, educators, and school communities build emotional literacy, resilience, mindfulness, and healthy relationships through the MindWell Club.",
                primary: { label: "Bring to Your School", href: "/our-work#schools" },
                secondary: { label: "Sponsor a School", href: "/get-involved#donate" },
                iconBg: "bg-coral-light",
                reverse: true,
              },
              {
                icon: "🎗️",
                title: "Cancer Warriors & Caregivers",
                partner: null,
                description: "Providing compassionate emotional support and resilience-building for individuals living with cancer and the caregivers who walk alongside them.",
                primary: { label: "Explore Program", href: "/our-work#cancer-warriors" },
                secondary: { label: "Donate for Care", href: "/get-involved#donate" },
                iconBg: "bg-teal-light",
                reverse: false,
              },
            ].map((p, i) => (
              <div
                key={p.title}
                className={`group flex flex-col gap-8 rounded-3xl border border-border bg-card p-8 shadow-card transition-all hover:shadow-lg hover:-translate-y-1 animate-fade-in md:p-10 lg:flex-row lg:items-center ${p.reverse ? "lg:flex-row-reverse" : ""}`}
                style={{ animationDelay: `${i * 100}ms`, animationFillMode: "both" }}
              >
                <div className={`flex shrink-0 items-center justify-center ${p.iconBg} h-24 w-24 rounded-2xl text-5xl transition-transform group-hover:scale-105 lg:h-32 lg:w-32 lg:text-6xl`}>
                  {p.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-2xl font-bold text-foreground sm:text-3xl">{p.title}</h3>
                  {p.partner && (
                    <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                      {p.partner}
                    </div>
                  )}
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                </div>
                <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col lg:items-stretch">
                  <a
                    href={p.primary.href}
                    className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-cta transition-all hover:scale-105 hover:bg-primary/90"
                  >
                    {p.primary.label}
                  </a>
                  <a
                    href={p.secondary.href}
                    className="inline-flex items-center justify-center rounded-xl border-2 border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-all hover:bg-muted hover:scale-105"
                  >
                    {p.secondary.label}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>




      {/* Testimonials Section */}
      <section id="testimonials" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="section-heading text-[2rem] sm:text-[2.25rem] md:text-5xl font-semibold tracking-tight text-foreground text-balance leading-[1.15]">
              Testimonials
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Real stories of connection, compassion, and emotional well-being from the communities we serve.
            </p>
          </div>
          <TestimonialsCarousel />
        </div>
      </section>

      {/* Partners & Collaborators Section */}
      <section id="partners" className="px-4 py-20 sm:px-6 lg:px-8 bg-card border-y border-border">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="section-heading text-[2rem] sm:text-[2.25rem] md:text-5xl font-semibold tracking-tight text-foreground text-balance leading-[1.15]">
              Partners & Collaborators
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              We are grateful to collaborate with organizations that share our commitment to building emotionally resilient individuals and communities.
            </p>
          </div>

          {([
              {
                name: "NGOs",
                logos: [
                  { name: "Premashraya", src: premashrayaLogo.url },
                  { name: "St. Jude India ChildCare Centres", src: stJudeLogo.url },
                  { name: "CanKids...KidsCan", src: cankidsLogo.url },
                  { name: "Dementia India Alliance", src: diaLogo.url },
                ],
              },
              {
                name: "Collaborators",
                logos: [{ name: "ELMA - The Emotional Literacy & Mindfulness Academy", src: elmaLogo.url }],
              },
              {
                name: "Hospitals",
                logos: [{ name: "Institute of Child Health", src: ichLogo.url }],
              },
            ] as { name: string; logos: { name: string; src: string }[] }[]).map((category, cIdx) => (
            <div key={category.name} className={cIdx === 0 ? "" : "mt-14"}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground text-center mb-8">
                {category.name}
              </h3>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
                {category.logos.map((logo, i) => (
                  <div
                    key={logo.name}
                    className="flex h-36 items-center justify-center rounded-xl border border-border bg-background px-6 py-4 shadow-card transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:shadow-lg animate-fade-in"
                    style={{ animationDelay: `${i * 60}ms` }}
                  >
                    <img
                      src={logo.src}
                      alt={`${logo.name} logo`}
                      className="max-h-full max-w-full object-contain"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Schools */}
          <div className="mt-14">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground text-center mb-8">
              Schools
            </h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Aditya Academy",
                "Alipore Girls and Boys",
                "B.E. College Model School",
                "BAS",
                "Beleghata Desabandhu Girls High School",
                "DBV",
                "De Paul School",
                "Jodhpur Girls",
                "Mohispota Girls",
                "Santoshpur Rishi Aurobindo Balike Vidyapith",
                "Silver Point School",
                "ZMLS",
              ].map((school, i) => (
                <div
                  key={school}
                  className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 min-h-16 shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-[1.03] hover:shadow-lg animate-fade-in"
                  style={{ animationDelay: `${i * 60}ms`, animationFillMode: "both" }}
                >
                  <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-light text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                      <path d="M6 12v5c3 3 9 3 12 0v-5" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-foreground leading-snug">{school}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-14 text-center text-sm text-muted-foreground max-w-2xl mx-auto text-balance">
            We proudly collaborate with organizations dedicated to emotional well-being, education, healthcare, and community impact.
          </p>
        </div>
      </section>




      {/* Donation / Payment Section */}
      <section id="donate" className="px-4 py-20 sm:px-6 lg:px-8 bg-card border-y border-border">
        <div className="mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-background shadow-card">
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-teal-light/30 via-transparent to-coral-light/20" />
            <div className="px-6 py-16 text-center sm:px-12">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground mb-6">
                🙏 100% of donations fund our programs
              </div>
              <h2 className="section-heading text-[2rem] sm:text-[2.25rem] md:text-5xl font-semibold tracking-tight text-foreground text-balance leading-[1.15]">
                Be Part of a More Emotionally Resilient World
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-balance">
                Your donation helps make preventive emotional care accessible to those who need it most. Every contribution supports elderly care, school emotional well-being programs, and compassionate care for cancer warriors and their families.
              </p>
              <div className="mt-10 flex flex-col items-center gap-4">
                
                <a
                  href="https://razorpay.me/@SOUNDNMINDFOUNDATION"
                  className="mt-4 inline-flex items-center justify-center rounded-xl bg-primary px-10 py-4 text-lg font-bold text-primary-foreground shadow-cta transition-all hover:scale-105 hover:bg-primary/90"
                >
                  Donate Securely via Razorpay
                  <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <p className="mt-3 text-sm text-muted-foreground">
                  All donations are tax-exempt under Section 80G
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
}

function BenefitCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="group rounded-2xl border border-border bg-background p-7 shadow-card transition-all hover:shadow-lg hover:-translate-y-1">
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teal-light text-2xl transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
    </div>
  );
}

function DonationAmount({ amount }: { amount: string }) {
  return (
    <button className="rounded-xl border-2 border-border bg-background px-6 py-3 text-base font-semibold text-foreground transition-all hover:border-primary hover:bg-teal-light hover:text-primary">
      {amount}
    </button>
  );
}
