import React from 'react';
import { ACHIEVEMENTS_DATA } from '../../data/portfolioData';
import { motion } from 'motion/react';
import { Trophy, FileText, Star, Code2, Award, Sparkles } from 'lucide-react';

export const Achievements: React.FC = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'trophy':
        return <Trophy className="w-6 h-6 text-amber-500" />;
      case 'paper':
        return <FileText className="w-6 h-6 text-blue-500" />;
      case 'star':
        return <Star className="w-6 h-6 text-purple-500" />;
      case 'code':
        return <Code2 className="w-6 h-6 text-cyan-400" />;
      default:
        return <Award className="w-6 h-6 text-emerald-500" />;
    }
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 mb-3 inline-block">
            Milestones &amp; Honors
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
            Awards, Research &amp;{' '}
            <span className="bg-gradient-to-r from-amber-500 via-purple-500 to-blue-600 bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
            Recognized for academic excellence, hackathon victories, and open-source contributions to the AI community.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ACHIEVEMENTS_DATA.map((ach, idx) => (
            <motion.div
              key={ach.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4 group relative overflow-hidden"
            >
              {/* Subtle accent corner */}
              <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-gradient-to-br from-amber-500/10 to-transparent pointer-events-none group-hover:scale-150 transition-transform duration-500" />

              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-3.5 rounded-2xl bg-slate-100 dark:bg-white/[0.05] shrink-0 group-hover:scale-110 transition-transform">
                    {getIcon(ach.iconType)}
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-cyan-400">
                      {ach.organization}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mt-0.5">
                      {ach.title}
                    </h3>
                  </div>
                </div>

                {ach.metric && (
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 shrink-0 flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> {ach.metric}
                  </span>
                )}
              </div>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                {ach.description}
              </p>

              <div className="pt-3 border-t border-slate-100 dark:border-white/5 flex justify-between items-center text-xs text-slate-400 dark:text-slate-500 font-semibold">
                <span>Date: {ach.date}</span>
                <span>Verified Milestone</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
