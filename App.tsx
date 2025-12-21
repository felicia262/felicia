
import React, { useState, useEffect, useMemo } from 'react';
import Navbar from './components/Navbar';
import BlogCard from './components/BlogCard';
import AchievementCard from './components/AchievementCard';
import { BLOG_POSTS, ACHIEVEMENTS, SOCIAL_LINKS, CONTACT_INFO, TRANSLATIONS } from './constants';
import { BlogPost, Achievement, Language } from './types';

type View = 'home' | 'blog' | 'achievements';

const SocialIcon = ({ name }: { name: string }) => {
  switch (name) {
    case 'GitHub': return <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>;
    case 'LinkedIn': return <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>;
    case 'Facebook': return <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>;
    case 'Instagram': return <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>;
    default: return null;
  }
};

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('vi');
  const [view, setView] = useState<View>('home');
  const [activePost, setActivePost] = useState<BlogPost | null>(null);
  const [activeAchievement, setActiveAchievement] = useState<Achievement | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const t = TRANSLATIONS[lang];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view, activePost, activeAchievement]);

  useEffect(() => {
    if (activePost || activeAchievement || searchOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [activePost, activeAchievement, searchOpen]);

  const handleNavClick = (href: string) => {
    setActivePost(null);
    setActiveAchievement(null);
    setSearchOpen(false);
    
    // Simple state routing
    if (href === 'home' || href === 'about' || href === 'contact') {
      setView('home');
      setTimeout(() => {
        const element = document.getElementById(href);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else if (href === 'blog') {
      setView('blog');
    } else if (href === 'achievements') {
      setView('achievements');
    }
  };

  const filteredPosts = useMemo(() => {
    if (!searchQuery.trim()) return [];
    return BLOG_POSTS[lang].filter(post => 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, lang]);

  const SearchOverlay = () => (
    <div className="fixed inset-0 z-[200] apple-blur animate-in fade-in duration-300 flex flex-col items-center pt-32 px-6">
      <button onClick={() => { setSearchOpen(false); setSearchQuery(''); }} className="absolute top-10 right-10 text-gray-500 hover:text-black">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <div className="w-full max-w-2xl">
        <div className="relative mb-12">
          <input 
            autoFocus
            type="text"
            placeholder={t.searchPlaceholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-transparent border-b-2 border-gray-200 py-4 text-4xl font-bold tracking-tight focus:outline-none focus:border-black transition-colors"
          />
        </div>
        <div className="space-y-8 max-h-[60vh] overflow-y-auto pr-4 custom-scroll">
          {searchQuery && filteredPosts.map(post => (
            <div key={post.id} onClick={() => { setActivePost(post); setSearchOpen(false); setSearchQuery(''); }} className="group cursor-pointer p-6 bg-white/50 rounded-3xl hover:bg-white hover:shadow-xl transition-all">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2 block">{post.category}</span>
              <h4 className="text-2xl font-bold mb-2 group-hover:text-blue-600 transition-colors">{post.title}</h4>
              <p className="text-gray-500 line-clamp-2">{post.excerpt}</p>
            </div>
          ))}
          {searchQuery && filteredPosts.length === 0 && <p className="text-center text-gray-400 text-xl">{t.noResults} "{searchQuery}"</p>}
        </div>
      </div>
    </div>
  );

  const BlogDetail = ({ post }: { post: BlogPost }) => (
    <div className="fixed inset-0 z-[100] bg-white overflow-y-auto animate-in fade-in duration-500">
      <nav className="sticky top-0 w-full apple-blur border-b border-gray-100 z-10">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <button onClick={() => setActivePost(null)} className="text-blue-600 font-medium flex items-center gap-2">
            <span>← {t.back}</span>
          </button>
          <div className="font-bold text-xl tracking-tighter">A.</div>
          <div className="w-20"></div>
        </div>
      </nav>
      <div className="max-w-3xl mx-auto px-6 py-20">
        <span className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-4 block text-center">{post.category}</span>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight mb-8 text-center">{post.title}</h1>
        <div className="flex items-center justify-center gap-4 mb-12 text-gray-400 text-sm"><span>{post.date}</span><span>•</span><span>5 min read</span></div>
        <img src={post.image} alt={post.title} className="w-full aspect-video object-cover rounded-3xl mb-12 shadow-lg" />
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          {post.content.split('\n').map((para, i) => <p key={i} className="mb-6">{para}</p>)}
        </div>
      </div>
    </div>
  );

  const AchievementDetail = ({ item }: { item: Achievement }) => (
    <div className="fixed inset-0 z-[100] bg-[#fbfbfd] overflow-y-auto animate-in fade-in duration-500">
      <nav className="sticky top-0 w-full apple-blur border-b border-gray-100 z-10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <button onClick={() => setActiveAchievement(null)} className="text-blue-600 font-medium flex items-center gap-2">
            <span>← {t.back}</span>
          </button>
          <div className="font-bold text-xl tracking-tighter">{t.achTitle}</div>
          <div className="w-20"></div>
        </div>
      </nav>
      <div className="max-w-5xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-blue-600 mb-4 block">{item.type}</span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-tight">{item.title}</h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">{item.description}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {item.images?.map((img, i) => (
            <div key={i} className={`overflow-hidden rounded-3xl shadow-xl ${i % 3 === 0 ? 'md:col-span-2' : ''}`}>
              <img src={img} alt={`${item.title} gallery ${i}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-blue-100">
      <Navbar onNavClick={handleNavClick} language={lang} setLanguage={setLang} onSearchOpen={() => setSearchOpen(true)} />
      
      <main>
        {view === 'home' && (
          <>
            <section id="home" className="min-h-screen flex flex-col items-center justify-center bg-white px-6 pt-12 overflow-hidden">
              <div className="max-w-4xl text-center fade-in-up">
                <h2 className="text-lg md:text-xl font-medium text-blue-600 mb-4 tracking-tight">{t.heroSub}</h2>
                <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-none mb-8">{t.heroTitle}</h1>
                <p className="text-xl md:text-3xl text-gray-500 font-normal leading-relaxed max-w-2xl mx-auto mb-12">{t.heroDesc}</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <button onClick={() => { setView('blog'); }} className="px-8 py-3 bg-[#0071e3] text-white rounded-full font-medium hover:bg-[#0077ed] transition-colors">{t.viewBlog}</button>
                  <button onClick={() => { setView('achievements'); }} className="text-[#0066cc] font-medium hover:underline flex items-center gap-1 group">{t.achTitle} <span className="group-hover:translate-x-1 transition-transform">→</span></button>
                </div>
              </div>
              <div className="mt-24 w-full max-w-5xl fade-in-up" style={{ animationDelay: '0.2s' }}>
                <img src="https://picsum.photos/seed/setup/1200/600" alt="Workspace" className="rounded-3xl shadow-2xl w-full object-cover h-[400px]" />
              </div>
            </section>

            <section id="about" className="py-24 px-6 bg-[#f5f5f7]">
              <div className="max-w-4xl mx-auto text-center md:text-left">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-12">{t.aboutTitle}</h2>
                <div className="grid md:grid-cols-2 gap-12 text-lg text-gray-600 leading-relaxed text-left">
                  <p>{t.aboutP1}</p><p>{t.aboutP2}</p>
                </div>
              </div>
            </section>

            <section className="py-24 px-6">
              <div className="max-w-6xl mx-auto">
                <div className="flex items-end justify-between mb-16">
                  <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">{t.blogTitle}</h2>
                  <button onClick={() => setView('blog')} className="text-blue-600 font-semibold hover:underline">{t.readMore} →</button>
                </div>
                <div className="grid md:grid-cols-3 gap-8 items-stretch">
                  {BLOG_POSTS[lang].slice(0, 3).map((post, index) => (
                    <div key={post.id} onClick={() => setActivePost(post)} className="cursor-pointer">
                      <BlogCard post={post} index={index} />
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="py-24 px-6 bg-black text-white">
              <div className="max-w-6xl mx-auto">
                <div className="flex items-end justify-between mb-16">
                  <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">{t.achTitle}</h2>
                  <button onClick={() => setView('achievements')} className="text-white opacity-80 hover:opacity-100 font-semibold underline">{t.viewDetails} →</button>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                  {ACHIEVEMENTS[lang].slice(0, 3).map((item, index) => (
                    <AchievementCard key={item.id} item={item} index={index} onClick={() => setActiveAchievement(item)} />
                  ))}
                </div>
              </div>
            </section>

            <section id="contact" className="py-32 px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-12">{t.contactTitle}</h2>
                <p className="text-xl text-gray-500 mb-16 max-w-2xl mx-auto">{t.contactDesc}</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {SOCIAL_LINKS.map((link) => (
                    <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center p-8 bg-[#f5f5f7] rounded-[32px] transition-all duration-300 hover:bg-white hover:shadow-2xl hover:-translate-y-2">
                      <div className="mb-4 text-gray-400 group-hover:text-black transition-colors"><SocialIcon name={link.name} /></div>
                      <span className="font-semibold text-gray-900">{link.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </section>
          </>
        )}

        {view === 'blog' && (
          <section className="py-32 px-6 min-h-screen">
            <div className="max-w-6xl mx-auto">
              <div className="mb-16">
                <button onClick={() => setView('home')} className="text-blue-600 mb-4 flex items-center gap-2">← {t.back}</button>
                <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">{t.blogTitle}</h2>
                <p className="text-2xl text-gray-500">{t.blogDesc}</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                {BLOG_POSTS[lang].map((post, index) => (
                  <div key={post.id} onClick={() => setActivePost(post)} className="cursor-pointer">
                    <BlogCard post={post} index={index} />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {view === 'achievements' && (
          <section className="py-32 px-6 bg-black text-white min-h-screen">
            <div className="max-w-6xl mx-auto">
              <div className="mb-16">
                <button onClick={() => setView('home')} className="text-blue-400 mb-4 flex items-center gap-2">← {t.back}</button>
                <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">{t.achTitle}</h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {ACHIEVEMENTS[lang].map((item, index) => (
                  <AchievementCard key={item.id} item={item} index={index} onClick={() => setActiveAchievement(item)} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <footer className="py-20 px-6 border-t border-gray-100 bg-[#fbfbfd]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div className="col-span-1">
              <div className="font-bold text-2xl tracking-tighter mb-6">{t.heroTitle}</div>
              <p className="text-gray-500 leading-relaxed font-light">{t.heroDesc}</p>
            </div>
            <div className="col-span-1 md:col-start-3">
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">{t.email}</h4>
              <ul className="space-y-4">
                <li className="flex flex-col"><span className="text-[10px] uppercase tracking-widest text-gray-400">{t.phone}</span><a href={`tel:${CONTACT_INFO.phone}`} className="text-lg font-medium hover:text-blue-600 transition-colors">{CONTACT_INFO.phone}</a></li>
                <li className="flex flex-col"><span className="text-[10px] uppercase tracking-widest text-gray-400">{t.email}</span><a href={`mailto:${CONTACT_INFO.email}`} className="text-lg font-medium hover:text-blue-600 transition-colors">{CONTACT_INFO.email}</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-400 text-sm">{t.copyright}</p>
          </div>
        </div>
      </footer>

      {activePost && <BlogDetail post={activePost} />}
      {activeAchievement && <AchievementDetail item={activeAchievement} />}
      {searchOpen && <SearchOverlay />}
    </div>
  );
};

export default App;
