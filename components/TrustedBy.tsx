const tools = [
  "GoHighLevel",
  "Zapier",
  "Voice AI",
  "Chatbot",
  "Slack",
  "Asana",
  "Discord",
  "Canva",
  "ChatGPT",
  "Perplexity",
  "Claude",
  "Gemini",
];

export function TrustedBy() {
  return (
    <section
      className="bg-cream py-24 md:py-32"
      aria-labelledby="stack-heading"
    >
      <div className="mx-auto max-w-container px-6 lg:px-12">
        <p className="flex items-baseline gap-4 text-xs uppercase tracking-[0.25em] text-ink-500">
          <span className="font-medium text-gold-dark">002</span>
          <span className="h-px w-12 bg-ink-300" />
          <span>The Stack</span>
        </p>

        <h2
          id="stack-heading"
          className="mt-8 max-w-3xl text-3xl font-light leading-[1.1] tracking-tightest text-ink-900 md:text-5xl"
        >
          Twelve platforms.{" "}
          <em className="not-italic font-normal italic text-ink-500">
            One system.
          </em>
        </h2>

        <ul className="mt-16 grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {tools.map((tool, i) => (
            <li
              key={tool}
              className="flex items-baseline gap-3 border-t border-ink-100 pt-4"
            >
              <span className="text-[10px] font-medium tabular-nums text-ink-300">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-base font-normal text-ink-900">{tool}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
