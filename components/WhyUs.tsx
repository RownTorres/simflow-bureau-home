import { Clock, TrendingUp, Workflow } from "lucide-react";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";

const reasons = [
  {
    icon: Clock,
    title: "Save Time",
    metric: "20+ hrs",
    metricLabel: "back per week",
    description:
      "Follow-ups, reminders, data entry, and scheduling run on autopilot. The hours you spend on admin go back into selling, delivering, and thinking.",
  },
  {
    icon: TrendingUp,
    title: "Increase Revenue",
    metric: "5 min",
    metricLabel: "lead response time",
    description:
      "Speed wins deals. When every lead gets an instant, personal response and a booking link, more of them turn into paying customers.",
  },
  {
    icon: Workflow,
    title: "Reduce Manual Work",
    metric: "90%",
    metricLabel: "less repetitive admin",
    description:
      "If a task happens twice a week and follows rules, it should not need a human. We map your operations and automate everything that repeats.",
  },
];

export function WhyUs() {
  return (
    <section className="py-24 md:py-32" aria-labelledby="why-heading">
      <div className="mx-auto max-w-container px-6 lg:px-10">
        <Reveal>
          <SectionHeading
            eyebrow="Why Simflow Bureau"
            id="why-heading"
            title={
              <>
                Systems that pay for themselves{" "}
                <span className="text-accent">in the first month</span>
              </>
            }
            description="We do not sell software setups. We build outcomes: time back, faster responses, more booked calls."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {reasons.map((reason, i) => (
            <Reveal key={reason.title} delay={i * 120}>
              <article className="group relative h-full overflow-hidden rounded-panel border border-edge bg-card p-8 shadow-card transition-all duration-500 ease-out-expo hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-lift">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent/5 blur-2xl transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                />
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 transition-transform duration-500 ease-out-expo group-hover:scale-110">
                  <reason.icon className="h-5 w-5 text-accent" />
                </span>
                <h3 className="mt-6 text-xl font-bold">{reason.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-body">
                  {reason.description}
                </p>
                <p className="mt-6 border-t border-edge pt-5">
                  <span className="font-heading text-2xl font-bold text-accent">
                    {reason.metric}
                  </span>{" "}
                  <span className="text-sm text-muted">
                    {reason.metricLabel}
                  </span>
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
