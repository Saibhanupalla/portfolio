export type Project = {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  role: string;
  year: string;
  tags: string[];
  blurb: string;
  live?: boolean;
  href?: string;
  image: string;
  alt: string;
  kanji: string;
};

import talecraft from "../assets/projects/rag.jpg";
import gateway from "../assets/projects/gateway.jpg";
import news from "../assets/projects/quiz.jpg";
import debug from "../assets/projects/gateway.jpg";
import localflow from "../assets/projects/memory.jpg";

export const projects: Project[] = [
  {
    id: "talecraft",
    index: "01",
    title: "Talecraft",
    subtitle: "Voice-First Interactive Fiction",
    role: "AI Engineering",
    year: "2026",
    tags: ["LangGraph", "pgvector", "Ollama"],
    blurb:
      "Compiles a classic novel into a typed world bible, then runs a canon-grounded adventure with scoped retrieval, model tiering, CI-gated evals, and a full local voice loop — VAD, ASR, and per-character TTS.",
    href: "https://github.com/Saibhanupalla/talecraft",
    image: talecraft,
    alt: "Visualization of story knowledge flowing into a vector embedding space toward a glowing neural core",
    kanji: "物",
  },
  {
    id: "ai-gateway",
    index: "02",
    title: "AI Gateway",
    subtitle: "Multi-Provider LLM Proxy",
    role: "Design + Build",
    year: "2026",
    tags: ["FastAPI", "Next.js", "Presidio"],
    blurb:
      "Unified API across OpenAI, Anthropic, and Google with failover routing, Presidio PII redaction, cost and token tracking, rate limits, guardrails, caching, and a Next.js admin dashboard.",
    href: "https://github.com/Saibhanupalla/AI-Gateway-Python",
    image: gateway,
    alt: "AI gateway control dashboard routing requests across OpenAI, Anthropic, and Google with cost and token charts",
    kanji: "門",
  },
  {
    id: "ai-news-agent",
    index: "03",
    title: "AI News Agent",
    subtitle: "Daily AI/Tech Briefing",
    role: "AI Engineering",
    year: "2026",
    tags: ["Python", "Gemini", "Astro"],
    blurb:
      "A self-running daily pipeline: RSS ingest, duplicate clustering, freshness and quality gates, Gemini JSON editions, GitHub Actions cron, and a static Astro reader with personalized topic filtering.",
    href: "https://github.com/Saibhanupalla/AI-News-Agent",
    image: news,
    alt: "Bold briefing interface with headline cards, topic tags, and a daily edition archive",
    kanji: "報",
  },
  {
    id: "code-debug-assistant",
    index: "04",
    title: "Code Debugging Assistant",
    subtitle: "Evidence-Grounded Repair Agent",
    role: "AI Engineering",
    year: "2025",
    tags: ["Pinecone", "RAG", "FastAPI"],
    blurb:
      "Indexes repos into Pinecone, reranks with a cross-encoder, constrains the LLM to a JSON schema with citations and unified diffs, then verifies every patch in a sandbox with Ruff and pytest.",
    href: "https://github.com/Saibhanupalla/code-debugging-assistant",
    image: debug,
    alt: "Developer dashboard showing retrieved code evidence, root-cause chain, and a verified patch diff",
    kanji: "修",
  },
  {
    id: "localflow",
    index: "05",
    title: "LocalFlow",
    subtitle: "On-Device macOS Dictation",
    role: "Native + AI",
    year: "2026",
    tags: ["Swift", "WhisperKit", "Ollama"],
    blurb:
      "Hold fn, speak, release — WhisperKit on the Apple Neural Engine transcribes locally, then a Qwen2.5 cleanup pass strips fillers and resolves self-corrections before pasting into any app. Fully offline.",
    href: "https://github.com/Saibhanupalla/LocalFlow",
    image: localflow,
    alt: "Cyberpunk memory vault with glowing capsules of photo fragments and a lone figure looking on",
    kanji: "声",
  },
];
