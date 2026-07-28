import React from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { motion } from 'motion/react';
import { Target, Zap, Brain, Shield, Award, Cpu, Code2, ArrowUpRight } from 'lucide-react';

export const About: React.FC = () => {
  const coreStrengths = [
    {
      title: "Generative AI & LLM Systems",
      desc: "Specialized in retrieval-augmented generation (RAG), parameter-efficient fine-tuning (QLoRA), and optimizing token throughput with vLLM and TensorRT.",
      icon: <Brain className="w-6 h-6 text-blue-500" />
    },
    {
      title: "Real-Time Edge Computer Vision",
      desc: "Deploying high-frequency object detection, tracking, and segmentation neural architectures onto autonomous robotics and NVIDIA Jetson hardware.",
      icon: <Cpu className="w-6 h-6 text-cyan-400" />
    },
    {
      title: "Production MLOps & Scaling",
      desc: "Architecting continuous training pipelines, vector search infrastructure (pgvector, Pinecone), and zero-downtime Kubernetes container clusters.",
      icon: <Zap className="w-6 h-6 text-purple-500" />
    },
    {
      title: "Safety & Hallucination Mitigation",
      desc: "Implementing automated reflection loops, semantic alignment verification, and strict schema validation for high-reliability medical and financial AI.",
      icon: <Shield className="w-6 h-6 text-emerald-500" />
    }
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-500/10 text-blue-600 dark:text-cyan-400 border border-blue-500/20 mb-3 inline-block">
            About Me
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
            Bridging Academic AI Research with{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              High-Performance Engineering
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
            Dedicated to building intelligent neural systems that solve real-world industrial friction.
          </p>
        </div>

        {/* Two-Column Layout: Summary & Objective vs Stats Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-20">
          {/* Left Column: Summary & Objective */}
          <div className="lg:col-span-7 space-y-8">
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-bl-full pointer-events-none" />
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <Code2 className="w-6 h-6 text-blue-500" /> Professional Summary
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base mb-4 font-normal">
                {PERSONAL_INFO.bio}
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base font-normal">
                Currently a Bachelor of Computer Science undergraduate scholar at <span className="font-semibold text-slate-900 dark:text-white">Lahore Garrison University</span> (Oct 2023 – Present). With a strong foundation in physical and medical sciences from Garrison College For Boys, my engineering philosophy centers on clean code architecture, predictive accuracy, and zero-touch workflow automation.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-blue-600/5 via-cyan-500/5 to-purple-600/5 dark:from-white/[0.03] dark:via-white/[0.02] dark:to-white/[0.01] border border-blue-500/20 dark:border-white/5 shadow-sm">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <Target className="w-6 h-6 text-cyan-400" /> Career Objective & Availability
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base mb-6">
                Seeking Software Engineering, Machine Learning Engineering, and AI Workflow Automation roles (2026 / 2027). I thrive in fast-paced environments building predictive classification models, anomaly detection systems, and scalable n8n/REST API automation pipelines.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <div className="px-4 py-2 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-sm font-semibold border border-emerald-500/20 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>{PERSONAL_INFO.status}</span>
                </div>
                <a
                  href="#contact"
                  className="text-sm font-semibold text-blue-600 dark:text-cyan-400 hover:underline flex items-center gap-1"
                >
                  Let's connect <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Statistics & Milestones Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            <div className="p-6 rounded-3xl bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 shadow-sm flex items-center gap-4">
              <div className="p-4 rounded-2xl bg-blue-500/10 text-blue-600 dark:text-cyan-400 shrink-0">
                <Award className="w-8 h-8" />
              </div>
              <div>
                <div className="text-3xl font-extrabold text-slate-900 dark:text-white">3+ Core</div>
                <div className="text-sm font-bold text-slate-700 dark:text-slate-300">CV Showcase Projects</div>
                <div className="text-xs text-slate-500">n8n Clinic System, Heart ML, Fraud AI</div>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 shadow-sm flex items-center gap-4">
              <div className="p-4 rounded-2xl bg-purple-500/10 text-purple-600 dark:text-purple-400 shrink-0">
                <Brain className="w-8 h-8" />
              </div>
              <div>
                <div className="text-3xl font-extrabold text-slate-900 dark:text-white">15+</div>
                <div className="text-sm font-bold text-slate-700 dark:text-slate-300">Languages & Tools</div>
                <div className="text-xs text-slate-500">Python, C++, SQL, React, n8n, LightGBM</div>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 shadow-sm flex items-center gap-4">
              <div className="p-4 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0">
                <Zap className="w-8 h-8" />
              </div>
              <div>
                <div className="text-3xl font-extrabold text-slate-900 dark:text-white">B.S. CS</div>
                <div className="text-sm font-bold text-slate-700 dark:text-slate-300">University Standing</div>
                <div className="text-xs text-slate-500">Lahore Garrison University (2023–Present)</div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Strengths Grid */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            Core Technical Pillars & Engineering Competencies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreStrengths.map((strength, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="p-6 rounded-3xl bg-white/80 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 shadow-sm hover:shadow-md transition-all space-y-3"
              >
                <div className="p-3 rounded-2xl bg-slate-100 dark:bg-white/[0.05] w-fit">
                  {strength.icon}
                </div>
                <h4 className="font-bold text-base text-slate-900 dark:text-white">
                  {strength.title}
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                  {strength.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
