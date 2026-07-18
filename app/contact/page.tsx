'use client';

import { PageTransition } from '@/components/page-transition';
import { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-text-heading mb-6">Get in Touch</h1>
          <p className="text-lg text-text-muted">
            Have questions about admissions, campus life, or programs? We&apos;re here to help. Reach out to us below.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* Contact Info & Map Placeholder */}
          <div className="space-y-12">
            <div className="bg-card-bg border border-border-color p-8 rounded-3xl">
              <h3 className="text-2xl font-display font-bold text-text-heading mb-6">Contact Information</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 text-accent rounded-xl shrink-0"><MapPin size={24} /></div>
                  <div>
                    <h4 className="font-semibold text-text-heading mb-1">Admissions Office</h4>
                    <p className="text-text-muted text-sm">123 Scholar Way, Building A<br />Knowledge City, Education State 10101</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 text-accent rounded-xl shrink-0"><Phone size={24} /></div>
                  <div>
                    <h4 className="font-semibold text-text-heading mb-1">Phone</h4>
                    <p className="text-text-muted text-sm">+1 (555) 123-4567<br />Mon-Fri, 9am - 5pm EST</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 text-accent rounded-xl shrink-0"><Mail size={24} /></div>
                  <div>
                    <h4 className="font-semibold text-text-heading mb-1">Email</h4>
                    <p className="text-text-muted text-sm">admissions@venite.edu<br />info@venite.edu</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Map Placeholder Wrapper (requires neutral card frame per prompt) */}
            <div className="bg-card-bg border border-border-color p-2 rounded-3xl overflow-hidden aspect-video relative flex items-center justify-center">
              <div className="absolute inset-0 bg-bg-secondary flex flex-col items-center justify-center text-text-muted p-6 text-center border-2 border-dashed border-border-color m-2 rounded-2xl">
                <MapPin size={48} className="mb-4 opacity-50" />
                <p className="font-medium text-lg text-text-heading mb-1">Campus Map View</p>
                <p className="text-sm">Interactive map widget placeholder.<br/> Wrapped in neutral theme frame.</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-bg-secondary p-8 md:p-12 rounded-3xl border border-border-color shadow-lg relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-accent to-accent-secondary" />
            <h3 className="text-3xl font-display font-bold text-text-heading mb-8">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text-heading mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 bg-bg border border-border-color rounded-xl focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all text-text-body"
                  placeholder="Jane Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-heading mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 bg-bg border border-border-color rounded-xl focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all text-text-body"
                  placeholder="jane@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-heading mb-2">Your Message</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 bg-bg border border-border-color rounded-xl focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all text-text-body resize-none"
                  placeholder="How can we help you?"
                />
              </div>

              <button
                type="submit"
                disabled={status !== 'idle'}
                className="w-full py-4 bg-accent text-text-on-accent font-bold rounded-xl hover:bg-accent/90 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {status === 'idle' && <><Send size={18} /> Send Message</>}
                {status === 'submitting' && <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }}><Clock size={18} /></motion.div>}
                {status === 'success' && <span>Message Sent!</span>}
              </button>
            </form>
          </div>

        </div>
      </div>
    </PageTransition>
  );
}
