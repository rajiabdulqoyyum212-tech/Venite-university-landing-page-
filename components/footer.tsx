import Link from 'next/link';
import { GraduationCap, Facebook, Twitter, Instagram, Linkedin, MapPin, Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-bg-secondary border-t border-border-color pt-16 pb-8 mt-auto relative z-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-2 group inline-flex">
            <div className="bg-accent text-text-on-accent p-1.5 rounded-full">
              <GraduationCap size={24} />
            </div>
            <span className="font-display font-bold text-xl text-text-heading tracking-tight">
              Venite University
            </span>
          </Link>
          <p className="text-text-muted text-sm leading-relaxed max-w-xs">
            Empowering the next generation of leaders, innovators, and thinkers with world-class education and boundless opportunities.
          </p>
        </div>

        <div>
          <h3 className="font-display font-semibold text-text-heading text-lg mb-4">Quick Links</h3>
          <ul className="space-y-3">
            {[
              { n: 'Programs & Degrees', p: '/academics' },
              { n: 'Admissions', p: '/contact' },
              { n: 'About Us', p: '/about' },
              { n: 'Campus Life', p: '#' },
              { n: 'Financial Aid', p: '#' },
            ].map((link) => (
              <li key={link.n}>
                <Link href={link.p} className="text-text-muted hover:text-accent transition-colors text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/50" />
                  {link.n}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display font-semibold text-text-heading text-lg mb-4">Contact</h3>
          <ul className="space-y-4 text-sm text-text-muted">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-accent shrink-0 mt-0.5" />
              <span>123 Scholar Way, Knowledge City, Education State 10101</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-accent shrink-0" />
              <span>+1 (555) 123-4567</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-accent shrink-0" />
              <span>admissions@venite.edu</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display font-semibold text-text-heading text-lg mb-4">Connect With Us</h3>
          <div className="flex items-center gap-4">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="p-2.5 rounded-full bg-card-bg text-text-muted hover:bg-accent hover:text-text-on-accent transition-all duration-300"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 border-t border-border-color pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-text-muted text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} Venite University. All rights reserved.
        </p>
        <div className="flex gap-6 text-sm text-text-muted">
          <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
