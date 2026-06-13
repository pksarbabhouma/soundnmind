import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sahayak Foundation | Cancer & Mental Health Support" },
      { name: "description", content: "Supporting cancer patients and mental health warriors with care, compassion, and community. Donate today to make a real difference." },
      { property: "og:title", content: "Sahayak Foundation | Cancer & Mental Health Support" },
      { property: "og:description", content: "Supporting cancer patients and mental health warriors with care, compassion, and community." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Sahayak Foundation | Cancer & Mental Health Support" },
      { name: "twitter:description", content: "Supporting cancer patients and mental health warriors with care, compassion, and community." },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#" className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-lg bg-primary text-primary-foreground text-lg font-bold">
              S
            </div>
            <span className="text-lg font-semibold tracking-tight text-foreground">Sahayak</span>
          </a>
          <div className="hidden items-center gap-6 sm:flex">
            <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">About</a>
            <a href="#benefits" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Impact</a>
            <a href="#videos" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Stories</a>
            <a href="#enquiry" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Contact</a>
            <a
              href="#donate"
              className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-cta hover:bg-primary/90 transition-colors"
            >
              Donate Now
            </a>
          </div>
          <a
            href="#donate"
            className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-cta hover:bg-primary/90 transition-colors sm:hidden"
          >
            Donate
          </a>
        </div>
      </nav>

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
            Standing with{" "}
            <span className="text-primary">Cancer</span> &{" "}
            <span className="text-accent">Mental Health</span>{" "}
            Warriors
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl text-balance">
            We provide compassionate care, financial support, and a strong community for patients and families navigating cancer and mental health challenges.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#donate"
              className="inline-flex items-center justify-center rounded-xl bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-cta transition-all hover:scale-105 hover:bg-primary/90"
            >
              Donate Now — Save a Life
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-xl border-2 border-border bg-background px-8 py-4 text-base font-semibold text-foreground transition-all hover:bg-muted hover:scale-105"
            >
              Learn More
            </a>
          </div>
          <div className="mt-12 flex items-center justify-center gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-foreground">₹4.2Cr+</div>
              <div className="text-sm text-muted-foreground">Funds Raised</div>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <div className="text-3xl font-bold text-foreground">10,000+</div>
              <div className="text-sm text-muted-foreground">Lives Touched</div>
            </div>
            <div className="hidden h-10 w-px bg-border sm:block" />
            <div className="hidden sm:block">
              <div className="text-3xl font-bold text-foreground">50+</div>
              <div className="text-sm text-muted-foreground">Partner Hospitals</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits / Impact Section */}
      <section id="benefits" className="px-4 py-20 sm:px-6 lg:px-8 bg-card border-y border-border">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Why Your Support Matters
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Every contribution directly funds life-changing programs for patients and families in need.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <BenefitCard
              icon="🎗️"
              title="Financial Aid for Treatment"
              description="Direct funding for chemotherapy, radiation, surgeries, and critical medications for underprivileged cancer patients."
            />
            <BenefitCard
              icon="🧠"
              title="Free Mental Health Counselling"
              description="Professional counselling and therapy sessions for patients and caregivers battling anxiety, depression, and trauma."
            />
            <BenefitCard
              icon="🏠"
              title="Shelter & Care Facilities"
              description="Safe accommodation and nutritious meals for patients travelling from rural areas for treatment in cities."
            />
            <BenefitCard
              icon="🤝"
              title="Support Communities"
              description="Peer support groups where patients and survivors share experiences, hope, and encouragement."
            />
            <BenefitCard
              icon="📚"
              title="Awareness & Education"
              description="Workshops and campaigns to break stigma around mental health and promote early cancer detection."
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground mb-6">
                About Sahayak Foundation
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                Compassion in Action Since 2018
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-balance">
                Sahayak Foundation was born from a simple belief: no one should fight cancer or mental illness alone. We bridge the gap between critical care and those who cannot afford it.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-balance">
                From funding life-saving treatments to providing emotional support through counselling, our programs touch every aspect of a patient's journey.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="rounded-xl border border-border bg-card p-5 shadow-card">
                  <div className="text-2xl font-bold text-primary">2,500+</div>
                  <div className="text-sm text-muted-foreground">Cancer patients supported</div>
                </div>
                <div className="rounded-xl border border-border bg-card p-5 shadow-card">
                  <div className="text-2xl font-bold text-accent">7,500+</div>
                  <div className="text-sm text-muted-foreground">Mental health sessions</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-teal-light/60 to-coral-light/40 blur-2xl" />
              <div className="relative rounded-2xl border border-border bg-card p-8 shadow-card">
                <blockquote className="text-xl font-medium leading-relaxed text-foreground italic">
                  "Sahayak Foundation gave my mother hope when we had nowhere else to turn. Their team stood by us through every chemo session."
                </blockquote>
                <div className="mt-6 flex items-center gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-muted text-lg">👤</div>
                  <div>
                    <div className="font-semibold text-foreground">Priya Sharma</div>
                    <div className="text-sm text-muted-foreground">Daughter of a cancer survivor</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Video Section */}
      <section id="videos" className="px-4 py-20 sm:px-6 lg:px-8 bg-card border-y border-border">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Stories of Hope
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Real stories from the warriors we've had the privilege to support.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <VideoCard
              title="Rahul's Journey: From Diagnosis to Recovery"
              videoId="dQw4w9WgXcQ"
              description="A 34-year-old software engineer who beat stage 3 lymphoma with our support."
            />
            <VideoCard
              title="Breaking the Silence: Mental Health Matters"
              videoId="dQw4w9WgXcQ"
              description="How our counselling program changed Ananya's life and helped her find her voice again."
            />
          </div>
        </div>
      </section>

      {/* Donation / Payment Section */}
      <section id="donate" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-card">
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-teal-light/30 via-transparent to-coral-light/20" />
            <div className="px-6 py-16 text-center sm:px-12">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5 text-sm text-muted-foreground mb-6">
                🙏 100% of donations go to patient care
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                Be the Reason Someone Smiles Today
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-balance">
                Your donation funds life-saving treatments, counselling sessions, and shelter for patients who have nowhere else to turn.
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
      <section id="enquiry" className="px-4 py-20 sm:px-6 lg:px-8 bg-card border-y border-border">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Get in Touch
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Have questions about our programs, need help, or want to partner with us? Reach out below.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-background overflow-hidden shadow-card">
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

      {/* Footer */}
      <footer className="px-4 py-16 sm:px-6 lg:px-8 bg-navy text-white">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="grid h-9 w-9 place-items-center rounded-lg bg-primary text-primary-foreground text-lg font-bold">
                  S
                </div>
                <span className="text-lg font-semibold">Sahayak Foundation</span>
              </div>
              <p className="text-sm leading-relaxed text-white/70">
                A registered non-profit organization dedicated to supporting cancer patients and mental health warriors across India.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50 mb-4">Programs</h3>
              <ul className="space-y-3 text-sm text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">Cancer Care</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mental Health</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Shelter Program</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Awareness Campaigns</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50 mb-4">Contact</h3>
              <ul className="space-y-3 text-sm text-white/70">
                <li className="flex items-start gap-2">
                  <span>📍</span>
                  <span>42, Lotus Enclave, Andheri East, Mumbai — 400069</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>📞</span>
                  <span>+91 98765 43210</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>✉️</span>
                  <span>hello@sahayakfoundation.org</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50 mb-4">Follow Us</h3>
              <div className="flex gap-3">
                <a href="#" className="grid h-10 w-10 place-items-center rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-lg">𝕏</a>
                <a href="#" className="grid h-10 w-10 place-items-center rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-lg">f</a>
                <a href="#" className="grid h-10 w-10 place-items-center rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-lg">📷</a>
                <a href="#" className="grid h-10 w-10 place-items-center rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-lg">▶️</a>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-white/10 pt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-white/50">
              © 2024 Sahayak Foundation. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-white/50">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">80G Certificate</a>
            </div>
          </div>
        </div>
      </footer>
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
