
import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'apple-blur border-b border-gray-200' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 h-12 flex items-center justify-between">
        <div className="font-semibold text-lg tracking-tight hover:opacity-70 transition-opacity cursor-pointer">
          A.
        </div>
        <div className="hidden md:flex space-x-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[12px] font-normal text-gray-800 hover:text-blue-500 transition-colors uppercase tracking-widest"
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="md:hidden">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
