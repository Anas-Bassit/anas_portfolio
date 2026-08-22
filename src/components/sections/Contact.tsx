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
    <section
      className="border-subtle bg-surface/35 border-t py-20 sm:py-24 lg:py-28"
      id="contact"
    >
      <Container>
        <motion.div
          className="rounded-panel border-subtle bg-surface overflow-hidden border"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true, amount: 0.2 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div className="p-6 sm:p-8 lg:p-10">
            <SectionHeading
              description="Have a backend project, API, or system that needs thoughtful engineering? Feel free to get in touch."
              eyebrow="Contact"
              heading="Let's build something reliable."
            />

            <div className="border-subtle mt-9 grid gap-5 border-t pt-7 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
              <p className="text-secondary flex items-center gap-3 text-sm leading-6 sm:text-base">
                <MapPin
                  aria-hidden="true"
                  className="text-accent size-4 shrink-0"
                  strokeWidth={1.8}
                />
                Based in Damascus, Syria
              </p>

              <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                {contactLinks.map(({ href, icon: Icon, label }) => (
                  <a
                    className="button-secondary"
                    href={href}
                    key={label}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Icon aria-hidden="true" className="size-4" />
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
