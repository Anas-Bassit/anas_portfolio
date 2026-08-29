import { useEffect, useState } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';
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

const THEME_STORAGE_KEY = 'anas-portfolio-theme';
type Theme = 'light' | 'dark';

function isTheme(value: string | undefined): value is Theme {
  return value === 'light' || value === 'dark';
}

function getInitialTheme(): Theme {
  const documentTheme = document.documentElement.dataset.theme;

  if (isTheme(documentTheme)) {
    return documentTheme;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}

function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const nextTheme = theme === 'dark' ? 'light' : 'dark';

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.theme = theme;
    root.style.colorScheme = theme;
  }, [theme]);

  const selectTheme = (selectedTheme: Theme) => {
    try {
      localStorage.setItem(THEME_STORAGE_KEY, selectedTheme);
    } catch {
      // The visual theme can still change when storage is unavailable.
    }

    setTheme(selectedTheme);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const syncSystemTheme = (event: MediaQueryListEvent) => {
      if (localStorage.getItem(THEME_STORAGE_KEY)) return;
      setTheme(event.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', syncSystemTheme);
    return () => mediaQuery.removeEventListener('change', syncSystemTheme);
  }, []);

  return (
    <button
      aria-label={`Switch to ${nextTheme} mode`}
      aria-pressed={theme === 'dark'}
      className="border-primary/30 text-primary hover:bg-surface-raised hover:text-accent focus-visible:outline-accent inline-flex size-10 items-center justify-center border transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
      onClick={() => selectTheme(nextTheme)}
      title={`Switch to ${nextTheme} mode`}
      type="button"
    >
      {theme === 'dark' ? (
        <Sun aria-hidden="true" className="size-4" />
      ) : (
        <Moon aria-hidden="true" className="size-4" />
      )}
    </button>
  );
}

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
    <header className="border-primary/20 bg-canvas sticky top-0 z-50 border-b transition-colors duration-200">
      <Container className="flex h-18 items-center justify-between gap-6">
        <a
          className="text-primary focus-visible:outline-accent border-primary/25 border-r pr-5 text-base font-black focus-visible:outline-2 focus-visible:outline-offset-4"
          href="#top"
        >
          Anas Bassit<span className="text-accent">.</span>
        </a>

        <nav aria-label="Primary navigation" className="hidden md:block">
          <ul className="divide-primary/20 border-primary/20 flex items-center divide-x border-x">
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  className="text-muted hover:bg-surface-raised hover:text-primary focus-visible:outline-accent block px-3 py-2 text-xs font-bold tracking-[0.14em] uppercase transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 lg:px-4"
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
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            aria-controls="mobile-navigation"
            aria-expanded={isMenuOpen}
            aria-label={
              isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'
            }
            className="border-primary/30 text-primary hover:bg-surface-raised focus-visible:outline-accent inline-flex size-10 items-center justify-center border transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
            onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
            type="button"
          >
            {isMenuOpen ? (
              <X aria-hidden="true" />
            ) : (
              <Menu aria-hidden="true" />
            )}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            animate={{ opacity: 1, height: 'auto' }}
            aria-label="Mobile navigation"
            className="border-primary/20 bg-canvas overflow-hidden border-t transition-colors duration-200 md:hidden"
            exit={{ opacity: 0, height: 0 }}
            id="mobile-navigation"
            initial={shouldReduceMotion ? false : { opacity: 0, height: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.18 }}
          >
            <Container className="py-4">
              <ul className="divide-primary/18 border-primary/20 divide-y border-y">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <a
                      className="text-secondary hover:bg-surface-raised hover:text-primary focus-visible:outline-accent block px-1 py-3 text-sm font-bold tracking-[0.12em] uppercase transition-colors focus-visible:outline-2"
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="border-primary/20 mt-4 flex gap-2 border-t pt-4">
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
