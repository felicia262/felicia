
import React, { useEffect, useState } from 'react';
import { BlogPost, Translation } from '../types';

interface BlogDetailProps {
  post: BlogPost;
  t: Translation;
  onClose: () => void;
}

const BlogDetail: React.FC<BlogDetailProps> = ({ post, t, onClose }) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('blog-content-scroll');
      if (element) {
        const totalHeight = element.scrollHeight - element.clientHeight;
        const currentScroll = element.scrollTop;
        setScrollProgress((currentScroll / totalHeight) * 100);
      }
    };

    const scrollContainer = document.getElementById('blog-content-scroll');
    scrollContainer?.addEventListener('scroll', handleScroll);
    return () => scrollContainer?.removeEventListener('scroll', handleScroll);
  }, []);

  const renderMarkdown = (md: string) => {
    if (!md) return '';
    const lines = md.split(/\r?\n/);
    let html = '';
    let inList = false;
    let inCodeBlock = false;
    let codeLang = '';
    let codeBuffer: string[] = [];

    const pushParagraph = (text: string) => {
      if (!text.trim()) return '';
      const withBold = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      const withLinks = withBold.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-blue-600 hover:underline" target="_blank">$1</a>');
      return `<p class="mb-6 leading-relaxed text-gray-700 text-lg">${withLinks}</p>`;
    };

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      // Code block
      if (line.startsWith('```')) {
        if (!inCodeBlock) {
          inCodeBlock = true;
          codeLang = line.replace('```', '').trim();
          codeBuffer = [];
        } else {
          // close code block
          html += `\n<pre class="bg-gray-900 text-gray-100 rounded-xl p-6 mb-8 overflow-x-auto text-sm"><code class="language-${codeLang}">\n${codeBuffer.join('\n')}\n</code></pre>\n`;
          inCodeBlock = false;
          codeLang = '';
        }
        continue;
      }

      if (inCodeBlock) {
        codeBuffer.push(
          line
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
        );
        continue;
      }

      const trimmedLine = line.trim();

      // Images
      if (/^!\[.*?\]\(.*?\)/.test(trimmedLine)) {
        const m = trimmedLine.match(/^!\[(.*?)\]\((.*?)\)/);
        if (m) html += `<figure class="my-10"><img src="${m[2]}" alt="${m[1]}" class="rounded-3xl w-full object-cover shadow-2xl"/><figcaption class="text-center text-sm text-gray-400 mt-4 italic">${m[1]}</figcaption></figure>`;
        continue;
      }

      // Headings
      if (/^#{1,3}\s+/.test(trimmedLine)) {
        const level = trimmedLine.match(/^#{1,3}/)![0].length;
        const text = trimmedLine.replace(/^#{1,3}\s+/, '');
        const classes = [
          '',
          'text-3xl md:text-4xl font-bold mt-12 mb-6 tracking-tight text-gray-900',
          'text-2xl md:text-3xl font-bold mt-10 mb-5 tracking-tight text-gray-800',
          'text-xl md:text-2xl font-bold mt-8 mb-4 tracking-tight text-gray-700'
        ][level];
        html += `<h${level} class="${classes}">${text}</h${level}>`;
        continue;
      }

      // Lists
      if (/^[\-\*]\s+/.test(trimmedLine)) {
        if (!inList) { html += '<ul class="list-disc ml-6 mb-8 space-y-3 text-lg text-gray-700">'; inList = true; }
        const item = trimmedLine.replace(/^[\-\*]\s+/, '');
        html += `<li>${item}</li>`;
        const next = (lines[i+1] || '').trim();
        if (!/^[\-\*]\s+/.test(next)) { html += '</ul>'; inList = false; }
        continue;
      }

      // Paragraphs
      if (trimmedLine === '') continue;
      html += pushParagraph(trimmedLine);
    }

    // If file ends while still in code block, close it
    if (inCodeBlock) {
      html += `\n<pre class="bg-gray-900 text-gray-100 rounded-xl p-6 mb-8 overflow-x-auto text-sm"><code class="language-${codeLang}">\n${codeBuffer.join('\n')}\n</code></pre>\n`;
    }

    return html;
  };

  return (
    <div className="fixed inset-0 z-[100] bg-white flex flex-col animate-in fade-in duration-500 overflow-hidden">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-[110]">
        <div 
          className="h-full bg-blue-600 transition-all duration-150 ease-out" 
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Navigation Header */}
      <nav className="w-full apple-blur border-b border-gray-100 shrink-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <button 
            onClick={onClose} 
            className="group flex items-center gap-2 text-gray-500 hover:text-black transition-colors font-medium"
          >
            <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-gray-100 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </div>
            <span>{t.back}</span>
          </button>
          
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 max-w-sm truncate text-center">
            <span className="text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {post.title}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Content Area */}
      <div id="blog-content-scroll" className="flex-1 overflow-y-auto custom-scroll">
        <div className="relative">
          {/* Hero Section */}
          <div className="w-full h-[60vh] md:h-[80vh] relative overflow-hidden bg-gray-900">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover scale-105 animate-pulse-slow brightness-75"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
            
            <div className="absolute inset-0 flex flex-col items-center justify-end pb-20 px-6 text-center text-white">
              <div className="max-w-4xl fade-in-up">
                <span className="inline-block px-4 py-1.5 bg-blue-600 text-xs font-bold uppercase tracking-widest rounded-full mb-6">
                  {post.category}
                </span>
                <h1 className="text-4xl md:text-7xl font-bold tracking-tighter leading-tight mb-8">
                  {post.title}
                </h1>
                <div className="flex items-center justify-center gap-6 text-sm md:text-base font-medium text-white/80">
                  <div className="flex items-center gap-2">
                    <img src={post.author?.avatar} className="w-8 h-8 rounded-full border border-white/20" alt="Author" />
                    <span>{post.author?.name}</span>
                  </div>
                  <span>•</span>
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readingTime}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="max-w-3xl mx-auto px-6 py-20">
            <div className="relative">
              {/* Decorative elements */}
                {/* decorative SVG removed to avoid overlapping content */}

              <article 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }} 
              />
              
              <div className="mt-20 pt-12 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex items-center gap-4">
                  <img src={post.author?.avatar} className="w-14 h-14 rounded-full" alt="Author" />
                  <div>
                    <h4 className="font-bold text-gray-900">{post.author?.name}</h4>
                    <p className="text-sm text-gray-500">Creative Technologist & Writer</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold text-gray-400 mr-2 uppercase tracking-widest">Share</span>
                  <button className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center hover:bg-gray-50 transition-colors">
                    <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  </button>
                  <button className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center hover:bg-gray-50 transition-colors">
                    <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BlogDetail;
