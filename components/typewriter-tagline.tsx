'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const taglines = [
  "where innovation meets tradition.",
  "where curiosity drives discovery.",
  "where leaders are forged.",
  "where your future begins."
];

export function TypewriterTagline() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentTagline = taglines[index];

    if (isDeleting) {
      timer = setTimeout(() => {
        setText((prev) => prev.slice(0, -1));
        if (text === '') {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % taglines.length);
        }
      }, 50); // Deletion speed
    } else {
      timer = setTimeout(() => {
        setText(currentTagline.slice(0, text.length + 1));
        if (text === currentTagline) {
          timer = setTimeout(() => setIsDeleting(true), 2000); // Pause before deleting
        }
      }, 100); // Typing speed
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, index]);

  return (
    <span className="inline-block min-w-[280px] text-accent text-left font-medium">
      {text}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
        className="inline-block ml-[2px] w-[2px] h-[1.2em] bg-accent align-middle"
      />
    </span>
  );
}
