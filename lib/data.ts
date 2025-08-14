export const site = {
  name: "Shaik Dada Ibrahim",
  title: "Software Configuration Engineer · Python | Next.js",
  location: "Kurnool, AP, India",
  email: "sdi.dadaibrahim.mj@gmail.com",
  phone: "+91 7997923771",
  social: {
    github: "https://github.com/dadaibrahim",
    linkedin: "https://linkedin.com/in/shaik-dada-ibrahim",
    whatsapp: "https://wa.link/7xk626"
  },
  summary:
    "Entry-level Software Configuration Engineer with strong proficiency in Python, Git-based workflows, and web fundamentals. Passionate about clean builds, release hygiene, and automation.",
  keywords: [
    "Software Configuration Management",
    "Python",
    "Next.js",
    "Git",
    "Release Management",
    "CI/CD"
  ]
};

export const education = [
  { degree: "B.Tech in CSE", school: "G Pullaiah College of Engineering and Technology", year: "2025", location: "Kurnool, India", meta: "CGPA: 7.26" },
  { degree: "Diploma in CSE", school: "Govt Polytechnic for Minorities", year: "2022", location: "Kurnool, India", meta: "Percentage: 76%" },
  { degree: "10th SSC", school: "Z P High School", year: "2019", location: "Kurnool, India", meta: "GPA: 7.8" },
];

export const skills = {
  languages: ["Python", "JavaScript", "SQL"],
  versionControl: ["Git", "GitHub"],
  tools: ["VS Code", "Jupyter Notebook"],
  scm: ["Branching", "Merging", "Release Management"],
  web: ["HTML", "CSS", "Bootstrap", "Next.js (basic)"],
  soft: ["Problem-solving", "Debugging", "Software Lifecycle Knowledge"]
};

export type Project = {
  name: string;
  stack: string[];
  description: string;
  highlights?: string[];
  link?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    name: "Spam & Fake User Detection",
    stack: ["Python", "Scikit-Learn", "Pandas", "Matplotlib"],
    description:
      "Supervised learning pipeline to detect spam/fake profiles based on behavioral signals; evaluated with F1, PR, ROC-AUC.",
    highlights: [
      "Feature engineering (gender inference, click behavior, activity frequency)",
      "Model evaluation and visualization"
    ],
    repo: "https://github.com/dadaibrahim/spammer-and-fake-id-detection"
  },
  {
    name: "Adaptive Learning Platform (AI)",
    stack: ["Next.js", "Node.js", "Python (LLM Prompting)", "Gemini API"],
    description:
      "AI-powered platform that adapts content difficulty using schema-validated prompts and progressive rendering.",
    highlights: [
      "Prompt engineering & response validation",
      "Modular backend with clear separation of concerns"
    ],
    repo: "https://github.com/dadaibrahim/alpv2.git"
  },
  {
    name: "Hostel Management System",
    stack: ["Next.js", "Postgres", "Auth"],
    description:
      "Full-stack app for room allocation, payments, and maintenance tracking.",
  },
  {
    name: "E-commerce Website",
    stack: ["Next.js", "Stripe (mock)", "Tailwind"],
    description:
      "Clean product catalog, cart, and checkout flow (mock payments)."
  },
  {
    name: "Text-based JavaScript RPG",
    stack: ["JavaScript", "HTML", "CSS"],
    description: "Retro-inspired terminal RPG with branching dialogs and inventory."
  }
];

export const publications = [
  {
    title: "AI-Driven Adaptive Learning Platform for Hyper-Personalized Education",
    venue: "Independent Publication",
    summary:
      "Explores real-time analytics and cognitive modeling for intelligent content delivery with behavioral personalization."
  }
];

export const certificates = [
  "AWS Cloud Practitioner – Foundations",
  "Java Development – SoloLearn",
  "Microsoft Azure Fundamentals",
  "Cambridge Linguaskills – English Communication"
];
