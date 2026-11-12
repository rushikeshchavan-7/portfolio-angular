export interface HeroButton {
  label: string;
  url: string;
  kind: 'primary' | 'ghost';
  icon?: 'resume' | 'github' | 'linkedin';
}

export interface Stat {
  value: number;
  suffix?: string;
  decimals?: number;
  label: string;
}

export interface Skill {
  name: string;
  image: string;
}

/** A capability domain — one tile of the "jack of all trades" bento. */
export interface Capability {
  id: string;
  title: string;
  kicker: string;
  summary: string;
  icon: 'brain' | 'server' | 'layout' | 'chart' | 'cloud' | 'compass';
  accent: string;
  size: 'xl' | 'md' | 'sm';
  examples?: { title: string; detail: string; project: string }[];
  shippedIn: string[];
  skills: Skill[];
}

export interface Experience {
  id: number;
  img: string;
  role: string;
  company: string;
  date: string;
  type: 'work' | 'research' | 'leadership';
  summary: string;
  highlights: string[];
  awards?: string[];
  skills: string[];
}

export interface Education {
  id: number;
  img: string;
  school: string;
  date: string;
  grade: string;
  desc: string;
  degree: string;
}

export interface ProjectMember {
  name: string;
  img: string;
  linkedin: string;
  github: string;
}

export type ProjectKind = 'ai' | 'fullstack' | 'tools';

export interface Project {
  id: number;
  title: string;
  tagline: string;
  date: string;
  description: string;
  highlights: string[];
  image: string;
  tags: string[];
  kinds: ProjectKind[];
  featured?: boolean;
  github: string;
  webapp: string;
  researchPaper?: string;
  member?: ProjectMember[];
}

export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image: string;
  link: string;
  skills: string[];
}

export interface SocialLink {
  label: string;
  url: string;
  external: boolean;
}

export interface SiteConfig {
  settings: {
    defaultTheme: 'dark' | 'light';
  };
  hero: {
    name: string;
    firstName: string;
    headline: string;
    motto: string;
    rotatingRoles: string[];
    description: string;
    image: string;
    statusBadge: string;
    location: string;
    stats: Stat[];
    buttons: HeroButton[];
  };
  marquee: string[];
  contact: {
    email: string;
    phone: string;
    subtitle: string;
  };
  socials: SocialLink[];
  capabilities: Capability[];
  experiences: Experience[];
  education: Education[];
  certificates: Certificate[];
  projects: Project[];
}

const icon = (path: string) => `https://raw.githubusercontent.com/devicons/devicon/master/icons/${path}`;

export const siteConfig: SiteConfig = {
  settings: {
    defaultTheme: 'dark',
  },

  hero: {
    name: 'Rushikesh Chavan',
    firstName: 'Rushikesh',
    headline: 'Jack of all trades.',
    motto: 'Mastering them all.',
    rotatingRoles: [
      'LLM-powered products',
      'RAG pipelines',
      'AI agents',
      '.NET Core backends',
      'Angular & React frontends',
      'data & ETL pipelines',
      'cloud deployments',
    ],
    description:
      'I build intelligent products end to end — the models, the APIs, the interfaces and the infrastructure around them.',
    image: '/avatar.webp',
    statusBadge: 'Currently at CareEdge',
    location: 'India',
    stats: [
      { value: 2, suffix: '+', label: 'Years shipping to production' },
      { value: 3, label: 'Enterprise banking products owned' },
      { value: 10, suffix: '+', label: 'Projects built end-to-end' },
      { value: 95, suffix: '%', label: 'Fewer ad-hoc report requests' },
    ],
    buttons: [
      {
        label: 'View résumé',
        url: 'https://drive.google.com/file/d/12-VrBblQ0HpDmFgEyYUg999Mc14tPlSu/view?usp=sharing',
        kind: 'primary',
        icon: 'resume',
      },
      { label: 'GitHub', url: 'https://github.com/rushikeshchavan-7', kind: 'ghost', icon: 'github' },
      {
        label: 'LinkedIn',
        url: 'https://www.linkedin.com/in/rushikesh-chavan-275282211/',
        kind: 'ghost',
        icon: 'linkedin',
      },
    ],
  },

  marquee: [
    'LangChain', 'LangGraph', 'RAG', 'Groq', 'Gemini', 'Ollama', 'PyTorch', 'XGBoost',
    '.NET Core', 'C#', 'FastAPI', 'Python', 'Angular', 'React', 'Next.js', 'TypeScript',
    'PostgreSQL', 'Oracle SQL', 'MongoDB', 'ChromaDB', 'Docker', 'AWS', 'Azure DevOps', 'GitHub Actions',
  ],

  contact: {
    email: 'rushikeshchavan2002@gmail.com',
    phone: '+91 9112678002',
    subtitle:
      'Have an AI product to ship, a platform to scale, or a hard problem across the stack? I would love to hear about it.',
  },

  socials: [
    { label: 'GitHub', url: 'https://github.com/rushikeshchavan-7', external: true },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/rushikesh-chavan-275282211/', external: true },
    { label: 'Instagram', url: 'https://www.instagram.com/rushi.chavan__?igsh=bmJyejV3cWlvZnN2', external: true },
    { label: 'Email', url: 'mailto:rushikeshchavan2002@gmail.com', external: false },
  ],

  capabilities: [
    {
      id: 'ai',
      title: 'AI & LLM Engineering',
      kicker: 'The core',
      summary:
        'Retrieval-augmented generation, agentic workflows with LangGraph, grounded answers with citations, model fallbacks and guard-rails. AI is the starting point of the design, not a feature bolted on at the end.',
      icon: 'brain',
      accent: '#a78bfa',
      size: 'xl',
      examples: [
        { title: 'Agentic analysis', detail: 'AI credit memo and an analyst that answers with cited sources', project: 'CrediSense' },
        { title: 'Grounded RAG', detail: 'Answers strictly from uploaded documents, never general knowledge', project: 'DocuMind' },
        { title: 'Applied ML', detail: 'XGBoost at 98.6% accuracy and ResNet9 leaf-disease vision', project: 'Cultivate 365' },
      ],
      shippedIn: ['CrediSense', 'DocuMind', 'Cultivate 365'],
      skills: [
        { name: 'LangChain', image: 'https://cdn.simpleicons.org/langchain/1C3C3C' },
        { name: 'LangGraph', image: 'https://cdn.simpleicons.org/langgraph/1C3C3C' },
        { name: 'RAG', image: icon('python/python-original.svg') },
        { name: 'Groq', image: 'https://cdn.simpleicons.org/groq/F55036' },
        { name: 'Gemini', image: 'https://cdn.simpleicons.org/googlegemini/8E75B2' },
        { name: 'Ollama', image: 'https://ollama.com/public/ollama.png' },
        { name: 'ChromaDB', image: icon('python/python-original.svg') },
        { name: 'Prompt Eng.', image: 'https://cdn.simpleicons.org/openai/412991' },
      ],
    },
    {
      id: 'backend',
      title: 'Backend & APIs',
      kicker: 'Systems',
      summary:
        'Clean-architecture services in .NET Core and FastAPI: N-level authorization engines, runtime SQL generation, microservices and well-tested REST APIs.',
      icon: 'server',
      accent: '#22d3ee',
      size: 'md',
      shippedIn: ['CareEdge', 'DocuMind'],
      skills: [
        { name: 'C#', image: icon('csharp/csharp-original.svg') },
        { name: '.NET Core', image: icon('dotnetcore/dotnetcore-original.svg') },
        { name: 'Python', image: icon('python/python-original.svg') },
        { name: 'FastAPI', image: icon('fastapi/fastapi-original.svg') },
        { name: 'PostgreSQL', image: icon('postgresql/postgresql-original.svg') },
        { name: 'Oracle SQL', image: icon('oracle/oracle-original.svg') },
        { name: 'MongoDB', image: icon('mongodb/mongodb-original.svg') },
      ],
    },
    {
      id: 'frontend',
      title: 'Frontend & UX',
      kicker: 'Interfaces',
      summary:
        'Fast, accessible interfaces in Angular, React and Next.js — SSR, lazy loading and shared component libraries. 50% faster Angular apps in production.',
      icon: 'layout',
      accent: '#f472b6',
      size: 'md',
      shippedIn: ['CareEdge', 'KarmaKendra', 'This site'],
      skills: [
        { name: 'Angular', image: icon('angular/angular-original.svg') },
        { name: 'React', image: icon('react/react-original.svg') },
        { name: 'Next.js', image: icon('nextjs/nextjs-original.svg') },
        { name: 'TypeScript', image: icon('typescript/typescript-original.svg') },
        { name: 'Tailwind', image: icon('tailwindcss/tailwindcss-original.svg') },
        { name: 'SCSS', image: icon('sass/sass-original.svg') },
      ],
    },
    {
      id: 'data',
      title: 'Data & Machine Learning',
      kicker: 'Models',
      summary:
        'Classical ML through deep learning: XGBoost at 98.6% accuracy, ResNet-based vision, and Python ETL pipelines automating regulatory reporting.',
      icon: 'chart',
      accent: '#34d399',
      size: 'sm',
      shippedIn: ['Cultivate 365', 'CareEdge ETL'],
      skills: [
        { name: 'PyTorch', image: icon('pytorch/pytorch-original.svg') },
        { name: 'TensorFlow', image: icon('tensorflow/tensorflow-original.svg') },
        { name: 'scikit-learn', image: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg' },
        { name: 'Pandas', image: icon('pandas/pandas-original.svg') },
        { name: 'NumPy', image: icon('numpy/numpy-original.svg') },
        { name: 'OpenCV', image: icon('opencv/opencv-original.svg') },
      ],
    },
    {
      id: 'cloud',
      title: 'Cloud & DevOps',
      kicker: 'Delivery',
      summary:
        'Containerised, CI-gated delivery on AWS, Vercel, Netlify and Azure DevOps — with unit and end-to-end suites guarding every merge.',
      icon: 'cloud',
      accent: '#fbbf24',
      size: 'sm',
      shippedIn: ['CrediSense', 'CareEdge'],
      skills: [
        { name: 'AWS', image: icon('amazonwebservices/amazonwebservices-original-wordmark.svg') },
        { name: 'Docker', image: icon('docker/docker-original.svg') },
        { name: 'Azure DevOps', image: icon('azuredevops/azuredevops-original.svg') },
        { name: 'GitHub Actions', image: icon('githubactions/githubactions-original.svg') },
        { name: 'Playwright', image: icon('playwright/playwright-original.svg') },
        { name: 'Git', image: icon('git/git-original.svg') },
      ],
    },
    {
      id: 'product',
      title: 'Product & Leadership',
      kicker: 'Ownership',
      summary:
        'From requirements gathering with bank stakeholders to production sign-off. Led the college Rotaract board as Vice President.',
      icon: 'compass',
      accent: '#60a5fa',
      size: 'sm',
      shippedIn: ['CareEdge', 'Rotaract'],
      skills: [
        { name: 'Agile / Scrum', image: icon('jira/jira-original.svg') },
        { name: 'System Design', image: icon('azuresqldatabase/azuresqldatabase-original.svg') },
        { name: 'Postman', image: icon('postman/postman-original.svg') },
        { name: 'Swagger', image: icon('swagger/swagger-original.svg') },
      ],
    },
  ],

  experiences: [
    {
      id: 0,
      img: 'https://www.google.com/s2/favicons?domain=careedge.in&sz=128',
      role: 'Software Engineer',
      company: 'CareEdge',
      date: 'May 2025 — Present',
      type: 'work',
      summary:
        'Promoted from Junior Software Developer to Software Engineer (April 2026). Own three enterprise banking products — Stress Testing, Operational Risk and Loan Origination — for financial institutions across India, Bhutan and Sri Lanka, from requirements to production.',
      highlights: [
        'Built a no-code Report & Dashboard Builder with a visual query designer that generates parameterised SQL at runtime — cut ad-hoc reporting change requests by 95%.',
        'Designed a configurable N-level authorization policy engine with screen-level access control, following SOLID principles.',
        'Automated regulatory reporting for two banks with Python ETL pipelines (APScheduler + Pandas).',
        'Made the Angular apps 50% faster with lazy loading, SSR and API optimisation.',
      ],
      awards: ['Emerging Engineer of the Year FY26', 'Rookie of the Year FY26', 'Hats Off FY25 Q4'],
      skills: ['.NET Core', 'C#', 'Angular', 'TypeScript', 'Python', 'FastAPI', 'Microservices', 'Clean Architecture', 'Oracle SQL', 'PostgreSQL'],
    },
    {
      id: 1,
      img: 'https://www.google.com/s2/favicons?domain=careedge.in&sz=128',
      role: 'Software Development Intern (full-time, onsite)',
      company: 'CareEdge',
      date: 'Nov 2024 — Apr 2025',
      type: 'work',
      summary:
        'Built production features for enterprise banking applications with .NET Core, Angular, Oracle SQL and PostgreSQL in an Agile team.',
      highlights: [
        'Practised test-driven development with xUnit on production modules.',
        'Refactored a shared Angular component library, removing 30% of repeated code across modules.',
        'Took part in code reviews and sprint planning with senior engineers.',
      ],
      skills: ['.NET Core', 'C#', 'Angular', 'TypeScript', 'xUnit', 'TDD', 'Oracle SQL', 'PostgreSQL'],
    },
    {
      id: 2,
      img: 'https://ik.imagekit.io/eddytools/ET-Website/Logo/ET-Logo-small_AL9eeqySIe.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1617814603239',
      role: 'Web Development Intern',
      company: 'EddyTools Tech. Solution',
      date: 'Sep 2022 — Dec 2022',
      type: 'work',
      summary: 'Designed and shipped dynamic, responsive web applications for clients.',
      highlights: [
        'Built server-side features with Node.js and used Next.js for performance and scalability.',
        'Developed and deployed several client websites, including a full blog platform.',
      ],
      skills: ['JavaScript', 'Node.js', 'Next.js', 'HTML', 'CSS', 'GitLab'],
    },
    {
      id: 3,
      img: 'https://ik.imagekit.io/eddytools/ET-Website/Logo/ET-Logo-small_AL9eeqySIe.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1617814603239',
      role: 'AI Development Intern',
      company: 'EddyTools Tech. Solution',
      date: 'Jan 2022 — May 2022',
      type: 'work',
      summary: 'Where it started: six computer-vision and AI projects in five months.',
      highlights: [
        'Drone surveillance, ArUco marker scanning, drowsiness detection, speed detection, road-sign detection and a smart attendance system.',
      ],
      skills: ['Python', 'OpenCV', 'Flask', 'ArUco', 'NLP', 'NumPy', 'Pandas'],
    },
    {
      id: 4,
      img: 'https://cdn.simpleicons.org/googlescholar/4285F4',
      role: 'Research Paper — Cultivate',
      company: 'National Conference on Industry 4.0',
      date: '2024',
      type: 'research',
      summary:
        'Led Cultivate, a web platform applying machine learning and deep learning to precision agriculture.',
      highlights: ['Implemented and compared five algorithms; XGBoost was the most accurate predictor (98.6%).'],
      skills: ['Python', 'XGBoost', 'scikit-learn', 'Flask', 'Research'],
    },
    {
      id: 5,
      img: 'https://rcsaraswaticollege.wordpress.com/wp-content/uploads/2021/07/exdd4674.png?w=1024',
      role: 'Vice President',
      company: 'Rotaract Club of Saraswati College',
      date: 'Jun 2023 — Jun 2024',
      type: 'leadership',
      summary: 'Led flagship projects such as Maitri 7.0 and Saraswati Open 2024.',
      highlights: [
        'Owned end-to-end planning, budgeting and execution.',
        'Trained the incoming Board of Directors and worked with Rotary and district leadership.',
      ],
      skills: ['Leadership', 'Project Management', 'Communication', 'Event Management'],
    },
  ],

  projects: [
    {
      id: 0,
      title: 'CrediSense',
      tagline: 'AI credit analyst for lenders',
      date: 'Nov 2026',
      featured: true,
      description:
        "CrediSense turns a borrower's documents into a decision-ready credit file. It covers secure document collection, a data room, GST-vs-bank reconciliation, legal and sanctions screening, early-warning alerts, credit-policy checks, an editable AI credit memo, and an AI analyst that answers with cited sources.",
      highlights: [
        'AI analyst that answers with cited sources; falls back to a smaller model, then to rules-based answers, when limits hit.',
        'Deterministic analysis pipeline: reconcile → ratios → policy → alerts → risk scorecard with guard-rails. Nothing is invented — missing data stays empty.',
        'Role-based access (admin, credit officer, borrower) enforced on the server for every page and API route.',
        'Single-recipient, hashed, expiring invite links; scrypt passwords, CSRF origin checks, rate limits and a full audit log.',
        'Layered architecture with ESLint-enforced boundaries; Vitest unit and Playwright end-to-end suites in CI.',
      ],
      image: 'https://opengraph.githubassets.com/1/rushikeshchavan-7/CrediSense',
      tags: ['Next.js 15', 'React 19', 'TypeScript', 'Groq LLM', 'PostgreSQL · Neon', 'Tailwind', 'Playwright'],
      kinds: ['ai', 'fullstack'],
      github: 'https://github.com/rushikeshchavan-7/CrediSense',
      webapp: 'https://credisense-rushi.vercel.app/',
    },
    {
      id: 1,
      title: 'DocuMind',
      tagline: 'Chat with your documents',
      date: 'Feb 2026',
      description:
        'RAG-based document intelligence platform. Upload PDF, DOCX, PPTX, XLSX or TXT files and chat with them — answers come strictly from document content, not general knowledge.',
      highlights: [
        'Semantic search across every uploaded document.',
        'Multiple chat sessions per document and an analytics dashboard.',
        'AES-256 encryption for stored files.',
      ],
      image: 'https://opengraph.githubassets.com/1/rushikeshchavan-7/DocuMind',
      tags: ['Angular', '.NET Core', 'FastAPI', 'LangChain', 'ChromaDB', 'PostgreSQL'],
      kinds: ['ai', 'fullstack'],
      github: 'https://github.com/rushikeshchavan-7/DocuMind',
      webapp: 'https://documind-rag.netlify.app/auth',
    },
    {
      id: 2,
      title: 'Cultivate 365',
      tagline: 'AI for precision agriculture',
      date: 'Mar 2024',
      description:
        'AI-powered precision agriculture platform backed by a research paper at the National Conference on Industry 4.0. Crop and fertiliser recommendations from soil data, leaf-disease detection, a weather dashboard and a Gemini chatbot.',
      highlights: [
        'Compared five ML algorithms — XGBoost proved most accurate at 98.6%.',
        'Leaf-disease detection with a ResNet9 model.',
        'Multi-language (English, Hindi, Marathi) and installable as a PWA.',
      ],
      image: 'https://opengraph.githubassets.com/1/rushikeshchavan-7/Cultivate',
      tags: ['Angular', 'FastAPI', 'PyTorch', 'XGBoost', 'scikit-learn', 'Gemini'],
      kinds: ['ai', 'fullstack'],
      github: 'https://github.com/rushikeshchavan-7/Cultivate',
      webapp: 'https://cultivate365.netlify.app/',
      researchPaper:
        'https://www.linkedin.com/posts/rushikesh-chavan-275282211_its-been-a-year-since-i-published-my-research-activity-7309115888958431233-8x38',
    },
    {
      id: 3,
      title: 'KarmaKendra',
      tagline: 'Jira-lite for study & tasks',
      date: 'Aug 2025',
      description:
        'Production-ready study and task manager with a drag-and-drop Kanban board, Google Sheets sync, Pomodoro timer and progress dashboard.',
      highlights: [
        'Offline-first with IndexedDB.',
        'Keyboard shortcuts, smart quick-create parsing and focus mode.',
      ],
      image: 'https://opengraph.githubassets.com/1/rushikeshchavan-7/StudyManager',
      tags: ['React', 'TypeScript', 'Vite', 'Tailwind', 'Zustand', 'Sheets API'],
      kinds: ['fullstack', 'tools'],
      github: 'https://github.com/rushikeshchavan-7/StudyManager',
      webapp: 'https://rushi-study-manager.netlify.app/',
    },
    {
      id: 4,
      title: 'This portfolio',
      tagline: 'Angular 21, zoneless & signals',
      date: 'Nov 2026',
      description:
        'The site you are on. Angular 21 standalone components with signals, a canvas neural-field hero, a command palette (⌘K), scroll-driven reveals and a token-based dark/light theme.',
      highlights: ['No UI library — hand-built design system in SCSS.', 'Respects reduced-motion preferences.'],
      image: 'https://opengraph.githubassets.com/1/rushikeshchavan-7/portfolio-angular',
      tags: ['Angular 21', 'TypeScript', 'Signals', 'SCSS', 'Canvas'],
      kinds: ['tools'],
      github: 'https://github.com/rushikeshchavan-7/portfolio-angular',
      webapp: 'https://rushikesh-chavan-portfolio.netlify.app/',
    },
  ],

  education: [
    {
      id: 0,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn0QyxLnPv2QEue2JJaEpQq4faY9tch_1lEw&s',
      school: 'Saraswati College of Engineering Kharghar (University of Mumbai)',
      date: 'Jan 2020 - May 2024',
      grade: '8.29 CGPA',
      desc: "Bachelor's degree in Computer Science and Engineering.",
      degree: 'Bachelor of Engineering - BE, Computer Science and Engineering',
    },
    {
      id: 1,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn0QyxLnPv2QEue2JJaEpQq4faY9tch_1lEw&s',
      school: 'Saraswati College of Engineering Kharghar (University of Mumbai)',
      date: 'May 2020 - May 2024',
      grade: '8.18 CGPA',
      desc: 'Honours degree in Blockchain Technology.',
      degree: 'Honours Degree of Blockchain Technology',
    },
    {
      id: 2,
      img: 'https://brainfeedmagazine.com/wp-content/uploads/2024/05/Maharashtra-State-Board-of-Secondary-Higher-Secondary-Education.png',
      school: 'ICLes Motilal Jhunjhunwala College, Vashi',
      date: 'Apr 2019 - Apr 2020',
      grade: '68.46%',
      desc: 'Class 12 - Science stream.',
      degree: 'HSC(XII), Science',
    },
    {
      id: 3,
      img: 'https://brainfeedmagazine.com/wp-content/uploads/2024/05/Maharashtra-State-Board-of-Secondary-Higher-Secondary-Education.png',
      school: 'ICL High School, Vashi',
      date: 'Apr 2017 - Apr 2018',
      grade: '80%',
      desc: 'Class 10.',
      degree: 'SSC(X), Semi-English Medium',
    },
  ],
  certificates: [
    {
      id: 0,
      title: 'Prompt Engineering',
      issuer: 'DeepLearning.AI',
      date: 'Aug 2025',
      image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg',
      link: 'https://learn.deeplearning.ai/accomplishments/7de3efe4-e696-4fae-ab0e-4810e26e9fee?usp=sharing',
      skills: ['Prompt Engineering', 'AI', 'LLMs'],
    },
    {
      id: 1,
      title: 'LangGraph',
      issuer: 'LangChain',
      date: 'Jul 2025',
      image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg',
      link: 'https://academy.langchain.com/certificates/srzuz05jtq',
      skills: ['LangGraph', 'LangChain', 'AI Agents'],
    },
    {
      id: 2,
      title: 'Coding: Development & Advanced Engineering Job Simulation',
      issuer: 'Accenture North America',
      date: 'Oct 2024',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Accenture.svg/512px-Accenture.svg.png',
      link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Accenture%20North%20America/XvvYRvb2YpfkyA52H_Accenture%20North%20America_xwXGnCGyKdx2kdWDJ_1729619162444_completion_certificate.pdf',
      skills: ['Databases', 'Software Development', 'Engineering'],
    },
    {
      id: 3,
      title: 'Software Engineering Job Simulation',
      issuer: 'Goldman Sachs',
      date: 'Oct 2024',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Goldman_Sachs.svg/512px-Goldman_Sachs.svg.png',
      link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Goldman%20Sachs/NPdeQ43o8P9HJmJzg_Goldman%20Sachs_xwXGnCGyKdx2kdWDJ_1729598990589_completion_certificate.pdf',
      skills: ['Software Development', 'SQL', 'Engineering'],
    },
    {
      id: 4,
      title: 'Spring Boot',
      issuer: 'Scaler',
      date: 'Sep 2024',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Spring_Boot.svg/512px-Spring_Boot.svg.png',
      link: 'https://moonshot.scaler.com/s/li/EJQ_E0LYiW',
      skills: ['Spring Boot', 'Java', 'REST APIs'],
    },
    {
      id: 5,
      title: 'Avishkar - Project Competition',
      issuer: 'Saraswati College of Engineering Kharghar',
      date: 'Apr 2024',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn0QyxLnPv2QEue2JJaEpQq4faY9tch_1lEw&s',
      link: 'https://drive.google.com/file/d/1KeC9870TQUHXYXOAy8q0omJUN2DLv8lF/view?usp=drivesdk',
      skills: ['Machine Learning', 'Python', 'Research'],
    },
    {
      id: 6,
      title: 'National Conference — Recent Trends & Developments in Industry 4.0',
      issuer: 'Vishwaniketan iMEET',
      date: 'Mar 2024',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn0QyxLnPv2QEue2JJaEpQq4faY9tch_1lEw&s',
      link: 'https://drive.google.com/file/d/1LIgp0vFGFjllifIBmKWCfVfViwIyT8_M/view?usp=drivesdk',
      skills: ['Research Paper', 'Machine Learning', 'XGBoost', 'Precision Agriculture'],
    },
    {
      id: 7,
      title: 'DBMS',
      issuer: 'Scaler',
      date: 'Feb 2024',
      image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg',
      link: 'https://drive.google.com/file/d/1S91vU26zliAOyCAFKGXmPMdgMtkFcwzf/view?usp=drivesdk',
      skills: ['SQL', 'Database', 'DBMS'],
    },
    {
      id: 8,
      title: 'DSA Java',
      issuer: 'Scaler',
      date: 'Feb 2024',
      image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg',
      link: 'https://drive.google.com/file/d/1Vt9EivxxGj5R-5WINyaVqAIgZ4wpkSyx/view?usp=drivesdk',
      skills: ['Data Structures', 'Algorithms', 'Java'],
    },
    {
      id: 9,
      title: 'Java',
      issuer: 'Scaler',
      date: 'Feb 2024',
      image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg',
      link: 'https://moonshot.scaler.com/s/li/dO5oAUgshj',
      skills: ['Java', 'OOP', 'Programming'],
    },
    {
      id: 10,
      title: 'Core Python',
      issuer: 'Udemy',
      date: 'Jul 2022',
      image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg',
      link: 'https://udemy.com/certificate/UC-fa7c5fb0-18eb-4304-b3f8-65f43935139a/',
      skills: ['Python', 'Programming', 'Scripting'],
    },
    {
      id: 11,
      title: 'Web Development',
      issuer: 'Internshala Trainings',
      date: '2021',
      image: 'https://www.w3.org/html/logo/badge/html5-badge-h-solo.png',
      link: 'https://trainings.internshala.com/s/v/674485/6ceba24f',
      skills: ['HTML', 'CSS', 'JavaScript'],
    },
  ],
};
