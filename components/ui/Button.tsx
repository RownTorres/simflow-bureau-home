import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Variant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  href?: string;
  variant?: Variant;
  children: React.ReactNode;
  withArrow?: boolean;
  external?: boolean;
  className?: string;
};

const base =
  "group inline-flex items-center justify-center gap-3 px-7 py-4 text-sm font-medium tracking-wide transition-colors duration-300";

const variants: Record<Variant, string> = {
  primary: "bg-ink-900 text-cream hover:bg-gold-dark",
  secondary: "border border-ink-900 text-ink-900 hover:bg-ink-900 hover:text-cream",
  ghost: "text-ink-900 hover:text-gold-dark",
};

export function Button({
  href = "#audit",
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
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
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
