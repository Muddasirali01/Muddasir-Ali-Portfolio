import React from 'react';
import { motion } from 'motion/react';
import { Terminal, ArrowLeft, Home, Cpu } from 'lucide-react';

interface NotFoundProps {
  onReturnHome?: () => void;
}

export const NotFound: React.FC<NotFoundProps> = ({ onReturnHome }) => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center p-6 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-bl-full pointer-events-none" />

        <div className="w-16 h-16 rounded-2xl bg-blue-500/10 text-blue-600 dark:text-cyan-400 flex items-center justify-center mx-auto mb-6">
          <Terminal className="w-8 h-8" />
        </div>

        <h1 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight mb-2">
          404: Not Found
        </h1>
        <p className="text-xs font-mono text-blue-600 dark:text-cyan-400 mb-4 uppercase tracking-wider">
          Error: Null Pointer in Route Map
        </p>
        <p className="text-slate-600 dark:text-slate-400 text-sm mb-8 leading-relaxed">
          The requested neural endpoint or page path could not be resolved in our static directory tree. It may have been deprecated or moved.
        </p>

        <button
          onClick={onReturnHome || (() => window.scrollTo({ top: 0, behavior: 'smooth' }))}
          className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-lg shadow-blue-500/30 hover:scale-105 transition-all flex items-center justify-center gap-2 text-sm"
        >
          <Home className="w-4 h-4" />
          <span>Return to Homepage</span>
        </button>
      </motion.div>
    </div>
  );
};
