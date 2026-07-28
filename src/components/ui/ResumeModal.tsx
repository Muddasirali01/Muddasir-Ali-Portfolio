import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Download, FileText, CheckCircle, GraduationCap, Briefcase, Award, Code } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
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

  const handleDownload = () => {
    // Simulate PDF creation/download
    const element = document.createElement("a");
    const file = new Blob([
      `Muddasir Ali - Computer Science & Machine Learning Engineer\nEmail: ${PERSONAL_INFO.email}\nPhone: 03078461914\nLocation: ${PERSONAL_INFO.location}\n\nSUMMARY:\n${PERSONAL_INFO.bio}\n\nEDUCATION:\nBachelor of Computer Science, Lahore Garrison University (Oct 2023 - Present)\nIntermediate in Medical, Garrison College For Boys (Mar 2020 - May 2022)\n\nEXPERIENCE & PROJECTS:\nLead ML & Automation Developer @ Lahore Garrison University CS Labs\nFreelance Workflow & Web Automation Engineer @ Independent Clinical Clients\nSmart Dental Clinic Appointment Management System (n8n, WhatsApp API, Google Sheets)\nHeart Disease Risk Prediction System (Python, LightGBM, Scikit-learn)\nCredit Card Fraud Detection System (Scikit-learn, SMOTE, NumPy)\n\nTOP SKILLS:\nPython, C/C++, SQL, React, Flask, n8n, Zapier, Scikit-learn, LightGBM, Pandas, Cisco Packet Tracer\n\nGenerated from Official AI Studio Portfolio`
    ], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = "Muddasir_Ali_Resume.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
          aria-hidden="true"
        />

        {/* Dialog Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-10 text-slate-900 dark:text-slate-100 z-10 custom-scrollbar"
        >
          {/* Header Action Bar */}
          <div className="flex items-center justify-between pb-6 border-b border-slate-200 dark:border-slate-800 mb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-600 dark:text-cyan-400">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold">{PERSONAL_INFO.name} - Official CV</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">{PERSONAL_INFO.title}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleDownload}
                className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-md shadow-blue-500/30 hover:shadow-blue-500/50 transition-all text-sm"
              >
                <Download className="w-4 h-4" /> Download CV (PDF/TXT)
              </button>
              <button
                onClick={onClose}
                className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* CV Preview Document Layout */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800/80 shadow-inner space-y-8 font-sans">
            {/* Top Banner */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  {PERSONAL_INFO.name}
                </h1>
                <p className="text-blue-600 dark:text-cyan-400 font-semibold text-base mt-1">
                  {PERSONAL_INFO.title}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  📍 {PERSONAL_INFO.location} | 📧 {PERSONAL_INFO.email}
                </p>
              </div>
              <div className="flex flex-col items-start sm:items-end text-xs text-slate-500 dark:text-slate-400 gap-1">
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold border border-emerald-500/20">
                  ● {PERSONAL_INFO.status}
                </span>
                <span>Security Clearance: Eligible / U.S. Work Authorized</span>
              </div>
            </div>

            {/* Section: Summary */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 flex items-center gap-1.5 mb-2">
                <Briefcase className="w-4 h-4 text-blue-500" /> Executive Summary
              </h4>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {PERSONAL_INFO.bio}
              </p>
            </div>

            {/* Section: Experience & Projects */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 flex items-center gap-1.5 mb-4">
                <Code className="w-4 h-4 text-blue-500" /> Experience & Core Projects
              </h4>
              <div className="space-y-6">
                <div className="border-l-2 border-blue-500 pl-4">
                  <div className="flex justify-between items-start text-sm font-bold text-slate-900 dark:text-white">
                    <span>Lead ML & Automation Developer — Lahore Garrison University CS Labs</span>
                    <span className="text-xs text-slate-500 font-normal">Oct 2023 – Present</span>
                  </div>
                  <p className="text-xs text-slate-500 mb-2">Lahore, Punjab, Pakistan</p>
                  <ul className="list-disc list-inside text-xs text-slate-600 dark:text-slate-300 space-y-1">
                    <li>Built an end-to-end Smart Dental Clinic Appointment Management System using n8n, WhatsApp API, and Google Sheets, reducing manual administrative tasks by 75%.</li>
                    <li>Developed Heart Disease Risk Prediction classification pipeline in Python using LightGBM and Scikit-learn, validated via 10-fold cross-validation (0.964 ROC-AUC).</li>
                    <li>Engineered Credit Card Fraud Detection models using SMOTE class imbalance handling and feature scaling in NumPy.</li>
                  </ul>
                </div>

                <div className="border-l-2 border-cyan-500 pl-4">
                  <div className="flex justify-between items-start text-sm font-bold text-slate-900 dark:text-white">
                    <span>Freelance Workflow & Web Automation Engineer</span>
                    <span className="text-xs text-slate-500 font-normal">May 2024 – Present</span>
                  </div>
                  <p className="text-xs text-slate-500 mb-2">Lahore, Punjab (Remote)</p>
                  <ul className="list-disc list-inside text-xs text-slate-600 dark:text-slate-300 space-y-1">
                    <li>Consulted with healthcare clinics to replace manual scheduling with automated WhatsApp & Gmail notification workflows.</li>
                    <li>Developed responsive React & Bootstrap clinical dashboards linked to Python Flask RESTful APIs and MySQL schemas.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section: Education & Achievements */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-200 dark:border-slate-800">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 flex items-center gap-1.5 mb-3">
                  <GraduationCap className="w-4 h-4 text-purple-500" /> Education
                </h4>
                <div className="text-sm font-bold text-slate-900 dark:text-white">Lahore Garrison University</div>
                <div className="text-xs text-blue-600 dark:text-cyan-400 font-semibold">Bachelor of Computer Science (B.S. CS)</div>
                <div className="text-xs text-slate-500 mt-1">Oct. 2023 – Present | Lahore, Punjab</div>
                <div className="text-xs text-slate-600 dark:text-slate-300 mt-3">
                  <span className="font-semibold text-slate-900 dark:text-white">Prior Education:</span>
                  <div className="mt-0.5">Intermediate in Medical — Garrison College For Boys (Mar 2020 – May 2022)</div>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 flex items-center gap-1.5 mb-3">
                  <Award className="w-4 h-4 text-amber-500" /> Key Skills & Tools
                </h4>
                <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-2">
                  <li className="flex items-center gap-1.5 font-medium">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" /> Python, C, C++, SQL, HTML, CSS, JavaScript
                  </li>
                  <li className="flex items-center gap-1.5 font-medium">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" /> Flask, React, Bootstrap, Scikit-learn, LightGBM
                  </li>
                  <li className="flex items-center gap-1.5 font-medium">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" /> n8n, Zapier, WhatsApp API, Cisco Packet Tracer
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
