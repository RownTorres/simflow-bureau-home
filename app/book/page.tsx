import type { Metadata } from "next";
import { CalendarCheck, ShieldCheck, Timer } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BookingWidget } from "@/components/BookingWidget";

export const metadata: Metadata = {
  title: "Book a Strategy Call",
  description:
    "Book your free 30-minute strategy call. We'll map your operations, find what to automate first, and show you what it does to your bottom line.",
  alternates: { canonical: "/book" },
};

const assurances = [
  { icon: Timer, text: "30 minutes, no obligation" },
  { icon: CalendarCheck, text: "Leave with an automation roadmap" },
  { icon: ShieldCheck, text: "No pressure, no scripted pitch" },
];

export default function BookPage() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden pt-28 md:pt-32">
        <div
          aria-hidden="true"
          className="animate-glow pointer-events-none absolute left-1/2 top-[-16rem] h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[140px]"
        />

        <section className="relative mx-auto max-w-container px-6 py-14 lg:px-10 lg:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="inline-flex items-center gap-2 rounded-full border border-edge bg-card/60 px-4 py-1.5 font-heading text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Strategy Call
            </p>
            <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">
              Book your free{" "}
              <span className="text-accent">strategy session</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-body">
              Pick a time that works for you. We&apos;ll map how your business
              runs today, find what to automate first, and show you what it does
              to your bottom line.
            </p>

            <ul className="mx-auto mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
              {assurances.map((item) => (
                <li
                  key={item.text}
                  className="flex items-center gap-2 text-sm text-muted"
                >
                  <item.icon
                    className="h-4 w-4 text-accent"
                    aria-hidden="true"
                  />
                  {item.text}
                </li>
              ))}
            </ul>
          </div>

          <div className="mx-auto mt-12 max-w-4xl md:mt-16">
            <BookingWidget />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
