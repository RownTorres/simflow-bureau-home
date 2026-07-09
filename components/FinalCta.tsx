import { CalendarCheck, ShieldCheck, Timer } from "lucide-react";
import { Button } from "./ui/Button";
import { Reveal } from "./ui/Reveal";
import { BOOK_PATH } from "@/lib/links";

const assurances = [
  { icon: Timer, text: "30 minutes, no obligation" },
  { icon: CalendarCheck, text: "Walk away with an automation roadmap" },
  { icon: ShieldCheck, text: "No pressure, no scripted pitch" },
];

export function FinalCta() {
  return (
    <section className="relative overflow-hidden py-24 md:py-36" aria-labelledby="cta-heading">
      <div
        aria-hidden="true"
        className="animate-glow pointer-events-none absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent"
      />

      <div className="relative mx-auto max-w-container px-6 text-center lg:px-10">
        <Reveal>
          <h2
            id="cta-heading"
            className="mx-auto max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl"
          >
            Let&apos;s build your{" "}
            <span className="text-accent">intelligent business.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-body">
            Tell us how your business runs today. We&apos;ll show you exactly
            what to automate first and what it will do to your bottom line.
          </p>

          <div className="mt-10">
            <Button
              href={BOOK_PATH}
              withArrow
              className="px-10 py-4 text-base"
            >
              Book Your Free Strategy Session
            </Button>
          </div>

          <ul className="mx-auto mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {assurances.map((item) => (
              <li
                key={item.text}
                className="flex items-center gap-2 text-sm text-muted"
              >
                <item.icon className="h-4 w-4 text-accent" aria-hidden="true" />
                {item.text}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
