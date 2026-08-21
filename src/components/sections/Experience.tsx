import { motion, useReducedMotion } from 'motion/react';

import { Container } from '../layout/Container';
import { SectionHeading } from '../ui/SectionHeading';

const responsibilities = [
  'Build and maintain REST APIs and backend features for production software projects.',
  'Implement business logic, authentication, authorization, and database-driven workflows.',
  'Design and maintain relational data models and work with existing production databases.',
  'Connect backend services with web and mobile applications and external integrations.',
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
    <section className="py-20 sm:py-24 lg:py-28" id="experience">
      <Container>
        <SectionHeading
          description="Contributing to production backend systems, from data models and business logic to APIs and integrations."
          eyebrow="Experience"
          heading="Building and maintaining software used in real-world workflows."
        />

        <motion.article
          className="rounded-panel border-subtle bg-surface mt-10 grid overflow-hidden border lg:grid-cols-[15rem_minmax(0,1fr)]"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true, amount: 0.15 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <header className="border-subtle bg-canvas/35 border-b p-6 sm:p-8 lg:border-r lg:border-b-0">
            <p className="text-accent text-sm font-semibold">
              May 2025 — Present
            </p>
            <p className="text-muted mt-3 text-sm">Current role</p>
            <p className="text-secondary mt-8 hidden text-sm leading-6 lg:block">
              Production backend development across web and mobile products.
            </p>
          </header>

          <div className="p-6 pb-7 sm:p-8 sm:pb-9 lg:p-10">
            <div>
              <p className="text-secondary text-sm font-medium tracking-wide uppercase">
                Pancode
              </p>
              <h3 className="text-primary mt-2 text-2xl font-semibold tracking-[-0.025em] sm:text-3xl">
                Backend Developer
              </h3>
            </div>

            <ul className="mt-7 grid gap-4 md:grid-cols-2 md:gap-x-10 md:gap-y-5">
              {responsibilities.map((responsibility) => (
                <li
                  className="text-secondary flex items-start gap-3 text-sm leading-6 sm:text-base sm:leading-7"
                  key={responsibility}
                >
                  <span
                    aria-hidden="true"
                    className="bg-accent ring-accent/10 mt-2.5 size-1.5 shrink-0 rounded-full ring-4"
                  />
                  <span>{responsibility}</span>
                </li>
              ))}
            </ul>

            <div className="border-subtle mt-8 border-t pt-6">
              <p className="text-muted mb-4 text-xs font-semibold tracking-[0.1em] uppercase">
                Technologies
              </p>
              <ul className="flex flex-wrap gap-2.5">
                {technologies.map((technology) => (
                  <li
                    className="border-subtle bg-canvas/45 text-secondary rounded-full border px-3 py-1.5 text-xs font-medium"
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
