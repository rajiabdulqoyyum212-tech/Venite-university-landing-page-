'use client';

import { useRef } from 'react';
import { PageTransition } from '@/components/page-transition';
import { AnimatedCounter } from '@/components/animated-counter';
import { ProgramFinder } from '@/components/program-finder';
import { TestimonialCarousel } from '@/components/testimonial-carousel';
import { EventCountdown } from '@/components/event-countdown';
import { VirtualTour } from '@/components/virtual-tour';
import { CampusStories } from '@/components/campus-stories';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, BookOpen, Globe, Users, Trophy, CalendarDays, MapPin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

import { TypewriterTagline } from '@/components/typewriter-tagline';

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <PageTransition>
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[90vh] flex items-center justify-center px-6 overflow-hidden">
        <motion.div style={{ y: yBg }} className="absolute inset-0 z-0">
          <Image
            src="https://picsum.photos/seed/venite/1920/1080"
            alt="Venite University Campus"
            fill
            className="object-cover object-center opacity-40 dark:opacity-20 mix-blend-luminosity scale-110"
            referrerPolicy="no-referrer"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bg/90 via-bg/70 to-bg" />
        </motion.div>
        <motion.div style={{ y: yText, opacity: opacityText }} className="max-w-5xl mx-auto text-center z-10 pt-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1,
                transition: { staggerChildren: 0.1, delayChildren: 0.2 }
              }
            }}
          >
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <span className="inline-block py-1 px-3 rounded-full bg-accent/10 text-text-link font-semibold text-sm mb-6 border border-accent/20">
                Admissions now open for Fall 2026
              </span>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight text-text-heading mb-6 overflow-hidden flex flex-col md:block items-center">
              <span className="flex flex-wrap justify-center md:inline-flex md:flex-nowrap gap-x-3 md:gap-x-4 lg:gap-x-5">
                {"Shape Your Future at".split(" ").map((word, i) => (
                  <motion.span
                    key={i}
                    className="inline-block"
                    variants={{
                      hidden: { opacity: 0, y: 50, skewY: 10 },
                      visible: { opacity: 1, y: 0, skewY: 0, transition: { duration: 0.6, ease: [0.215, 0.610, 0.355, 1.000] } }
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
              <br className="hidden md:block" />
              <motion.span
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.5 } }
                }}
                className="inline-block text-gradient mt-2 md:mt-4"
              >
                {"Venite University".split("").map((char, i) => (
                  <motion.span
                    key={i}
                    variants={{
                      hidden: { opacity: 0, scale: 0.5, rotateX: 90 },
                      visible: { opacity: 1, scale: 1, rotateX: 0, transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] } }
                    }}
                    className="inline-block origin-bottom"
                    style={{ whiteSpace: "pre" }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.span>
            </h1>
            <motion.p 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
              className="text-lg md:text-xl text-text-muted mb-10 max-w-2xl mx-auto leading-relaxed h-[60px] md:h-auto">
              Discover a world-class education <TypewriterTagline />
              <br className="hidden md:block" />
              Join a vibrant community dedicated to pushing boundaries and solving global challenges.
            </motion.p>
            <motion.div 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/academics" 
                className="w-full sm:w-auto px-8 py-4 bg-accent text-text-on-accent rounded-full font-semibold hover:bg-accent/90 transition-all hover:scale-105 shadow-xl shadow-accent/20 flex items-center justify-center gap-2"
              >
                Explore Programs
                <ArrowRight size={18} />
              </Link>
              <Link 
                href="/about" 
                className="w-full sm:w-auto px-8 py-4 bg-card-bg border border-border-color text-text-heading rounded-full font-semibold hover:border-accent transition-all hover:-translate-y-1"
              >
                Discover Venite
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-bg-secondary border-y border-border-color">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
            {[
              { icon: Users, label: "Students", value: 15000, suffix: "+" },
              { icon: BookOpen, label: "Programs", value: 120, suffix: "" },
              { icon: Globe, label: "Countries", value: 85, suffix: "+" },
              { icon: Trophy, label: "Ranked", value: 1, suffix: "st" },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex flex-col items-center gap-3"
              >
                <div className="p-3 bg-accent/10 rounded-2xl text-accent mb-2">
                  <stat.icon size={28} />
                </div>
                <div className="text-4xl md:text-5xl font-display font-bold text-text-heading">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-text-muted font-medium uppercase tracking-wider text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Finder Section */}
      <section className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-text-heading mb-4">Find Your Path</h2>
            <p className="text-text-muted max-w-2xl mx-auto text-lg">
              Not sure which degree is right for you? Take our quick assessment to discover programs tailored to your interests and goals.
            </p>
          </div>
          <ProgramFinder />
        </div>
      </section>

      {/* Featured Highlights (Cards) */}
      <section className="py-24 bg-card-bg px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-display font-bold text-text-heading mb-4">Experience Excellence</h2>
              <p className="text-text-muted text-lg">From state-of-the-art research facilities to an unforgettable campus life.</p>
            </div>
            <Link href="/about" className="text-text-link hover:text-accent font-semibold flex items-center gap-1 group">
              Learn more about campus life 
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation Labs",
                desc: "Work with cutting-edge technology in our newly expanded engineering and design complexes.",
                img: "https://picsum.photos/seed/lab/600/400"
              },
              {
                title: "Global Study",
                desc: "Partner institutions in over 40 countries offering seamless semester exchange programs.",
                img: "https://picsum.photos/seed/global/600/400"
              },
              {
                title: "Vibrant Campus",
                desc: "Over 200 student-run clubs, organizations, and intramural sports teams to join.",
                img: "https://picsum.photos/seed/campus/600/400"
              }
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group rounded-3xl overflow-hidden border border-border-color bg-bg shadow-sm hover:shadow-xl hover:border-accent/50 transition-all duration-500"
                style={{ perspective: 1000 }}
              >
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-accent/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-500" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={card.img} alt={card.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                </div>
                <div className="p-8 relative bg-bg">
                  <div className="w-12 h-1 bg-accent mb-6 transform origin-left group-hover:scale-x-150 transition-transform duration-500" />
                  <h3 className="text-xl font-display font-bold text-text-heading mb-3">{card.title}</h3>
                  <p className="text-text-muted leading-relaxed">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Tour Section */}
      <section className="py-24 px-6 bg-bg border-t border-border-color">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-display font-bold text-text-heading mb-4">Explore the Campus</h2>
              <p className="text-text-muted text-lg">Take an interactive virtual tour of Venite University before you arrive.</p>
            </div>
          </div>
          <VirtualTour />
        </div>
      </section>

      {/* Campus Life Gallery */}
      <section className="py-24 px-6 border-t border-border-color">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-text-heading mb-4">Life at Venite</h2>
            <p className="text-text-muted max-w-2xl mx-auto text-lg">
              Explore our vibrant campus and community through the lens.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                src: "https://picsum.photos/seed/venite1/800/600",
                alt: "Students studying in the Oasis Library with modern architecture",
                className: "col-span-2 md:col-span-1 row-span-2"
              },
              {
                src: "https://picsum.photos/seed/venite2/800/400",
                alt: "Aerial view of the Green Quad during autumn",
                className: "col-span-1 md:col-span-2"
              },
              {
                src: "https://picsum.photos/seed/venite3/400/400",
                alt: "Engineering students working on a robotics project",
                className: "col-span-1"
              },
              {
                src: "https://picsum.photos/seed/venite4/400/400",
                alt: "A diverse group of students chatting outside the student center",
                className: "col-span-1"
              },
              {
                src: "https://picsum.photos/seed/venite5/800/800",
                alt: "Graduation day celebration in front of the main building",
                className: "col-span-2 md:col-span-2 row-span-2"
              },
              {
                src: "https://picsum.photos/seed/venite6/400/800",
                alt: "A professor giving a lecture in a state-of-the-art auditorium",
                className: "col-span-2 md:col-span-1 row-span-2"
              }
            ].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`relative rounded-3xl overflow-hidden group ${img.className} min-h-[200px] md:min-h-[300px] bg-card-bg border border-border-color`}
              >
                <div className="absolute inset-0 bg-accent/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-24 px-6 bg-bg-secondary border-t border-border-color">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            <div className="flex-1 w-full">
              <div className="mb-12">
                <h2 className="text-4xl font-display font-bold text-text-heading mb-4">Upcoming Events</h2>
                <p className="text-text-muted text-lg">
                  Stay engaged with the Venite community. Join us for these exciting upcoming programmes.
                </p>
              </div>
              
              <div className="space-y-6">
                {[
                  { title: "Fall Career Fair", date: "Oct 12, 2026", time: "10:00 AM - 4:00 PM", location: "Main Campus Arena" },
                  { title: "Tech Innovation Summit", date: "Oct 15, 2026", time: "2:00 PM - 6:00 PM", location: "Turing Tech Center" },
                  { title: "Alumni Networking Mixer", date: "Oct 18, 2026", time: "6:30 PM - 9:00 PM", location: "The Grand Hall" }
                ].map((event, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="flex flex-col sm:flex-row gap-6 p-6 bg-bg border border-border-color rounded-2xl hover:border-accent/50 hover:shadow-md transition-all group"
                  >
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-text-heading mb-2 group-hover:text-accent transition-colors">{event.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-text-muted">
                        <span className="flex items-center gap-1"><CalendarDays size={16} className="text-accent" /> {event.date}</span>
                        <span className="flex items-center gap-1"><MapPin size={16} className="text-accent" /> {event.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center sm:justify-end">
                      <button className="px-5 py-2 text-sm font-semibold rounded-full bg-card-bg border border-border-color hover:bg-accent hover:text-text-on-accent transition-colors">
                        RSVP
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-8">
                 <Link href="#" className="text-text-link font-semibold hover:text-accent transition-colors flex items-center gap-2">
                   View full calendar <ArrowRight size={16} />
                 </Link>
              </div>
            </div>
            
            <div className="w-full lg:w-[450px] shrink-0">
               <EventCountdown 
                  eventName="Annual Tech Innovation Summit" 
                  targetDate="2026-10-15T14:00:00" 
               />
            </div>
          </div>
        </div>
      </section>

      {/* Campus Stories */}
      <section className="py-24 px-6 border-t border-border-color">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-display font-bold text-text-heading mb-4">Campus Stories</h2>
              <p className="text-text-muted text-lg">Hear directly from our students about their Venite experience.</p>
            </div>
            <Link href="#" className="text-text-link hover:text-accent font-semibold flex items-center gap-1 group">
              Read all stories
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <CampusStories />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-text-heading">Student Voices</h2>
          </div>
          <TestimonialCarousel />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-accent/5 dark:bg-accent/10" />
        <div className="max-w-4xl mx-auto text-center relative z-10 border border-accent/20 bg-bg/50 backdrop-blur-lg p-12 md:p-20 rounded-[3rem]">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-text-heading mb-6">Ready to Take the Next Step?</h2>
          <p className="text-lg text-text-muted mb-10 max-w-xl mx-auto">
            Join the ranks of Venite University alumni who are changing the world. Applications for the upcoming semester are now open.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-2 px-10 py-5 bg-accent text-text-on-accent rounded-full font-bold text-lg hover:bg-accent/90 transition-all hover:scale-105 shadow-xl shadow-accent/20"
          >
            Start Your Application
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </PageTransition>
  );
}
