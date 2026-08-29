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
    <section className="bg-surface-raised py-20 sm:py-24 lg:py-28" id="skills">
      <Container>
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          transition={{ duration: 0.35 }}
          viewport={{ once: true, amount: 0.15 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <SectionHeading
            eyebrow="Skills"
            heading="Backend tools and engineering practices."
            number="04"
          />

          <div className="border-primary/30 mt-12 border-y">
            {skillGroups.map((group) => (
              <article
                className="border-primary/20 grid gap-5 border-b py-6 last:border-b-0 md:grid-cols-[14rem_minmax(0,1fr)] md:py-7"
                key={group.title}
              >
                <h3 className="text-primary text-sm font-black tracking-[0.18em] uppercase">
                  {group.title}
                </h3>

                <ul className="grid gap-x-6 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
                  {group.skills.map((skill) => (
                    <li
                      className="border-primary/20 text-secondary border-b pb-2 text-sm leading-6 font-semibold"
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
