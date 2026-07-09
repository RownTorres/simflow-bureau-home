"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";

const items = [
  {
    q: "What kind of businesses do you work with?",
    a: "Service businesses that live on leads and appointments: real estate, clinics, coaches, agencies, home services, and professional services. If your growth depends on responding fast and following up consistently, automation will move the needle.",
  },
  {
    q: "Do I need a CRM before we start?",
    a: "No. If you have one, we audit it and rebuild what is underperforming. If you do not, we set you up on GoHighLevel and migrate your contacts, pipelines, and any active campaigns from your current tools.",
  },
  {
    q: "How long does a build take?",
    a: "Most systems go live in 4 to 5 weeks from kickoff. Simpler builds ship faster. Larger projects with multiple integrations or AI employees can take 6 to 8 weeks. You get a firm timeline after the discovery call, and you see progress weekly.",
  },
  {
    q: "What exactly is an AI employee?",
    a: "An AI agent trained on your business that handles conversations over chat, SMS, or voice. It answers questions, qualifies leads, books appointments, and escalates to a human when the conversation needs one. It works around the clock and never forgets a follow-up.",
  },
  {
    q: "How is pricing structured?",
    a: "Every project is scoped after a strategy call, so you only pay for what your business needs. Builds are a fixed project fee. Ongoing optimization and support are optional monthly retainers. No surprise line items.",
  },
  {
    q: "What happens after launch?",
    a: "Every build includes 30 days of post-launch monitoring and tuning. After that, you can keep us on retainer for optimization or take the system in-house. Either way, you get full documentation and your team gets trained.",
  },
  {
    q: "Will automation make my business feel robotic to customers?",
    a: "Done badly, yes. That is why every message sequence is written in your voice, every AI agent is trained on your actual offers, and human handoff rules are built in from day one. Customers get faster, more consistent service. Most cannot tell where the automation ends.",
  },
];

function FaqItem({
  item,
  open,
  onToggle,
  index,
}: {
  item: (typeof items)[number];
  open: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <div
      className={`rounded-card border transition-colors duration-300 ${
        open ? "border-accent/40 bg-card" : "border-edge bg-card/50"
      }`}
    >
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={`faq-panel-${index}`}
          className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left font-heading text-base font-semibold text-heading transition-colors duration-300 hover:text-accent md:px-8"
        >
          {item.q}
          <span
            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ease-out-expo ${
              open
                ? "rotate-45 border-accent/50 bg-accent/10 text-accent"
                : "border-edge text-muted"
            }`}
          >
            <Plus className="h-4 w-4" aria-hidden="true" />
          </span>
        </button>
      </h3>
      <div
        id={`faq-panel-${index}`}
        role="region"
        className={`grid transition-all duration-500 ease-out-expo ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-6 text-sm leading-relaxed text-body md:px-8 md:text-base">
            {item.a}
          </p>
        </div>
      </div>
    </div>
  );
}

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="scroll-mt-24 bg-raised/40 py-24 md:py-32"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-container px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <Reveal>
                <SectionHeading
                  eyebrow="FAQ"
                  id="faq-heading"
                  title={
                    <>
                      Questions owners ask{" "}
                      <span className="text-accent">before they commit</span>
                    </>
                  }
                  description="Straight answers, no sales script. Anything else, bring it to the strategy call."
                />
              </Reveal>
            </div>
          </div>

          <div className="space-y-4 lg:col-span-7">
            {items.map((item, i) => (
              <Reveal key={item.q} delay={i * 60}>
                <FaqItem
                  item={item}
                  index={i}
                  open={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
