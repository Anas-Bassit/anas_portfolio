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
      className="relative isolate py-14 min-[960px]:py-20 sm:py-18 xl:py-24"
      id="top"
    >
      <div aria-hidden="true" className="hero-grid absolute inset-0 -z-10" />
      <Container className="grid min-w-0 items-center gap-12 min-[960px]:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] min-[960px]:gap-12 xl:gap-16">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
          transition={{ duration: 0.42 }}
        >
          <p className="text-accent mb-5 flex items-center gap-3 text-sm font-semibold tracking-[0.12em] uppercase">
            <span aria-hidden="true" className="bg-accent/70 h-px w-8" />
            Backend Developer
          </p>
          <h1 className="text-primary max-w-[44rem] text-[clamp(2.35rem,4.4vw,4rem)] leading-[1.08] font-semibold tracking-[-0.04em]">
            Building reliable backend systems, APIs, and business applications.
          </h1>
          <p className="text-secondary mt-6 max-w-[40rem] text-base leading-7 sm:text-lg sm:leading-8">
            I’m Anas Bassit. I build maintainable backend systems with Laravel
            and ASP.NET Core, with a focus on REST APIs, relational databases,
            integrations, and clear business logic.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a className="button-primary" href="#projects">
              View My Work
              <ArrowRight aria-hidden="true" className="size-4" />
            </a>
            <a className="button-secondary" href="#contact">
              Contact Me
            </a>
          </div>

          <div className="mt-7 flex items-center gap-2">
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
