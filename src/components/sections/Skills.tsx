import { motion, useReducedMotion } from 'motion/react';

import { Container } from '../layout/Container';
import { SectionHeading } from '../ui/SectionHeading';

const skillGroups = [
  {
    title: 'Backend',
    skills: [
      'Laravel',
      'PHP',
      'ASP.NET Core',
      'C#',
      'REST APIs',
      'Laravel Sanctum',
      'Laravel Queues',
    ],
  },
  {
    title: 'Data & Caching',
    skills: ['MySQL', 'SQL Server', 'Redis'],
  },
  {
    title: 'Infrastructure',
    skills: ['Docker', 'Docker Compose', 'Nginx'],
  },
  {
    title: 'Engineering',
    skills: [
      'Git',
      'Database Transactions',
      'Concurrency & Locking',
      'Authentication & Authorization',
      'Roles & Permissions',
    ],
  },
] as const;

export function Skills() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-20 sm:py-24 lg:py-28" id="skills">
      <Container>
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true, amount: 0.15 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <SectionHeading
            eyebrow="Skills"
            heading="Backend tools and engineering practices."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:gap-6">
            {skillGroups.map((group) => (
              <article
                className="rounded-panel border-subtle bg-surface flex min-w-0 flex-col border p-5 sm:p-6"
                key={group.title}
              >
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="bg-accent/75 h-px w-8 shrink-0"
                  />
                  <h3 className="text-primary text-lg font-semibold tracking-[-0.015em]">
                    {group.title}
                  </h3>
                </div>

                <ul className="mt-5 flex flex-wrap gap-2.5">
                  {group.skills.map((skill) => (
                    <li
                      className="border-subtle bg-canvas/45 text-secondary rounded-full border px-3 py-1.5 text-xs font-medium sm:text-sm"
                      key={skill}
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
