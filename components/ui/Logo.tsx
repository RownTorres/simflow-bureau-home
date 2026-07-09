type LogoProps = {
  className?: string;
  showWordmark?: boolean;
};

export function Logo({ className = "", showWordmark = true }: LogoProps) {
  return (
    <span
      className={`inline-flex items-center gap-3 ${className}`}
      aria-label="Simflow Bureau"
    >
      <LogoMark className="h-7 w-auto text-heading" />
      {showWordmark && (
        <span className="font-heading text-base font-bold tracking-tight text-heading">
          Simflow{" "}
          <span className="font-medium text-body">Bureau</span>
        </span>
      )}
    </span>
  );
}

export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 32"
      fill="none"
      className={className}
      role="img"
      aria-hidden="true"
    >
      <path
        d="M3 16 Q 3 5, 14 5 L 22 5 Q 33 5, 33 16 Q 33 27, 22 27 L 14 27 Q 3 27, 3 16 Z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        opacity="0.2"
      />
      <path
        d="M3 16 Q 9 4, 19 12 T 34 16"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <circle cx="3" cy="16" r="1.5" fill="currentColor" />
      <circle cx="34" cy="16" r="2.2" className="fill-accent" />
    </svg>
  );
}
