import {
  Magnet,
  Database,
  Zap,
  Bot,
  CalendarCheck,
  BadgeDollarSign,
  HeartHandshake,
} from "lucide-react";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";

const nodes = [
  {
    icon: Magnet,
    title: "Lead Capture",
    detail: "Forms, ads, chat, and calls feed one system",
  },
  {
    icon: Database,
    title: "CRM",
    detail: "Contact created, tagged, and assigned instantly",
  },
  {
    icon: Zap,
    title: "Automation",
    detail: "Follow-up starts within 60 seconds",
  },
  {
    icon: Bot,
    title: "AI Qualification",
    detail: "AI asks the right questions, scores the lead",
  },
  {
    icon: CalendarCheck,
    title: "Appointment",
    detail: "Qualified leads book straight into your calendar",
  },
  {
    icon: BadgeDollarSign,
    title: "Sales",
    detail: "Your team shows up to warm, prepared prospects",
  },
  {
    icon: HeartHandshake,
    title: "Follow-up",
    detail: "Reviews, referrals, and repeat business on autopilot",
  },
];

function Connector() {
  return (
    <div
      aria-hidden="true"
      className="flex items-center justify-center self-center"
    >
      {/* Vertical connector (mobile) */}
      <svg
        viewBox="0 0 2 32"
        className="h-8 w-0.5 lg:hidden"
        fill="none"
        preserveAspectRatio="none"
      >
        <path d="M1 0 V 32" stroke="rgb(var(--color-edge))" strokeWidth="2" />
        <path
          d="M1 0 V 32"
          stroke="rgb(var(--color-accent))"
          strokeWidth="2"
          className="animate-dash"
        />
      </svg>
      {/* Horizontal connector (desktop) */}
      <svg
        viewBox="0 0 40 2"
        className="hidden h-0.5 w-8 lg:block xl:w-10"
        fill="none"
        preserveAspectRatio="none"
      >
        <path d="M0 1 H 40" stroke="rgb(var(--color-edge))" strokeWidth="2" />
        <path
          d="M0 1 H 40"
          stroke="rgb(var(--color-accent))"
          strokeWidth="2"
          className="animate-dash"
        />
      </svg>
    </div>
  );
}

export function AutomationFlow() {
  return (
    <section
      className="relative overflow-hidden bg-raised/40 py-24 md:py-32"
      aria-labelledby="flow-heading"
    >
      <div
        aria-hidden="true"
        className="animate-glow pointer-events-none absolute left-1/2 top-1/2 h-[30rem] w-[50rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-[120px]"
      />

      <div className="relative mx-auto max-w-container px-6 lg:px-10">
        <Reveal>
          <SectionHeading
            eyebrow="How It Flows"
            id="flow-heading"
            align="center"
            title={
              <>
                From stranger to customer,{" "}
                <span className="text-accent">without you touching it</span>
              </>
            }
            description="This is the journey every lead takes through a Simflow system. Every step below runs automatically, day and night."
          />
        </Reveal>

        <Reveal delay={150}>
          <div className="mt-14 rounded-panel border border-edge bg-card/60 p-6 shadow-card backdrop-blur-sm md:p-10">
            <ol className="flex flex-col items-stretch lg:flex-row lg:items-start lg:justify-between">
              {nodes.map((node, i) => (
                <li key={node.title} className="contents">
                  {i > 0 && <Connector />}
                  <div className="group flex items-center gap-4 rounded-card p-2 transition-colors duration-300 lg:w-32 lg:flex-col lg:gap-3 lg:p-0 lg:text-center xl:w-36">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-edge bg-raised transition-all duration-500 ease-out-expo group-hover:scale-110 group-hover:border-accent/50 group-hover:bg-accent/10 lg:mt-0">
                      <node.icon className="h-5 w-5 text-accent" />
                    </span>
                    <div>
                      <h3 className="font-heading text-sm font-bold text-heading">
                        {node.title}
                      </h3>
                      <p className="mt-1 text-xs leading-relaxed text-muted">
                        {node.detail}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-card border border-edge bg-raised/80 px-6 py-4 sm:flex-row">
              <p className="flex items-center gap-2.5 text-sm text-body">
                <span className="animate-status h-2 w-2 rounded-full bg-accent" />
                Average time from new lead to booked appointment:
                <span className="font-heading font-bold text-heading">
                  under 4 minutes
                </span>
              </p>
              <p className="text-xs text-muted">
                No human involved until the sales call
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
