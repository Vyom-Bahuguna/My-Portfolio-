export interface Project {
  id: 'sameto' | 'institute-helper' | 'readify';
  name: string;
  formerName?: string;
  role: string;
  userMetric: string;
  userMetricNumber: number;
  userMetricLabel: string;
  userMetricBreakdown?: string[];
  tagline: string;
  shortDescription: string;
  problem: string;
  solution: string;
  keyFeatures: {
    title: string;
    description: string;
    screenshot?: string;
  }[];
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
  mainImage: string;
  videoUrl?: string;
  screenshots: {
    title: string;
    caption: string;
    url: string;
  }[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Achievement {
  title: string;
  event: string;
  institution: string;
  badge: string;
}
