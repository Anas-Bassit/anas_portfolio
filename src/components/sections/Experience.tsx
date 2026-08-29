import { motion, useReducedMotion } from 'motion/react';

import { Container } from '../layout/Container';
import { SectionHeading } from '../ui/SectionHeading';

const responsibilities = [
  'Develop and maintain REST APIs and backend features for production software projects.',
  'Translate feature requirements into business logic, authentication, authorization, and database-driven workflows.',
  'Design and maintain relational data models and work with existing production databases.',
  'Integrate backend services with web and mobile applications and external systems.',
  'Debug, maintain, and extend existing systems across e-commerce, gaming-related, and business applications.',
  'Collaborate with frontend, mobile, and other team members throughout feature delivery.',
] as const;

const technologies = [
  'Laravel',
  'PHP',
  'ASP.NET Core',
  'C#',
  'REST APIs',
  'MySQL',
  'SQL Server',
] as const;

export function Experience() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-charcoal py-20 sm:py-24 lg:py-28" id="experience">
      <Container>
        <SectionHeading
          description="Contributing to production backend systems, from data models and business logic to APIs and integrations."
          eyebrow="Experience"
          heading="Building and maintaining software used in real-world workflows."
          number="02"
          tone="dark"
        />

        <motion.article
          className="border-ink-inverse/18 mt-12 grid border-t lg:grid-cols-[15rem_minmax(0,1fr)]"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          transition={{ duration: 0.35 }}
          viewport={{ once: true, amount: 0.15 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <header className="border-ink-inverse/18 border-b py-6 lg:border-r lg:border-b-0 lg:pr-8">
            <p className="text-accent font-mono text-sm font-bold">
              May 2025 — Present
            </p>
            <p className="text-ink-inverse/50 mt-3 text-sm">Current role</p>
            <p className="text-ink-inverse/70 mt-8 hidden text-sm leading-6 lg:block">
              Production backend development across web and mobile products.
            </p>
          </header>

          <div className="py-6 lg:py-8 lg:pl-10">
            <div className="grid gap-2 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
              <div>
                <p className="text-ink-inverse/55 text-sm font-bold tracking-[0.16em] uppercase">
                  Pancode
                </p>
                <h3 className="text-ink-inverse mt-2 text-3xl font-black sm:text-4xl">
                  Backend Developer
                </h3>
              </div>
              <p className="text-accent hidden font-mono text-xs font-bold tracking-[0.16em] uppercase sm:block">
                Work log
              </p>
            </div>

            <ul className="border-ink-inverse/15 divide-ink-inverse/12 mt-8 divide-y border-y">
              {responsibilities.map((responsibility) => (
                <li
                  className="text-ink-inverse/78 grid gap-3 py-4 text-sm leading-6 sm:grid-cols-[1.75rem_minmax(0,1fr)] sm:text-base sm:leading-7"
                  key={responsibility}
                >
                  <span
                    className="text-accent font-mono text-xs font-bold"
                    aria-hidden="true"
                  >
                    /
                  </span>
                  <span>{responsibility}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 grid gap-4 sm:grid-cols-[10rem_minmax(0,1fr)]">
              <p className="text-ink-inverse/50 text-xs font-bold tracking-[0.18em] uppercase">
                Technologies
              </p>
              <ul className="flex flex-wrap gap-x-4 gap-y-2">
                {technologies.map((technology) => (
                  <li
                    className="text-ink-inverse text-sm font-semibold"
                    key={technology}
                  >
                    {technology}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.article>
      </Container>
    </section>
  );
}
