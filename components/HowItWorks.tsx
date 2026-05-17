import { SectionHeading } from "./ui/SectionHeading";

const steps = [
  {
    step: "01",
    title: "Audit",
    description:
      "We map your pipeline, tools, and follow-up gaps in one working session. You leave with a clear plan, even if you never hire us.",
  },
  {
    step: "02",
    title: "Build",
    description:
      "We build your sub-account, pipelines, automations, and nurture sequences using your real offers and your real voice.",
  },
  {
    step: "03",
    title: "Launch",
    description:
      "We launch, train your team, and tune the system based on the first 30 days of data so the workflows keep getting sharper.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how"
      className="border-t border-ink-100 bg-cream py-24 md:py-32"
      aria-labelledby="process-heading"
    >
      <div className="mx-auto max-w-container px-6 lg:px-12">
        <SectionHeading
          index="005"
          eyebrow="The Process"
          title={
            <span id="process-heading">
              From chaos to{" "}
              <em className="not-italic font-normal italic text-gold-dark">
                automated
              </em>{" "}
              in three steps.
            </span>
          }
        />

        <ol className="mt-20 divide-y divide-ink-100 border-t border-ink-100">
          {steps.map((step, i) => {
            const reversed = i % 2 === 1;
            return (
              <li
                key={step.step}
                className="grid grid-cols-12 items-baseline gap-6 py-20 md:gap-12 md:py-28"
              >
                <span
                  className={`col-span-12 text-7xl font-light leading-none tracking-tightest text-gold-dark md:col-span-3 md:text-8xl lg:text-9xl ${
                    reversed ? "md:order-3 md:text-right" : ""
                  }`}
                  aria-hidden="true"
                >
                  {step.step}
                </span>

                <div
                  className={`col-span-12 md:col-span-4 ${
                    reversed ? "md:order-2 md:text-right" : ""
                  }`}
                >
                  <p className="text-xs font-medium uppercase tracking-[0.25em] text-ink-500">
                    Step {step.step}
                  </p>
                  <h3 className="mt-4 text-3xl font-light leading-[1.05] tracking-tightest text-ink-900 md:text-5xl">
                    {step.title}.
                  </h3>
                </div>

                <p
                  className={`col-span-12 max-w-md text-base font-normal leading-relaxed text-ink-500 md:col-span-5 md:text-lg ${
                    reversed ? "md:order-1" : ""
                  }`}
                >
                  {step.description}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
