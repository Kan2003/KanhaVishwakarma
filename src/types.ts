// src/types.ts — shared types
export interface Stat {
  v: string;
  unit: string;
  k: string;
  tag: string;
}

export interface Experience {
  role: string;
  company: string;
  where: string;
  when: string;
  tag: string;
  points: string[];
  stack: string[];
}

export interface Project {
  num: string;
  title: string;
  italic: string;
  desc: string;
  stack: string[];
  meta: string;
  link: string;
  image: string;
  live?: string;
}

export interface SkillGroup {
  h: string;
  items: string[];
}

export interface Education {
  when: string;
  title: string;
  where: string;
  score: string;
}

export interface PortfolioData {
  name: string;
  initials: string;
  role: string;
  location: string;
  email: string;
  phone: string;
  resume: string;
  social: { github: string; linkedin: string; leetcode: string };
  hero: { eyebrow: string; tagline: string };
  stats: Stat[];
  about: string[];
  experience: Experience[];
  projects: Project[];
  skills: SkillGroup[];
  education: Education[];
}
