import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
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


function ContactPage() {


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
            Let’s Connect
          </h1>

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
      <section id="start-a-conversation" className="px-4 py-20 sm:px-6 lg:px-8 bg-card border-y border-border">
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

          <div className="mx-auto w-full max-w-[800px] rounded-2xl border border-border bg-background p-2 sm:p-4 shadow-card">
            <div className="relative w-full overflow-hidden rounded-xl" style={{ height: "1007px" }}>
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSdDleVnrE4SJmibiE3eN2_rFrs-I_LG5yh1i_-7oxa8BQYcUw/viewform?embedded=true"
                title="Sound 'N' Mind Foundation Enquiry Form"
                className="h-full w-full border-0"
                loading="lazy"
              >
                Loading…
              </iframe>
            </div>
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
                href="mailto:soundnmindfoundation@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors break-all"
              >
                soundnmindfoundation@gmail.com
              </a>
            </div>
            <div className="rounded-2xl border border-border bg-card p-8 text-center shadow-card transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="mx-auto mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-coral-light text-coral">
                <Phone className="h-7 w-7" strokeWidth={2} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Phone</h3>
              <a
                href="tel:+919330158041"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                +91 9330158041
              </a>
            </div>
            <div className="rounded-2xl border border-border bg-card p-8 text-center shadow-card transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="mx-auto mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-light text-teal">
                <MapPin className="h-7 w-7" strokeWidth={2} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Address</h3>
              <p className="text-muted-foreground">
                5/A, Second Lane,<br />
                Beside Adabasi Kalyan Sangha,<br />
                Anandapur, Mundapara,<br />
                Kolkata, West Bengal, 700107
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
