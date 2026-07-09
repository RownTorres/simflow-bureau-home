import {
  ArrowUpRight,
  Bot,
  CalendarClock,
  Database,
  Filter,
  GitBranch,
  Globe,
  Lightbulb,
  Mail,
  MessageSquareText,
  Settings2,
  Target,
  Workflow,
} from "lucide-react";
import Link from "next/link";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { BOOK_PATH } from "@/lib/links";

type Service = {
  icon: React.ElementType;
  title: string;
  description: string;
  span: "featured" | "standard" | "wide";
  highlights?: string[];
};

const services: Service[] = [
  {
    icon: Database,
    title: "CRM Setup",
    description:
      "A CRM built around how you actually sell. Pipelines, custom fields, tags, and automations configured so every contact, deal, and conversation lives in one place your team actually uses.",
    highlights: ["GoHighLevel implementation", "Data migration", "Team training"],
    span: "featured",
  },
  {
    icon: Bot,
    title: "AI Employees",
    description:
      "AI agents that answer inquiries, qualify leads, and book appointments 24/7 in your brand voice. They never miss a message, never forget a follow-up, and hand off to humans exactly when they should.",
    highlights: ["AI chat & voice", "Lead qualification", "Human handoff rules"],
    span: "featured",
  },
  {
    icon: Settings2,
    title: "Business Automation",
    description:
      "End-to-end systems that connect your tools and remove the manual steps between them.",
    span: "standard",
  },
  {
    icon: Target,
    title: "Sales Funnels",
    description:
      "Landing pages and funnels engineered to convert traffic into booked calls and sales.",
    span: "standard",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description:
      "Triggers, conditions, and actions that run your standard procedures without supervision.",
    span: "standard",
  },
  {
    icon: Filter,
    title: "Lead Management",
    description:
      "Every lead captured, scored, routed, and followed up. Nothing slips through the cracks.",
    span: "standard",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description:
      "Nurture sequences and campaigns that sound like you and sell while you sleep.",
    span: "standard",
  },
  {
    icon: MessageSquareText,
    title: "SMS Automation",
    description:
      "Text follow-ups with 90%+ open rates: reminders, confirmations, and reactivation campaigns.",
    span: "standard",
  },
  {
    icon: GitBranch,
    title: "Pipeline Automation",
    description:
      "Deals move themselves. Stage changes trigger tasks, follow-ups, and notifications automatically.",
    span: "standard",
  },
  {
    icon: Globe,
    title: "Website & Funnel Development",
    description:
      "Fast, conversion-focused websites wired directly into your CRM and automations.",
    span: "standard",
  },
  {
    icon: CalendarClock,
    title: "Booking Automation",
    description:
      "Self-booking calendars with reminders and no-show recovery that keep your schedule full.",
    span: "standard",
  },
  {
    icon: Lightbulb,
    title: "Business Consulting",
    description:
      "Not sure where automation fits in your business? We audit your operations, find the bottlenecks costing you the most, and hand you a prioritized roadmap. Then we build it with you.",
    span: "wide",
  },
];

const spanClasses: Record<Service["span"], string> = {
  featured: "md:col-span-3",
  standard: "md:col-span-2",
  wide: "md:col-span-6",
};

export function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-24 bg-raised/40 py-24 md:py-32"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-container px-6 lg:px-10">
        <Reveal>
          <SectionHeading
            eyebrow="Services"
            id="services-heading"
            align="center"
            title={
              <>
                Everything you need to run{" "}
                <span className="text-accent">on autopilot</span>
              </>
            }
            description="One partner for the full stack: strategy, CRM, AI, and the automations that tie it all together."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-6">
          {services.map((service, i) => (
            <Reveal
              key={service.title}
              delay={(i % 3) * 100}
              className={spanClasses[service.span]}
            >
              <article
                className={`group relative flex h-full flex-col overflow-hidden rounded-panel border border-edge bg-card shadow-card transition-all duration-500 ease-out-expo hover:-translate-y-1 hover:border-accent/40 hover:shadow-lift ${
                  service.span === "featured" ? "p-8 md:p-10" : "p-7"
                } ${service.span === "wide" ? "md:flex-row md:items-center md:gap-10" : ""}`}
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-accent/5 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />

                <div className={service.span === "wide" ? "md:flex-1" : ""}>
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10">
                    <service.icon className="h-5 w-5 text-accent" />
                  </span>
                  <h3
                    className={`mt-5 font-bold ${
                      service.span === "standard" ? "text-lg" : "text-2xl"
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-body">
                    {service.description}
                  </p>

                  {service.highlights && (
                    <ul className="mt-6 flex flex-wrap gap-2">
                      {service.highlights.map((h) => (
                        <li
                          key={h}
                          className="rounded-full border border-edge bg-raised px-3 py-1 text-xs text-body"
                        >
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <Link
                  href={BOOK_PATH}
                  className={`inline-flex items-center gap-1.5 font-heading text-sm font-semibold text-muted transition-colors duration-300 group-hover:text-accent ${
                    service.span === "wide" ? "md:shrink-0" : "mt-auto pt-6"
                  }`}
                >
                  Learn more
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
