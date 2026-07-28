import React, { useState, useEffect } from 'react';
import { NAV_ITEMS, PERSONAL_INFO } from '../../data/portfolioData';
import { ThemeToggle } from '../ui/ThemeToggle';
import { Menu, X, Sparkles, Code, FileText, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenSeo: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, onOpenSeo }) => {
  const [activeSection, setActiveSection] = useState<string>('#about');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine active section by scroll position
      const sections = NAV_ITEMS.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(`#${section}`);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setMobileMenuOpen(false);
    setActiveSection(href);
    const id = href.substring(1);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 dark:bg-[#020617]/70 backdrop-blur-xl border-b border-slate-200/80 dark:border-white/5 shadow-sm py-3.5'
          : 'bg-transparent py-5 border-b border-transparent dark:border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo / Brand */}
          <motion.a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex items-center gap-2.5 group focus:outline-none"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:shadow-cyan-500/40 transition-all">
              <Code className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-slate-900 via-blue-700 to-slate-800 dark:from-white dark:via-cyan-300 dark:to-slate-300 bg-clip-text text-transparent">
                {PERSONAL_INFO.shortName}
              </span>
              <span className="hidden sm:inline-block ml-1.5 text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-500/10 dark:bg-blue-500/15 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                AI / ML
              </span>
            </div>
          </motion.a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 bg-slate-100/80 dark:bg-white/[0.03] p-1.5 rounded-full border border-slate-200 dark:border-white/5 backdrop-blur-md">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-white'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full shadow-md shadow-blue-500/30 -z-10"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  {item.name}
                </button>
              );
            })}
          </div>

          {/* Right Action Controls */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenSeo}
              className="px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/20 transition-all flex items-center gap-1.5"
              title="Inspect Lighthouse Score & SEO Metadata"
            >
              <ShieldCheck className="w-3.5 h-3.5" /> 100/100
            </button>

            <button
              onClick={onOpenResume}
              className="px-4 py-2 rounded-2xl text-xs font-semibold bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 transition-all shadow-sm flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5 text-blue-500 dark:text-blue-600" /> CV
            </button>

            <ThemeToggle />
          </div>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-2xl bg-slate-100 dark:bg-white/[0.03] text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-white/5"
              aria-label="Toggle mobile navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 pt-4 pb-6 border-t border-slate-200 dark:border-white/5 space-y-2 overflow-hidden bg-white/95 dark:bg-[#020617]/95 rounded-3xl p-4 shadow-xl border dark:border-white/5"
            >
              <div className="grid grid-cols-2 gap-2 mb-4">
                <button
                  onClick={() => { setMobileMenuOpen(false); onOpenSeo(); }}
                  className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold text-xs flex items-center justify-center gap-1.5 border border-emerald-500/20"
                >
                  <ShieldCheck className="w-4 h-4" /> Lighthouse 100/100
                </button>
                <button
                  onClick={() => { setMobileMenuOpen(false); onOpenResume(); }}
                  className="p-3 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold text-xs flex items-center justify-center gap-1.5"
                >
                  <FileText className="w-4 h-4" /> Preview CV
                </button>
              </div>

              {NAV_ITEMS.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`w-full text-left px-4 py-3 rounded-2xl text-base font-medium transition-colors ${
                    activeSection === item.href
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold'
                      : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
