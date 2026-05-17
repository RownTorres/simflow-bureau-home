import { Button } from "./ui/Button";
import { PhoneMockup } from "./ui/PhoneMockup";
import { BOOKING_URL } from "@/lib/links";

export function Hero() {
  return (
    <section className="relative bg-cream" aria-labelledby="hero-heading">
      <div className="mx-auto grid max-w-container items-end gap-16 px-6 pb-24 pt-20 md:pt-32 lg:grid-cols-12 lg:gap-12 lg:px-12 lg:pb-32">
        <div className="lg:col-span-7">
          <p className="flex items-center gap-4 text-xs uppercase tracking-[0.25em] text-ink-500 opacity-0 [animation-delay:0ms] animate-fade-up">
            <span className="font-medium text-gold-dark">001</span>
            <span className="h-px w-12 bg-ink-300" />
            <span>Build Smarter Systems</span>
          </p>

          <h1
            id="hero-heading"
            className="mt-10 text-5xl font-light leading-[0.95] tracking-tightest text-ink-900 sm:text-6xl md:text-7xl lg:text-[6.5rem] opacity-0 [animation-delay:150ms] animate-fade-up"
          >
            Stop chasing leads at 9pm. Your CRM{" "}
            <em className="not-italic font-normal italic text-gold-dark">
              should be doing it.
            </em>
          </h1>

          <p className="mt-12 max-w-lg text-lg font-normal leading-relaxed text-ink-500 opacity-0 [animation-delay:300ms] animate-fade-up">
            We build Go HighLevel systems that follow up for you, recover
            ghosted leads, and book calls overnight. Clients average 90% less
            manual follow-up within 30 days.
          </p>

          <div className="mt-12 flex flex-col items-start gap-6 sm:flex-row sm:items-center opacity-0 [animation-delay:450ms] animate-fade-up">
            <Button href={BOOKING_URL} external variant="primary" withArrow>
              Book System Audit
            </Button>
            <Button href="#services" variant="ghost">
              See how it works
            </Button>
          </div>

          <p className="mt-6 text-sm font-normal text-ink-500 opacity-0 [animation-delay:600ms] animate-fade-up">
            45-minute working session. No pitch. You leave with a plan.
          </p>
        </div>

        <figure className="relative lg:col-span-5 opacity-0 [animation-delay:750ms] animate-fade-up">
          <PhoneMockup />
          <figcaption className="mt-8 flex items-baseline justify-between text-xs uppercase tracking-[0.2em] text-ink-500">
            <span>The system, working</span>
            <span className="text-gold-dark">9:14 PM</span>
          </figcaption>
        </figure>
      </div>

      <div className="mx-auto h-px max-w-container bg-ink-100 lg:px-12" />
    </section>
  );
}
