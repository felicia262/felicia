
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  image: string;
  category: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string | string[];
  type: 'Project' | 'Certificate' | 'Competition';
  image: string;
  images?: string[];
  link?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export type Language = 'vi' | 'en';
