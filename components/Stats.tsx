export function Stats() {
  return (
    <section
      id="stats"
      className="border-t border-ink-100 bg-cream py-24 md:py-32"
      aria-labelledby="results-heading"
    >
      <div className="mx-auto max-w-container px-6 lg:px-12">
        <p className="flex items-baseline gap-4 text-xs uppercase tracking-[0.25em] text-ink-500">
          <span className="font-medium text-gold-dark">004</span>
          <span className="h-px w-12 bg-ink-300" />
          <span>The Receipts</span>
        </p>

        <h2
          id="results-heading"
          className="mt-8 max-w-5xl text-4xl font-light leading-[1.1] tracking-tightest text-ink-900 md:text-6xl lg:text-7xl"
        >
          The system pays for itself.{" "}
          <em className="not-italic font-normal italic text-gold-dark">
            Usually within 30 days.
          </em>
        </h2>

        <div className="mt-20 grid gap-y-16 md:grid-cols-12 md:gap-x-16">
          <article className="md:col-span-7">
            <p className="text-2xl font-light leading-relaxed text-ink-700 md:text-3xl">
              Manual follow-up drops by{" "}
              <span className="font-normal text-gold-dark">90%</span>. Booked
              calls climb by{" "}
              <span className="font-normal text-gold-dark">30%</span>. Cold
              leads stop ghosting because the system never forgets to follow
              up, even at 9pm on a Saturday.
            </p>
            <p className="mt-12 max-w-md text-base font-normal leading-relaxed text-ink-500">
              These are real outcomes from real service businesses we have
              built systems for. Same playbook, applied to your offers.
            </p>
          </article>

          <aside className="md:col-span-5 md:border-l md:border-ink-100 md:pl-12">
            <dl className="space-y-10">
              <div>
                <dt className="text-xs uppercase tracking-[0.2em] text-ink-500">
                  Workflows shipped
                </dt>
                <dd className="mt-3 text-5xl font-light tabular-nums tracking-tightest text-ink-900 md:text-6xl">
                  100<span className="text-gold-dark">+</span>
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.2em] text-ink-500">
                  Experience
                </dt>
                <dd className="mt-3 text-5xl font-light tracking-tightest text-ink-900 md:text-6xl">
                  5<span className="text-gold-dark">+</span>{" "}
                  <span className="text-3xl font-light text-ink-500 md:text-4xl">
                    years building
                  </span>
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.2em] text-ink-500">
                  Response time
                </dt>
                <dd className="mt-3 text-5xl font-light tabular-nums tracking-tightest text-ink-900 md:text-6xl">
                  &lt; 24h
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
}
