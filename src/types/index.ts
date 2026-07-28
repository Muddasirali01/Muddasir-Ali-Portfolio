export type Theme = 'dark' | 'light';

export interface NavItem {
  name: string;
  href: string;
}

export interface SkillItem {
  name: string;
  level: number; // 0 - 100
  category: 'programming' | 'frameworks' | 'libraries' | 'tools' | 'databases';
  iconName?: string;
  badge?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  metrics?: { label: string; value: string }[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  category: 'Computer Vision' | 'LLM & RAG' | 'Quant & Time-Series' | 'MLOps & Automation' | 'Full-Stack AI';
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: 'Internship' | 'Research' | 'Freelance' | 'Volunteer' | 'Full-time';
  description: string[];
  technologies: string[];
  current?: boolean;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  gpa?: string;
  achievements: string[];
  courses: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  provider: string;
  issueDate: string;
  credentialUrl?: string;
  image: string;
  badgeText?: string;
  comingSoon?: boolean;
}

export interface AchievementItem {
  id: string;
  title: string;
  organization: string;
  date: string;
  description: string;
  iconType: 'award' | 'trophy' | 'paper' | 'code' | 'star';
  metric?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  deliverables: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  rating: number;
}

export interface ContactFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}
