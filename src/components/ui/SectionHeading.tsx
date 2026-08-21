type SectionHeadingProps = {
  eyebrow: string;
  heading: string;
  description?: string;
};

export function SectionHeading({
  eyebrow,
  heading,
  description,
}: SectionHeadingProps) {
  return (
    <header className="max-w-3xl">
      <p className="text-accent mb-4 flex items-center gap-3 text-xs font-semibold tracking-[0.16em] uppercase sm:text-sm">
        <span aria-hidden="true" className="bg-accent/70 h-px w-8" />
        {eyebrow}
      </p>
      <h2 className="text-primary text-[clamp(1.85rem,3.5vw,3rem)] leading-[1.15] font-semibold tracking-[-0.035em]">
        {heading}
      </h2>
      {description && (
        <p className="text-secondary mt-5 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8">
          {description}
        </p>
      )}
    </header>
  );
}
