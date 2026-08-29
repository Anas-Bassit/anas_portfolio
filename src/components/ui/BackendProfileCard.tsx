import { motion, useReducedMotion } from 'motion/react';

const profileRows = [
  { label: 'Name', value: 'Anas Bassit' },
  { label: 'Role', value: 'Backend Developer' },
  { label: 'Primary stack', value: 'Laravel / PHP' },
  { label: 'Also working with', value: 'ASP.NET Core / C#' },
  { label: 'Focus', value: 'APIs / Databases / Integrations' },
  { label: 'Location', value: 'Damascus, Syria' },
] as const;

export function BackendProfileCard() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.aside
      animate={{ opacity: 1, y: 0 }}
      aria-label="Backend developer profile summary"
      className="border-primary/80 bg-surface relative mx-auto w-full max-w-[32rem] min-w-0 border-2 min-[960px]:justify-self-end"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
      transition={{ delay: shouldReduceMotion ? 0 : 0.12, duration: 0.35 }}
    >
      <div className="border-primary/80 grid grid-cols-[7.25rem_minmax(0,1fr)] border-b sm:grid-cols-[9rem_minmax(0,1fr)]">
        <p className="border-primary/80 text-accent border-r px-3 py-3 font-mono text-xs font-bold tracking-[0.16em] uppercase sm:p-4">
          Meta
        </p>
        <p className="text-primary px-3 py-3 text-sm font-black tracking-[0.14em] uppercase sm:p-4">
          Backend Developer
        </p>
      </div>

      <dl className="divide-primary/20 divide-y">
        {profileRows.map((row) => (
          <div
            className="grid grid-cols-[7.25rem_minmax(0,1fr)] sm:grid-cols-[9rem_minmax(0,1fr)]"
            key={row.label}
          >
            <dt className="border-primary/20 text-muted border-r px-3 py-2.5 text-[0.68rem] font-bold tracking-[0.16em] uppercase sm:px-4 sm:py-3">
              {row.label}
            </dt>
            <dd className="text-primary px-3 py-2.5 text-sm leading-6 font-semibold sm:px-4 sm:py-3">
              {row.value}
            </dd>
          </div>
        ))}
      </dl>
    </motion.aside>
  );
}
