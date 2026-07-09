import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useState } from "react";
import { Mail, Phone, MapPin, MessageCircle, Send, Heart, Sparkles } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Sound ’N’ Mind Foundation" },
      { name: "description", content: "Get in touch with Sound ’N’ Mind Foundation. We would love to hear from you about partnerships, training, volunteering, or emotional well-being initiatives." },
      { property: "og:title", content: "Contact | Sound ’N’ Mind Foundation" },
      { property: "og:description", content: "Get in touch with Sound ’N’ Mind Foundation about partnerships, training, volunteering, or emotional well-being initiatives." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Contact | Sound ’N’ Mind Foundation" },
      { name: "twitter:description", content: "Get in touch with Sound ’N’ Mind Foundation." },
    ],
  }),
  component: ContactPage,
});

const SOCIAL_LINKS = [
  { label: "X (Twitter)", href: "#", icon: "𝕏" },
  { label: "Facebook", href: "#", icon: "f" },
  { label: "Instagram", href: "#", icon: "📷" },
  { label: "YouTube", href: "#", icon: "▶️" },
];

function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder: Google Form integration not configured yet.
    setSubmitted(true);
  };

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
            <Heart className="h-4 w-4" />
            We are here for you
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl text-balance leading-[1.1]">
            Contact
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl text-balance">
            Whether you are exploring partnership, training, volunteering, or simply want to learn more about our work, we would love to hear from you.
          </p>
        </div>
      </section>

      {/* Let's Connect */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground mb-4">
                <Sparkles className="h-4 w-4" />
                Let’s Connect
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance mb-6">
                Let’s Connect
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground text-balance mb-6">
                Whether you are exploring partnership, training, volunteering, or simply want to learn more about our work, we would love to hear from you.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground text-balance">
                Start a conversation with us and take the first step towards emotional well-being, collaboration, and meaningful connection.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-8 shadow-card">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-coral-light text-coral">
                <MessageCircle className="h-7 w-7" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                We would love to hear from you
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                Our team is here to support conversations around partnerships, training programs, volunteering opportunities, and emotional well-being initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section id="enquiry" className="px-4 py-20 sm:px-6 lg:px-8 bg-card border-y border-border">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5 text-sm text-muted-foreground mb-4">
              <Send className="h-4 w-4" />
              Start a Conversation
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Start a Conversation
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Fill in the form below and we will get back to you as soon as we can.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-background p-6 sm:p-10 shadow-card">
            {submitted ? (
              <div className="text-center py-12">
                <div className="mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-teal-light text-teal">
                  <Heart className="h-8 w-8" strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">
                  Thank you for reaching out
                </h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  We have received your message and will be in touch soon. In the meantime, feel free to explore our work or academy.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="/our-work"
                    className="inline-flex items-center justify-center rounded-xl border-2 border-border bg-background px-8 py-3 text-base font-semibold text-foreground transition-all hover:bg-muted hover:scale-105"
                  >
                    Explore Our Work
                  </a>
                  <a
                    href="/academy"
                    className="inline-flex items-center justify-center rounded-xl bg-primary px-8 py-3 text-base font-semibold text-primary-foreground shadow-cta transition-all hover:scale-105 hover:bg-primary/90"
                  >
                    Explore Academy
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-foreground">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formState.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can support you..."
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background transition-all resize-none"
                  />
                </div>
                <div className="rounded-xl border border-dashed border-border bg-muted/50 p-4 text-center">
                  <p className="text-sm text-muted-foreground">
                    Google Form integration placeholder — this form will be connected to our enquiry system soon.
                  </p>
                </div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-xl bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-cta transition-all hover:scale-[1.02] hover:bg-primary/90 sm:w-auto"
                >
                  Start a Conversation
                  <Send className="ml-2 h-5 w-5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Contact Details */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground mb-4">
              <Mail className="h-4 w-4" />
              Reach Us
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Contact Details
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Here is how you can reach us directly.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-border bg-card p-8 text-center shadow-card transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="mx-auto mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-light text-teal">
                <Mail className="h-7 w-7" strokeWidth={2} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Email</h3>
              <a
                href="mailto:hello@soundnmind.org"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                hello@soundnmind.org
              </a>
            </div>
            <div className="rounded-2xl border border-border bg-card p-8 text-center shadow-card transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="mx-auto mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-coral-light text-coral">
                <Phone className="h-7 w-7" strokeWidth={2} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Phone</h3>
              <a
                href="tel:+919876543210"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                +91 98765 43210
              </a>
            </div>
            <div className="rounded-2xl border border-border bg-card p-8 text-center shadow-card transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="mx-auto mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-light text-teal">
                <MapPin className="h-7 w-7" strokeWidth={2} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Address</h3>
              <p className="text-muted-foreground">
                42, Lotus Enclave, Andheri East, Mumbai — 400069
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-16 rounded-2xl border border-border bg-card p-8 sm:p-12 shadow-card">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold tracking-tight text-foreground text-balance mb-3">
                Follow Our Journey
              </h3>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Stay connected with our stories, impact updates, and community moments.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="grid h-14 w-14 place-items-center rounded-2xl bg-muted text-2xl text-foreground hover:bg-primary hover:text-primary-foreground transition-all hover:scale-105"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
