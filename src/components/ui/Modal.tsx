import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Github, ExternalLink, CheckCircle2, Layers } from 'lucide-react';
import { ProjectItem } from '../../types';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: ProjectItem | null;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, project }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity"
            aria-hidden="true"
          />

          {/* Dialog content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-8 text-slate-900 dark:text-slate-100 z-10 custom-scrollbar"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
              aria-label="Close project details modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Category Badge */}
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-blue-500/10 dark:bg-cyan-500/10 text-blue-600 dark:text-cyan-400 border border-blue-500/20 dark:border-cyan-500/20">
                {project.category}
              </span>
              <span className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-1">
                <Layers className="w-3.5 h-3.5" /> Featured Architecture
              </span>
            </div>

            {/* Title */}
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2 bg-gradient-to-r from-slate-900 via-blue-700 to-slate-800 dark:from-white dark:via-cyan-300 dark:to-slate-300 bg-clip-text text-transparent">
              {project.title}
            </h3>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mb-6 font-medium">
              {project.subtitle}
            </p>

            {/* Image Banner */}
            <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden mb-8 border border-slate-200 dark:border-slate-800 shadow-inner group bg-slate-950">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            </div>

            {/* Long Description */}
            <div className="mb-8">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                Architectural & Technical Deep-Dive
              </h4>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
                {project.longDescription}
              </p>
            </div>

            {/* Key Metrics */}
            {project.metrics && (
              <div className="mb-8">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                  Production Performance & Metrics
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {project.metrics.map((m, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50">
                      <div className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">{m.label}</div>
                      <div className="text-xl sm:text-2xl font-bold text-blue-600 dark:text-cyan-400 flex items-center gap-1.5">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                        {m.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Badges */}
            <div className="mb-8">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                Technologies & Frameworks Employed
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 rounded-xl text-sm font-medium bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-slate-200 dark:border-slate-800">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-2xl font-medium bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <Github className="w-5 h-5" /> View Source Code
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-2xl font-medium bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 shadow-md shadow-blue-500/30 hover:shadow-blue-500/50"
                >
                  <ExternalLink className="w-5 h-5" /> Launch Live Demo
                </a>
              )}
              <button
                onClick={onClose}
                className="ml-auto px-6 py-3 rounded-2xl font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                Close Modal
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
