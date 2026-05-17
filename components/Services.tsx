import { SectionHeading } from "./ui/SectionHeading";

const services = [
  {
    number: "01",
    eyebrow: "Sub-account, pipelines, triggers",
    title: "Your CRM, built right",
    description:
      "The architecture under every smart system. Pipelines that mirror how you actually sell, tags that segment automatically, triggers that fire on the moments that matter. Built once, hardened to scale.",
    icon: SystemIcon,
  },
  {
    number: "02",
    eyebrow: "Email + SMS sequences",
    title: "Leads that book themselves",
    description:
      "Sequences that warm cold leads, recover ghosted prospects, and book discovery calls overnight. Your follow-up runs even when you don't, in your own voice, not a template.",
    icon: NurtureIcon,
  },
  {
    number: "03",
    eyebrow: "Segmentation + lead scoring",
    title: "The right offer, the right moment",
    description:
      "Lead scoring, conditional workflows, and smart segmentation so the right offer reaches the right contact at the exact moment they're ready to buy. Stop blasting. Start converting.",
    icon: CrmIcon,
  },
  {
    number: "04",
    eyebrow: "Funnels, Zapier, Make",
    title: "Every tool, one system",
    description:
      "Funnels, campaigns, and integrations across Zapier and Make so every tool in your stack speaks fluent revenue. No more copy-pasting between apps. No more leads lost in the cracks.",
    icon: AutomationIcon,
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="border-t border-ink-100 bg-cream py-24 md:py-32"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-container px-6 lg:px-12">
        <SectionHeading
          index="003"
          eyebrow="Services"
          title={
            <span id="services-heading">
              Done-for-you systems that{" "}
              <em className="not-italic font-normal italic text-gold-dark">
                close the loop
              </em>
            </span>
          }
        />

        <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.number}
              className="group flex flex-col rounded-2xl bg-white p-8 ring-1 ring-ink-100 transition-all duration-500 ease-out hover:-translate-y-1 hover:ring-gold/40"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cream text-gold-dark transition-colors duration-500 ease-out group-hover:bg-gold/15">
                  <service.icon />
                </div>
                <span
                  className="text-xs font-medium tabular-nums tracking-[0.15em] text-ink-300"
                  aria-hidden="true"
                >
                  {service.number}
                </span>
              </div>

              <p className="mt-8 text-[10px] font-medium uppercase tracking-[0.2em] text-gold-dark">
                {service.eyebrow}
              </p>
              <h3 className="mt-3 text-xl font-normal leading-snug tracking-tight text-ink-900 md:text-2xl">
                {service.title}
              </h3>
              <p className="mt-4 flex-1 text-sm font-normal leading-relaxed text-ink-500">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SystemIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="4"
        width="18"
        height="13"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M3 9h18M8 17v3m8-3v3M7 20h10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function NurtureIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path
        d="M3 7l9 6 9-6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function CrmIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <circle cx="12" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M5 20c0-3.5 3-6 7-6s7 2.5 7 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="18.5" cy="6" r="2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="5.5" cy="6" r="2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function AutomationIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <circle cx="6" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="18" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="18" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M8 7l3 9M16 7l-3 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
