'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Venite provided me with the hands-on experience and industry connections I needed to launch my career straight out of college. The faculty truly cares about student success.",
    author: "Sarah Jenkins",
    role: "Class of 2024, Computer Science"
  },
  {
    quote: "The campus community is incredibly vibrant. From the diverse student body to the countless clubs, I've found my second home here. The resources for creative projects are unmatched.",
    author: "Marcus Rivera",
    role: "Class of 2025, Fine Arts"
  },
  {
    quote: "As a business major, the internship opportunities facilitated by the university were instrumental. The transition from classroom theory to boardroom practice felt seamless.",
    author: "Elena Zhao",
    role: "Class of 2023, Business Admin"
  }
];

export function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div 
      className="relative max-w-4xl mx-auto py-12"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 text-accent/20 dark:text-accent/10">
        <Quote size={80} />
      </div>
      
      <div className="relative min-h-[200px] flex items-center justify-center text-center px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="z-10"
          >
            <p className="text-xl md:text-2xl font-medium text-text-body mb-8 leading-relaxed max-w-3xl mx-auto">
              "{testimonials[current].quote}"
            </p>
            <div>
              <p className="font-display font-bold text-text-heading text-lg">
                {testimonials[current].author}
              </p>
              <p className="text-text-muted text-sm">
                {testimonials[current].role}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              i === current ? 'w-8 bg-accent' : 'bg-border-color hover:bg-text-muted'
            }`}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
