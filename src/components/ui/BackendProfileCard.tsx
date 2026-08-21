import { Braces, Database, Server } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

const profile = [
  { key: 'name', value: 'Anas Bassit' },
  { key: 'role', value: 'Backend Developer' },
] as const;

const specialties = [
  { icon: Server, label: 'Laravel · ASP.NET Core' },
  { icon: Braces, label: 'REST APIs · Integrations' },
  { icon: Database, label: 'Relational databases' },
] as const;

export function BackendProfileCard() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.aside
      animate={{ opacity: 1, y: 0 }}
      aria-label="Backend developer profile summary"
      className="rounded-panel border-subtle bg-surface shadow-panel relative mx-auto w-full max-w-[32rem] min-w-0 overflow-hidden border p-4 min-[960px]:justify-self-end sm:p-5"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
      transition={{ delay: shouldReduceMotion ? 0 : 0.12, duration: 0.45 }}
    >
      <div
        aria-hidden="true"
        className="border-subtle mb-4 flex items-center gap-2 border-b pb-4"
      >
        <span className="bg-muted/50 size-2 rounded-full" />
        <span className="bg-muted/35 size-2 rounded-full" />
        <span className="bg-accent/60 size-2 rounded-full" />
        <span className="text-muted ml-2 text-xs font-medium tracking-wide">
          backend.profile
        </span>
      </div>

      <div className="rounded-card border-subtle bg-canvas/70 min-w-0 overflow-hidden border p-4 font-mono text-[0.76rem] leading-6 break-words sm:p-5 sm:text-sm sm:leading-7">
        <span className="text-muted">const</span>{' '}
        <span className="text-accent-soft">developer</span>{' '}
        <span className="text-muted">= &#123;</span>
        <dl className="min-w-0 pl-3 sm:pl-6">
          {profile.map((item) => (
            <div className="flex min-w-0 flex-wrap gap-x-2" key={item.key}>
              <dt className="text-secondary">{item.key}:</dt>
              <dd className="text-primary">&quot;{item.value}&quot;,</dd>
            </div>
          ))}
          <div>
            <dt className="text-secondary inline">stack:</dt>{' '}
            <dd className="text-primary inline">
              [&quot;Laravel&quot;, &quot;ASP.NET Core&quot;],
            </dd>
          </div>
          <div>
            <dt className="text-secondary inline">focus:</dt>{' '}
            <dd className="text-primary inline">
              [&quot;APIs&quot;, &quot;Databases&quot;,
              &quot;Integrations&quot;]
            </dd>
          </div>
        </dl>
        <span className="text-muted">&#125;;</span>
      </div>

      <ul className="mt-4 grid gap-2 sm:grid-cols-3">
        {specialties.map(({ icon: Icon, label }) => (
          <li
            className="rounded-card border-subtle text-secondary flex items-center gap-2 border px-3 py-2.5 text-xs sm:flex-col sm:items-start"
            key={label}
          >
            <Icon
              aria-hidden="true"
              className="text-accent size-4"
              strokeWidth={1.8}
            />
            <span>{label}</span>
          </li>
        ))}
      </ul>
    </motion.aside>
  );
}
