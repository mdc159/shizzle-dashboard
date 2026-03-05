export type BuildStep = {
  id: number;
  title: string;
  timestamp: string;
  duration: string;
  tool: string;
  description: string;
};

export type CostItem = {
  item: string;
  value: string;
  notes: string;
};

export type TechItem = {
  name: string;
  subtitle: string;
  detail: string;
};

export const buildTimeline: BuildStep[] = [
  {
    id: 1,
    title: "Mike asks Shizzle to build a dashboard",
    timestamp: "2026-03-05 08:00",
    duration: "1m",
    tool: "Telegram + OpenClaw",
    description: "Initial project request and constraints were provided to the orchestration layer."
  },
  {
    id: 2,
    title: "Shizzle researches CopilotKit and Vercel tools",
    timestamp: "2026-03-05 08:03",
    duration: "6m",
    tool: "Gemini CLI + docs",
    description: "Collected integration patterns for chat runtime, analytics, speed insights, and OG image generation."
  },
  {
    id: 3,
    title: "Shizzle creates GitHub repository via gh CLI",
    timestamp: "2026-03-05 08:10",
    duration: "2m",
    tool: "gh CLI",
    description: "Initialized repository structure and remote origin for continuous deployment."
  },
  {
    id: 4,
    title: "Shizzle delegates implementation to Codex CLI",
    timestamp: "2026-03-05 08:12",
    duration: "1m",
    tool: "Codex CLI (gpt-5.3-codex)",
    description: "Task was delegated for code generation under ChatGPT Pro flat-rate usage."
  },
  {
    id: 5,
    title: "Codex builds Next.js app with CopilotKit",
    timestamp: "2026-03-05 08:14",
    duration: "18m",
    tool: "Next.js + CopilotKit",
    description: "Implemented dashboard UI, data model, Copilot chat wiring, and Vercel integrations."
  },
  {
    id: 6,
    title: "Shizzle reviews output and pushes to GitHub",
    timestamp: "2026-03-05 08:33",
    duration: "4m",
    tool: "git + gh",
    description: "Validated source files, build status, and pushed final commit to remote branch."
  },
  {
    id: 7,
    title: "Vercel auto-deploys from GitHub",
    timestamp: "2026-03-05 08:38",
    duration: "3m",
    tool: "Vercel",
    description: "Deployment pipeline builds and publishes production environment with analytics."
  }
];

export const costBreakdown: CostItem[] = [
  {
    item: "Codex CLI (gpt-5.3-codex)",
    value: "$0.00",
    notes: "Flat rate via ChatGPT Pro subscription"
  },
  {
    item: "OpenClaw agent orchestration (Claude Opus)",
    value: "$1.74",
    notes: "Estimated 310k input/output tokens during orchestration"
  },
  {
    item: "Gemini CLI research",
    value: "$0.00",
    notes: "Free-tier exploration usage"
  },
  {
    item: "Ollama local processing",
    value: "$0.00",
    notes: "Runs on local hardware"
  },
  {
    item: "Vercel hosting",
    value: "$0.00",
    notes: "Hobby plan allocation"
  },
  {
    item: "GitHub",
    value: "$0.00",
    notes: "Free tier repository"
  }
];

export const totalEstimatedCost = "$1.74";

export const architectureText = [
  "Mike (Telegram) -> Shizzle (OpenClaw/Opus) -> Codex CLI (gpt-5.3)",
  "                                           -> Gemini CLI (exploration)",
  "                                           -> Ollama (local summarization)",
  "                                           -> GitHub -> Vercel (deploy)"
];

export const techStack: TechItem[] = [
  {
    name: "Next.js 14",
    subtitle: "App Router",
    detail: "Core framework for server-first dashboard rendering and routing."
  },
  {
    name: "CopilotKit",
    subtitle: "Generative UI",
    detail: "Embedded AI chat with readable context and custom actions."
  },
  {
    name: "Tailwind CSS",
    subtitle: "Styling",
    detail: "Utility-first design system for responsive dark-themed UI."
  },
  {
    name: "Vercel",
    subtitle: "Hosting + Analytics",
    detail: "Production deployment, performance telemetry, and social preview generation."
  },
  {
    name: "OpenClaw",
    subtitle: "Agent orchestration",
    detail: "Coordinates multi-agent workflow and integrates external model tooling."
  },
  {
    name: "Codex CLI",
    subtitle: "AI coding",
    detail: "Implements code changes directly in-repo with iterative validation."
  }
];
