import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ContactFormValues } from '../../types';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';
import { Send, CheckCircle2, MapPin, Mail, Github, Linkedin, Sparkles, AlertCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactFormValues>({
    defaultValues: {
      subject: 'Full-Time AI Engineering Opportunity'
    }
  });

  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = async (data: ContactFormValues) => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1200));

    // Trigger celebratory confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#2563EB', '#06B6D4', '#8B5CF6']
    });

    setIsSuccess(true);
    reset();

    // Auto dismiss success message after 7s
    setTimeout(() => {
      setIsSuccess(false);
    }, 7000);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-slate-50/50 dark:bg-slate-950/50 border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-500/10 text-blue-600 dark:text-cyan-400 border border-blue-500/20 mb-3 inline-block">
            Let's Connect
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
            Get In Touch &amp; Start a{' '}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 bg-clip-text text-transparent">
              Conversation
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
            Whether you are recruiting for Fall 2026 / 2027 AI Engineering roles, seeking research collaboration, or just want to chat about LLMs—drop me a message below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          {/* Left Column: Contact Details & Socials */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 shadow-sm space-y-6">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-cyan-400" /> Contact Details
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                I check my inbox daily and typically reply within 24 hours. I am open to both on-site roles in the San Francisco Bay Area and remote opportunities.
              </p>

              <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-white/5">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-600 dark:text-cyan-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-medium">Email Address</div>
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-cyan-400 transition-colors text-sm sm:text-base">
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-600 dark:text-purple-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-medium">Primary Location</div>
                    <div className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                      {PERSONAL_INFO.location}
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-white/5">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Connect on Socials</div>
                <div className="flex items-center gap-3">
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 dark:bg-white/[0.05] text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400 text-xs font-semibold transition-all"
                  >
                    <Github className="w-4 h-4" /> GitHub
                  </a>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 dark:bg-white/[0.05] text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400 text-xs font-semibold transition-all"
                  >
                    <Linkedin className="w-4 h-4" /> LinkedIn
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-xl">
              <div className="text-xs font-bold uppercase tracking-wider text-cyan-200 mb-1">Recruitment Priority</div>
              <h4 className="text-xl font-bold mb-2">Fast-Track Technical Interviews</h4>
              <p className="text-xs sm:text-sm text-white/90 leading-relaxed mb-4">
                If you are a technical recruiter or hiring manager, feel free to mention "Fast-Track" in the subject line for expedited response.
              </p>
              <div className="flex items-center gap-2 text-xs font-semibold bg-white/20 px-3 py-1.5 rounded-full w-fit">
                <span className="w-2 h-2 rounded-full bg-emerald-300 animate-ping" />
                <span>Available for Immediate Screening</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 sm:p-10 rounded-3xl bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 shadow-xl relative overflow-hidden"
            >
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-base max-w-md mx-auto">
                    Thank you for reaching out! Your message has been delivered directly to Muddasir's inbox. Expect a reply shortly.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="px-6 py-2.5 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold text-sm hover:bg-slate-200 transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name Field */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                        Your Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="e.g. Sarah Connor"
                        className={`w-full px-4 py-3.5 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm sm:text-base ${
                          errors.name ? 'border-rose-500' : 'border-slate-200 dark:border-white/5'
                        }`}
                        {...register('name', { required: 'Please enter your name' })}
                      />
                      {errors.name && (
                        <p className="mt-1.5 text-xs text-rose-500 flex items-center gap-1 font-medium">
                          <AlertCircle className="w-3.5 h-3.5" /> {errors.name.message}
                        </p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="e.g. sarah@company.com"
                        className={`w-full px-4 py-3.5 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm sm:text-base ${
                          errors.email ? 'border-rose-500' : 'border-slate-200 dark:border-white/5'
                        }`}
                        {...register('email', {
                          required: 'Please enter your email address',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Invalid email address'
                          }
                        })}
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-xs text-rose-500 flex items-center gap-1 font-medium">
                          <AlertCircle className="w-3.5 h-3.5" /> {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject Selection */}
                  <div>
                    <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                      Subject / Inquiry Type *
                    </label>
                    <select
                      id="subject"
                      className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm sm:text-base font-medium"
                      {...register('subject', { required: 'Please select an inquiry type' })}
                    >
                      <option value="Full-Time AI Engineering Opportunity">Full-Time AI Engineering Opportunity (2026/2027)</option>
                      <option value="AI/ML Internship Opportunity">AI/ML Internship Opportunity (Fall 2026 / Winter 2027)</option>
                      <option value="Research & Academic Collaboration">Research & Academic Collaboration</option>
                      <option value="Freelance CV / LLM Consulting">Freelance Computer Vision / LLM Consulting</option>
                      <option value="General Question / Greeting">General Question / Greeting</option>
                    </select>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="Tell me about your team, tech stack, or the project you would like to discuss..."
                      className={`w-full p-4 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm sm:text-base leading-relaxed ${
                        errors.message ? 'border-rose-500' : 'border-slate-200 dark:border-white/5'
                      }`}
                      {...register('message', {
                        required: 'Please enter a message',
                        minLength: {
                          value: 15,
                          message: 'Message should be at least 15 characters long'
                        }
                      })}
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-xs text-rose-500 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.message.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-2xl font-bold bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 text-white shadow-lg shadow-blue-500/30 hover:shadow-cyan-500/50 hover:scale-[1.01] disabled:opacity-50 transition-all duration-300 flex items-center justify-center gap-2 text-base"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Transmitting Securely...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message to Muddasir</span>
                      </>
                    )}
                  </button>
                  
                  <p className="text-center text-xs text-slate-400 dark:text-slate-500">
                    🔒 100% Privacy Guaranteed. No spam, ever.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
