
import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../constants';
import { Language } from '../types';

interface NavbarProps {
  onNavClick: (href: string) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  onSearchOpen: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavClick, language, setLanguage, onSearchOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ${isScrolled ? 'apple-blur border-b border-gray-200' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 h-12 flex items-center justify-between">
        <div 
          onClick={() => onNavClick('home')}
          className="font-bold text-xl tracking-tighter hover:opacity-70 transition-opacity cursor-pointer"
        >
          A.
        </div>
        <div className="hidden md:flex space-x-10">
          {NAV_ITEMS[language].map((item) => (
            <button
              key={item.href}
              onClick={() => onNavClick(item.href)}
              className="text-[12px] font-medium text-gray-800 hover:text-blue-500 transition-colors uppercase tracking-[0.15em]"
            >
              {item.label}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3 text-[11px] font-bold">
            <button 
              onClick={() => setLanguage('vi')}
              className={`${language === 'vi' ? 'text-black' : 'text-gray-400'} hover:text-black transition-colors`}
            >
              VI
            </button>
            <span className="text-gray-200">|</span>
            <button 
              onClick={() => setLanguage('en')}
              className={`${language === 'en' ? 'text-black' : 'text-gray-400'} hover:text-black transition-colors`}
            >
              EN
            </button>
          </div>
           <button 
            onClick={onSearchOpen}
            className="text-gray-400 hover:text-black transition-colors"
           >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
