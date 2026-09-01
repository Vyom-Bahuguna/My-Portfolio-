import type { Project, SkillCategory, Achievement } from '../types';

export const PERSONAL_INFO = {
  name: 'VYOM BAHUGUNA',
  title: 'Founder · Product Builder · AI/ML Enthusiast',
  tagline: 'Building real-world software products that solve concrete operational and accessibility challenges.',
  location: 'Dehradun, India',
  email: 'vyombahuguna2601@gmail.com',
  github: 'https://github.com/Vyom-Bahuguna',
  philosophy: 'I see problems, and I build solutions.',
  heroPortrait: '/assets/hero-portrait.png',
  iitPhoto: '/assets/iit-mandi-cert.png',
  secondaryPhoto: '/assets/portrait-sunglasses.png',
  cutoutPhoto: '/assets/portrait-sunglasses-clean.png',
};

export const PROJECTS: Project[] = [
  {
    id: 'sameto',
    name: 'SAMETO',
    formerName: 'DukaanDost',
    role: 'Founder & Developer',
    userMetric: '25 Real Users',
    userMetricNumber: 25,
    userMetricLabel: 'Active business operators across multiple stores',
    tagline: 'Comprehensive multi-store business management & AI financial briefing platform',
    shortDescription: 'Built an end-to-end business operations engine enabling small merchants to track inventory, manage Udhaar/credit ledgers, process staff payroll, and review AI-generated business health reports.',
    problem: 'Small retail merchants in India struggle with fragmented manual paper ledgers, unorganized customer credit (Udhaar), lack of real-time multi-store inventory visibility, and difficulty extracting actionable financial insights from daily sales.',
    solution: 'Engineered a unified, cloud-synchronized management platform with multi-store support, digital Udhaar tracking, Gemini AI executive briefings, and bilingual English/Hindi interface optimized for mobile workflows.',
    keyFeatures: [
      {
        title: 'Multi-Store & Inventory Control',
        description: 'Synchronized inventory control across distinct store locations with instant stock adjustment alerts.',
        screenshot: '/assets/sameto-landing.png'
      },
      {
        title: 'Credit (Udhaar) & Customer Ledgers',
        description: 'Digital debt tracking with automated balance calculations and customer ledger histories.',
        screenshot: '/assets/sameto-landing.png'
      },
      {
        title: 'Gemini AI Business Briefings',
        description: 'Generative AI financial scoring and natural language health summaries of profit trends and stock health.',
        screenshot: '/assets/sameto-landing.png'
      },
      {
        title: 'Bilingual Mobile-First UX',
        description: 'Seamless switching between Hindi and English with high-contrast mobile responsiveness for on-the-floor store staff.',
        screenshot: '/assets/sameto-landing.png'
      }
    ],
    techStack: ['Firebase Auth', 'Cloud Workflows', 'Gemini AI API', 'JavaScript', 'CSS3', 'HTML5'],
    liveUrl: 'https://sameto-f759f.web.app',
    githubUrl: 'https://github.com/Vyom-Bahuguna/Sameto',
    mainImage: '/assets/sameto-landing.png',
    videoUrl: '/assets/sameto-video.mp4',
    screenshots: [
      {
        title: 'SaaS Merchant Login & Authentication Interface',
        caption: 'Secure Google OAuth 2.0 and cloud session initialization page.',
        url: '/assets/sameto-landing.png'
      }
    ]
  },
  {
    id: 'institute-helper',
    name: 'INSTITUTE HELPER',
    role: 'Founder & Developer',
    userMetric: '121 Verified Students',
    userMetricNumber: 121,
    userMetricLabel: 'Managed across 2 active institute administrators',
    userMetricBreakdown: [
      'ABC Physics Classes — 64 students',
      'Kanchan Chemistry Classes — 57 students'
    ],
    tagline: 'Full-stack education administrative suite with schedule conflict resolution and offline syncing',
    shortDescription: 'Independently designed and deployed a complete institute management engine for tuition centers, handling fee billing, gradebooks, payroll, and conflict-free classroom scheduling.',
    problem: 'Private education institutes spend dozens of hours weekly manually tracking fee dues across student batches, resolving teacher/room booking overlaps, and generating monthly billing reports.',
    solution: 'Built a full-stack web application featuring automated outstanding fee calculations, real-time timetable conflict detection, offline-first local caching, and CSV analytical reporting.',
    keyFeatures: [
      {
        title: 'Student Records & Batch Tracking',
        description: 'Centralized database of 121 student profiles across specialized physics and chemistry batches.',
        screenshot: '/assets/institute-helper-landing.png'
      },
      {
        title: 'Automated Billing & Outstanding Dues',
        description: 'Instant calculation of pending fees, payment logs, and billing statement exports.',
        screenshot: '/assets/institute-helper-landing.png'
      },
      {
        title: 'Teacher & Room Conflict Engine',
        description: 'Smart scheduling validator that flags overlapping room assignments and faculty double-bookings.',
        screenshot: '/assets/institute-helper-landing.png'
      },
      {
        title: 'Offline-First Local Caching',
        description: 'Uninterrupted offline administrative access powered by local persistence and background Firestore sync.',
        screenshot: '/assets/institute-helper-landing.png'
      }
    ],
    techStack: ['Firebase Auth', 'Firestore Database', 'Offline Caching', 'JavaScript', 'HTML5/CSS3'],
    liveUrl: 'https://institute-helper.web.app',
    githubUrl: 'https://github.com/Vyom-Bahuguna/Institute-Helper',
    mainImage: '/assets/institute-helper-landing.png',
    screenshots: [
      {
        title: 'Administrative Control Center',
        caption: 'Unified administrative login portal utilized by institute directors.',
        url: '/assets/institute-helper-landing.png'
      }
    ]
  },
  {
    id: 'readify',
    name: 'READIFY',
    role: 'Founder & Developer',
    userMetric: '31 Active Readers',
    userMetricNumber: 31,
    userMetricLabel: 'Engaged users utilizing custom accessibility & reading tools',
    tagline: 'Accessible digital reader combining Dyslexia-friendly modes, NLP search, and streak gamification',
    shortDescription: 'Developed an inclusive reading and comprehension web app incorporating text-to-speech audio, ranked SQLite text search, Dyslexia typography, and interactive vocabulary tools.',
    problem: 'Standard digital reading platforms lack specialized accessibility accommodations for neurodivergent readers, while offering weak vocabulary integration and context lookup tools.',
    solution: 'Engineered an accessible reader with dynamic font customization, Dyslexia-friendly contrast themes, rule-based NLP readability analysis, TTS audio narration, and Streamlit analytics.',
    keyFeatures: [
      {
        title: 'Text-to-Speech & Live Highlighting',
        description: 'Synchronized audio narration with word-by-word visual focus tracking.',
        screenshot: '/assets/readify-discover.png'
      },
      {
        title: 'Dyslexia-Friendly Mode & Focus Views',
        description: 'Custom font toggles, letter-spacing controls, and high-contrast reader themes.',
        screenshot: '/assets/readify-discover.png'
      },
      {
        title: 'Ranked SQLite Search & NLP Readability',
        description: 'Fast, rule-based natural language processing search ranking and text complexity scoring.',
        screenshot: '/assets/readify-browse.png'
      },
      {
        title: 'Streaks & Comprehension Quizzes',
        description: 'Gamified reading habit streaks and auto-generated quizzes to reinforce vocabulary retention.',
        screenshot: '/assets/readify-landing.png'
      }
    ],
    techStack: ['SQLite FTS', 'Rule-Based NLP', 'Firebase Auth', 'Streamlit Analytics', 'Web Speech API'],
    liveUrl: 'https://readify-10557.web.app',
    githubUrl: 'https://github.com/Vyom-Bahuguna/Readify',
    mainImage: '/assets/readify-landing.png',
    videoUrl: '/assets/readify-video.mp4',
    screenshots: [
      {
        title: 'Readify Digital Library Interface',
        caption: 'Clean, accessible library view with curated world literature and search.',
        url: '/assets/readify-landing.png'
      },
      {
        title: 'Reader & Discover Experience',
        caption: 'Interactive discovery interface for personalized reading tracks.',
        url: '/assets/readify-discover.png'
      },
      {
        title: 'Catalog & Categorized Reading View',
        caption: 'Multi-genre library navigation powered by client-side filtering.',
        url: '/assets/readify-browse.png'
      }
    ]
  }
];

export const TECHNICAL_SKILLS: SkillCategory[] = [
  {
    category: 'Programming & Data Structures',
    skills: [
      'Python',
      'Java',
      'Arrays & Hash Maps',
      'Linked Lists',
      'Stacks & Queues',
      'Binary Search',
      'Sorting Algorithms',
      'Time/Space Complexity',
      'Big-O Analysis'
    ]
  },
  {
    category: 'Databases & Storage',
    skills: [
      'SQL',
      'Relational Data Modeling',
      'Schema Design',
      'Normalization',
      'Database Indexing',
      'Complex Joins'
    ]
  },
  {
    category: 'Machine Learning',
    skills: [
      'Linear Regression',
      'Random Forests',
      'Clustering (K-Means)',
      'Principal Component Analysis (PCA)',
      'Model Evaluation Metrics'
    ]
  },
  {
    category: 'Deep Learning',
    skills: [
      'Neural Networks & MLPs',
      'Convolutional Networks (CNNs)',
      'Recurrent Networks (LSTMs)',
      'Transformer Architectures'
    ]
  },
  {
    category: 'Generative AI & LLMs',
    skills: [
      'BERT',
      'GPT',
      'LLaMA',
      'CLIP',
      'Multimodal Pretraining',
      'LoRA / QLoRA Fine-tuning',
      'Prompt & Context Engineering',
      'Retrieval-Augmented Generation (RAG)'
    ]
  },
  {
    category: 'AI-Assisted Development',
    skills: [
      'AI Code Generation & Debugging',
      'Codebase Understanding',
      'Automated Test Creation',
      'Documentation Generation',
      'Cursor',
      'Claude Code'
    ]
  },
  {
    category: 'Web Engineering & Tools',
    skills: [
      'HTML5',
      'CSS3',
      'ES6+ JavaScript',
      'Git & GitHub',
      'Firebase & Firestore'
    ]
  }
];

export const EDUCATION = [
  {
    institution: 'St. Joseph\'s Academy, Dehradun',
    degree: 'Senior Secondary (ISC), Class XII',
    grade: '85.5% Best Four / 84% Overall',
    coursework: [
      'Introduction to Python & Data Science Exposure',
      'Mathematics',
      'Design Practicum-Style Project Work'
    ]
  },
  {
    institution: 'IIT Mandi',
    collaboration: 'In collaboration with Masai School, NSDC & Centre for Continuing Education (CCE)',
    program: 'Himshikhar Program — Software Development with AI',
    credential: 'Certificate of Completion',
    description: 'Intensive residential program spanning Python, Data Structures & Algorithms, Database Engineering, Classical Machine Learning, Deep Learning, Generative AI/LLMs, and AI-assisted Software Development.',
    capstone: 'Digital Library Accessibility and Reading Support Platform',
    miniProject: 'Instant Autocomplete — a fast, memory-efficient search-suggestion engine',
    photo: '/assets/iit-mandi-cert.png'
  }
];

export const DIGITAL_CAMPAIGN = {
  role: 'Digital Campaign & Content Manager',
  duration: '6+ months (Active & Ongoing)',
  context: 'Initiated, executed, and currently maintaining a comprehensive social media strategy for a state-level political campaign, establishing and growing the campaign\'s digital presence from the ground up.',
  disclaimer: 'The social media channels were operated on behalf of political candidate Ashvini Bahuguna. Content is presented solely as evidence of creative direction, video production, poster design, and digital audience engagement strategy.',
  responsibilities: [
    'Established official Instagram and Facebook campaign channels from scratch.',
    'Produced and edited video content for social distribution.',
    'Designed digital posters and event announcements.',
    'Managed end-to-end editorial calendar and active digital audience engagement.'
  ],
  links: [
    { label: 'Facebook Campaign Channel', url: 'https://www.facebook.com/share/1DUedt6t49/' },
    { label: 'Instagram Campaign Channel', url: 'https://www.instagram.com/ashvinibahuguna?igsi=OHlrZzM4M2R5MXE2' }
  ]
};

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: '1st Prize, Western Dance (Senior)',
    event: 'Inter-House Cultural Fest 2024–25',
    institution: 'St. Joseph\'s Academy, Dehradun',
    badge: '1st Place Gold'
  },
  {
    title: '2nd Prize, Science Exhibition',
    event: 'Annual Science & Tech Fair',
    institution: 'St. Joseph\'s Academy, Dehradun',
    badge: '2nd Place Silver'
  },
  {
    title: '3rd Prize, English Dramatics',
    event: 'Inter-House Cultural Fest 2023–24',
    institution: 'St. Joseph\'s Academy, Dehradun',
    badge: '3rd Place Bronze'
  }
];
