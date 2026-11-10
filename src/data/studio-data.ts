export interface ProjectButton {
  text: string;
  url: string;
  icon?: string;
  style?: string;
}

export interface ProjectTag {
  name: string;
  color?: string;
}

export interface StudioProject {
  id: string;
  title: string;
  url?: string;
  date: string;
  category: 'platform' | 'client' | 'developer-tool' | 'mobile-pwa';
  categories: ('platform' | 'client' | 'developer-tool' | 'mobile-pwa')[];
  description: string;
  features: string[];
  image?: string | null;
  imageAlt?: string;
  priority: 'high' | 'medium' | 'low';
  featured: boolean;
  isLibrary?: boolean;
  installCommand?: string;
  tags: ProjectTag[];
  buttons: ProjectButton[];
  metrics?: string;
}

export interface DeveloperLibrary {
  id: string;
  title: string;
  date: string;
  category: string;
  description: string;
  installCommand: string;
  icon: string;
  tags: ProjectTag[];
  buttons: ProjectButton[];
}

export interface TechSkill {
  name: string;
  role: string;
  highlight: string;
  icon?: string;
}

export interface TechCategory {
  id: string;
  category: string;
  tag: string;
  description: string;
  skills: TechSkill[];
}

export interface SocialPlatform {
  name: string;
  username: string;
  url: string;
  description: string;
  category: 'code' | 'community' | 'visual' | 'updates';
  badge?: string;
  icon: string;
}

export interface FounderInfo {
  name: string;
  title: string;
  image: string;
  bio: string[];
  location: string;
  university: string;
  email: string;
  website?: string;
  socialLinks: {
    name: string;
    url: string;
    icon: string;
  }[];
}

export const studioConfig = {
  name: "Imhotep Tech",
  tagline: "Software Studio & Engineering Lab",
  headline: "A software studio building custom web apps, APIs, enterprise workflows, and developer tools.",
  philosophy: "We build things people actually use.",
  contactPitch: "Have a project or problem to solve? Whether you need a custom web platform, ERP addons, or automation pipelines, let's talk.",
  email: "contact@imhotep-tech.com",
  studioEmail: "contact@imhotep-tech.com",
  location: "Cairo, Egypt",
  timezone: "Africa/Cairo",
  established: 2023,
  shareUrl: "https://www.imhotep-tech.com/community",
  stats: [
    { label: "Published Platforms", value: "10", detail: "Real production web & mobile projects" },
    { label: "Published Packages", value: "4", detail: "PyPI libraries & developer APIs" },
    { label: "Years Active", value: "3+ Years", detail: "Founded in Cairo, Egypt in 2023" },
  ]
};

export const founderData: FounderInfo = {
  name: "Karim Bassem Joseph",
  title: "Software Developer & Founder of Imhotep Tech",
  image: "/karim.jpg",
  bio: [
    "Software developer specializing in Python web frameworks, Django service-layer architectures, and full-stack React systems. Computer Science student at Nile University.",
    "Founder of Imhotep Tech, focused on delivering high-durability technology solutions through custom software, resilient APIs, and developer packages that solve real, operational challenges."
  ],
  location: "Cairo, Egypt",
  university: "Nile University (NU)",
  email: "k.bassem@imhotep-tech.com",
  website: "https://kbassem.imhotep-tech.com",
  socialLinks: [
    {
      name: "Portfolio",
      url: "https://kbassem.imhotep-tech.com",
      icon: "globe"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/karimbassem",
      icon: "linkedin"
    },
    {
      name: "GitHub",
      url: "https://github.com/kbassem10",
      icon: "github"
    },
    {
      name: "X (Twitter)",
      url: "https://x.com/kbassem10",
      icon: "twitter"
    }
  ]
};

export const studioProjects: StudioProject[] = [
  {
    id: "dastet-al3ab",
    title: "Dastet Al3ab — Offline Party Games Bundle",
    url: "https://dastet-al3ab.vercel.app/",
    date: "July 2026",
    category: "mobile-pwa",
    categories: ["mobile-pwa", "platform"],
    description: "Offline-first PWA party game platform for Sahel hangouts and road trips, featuring card games, trivia, forbidden words, and social challenges without requiring internet connectivity.",
    features: [
      "Offline-first PWA with service-worker caching for reliable play anywhere.",
      "Git-backed serverless design where game decks are defined in clean JSON.",
      "DRY state architecture allowing new interactive game engines in minutes.",
      "High-contrast dark-mode aesthetic tuned for low-light gatherings.",
      "Full Arabic & English localization with instantaneous RTL/LTR switching."
    ],
    image: "/dasta.png",
    imageAlt: "Dastet Al3ab Party Games Platform",
    priority: "high",
    featured: true,
    tags: [
      { name: "Next.js", color: "text-blue-400 bg-blue-500/10 border-blue-500/20" },
      { name: "React 19", color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20" },
      { name: "TypeScript", color: "text-blue-300 bg-blue-600/10 border-blue-600/20" },
      { name: "PWA Offline-First", color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" },
      { name: "Tailwind CSS", color: "text-sky-400 bg-sky-500/10 border-sky-500/20" }
    ],
    buttons: [
      {
        text: "Launch Platform",
        url: "https://dastet-al3ab.vercel.app/",
        icon: "external-link"
      },
      {
        text: "Source Code",
        url: "https://github.com/Imhotep-Tech/dastet-al3ab",
        icon: "github"
      }
    ],
    metrics: "100% Offline-Capable"
  },
  {
    id: "7cs-loyalty",
    title: "Loyalty Program — Enterprise Multi-Branch System",
    url: "https://loyalty.7-cylinders.com/",
    date: "February 2026",
    category: "client",
    categories: ["client", "platform", "mobile-pwa"],
    description: "Full-stack enterprise loyalty platform built for 7 Cylinders, a premier multi-branch car services company in Egypt. Delivered from architecture to production in two weeks.",
    features: [
      "Time-sensitive cryptographic QR codes for counter point redemptions.",
      "Automated invoice ingestion pipeline syncing legacy billing to PostgreSQL.",
      "Granular role-based access control for branch cashiers, managers, and corporate admins.",
      "Bilingual Arabic/English PWA experience with automated receipt generation.",
      "End-to-end regression tested with Playwright test suites."
    ],
    image: null,
    imageAlt: "7CS Loyalty Program Web Application",
    priority: "high",
    featured: true,
    tags: [
      { name: "Django REST Framework", color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" },
      { name: "React 19", color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20" },
      { name: "PostgreSQL", color: "text-blue-400 bg-blue-500/10 border-blue-500/20" },
      { name: "Docker", color: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20" },
      { name: "JWT Security", color: "text-amber-400 bg-amber-500/10 border-amber-500/20" },
      { name: "Playwright E2E", color: "text-purple-400 bg-purple-500/10 border-purple-500/20" }
    ],
    buttons: [
      {
        text: "Live Client Portal",
        url: "https://loyalty.7-cylinders.com/",
        icon: "external-link"
      }
    ],
    metrics: "Multi-branch production rollout"
  },
  {
    id: "imhotep-finance",
    title: "Imhotep Financial Manager v8.2",
    url: "https://finance.imhotep-tech.com/",
    date: "June 2026",
    category: "platform",
    categories: ["platform", "mobile-pwa", "client"],
    description: "Complete financial intelligence suite engineered with Django, React, and React Native. Combines automated scheduled transactions, multi-currency wallets, and deep analytical charts.",
    features: [
      "Native Android application published on Google Play alongside responsive web app.",
      "Google OAuth with smart deep-linking back into native mobile containers.",
      "Location-aware transaction categorization and dynamic spending trend charts.",
      "Automated currency conversion feeds and recurring scheduled transaction engines.",
      "One-click Dockerized self-hosting scripts with automated database migrations."
    ],
    image: "/imhotep_finance.png",
    imageAlt: "Imhotep Financial Manager v8.2",
    priority: "high",
    featured: true,
    tags: [
      { name: "Django", color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" },
      { name: "React", color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20" },
      { name: "React Native", color: "text-sky-400 bg-sky-500/10 border-sky-500/20" },
      { name: "PostgreSQL", color: "text-blue-400 bg-blue-500/10 border-blue-500/20" },
      { name: "Google Play", color: "text-green-400 bg-green-500/10 border-green-500/20" }
    ],
    buttons: [
      {
        text: "Open Web App",
        url: "https://finance.imhotep-tech.com/",
        icon: "external-link"
      },
      {
        text: "Google Play Store",
        url: "https://play.google.com/store/apps/details?id=com.imhoteptech.imhotep_finance",
        icon: "play-store"
      },
      {
        text: "GitHub Repository",
        url: "https://github.com/Imhotep-Tech/imhotep_finance",
        icon: "github"
      }
    ],
    metrics: "Google Play Store Verified"
  },
  {
    id: "pharaohfolio",
    title: "Pharaohfolio — AI Portfolio Deployment Engine",
    url: "https://pharaohfolio.vercel.app/",
    date: "August 2025",
    category: "developer-tool",
    categories: ["developer-tool", "platform"],
    description: "Instant hosting infrastructure for single-page portfolios and landing pages generated by LLMs. Paste raw code from Claude, ChatGPT, or Gemini and publish to an optimized CDN URL instantly.",
    features: [
      "Zero-setup publishing: paste HTML/React code and receive a production URL.",
      "Monaco-powered in-browser code editor with live split-screen previewing.",
      "Isolated sandboxing ensuring safe script execution for client-provided assets.",
      "Built-in visitor analytics and automated meta tag optimization."
    ],
    image: "/PharaohfolioLogo.png",
    imageAlt: "Pharaohfolio Hosting Platform",
    priority: "high",
    featured: true,
    tags: [
      { name: "Django Core", color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" },
      { name: "React 19", color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20" },
      { name: "Monaco Editor", color: "text-amber-400 bg-amber-500/10 border-amber-500/20" },
      { name: "Dockerized Isolation", color: "text-blue-400 bg-blue-500/10 border-blue-500/20" }
    ],
    buttons: [
      {
        text: "Launch Pharaohfolio",
        url: "https://pharaohfolio.vercel.app/",
        icon: "external-link"
      },
      {
        text: "GitHub Repository",
        url: "https://github.com/Imhotep-Tech/Pharaohfolio",
        icon: "github"
      }
    ],
    metrics: "Instant Zero-Config Hosting"
  },
  {
    id: "imhotep-chef",
    title: "ImhotepChef — AI Culinary Intelligence",
    url: "https://imhotep-chef.vercel.app/",
    date: "August 2025",
    category: "platform",
    categories: ["platform", "developer-tool"],
    description: "Intelligent recipe engine powered by Google Gemini AI that synthesizes available pantry ingredients into chef-grade recipes, minimizing household food waste.",
    features: [
      "Multi-ingredient prompt distillation powered by Google Gemini API.",
      "Dietary constraint filtering (macros, allergens, cooking time, appliances).",
      "Interactive step-by-step cooking guide with timer and unit conversions."
    ],
    image: "/imhotepchef.png",
    imageAlt: "ImhotepChef Culinary Companion",
    priority: "medium",
    featured: true,
    tags: [
      { name: "Google Gemini AI", color: "text-rose-400 bg-rose-500/10 border-rose-500/20" },
      { name: "Django REST", color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" },
      { name: "React", color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20" },
      { name: "PostgreSQL", color: "text-blue-400 bg-blue-500/10 border-blue-500/20" }
    ],
    buttons: [
      {
        text: "Try ImhotepChef",
        url: "https://imhotep-chef.vercel.app/",
        icon: "external-link"
      },
      {
        text: "View on GitHub",
        url: "https://github.com/Imhotep-Tech/ImhotepChef",
        icon: "github"
      }
    ],
    metrics: "Gemini AI Integrated"
  },
  {
    id: "imhotep-currency",
    title: "Imhotep Currency Converter",
    url: "https://imhotepcc.vercel.app/",
    date: "July 2025",
    category: "platform",
    categories: ["platform", "developer-tool"],
    description: "High-speed frontend client consuming the Imhotep Exchange Rates API, providing live FX conversions with 24-hour rate synchronization and sub-100ms response times.",
    features: [
      "Custom REST API backend with automatic 24-hour exchange sync.",
      "Optimized offline caching for frequently referenced currencies.",
      "Ultra-minimalist, keyboard-accessible conversion UI."
    ],
    image: "/icc.png",
    imageAlt: "Imhotep Currency Converter",
    priority: "medium",
    featured: false,
    tags: [
      { name: "React", color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20" },
      { name: "Custom FX API", color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" },
      { name: "Daily Rates", color: "text-amber-400 bg-amber-500/10 border-amber-500/20" }
    ],
    buttons: [
      {
        text: "Convert Currencies",
        url: "https://imhotepcc.vercel.app/",
        icon: "external-link"
      },
      {
        text: "GitHub Repository",
        url: "https://github.com/Imhotep-Tech/ImhotepCurrency",
        icon: "github"
      }
    ],
    metrics: "24-Hour Synced FX"
  },
  {
    id: "imhotep-smart-clinic",
    title: "Imhotep Smart Clinic",
    url: "https://imhotepsmartclinic.pythonanywhere.com/",
    date: "April 2025",
    category: "client",
    categories: ["client", "platform", "mobile-pwa"],
    description: "Medical practice management platform offering digital electronic health records (EHR), Arabic prescription formatting, role-based doctor/assistant workflows, and appointment scheduling.",
    features: [
      "Bilingual Arabic/English electronic prescription generator with print styling.",
      "Patient appointment queuing and historical visit logs.",
      "Progressive Web App support allowing doctor tablet usage during consultations."
    ],
    image: "/imhotepclinic.png",
    imageAlt: "Imhotep Smart Clinic",
    priority: "medium",
    featured: false,
    tags: [
      { name: "Django", color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" },
      { name: "EHR Records", color: "text-blue-400 bg-blue-500/10 border-blue-500/20" },
      { name: "Arabic Rx", color: "text-purple-400 bg-purple-500/10 border-purple-500/20" },
      { name: "PWA", color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20" }
    ],
    buttons: [
      {
        text: "View System",
        url: "https://imhotepsmartclinic.pythonanywhere.com/",
        icon: "external-link"
      },
      {
        text: "GitHub Repository",
        url: "https://github.com/Imhotep-Tech/imhotep_smart_clinic",
        icon: "github"
      }
    ],
    metrics: "Production Clinic Workflow"
  },
  {
    id: "imhotep-tasks",
    title: "Imhotep Tasks — Cross-Platform Suite",
    url: "https://imhotep-tasks.vercel.app/",
    date: "March 2025",
    category: "platform",
    categories: ["platform", "mobile-pwa", "developer-tool"],
    description: "Universal task manager engineered to run uniformly across Web, Android (via TWA), and Desktop (via Electron), powered by a centralized Django API.",
    features: [
      "Unified codebase supporting Web, Mobile, and Desktop runtimes.",
      "Kanban-style prioritized boards with local-first optimistic updates.",
      "Background sync for reliable offline-to-online reconciliation."
    ],
    image: "/imhotep_tasks.png",
    imageAlt: "Imhotep Tasks Application",
    priority: "medium",
    featured: false,
    tags: [
      { name: "Django", color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" },
      { name: "React Native", color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20" },
      { name: "Electron", color: "text-blue-400 bg-blue-500/10 border-blue-500/20" },
      { name: "PWA", color: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20" }
    ],
    buttons: [
      {
        text: "Launch Web App",
        url: "https://imhotep-tasks.vercel.app/",
        icon: "external-link"
      },
      {
        text: "GitHub Repository",
        url: "https://github.com/Imhotep-Tech/imhotep_tasks",
        icon: "github"
      }
    ],
    metrics: "Web + Mobile + Desktop"
  },
  {
    id: "imhotep-skills",
    title: "Imhotep Skills — Competency Tracker",
    url: "https://imhotepskills.pythonanywhere.com/",
    date: "February 2025",
    category: "platform",
    categories: ["platform", "developer-tool"],
    description: "Curriculum progression tracker helping engineers map out skill trees, track daily practice logs, and visualize mastery milestones.",
    features: [
      "Interactive dependency tree visualizer for prerequisite skill paths.",
      "Daily learning log with streak tracking and retrospective notes.",
      "Lightweight Flask backend with zero third-party database bloat."
    ],
    image: "/imhotep_skills.jpeg",
    imageAlt: "Imhotep Skills App",
    priority: "medium",
    featured: false,
    tags: [
      { name: "Flask", color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" },
      { name: "Skill Trees", color: "text-amber-400 bg-amber-500/10 border-amber-500/20" },
      { name: "Learning Paths", color: "text-purple-400 bg-purple-500/10 border-purple-500/20" }
    ],
    buttons: [
      {
        text: "Open System",
        url: "https://imhotepskills.pythonanywhere.com/",
        icon: "external-link"
      }
    ],
    metrics: "Structured Skill Trees"
  },
  {
    id: "the-first-program",
    title: "The First Program — Medical Foundation",
    url: "https://kbassem.pythonanywhere.com/login",
    date: "October 2023",
    category: "client",
    categories: ["client", "platform"],
    description: "The founding project of Imhotep Tech: an early Flask clinic system managing patient records, doctor consultations, and medical logs.",
    features: [
      "Patient records registration and historical visit tracking.",
      "Doctor consultation workflows and clinical data storage.",
      "The inaugural project establishing the studio in 2023."
    ],
    image: null,
    imageAlt: "The First Program",
    priority: "low",
    featured: false,
    tags: [
      { name: "Flask", color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" },
      { name: "Clinic Management", color: "text-blue-400 bg-blue-500/10 border-blue-500/20" },
      { name: "Inaugural 2023", color: "text-amber-400 bg-amber-500/10 border-amber-500/20" }
    ],
    buttons: [
      {
        text: "View System",
        url: "https://kbassem.pythonanywhere.com/login",
        icon: "external-link"
      }
    ],
    metrics: "Founding 2023 Build"
  }
];

export const studioLibraries: DeveloperLibrary[] = [
  {
    id: "dj-scaffold",
    title: "dj-scaffold",
    date: "July 2026",
    category: "Python CLI Tool",
    description: "Interactive CLI companion for rapidly scaffolding enterprise Dockerized Django services with Service Layer architecture, JWT authentication, and security-first defaults.",
    installCommand: "pip install dj-scaffold-imhotep",
    icon: "terminal",
    tags: [
      { name: "Django 5+", color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" },
      { name: "Docker Compose", color: "text-blue-400 bg-blue-500/10 border-blue-500/20" },
      { name: "Service Layer", color: "text-purple-400 bg-purple-500/10 border-purple-500/20" },
      { name: "PyPI Package", color: "text-amber-400 bg-amber-500/10 border-amber-500/20" }
    ],
    buttons: [
      {
        text: "PyPI Package",
        url: "https://pypi.org/project/dj-scaffold-imhotep/",
        icon: "python"
      },
      {
        text: "GitHub Repo",
        url: "https://github.com/Imhotep-Tech/dj-scaffold",
        icon: "github"
      }
    ]
  },
  {
    id: "imhotep-files-flask",
    title: "imhotep-files-flask",
    date: "October 2024",
    category: "Python Library",
    description: "Streamlined file management utility for Flask web services, handling secure multipart uploads, mime-type verification, and disk hygiene with zero boilerplate.",
    installCommand: "pip install imhotep-files-flask",
    icon: "file-code",
    tags: [
      { name: "Flask", color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" },
      { name: "Upload Security", color: "text-rose-400 bg-rose-500/10 border-rose-500/20" },
      { name: "Python 3+", color: "text-blue-400 bg-blue-500/10 border-blue-500/20" }
    ],
    buttons: [
      {
        text: "PyPI Package",
        url: "https://pypi.org/project/imhotep-files-flask/",
        icon: "python"
      },
      {
        text: "GitHub Repo",
        url: "https://github.com/Imhotep-Tech/imhotep_files_flask",
        icon: "github"
      }
    ]
  },
  {
    id: "imhotep-mail",
    title: "imhotep-mail",
    date: "October 2024",
    category: "Python Library",
    description: "Zero-dependency email dispatch client for Python services, simplifying TLS/SSL SMTP configuration, templated HTML notifications, and fallback retries.",
    installCommand: "pip install imhotep-mail",
    icon: "mail",
    tags: [
      { name: "SMTP Dispatch", color: "text-yellow-400 bg-yellow-500/10 border-yellow-500/20" },
      { name: "HTML Templates", color: "text-blue-400 bg-blue-500/10 border-blue-500/20" },
      { name: "Zero Bloat", color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" }
    ],
    buttons: [
      {
        text: "PyPI Package",
        url: "https://pypi.org/project/imhotep-mail/",
        icon: "python"
      },
      {
        text: "GitHub Repo",
        url: "https://github.com/Imhotep-Tech/imhotep_mail",
        icon: "github"
      }
    ]
  },
  {
    id: "imhotep-currency-api",
    title: "Imhotep Exchange Rates API",
    date: "October 2024",
    category: "High-Availability API",
    description: "High-uptime, publicly accessible currency exchange rates endpoint with daily updates, zero API key requirements for community tiers, and sub-50ms query latency.",
    installCommand: "https://imhotepexchangeratesapi.pythonanywhere.com/api/v1/rates",
    icon: "globe",
    tags: [
      { name: "REST API", color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" },
      { name: "Live FX Rates", color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20" },
      { name: "High Uptime", color: "text-blue-400 bg-blue-500/10 border-blue-500/20" }
    ],
    buttons: [
      {
        text: "Live Endpoint",
        url: "https://imhotepexchangeratesapi.pythonanywhere.com/",
        icon: "external-link"
      },
      {
        text: "GitHub Repo",
        url: "https://github.com/Imhotep-Tech/imhotep_currency_rates_api",
        icon: "github"
      }
    ]
  }
];

export const techStackCategories: TechCategory[] = [
  {
    id: "backend",
    category: "Backend & System APIs",
    tag: "Core Engineering",
    description: "Architecting resilient APIs, clean service-layer ORMs, and transactional workflows.",
    skills: [
      { name: "Python", role: "Primary Studio Language", highlight: "Core Backend" },
      { name: "Django & DRF", role: "Service Layers & ORM", highlight: "Enterprise Core" },
      { name: "Flask", role: "Microservices & Utilities", highlight: "REST Services" },
      { name: "RESTful Architecture", role: "High-Throughput Contracts", highlight: "Clean APIs" }
    ]
  },
  {
    id: "frontend",
    category: "Frontend, Mobile & PWAs",
    tag: "User Experience",
    description: "Crafting spatial, weightless web interfaces, cross-platform mobile apps, and offline-first PWAs.",
    skills: [
      { name: "React 19 & Next.js", role: "Component Architecture & SSR", highlight: "Modern Web" },
      { name: "TypeScript", role: "Strict Type Safety", highlight: "Zero Runtime Regressions" },
      { name: "React Native", role: "iOS & Android Mobile Engines", highlight: "Cross-Platform" },
      { name: "Tailwind CSS", role: "Design Token Systems", highlight: "Spatial Styling" },
      { name: "PWA Offline-First", role: "Service Workers & Local Storage", highlight: "High Reliability" }
    ]
  },
  {
    id: "data",
    category: "Databases & Storage",
    tag: "Data Modeling",
    description: "Structured relational models, ACID transactions, and indexed query performance.",
    skills: [
      { name: "PostgreSQL", role: "Enterprise Relational Store", highlight: "Primary Production DB" },
      { name: "SQLite3", role: "Fast Embedded Persistence", highlight: "Zero Maintenance" },
      { name: "Schema Modeling", role: "Zero-Downtime Migrations", highlight: "Normalized Design" }
    ]
  },
  {
    id: "devops",
    category: "DevOps & Core CS",
    tag: "Infrastructure & Foundations",
    description: "Reproducible container stacks, automated deployment pipelines, and algorithmic foundations.",
    skills: [
      { name: "Docker & Compose", role: "Containerized Orchestration", highlight: "Reproducible Envs" },
      { name: "Git & CI/CD", role: "Automated Deployments", highlight: "Release Flow" },
      { name: "Algorithms & CS", role: "Graph Search & Minimax AI", highlight: "Academic CS" },
      { name: "C / C++", role: "Systems Programming Foundations", highlight: "Memory & Performance" }
    ]
  }
];

export const studioSocials: SocialPlatform[] = [
  {
    name: "GitHub",
    username: "Imhotep-Tech",
    url: "https://github.com/Imhotep-Tech",
    description: "Open-source packages, CLI tools, and studio platforms.",
    category: "code",
    badge: "20+ Repositories",
    icon: "github"
  },
  {
    name: "LinkedIn",
    username: "Karim Bassem Joseph",
    url: "https://www.linkedin.com/in/karimbassem",
    description: "Founder insights, architecture decisions, and client case studies.",
    category: "community",
    badge: "Founder Profile",
    icon: "linkedin"
  },
  {
    name: "X (Twitter)",
    username: "@Imhoteptech1",
    url: "https://x.com/Imhoteptech1",
    description: "Engineering notes, release logs, and fast studio updates.",
    category: "updates",
    badge: "Studio Account",
    icon: "twitter"
  },
  {
    name: "Instagram",
    username: "@imhotep_tech",
    url: "https://www.instagram.com/imhotep_tech",
    description: "Visual product drops, UI teasers, and design showcases.",
    category: "visual",
    badge: "Design & Drops",
    icon: "instagram"
  },
  {
    name: "Threads",
    username: "@imhotep_tech",
    url: "https://www.threads.net/@imhotep_tech",
    description: "Quick developer notes, discussions, and studio behind-the-scenes.",
    category: "community",
    badge: "Discussions",
    icon: "threads"
  },
  {
    name: "PyPI (Python Index)",
    username: "imhotep-packages",
    url: "https://pypi.org/user/kbassem10/",
    description: "Published Python packages including dj-scaffold, imhotep-mail & files.",
    category: "code",
    badge: "Published Packages",
    icon: "python"
  }
];
