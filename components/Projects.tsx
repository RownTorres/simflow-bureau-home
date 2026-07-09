import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { BOOK_PATH } from "@/lib/links";

type Project = {
  industry: string;
  title: string;
  problem: string;
  solution: string;
  stack: string[];
  results: { value: string; label: string }[];
  featured?: boolean;
};

const projects: Project[] = [
  {
    industry: "Real Estate",
    title: "24/7 lead engine for a growing brokerage",
    problem:
      "Agents were responding to portal and ad leads hours late. By then, most had already spoken to a competitor.",
    solution:
      "AI employee answers every inquiry in under a minute, qualifies budget and timeline, and books viewings directly into agent calendars with automatic reminders.",
    stack: ["GoHighLevel", "AI Chat", "SMS", "Calendar Sync"],
    results: [
      { value: "58s", label: "average first response" },
      { value: "+41%", label: "more booked viewings" },
      { value: "0", label: "leads left uncontacted" },
    ],
    featured: true,
  },
  {
    industry: "Dental Clinic",
    title: "Front desk that never puts patients on hold",
    problem:
      "Missed calls and no-shows were costing the clinic thousands in empty chair time every month.",
    solution:
      "Missed-call text-back, automated recall campaigns, and a reminder sequence that confirms every appointment twice.",
    stack: ["GoHighLevel", "SMS Automation", "Voice AI"],
    results: [
      { value: "-63%", label: "no-show rate" },
      { value: "12hrs", label: "front desk time saved weekly" },
    ],
  },
  {
    industry: "Coaching & Education",
    title: "Launch system for a coaching program",
    problem:
      "Every cohort launch meant two weeks of manual emails, payment chasing, and onboarding spreadsheets.",
    solution:
      "Full launch funnel with automated enrollment, payment recovery, onboarding drip, and community access provisioning.",
    stack: ["Sales Funnels", "Email Sequences", "Stripe", "Workflows"],
    results: [
      { value: "2wks", label: "of launch admin eliminated" },
      { value: "+28%", label: "payment recovery rate" },
    ],
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-panel border border-edge bg-card p-8 shadow-card transition-all duration-500 ease-out-expo hover:-translate-y-1 hover:border-accent/40 hover:shadow-lift md:p-10 ${
        project.featured ? "lg:grid lg:grid-cols-2 lg:gap-12" : ""
      }`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 -top-24 h-56 w-56 rounded-full bg-accent/5 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />

      <div>
        <p className="inline-flex rounded-full border border-edge bg-raised px-3.5 py-1 font-heading text-xs font-semibold uppercase tracking-[0.16em] text-accent">
          {project.industry}
        </p>
        <h3 className="mt-5 text-2xl font-bold leading-snug">
          {project.title}
        </h3>

        <dl className="mt-6 space-y-5">
          <div>
            <dt className="font-heading text-xs font-semibold uppercase tracking-wider text-muted">
              The Problem
            </dt>
            <dd className="mt-1.5 text-sm leading-relaxed text-body">
              {project.problem}
            </dd>
          </div>
          <div>
            <dt className="font-heading text-xs font-semibold uppercase tracking-wider text-muted">
              The Solution
            </dt>
            <dd className="mt-1.5 text-sm leading-relaxed text-body">
              {project.solution}
            </dd>
          </div>
        </dl>

        <ul className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-edge bg-raised px-3 py-1 text-xs text-body"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 flex flex-col lg:mt-0 lg:justify-between">
        <div
          className={`grid gap-4 border-t border-edge pt-6 lg:border-t-0 lg:pt-0 ${
            project.featured ? "grid-cols-1 sm:grid-cols-3 lg:grid-cols-1" : "grid-cols-2"
          }`}
        >
          {project.results.map((result) => (
            <div
              key={result.label}
              className={project.featured ? "lg:border-l lg:border-edge lg:pl-5" : ""}
            >
              <p className="font-heading text-3xl font-bold text-accent">
                {result.value}
              </p>
              <p className="mt-1 text-xs text-muted">{result.label}</p>
            </div>
          ))}
        </div>

        <Link
          href={BOOK_PATH}
          className="mt-8 inline-flex items-center gap-1.5 font-heading text-sm font-semibold text-heading transition-colors duration-300 hover:text-accent"
        >
          Build something like this
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <section
      id="work"
      className="scroll-mt-24 bg-raised/40 py-24 md:py-32"
      aria-labelledby="work-heading"
    >
      <div className="mx-auto max-w-container px-6 lg:px-10">
        <Reveal>
          <SectionHeading
            eyebrow="Featured Work"
            id="work-heading"
            title={
              <>
                Real businesses,{" "}
                <span className="text-accent">real systems shipped</span>
              </>
            }
            description="A sample of what happens when manual operations become intelligent systems."
          />
        </Reveal>

        <div className="mt-14 grid gap-6">
          <Reveal>
            <ProjectCard project={projects[0]} />
          </Reveal>
          <div className="grid gap-6 lg:grid-cols-2">
            {projects.slice(1).map((project, i) => (
              <Reveal key={project.title} delay={i * 120} className="h-full">
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
