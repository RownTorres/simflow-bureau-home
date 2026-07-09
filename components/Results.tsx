import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { Counter } from "./ui/Counter";

const stats = [
  {
    value: 300,
    suffix: "+",
    label: "Automations Built",
    detail: "Across CRM, marketing, sales, and operations",
  },
  {
    value: 1000,
    suffix: "+",
    label: "Hours Saved",
    detail: "Manual work removed from client teams every month",
  },
  {
    value: 95,
    suffix: "%",
    label: "Automation Accuracy",
    detail: "Workflows that fire correctly, tested before launch",
  },
  {
    value: 3,
    suffix: "x",
    label: "Faster Lead Response",
    detail: "From hours of waiting to minutes, around the clock",
  },
];

export function Results() {
  return (
    <section
      id="results"
      className="scroll-mt-24 py-24 md:py-32"
      aria-labelledby="results-heading"
    >
      <div className="mx-auto max-w-container px-6 lg:px-10">
        <Reveal>
          <SectionHeading
            eyebrow="Results"
            id="results-heading"
            title={
              <>
                Numbers that come from{" "}
                <span className="text-accent">systems, not luck</span>
              </>
            }
          />
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-panel border border-edge bg-edge sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 100} className="h-full">
              <div className="group h-full bg-card p-8 transition-colors duration-500 hover:bg-raised">
                <p className="font-heading text-5xl font-bold tracking-tight text-heading">
                  <Counter
                    value={stat.value}
                    suffix={stat.suffix}
                    className="tabular-nums"
                  />
                </p>
                <p className="mt-3 font-heading text-sm font-semibold uppercase tracking-wider text-accent">
                  {stat.label}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {stat.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
