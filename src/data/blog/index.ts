import { BLOG_VI } from './blog.vi';
import { BLOG_EN } from './blog.en';
import { BlogPost, Language } from '../../../types';

export const BLOG_POSTS: Record<Language, BlogPost[]> = {
  vi: BLOG_VI,
  en: BLOG_EN
};
