'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const stories = [
  {
    title: "My First Year in the Turing Tech Center",
    excerpt: "The transition from high school coding clubs to a university-level AI lab was daunting, but the mentorship I received made all the difference.",
    author: "Alex Chen",
    role: "Computer Science, '28",
    image: "https://picsum.photos/seed/story1/600/400",
    avatar: "https://picsum.photos/seed/alex/100/100",
    date: "Oct 5, 2026"
  },
  {
    title: "Sustainable Architecture on Campus",
    excerpt: "Exploring the design behind the Green Quad and how Venite is pushing the boundaries of carbon-neutral student housing.",
    author: "Maya Patel",
    role: "Architecture, '27",
    image: "https://picsum.photos/seed/story2/600/400",
    avatar: "https://picsum.photos/seed/maya/100/100",
    date: "Sep 28, 2026"
  },
  {
    title: "A Semester Abroad: The Global Exchange",
    excerpt: "How studying in Kyoto for six months shifted my perspective on international business and cross-cultural communication.",
    author: "David Kim",
    role: "Business Admin, '26",
    image: "https://picsum.photos/seed/story3/600/400",
    avatar: "https://picsum.photos/seed/david/100/100",
    date: "Sep 15, 2026"
  }
];

export function CampusStories() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {stories.map((story, i) => (
        <motion.article
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.6 }}
          className="flex flex-col bg-bg border border-border-color rounded-3xl overflow-hidden group hover:shadow-xl hover:border-accent/50 transition-all duration-300"
        >
          <div className="h-48 relative overflow-hidden border-b border-border-color">
            <Image
              src={story.image}
              alt={story.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-4 left-4 bg-bg/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-text-muted">
              {story.date}
            </div>
          </div>
          
          <div className="p-6 flex-1 flex flex-col">
            <h3 className="text-xl font-display font-bold text-text-heading mb-3 group-hover:text-accent transition-colors">
              {story.title}
            </h3>
            <p className="text-text-muted text-sm leading-relaxed mb-6 flex-1">
              {story.excerpt}
            </p>
            
            <div className="flex items-center justify-between mt-auto pt-6 border-t border-border-color">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden relative border border-border-color">
                  <Image
                    src={story.avatar}
                    alt={story.author}
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-text-heading">{story.author}</p>
                  <p className="text-xs text-text-muted">{story.role}</p>
                </div>
              </div>
              
              <Link href="#" className="w-10 h-10 rounded-full bg-card-bg flex items-center justify-center text-text-heading group-hover:bg-accent group-hover:text-text-on-accent transition-colors shrink-0" aria-label={`Read more about ${story.title}`}>
                <ArrowRight size={18} className="group-hover:-rotate-45 transition-transform" />
              </Link>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
