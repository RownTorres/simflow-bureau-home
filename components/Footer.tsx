import Link from "next/link";
import { Linkedin, Facebook } from "lucide-react";
import { Logo } from "./ui/Logo";
import { TikTokIcon } from "./ui/TikTokIcon";
import { BOOK_PATH } from "@/lib/links";

const columns = [
  {
    heading: "Company",
    links: [
      { label: "Services", href: "/#services" },
      { label: "Process", href: "/#process" },
      { label: "Results", href: "/#results" },
      { label: "Work", href: "/#work" },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "CRM Setup", href: "/#services" },
      { label: "AI Employees", href: "/#services" },
      { label: "Workflow Automation", href: "/#services" },
      { label: "Sales Funnels", href: "/#services" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "FAQ", href: "/#faq" },
      { label: "Book a Call", href: BOOK_PATH },
    ],
  },
];

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

export function Footer() {
  return (
    <footer
      className="border-t border-edge bg-raised/40"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Site footer
      </h2>
      <div className="mx-auto max-w-container px-6 py-16 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Link
              href="/"
              className="inline-block transition-opacity duration-300 hover:opacity-80"
            >
              <Logo />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-body">
              Intelligent systems that save you time, eliminate repetitive
              work, and turn more leads into customers. Based in the
              Philippines, building for businesses everywhere.
            </p>
            <div className="mt-6 flex items-center gap-3">
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

          {columns.map((column) => (
            <nav
              key={column.heading}
              className="lg:col-span-2"
              aria-label={column.heading}
            >
              <h3 className="font-heading text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                {column.heading}
              </h3>
              <ul className="mt-5 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-body transition-colors duration-300 hover:text-accent"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-edge pt-8 sm:flex-row">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} Simflow Bureau. All rights
            reserved.
          </p>
          <p className="text-xs text-muted">
            Cavite, Philippines &middot; Working with clients worldwide
          </p>
        </div>
      </div>
    </footer>
  );
}
