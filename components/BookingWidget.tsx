import Script from "next/script";
import { BOOKING_URL } from "@/lib/links";

export function BookingWidget() {
  return (
    <div className="relative">
      {/* Ambient glow behind the widget */}
      <div
        aria-hidden="true"
        className="animate-glow pointer-events-none absolute -inset-8 rounded-[2rem] bg-accent/10 blur-[120px]"
      />

      {/* No border/background here on purpose: the GHL widget renders its own
          dark card, so a wrapper card would double the rounded border. */}
      <div className="relative min-h-[760px]">
        {/* Placeholder sits behind the iframe; the widget covers it once it paints */}
        <div className="absolute inset-0 z-0 flex flex-col items-center justify-center gap-4 px-6 text-center">
          <span
            aria-hidden="true"
            className="h-8 w-8 animate-spin rounded-full border-2 border-edge border-t-accent"
          />
          <p className="text-sm text-muted">Loading your calendar…</p>
        </div>

        <iframe
          id="simflow-booking-widget"
          src={BOOKING_URL}
          title="Book a strategy call with Simflow Bureau"
          className="relative z-10 block w-full"
          style={{ minHeight: 760, border: "none" }}
          scrolling="no"
        />
      </div>

      {/* GHL auto-resizes the iframe height via postMessage */}
      <Script
        src="https://link.msgsndr.com/js/form_embed.js"
        strategy="lazyOnload"
      />
    </div>
  );
}
