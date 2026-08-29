import { Boxes, Code2, GraduationCap, MapPin } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

import { Container } from '../layout/Container';
import { SectionHeading } from '../ui/SectionHeading';

const details = [
  { icon: Boxes, label: 'Focus', value: 'Backend systems & APIs' },
  { icon: Code2, label: 'Main stack', value: 'Laravel · ASP.NET Core' },
  { icon: MapPin, label: 'Based in', value: 'Damascus, Syria' },
  {
    icon: GraduationCap,
    label: 'Education',
    value: 'Computer Science',
  },
] as const;

export function About() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className="border-primary/15 bg-surface border-y py-20 sm:py-24 lg:py-28"
      id="about"
    >
      <Container>
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          transition={{ duration: 0.35 }}
          viewport={{ once: true, amount: 0.2 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <SectionHeading
            eyebrow="About"
            heading="Backend development shaped by real-world projects."
            number="01"
          />

          <div className="mt-12 grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-16">
            <div className="text-secondary border-primary/20 max-w-3xl space-y-6 border-l-2 pl-5 text-base leading-7 sm:pl-8 sm:text-lg sm:leading-8">
              <p>
                I’m a backend developer at Pancode, working on reliable web and
                mobile product backends across real business workflows.
              </p>
              <p>
                My experience includes real-world projects across e-commerce,
                gaming-related systems, and business applications. I’ve worked
                on REST APIs, database-driven workflows, authentication,
                integrations, debugging, and maintaining existing software.
              </p>
              <p>
                I enjoy understanding the business problem behind a feature and
                translating it into backend logic that is clear, maintainable,
                and ready to evolve.
              </p>
            </div>

            <dl className="border-primary/30 divide-primary/20 divide-y border-y">
              {details.map(({ icon: Icon, label, value }) => (
                <div
                  className="grid grid-cols-[2rem_minmax(0,1fr)] gap-4 py-4"
                  key={label}
                >
                  <Icon
                    aria-hidden="true"
                    className="text-accent mt-1 size-4"
                    strokeWidth={1.8}
                  />
                  <div>
                    <dt className="text-muted text-xs font-bold tracking-[0.16em] uppercase">
                      {label}
                    </dt>
                    <dd className="text-primary mt-1 text-sm font-bold sm:text-base">
                      {value}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
