
export interface WorkExperience {
  role: string;
  company: string;
  period: string;
  location: string;
  responsibilities: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  location: string;
  website?: string;
}

export interface Training {
  title: string;
  provider: string;
  location?: string;
  website?: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface PortfolioData {
  name: string;
  title: string;
  profile_image?: string;
  profileImage?: string;
  profileVideo?: string;
  contact: {
    email: string;
    phone: string;
    address: string;
    linkedin: string;
    twitter: string;
  };
  languages: string[];
  experience: WorkExperience[];
  education: Education[];
  skills: string[] | SkillGroup[];
  toolsets?: {
    category: string;
    items: string[];
  }[];
  training?: Training[];
  references?: {
    name: string;
    role: string;
    contact: string;
  }[];
}
