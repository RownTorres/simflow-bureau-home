const tools = [
  "GoHighLevel",
  "Zapier",
  "Make",
  "OpenAI",
  "Claude",
  "Twilio",
  "Stripe",
  "Slack",
  "Calendly",
  "Meta Ads",
  "Google Ads",
  "Webhooks",
];

export function TrustedBy() {
  return (
    <section className="border-y border-edge/60 bg-raised/40 py-10">
      <div className="mx-auto max-w-container px-6 lg:px-10">
        <p className="text-center font-heading text-xs font-semibold uppercase tracking-[0.22em] text-muted">
          Built on the platforms your business already runs on
        </p>
      </div>
      <div className="marquee-mask mt-8 overflow-hidden">
        <div className="animate-marquee flex w-max items-center gap-14 pr-14">
          {[...tools, ...tools].map((tool, i) => (
            <span
              key={`${tool}-${i}`}
              aria-hidden={i >= tools.length}
              className="font-heading text-lg font-semibold tracking-tight text-muted transition-colors duration-300 hover:text-body"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
