"use client";

import { useState } from "react";
import { SectionHeading } from "./ui/SectionHeading";

const items = [
  {
    q: "Do I need a Go HighLevel account already?",
    a: "No. If you do not have one, we set you up on the right plan for your stage and migrate any existing data from your current CRM. If you already have GHL, we audit and rebuild what is not pulling its weight.",
  },
  {
    q: "How long does a full system setup take?",
    a: "A typical service-business setup takes 2 to 4 weeks from kickoff to launch. Larger sub-accounts with multiple offers, integrations, or team members can take 6 weeks. You get a firm timeline after the audit.",
  },
  {
    q: "What if I am using a different CRM right now?",
    a: "We migrate contacts, tags, pipelines, and active sequences from most major CRMs (HubSpot, ActiveCampaign, Mailchimp, ConvertKit, Pipedrive). We test in staging before flipping the switch so nothing breaks live.",
  },
  {
    q: "How is pricing structured?",
    a: "Audit is a fixed fee. Builds are scoped per project after the audit, so you only pay for what your business actually needs. Ongoing optimization is optional and billed monthly.",
  },
  {
    q: "What does onboarding look like?",
    a: "One kickoff call, one offer-mapping session, and async access to a shared workspace. We do the heavy lifting. You review, approve, and we ship.",
  },
  {
    q: "Do you offer support after launch?",
    a: "Yes. Every build includes 30 days of post-launch optimization. After that, you can keep us on a monthly retainer or hand the system off to your team with full documentation.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="border-t border-ink-100 bg-cream py-24 md:py-32"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-container px-6 lg:px-12">
        <SectionHeading
          index="006"
          eyebrow="Questions"
          title={
            <span id="faq-heading">
              Asked and{" "}
              <em className="not-italic font-normal italic text-gold-dark">
                answered
              </em>
              .
            </span>
          }
        />

        <dl className="mt-20 border-t border-ink-100">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className="border-b border-ink-100">
                <dt>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-baseline justify-between gap-8 py-8 text-left transition-colors duration-500 ease-out hover:text-gold-dark"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${i}`}
                  >
                    <span className="flex items-baseline gap-6">
                      <span
                        className="text-xs font-medium tabular-nums text-ink-300"
                        aria-hidden="true"
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-xl font-light tracking-tight text-ink-900 md:text-2xl">
                        {item.q}
                      </span>
                    </span>
                    <span
                      className={`shrink-0 text-3xl font-light leading-none transition-transform duration-500 ease-out ${
                        isOpen ? "rotate-45 text-gold-dark" : "text-ink-500"
                      }`}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>
                </dt>
                <dd
                  id={`faq-answer-${i}`}
                  className={`grid transition-all duration-500 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="ml-12 max-w-2xl pb-8 text-base font-normal leading-relaxed text-ink-500 md:text-lg">
                      {item.a}
                    </p>
                  </div>
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
