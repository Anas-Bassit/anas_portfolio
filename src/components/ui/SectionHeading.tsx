type SectionHeadingProps = {
  eyebrow: string;
  heading: string;
  description?: string;
  number?: string;
  tone?: 'light' | 'dark';
};

export function SectionHeading({
  eyebrow,
  heading,
  description,
  number,
  tone = 'light',
}: SectionHeadingProps) {
  const isDark = tone === 'dark';

  return (
    <header className="grid max-w-5xl gap-5 sm:grid-cols-[7.5rem_minmax(0,1fr)] sm:gap-8">
      <p
        className={`flex items-center gap-3 text-xs font-bold tracking-[0.2em] uppercase sm:block ${
          isDark ? 'text-ink-inverse/60' : 'text-muted'
        }`}
      >
        {number && (
          <span
            className={`font-mono text-5xl leading-none font-semibold sm:block sm:text-6xl lg:text-7xl ${
              isDark ? 'text-ink-inverse/12' : 'text-primary/10'
            }`}
          >
            {number}
          </span>
        )}
        <span className="text-accent">{eyebrow}</span>
      </p>

      <div>
        <h2
          className={`max-w-3xl text-3xl leading-none font-black sm:text-5xl lg:text-6xl ${
            isDark ? 'text-ink-inverse' : 'text-primary'
          }`}
        >
          {heading}
        </h2>
        {description && (
          <p
            className={`mt-5 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8 ${
              isDark ? 'text-ink-inverse/75' : 'text-secondary'
            }`}
          >
            {description}
          </p>
        )}
      </div>
    </header>
  );
}
