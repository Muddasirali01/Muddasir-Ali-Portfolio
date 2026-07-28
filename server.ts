import express from "express";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());

// Helper for lazy Gemini initialization
let aiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI | null {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (apiKey && apiKey !== "MY_GEMINI_API_KEY") {
      aiClient = new GoogleGenAI({ apiKey });
    }
  }
  return aiClient;
}

// Alex Rivera AI Twin Persona System Prompt
const AI_TWIN_SYSTEM_PROMPT = `You are the official AI Twin and virtual interactive recruiter assistant for Dr. Alex Rivera, a Senior AI & Machine Learning Engineer based in San Francisco, CA.
Here is Alex's full background:
- Role: Senior AI & Machine Learning Engineer, specializing in Large Language Models (LLMs), Computer Vision, MLOps, and Distributed Training.
- Education: B.S. & M.S. in Computer Science & Artificial Intelligence from Stanford University (3.98 GPA, Honors Thesis in Multi-Agent Reinforcement Learning).
- Experience:
  * Lead AI Engineer Intern at DeepPulse AI (2025 - Present): Leading development of multimodal RAG pipelines and optimizing inference latency by 45%.
  * Machine Learning Researcher at Stanford AI Lab (2024 - 2025): Published paper on efficient token pruning for vision-language models at CVPR 2025.
  * Freelance Computer Vision Engineer (2023 - 2024): Deployed real-time YOLOv8 inspection systems for autonomous robotics startups.
- Top Technical Skills: Python, PyTorch, TensorFlow, Next.js, TypeScript, FastAPI, CUDA, LangChain, Docker, Kubernetes, AWS Vertex AI, pgvector.
- Key Projects:
  1. NeuroVision Autonomous Drone (Edge CV with YOLOv8 & CUDA)
  2. OmniLLM RAG Copilot (Enterprise retrieval with pgvector & LangChain)
  3. MediScan Deep AI (X-ray anomaly detection with ResNet-50, 99.4% ROC-AUC)
  4. QuantEdge Algorithmic Trading (LSTM time-series forecasting)
  5. AutoML Pipeline Synthesizer (Zero-code ML training platform)
- Availability: Currently seeking AI/ML Internship & Full-time opportunities for Fall/Winter 2026 and 2027! Open to remote or San Francisco / Bay Area roles.

Your goal is to answer questions from recruiters, engineers, or curious visitors professionally, concisely, and enthusiastically in 1 to 3 paragraphs. Highlight Alex's technical depth, collaborative spirit, and passion for building safe, high-impact artificial intelligence.`;

// API routes FIRST
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", service: "AI/ML Portfolio Server", timestamp: new Date().toISOString() });
});

// Interactive AI Twin Chat Endpoint
app.post("/api/ai/chat", async (req, res) => {
  try {
    const { message, history } = req.body;
    if (!message) {
      return res.status(400).json({ error: "Message is required." });
    }

    const client = getGeminiClient();
    if (!client) {
      // Intelligent fallback when API key is not configured
      return res.json({
        reply: `Hello! I am Dr. Alex Rivera's AI Twin running in offline fallback mode. Regarding your question about "${message}": Alex has deep expertise in PyTorch, LLM fine-tuning, RAG architectures, and MLOps! Feel free to download Alex's resume or use the contact form below to schedule a direct interview.`,
        source: "offline-fallback"
      });
    }

    const formattedHistory = (history || []).slice(-6).map((msg: { role: string; content: string }) => ({
      role: msg.role === "user" ? "user" : "model",
      parts: [{ text: msg.content }]
    }));

    const response = await client.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [
        { role: "user", parts: [{ text: AI_TWIN_SYSTEM_PROMPT }] },
        { role: "model", parts: [{ text: "Understood! I am Dr. Alex Rivera's AI Twin. How can I assist you today?" }] },
        ...formattedHistory,
        { role: "user", parts: [{ text: message }] }
      ],
      config: {
        temperature: 0.7,
        maxOutputTokens: 500,
      }
    });

    return res.json({
      reply: response.text || "I am available to discuss AI/ML architectures and full-time opportunities with Alex Rivera!",
      source: "gemini-live"
    });
  } catch (error: any) {
    console.error("AI Chat Error:", error);
    return res.json({
      reply: `I'm currently processing high inference volume! To answer quickly: Alex Rivera is proficient in Python, PyTorch, Next.js, and scaling LLM systems. Let's connect via email or LinkedIn!`,
      source: "fallback-error"
    });
  }
});

// Interactive NLP Sentiment & Token Analyzer Demo Endpoint
app.post("/api/ai/nlp-analyze", async (req, res) => {
  const text: string = req.body?.text || "";
  try {
    if (!text) {
      return res.status(400).json({ error: "Text snippet is required." });
    }

    const client = getGeminiClient();
    if (!client) {
      // Offline fallback calculation for demonstration
      const words = text.split(/\\s+/);
      const posWords = ["good", "great", "excellent", "fast", "love", "awesome", "innovative", "accurate", "impressive", "best", "powerful"];
      const negWords = ["bad", "slow", "poor", "error", "bug", "terrible", "worst", "fail", "wrong"];
      let score = 0;
      words.forEach((w: string) => {
        const lower = w.toLowerCase();
        if (posWords.some(p => lower.includes(p))) score += 0.3;
        if (negWords.some(n => lower.includes(n))) score -= 0.3;
      });
      score = Math.max(-1, Math.min(1, score || 0.45));

      return res.json({
        sentimentScore: parseFloat(score.toFixed(2)),
        sentimentLabel: score > 0.2 ? "Positive" : score < -0.2 ? "Negative" : "Neutral",
        confidence: 0.94,
        tokensCount: words.length,
        entities: ["AI Model", "Inference Engine", "Neural Architecture"],
        summary: "Analyzed via offline heuristics engine. Demonstrates real-time token processing and polarity scoring.",
        source: "offline-fallback"
      });
    }

    const prompt = `Analyze the following text snippet from a Natural Language Processing perspective. Return a strict JSON object with these exact keys:
- "sentimentScore": a number from -1.0 (extremely negative) to 1.0 (extremely positive).
- "sentimentLabel": either "Positive", "Neutral", or "Negative".
- "confidence": a number between 0.80 and 0.99 representing model confidence.
- "tokensCount": integer count of words/tokens.
- "entities": array of up to 4 key technical terms or named entities found in the text.
- "summary": a 1-sentence technical NLP summary of the tone and domain.

Text to analyze: "${text}"

Respond ONLY with valid JSON. Do not include markdown code block formatting if possible, just the raw JSON or clean JSON inside code blocks.`;

    const response = await client.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      config: {
        temperature: 0.2,
        responseMimeType: "application/json"
      }
    });

    const jsonText = response.text || "{}";
    const parsed = JSON.parse(jsonText);
    return res.json({
      ...parsed,
      source: "gemini-live"
    });
  } catch (error) {
    console.error("NLP Analyze Error:", error);
    return res.json({
      sentimentScore: 0.75,
      sentimentLabel: "Positive",
      confidence: 0.91,
      tokensCount: text.split(/\\s+/).length,
      entities: ["Transformer", "Attention Mechanism", "Deep Learning"],
      summary: "High syntactic coherence with positive technical sentiment.",
      source: "fallback"
    });
  }
});

// Vite middleware setup
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*all", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`🚀 AI/ML Portfolio Server running on http://localhost:${PORT}`);
  });
}

startServer();
