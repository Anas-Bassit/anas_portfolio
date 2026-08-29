import { MapPin } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

import { GITHUB_URL, LINKEDIN_URL } from '../../data/socialLinks';
import { Container } from '../layout/Container';
import { GitHubIcon, LinkedInIcon } from '../ui/BrandIcons';
import { SectionHeading } from '../ui/SectionHeading';

const contactLinks = [
  {
    label: 'GitHub',
    href: GITHUB_URL,
    icon: GitHubIcon,
  },
  {
    label: 'LinkedIn',
    href: LINKEDIN_URL,
    icon: LinkedInIcon,
  },
] as const;

export function Contact() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-charcoal py-20 sm:py-24 lg:py-28" id="contact">
      <Container>
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          transition={{ duration: 0.35 }}
          viewport={{ once: true, amount: 0.2 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <SectionHeading
            description="Have a backend project, API, or system that needs thoughtful engineering? Feel free to get in touch."
            eyebrow="Contact"
            heading="Let's build something reliable."
            number="05"
            tone="dark"
          />

          <div className="border-ink-inverse/18 mt-12 grid gap-8 border-t pt-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <p className="text-ink-inverse/70 flex items-center gap-3 text-sm leading-6 sm:text-base">
              <MapPin
                aria-hidden="true"
                className="text-accent size-4 shrink-0"
                strokeWidth={1.8}
              />
              Based in Damascus, Syria
            </p>

            <div className="grid gap-3 sm:grid-cols-2 lg:min-w-[22rem]">
              {contactLinks.map(({ href, icon: Icon, label }) => (
                <a
                  className="border-ink-inverse/45 text-ink-inverse hover:border-accent hover:text-accent focus-visible:outline-accent inline-flex min-h-12 items-center justify-between gap-3 border px-5 text-sm font-black transition-colors focus-visible:outline-2 focus-visible:outline-offset-3"
                  href={href}
                  key={label}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="inline-flex items-center gap-2">
                    <Icon aria-hidden="true" className="size-4" />
                    {label}
                  </span>
                  <span aria-hidden="true">-&gt;</span>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
