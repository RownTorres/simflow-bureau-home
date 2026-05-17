import Link from "next/link";
import { Logo } from "./ui/Logo";
import { BOOKING_URL } from "@/lib/links";

const links = [
  { href: "#services", label: "Services" },
  { href: "#how", label: "Process" },
  { href: "#stats", label: "Results" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-cream/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-container items-center justify-between px-6 py-6 lg:px-12">
        <Link
          href="/"
          className="transition-opacity duration-500 ease-out hover:opacity-80"
        >
          <Logo />
        </Link>

        <nav
          className="hidden items-center gap-10 md:flex"
          aria-label="Primary"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative text-sm font-normal text-ink-700 transition-colors duration-500 ease-out hover:text-ink-900"
            >
              <span>{link.label}</span>
              <span className="absolute -bottom-1.5 left-0 h-px w-full origin-left scale-x-0 bg-gold-dark transition-transform duration-500 ease-out group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 text-sm font-medium text-ink-900 transition-colors duration-500 ease-out hover:text-gold-dark"
        >
          <span>Book System Audit</span>
          <svg
            viewBox="0 0 16 16"
            fill="none"
            className="h-3.5 w-3.5 transition-transform duration-500 ease-out group-hover:translate-x-0.5"
            aria-hidden="true"
          >
            <path
              d="M3 8h10M9 4l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
      <div className="h-px w-full bg-ink-100" />
    </header>
  );
}
