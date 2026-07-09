import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Variant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  href: string;
  variant?: Variant;
  children: React.ReactNode;
  withArrow?: boolean;
  external?: boolean;
  className?: string;
};

const base =
  "group inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-3.5 font-heading text-sm font-semibold tracking-wide transition-all duration-300 ease-out-expo focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-ink shadow-[0_0_0_0_rgb(var(--color-accent)/0)] hover:shadow-[0_0_32px_-6px_rgb(var(--color-accent)/0.55)] hover:brightness-110 hover:-translate-y-0.5",
  secondary:
    "border border-edge bg-card/60 text-heading hover:border-muted hover:bg-card hover:-translate-y-0.5",
  ghost: "text-body hover:text-accent",
};

export function Button({
  href,
  variant = "primary",
  children,
  withArrow = false,
  external = false,
  className = "",
}: ButtonProps) {
  const content = (
    <>
      <span>{children}</span>
      {withArrow && (
        <ArrowRight
          aria-hidden="true"
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
    </>
  );

  const classes = `${base} ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
