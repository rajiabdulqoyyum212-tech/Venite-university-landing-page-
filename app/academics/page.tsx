'use client';

import { PageTransition } from '@/components/page-transition';
import { motion } from 'motion/react';
import { Code, Users, Palette, Briefcase, Stethoscope, Scale } from 'lucide-react';

const programs = [
  {
    icon: Code,
    title: "Computer Science & Engineering",
    degrees: ["B.S. Computer Science", "M.S. Artificial Intelligence", "Ph.D. Software Engineering"],
    desc: "Dive deep into algorithms, machine learning, and systems architecture in our state-of-the-art Turing Lab.",
    color: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20"
  },
  {
    icon: Briefcase,
    title: "Business Administration",
    degrees: ["B.B.A. Finance", "MBA", "M.S. Data Analytics"],
    desc: "Develop leadership skills and strategic thinking with our globally recognized faculty and strong industry partnerships.",
    color: "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20"
  },
  {
    icon: Palette,
    title: "School of Fine Arts",
    degrees: ["B.F.A. Digital Design", "B.A. Art History", "M.F.A. Studio Art"],
    desc: "Unleash your creativity in our expansive studios equipped with traditional tools and modern digital fabrication tech.",
    color: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20"
  },
  {
    icon: Users,
    title: "Psychology & Sociology",
    degrees: ["B.A. Psychology", "B.S. Cognitive Science", "M.A. Counseling"],
    desc: "Explore the complexities of human behavior, society, and the mind with our comprehensive research programs.",
    color: "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20"
  },
  {
    icon: Stethoscope,
    title: "Health Sciences",
    degrees: ["B.S. Nursing", "Pre-Med Track", "M.S. Public Health"],
    desc: "Prepare for a fulfilling career in healthcare with hands-on clinical experience and cutting-edge medical research.",
    color: "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20"
  },
  {
    icon: Scale,
    title: "Law & Public Policy",
    degrees: ["B.A. Political Science", "J.D. Law", "Master of Public Admin"],
    desc: "Shape the future of governance and justice through rigorous debate, legal clinics, and policy analysis.",
    color: "bg-stone-500/10 text-stone-600 dark:text-stone-400 border-stone-500/20"
  }
];

export default function Academics() {
  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-text-heading mb-6">Academics & Programs</h1>
          <p className="text-lg text-text-muted">
            Explore our diverse range of faculties and degree programs designed to challenge, inspire, and prepare you for a rapidly evolving world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((prog, i) => {
            const Icon = prog.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group bg-card-bg border border-border-color rounded-3xl p-8 hover:shadow-xl hover:border-accent/50 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full -z-0 transform group-hover:scale-150 transition-transform duration-700" />
                
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border mb-6 relative z-10 ${prog.color}`}>
                  <Icon size={28} />
                </div>
                
                <h3 className="text-2xl font-display font-bold text-text-heading mb-4 relative z-10">{prog.title}</h3>
                <p className="text-text-muted mb-6 text-sm leading-relaxed relative z-10">{prog.desc}</p>
                
                <div className="space-y-2 relative z-10">
                  <h4 className="font-semibold text-xs uppercase tracking-wider text-text-muted mb-3">Programs Offered</h4>
                  {prog.degrees.map((deg, j) => (
                    <div key={j} className="flex items-center gap-2 text-sm text-text-body">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {deg}
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 pt-6 border-t border-border-color relative z-10">
                  <button className="text-text-link font-semibold text-sm hover:text-accent transition-colors">
                    View Faculty Details &rarr;
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </PageTransition>
  );
}
