'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Moon, Sun, Menu, X, GraduationCap } from 'lucide-react';
import { useTheme } from './theme-provider';
import { motion, AnimatePresence } from 'motion/react';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Academics', path: '/academics' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ease-in-out ${
          scrolled
            ? 'w-[90%] md:w-[700px] py-2 px-6 bg-bg/80 dark:bg-bg/80 backdrop-blur-xl shadow-lg border border-border-color rounded-full'
            : 'w-[95%] md:w-[900px] py-4 px-8 bg-bg/40 dark:bg-bg/40 backdrop-blur-md shadow-md border border-border-color/50 rounded-full'
        }`}
      >
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-accent text-text-on-accent p-1.5 rounded-full group-hover:rotate-12 transition-transform duration-300">
              <GraduationCap size={24} />
            </div>
            <span className="font-display font-bold text-lg md:text-xl text-text-heading tracking-tight">
              Venite
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`relative text-sm font-medium transition-colors hover:text-accent group ${
                  pathname === link.path ? 'text-accent' : 'text-text-body'
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full ${
                    pathname === link.path ? 'w-full' : ''
                  }`}
                />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full hover:bg-card-bg transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun size={20} className="text-accent-secondary" />
              ) : (
                <Moon size={20} className="text-text-muted" />
              )}
            </button>
            <button
              className="md:hidden p-2 rounded-full hover:bg-card-bg transition-colors text-text-heading"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center justify-center px-4 py-2 bg-accent text-text-on-accent text-sm font-semibold rounded-full hover:bg-accent/90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-accent/20"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-bg/95 backdrop-blur-xl flex flex-col p-6"
          >
            <div className="flex justify-between items-center mb-12">
              <div className="flex items-center gap-2">
                <div className="bg-accent text-text-on-accent p-1.5 rounded-full">
                  <GraduationCap size={24} />
                </div>
                <span className="font-display font-bold text-xl text-text-heading tracking-tight">
                  Venite
                </span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 bg-card-bg rounded-full text-text-heading"
              >
                <X size={24} />
              </button>
            </div>
            <nav className="flex flex-col gap-6 items-center justify-center flex-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-3xl font-display font-bold ${
                      pathname === link.path ? 'text-accent' : 'text-text-heading'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8"
              >
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-8 py-4 bg-accent text-text-on-accent text-lg font-semibold rounded-full shadow-lg inline-block"
                >
                  Apply Now
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
