import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

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
      <section className="relative overflow-hidden px-4 pt-16 pb-20 sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-teal-light/40 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 h-[400px] w-[600px] rounded-full bg-coral-light/30 blur-3xl" />
        </div>
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground mb-8">
            <span className="inline-block h-2 w-2 rounded-full bg-primary animate-pulse" />
            10,000+ lives touched since 2018
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl text-balance leading-[1.1]">
            Creating{" "}
            <span className="text-primary">Emotionally Resilient</span>{" "}
            Individuals &{" "}
            <span className="text-accent">Compassionate Communities</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl text-balance">
            Emotional literacy, mindfulness, sound-based healing, and human connection.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/our-work"
              className="inline-flex items-center justify-center rounded-xl bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-cta transition-all hover:scale-105 hover:bg-primary/90"
            >
              Explore Our Work
            </a>
            <a
              href="#donate"
              className="inline-flex items-center justify-center rounded-xl border-2 border-border bg-background px-8 py-4 text-base font-semibold text-foreground transition-all hover:bg-muted hover:scale-105"
            >
              Donate for Impact
            </a>
          </div>
          <div className="mt-12 flex items-center justify-center gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-foreground">10,000+</div>
              <div className="text-sm text-muted-foreground">Lives Touched</div>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <div className="text-3xl font-bold text-foreground">200+</div>
              <div className="text-sm text-muted-foreground">Schools & Centres</div>
            </div>
            <div className="hidden h-10 w-px bg-border sm:block" />
            <div className="hidden sm:block">
              <div className="text-3xl font-bold text-foreground">50+</div>
              <div className="text-sm text-muted-foreground">Partner Hospitals</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground mb-6">
                About Sound N Mind
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                Where Sound Meets Mind, Healing Begins
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-balance">
                Sound 'N' Mind Foundation works at the intersection of emotional literacy, mindfulness, sound-based healing, and human connection. Our purpose is simple yet profound: to support emotional well-being across the lifespan through preventive, ethical, and non-clinical approaches.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="rounded-xl border border-border bg-card p-5 shadow-card">
                  <div className="text-2xl font-bold text-primary">2,500+</div>
                  <div className="text-sm text-muted-foreground">Patients & seniors supported</div>
                </div>
                <div className="rounded-xl border border-border bg-card p-5 shadow-card">
                  <div className="text-2xl font-bold text-accent">7,500+</div>
                  <div className="text-sm text-muted-foreground">Therapy & counselling sessions</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-teal-light/60 to-coral-light/40 blur-2xl" />
              <div className="relative rounded-2xl border border-border bg-card p-8 shadow-card">
                <blockquote className="text-xl font-medium leading-relaxed text-foreground italic">
                  "Sound N Mind brought music and meaning back into my mother's life. We finally felt seen and supported through her dementia journey."
                </blockquote>
                <div className="mt-6 flex items-center gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-muted text-lg">👤</div>
                  <div>
                    <div className="font-semibold text-foreground">Priya Sharma</div>
                    <div className="text-sm text-muted-foreground">Caregiver, Bengaluru</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academy Section */}
      <section id="academy" className="px-4 py-20 sm:px-6 lg:px-8 bg-card border-y border-border">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5 text-sm text-muted-foreground mb-4">
              🎓 The Academy
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Sound N Mind Academy
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Certified training programs in music therapy, mindfulness, and emotional wellbeing — for educators, caregivers, and changemakers.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <BenefitCard
              icon="🎵"
              title="Music Therapy Certification"
              description="Evidence-based training to use music as a therapeutic tool across age groups and conditions."
            />
            <BenefitCard
              icon="🧘"
              title="Mindfulness for Educators"
              description="Equip teachers and school counsellors with practical mindfulness tools for classrooms."
            />
            <BenefitCard
              icon="🤲"
              title="Caregiver Wellbeing"
              description="Self-care, resilience, and burnout prevention workshops for family and professional caregivers."
            />
          </div>
          <div className="mt-12 text-center">
            <a
              href="/academy"
              className="inline-flex items-center justify-center rounded-xl border-2 border-border bg-background px-8 py-4 text-base font-semibold text-foreground transition-all hover:bg-muted hover:scale-105"
            >
              Explore Academy →
            </a>
          </div>
        </div>
      </section>

      {/* Our Work Section */}
      <section id="our-work" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Our Work
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Three focus areas. One shared mission — building emotional resilience where it matters most.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <a href="/our-work#senior-care" className="group rounded-2xl border border-border bg-card p-7 shadow-card transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teal-light text-2xl group-hover:bg-teal/20 transition-colors">👵</div>
              <h3 className="text-lg font-semibold text-foreground">Senior & Dementia Care</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Music-based therapy and engagement programs for elders living with dementia, Alzheimer's, and loneliness.
              </p>
            </a>
            <a href="/our-work#schools" className="group rounded-2xl border border-border bg-card p-7 shadow-card transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teal-light text-2xl group-hover:bg-teal/20 transition-colors">🏫</div>
              <h3 className="text-lg font-semibold text-foreground">Schools</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Social-emotional learning, mindfulness, and creative arts curricula that nurture resilient young minds.
              </p>
            </a>
            <a href="/our-work#cancer-warriors" className="group rounded-2xl border border-border bg-card p-7 shadow-card transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teal-light text-2xl group-hover:bg-teal/20 transition-colors">🎗️</div>
              <h3 className="text-lg font-semibold text-foreground">Cancer Warriors & Caregivers</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Counselling, support circles, and music therapy for patients and the families walking with them.
              </p>
            </a>
          </div>
          <div className="mt-12 text-center">
            <a
              href="/our-work"
              className="inline-flex items-center justify-center rounded-xl border-2 border-border bg-background px-8 py-4 text-base font-semibold text-foreground transition-all hover:bg-muted hover:scale-105"
            >
              View all programs →
            </a>
          </div>
        </div>
      </section>

      {/* YouTube Video Section */}
      <section id="videos" className="px-4 py-20 sm:px-6 lg:px-8 bg-card border-y border-border">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Stories & Impact
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Real stories from the people whose lives we've had the privilege to touch.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <VideoCard
              title="A Song She Remembered: Dementia & Music Therapy"
              videoId="dQw4w9WgXcQ"
              description="How a familiar melody brought back memories for an 82-year-old grandmother."
            />
            <VideoCard
              title="Breaking the Silence: Mental Health in Schools"
              videoId="dQw4w9WgXcQ"
              description="How our school programs are changing the conversation around emotional wellbeing."
            />
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section id="get-involved" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Get Involved
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Every hand, heart, and rupee helps us reach one more person in need.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div id="partner" className="rounded-2xl border border-border bg-card p-7 shadow-card">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teal-light text-2xl">🤝</div>
              <h3 className="text-lg font-semibold text-foreground">Partner With Us</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Bring our programs to your school, hospital, or care facility through long-term partnerships.
              </p>
              <a href="/get-involved#partner" className="mt-4 inline-block text-sm font-semibold text-primary hover:underline">Become a partner →</a>
            </div>
            <div id="volunteer" className="rounded-2xl border border-border bg-card p-7 shadow-card">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teal-light text-2xl">🙋</div>
              <h3 className="text-lg font-semibold text-foreground">Volunteer</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Lend your time and talent — as a musician, counsellor, facilitator, or behind-the-scenes hero.
              </p>
              <a href="/get-involved#volunteer" className="mt-4 inline-block text-sm font-semibold text-primary hover:underline">Sign up to volunteer →</a>
            </div>
            <div className="rounded-2xl border border-border bg-card p-7 shadow-card">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teal-light text-2xl">💛</div>
              <h3 className="text-lg font-semibold text-foreground">Donate</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Fund therapy sessions, training, and care programs that change lives every day.
              </p>
              <a href="/get-involved#donate" className="mt-4 inline-block text-sm font-semibold text-primary hover:underline">Donate now →</a>
            </div>
          </div>
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
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                Be the Reason Someone Smiles Today
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-balance">
                Your donation funds music therapy sessions, school programs, and care for cancer warriors and their families.
              </p>
              <div className="mt-10 flex flex-col items-center gap-4">
                <div className="flex flex-wrap justify-center gap-3">
                  <DonationAmount amount="₹500" />
                  <DonationAmount amount="₹1,000" />
                  <DonationAmount amount="₹2,500" />
                  <DonationAmount amount="₹5,000" />
                  <DonationAmount amount="Other" />
                </div>
                <a
                  href="https://razorpay.com"
                  target="_blank"
                  rel="noopener noreferrer"
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

      {/* Enquiry / Google Form Section */}
      <section id="enquiry" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Contact Us
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Have questions about our programs, want to partner, or volunteer? We'd love to hear from you.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-card">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSf-example/viewform?embedded=true"
              width="100%"
              height="700"
              title="Contact Form"
              className="border-0"
            >
              Loading…
            </iframe>
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

function VideoCard({ title, videoId, description }: { title: string; videoId: string; description: string }) {
  return (
    <div className="rounded-2xl border border-border bg-background overflow-hidden shadow-card transition-all hover:shadow-lg">
      <div className="aspect-video bg-muted">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="h-full w-full"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
      </div>
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
