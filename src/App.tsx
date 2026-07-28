/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { AiPlayground } from './components/sections/AiPlayground';
import { FeaturedProjects } from './components/sections/FeaturedProjects';
import { Experience } from './components/sections/Experience';
import { Education } from './components/sections/Education';
import { Certifications } from './components/sections/Certifications';
import { Achievements } from './components/sections/Achievements';
import { Services } from './components/sections/Services';
import { Testimonials } from './components/sections/Testimonials';
import { Contact } from './components/sections/Contact';

import { CustomCursor } from './components/ui/CustomCursor';
import { ScrollProgress } from './components/ui/ScrollProgress';
import { BackToTop } from './components/ui/BackToTop';
import { ParticleBackground } from './components/ui/ParticleBackground';
import { Modal } from './components/ui/Modal';
import { ResumeModal } from './components/ui/ResumeModal';
import { SeoInspectorModal } from './components/ui/SeoInspectorModal';

import { ProjectItem } from './types';
import { motion, AnimatePresence } from 'motion/react';
import { Code, Sparkles } from 'lucide-react';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isSeoOpen, setIsSeoOpen] = useState(false);
  const [isLoadingScreen, setIsLoadingScreen] = useState(true);

  // Simulated Apple/Vercel intro loading screen
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoadingScreen(false);
    }, 1100);
    return () => clearTimeout(timer);
  }, []);

  // Scroll to AI Demo handler
  const handleOpenAiDemo = () => {
    const el = document.getElementById('ai-demo');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ThemeProvider>
      {/* Apple / Vercel Intro Loading Screen */}
      <AnimatePresence>
        {isLoadingScreen && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="fixed inset-0 z-[100] bg-slate-950 flex flex-col items-center justify-center text-white"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="w-16 h-16 rounded-3xl bg-gradient-to-tr from-blue-600 via-cyan-500 to-purple-600 flex items-center justify-center shadow-2xl shadow-blue-500/30 mb-4"
            >
              <Code className="w-8 h-8 animate-pulse" />
            </motion.div>
            <div className="flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-cyan-400">
              <Sparkles className="w-4 h-4 animate-spin" />
              <span>Initializing Neural Architecture...</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#020617] text-[#111827] dark:text-slate-200 font-sans selection:bg-blue-600 selection:text-white relative overflow-x-hidden transition-colors duration-300">
        {/* Global Interactive Enhancements */}
        <CustomCursor />
        <ScrollProgress />
        <ParticleBackground />
        <BackToTop />

        {/* Sticky Header */}
        <Navbar
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenSeo={() => setIsSeoOpen(true)}
        />

        {/* Main Content Assembly */}
        <main className="relative z-10">
          <Hero
            onOpenResume={() => setIsResumeOpen(true)}
            onOpenAiDemo={handleOpenAiDemo}
          />

          <About />

          <Skills />

          <AiPlayground />

          <FeaturedProjects
            onSelectProject={(proj) => setSelectedProject(proj)}
          />

          <Experience />

          <Education />

          <Certifications />

          <Achievements />

          <Services />

          <Testimonials />

          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Modals */}
        <Modal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          project={selectedProject}
        />

        <ResumeModal
          isOpen={isResumeOpen}
          onClose={() => setIsResumeOpen(false)}
        />

        <SeoInspectorModal
          isOpen={isSeoOpen}
          onClose={() => setIsSeoOpen(false)}
        />
      </div>
    </ThemeProvider>
  );
}
