import { NavItem, Language } from '../../types';

export const NAV_ITEMS: Record<Language, NavItem[]> = {
  vi: [
    { label: 'Trang chủ', href: 'home' },
    { label: 'Giới thiệu', href: 'about' },
    { label: 'Blog Mạng', href: 'blog' },
    { label: 'Thành tựu', href: 'achievements' },
    { label: 'Liên hệ', href: 'contact' },
  ],
  en: [
    { label: 'Home', href: 'home' },
    { label: 'About', href: 'about' },
    { label: 'Network Blog', href: 'blog' },
    { label: 'Achievements', href: 'achievements' },
    { label: 'Contact', href: 'contact' },
  ]
};
