import React, { useState } from 'react';
import { EXPERIENCE_DATA, PERSONAL_INFO } from '../../data/portfolioData';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Sparkles, ArrowRight, Code } from 'lucide-react';

export const Experience: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Internship' | 'Research' | 'Freelance' | 'Volunteer'>('All');

  const filters = ['All', 'Internship', 'Research', 'Freelance', 'Volunteer'];

  const filteredExperiences = activeFilter === 'All'
    ? EXPERIENCE_DATA
    : EXPERIENCE_DATA.filter(item => item.type === activeFilter);

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-slate-50/50 dark:bg-slate-950/50 border-y border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-500/10 text-blue-600 dark:text-cyan-400 border border-blue-500/20 mb-3 inline-block">
            Career Journey
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
            Professional &amp; Research{' '}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
            Demonstrating tangible impact across industry internships, top-tier academic AI laboratories, and autonomous startups.
          </p>
        </div>

        {/* Seeking Opportunities Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-600/10 via-cyan-500/10 to-purple-600/10 dark:from-blue-900/30 dark:via-cyan-900/20 dark:to-purple-900/30 border border-blue-500/30 dark:border-cyan-500/30 shadow-md flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-start gap-4">
            <div className="p-3.5 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-md shrink-0">
              <Sparkles className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-1">
                Currently seeking AI/ML Internship &amp; Full-Time roles!
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Available for Fall 2026, Winter 2027, and post-graduation engineering positions. Open to remote or San Francisco Bay Area.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="px-6 py-3 rounded-2xl font-semibold bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:scale-105 transition-all shadow-md shrink-0 text-sm flex items-center gap-2"
          >
            Let's Talk <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-16">
          {filters.map((f) => {
            const isActive = activeFilter === f;
            return (
              <button
                key={f}
                onClick={() => setActiveFilter(f as any)}
                className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md scale-105'
                    : 'bg-white dark:bg-white/[0.03] text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/5 hover:border-blue-500/40'
                }`}
              >
                {f}
              </button>
            );
          })}
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-4xl mx-auto pl-6 sm:pl-8 border-l-2 border-slate-200 dark:border-white/10 space-y-12">
          <AnimatePresence mode="popLayout">
            {filteredExperiences.map((exp, idx) => (
              <motion.div
                key={exp.id}
                layout
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="relative group"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white dark:bg-[#020617] border-4 border-blue-600 dark:border-cyan-400 shadow-sm flex items-center justify-center group-hover:scale-125 transition-transform" />

                {/* Experience Card */}
                <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 shadow-sm hover:shadow-md transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <div>
                      <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-500/10 text-blue-600 dark:text-cyan-400 border border-blue-500/20 mr-2">
                        {exp.type}
                      </span>
                      {exp.current && (
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                          ● Active
                        </span>
                      )}
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-2">
                        {exp.role}
                      </h3>
                      <div className="text-base font-semibold text-blue-600 dark:text-cyan-400">
                        {exp.company}
                      </div>
                    </div>

                    <div className="flex flex-col sm:items-end text-xs sm:text-sm text-slate-500 dark:text-slate-400 gap-1">
                      <span className="flex items-center gap-1 font-medium text-slate-700 dark:text-slate-300">
                        <Calendar className="w-4 h-4 text-blue-500" /> {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" /> {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Bullet Points */}
                  <ul className="space-y-2.5 mb-6 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-1" />
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100 dark:border-white/5">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-xl text-xs font-medium bg-slate-100 dark:bg-white/[0.05] text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
