type Props = {
  index?: string;
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  align = "left",
}: Props) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-3xl ${alignClass}`}>
      {(index || eyebrow) && (
        <div className="flex items-baseline gap-4 text-xs uppercase tracking-[0.25em] text-ink-500">
          {index && <span className="font-medium text-gold-dark">{index}</span>}
          {eyebrow && <span>{eyebrow}</span>}
        </div>
      )}
      <h2 className="mt-6 text-4xl font-light leading-[1.05] tracking-tightest text-ink-900 md:text-6xl">
        {title}
      </h2>
      {description && (
        <p className="mt-6 max-w-xl text-lg font-normal leading-relaxed text-ink-500">
          {description}
        </p>
      )}
    </div>
  );
}
