import Image from "next/image";
import { Facebook, Linkedin } from "lucide-react";
import { Button } from "./ui/Button";
import { Reveal } from "./ui/Reveal";
import { TikTokIcon } from "./ui/TikTokIcon";
import { BOOK_PATH } from "@/lib/links";

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/roannetorres/",
    icon: Linkedin,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/roanmtschk/",
    icon: Facebook,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@gohighlevel_mama",
    icon: TikTokIcon,
  },
];

const chips = ["HighLevel Certified Admin", "Certified Email Marketer"];

export function About() {
  return (
    <section
      id="about"
      className="relative scroll-mt-24 overflow-hidden py-24 md:py-32"
      aria-labelledby="about-heading"
    >
      <div
        aria-hidden="true"
        className="animate-glow pointer-events-none absolute right-0 top-1/2 h-[30rem] w-[30rem] -translate-y-1/2 translate-x-1/4 rounded-full bg-accent/10 blur-[130px]"
      />

      <div className="relative mx-auto grid max-w-container items-center gap-14 px-6 lg:grid-cols-12 lg:gap-16 lg:px-10">
        {/* Left: intro + bio + credentials */}
        <div className="order-2 lg:order-1 lg:col-span-6">
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-edge bg-card/60 px-4 py-1.5 font-heading text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              About Your Specialist
            </p>
            <h2
              id="about-heading"
              className="mt-6 text-4xl font-bold leading-[1.02] tracking-tight sm:text-5xl md:text-6xl"
            >
              I&apos;m <span className="text-accent">Roanne Torres.</span>
            </h2>
            <p className="mt-7 max-w-lg text-lg leading-relaxed text-body">
              Seven years freelancing taught me where businesses actually lose
              time and leads. Now I build the fix: GoHighLevel CRM systems, AI
              workflows, and the automations that quietly run your operations.
              HighLevel Certified Admin, certified email marketer, and the
              person behind every Simflow Bureau build.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {chips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-edge bg-card px-3 py-1 text-xs text-body"
                >
                  {chip}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-6">
              <Button href={BOOK_PATH} withArrow>
                Book a Strategy Call
              </Button>

              <div className="flex items-baseline gap-3">
                <span className="font-heading text-4xl font-bold text-accent">
                  07
                </span>
                <span className="font-heading text-xs font-semibold uppercase leading-tight tracking-[0.18em] text-muted">
                  Years
                  <br />
                  Experience
                </span>
              </div>

              <div className="flex items-center gap-3">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-edge text-muted transition-all duration-300 hover:border-accent/50 hover:text-accent"
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right: square portrait */}
        <div className="order-1 lg:order-2 lg:col-span-6">
          <Reveal delay={120}>
            <div className="relative mx-auto max-w-md lg:ml-auto lg:mr-0">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-5 rounded-[2rem] bg-accent/10 blur-3xl"
              />
              <div className="relative aspect-[4/5] overflow-hidden rounded-panel border border-edge bg-card shadow-lift">
                <Image
                  src="/roanne.jpg"
                  alt="Roanne Torres, founder of Simflow Bureau"
                  width={1200}
                  height={1799}
                  className="h-full w-full object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 28rem"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
