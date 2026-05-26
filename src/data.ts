import type { PortfolioData } from "./types";

export const PORTFOLIO_DATA: PortfolioData = {
  name: "Kanha Vishwakarma",
  initials: "KV",
  role: "Software Engineer",
  location: "Ahmedabad, India",
  email: "kanhavishwakarma2003@gmail.com",
  phone: "+91 95222 88085",
  resume: "/assets/Kanha_Vishwakarma_Resume.pdf",
  social: {
    github: "https://github.com/Kan2003",
    linkedin: "https://linkedin.com/in/kanha-vishwakarma",
    leetcode: "https://leetcode.com/u/kanha2003/",
  },
  hero: {
    eyebrow: "Available for India",
    tagline:
      "Software Engineer building scalable full-stack applications with React, TypeScript and Node.js — turning legacy systems into modern product surfaces.",
  },
  stats: [
    { v: "25", unit: "%", k: "faster rendering through lazy loading, code splitting and RTK Query caching", tag: "Performance" },
    { v: "40", unit: "%", k: "faster development cycles after shipping the shared component library", tag: "Velocity" },
    { v: "2", unit: "+ yrs", k: "writing production React, TypeScript and Node services in product teams", tag: "Experience" },
    { v: "1", unit: "", k: "design system now adopted across the entire Vagaro product ecosystem", tag: "Impact" },
  ],
  about: [
    "I'm a software engineer based in Ahmedabad, focused on the React, TypeScript and Node.js stack. I like the part of the job where messy legacy systems become calm, predictable product surfaces — and I'm fluent enough across the stack to follow a feature from schema to pixel.",
    "Right now I'm at <accent>Vagaro Technology</accent>, where I lead the foundational UI component library and migrate large .NET modules to a modern React architecture. Before that I shipped full-stack PHP + React work at QualityWebs.",
    "Outside of work you'll usually find me grinding LeetCode, sketching out side projects, or trying to break my own Storybook setup.",
  ],
  experience: [
    {
      role: "Software Engineer",
      company: "Vagaro Technology",
      where: "Ahmedabad, Gujarat",
      when: "Jun 2024 — Present",
      tag: "Current",
      points: [
        "Led end-to-end development of the foundational UI component library using Storybook and TypeScript — now actively used across the entire Vagaro product ecosystem, accelerating feature rollout for every team.",
        "Spearheaded the migration of large-scale legacy .NET modules to a modern React (v18+) architecture, significantly improving maintainability and developer velocity.",
        "Optimized application performance — 25% reduction in render time via lazy loading, code splitting, and advanced caching strategies with RTK Query.",
        "Architected scalable global state with Redux Toolkit, ensuring seamless data sync across complex workflows.",
        "Integrated high-performance REST APIs using React Suspense and custom hooks for efficient, non-blocking data fetching.",
      ],
      stack: ["React 18+", "TypeScript", "Redux Toolkit", "RTK Query", "Storybook", "Next.js", ".NET migration"],
    },
    {
      role: "Full-Stack Developer",
      company: "QualityWebs",
      where: "Indore, MP",
      when: "Jan 2023 — Dec 2023",
      tag: "Promoted from Intern",
      points: [
        "Engineered high-performance full-stack web applications using PHP and React, driving improvements in reliability and engagement.",
        "Optimized MySQL schemas and query plans — reducing server response times and improving overall application efficiency.",
        "Modernized workflows by implementing CI/CD pipelines and strict Git strategies, significantly accelerating release cycles.",
        "Enforced code quality through rigorous peer review and unit testing, measurably reducing production bugs.",
      ],
      stack: ["React", "PHP", "MySQL", "Git", "CI/CD"],
    },
  ],
  projects: [
    {
      num: "01",
      title: "Pratifal",
      italic: "coupons + rewards, MERN",
      desc:
        "A full-stack MERN application for centralized coupon and rewards management. JWT auth with role-based access control, RESTful APIs over Node + Express + MongoDB, responsive React UI in Tailwind, and a Chrome extension in progress to auto-detect and store coupons across the web.",
      stack: ["MongoDB", "Express", "React", "Node.js", "Tailwind", "JWT", "Chrome ext."],
      meta: "09/2024 → 01/2025",
      link: "https://github.com/Kan2003/pratifal_fullStack",
      image: "/assets/pratifal.png",
    },
    {
      num: "02",
      title: "UI Library",
      italic: "component system, Storybook",
      desc:
        "A full-stack React component library built with Storybook, React and TypeScript. Composable, themeable primitives with isolated stories, type-safe props, accessible defaults, and a documented playground — designed to be the foundation product teams reach for first.",
      stack: ["React", "TypeScript", "TSX", "Storybook", "SCSS"],
      meta: "Component system",
      link: "https://github.com/Kan2003",
      image: "/assets/toolkit.png",
    },
    {
      num: "03",
      title: "Snapgram",
      italic: "social hub, real-time",
      desc:
        "A social hub where users connect, share, and engage in real-time — more than just a chat app. Built with React + TypeScript, Appwrite as the backend, React Query for server state, and a Shadcn + Tailwind UI for a polished, feature-rich experience.",
      stack: ["React", "TypeScript", "Appwrite", "React Query", "Shadcn", "Tailwind"],
      meta: "Social platform",
      link: "https://github.com/Kan2003/Snapgram",
      image: "/assets/snap.gram.png",
    },
    {
      num: "04",
      title: "MediCare",
      italic: "doctors + appointments",
      desc:
        "A healthcare web app for managing doctor profiles, patient records, and appointment scheduling. Built end-to-end with PHP on the server, MySQL for persistence, and a hand-rolled HTML/CSS frontend — a college minor project taken seriously enough to ship.",
      stack: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      meta: "Minor project",
      link: "https://github.com/Kan2003/MinorProject",
      image: "/assets/medicare.png",
    },
    {
      num: "05",
      title: "ENTNT ERP",
      italic: "operations dashboard, fully responsive",
      desc:
        "A full-fledged ERP system with end-to-end responsive web design — modular dashboards for core business operations, mobile-first layouts that scale cleanly from phone to ultrawide, and a polished React + TypeScript UI with thoughtful data density and navigation patterns.",
      stack: ["React", "TypeScript", "Tailwind", "Responsive UI", "Dashboards"],
      meta: "ERP dashboard",
      link: "https://github.com/Kan2003/ENTNT_ERP_SYSTEM",
      image: "/assets/erp.png",
    },
  ],
  skills: [
    { h: "Frontend", items: ["React.js", "TypeScript", "Next.js", "Redux Toolkit", "JavaScript ES6+", "HTML5 / CSS3"] },
    { h: "Styling", items: ["Tailwind CSS", "SCSS", "Bootstrap"] },
    { h: "Backend & Data", items: ["Node.js", "Express.js", "REST APIs", "JWT Auth", "MongoDB", "MySQL"] },
    { h: "Tools", items: ["Git / GitHub", "Postman", "Figma", "Storybook" , "GitHub Copilot", "Claude Code"] },
  ],
  education: [
    { when: "2020 — 2024", title: "B.Tech, Computer Science", where: "Sushila Devi Bansal College of Engineering, Indore", score: "CGPA 7.78" },
    { when: "2018 — 2020", title: "Higher Secondary (Class XII)", where: "EBVM School, Indore", score: "82.6%" },
    { when: "2018", title: "Secondary School (Class X)", where: "EBVM School, Indore", score: "73.4%" },
  ],
};
