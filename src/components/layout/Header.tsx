import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';

import { GITHUB_URL, LINKEDIN_URL } from '../../data/socialLinks';
import { GitHubIcon, LinkedInIcon } from '../ui/BrandIcons';
import { SocialLink } from '../ui/SocialLink';
import { Container } from './Container';

const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
] as const;

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!isMenuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false);
    };

    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [isMenuOpen]);

  return (
    <header className="border-subtle bg-canvas/90 sticky top-0 z-50 border-b backdrop-blur-md">
      <Container className="flex h-18 items-center justify-between gap-6">
        <a
          className="text-primary focus-visible:outline-accent rounded-sm text-base font-semibold tracking-tight focus-visible:outline-2 focus-visible:outline-offset-4"
          href="#top"
        >
          Anas Bassit<span className="text-accent">.</span>
        </a>

        <nav aria-label="Primary navigation" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  className="text-secondary hover:bg-surface hover:text-primary focus-visible:outline-accent rounded-lg px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
                  href={item.href}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <SocialLink href={GITHUB_URL} icon={GitHubIcon} label="GitHub" />
          <SocialLink
            href={LINKEDIN_URL}
            icon={LinkedInIcon}
            label="LinkedIn"
          />
        </div>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          aria-label={
            isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'
          }
          className="border-subtle text-primary hover:bg-surface focus-visible:outline-accent inline-flex size-10 items-center justify-center rounded-lg border transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 md:hidden"
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          type="button"
        >
          {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </Container>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            animate={{ opacity: 1, height: 'auto' }}
            aria-label="Mobile navigation"
            className="border-subtle bg-canvas overflow-hidden border-t md:hidden"
            exit={{ opacity: 0, height: 0 }}
            id="mobile-navigation"
            initial={shouldReduceMotion ? false : { opacity: 0, height: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.18 }}
          >
            <Container className="py-4">
              <ul className="grid gap-1">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <a
                      className="text-secondary hover:bg-surface hover:text-primary focus-visible:outline-accent block rounded-lg px-3 py-3 text-base font-medium transition-colors focus-visible:outline-2"
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="border-subtle mt-3 flex gap-2 border-t pt-4">
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
            </Container>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
