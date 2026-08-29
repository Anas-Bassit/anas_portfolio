import { ArrowRight } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

import { GITHUB_URL, LINKEDIN_URL } from '../../data/socialLinks';
import { Container } from '../layout/Container';
import { BackendProfileCard } from '../ui/BackendProfileCard';
import { GitHubIcon, LinkedInIcon } from '../ui/BrandIcons';
import { SocialLink } from '../ui/SocialLink';

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className="bg-canvas relative isolate py-16 sm:py-20 lg:py-24"
      id="top"
    >
      <div aria-hidden="true" className="hero-grid absolute inset-0 -z-10" />
      <Container className="grid min-w-0 items-end gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(22rem,0.72fr)] lg:gap-16">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
          transition={{ duration: 0.35 }}
        >
          <p className="border-primary/30 text-muted mb-8 inline-flex border-y py-2 font-mono text-xs font-bold tracking-[0.18em] uppercase">
            Backend Developer
          </p>
          <p className="text-accent mb-4 text-xl font-black sm:text-2xl">
            Anas Bassit
          </p>
          <h1 className="text-primary max-w-4xl text-4xl leading-none font-black sm:text-6xl lg:text-7xl">
            Building reliable backend systems, APIs, and business applications.
          </h1>
          <p className="text-secondary mt-6 max-w-2xl text-base leading-7 sm:mt-8 sm:text-lg sm:leading-8">
            I’m Anas Bassit. I work mainly with Laravel and ASP.NET Core,
            shaping APIs, data workflows, integrations, and maintainable
            business logic for real product needs.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a className="button-primary" href="#projects">
              View My Work
              <ArrowRight aria-hidden="true" className="size-4" />
            </a>
            <a className="button-secondary" href="#contact">
              Contact Me
            </a>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-2">
            <SocialLink
              href={GITHUB_URL}
              icon={GitHubIcon}
              label="GitHub"
              showLabel
            />
            <SocialLink
              href={LINKEDIN_URL}
              icon={LinkedInIcon}
              label="LinkedIn"
              showLabel
            />
          </div>
        </motion.div>

        <BackendProfileCard />
      </Container>
    </section>
  );
}
