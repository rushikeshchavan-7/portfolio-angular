export interface HeroButton {
  label: string;
  url: string;
  type: 'primary' | 'color';
  color?: string;
}

export interface Stat {
  value: string;
  label: string;
  color: 'c1' | 'c2' | 'c3';
}

export interface Skill {
  name: string;
  image: string;
}

export interface SkillGroup {
  title: string;
  skills: Skill[];
}

export interface Experience {
  id: number;
  img: string;
  role: string;
  company: string;
  date: string;
  desc: string;
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

export interface Project {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
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

export interface FooterLink {
  label: string;
  url: string;
  external: boolean;
}

export interface SiteConfig {
  sections: {
    hero: boolean;
    skills: boolean;
    experience: boolean;
    projects: boolean;
    education: boolean;
    certificates: boolean;
    contact: boolean;
  };
  settings: {
    defaultTheme: 'dark' | 'light';
    showGridOverlay: boolean;
    showSideElements: boolean;
  };
  hero: {
    name: string;
    tagline: string;
    roles: string;
    description: string;
    image: string | null;
    statusBadge: string;
    stats: Stat[];
    buttons: HeroButton[];
    techStack: string[];
  };
  contact: {
    email: string;
    phone: string;
    subtitle: string;
  };
  footer: {
    name: string;
    links: FooterLink[];
  };
  skills: SkillGroup[];
  experiences: Experience[];
  education: Education[];
  certificates: Certificate[];
  projects: Project[];
}

export const siteConfig: SiteConfig = {
  sections: {
    hero: true,
    skills: true,
    experience: true,
    projects: true,
    education: true,
    certificates: true,
    contact: true,
  },

  settings: {
    defaultTheme: 'light',
    showGridOverlay: true,
    showSideElements: true,
  },

  hero: {
    name: 'Rushikesh Chavan',
    tagline: 'Junior Software Developer',
    roles: '.NET Core · Angular · Python',
    description:
      'Junior Software Developer at CareEdge with 16+ months of professional experience (including a full-time onsite internship) building enterprise applications using .NET Core, Angular, and Python. B.E. in Computer Science (AI & ML) with Honours in Blockchain Technology.',
    image: null,
    statusBadge: 'Developing Products at CareEdge',
    stats: [
      { value: '8.29', label: 'CGPA', color: 'c1' },
      { value: '16+', label: 'Months at CareEdge', color: 'c2' },
      { value: '10+', label: 'Projects', color: 'c1' },
      { value: '1', label: 'Research Paper', color: 'c3' },
    ],
    buttons: [
      {
        label: 'View Resume',
        url: 'https://drive.google.com/file/d/1ibnyO60n18NWXnLY0KlGhvPiaV16Q4uH/view?usp=sharing',
        type: 'primary',
      },
      {
        label: 'GitHub',
        url: 'https://github.com/rushikeshchavan-7',
        type: 'color',
        color: '#22c55e',
      },
      {
        label: 'LinkedIn',
        url: 'https://www.linkedin.com/in/rushikesh-chavan-275282211/',
        type: 'color',
        color: '#0a66c2',
      },
    ],
    techStack: ['.NET Core', 'Angular', 'TypeScript', 'Python', 'C#', 'Oracle SQL', 'PostgreSQL', 'LangChain', 'LangGraph'],
  },

  contact: {
    email: 'rushikeshchavan2002@gmail.com',
    phone: '+91 91127 80002',
    subtitle: 'Have a question or want to work together? Reach out directly.',
  },

  footer: {
    name: 'Rushikesh Chavan',
    links: [
      { label: 'GitHub', url: 'https://github.com/rushikeshchavan-7', external: true },
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/rushikesh-chavan-275282211/', external: true },
      { label: 'Instagram', url: 'https://www.instagram.com/rushi.chavan__?igsh=bmJyejV3cWlvZnN2', external: true },
      { label: 'Email', url: 'mailto:rushikeshchavan2002@gmail.com', external: false },
    ],
  },

  skills: [
    {
      title: 'Backend',
      skills: [
        { name: 'C#', image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg' },
        { name: '.NET Core', image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/dotnetcore/dotnetcore-original.svg' },
        { name: 'Python', image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg' },
        { name: 'Oracle SQL', image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/oracle/oracle-original.svg' },
        { name: 'PostgreSQL', image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg' },
        { name: 'REST APIs', image: 'https://img.icons8.com/nolan/512/api-settings.png' },
      ],
    },
    {
      title: 'Frontend',
      skills: [
        { name: 'Angular', image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original.svg' },
        { name: 'TypeScript', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png' },
        { name: 'JavaScript', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png' },
        { name: 'HTML', image: 'https://www.w3.org/html/logo/badge/html5-badge-h-solo.png' },
        { name: 'CSS / SCSS', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png' },
        { name: 'Bootstrap', image: 'https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png' },
      ],
    },
    {
      title: 'Tools & DevOps',
      skills: [
        { name: 'Azure DevOps', image: 'https://imgs.search.brave.com/SOtQTzKMkgcb6hGTUqEmh4yfoG-943oS0E6liRb7CBo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMTUvQXp1/cmUtTG9nby1QTkct/RmlsZS5wbmc' },
        { name: 'Git', image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg' },
        { name: 'GitHub', image: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' },
        { name: 'GitLab', image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/gitlab/gitlab-original.svg' },
        { name: 'Jira', image: 'https://cdn.worldvectorlogo.com/logos/jira-1.svg' },
        { name: 'VS Code', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png' },
        { name: 'Visual Studio', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Visual_Studio_Icon_2022.svg/512px-Visual_Studio_Icon_2022.svg.png' },
        { name: 'Postman', image: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg' },
        { name: 'Swagger', image: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Swagger-logo.png' },
        { name: 'Jupyter', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Jupyter_logo.svg/1767px-Jupyter_logo.svg.png' },
      ],
    },
    {
      title: 'AI & ML',
      skills: [
        { name: 'LangChain', image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg' },
        { name: 'LangGraph', image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg' },
        { name: 'Ollama', image: 'https://ollama.com/public/ollama.png' },
        { name: 'OpenCV', image: 'https://upload.wikimedia.org/wikipedia/commons/3/32/OpenCV_Logo_with_text_svg_version.svg' },
        { name: 'NumPy', image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/numpy/numpy-original.svg' },
        { name: 'Pandas', image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/pandas/pandas-original.svg' },
        { name: 'Scikit-Learn', image: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg' },
        { name: 'Flask', image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/flask/flask-original.svg' },
      ],
    },
  ],

  experiences: [
    {
      id: 0,
      img: 'https://imgs.search.brave.com/QGBHWgSumlnIAKcKCPz2qVg1bAX_6fcT5Gxdc42ZUXM/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMzMyYjIzZTJl/ZjlkYTM3MmFlMzc4/ZmIzODlkNzQxNTU5/YTMyM2QwOGIyMmI4/NjdkNzA0ODlmZjE4/ZDU5OGRiOS93d3cu/Y2FyZWVkZ2UuaW4v',
      role: 'Junior Software Developer',
      company: 'CareEdge',
      date: 'May 2025 - Present',
      desc: 'Developing and maintaining enterprise-grade applications using .NET Core and Angular. Building RESTful APIs, working with Oracle SQL and PostgreSQL databases, writing clean and maintainable code following best practices. Managing tasks and sprints using Jira, collaborating with cross-functional teams in an Agile environment.',
      skills: ['.NET Core', 'C#', 'Angular', 'TypeScript', 'Oracle SQL', 'PostgreSQL', 'Git', 'REST APIs', 'Jira'],
    },
    {
      id: 1,
      img: 'https://imgs.search.brave.com/QGBHWgSumlnIAKcKCPz2qVg1bAX_6fcT5Gxdc42ZUXM/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMzMyYjIzZTJl/ZjlkYTM3MmFlMzc4/ZmIzODlkNzQxNTU5/YTMyM2QwOGIyMmI4/NjdkNzA0ODlmZjE4/ZDU5OGRiOS93d3cu/Y2FyZWVkZ2UuaW4v',
      role: 'Software Development Intern (Full-Time Onsite)',
      company: 'CareEdge',
      date: 'Nov 2024 - Apr 2025',
      desc: 'Full-time onsite internship working on production-grade enterprise applications using .NET Core and Angular. Contributed to internal tools, participated in code reviews, sprint planning, and collaborated directly with senior developers in a professional Agile environment.',
      skills: ['.NET Core', 'C#', 'Angular', 'TypeScript', 'Python', 'Git', 'Oracle SQL', 'PostgreSQL'],
    },
    {
      id: 2,
      img: 'https://ik.imagekit.io/eddytools/ET-Website/Logo/ET-Logo-small_AL9eeqySIe.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1617814603239',
      role: 'Web Development Intern',
      company: 'EddyTools Tech. Solution',
      date: 'Sep 2022 - Dec 2022',
      desc: 'Designed and implemented dynamic, responsive web applications utilizing Node.js for server-side development. Leveraged Next.js to enhance performance and scalability. Successfully developed and deployed several websites including a comprehensive blog platform for a client.',
      skills: ['JavaScript', 'GitHub', 'Node.js', 'GitLab', 'HTML', 'CSS'],
    },
    {
      id: 3,
      img: 'https://ik.imagekit.io/eddytools/ET-Website/Logo/ET-Logo-small_AL9eeqySIe.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1617814603239',
      role: 'AI Development Intern',
      company: 'EddyTools Tech. Solution',
      date: 'Jan 2022 - May 2022',
      desc: 'Successfully built six AI-driven projects — drone surveillance system, aruco scanner, drowsiness detection, speed detection, road sign language detector, and smart attendance system.',
      skills: ['Python', 'OpenCV', 'Flask', 'ArucoMarkers', 'NLP', 'NumPy', 'Pandas'],
    },
    {
      id: 4,
      img: 'https://www.clipartmax.com/png/middle/219-2197822_research-paper-flat-icon.png',
      role: 'Research Paper',
      company: 'Saraswati College of Engineering Kharghar',
      date: '2024',
      desc: 'Led the development of Cultivate, a pioneering web-based platform integrating machine learning and deep learning for precision agriculture. Implemented and compared five key algorithms, identifying XGBoost as the most accurate predictor.',
      skills: ['Python', 'NLP', 'XGBoost', 'SKLearn', 'Flask', 'Documentation', 'NumPy', 'Pandas'],
    },
    {
      id: 5,
      img: 'https://rcsaraswaticollege.wordpress.com/wp-content/uploads/2021/07/exdd4674.png?w=1024',
      role: 'Vice President',
      company: 'Rotaract Club of Saraswati College',
      date: 'June 2023 - June 2024',
      desc: 'Led flagship projects like Maitri 7.0 and Saraswati Open 2024. Managed end-to-end project planning, budgeting, and execution. Guided and trained the new Board of Directors, building strong relationships with parent rotary members and district authorities.',
      skills: ['Leadership', 'Project Management', 'Team Building', 'Communication', 'Marketing', 'Event Management'],
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

  projects: [
    {
      id: 0,
      title: 'DocuMind',
      date: 'Feb 2026',
      description:
        'RAG-based document intelligence platform. Upload PDF, DOCX, PPTX, XLSX, TXT files and chat with them — answers come strictly from document content, not general knowledge. Features smart semantic search across all documents, analytics dashboard, multiple chat sessions per document, and AES-256 encryption for stored files.',
      image: 'https://opengraph.githubassets.com/1/rushikeshchavan-7/DocuMind',
      tags: ['Angular', '.NET Core', 'Python', 'FastAPI', 'LangChain', 'ChromaDB', 'PostgreSQL'],
      category: 'web app',
      github: 'https://github.com/rushikeshchavan-7/DocuMind',
      webapp: 'https://documind-rag.netlify.app/auth',
    },
    {
      id: 1,
      title: 'Cultivate 365',
      date: 'Mar 2024',
      description:
        'AI-powered precision agriculture platform with a published research paper at the National Conference on Industry 4.0. Compared five ML algorithms — XGBoost proved most accurate. Features crop and fertilizer recommendation from soil data, leaf disease detection via ResNet9, weather dashboard, Gemini AI chatbot, and multi-language support (EN/HI/MR). PWA-enabled.',
      image: 'https://opengraph.githubassets.com/1/rushikeshchavan-7/Cultivate',
      tags: ['Angular', 'FastAPI', 'PyTorch', 'XGBoost', 'scikit-learn', 'Google Gemini'],
      category: 'web app',
      github: 'https://github.com/rushikeshchavan-7/Cultivate',
      webapp: 'https://cultivate365.netlify.app/',
      researchPaper: 'https://www.linkedin.com/posts/rushikesh-chavan-275282211_its-been-a-year-since-i-published-my-research-activity-7309115888958431233-8x38',
    },
    {
      id: 2,
      title: 'KarmaKendra',
      date: 'Aug 2025',
      description:
        'Production-ready study and task management app (Jira-lite) with drag-and-drop Kanban board, Google Sheets sync, Pomodoro timer, and progress dashboard. Offline-first with IndexedDB, keyboard shortcuts, quick-create with smart parsing, focus mode, and dark mode.',
      image: 'https://opengraph.githubassets.com/1/rushikeshchavan-7/StudyManager',
      tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Zustand', 'Google Sheets API'],
      category: 'web app',
      github: 'https://github.com/rushikeshchavan-7/StudyManager',
      webapp: 'https://rushi-study-manager.netlify.app/',
    },
    {
      id: 3,
      title: 'Developer Portfolio',
      date: 'Jan 2025',
      description:
        'Modern, responsive developer portfolio built with Angular 21 and TypeScript. Features dark/light theme toggle, glass-morphism UI, smooth scroll animations, section-based layout with hero, skills, experience, projects, education, certificates, and contact sections.',
      image: 'https://opengraph.githubassets.com/1/rushikeshchavan-7/portfolio-angular',
      tags: ['Angular', 'TypeScript', 'SCSS'],
      category: 'web app',
      github: 'https://github.com/rushikeshchavan-7/portfolio-angular',
      webapp: 'https://rushikesh-chavan-portfolio.netlify.app/',
    },
  ],
};
