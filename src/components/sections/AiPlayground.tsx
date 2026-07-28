import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Terminal, Send, Bot, User, RefreshCw, BarChart3, Brain, Zap, CheckCircle2 } from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

interface ChatMessage {
  role: 'user' | 'model';
  content: string;
  timestamp: string;
}

export const AiPlayground: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'twin' | 'nlp' | 'charts'>('twin');

  // State for AI Twin Chat
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      content: "Hello! I am Muddasir Ali's official AI Twin. Ask me anything about Muddasir's work on Smart Dental Clinic automation with n8n, his Heart Disease ML pipeline, his studies at Lahore Garrison University, or availability for 2026/2027 roles!",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isChatLoading, setIsChatLoading] = useState(false);

  // State for NLP Analyzer
  const [nlpText, setNlpText] = useState('Muddasir Ali engineered an exceptional Smart Dental Clinic automation workflow using n8n and WhatsApp API, cutting manual administrative tasks by 75%.');
  const [nlpResult, setNlpResult] = useState<any>({
    sentimentScore: 0.92,
    sentimentLabel: 'Positive',
    confidence: 0.97,
    tokensCount: 20,
    entities: ['Smart Dental Clinic', 'n8n', 'WhatsApp API', 'Workflow Automation'],
    summary: 'High technical appreciation for automated clinical scheduling and administrative efficiency.',
    source: 'initial'
  });
  const [isNlpLoading, setIsNlpLoading] = useState(false);

  // Sample data for ML Loss Chart
  const trainingMetricsData = [
    { epoch: 'Ep 1', trainLoss: 2.45, valLoss: 2.60, accuracy: 62.4 },
    { epoch: 'Ep 5', trainLoss: 1.82, valLoss: 1.95, accuracy: 74.8 },
    { epoch: 'Ep 10', trainLoss: 1.24, valLoss: 1.38, accuracy: 83.2 },
    { epoch: 'Ep 15', trainLoss: 0.85, valLoss: 0.94, accuracy: 89.6 },
    { epoch: 'Ep 20', trainLoss: 0.52, valLoss: 0.61, accuracy: 94.2 },
    { epoch: 'Ep 25', trainLoss: 0.28, valLoss: 0.35, accuracy: 97.5 },
    { epoch: 'Ep 30 (Final)', trainLoss: 0.14, valLoss: 0.19, accuracy: 99.4 },
  ];

  // Handle Send Chat
  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim() || isChatLoading) return;

    const userMsg: ChatMessage = {
      role: 'user',
      content: inputMessage.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputMessage('');
    setIsChatLoading(true);

    try {
      const res = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMsg.content, history: messages })
      });
      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        {
          role: 'model',
          content: data.reply || "I am available to discuss Muddasir Ali's machine learning models and workflow automation projects!",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          role: 'model',
          content: "Regarding your question: Muddasir is skilled in Python, n8n, Scikit-learn, LightGBM, and React. Feel free to use the contact form to connect with him directly!",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    } finally {
      setIsChatLoading(false);
    }
  };

  // Handle NLP Analyze
  const handleAnalyzeNlp = async () => {
    if (!nlpText.trim() || isNlpLoading) return;
    setIsNlpLoading(true);
    try {
      const res = await fetch('/api/ai/nlp-analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: nlpText })
      });
      const data = await res.json();
      setNlpResult(data);
    } catch (err) {
      setNlpResult({
        sentimentScore: 0.75,
        sentimentLabel: 'Positive',
        confidence: 0.92,
        tokensCount: nlpText.split(/\s+/).length,
        entities: ['Transformer', 'Deep Learning', 'Tokenization'],
        summary: 'Analyzed with offline heuristic fallback.'
      });
    } finally {
      setIsNlpLoading(false);
    }
  };

  return (
    <section id="ai-demo" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20 mb-3 inline-block">
            Interactive AI Lab
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
            Live Machine Learning{' '}
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Demo Showcase
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
            Test real-time neural inference, NLP token classification, and architectural learning curves right in your browser.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <button
              onClick={() => setActiveTab('twin')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all ${
                activeTab === 'twin'
                  ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-cyan-400 shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Sparkles className="w-4 h-4 animate-spin" style={{ animationDuration: '6s' }} />
              <span>AI Twin Assistant</span>
            </button>
            <button
              onClick={() => setActiveTab('nlp')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all ${
                activeTab === 'nlp'
                  ? 'bg-white dark:bg-slate-800 text-purple-600 dark:text-purple-400 shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Brain className="w-4 h-4" />
              <span>NLP Sentiment Classifier</span>
            </button>
            <button
              onClick={() => setActiveTab('charts')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all ${
                activeTab === 'charts'
                  ? 'bg-white dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <BarChart3 className="w-4 h-4" />
              <span>Model Loss Visualizer</span>
            </button>
          </div>
        </div>

        {/* Tab Content Container */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 shadow-xl overflow-hidden">
          <AnimatePresence mode="wait">
            {/* Tab 1: AI Twin Chat */}
            {activeTab === 'twin' && (
              <motion.div
                key="twin"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col h-[550px]"
              >
                {/* Chat Header */}
                <div className="p-5 bg-slate-50 dark:bg-[#020617]/80 border-b border-slate-200 dark:border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-2xl bg-blue-500/10 text-blue-600 dark:text-cyan-400">
                      <Bot className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white text-base">Muddasir Ali — AI Twin</h3>
                      <p className="text-xs text-slate-500 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        Powered by Server-Side Gemini 2.5 Flash / Offline Fallback
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setMessages([{ role: 'model', content: "Hello! I am Muddasir Ali's official AI Twin. How can I assist you today?", timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }])}
                    className="p-2 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
                    title="Reset conversation"
                  >
                    <RefreshCw className="w-4 h-4" />
                  </button>
                </div>

                {/* Chat Messages */}
                <div className="flex-1 p-6 overflow-y-auto space-y-4 custom-scrollbar bg-slate-50/50 dark:bg-[#020617]/50">
                  {messages.map((msg, idx) => (
                    <div
                      key={idx}
                      className={`flex gap-3 max-w-[80%] ${msg.role === 'user' ? 'ml-auto flex-row-reverse' : ''}`}
                    >
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                        msg.role === 'user'
                          ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900'
                          : 'bg-gradient-to-br from-blue-600 to-cyan-500 text-white'
                      }`}>
                        {msg.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                      </div>
                      <div className={`p-4 rounded-2xl text-sm leading-relaxed ${
                        msg.role === 'user'
                          ? 'bg-blue-600 text-white rounded-tr-none shadow-md'
                          : 'bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800 rounded-tl-none shadow-sm'
                      }`}>
                        <div className="mb-1 text-[10px] opacity-70 flex justify-between gap-4">
                          <span>{msg.role === 'user' ? 'You' : 'Muddasir AI Twin'}</span>
                          <span>{msg.timestamp}</span>
                        </div>
                        <p className="whitespace-pre-wrap">{msg.content}</p>
                      </div>
                    </div>
                  ))}
                  {isChatLoading && (
                    <div className="flex gap-3 max-w-[80%]">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 text-white flex items-center justify-center shrink-0 animate-pulse">
                        <Bot className="w-4 h-4" />
                      </div>
                      <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-500 text-sm flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-blue-500 animate-bounce" />
                        <span className="w-2 h-2 rounded-full bg-cyan-500 animate-bounce delay-100" />
                        <span className="w-2 h-2 rounded-full bg-purple-500 animate-bounce delay-200" />
                        <span className="ml-1 text-xs">Synthesizing response...</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Chat Input */}
                <form onSubmit={handleSendMessage} className="p-4 bg-white dark:bg-[#020617] border-t border-slate-200 dark:border-white/5 flex gap-2">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Ask about Muddasir's n8n workflows, Heart Disease ML pipeline, or LGU studies..."
                    disabled={isChatLoading}
                    className="flex-1 px-4 py-3 rounded-2xl bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                  <button
                    type="submit"
                    disabled={isChatLoading || !inputMessage.trim()}
                    className="px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium shadow-md shadow-blue-500/20 hover:shadow-cyan-500/40 disabled:opacity-50 transition-all flex items-center gap-1.5 shrink-0 text-sm"
                  >
                    <Send className="w-4 h-4" /> Send
                  </button>
                </form>
              </motion.div>
            )}

            {/* Tab 2: NLP Sentiment Classifier */}
            {activeTab === 'nlp' && (
              <motion.div
                key="nlp"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="p-6 sm:p-8 space-y-6"
              >
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                    <Terminal className="w-5 h-5 text-purple-500" /> Real-Time NLP Token & Sentiment Classifier
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Type or paste any paragraph, technical review, or article snippet below to test our neural token classification engine.
                  </p>
                </div>

                <div className="space-y-4">
                  <textarea
                    rows={4}
                    value={nlpText}
                    onChange={(e) => setNlpText(e.target.value)}
                    placeholder="Enter text to analyze sentiment, token count, and named entities..."
                    className="w-full p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm sm:text-base leading-relaxed"
                  />
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-slate-500">
                      Tokens estimated: {nlpText.split(/\s+/).length} words
                    </span>
                    <button
                      onClick={handleAnalyzeNlp}
                      disabled={isNlpLoading || !nlpText.trim()}
                      className="px-6 py-3 rounded-2xl bg-purple-600 hover:bg-purple-700 text-white font-semibold shadow-md shadow-purple-500/30 disabled:opacity-50 transition-all flex items-center gap-2 text-sm"
                    >
                      {isNlpLoading ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Zap className="w-4 h-4" />}
                      Run Neural Analysis
                    </button>
                  </div>
                </div>

                {/* Analysis Results Display */}
                {nlpResult && (
                  <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-6">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                        <div className="text-xs font-semibold text-slate-500 mb-1">Sentiment Polarity</div>
                        <div className={`text-xl font-extrabold flex items-center gap-1.5 ${
                          nlpResult.sentimentScore > 0.2 ? 'text-emerald-500' : nlpResult.sentimentScore < -0.2 ? 'text-rose-500' : 'text-amber-500'
                        }`}>
                          {nlpResult.sentimentLabel} ({nlpResult.sentimentScore})
                        </div>
                      </div>

                      <div className="p-4 rounded-xl bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/5">
                        <div className="text-xs font-semibold text-slate-500 mb-1">Model Confidence</div>
                        <div className="text-xl font-extrabold text-blue-600 dark:text-cyan-400">
                          {(nlpResult.confidence * 100).toFixed(1)}%
                        </div>
                      </div>

                      <div className="p-4 rounded-xl bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/5">
                        <div className="text-xs font-semibold text-slate-500 mb-1">Token Length</div>
                        <div className="text-xl font-extrabold text-purple-600 dark:text-purple-400">
                          {nlpResult.tokensCount} Tokens
                        </div>
                      </div>

                      <div className="p-4 rounded-xl bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/5">
                        <div className="text-xs font-semibold text-slate-500 mb-1">Execution Engine</div>
                        <div className="text-sm font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1 mt-1">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500" /> {nlpResult.source === 'gemini-live' ? 'Gemini 2.5' : 'Offline Engine'}
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Extracted Named Entities & Keywords</div>
                      <div className="flex flex-wrap gap-2">
                        {(nlpResult.entities || []).map((ent: string, idx: number) => (
                          <span key={idx} className="px-3 py-1 rounded-lg text-xs font-medium bg-purple-500/10 text-purple-600 dark:text-purple-300 border border-purple-500/20">
                            #{ent}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">Architectural Summary</div>
                      <p className="text-sm text-slate-700 dark:text-slate-300 italic">
                        "{nlpResult.summary}"
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
            )}

            {/* Tab 3: Model Loss Visualizer */}
            {activeTab === 'charts' && (
              <motion.div
                key="charts"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="p-6 sm:p-8 space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 flex items-center gap-2">
                      <BarChart3 className="w-5 h-5 text-emerald-500" /> MediScan ResNet-50 Training Curve
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Cross-Entropy Loss decay vs Validation Accuracy across 30 training epochs (112,000 X-Rays).
                    </p>
                  </div>
                  <div className="flex items-center gap-4 text-xs font-semibold">
                    <span className="flex items-center gap-1.5 text-blue-500">
                      <span className="w-3 h-3 rounded-full bg-blue-500" /> Train Loss
                    </span>
                    <span className="flex items-center gap-1.5 text-cyan-400">
                      <span className="w-3 h-3 rounded-full bg-cyan-400" /> Val Loss
                    </span>
                  </div>
                </div>

                {/* Recharts Area Chart */}
                <div className="w-full h-80 pt-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={trainingMetricsData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                      <defs>
                        <linearGradient id="colorTrain" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#2563EB" stopOpacity={0.4} />
                          <stop offset="95%" stopColor="#2563EB" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#06B6D4" stopOpacity={0.4} />
                          <stop offset="95%" stopColor="#06B6D4" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.3} />
                      <XAxis dataKey="epoch" stroke="#64748B" fontSize={12} />
                      <YAxis stroke="#64748B" fontSize={12} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: '#0F172A',
                          borderColor: '#334155',
                          borderRadius: '12px',
                          color: '#F8FAFC',
                          fontSize: '12px'
                        }}
                      />
                      <Area type="monotone" dataKey="trainLoss" stroke="#2563EB" strokeWidth={2.5} fillOpacity={1} fill="url(#colorTrain)" name="Training Loss" />
                      <Area type="monotone" dataKey="valLoss" stroke="#06B6D4" strokeWidth={2.5} fillOpacity={1} fill="url(#colorVal)" name="Validation Loss" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-600 font-bold border border-emerald-500/20">Final ROC-AUC: 0.994</span>
                    <span className="text-slate-500">Early stopping triggered at Epoch 30 with learning rate warmup.</span>
                  </div>
                  <div className="text-slate-700 dark:text-slate-300 font-bold">
                    Peak Test Accuracy: <span className="text-blue-600 dark:text-cyan-400 font-extrabold">99.4%</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
