import React from 'react';
import { SERVICES_DATA } from '../../data/portfolioData';
import { motion } from 'motion/react';
import { BrainCircuit, Eye, Workflow, Layout, BarChart3, CheckCircle2, ArrowRight } from 'lucide-react';

export const Services: React.FC = () => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'BrainCircuit':
        return <BrainCircuit className="w-6 h-6 text-blue-500" />;
      case 'Eye':
        return <Eye className="w-6 h-6 text-cyan-400" />;
      case 'Workflow':
        return <Workflow className="w-6 h-6 text-purple-500" />;
      case 'Layout':
        return <Layout className="w-6 h-6 text-emerald-500" />;
      default:
        return <BarChart3 className="w-6 h-6 text-amber-500" />;
    }
  };

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-slate-50/50 dark:bg-slate-950/50 border-y border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-500/10 text-blue-600 dark:text-cyan-400 border border-blue-500/20 mb-3 inline-block">
            Engineering Offerings
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
            Specialized AI Solutions &amp;{' '}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
            Partnering with engineering organizations to solve complex computational challenges, optimize ML inference, and build robust AI architectures.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500/5 to-transparent rounded-bl-full pointer-events-none group-hover:scale-150 transition-transform duration-500" />

              <div>
                <div className="p-3.5 rounded-2xl bg-slate-100 dark:bg-white/[0.05] w-fit mb-5 group-hover:scale-110 transition-transform">
                  {getServiceIcon(service.iconName)}
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-normal">
                  {service.description}
                </p>

                <div className="space-y-2.5 mb-8">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">Key Deliverables</div>
                  {service.deliverables.map((del, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="#contact"
                className="w-full py-3 px-4 rounded-2xl bg-slate-100 dark:bg-white/[0.05] text-slate-800 dark:text-slate-200 hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-500 hover:text-white font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 group/btn"
              >
                <span>Request Consultation</span>
                <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
