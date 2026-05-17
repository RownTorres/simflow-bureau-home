import { Button } from "./ui/Button";
import { BOOKING_URL } from "@/lib/links";

export function CtaBand() {
  return (
    <section
      id="audit"
      className="border-t border-ink-100 bg-cream py-32 md:py-40"
      aria-labelledby="audit-heading"
    >
      <div className="mx-auto max-w-container px-6 lg:px-12">
        <p className="flex items-baseline gap-4 text-xs uppercase tracking-[0.25em] text-ink-500">
          <span className="font-medium text-gold-dark">007</span>
          <span className="h-px w-12 bg-ink-300" />
          <span>Begin</span>
        </p>

        <h2
          id="audit-heading"
          className="mt-12 max-w-5xl text-5xl font-light leading-[0.95] tracking-tightest text-ink-900 md:text-7xl lg:text-[7rem]"
        >
          Show us your bottlenecks.{" "}
          <em className="not-italic font-normal italic text-gold-dark">
            We&apos;ll show you the fix.
          </em>
        </h2>

        <p className="mt-12 max-w-xl text-lg font-normal leading-relaxed text-ink-500">
          Walk away with a clear map of where your funnel leaks, what to fix
          first, and what a working GHL system looks like for your business.
        </p>

        <div className="mt-16">
          <Button href={BOOKING_URL} external variant="primary" withArrow>
            Book System Audit
          </Button>
        </div>
      </div>
    </section>
  );
}
