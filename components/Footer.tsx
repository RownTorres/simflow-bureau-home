import Link from "next/link";
import { Logo } from "./ui/Logo";
import { BOOKING_URL } from "@/lib/links";

export function Footer() {
  return (
    <footer
      className="border-t border-ink-100 bg-cream"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Site footer
      </h2>
      <div className="mx-auto max-w-container px-6 py-16 lg:px-12">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link
              href="/"
              className="inline-block transition-opacity duration-500 ease-out hover:opacity-80"
            >
              <Logo />
            </Link>
            <p className="mt-6 max-w-sm text-sm font-normal leading-relaxed text-ink-500">
              Smarter systems that simplify processes for service-based
              businesses and eliminate manual tasks.
            </p>
          </div>

          <nav className="md:col-span-3" aria-label="Footer">
            <h3 className="text-xs uppercase tracking-[0.2em] text-ink-300">
              Explore
            </h3>
            <ul className="mt-6 space-y-3 text-sm font-normal text-ink-700">
              <li>
                <Link
                  href="#services"
                  className="transition-colors duration-500 ease-out hover:text-gold-dark"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#how"
                  className="transition-colors duration-500 ease-out hover:text-gold-dark"
                >
                  Process
                </Link>
              </li>
              <li>
                <Link
                  href="#faq"
                  className="transition-colors duration-500 ease-out hover:text-gold-dark"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </nav>

          <div className="md:col-span-4">
            <h3 className="text-xs uppercase tracking-[0.2em] text-ink-300">
              Contact
            </h3>
            <ul className="mt-6 space-y-3 text-sm font-normal text-ink-700">
              <li>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-500 ease-out hover:text-gold-dark"
                >
                  Book System Audit -&gt;
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-3 border-t border-ink-100 pt-8 text-xs uppercase tracking-[0.15em] text-ink-500 sm:flex-row sm:items-center">
          <p>(c) {new Date().getFullYear()} Simflow Bureau</p>
          <p className="italic normal-case tracking-normal">
            Built with restraint.
          </p>
        </div>
      </div>
    </footer>
  );
}
