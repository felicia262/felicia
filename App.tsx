
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BlogCard from './components/BlogCard';
import AchievementCard from './components/AchievementCard';
import { BLOG_POSTS, ACHIEVEMENTS, NAV_ITEMS } from './constants';
import { BlogPost } from './types';

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

  const BlogDetail = ({ post }: { post: BlogPost }) => (
    <div className="fixed inset-0 z-[100] bg-white overflow-y-auto animate-in fade-in duration-500">
      <nav className="sticky top-0 w-full apple-blur border-b border-gray-100 z-10">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <button 
            onClick={() => setActivePost(null)}
            className="text-blue-600 font-medium flex items-center gap-2 hover:opacity-70 transition-opacity"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Quay lại Blog
          </button>
          <span className="text-sm font-semibold text-gray-400 uppercase tracking-widest">Reader View</span>
        </div>
      </nav>

      <article className="max-w-3xl mx-auto px-6 py-20">
        <header className="mb-12 space-y-6">
          <span className="text-blue-600 font-bold uppercase tracking-[0.2em] text-sm">{post.category}</span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">{post.title}</h1>
          <div className="flex items-center gap-4 text-gray-400">
            <img src="https://picsum.photos/seed/avatar/40/40" className="w-10 h-10 rounded-full" alt="Author" />
            <div>
              <p className="text-black font-medium">Nguyễn Văn A</p>
              <p className="text-sm">{post.date} • 8 phút đọc</p>
            </div>
          </div>
        </header>

        <img src={post.image} className="w-full aspect-video object-cover rounded-3xl mb-12 shadow-xl" alt={post.title} />

        <div className="prose prose-lg max-w-none text-xl text-gray-700 leading-relaxed space-y-8">
          <p className="font-medium text-black text-2xl italic border-l-4 border-blue-500 pl-6 py-2 bg-blue-50/50">
            "{post.excerpt}"
          </p>
          <div className="whitespace-pre-wrap">
            {post.content}
            <br /><br />
            Trong quá trình thực hiện đồ án Lập trình mạng, tôi đã rút ra được nhiều bài học về việc tối ưu hóa hiệu năng truyền tải. Việc lựa chọn đúng kích thước Buffer hay xử lý ngoại lệ khi mất kết nối đột ngột là những chi tiết nhỏ nhưng quyết định sự ổn định của cả hệ thống.
            <br /><br />
            <strong>Kết luận:</strong> Kiến thức về mạng máy tính là nền tảng không thể thiếu cho bất kỳ kỹ sư phần mềm nào. Hy vọng bài chia sẻ này giúp ích cho các bạn đang cùng theo đuổi chuyên ngành này.
          </div>
        </div>
        
        <footer className="mt-20 pt-10 border-t border-gray-100 flex justify-center">
          <button 
            onClick={() => setActivePost(null)}
            className="px-10 py-4 bg-black text-white rounded-full font-bold hover:scale-105 transition-transform"
          >
            Hoàn tất bài đọc
          </button>
        </footer>
      </article>
    </div>
  );

  return (
    <div className="antialiased text-[#1d1d1f] selection:bg-blue-100">
      <Navbar onNavClick={handleNavClick} />
      
      {activePost && <BlogDetail post={activePost} />}

      <main className={activePost ? 'hidden' : 'block'}>
        <Hero />

        {/* About Section */}
        <section id="about" className="py-32 bg-[#fbfbfd]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center gap-20">
              <div className="w-full md:w-5/12">
                <div className="relative group">
                   <div className="absolute -inset-4 bg-blue-50 rounded-[40px] scale-95 group-hover:scale-100 transition-transform duration-700"></div>
                   <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" 
                    alt="Profile" 
                    className="relative rounded-3xl shadow-2xl w-full aspect-[3/4] object-cover"
                  />
                </div>
              </div>
              <div className="w-full md:w-7/12 space-y-10">
                <div className="space-y-4">
                  <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.3em]">Giới thiệu</h2>
                  <h3 className="text-5xl md:text-6xl font-bold tracking-tight">Kỹ sư mạng tương lai.</h3>
                </div>
                <div className="space-y-6 text-2xl text-gray-500 leading-relaxed font-light">
                  <p>
                    Chào bạn! Tôi là <span className="text-black font-semibold">Nguyễn Văn A</span>, sinh viên năm 3 chuyên ngành CNTT tại Đại học Công nghệ.
                  </p>
                  <p>
                    Tôi tập trung nghiên cứu về <span className="text-black font-medium">Lập trình mạng (Network Programming)</span> và kiến trúc hệ thống phân tán. Với tôi, mỗi gói tin được truyền đi thành công là một niềm vui trong công việc sáng tạo.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 pt-6">
                  <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                    <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">Mục tiêu nghề nghiệp</h4>
                    <p className="text-lg text-gray-700">Trở thành một Network Architect có khả năng thiết kế các hệ thống mạng quy mô lớn và an toàn tuyệt đối.</p>
                  </div>
                  <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                    <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">Kỹ năng cốt lõi</h4>
                    <ul className="text-lg text-gray-700 space-y-2">
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> Java/Python Socket</li>
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> Cisco CCNA/CCNP</li>
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> Docker & Kubernetes</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="py-32 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-24 space-y-4">
              <h2 className="text-5xl md:text-7xl font-bold tracking-tight">Blog Mạng máy tính.</h2>
              <p className="text-2xl text-gray-500 max-w-2xl mx-auto font-light">
                Hành trình chinh phục 9 bài học cốt lõi trong lập trình mạng.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {BLOG_POSTS.map((post, index) => (
                <div key={post.id} onClick={() => setActivePost(post)} className="cursor-pointer">
                  <BlogCard post={post} index={index} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="py-32 bg-[#f5f5f7]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
              <div className="space-y-4">
                <h2 className="text-5xl md:text-7xl font-bold tracking-tight">Thành tựu.</h2>
                <p className="text-2xl text-gray-500 font-light">
                  Những dấu mốc quan trọng trong quá trình học tập.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {ACHIEVEMENTS.map((item, index) => (
                <AchievementCard key={item.id} item={item} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-40 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <div className="bg-[#fbfbfd] rounded-[40px] p-12 md:p-24 text-center space-y-12 border border-gray-100 shadow-sm">
              <h2 className="text-6xl md:text-8xl font-bold tracking-tighter">Bắt đầu thảo luận.</h2>
              <p className="text-2xl md:text-3xl text-gray-500 leading-relaxed font-light max-w-3xl mx-auto">
                Bạn có ý tưởng cho một hệ thống mạng mới hay cần hỗ trợ đồ án? Tôi luôn sẵn lòng lắng nghe.
              </p>
              <div className="flex flex-col items-center gap-8">
                <a href="mailto:van-a@example.com" className="px-12 py-5 bg-[#0071e3] text-white text-xl font-bold rounded-full hover:scale-105 transition-transform shadow-xl shadow-blue-200">
                  Gửi Email cho tôi
                </a>
                <div className="flex gap-10 text-gray-400 font-medium">
                  <a href="#" className="hover:text-black transition-colors">LinkedIn</a>
                  <a href="#" className="hover:text-black transition-colors">GitHub</a>
                  <a href="#" className="hover:text-black transition-colors">Facebook</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-16 border-t border-gray-100 bg-[#fbfbfd]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
            <div className="space-y-4">
              <p className="text-2xl font-bold tracking-tight">Nguyễn Văn A.</p>
              <p className="text-gray-500 max-w-xs font-light">Sinh viên CNTT - Đam mê lập trình và hạ tầng mạng máy tính.</p>
            </div>
            <div className="grid grid-cols-2 gap-20">
              <div className="space-y-4">
                <p className="text-xs font-bold uppercase tracking-widest">Danh mục</p>
                <ul className="space-y-2 text-gray-500">
                  {NAV_ITEMS.map(item => (
                    <li key={item.href}><button onClick={() => handleNavClick(item.href)} className="hover:text-black transition-colors">{item.label}</button></li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <p className="text-xs font-bold uppercase tracking-widest">Học phần</p>
                <ul className="space-y-2 text-gray-500">
                  <li>Lập trình mạng</li>
                  <li>An toàn thông tin</li>
                  <li>Hệ điều hành</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-400">
            <p>© 2024 Nguyễn Văn A. Được xây dựng cho học phần Lập trình mạng máy tính.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-black transition-colors">Privacy</a>
              <a href="#" className="hover:text-black transition-colors">Legal</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
