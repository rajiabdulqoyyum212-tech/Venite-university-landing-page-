'use client';

import { motion } from 'motion/react';
import { BookOpen, GraduationCap, Atom, Globe, Library } from 'lucide-react';
import { useEffect, useState } from 'react';

const icons = [BookOpen, GraduationCap, Atom, Globe, Library];

export function FloatingBackground() {
  const [elements, setElements] = useState<any[]>([]);

  useEffect(() => {
    // Generate random positions only on the client
    const newElements = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      Icon: icons[i % icons.length],
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 40 + 20,
      duration: Math.random() * 20 + 20,
      delay: Math.random() * 10,
    }));
    setElements(newElements);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {elements.map((el) => {
        const Icon = el.Icon;
        return (
          <motion.div
            key={el.id}
            className="absolute text-accent/10 dark:text-accent/5"
            style={{ left: el.left, top: el.top }}
            animate={{
              y: [0, -100, 0],
              x: [0, 50, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: el.duration,
              delay: el.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <Icon size={el.size} />
          </motion.div>
        );
      })}
    </div>
  );
}
