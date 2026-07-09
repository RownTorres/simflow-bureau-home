import { Compass, Map, Hammer, Rocket, RefreshCw } from "lucide-react";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";

const steps = [
  {
    icon: Compass,
    number: "01",
    title: "Discovery",
    description:
      "We map how your business actually runs today: where leads come from, where they stall, and which tasks eat your team's hours.",
    duration: "Week 1",
  },
  {
    icon: Map,
    number: "02",
    title: "Strategy",
    description:
      "You get an automation roadmap ranked by impact. We agree on scope, timeline, and the metrics that define success before anything gets built.",
    duration: "Week 1-2",
  },
  {
    icon: Hammer,
    number: "03",
    title: "Build",
    description:
      "We build your CRM, workflows, AI employees, and integrations in a staging environment. You see progress weekly, not at the end.",
    duration: "Week 2-4",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Launch",
    description:
      "Every automation is tested against real scenarios before it touches a live lead. Then we flip the switch and train your team.",
    duration: "Week 4-5",
  },
  {
    icon: RefreshCw,
    number: "05",
    title: "Optimize",
    description:
      "We watch the data, tune what underperforms, and expand what works. Your system gets sharper every month it runs.",
    duration: "Ongoing",
  },
];

export function Process() {
  return (
    <section
      id="process"
      className="scroll-mt-24 py-24 md:py-32"
      aria-labelledby="process-heading"
    >
      <div className="mx-auto max-w-container px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <Reveal>
                <SectionHeading
                  eyebrow="Process"
                  id="process-heading"
                  title={
                    <>
                      From chaos to system{" "}
                      <span className="text-accent">in five steps</span>
                    </>
                  }
                  description="A proven path from first call to a business that runs itself. Most builds go live in 4 to 5 weeks."
                />
              </Reveal>
            </div>
          </div>

          <ol className="relative lg:col-span-8">
            <div
              aria-hidden="true"
              className="absolute bottom-8 left-[27px] top-8 w-px bg-gradient-to-b from-accent/60 via-edge to-edge"
            />
            {steps.map((step, i) => (
              <Reveal key={step.number} delay={i * 100}>
                <li className="group relative flex gap-6 pb-12 last:pb-0 md:gap-8">
                  <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-edge bg-card shadow-card transition-all duration-500 ease-out-expo group-hover:border-accent/50 group-hover:bg-accent/10">
                    <step.icon className="h-5 w-5 text-accent" />
                  </span>
                  <div className="pt-1">
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                      <span className="font-heading text-xs font-bold tracking-[0.2em] text-accent">
                        {step.number}
                      </span>
                      <h3 className="text-xl font-bold">{step.title}</h3>
                      <span className="rounded-full border border-edge bg-raised px-3 py-0.5 text-xs text-muted">
                        {step.duration}
                      </span>
                    </div>
                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-body md:text-base">
                      {step.description}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
