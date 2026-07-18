'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Moon, Sun, Menu, X, GraduationCap, MapPin, CalendarDays } from 'lucide-react';
import { useTheme } from './theme-provider';
import { motion, AnimatePresence } from 'motion/react';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mapOpen, setMapOpen] = useState(false);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  const mapRef = useRef<HTMLDivElement>(null);
  const calendarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    const handleClickOutside = (event: MouseEvent) => {
      if (mapRef.current && !mapRef.current.contains(event.target as Node)) {
        setMapOpen(false);
      }
      if (calendarRef.current && !calendarRef.current.contains(event.target as Node)) {
        setCalendarOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
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
            ? 'w-[95%] md:w-[850px] py-2 px-6 bg-bg/80 dark:bg-bg/80 backdrop-blur-xl shadow-lg border border-border-color rounded-full'
            : 'w-[95%] md:w-[1000px] py-4 px-8 bg-bg/40 dark:bg-bg/40 backdrop-blur-md shadow-md border border-border-color/50 rounded-full'
        }`}
      >
        <div className="flex items-center justify-between relative">
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

          <div className="flex items-center gap-2 md:gap-3">
            {/* Map Widget Toggle */}
            <div className="relative hidden md:block" ref={mapRef}>
              <button
                onClick={() => { setMapOpen(!mapOpen); setCalendarOpen(false); }}
                className={`p-2 rounded-full transition-colors ${mapOpen ? 'bg-accent text-text-on-accent' : 'hover:bg-card-bg text-text-muted hover:text-accent'}`}
                aria-label="Campus Map"
              >
                <MapPin size={20} />
              </button>
              <AnimatePresence>
                {mapOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-4 w-80 bg-card-bg border border-border-color rounded-2xl shadow-xl overflow-hidden"
                  >
                    <div className="p-4 border-b border-border-color bg-bg">
                      <h4 className="font-display font-bold text-text-heading">Campus Map</h4>
                      <p className="text-xs text-text-muted">Explore Venite University</p>
                    </div>
                    <div className="p-4 flex flex-col items-center justify-center h-48 bg-bg-secondary relative">
                      <MapPin size={32} className="text-accent/50 mb-2" />
                      <p className="text-sm font-medium text-text-heading">Interactive Map Widget</p>
                      <p className="text-xs text-text-muted text-center mt-1">Map rendering placeholder</p>
                      <Link href="/contact" onClick={() => setMapOpen(false)} className="mt-4 text-xs font-semibold text-accent hover:underline">
                        View full map &rarr;
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Calendar Widget Toggle */}
            <div className="relative hidden md:block" ref={calendarRef}>
              <button
                onClick={() => { setCalendarOpen(!calendarOpen); setMapOpen(false); }}
                className={`p-2 rounded-full transition-colors ${calendarOpen ? 'bg-accent text-text-on-accent' : 'hover:bg-card-bg text-text-muted hover:text-accent'}`}
                aria-label="Event Calendar"
              >
                <CalendarDays size={20} />
              </button>
              <AnimatePresence>
                {calendarOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-4 w-80 bg-card-bg border border-border-color rounded-2xl shadow-xl overflow-hidden"
                  >
                    <div className="p-4 border-b border-border-color bg-bg flex justify-between items-center">
                      <div>
                        <h4 className="font-display font-bold text-text-heading">Upcoming Events</h4>
                        <p className="text-xs text-text-muted">This week at Venite</p>
                      </div>
                      <span className="text-xs font-bold px-2 py-1 bg-accent/20 text-accent rounded-full">3 New</span>
                    </div>
                    <div className="divide-y divide-border-color">
                      {[
                        { day: '12', month: 'OCT', title: 'Fall Career Fair', time: '10:00 AM' },
                        { day: '15', month: 'OCT', title: 'Tech Innovation Summit', time: '2:00 PM' },
                        { day: '18', month: 'OCT', title: 'Alumni Networking Mixer', time: '6:30 PM' },
                      ].map((event, i) => (
                        <div key={i} className="p-3 hover:bg-bg transition-colors flex gap-4 items-center">
                          <div className="flex flex-col items-center justify-center bg-accent/10 rounded-lg w-12 h-12 shrink-0">
                            <span className="text-accent font-bold text-lg leading-none">{event.day}</span>
                            <span className="text-accent text-[10px] font-semibold">{event.month}</span>
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-text-heading">{event.title}</p>
                            <p className="text-xs text-text-muted">{event.time} • Main Campus</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="p-3 border-t border-border-color bg-bg text-center">
                      <button onClick={() => setCalendarOpen(false)} className="text-xs font-semibold text-accent hover:underline">
                        View all events &rarr;
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

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
