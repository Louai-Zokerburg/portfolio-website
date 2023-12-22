import { StaticImageData } from 'next/image';
import { IconType } from 'react-icons';

// General Info Types
export type TGeneralInfo = {
  hero_info: {
    greeting: string;
    name: string;
    role: string;
    intro: string;
    stats: {
      projects: number;
      experience: number;
      frameworks: number;
    };
  };
  about_info: {
    bio: {
      intro: string;
      main: string;
      outro: string
    }
  };
  contact_info: {
    email: string;
    linkedin: string;
    twitter: string;
    github: string;
  };
};

// Skills Types
type TSkillLabel = 'BEGGINER' | 'INTERMIDIATE' | 'ADVANCED' | 'PRO';
type TSkillValue = 22 | 44 | 66 | 88;
type TSkill = {
  name: string;
  level: {
    label: TSkillLabel;
    value: TSkillValue;
  };
};

// Field Types
export type TField = {
  title: string;
  description: string;
  icon: React.ReactNode;
  skills: TSkill[];
};

// Certifecations Types
export type TCertifecate = {
  credential_url: string;
  from: string;
  date: string;
  title: string;
};

// Projects Types
export type TProject = {
  id: string;
  title: string;
  images: {
    cover: string | StaticImageData;
    screenshots: string[] | StaticImageData[];
  };
  description: string;
  features: string[];
  technologies: string[];
  live_demo: string;
  source_code: string;
  categories: string[];
};
