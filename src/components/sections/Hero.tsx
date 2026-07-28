import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { motion } from 'motion/react';
import { Download, ArrowRight, Mail, Github, Linkedin, Sparkles, Terminal, Cpu } from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
  onOpenAiDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onOpenAiDemo }) => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing animation effect
  useEffect(() => {
    const currentFullTitle = PERSONAL_INFO.typingTitles[titleIndex];
    const typingSpeed = isDeleting ? 30 : 70;

    const timer = setTimeout(() => {
      if (!isDeleting && displayedText !== currentFullTitle) {
        setDisplayedText(currentFullTitle.substring(0, displayedText.length + 1));
      } else if (isDeleting && displayedText !== '') {
        setDisplayedText(currentFullTitle.substring(0, displayedText.length - 1));
      } else if (!isDeleting && displayedText === currentFullTitle) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayedText === '') {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % PERSONAL_INFO.typingTitles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, titleIndex]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden z-10">
      {/* Decorative background lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[800px] h-[500px] bg-gradient-to-tr from-blue-600/15 via-cyan-500/10 to-purple-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto w-full text-center">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 dark:bg-blue-500/15 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs sm:text-sm font-semibold mb-8 shadow-sm backdrop-blur-md"
        >
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
          </span>
          <span>{PERSONAL_INFO.status}</span>
          <span className="text-blue-400/50">|</span>
          <span className="text-blue-600 dark:text-cyan-400 flex items-center gap-1 font-bold">
            <Cpu className="w-3.5 h-3.5" /> Lahore Garrison CS
          </span>
        </motion.div>

        {/* Greeting & Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4"
        >
          Hello, I'm{' '}
          <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 bg-clip-text text-transparent">
            {PERSONAL_INFO.shortName}
          </span>
        </motion.h1>

        {/* Typing Title Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="h-8 sm:h-10 flex items-center justify-center text-lg sm:text-2xl md:text-3xl font-bold text-slate-600 dark:text-slate-300 mb-6"
        >
          <span className="text-blue-600 dark:text-cyan-400 mr-2">&gt;</span>
          <span>{displayedText}</span>
          <span className="inline-block w-0.5 h-6 sm:h-8 ml-1 bg-blue-600 dark:bg-cyan-400 animate-pulse" />
        </motion.div>

        {/* Short Introduction */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-2xl mx-auto text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed font-medium"
        >
          {PERSONAL_INFO.bio}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-14"
        >
          <button
            onClick={onOpenResume}
            className="flex items-center gap-2 px-6 py-3.5 rounded-2xl font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/30 hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300"
          >
            <Download className="w-5 h-5" /> Download Resume
          </button>

          <button
            onClick={() => scrollToSection('projects')}
            className="flex items-center gap-2 px-6 py-3.5 rounded-2xl font-semibold bg-white dark:bg-white/[0.03] text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/5 hover:bg-slate-50 dark:hover:bg-white/[0.06] hover:scale-105 transition-all duration-300 shadow-sm"
          >
            View Projects <ArrowRight className="w-5 h-5 text-blue-500" />
          </button>

          <button
            onClick={onOpenAiDemo}
            className="flex items-center gap-2 px-6 py-3.5 rounded-2xl font-semibold bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20 hover:bg-purple-500/20 hover:scale-105 transition-all duration-300"
          >
            <Sparkles className="w-5 h-5 animate-spin" style={{ animationDuration: '6s' }} /> Chat with AI Twin
          </button>

          <button
            onClick={() => scrollToSection('contact')}
            className="flex items-center gap-2 px-6 py-3.5 rounded-2xl font-semibold bg-slate-100 dark:bg-white/[0.03] text-slate-700 dark:text-slate-300 border border-transparent dark:border-white/5 hover:text-blue-600 dark:hover:text-cyan-400 transition-all duration-300"
          >
            <Mail className="w-5 h-5" /> Contact Me
          </button>
        </motion.div>

        {/* Social Icons Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center justify-center gap-4 mb-16"
        >
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-900/80 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-cyan-400 border border-slate-200 dark:border-slate-800 hover:scale-110 transition-all shadow-sm"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-900/80 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-cyan-400 border border-slate-200 dark:border-slate-800 hover:scale-110 transition-all shadow-sm"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-900/80 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-cyan-400 border border-slate-200 dark:border-slate-800 hover:scale-110 transition-all shadow-sm"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </motion.div>

        {/* Quick Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white/70 dark:bg-white/[0.02] border border-slate-200/80 dark:border-white/5 backdrop-blur-md shadow-sm hover:shadow-md transition-all text-center group"
            >
              <div className="text-slate-500 text-xs uppercase tracking-widest mb-1 group-hover:text-blue-400 transition-colors font-semibold">
                {stat.label}
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-0.5 group-hover:scale-105 transition-transform">
                {stat.value}
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                {stat.detail}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
