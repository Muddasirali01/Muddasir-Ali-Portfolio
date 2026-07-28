import React, { useState } from 'react';
import { SKILLS_DATA } from '../../data/portfolioData';
import { motion, AnimatePresence } from 'motion/react';
import { Code2, Layers, Cpu, Wrench, Database, CheckCircle2 } from 'lucide-react';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'programming' | 'frameworks' | 'libraries' | 'tools' | 'databases'>('all');

  const categories = [
    { id: 'all', label: 'All Skills', icon: <Code2 className="w-4 h-4" /> },
    { id: 'programming', label: 'Languages', icon: <Code2 className="w-4 h-4 text-blue-500" /> },
    { id: 'frameworks', label: 'Frameworks', icon: <Layers className="w-4 h-4 text-cyan-400" /> },
    { id: 'libraries', label: 'Libraries', icon: <Cpu className="w-4 h-4 text-purple-500" /> },
    { id: 'tools', label: 'Tools & CI/CD', icon: <Wrench className="w-4 h-4 text-amber-500" /> },
    { id: 'databases', label: 'Databases & Vectors', icon: <Database className="w-4 h-4 text-emerald-500" /> },
  ];

  const filteredSkills = activeTab === 'all'
    ? SKILLS_DATA
    : SKILLS_DATA.filter((s) => s.category === activeTab);

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-slate-50/50 dark:bg-slate-950/50 border-y border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-500/10 text-blue-600 dark:text-cyan-400 border border-blue-500/20 mb-3 inline-block">
            Technical Arsenal
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
            Skills &amp; Engineering Mastery
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
            Represented via animated progress metrics and verified domain proficiency badges.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-14">
          {categories.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id as any)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md shadow-blue-500/20 scale-105'
                    : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-blue-500/40 hover:bg-slate-50 dark:hover:bg-slate-800/60'
                }`}
              >
                {cat.icon}
                <span>{cat.label}</span>
                <span className={`px-2 py-0.5 rounded-full text-[11px] ${
                  isActive ? 'bg-white/20 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                }`}>
                  {cat.id === 'all' ? SKILLS_DATA.length : SKILLS_DATA.filter(s => s.category === cat.id).length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Animated Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 15 }}
                transition={{ duration: 0.35 }}
                whileHover={{ y: -4 }}
                className="p-6 rounded-3xl bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 shadow-sm hover:shadow-md transition-all relative group overflow-hidden"
              >
                {/* Background ambient gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-600 dark:text-cyan-400 group-hover:scale-110 transition-transform">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-base sm:text-lg text-slate-900 dark:text-white">
                      {skill.name}
                    </h3>
                  </div>

                  {skill.badge && (
                    <span className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-white/[0.05] text-blue-600 dark:text-cyan-400 border border-slate-200 dark:border-white/5">
                      {skill.badge}
                    </span>
                  )}
                </div>

                {/* Progress Bar Label */}
                <div className="flex justify-between items-center text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2">
                  <span>Proficiency Level</span>
                  <span className="text-slate-900 dark:text-white font-bold">{skill.level}%</span>
                </div>

                {/* Animated Progress Bar */}
                <div className="w-full h-2.5 rounded-full bg-slate-100 dark:bg-white/[0.05] overflow-hidden p-0.5 border border-slate-200/50 dark:border-white/5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="h-full rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 shadow-sm"
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
