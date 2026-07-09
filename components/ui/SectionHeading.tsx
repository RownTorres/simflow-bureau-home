type Props = {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  id?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  id,
}: Props) {
  const alignClass =
    align === "center" ? "mx-auto text-center items-center" : "text-left";

  return (
    <div className={`flex max-w-2xl flex-col ${alignClass}`}>
      <p
        className={`inline-flex items-center gap-2 rounded-full border border-edge bg-card/60 px-4 py-1.5 font-heading text-xs font-semibold uppercase tracking-[0.18em] text-accent ${
          align === "center" ? "" : "self-start"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        id={id}
        className="mt-6 text-3xl font-bold leading-[1.12] tracking-tight sm:text-4xl md:text-5xl"
      >
        {title}
      </h2>
      {description && (
        <p className="mt-5 max-w-xl text-base leading-relaxed text-body md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
