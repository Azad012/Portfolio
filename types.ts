
export interface Skill {
  name: string;
  category: 'Backend' | 'Frontend' | 'Database' | 'Tools';
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description?: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
}
