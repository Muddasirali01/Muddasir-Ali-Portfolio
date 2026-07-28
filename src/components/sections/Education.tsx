import React from 'react';
import { EDUCATION_DATA } from '../../data/portfolioData';
import { motion } from 'motion/react';
import { GraduationCap, Award, BookOpen, MapPin, Calendar, CheckCircle2 } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20 mb-3 inline-block">
            Academic Foundation
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
            Education &amp; Academic{' '}
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Rigor
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
            Solid algorithmic, database, and scientific training bridging pre-medical biology with Bachelor of Computer Science studies at Lahore Garrison University.
          </p>
        </div>

        {/* Education Timeline / Card */}
        <div className="max-w-4xl mx-auto space-y-8">
          {EDUCATION_DATA.map((edu, idx) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-6 sm:p-10 rounded-3xl bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 shadow-lg relative overflow-hidden group"
            >
              {/* Top ambient glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-purple-500/10 via-blue-500/5 to-transparent rounded-bl-full pointer-events-none" />

              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-8 pb-6 border-b border-slate-200 dark:border-white/5">
                <div className="flex items-start gap-4">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 text-white shadow-md shrink-0">
                    <GraduationCap className="w-8 h-8" />
                  </div>
                  <div>
                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20 mb-2 inline-block">
                      {edu.id === 'lgu-bs-cs' ? 'Undergraduate CS Scholar' : 'Pre-Medical Foundation'}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                      {edu.institution}
                    </h3>
                    <p className="text-lg font-bold text-blue-600 dark:text-cyan-400 mt-1">
                      {edu.degree}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col md:items-end text-sm text-slate-500 dark:text-slate-400 space-y-1">
                  <span className="flex items-center gap-1.5 font-bold text-slate-800 dark:text-slate-200">
                    <Calendar className="w-4 h-4 text-purple-500" /> {edu.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4" /> {edu.location}
                  </span>
                  {edu.gpa && (
                    <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-extrabold text-xs mt-1 border border-emerald-500/20">
                      ★ GPA: {edu.gpa}
                    </span>
                  )}
                </div>
              </div>

              {/* Achievements & Honors */}
              <div className="mb-8">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4 flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-500" /> Academic Honors &amp; Thesis
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {edu.achievements.map((ach, i) => (
                    <div key={i} className="p-4 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 leading-relaxed">{ach}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Coursework Suite */}
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-blue-500" /> Advanced AI &amp; Mathematical Coursework
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {edu.courses.map((course, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-slate-100 dark:bg-white/[0.04] text-slate-800 dark:text-slate-200 text-xs sm:text-sm font-semibold border border-slate-200/80 dark:border-white/5 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                      <span className="truncate">{course}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
