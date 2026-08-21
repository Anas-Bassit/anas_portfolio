import type { ComponentType, SVGProps } from 'react';

type SocialIcon = ComponentType<SVGProps<SVGSVGElement>>;

type SocialLinkProps = {
  href: string | null;
  icon: SocialIcon;
  label: string;
  showLabel?: boolean;
};

export function SocialLink({
  href,
  icon: Icon,
  label,
  showLabel = false,
}: SocialLinkProps) {
  const content = (
    <>
      <Icon aria-hidden="true" className="size-4.5" />
      {showLabel && <span>{label}</span>}
    </>
  );

  const className = `inline-flex min-h-10 items-center justify-center gap-2 rounded-full border border-subtle px-3 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent ${
    href
      ? 'text-secondary hover:border-accent/40 hover:bg-surface-raised hover:text-primary'
      : 'cursor-not-allowed text-muted opacity-60'
  }`;

  if (!href) {
    return (
      <span
        aria-disabled="true"
        className={className}
        title={`${label} profile URL will be added later`}
      >
        {content}
      </span>
    );
  }

  return (
    <a
      aria-label={showLabel ? undefined : label}
      className={className}
      href={href}
      rel="noreferrer"
      target="_blank"
    >
      {content}
    </a>
  );
}
