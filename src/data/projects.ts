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

import gateway from "../assets/projects/gateway.jpg";
import rag from "../assets/projects/rag.jpg";
import quiz from "../assets/projects/quiz.jpg";
import memory from "../assets/projects/memory.jpg";

export const projects: Project[] = [
  {
    id: "ai-gateway",
    index: "01",
    title: "AI Gateway",
    subtitle: "Enterprise LLM Gateway",
    role: "Design + Build",
    year: "2026",
    tags: ["FastAPI", "Next.js", "Multi-LLM"],
    blurb:
      "A unified gateway to OpenAI, Anthropic, and Google - with fallback routing, PII redaction, cost and token tracking, rate limits, caching, guardrails, and a Next.js admin dashboard.",
    href: "https://github.com/Saibhanupalla/AI-Gateway-Python",
    image: gateway,
    alt: "AI gateway control dashboard routing requests across OpenAI, Anthropic, and Google with cost and token charts",
    kanji: "門",
  },
  {
    id: "rag-assistant",
    index: "02",
    title: "Knowledge Assistant",
    subtitle: "RAG Document Q&A",
    role: "AI Engineering",
    year: "2025",
    tags: ["LangChain", "OpenAI", "FAISS"],
    blurb:
      "A retrieval-augmented assistant that answers questions from your own documents - vector search over your knowledge base, grounded GPT answers, multi-format ingestion.",
    href: "https://github.com/Saibhanupalla/Personal-Knowledge-Assistant-Using-RAG",
    image: rag,
    alt: "Visualization of documents flowing into a vector embedding space toward a glowing neural core",
    kanji: "知",
  },
  {
    id: "ai-quiz",
    index: "03",
    title: "AI Quiz Generator",
    subtitle: "Full-Stack AI Product",
    role: "Full-Stack",
    year: "2025",
    tags: ["React", "FastAPI", "Clerk"],
    blurb:
      "Generate quizzes on any topic with an LLM, take them interactively, and track scores - with Clerk auth, a responsive React UI, and a FastAPI backend.",
    href: "https://github.com/Saibhanupalla/AIQuizGenerator",
    image: quiz,
    alt: "Bold AI quiz interface with a question card, multiple-choice options, timer, and score panel",
    kanji: "問",
  },
  {
    id: "memory-vault",
    index: "04",
    title: "Digital Memory Vault",
    subtitle: "Memory-Keeping App",
    role: "Frontend + Build",
    year: "2025",
    tags: ["React", "TypeScript", "REST API"],
    blurb:
      "A TypeScript/React app for capturing and revisiting personal memories, backed by a deployed API - a more human, expressive take on the everyday vault.",
    href: "https://github.com/Saibhanupalla/Digital-memory-UI",
    image: memory,
    alt: "Cyberpunk memory vault with glowing capsules of photo fragments and a lone figure looking on",
    kanji: "憶",
  },
];
