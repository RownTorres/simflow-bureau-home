"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";

const testimonials = [
  {
    quote:
      "Working with Roanne was one of the best decisions we made for our online course. She helped us organize our content, build the student experience inside GoHighLevel, and automate the entire onboarding process. She was proactive, detail-oriented, and consistently suggested improvements we hadn't even considered. It felt like having a true systems partner rather than just a freelancer.",
    name: "Louise",
    role: "TVCO, Virtual Assistant Course",
    initials: "L",
  },
  {
    quote:
      "Roanne completely transformed the backend of our clinic. She implemented our reputation management system, automated our review requests, organized our CRM, and created our first 24/7 Voice AI Agent. She's reliable, easy to work with, and genuinely cares about helping your business grow. I wouldn't hesitate to recommend her.",
    name: "Steph",
    role: "Owner, Urban Glow Medspa (Australia)",
    initials: "S",
  },
  {
    quote:
      "Roanne supported our business for nearly two years and was instrumental in building and maintaining our GoHighLevel systems. From CRM management and email marketing to automations and client onboarding, she consistently delivered high-quality work with professionalism and attention to detail. She takes ownership of her work, communicates well, and was a trusted member of our team.",
    name: "Victoria L.",
    role: "Business Activators",
    initials: "VL",
  },
  {
    quote:
      "What stood out most about working with Roanne was her ability to understand our business first before recommending a solution. She didn't just build automations, she built systems that made our day-to-day operations smoother and more scalable. Her combination of technical expertise and strategic thinking made a real difference to our business.",
    name: "Dimitar P.",
    role: "Autom Group",
    initials: "DP",
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const stop = useCallback(() => {
    if (timer.current) {
      clearInterval(timer.current);
      timer.current = null;
    }
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    timer.current = setInterval(
      () => setIndex((i) => (i + 1) % testimonials.length),
      7000
    );
    return stop;
  }, [stop]);

  const go = (next: number) => {
    stop();
    setIndex((next + testimonials.length) % testimonials.length);
  };

  const current = testimonials[index];

  return (
    <section className="py-24 md:py-32" aria-labelledby="testimonials-heading">
      <div className="mx-auto max-w-container px-6 lg:px-10">
        <Reveal>
          <SectionHeading
            eyebrow="Testimonials"
            id="testimonials-heading"
            align="center"
            title={
              <>
                What owners say{" "}
                <span className="text-accent">after the switch</span>
              </>
            }
          />
        </Reveal>

        <Reveal delay={150}>
          <div className="relative mx-auto mt-14 max-w-3xl">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-8 rounded-full bg-accent/5 blur-3xl"
            />
            <figure
              className="relative rounded-panel border border-edge bg-card p-8 shadow-card md:p-12"
              aria-live="polite"
            >
              <Quote
                aria-hidden="true"
                className="h-8 w-8 text-accent/60"
                fill="currentColor"
              />
              <div
                className="mt-6 flex gap-1"
                role="img"
                aria-label="5 out of 5 stars"
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    aria-hidden="true"
                    className="h-4 w-4 text-accent"
                    fill="currentColor"
                  />
                ))}
              </div>
              <blockquote
                key={index}
                className="animate-fade-in mt-5 min-h-[10rem] text-lg leading-relaxed text-heading md:text-xl"
              >
                &ldquo;{current.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-8 flex flex-col gap-5 border-t border-edge pt-6 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                <div className="flex items-center gap-4">
                  <span
                    aria-hidden="true"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 font-heading text-sm font-bold text-accent"
                  >
                    {current.initials}
                  </span>
                  <div>
                    <p className="font-heading text-sm font-bold text-heading">
                      {current.name}
                    </p>
                    <p className="text-xs text-muted">{current.role}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => go(index - 1)}
                    aria-label="Previous testimonial"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-edge text-body transition-all duration-300 hover:border-accent/50 hover:text-accent"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => go(index + 1)}
                    aria-label="Next testimonial"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-edge text-body transition-all duration-300 hover:border-accent/50 hover:text-accent"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </figcaption>
            </figure>

            <div className="mt-6 flex justify-center gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={t.name}
                  type="button"
                  onClick={() => go(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  aria-current={i === index}
                  className={`h-1.5 rounded-full transition-all duration-500 ease-out-expo ${
                    i === index
                      ? "w-8 bg-accent"
                      : "w-2 bg-edge hover:bg-muted"
                  }`}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
