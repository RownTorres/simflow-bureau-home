import type { Metadata } from "next";
import {
  Check,
  Inbox,
  FileSearch,
  Video,
  Linkedin,
  Facebook,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { TikTokIcon } from "@/components/ui/TikTokIcon";

export const metadata: Metadata = {
  title: "You're Booked",
  description:
    "Your strategy call is confirmed. Here's what happens next and how to get the most out of our 30 minutes together.",
  robots: { index: false, follow: false },
};

const steps = [
  {
    icon: Inbox,
    title: "Check your inbox",
    body: "A calendar invite and confirmation email with the meeting link are on their way. If it's not there in a few minutes, check your spam folder.",
  },
  {
    icon: FileSearch,
    title: "We do our homework",
    body: "Before we meet, we look at how your business runs so the call is about your operations, not a generic pitch you've heard before.",
  },
  {
    icon: Video,
    title: "Show up ready",
    body: "Hop on at your scheduled time. Thirty minutes, camera optional, and you leave with a clear picture of what to automate first.",
  },
];

const prep = [
  "Know your biggest time sink - the task you'd pay to never touch again.",
  "Have a rough sense of your monthly lead volume and where those leads come from.",
  "Bring one goal for the next 90 days so we can build the roadmap around it.",
];

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/roannetorres/",
    icon: Linkedin,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/roanmtschk/",
    icon: Facebook,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@gohighlevel_mama",
    icon: TikTokIcon,
  },
];

export default function ThankYouPage() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden pt-28 md:pt-32">
        <div
          aria-hidden="true"
          className="animate-glow pointer-events-none absolute left-1/2 top-[-18rem] h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[150px]"
        />

        {/* Confirmation hero */}
        <section className="relative mx-auto max-w-container px-6 pb-4 pt-10 text-center lg:px-10 md:pt-16">
          <div className="mx-auto max-w-2xl">
            {/* Animated success badge */}
            <div className="relative mx-auto mb-8 flex h-24 w-24 items-center justify-center">
              <span
                aria-hidden="true"
                className="animate-ring-ripple absolute inset-0 rounded-full border border-accent/40"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-full bg-accent/15 blur-2xl"
              />
              <span className="animate-check-pop relative flex h-20 w-20 items-center justify-center rounded-full bg-accent shadow-lift">
                <Check
                  className="h-10 w-10 text-ink"
                  strokeWidth={2.75}
                  aria-hidden="true"
                />
              </span>
            </div>

            <p className="inline-flex items-center gap-2 rounded-full border border-edge bg-card/60 px-4 py-1.5 font-heading text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Booking Confirmed
            </p>
            <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">
              You&apos;re all set. Your call is{" "}
              <span className="text-accent">booked.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-body">
              Nice work taking the first step. The details are already landing
              in your inbox. Here&apos;s exactly what happens between now and our
              30 minutes together.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="/#work" withArrow className="px-8 py-3.5">
                See recent work
              </Button>
              <Button
                href="/"
                variant="secondary"
                className="px-8 py-3.5"
              >
                Back to homepage
              </Button>
            </div>
          </div>
        </section>

        {/* What happens next */}
        <section className="relative mx-auto max-w-container px-6 py-16 lg:px-10 md:py-24">
          <Reveal>
            <h2 className="text-center font-heading text-xs font-semibold uppercase tracking-[0.18em] text-muted">
              What happens next
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 120}>
                <div className="group relative h-full overflow-hidden rounded-card border border-edge bg-raised/60 p-8 shadow-card transition-colors duration-300 hover:border-accent/40">
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-edge bg-card text-accent transition-colors duration-300 group-hover:border-accent/50">
                      <step.icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="font-heading text-5xl font-bold leading-none text-edge">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-heading">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-body">
                    {step.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Come prepared */}
        <section className="relative mx-auto max-w-container px-6 pb-20 lg:px-10 md:pb-28">
          <Reveal>
            <div className="relative overflow-hidden rounded-panel border border-edge bg-raised/60 p-8 shadow-lift md:p-12">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent"
              />
              <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
                <div className="lg:col-span-5">
                  <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                    Make the 30 minutes{" "}
                    <span className="text-accent">count.</span>
                  </h2>
                  <p className="mt-5 max-w-md text-base leading-relaxed text-body">
                    You don&apos;t need to prepare a thing to show up. But if you
                    want to walk away with a roadmap you can act on this week,
                    have these three in mind.
                  </p>
                </div>

                <ul className="space-y-4 lg:col-span-7">
                  {prep.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-4 rounded-card border border-edge bg-card/50 p-5"
                    >
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                        <Check
                          className="h-3.5 w-3.5"
                          strokeWidth={3}
                          aria-hidden="true"
                        />
                      </span>
                      <span className="text-sm leading-relaxed text-body">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Follow along while you wait */}
        <section className="relative mx-auto max-w-container px-6 pb-24 text-center lg:px-10 md:pb-32">
          <Reveal>
            <p className="text-sm text-muted">
              While you wait, see how we think about systems day to day.
            </p>
            <div className="mt-5 flex items-center justify-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-edge text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
