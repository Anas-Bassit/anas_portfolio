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
    value: 'Informatics Engineering',
  },
] as const;

export function About() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className="border-subtle bg-surface/35 border-y py-20 sm:py-24 lg:py-28"
      id="about"
    >
      <Container>
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true, amount: 0.2 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <SectionHeading
            eyebrow="About"
            heading="Backend development shaped by real-world projects."
          />

          <div className="mt-10 grid items-start gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(20rem,0.92fr)] lg:gap-16 xl:gap-20">
            <div className="text-secondary max-w-2xl space-y-5 text-base leading-7 sm:text-lg sm:leading-8">
              <p>
                I’m a backend developer at Pancode with hands-on experience
                building reliable systems for web and mobile products using
                Laravel and ASP.NET Core.
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

            <dl className="grid gap-3 sm:grid-cols-2">
              {details.map(({ icon: Icon, label, value }) => (
                <div
                  className="rounded-card border-subtle bg-canvas/55 flex min-h-24 flex-col justify-between border p-4"
                  key={label}
                >
                  <div className="flex items-center gap-2">
                    <Icon
                      aria-hidden="true"
                      className="text-accent size-4"
                      strokeWidth={1.8}
                    />
                    <dt className="text-muted text-xs font-semibold tracking-[0.1em] uppercase">
                      {label}
                    </dt>
                  </div>
                  <dd className="text-primary mt-3 text-sm font-medium sm:text-base">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
