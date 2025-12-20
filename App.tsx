
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BlogCard from './components/BlogCard';
import AchievementCard from './components/AchievementCard';
import { BLOG_POSTS, ACHIEVEMENTS, NAV_ITEMS } from './constants';
import { BlogPost } from './types';

// Fixing the App component to return JSX and adding default export
const App: React.FC = () => {
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  // Simple "routing" effect
  useEffect(() => {
    if (activePost) {
      window.scrollTo(0, 0);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [activePost]);

  const handleNavClick = (href: string) => {
    setActivePost(null);
    const element = document.getElementById(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Sub-component for displaying blog post details
  const BlogDetail = ({ post }: { post: BlogPost }) => (
    <div className="fixed inset-0 z-[100] bg-white overflow-y-auto animate-in fade-in duration-500">
      <nav className="sticky top-0 w-full apple-blur border-b border-gray-100 z-10">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <button 
            onClick={() => setActivePost(null)}
            className="text-blue-600 font-medium flex items-center gap-2"
          >
            <span>← Quay lại</span>
          </button>
          <div className="font-bold text-xl tracking-tighter">A.</div>
          <div className="w-20"></div>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-6 py-20">
        <span className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-4 block text-center">
          {post.category}
        </span>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight mb-8 text-center">
          {post.title}
        </h1>
        <div className="flex items-center justify-center gap-4 mb-12 text-gray-400 text-sm">
          <span>{post.date}</span>
          <span>•</span>
          <span>5 phút đọc</span>
        </div>
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full aspect-video object-cover rounded-3xl mb-12 shadow-lg"
        />
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          {post.content.split('\n').map((para, i) => (
            <p key={i} className="mb-6">{para}</p>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-blue-100">
      <Navbar onNavClick={handleNavClick} />
      
      <main>
        <Hero />

        {/* About Section */}
        <section id="about" className="py-24 px-6 bg-[#f5f5f7]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-12">Về tôi.</h2>
            <div className="grid md:grid-cols-2 gap-12 text-lg text-gray-600 leading-relaxed">
              <p>
                Tôi là một sinh viên CNTT đam mê khám phá sự giao thoa giữa phần cứng và phần mềm. 
                Trong khi hầu hết bạn bè tập trung vào Web Frontend, tôi lại bị thu hút bởi cách dữ liệu di chuyển qua các tầng mạng 
                và làm thế nào để tối ưu hóa hiệu suất truyền tin.
              </p>
              <p>
                Phương châm của tôi là "Làm cho nó hoạt động, sau đó làm cho nó tối giản". 
                Tôi thích thiết kế các hệ thống không chỉ mạnh mẽ về kỹ thuật mà còn sạch sẽ về kiến trúc và giao diện người dùng.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">Blog Mạng.</h2>
              <p className="text-gray-500 max-w-sm">Chia sẻ kiến thức về giao thức, hạ tầng và những trải nghiệm thực tế trong lập trình mạng.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {BLOG_POSTS.map((post, index) => (
                <div key={post.id} onClick={() => setActivePost(post)} className="cursor-pointer">
                  <BlogCard post={post} index={index} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="py-24 px-6 bg-black text-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-16">Thành tựu.</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ACHIEVEMENTS.map((item, index) => (
                <AchievementCard key={item.id} item={item} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-7xl font-bold tracking-tighter mb-12">Hãy cùng kết nối.</h2>
            <p className="text-xl text-gray-500 mb-12">
              Tôi luôn sẵn sàng thảo luận về các dự án mạng, cơ hội thực tập hoặc chỉ là một cuộc trò chuyện về công nghệ.
            </p>
            <a 
              href="mailto:contact@nguyenvana.com" 
              className="text-2xl md:text-4xl font-medium text-blue-600 hover:underline"
            >
              contact@nguyenvana.com
            </a>
          </div>
        </section>
      </main>

      <footer className="py-12 px-6 border-t border-gray-100 text-center text-gray-400 text-sm">
        <p>© 2024 Nguyễn Văn A. Thiết kế lấy cảm hứng từ sự tối giản.</p>
      </footer>

      {activePost && <BlogDetail post={activePost} />}
    </div>
  );
};

export default App;
