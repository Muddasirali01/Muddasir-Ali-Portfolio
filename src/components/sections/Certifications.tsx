import React from 'react';
import { CERTIFICATIONS_DATA } from '../../data/portfolioData';
import { motion } from 'motion/react';
import { Award, ExternalLink, Calendar, ShieldCheck, Clock } from 'lucide-react';

export const Certifications: React.FC = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-slate-50/50 dark:bg-slate-950/50 border-y border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-3 inline-block">
            Verified Credentials
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
            Professional{' '}
            <span className="bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
            Industry-recognized certifications and specialized coursework across Machine Learning, n8n Automation, Relational MySQL Databases, and Cisco Networking.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CERTIFICATIONS_DATA.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className={`rounded-3xl border overflow-hidden flex flex-col justify-between transition-all duration-300 relative ${
                cert.comingSoon
                  ? 'bg-slate-100/60 dark:bg-white/[0.01] border-dashed border-slate-300 dark:border-white/5 opacity-80'
                  : 'bg-white dark:bg-white/[0.02] border-slate-200 dark:border-white/5 shadow-sm hover:shadow-xl'
              }`}
            >
              {/* Image Banner */}
              <div className="relative w-full h-48 overflow-hidden bg-slate-950">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className={`w-full h-full object-cover transition-transform duration-500 ${
                    cert.comingSoon ? 'grayscale opacity-50' : 'hover:scale-105'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />

                {/* Badge Pill */}
                <span className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold shadow-md flex items-center gap-1 ${
                  cert.comingSoon
                    ? 'bg-amber-500/20 text-amber-500 border border-amber-500/30 backdrop-blur-md'
                    : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 backdrop-blur-md'
                }`}>
                  {cert.comingSoon ? <Clock className="w-3.5 h-3.5" /> : <ShieldCheck className="w-3.5 h-3.5" />}
                  {cert.badgeText || (cert.comingSoon ? 'Coming Soon' : 'Verified')}
                </span>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold text-blue-600 dark:text-cyan-400 uppercase tracking-wider mb-2">
                    {cert.provider}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 line-clamp-2">
                    {cert.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mb-6">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Issued: {cert.issueDate}</span>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
                  {cert.comingSoon ? (
                    <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 italic">
                      In preparation for exam certification
                    </span>
                  ) : (
                    <a
                      href={cert.credentialUrl || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-blue-600 dark:text-cyan-400 hover:underline flex items-center gap-1"
                    >
                      <span>Verify Credential</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                  <Award className={`w-5 h-5 ${cert.comingSoon ? 'text-slate-400' : 'text-amber-500'}`} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
