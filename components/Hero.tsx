import {
  Bot,
  CalendarCheck,
  MessageSquare,
  TrendingUp,
  Zap,
} from "lucide-react";
import { Button } from "./ui/Button";
import { BOOK_PATH } from "@/lib/links";

export function Hero() {
  return (
    <section
      className="relative overflow-hidden pt-32 md:pt-40"
      aria-labelledby="hero-heading"
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="animate-glow pointer-events-none absolute left-1/2 top-[-20rem] h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgb(var(--color-raised)/0.6),transparent_60%)]"
      />

      <div className="relative mx-auto grid max-w-container items-center gap-16 px-6 pb-24 lg:grid-cols-12 lg:gap-10 lg:px-10 lg:pb-32">
        <div className="lg:col-span-6">
          <p className="animate-fade-up inline-flex items-center gap-2.5 rounded-full border border-edge bg-card/60 px-4 py-2 font-heading text-xs font-semibold uppercase tracking-[0.18em] text-body opacity-0 [animation-delay:0ms]">
            <span className="animate-status h-1.5 w-1.5 rounded-full bg-accent" />
            AI, CRM & Automation Agency
          </p>

          <h1
            id="hero-heading"
            className="animate-fade-up mt-8 text-4xl font-bold leading-[1.06] tracking-tight opacity-0 [animation-delay:120ms] sm:text-5xl md:text-6xl lg:text-[4.25rem]"
          >
            Automate your business. Scale without the{" "}
            <span className="text-accent">chaos.</span>
          </h1>

          <p className="animate-fade-up mt-7 max-w-lg text-lg leading-relaxed text-body opacity-0 [animation-delay:240ms]">
            We build AI-powered systems that capture your leads, follow up in
            minutes, book your calendar, and run the repetitive work for you,
            so you can focus on the parts of the business only you can do.
          </p>

          <div className="animate-fade-up mt-10 flex flex-wrap items-center gap-4 opacity-0 [animation-delay:360ms]">
            <Button href={BOOK_PATH} withArrow>
              Book a Strategy Call
            </Button>
            <Button href="#services" variant="secondary">
              View Services
            </Button>
          </div>
        </div>

        <div className="relative lg:col-span-6">
          <HeroDashboard />
        </div>
      </div>
    </section>
  );
}

const pipeline = [
  {
    stage: "New Leads",
    count: 24,
    active: true,
    cards: [
      { name: "Dana R.", tag: "Facebook Ad" },
      { name: "Marcus L.", tag: "Website" },
    ],
  },
  {
    stage: "AI Qualified",
    count: 16,
    active: true,
    cards: [
      { name: "Priya S.", tag: "Hot Lead" },
      { name: "Jon B.", tag: "Follow-up" },
    ],
  },
  {
    stage: "Booked",
    count: 9,
    active: false,
    cards: [{ name: "Alicia M.", tag: "Tomorrow 2PM" }],
  },
];

const activity = [
  { icon: MessageSquare, text: "AI replied to inquiry", time: "12s ago" },
  { icon: CalendarCheck, text: "Appointment booked", time: "2m ago" },
  { icon: Zap, text: "Follow-up sequence fired", time: "5m ago" },
];

function HeroDashboard() {
  return (
    <div className="animate-fade-up relative opacity-0 [animation-delay:300ms]">
      {/* Main dashboard card */}
      <div className="relative rounded-panel border border-edge bg-raised/90 shadow-lift backdrop-blur-sm">
        {/* Window chrome */}
        <div className="flex items-center justify-between border-b border-edge px-5 py-3.5">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-edge" />
            <span className="h-2.5 w-2.5 rounded-full bg-edge" />
            <span className="h-2.5 w-2.5 rounded-full bg-edge" />
          </div>
          <div className="flex items-center gap-2 rounded-full bg-card px-3 py-1 text-xs text-muted">
            <span className="animate-status h-1.5 w-1.5 rounded-full bg-accent" />
            AI Employee active
          </div>
        </div>

        {/* Pipeline columns */}
        <div className="grid grid-cols-3 gap-3 p-5">
          {pipeline.map((col) => (
            <div key={col.stage} className="rounded-card bg-card p-3">
              <div className="flex items-center justify-between">
                <p className="font-heading text-[11px] font-semibold uppercase tracking-wider text-muted">
                  {col.stage}
                </p>
                <span
                  className={`font-heading text-xs font-bold ${
                    col.active ? "text-accent" : "text-body"
                  }`}
                >
                  {col.count}
                </span>
              </div>
              <div className="mt-3 space-y-2">
                {col.cards.map((card) => (
                  <div
                    key={card.name}
                    className="rounded-lg border border-edge bg-raised px-2.5 py-2"
                  >
                    <p className="text-xs font-semibold text-heading">
                      {card.name}
                    </p>
                    <p className="mt-0.5 text-[10px] text-muted">{card.tag}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Automation flow line */}
        <div className="px-5 pb-2" aria-hidden="true">
          <svg viewBox="0 0 400 28" className="w-full" fill="none">
            <path
              d="M8 14 H 392"
              stroke="rgb(var(--color-edge))"
              strokeWidth="1.5"
            />
            <path
              d="M8 14 H 392"
              stroke="rgb(var(--color-accent))"
              strokeWidth="1.5"
              className="animate-dash"
            />
            {[8, 136, 264, 392].map((x) => (
              <circle
                key={x}
                cx={x}
                cy="14"
                r="4"
                fill="rgb(var(--color-card))"
                stroke="rgb(var(--color-accent))"
                strokeWidth="1.5"
              />
            ))}
          </svg>
          <div className="flex justify-between pb-3 text-[10px] text-muted">
            <span>Capture</span>
            <span>Nurture</span>
            <span>Qualify</span>
            <span>Book</span>
          </div>
        </div>

        {/* Live activity feed */}
        <div className="border-t border-edge px-5 py-4">
          <ul className="space-y-2.5">
            {activity.map((item) => (
              <li key={item.text} className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent/10">
                  <item.icon className="h-3.5 w-3.5 text-accent" />
                </span>
                <span className="flex-1 text-xs text-body">{item.text}</span>
                <span className="text-[10px] text-muted">{item.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Floating metric chips */}
      <div className="animate-float absolute -top-6 left-14 hidden rounded-card border border-edge bg-card/90 px-4 py-3 shadow-card backdrop-blur-md sm:block">
        <div className="flex items-center gap-2.5">
          <TrendingUp className="h-4 w-4 text-accent" />
          <div>
            <p className="font-heading text-sm font-bold text-heading">+212%</p>
            <p className="text-[10px] text-muted">Lead response speed</p>
          </div>
        </div>
      </div>

      <div className="animate-float-delayed absolute -bottom-5 right-4 hidden rounded-card border border-edge bg-card/90 px-4 py-3 shadow-card backdrop-blur-md sm:block lg:-right-6">
        <div className="flex items-center gap-2.5">
          <Bot className="h-4 w-4 text-accent" />
          <div>
            <p className="font-heading text-sm font-bold text-heading">
              127 tasks
            </p>
            <p className="text-[10px] text-muted">Automated this week</p>
          </div>
        </div>
      </div>
    </div>
  );
}
