// ─────────────────────────────────────────────────────────────
//  Portfolio content — edit this file to update the site.
// ─────────────────────────────────────────────────────────────

const identity = {
  name: "Dheeraj Rangarao",
  first: "Dheeraj",
  role: "Senior AI/ML Engineer",
  tagline: "LLM Systems · RAG · Applied AI Engineering",
  location: "Bengaluru, India",
  summary:
    "I build production AI end-to-end — multi-agent LLMs, RAG, and the evaluation infrastructure that keeps them honest at scale. 9+ years, now architecting Bixby & Galaxy AI evaluation at Samsung Research.",
};

const stats = [
  { value: "9+", label: "Years in AI / engineering" },
  { value: "11", label: "Individual & team awards" },
  { value: "∞+", label: "Ideas waiting to be brought into existence" },
  // { value: "2", label: "Publications" },
];

// Marquee ticker of tools/tech — decorative editorial strip.
const ticker = [
  "LLM Systems",
  "Multi-Agent Orchestration",
  "RAG",
  "LangGraph",
  "vLLM",
  "Neo4j Knowledge Graph",
  "Semantic Evaluation",
  "AI Red-Teaming",
  "Qwen",
  "Mistral",
  "FastAPI",
  "Model Serving",
  "Python",
  "Multimodal AI",
];

const about = {
  paragraphs: [
    "I design, build, and own AI systems end-to-end — multi-agent orchestration, model serving, and the evaluation infra that keeps them honest at scale.",
    "At Samsung Research: B-UniQUE.ai (multi-agent LLM automation), ASR/NMT evaluation, and multi-paradigm RAG across Bixby & Galaxy AI. Local LLM serving on vLLM/Ollama, 4+ locales. 2 papers, 11 awards.",
  ],
  highlights: [
    "Multi-agent LLM orchestration & tool-calling",
    "Retrieval-augmented generation (4 paradigms)",
    "Local LLM serving (vLLM, Ollama)",
    "LLM benchmarking, evaluation & red-teaming",
  ],
};

// Skill groups rendered as categorized cards.
const skillGroups = [
  {
    title: "AI / ML",
    icon: "fas fa-brain",
    items: [
      "LLM Integration & Reasoning",
      "Generative AI",
      "Multi-Agent Systems",
      "Tool-Augmented LLM Agents",
      "Multimodal AI",
      "LLM Benchmarking & Evaluation",
      "AI Safety / Red-Teaming",
      "RAG (Vanilla · Hybrid · KG · SQL)",
      "NLP & Semantic Evaluation",
      "ASR / NMT Evaluation",
    ],
  },
  {
    title: "AI Engineering",
    icon: "fas fa-microchip",
    items: [
      "Agent Orchestration & Tool-Calling",
      "Model Serving (vLLM)",
      "Local LLM Hosting (Ollama, Mistral, Qwen)",
      "IndicTrans NMT · PaddleOCR",
      "Neo4j Knowledge Graph · SQL-RAG",
      "LLM Evaluation & Semantic Scoring",
      "AI-Driven Evaluation Systems",
    ],
  },
  {
    title: "Frameworks & Libraries",
    icon: "fas fa-layer-group",
    items: ["LangChain", "LangGraph", "diff-match-patch", "LaBSE", "BLEU"],
  },
  {
    title: "Programming",
    icon: "fas fa-code",
    items: ["Python", "JavaScript", "TypeScript", "Java", "Bash"],
  },
  {
    title: "Infrastructure & Backend",
    icon: "fas fa-server",
    items: [
      "FastAPI",
      "Node.js",
      "Next.js",
      "Docker",
      "Microservices",
      "REST APIs",
      "WebSockets · Socket.IO",
      "CI/CD",
    ],
  },
  {
    title: "Data Engineering & Pipelines",
    icon: "fas fa-robot",
    items: [
      "Android UI Automation (UIAutomator)",
      "Selenium",
      "Pytest",
      "Jira API Automation",
      "Dataset Curation Pipelines",
    ],
  },
];

// Career timeline — most recent first.
const experience = [
  {
    company: "Samsung Research Institute, Bangalore",
    role: "Chief Engineer — AI/ML Engineering",
    period: "Aug 2021 - Present",
    current: true,
    points: [
      "Architected B-UniQUE.ai — a multi-agent LLM framework (four specialized agents) that drives Bixby end-to-end from a single utterance: setup, navigation, verdict, and multi-turn dialogue.",
      "Built multimodal execution, Bixby-vs-Gemini-vs-Perplexity benchmarking, and a safety red-teaming mode.",
      "Engineered the ASR/NMT evaluation service: a modified diff-match-patch algorithm + LaBSE + BLEU scoring vs Google Translate.",
      "Deployed production LLM serving (Qwen on vLLM) + local Ollama/Mistral + IndicTrans NMT for multilingual inference.",
      "Architected a multi-paradigm RAG platform (Vanilla, Hybrid, Neo4j KG, SQL-RAG) — cut report analysis from hours to minutes.",
      "Authored 2 research papers (TechGlanz-24, -25).",
    ],
    awards: "1× Annual ACE · 3× Spot · 2× Quarterly ACE · 5× Team Awards",
  },
  {
    company: "B2be.com",
    role: "Java Developer",
    period: "Sep 2019 - Jul 2021",
    points: [
      "Built an OCR-based data-extraction pipeline for ERP integration — converting vendor PDFs into structured data as an EDI gateway across heterogeneous ERP ecosystems.",
      "Built configurable extraction rules supporting multiple client ERP implementations, improving onboarding speed for new clients.",
    ],
  },
  {
    company: "Samsung Research (via Access Automation Pvt. Ltd.)",
    role: "Test Engineer",
    period: "Apr 2017 - Aug 2019",
    points: [
      "Built a full-stack Java automation tool for Bixby testing with remote server-side evaluation via a web interface.",
      "Developed a full-stack internal app using Node.js and Electron for automation workflows.",
      "Built and maintained automation scripts for Bixby virtual-assistant regression and feature testing.",
    ],
    awards: "2× Spot Awards",
  },
];

// Featured AI/ML projects.
const projects = [
  {
    name: "GITA",
    subtitle: "Galaxy Intelligence Translation Automation",
    tag: "Production · Samsung Research",
    blurb:
      "End-to-end ASR & NMT evaluation framework across 5+ Galaxy AI solutions (Live Translate, Interpreter, Dictation, Text Call, Voice Recorder), replacing manual review with standardized automated scoring for Hinglish / multilingual edge cases.",
    metrics: ["173,999+ audio files", "+5-7% ASR quality", "4 locales", "Demoed to CTO"],
    stack: ["Python", "diff-match-patch", "LaBSE", "BLEU", "UIAutomator", "Ollama"],
  },
  {
    name: "B-UniQUE.ai",
    subtitle: "Multi-Agent Bixby Automation Framework",
    tag: "Production · Samsung Research",
    blurb:
      "Orchestrates four specialized LLM agents to fully automate Bixby testing from one raw utterance — setup via 40+ custom UIAutomator2 tool APIs, confirmation planning, per-utterance verdict selection to balance accuracy vs GPU cost, and multi-turn dialogue.",
    metrics: ["40+ tool APIs", "Multimodal validation", "LLM benchmarking", "Safety red-teaming"],
    stack: ["Python", "Multi-Agent LLM", "Qwen (multimodal)", "PaddleOCR", "UIAutomator2"],
  },
  {
    name: "D-QAT",
    subtitle: "Device Q&A Automation & LLM Evaluation",
    tag: "Production · Samsung Research",
    blurb:
      "Semantic-scoring and LLM-reasoning evaluation framework assessing correctness, relevance, and reasoning quality of Bixby's on-device Q&A across thousands of utterances per sprint. Reused across 3+ test suites; presented at TechGlanz-25.",
    metrics: ["Reasoning-chain eval", "3+ test suites", "Path Finder POC"],
    stack: ["Python", "Mistral", "Gauss", "LangChain", "FastAPI"],
  },
  {
    name: "PulseAI",
    subtitle: "Multi-Paradigm RAG Report Analysis",
    tag: "Internal · Samsung Research",
    blurb:
      "AI-assisted analysis applying 4 RAG paradigms (Vanilla, Hybrid, Knowledge Graph via Neo4j, SQL-RAG) to query structured tables, free-text findings, and entity relationships across Bixby/Galaxy AI reports.",
    metrics: ["4 RAG paradigms", "Neo4j KG", "Hours → minutes"],
    stack: ["Python", "LangGraph", "LangChain", "Neo4j", "SQL-RAG", "Gauss"],
  },
];

// Smaller / open-source / side projects.
const sideProjects = [
  {
    name: "togetherBuddy",
    blurb:
      "Privacy-first referral platform — E2E-encrypted (ECDH/ECDSA) referral network with real-time architecture (<100ms) and a multi-hop trust graph. 0 bytes of CV/JD stored in plaintext.",
    stack: ["Next.js", "TypeScript", "Socket.IO", "Web Crypto", "FastAPI"],
    url: "https://togetherbuddy.dev-dheeraj.com/",
  },
  {
    name: "BEAT",
    blurb:
      "Bixby E2E Automation Framework — org-wide adopted, structuring test cases as pre-condition + validation steps across ~30 device configs. Shipped via Toolhub.",
    stack: ["Python", "UIAutomator", "Selenium", "Bash", "Pytest"],
    url: "",
  },
  {
    name: "PDF PII Redaction",
    blurb:
      "Open-source redaction pipeline detecting 8+ PII entity types with zero-server-persistence, producing burned-in redacted PDFs in <2s for typical 10-page docs.",
    stack: ["FastAPI", "Python", "pdfjs-dist", "Mammoth", "OCR/NLP"],
    url: "https://github.com/DheerajR1",
  },
];

// Hobbies gallery. Drop images in public/hobbies/ and reference them here.
// Any entry without an image renders a styled placeholder tile.
const INSTAGRAM = "https://www.instagram.com/dextrousmonk/";

const hobbies = [
  {
    title: "Photography",
    blurb: "Street, travel & landscape frames — @dextrousmonk.",
    image: "hobbies/photography.jpg",
    span: "wide",
    url: INSTAGRAM,
  },
  {
    title: "Trekking",
    blurb: "Weekend trails and boulder around.",
    image: "hobbies/trekking.jpg",
    url: INSTAGRAM,
  },
  {
    title: "Travel",
    blurb: "Chasing new places, food and light.",
    image: "hobbies/travel.jpg",
    url: INSTAGRAM,
  },
];

const publications = {
  papers: [
    {
      title: "ASR and NMT Evaluation Framework",
      venue: "SBPA Research · TechGlanz-24, Samsung Research India",
    },
    {
      title: "AI-Driven Automation for Test Evaluation",
      venue: "SBPA Research · TechGlanz-25, Samsung Research India",
    },
  ],
  education: {
    degree: "B.Tech, Computer Science",
    school: "Sri Krishna Institute of Technology",
    period: "2013 - 2017",
  },
};

const contact = {
  pitch:
    "Open to conversations about LLM systems, RAG, AI evaluation, and agentic automation. Let's build something.",
  email: "dheerajr10ao@gmail.com",
  contactUrl: "https://formspree.io/f/xvodqebl",
};

const social = {
  github: "https://github.com/DheerajR1",
  linkedin: "https://www.linkedin.com/in/dheeraj-rangarao-888810118/",
  email: "mailto:dheerajr10ao@gmail.com",
  resume:
    "https://drive.google.com/uc?export=download&id=1CpNA11dA3wG0xbgBigdQo6Vkx97z5pCQ",
};

export {
  identity,
  stats,
  ticker,
  about,
  skillGroups,
  experience,
  projects,
  sideProjects,
  hobbies,
  publications,
  contact,
  social,
};
