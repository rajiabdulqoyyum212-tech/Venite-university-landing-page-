'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const questions = [
  {
    q: "What drives you the most?",
    options: [
      { text: "Solving complex logic problems", result: "Computer Science" },
      { text: "Understanding human behavior", result: "Psychology" },
      { text: "Creating visual or written art", result: "Fine Arts" },
      { text: "Managing projects and leading teams", result: "Business Administration" }
    ]
  },
  {
    q: "How do you prefer to work?",
    options: [
      { text: "In a lab or focused environment", result: "Computer Science" },
      { text: "Directly helping others", result: "Psychology" },
      { text: "In a studio or creative space", result: "Fine Arts" },
      { text: "In an office or dynamic startup", result: "Business Administration" }
    ]
  }
];

export function ProgramFinder() {
  const [step, setStep] = useState(0);
  const [scores, setScores] = useState<Record<string, number>>({});

  const handleOption = (result: string) => {
    setScores(prev => ({ ...prev, [result]: (prev[result] || 0) + 1 }));
    setStep(prev => prev + 1);
  };

  const getTopResult = () => {
    return Object.entries(scores).sort((a, b) => b[1] - a[1])[0]?.[0] || "Undecided";
  };

  const reset = () => {
    setStep(0);
    setScores({});
  };

  return (
    <div className="bg-card-bg border border-border-color rounded-3xl p-8 shadow-xl max-w-2xl mx-auto overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-border-color">
        <motion.div 
          className="h-full bg-accent"
          initial={{ width: 0 }}
          animate={{ width: `${(step / questions.length) * 100}%` }}
        />
      </div>
      
      <h3 className="text-2xl font-display font-bold text-text-heading mb-6">Not sure what to study?</h3>
      
      <AnimatePresence mode="wait">
        {step < questions.length ? (
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-text-body mb-6 text-lg">{questions[step].q}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {questions[step].options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleOption(opt.result)}
                  className="p-4 text-left rounded-xl border border-border-color bg-bg hover:border-accent hover:shadow-md transition-all text-sm font-medium text-text-body hover:text-accent"
                >
                  {opt.text}
                </button>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="result"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-6"
          >
            <p className="text-text-muted mb-2">Based on your answers, you might enjoy:</p>
            <h4 className="text-3xl font-display font-bold text-text-heading mb-6 text-gradient">
              {getTopResult()}
            </h4>
            <div className="flex gap-4 justify-center">
              <button 
                onClick={reset}
                className="px-6 py-2 rounded-full border border-border-color hover:bg-bg-secondary transition-colors text-sm font-medium"
              >
                Retake Quiz
              </button>
              <a 
                href="/academics" 
                className="px-6 py-2 rounded-full bg-accent text-text-on-accent transition-colors hover:bg-accent/90 text-sm font-medium shadow-md shadow-accent/20"
              >
                View Program Details
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
