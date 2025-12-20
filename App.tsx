
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BlogCard from './components/BlogCard';
import AchievementCard from './components/AchievementCard';
import { BLOG_POSTS, ACHIEVEMENTS } from './constants';

const App: React.FC = () => {
  return (
    <div className="antialiased text-[#1d1d1f] selection:bg-blue-100">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <section id="about" className="py-32 bg-[#fbfbfd]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center gap-16">
              <div className="w-full md:w-1/2">
                <img 
                  src="https://picsum.photos/seed/profile/600/800" 
                  alt="Profile" 
                  className="rounded-3xl shadow-lg w-full h-[600px] object-cover"
                />
              </div>
              <div className="w-full md:w-1/2 space-y-8">
                <h2 className="text-5xl font-bold tracking-tight">Về bản thân.</h2>
                <div className="space-y-6 text-xl text-gray-500 leading-relaxed font-normal">
                  <p>
                    Tôi hiện là sinh viên năm 3 chuyên ngành <span className="text-black font-medium">An toàn Thông tin</span> tại Trường Đại học Công nghệ.
                  </p>
                  <p>
                    Với nền tảng vững chắc về khoa học máy tính và niềm đam mê đặc biệt cho lĩnh vực lập trình mạng, tôi luôn tìm kiếm cách tối ưu hóa hiệu suất truyền tải dữ liệu và bảo mật hệ thống.
                  </p>
                  <p>
                    Tư duy thiết kế của tôi chịu ảnh hưởng mạnh mẽ từ triết lý "Less is more". Tôi tin rằng những giải pháp kỹ thuật tốt nhất là những giải pháp đơn giản nhất cho người dùng.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-8 pt-8">
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-2">Học vấn</h4>
                    <p className="font-medium">Đại học Công nghệ - ĐHQGHN</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-2">Chuyên ngành</h4>
                    <p className="font-medium">Công nghệ Thông tin</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="py-32 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-20 space-y-4">
              <h2 className="text-5xl font-bold tracking-tight">Kiến thức Mạng máy tính.</h2>
              <p className="text-2xl text-gray-500 max-w-2xl mx-auto">
                Chia sẻ kiến thức và kinh nghiệm thực tế trong học phần Lập trình mạng.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {BLOG_POSTS.map((post, index) => (
                <BlogCard key={post.id} post={post} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="py-32 bg-[#f5f5f7]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <div className="space-y-4">
                <h2 className="text-5xl font-bold tracking-tight">Thành tựu nổi bật.</h2>
                <p className="text-2xl text-gray-500">
                  Dự án, chứng chỉ và các cuộc thi đã tham gia.
                </p>
              </div>
              <a href="#" className="text-[#0066cc] text-lg font-medium hover:underline flex items-center gap-1 group">
                Xem tất cả
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ACHIEVEMENTS.map((item, index) => (
                <AchievementCard key={item.id} item={item} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter">Cùng kết nối.</h2>
            <p className="text-2xl md:text-3xl text-gray-500 leading-relaxed font-normal">
              Bạn có một dự án thú vị hay đơn giản chỉ muốn trao đổi về lập trình mạng? Đừng ngần ngại liên hệ.
            </p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 pt-8">
              <a href="mailto:contact@example.com" className="group">
                <p className="text-sm uppercase tracking-widest text-gray-400 mb-1">Email</p>
                <p className="text-xl font-medium group-hover:text-blue-600 transition-colors">van-a@university.edu.vn</p>
              </a>
              <a href="#" className="group">
                <p className="text-sm uppercase tracking-widest text-gray-400 mb-1">LinkedIn</p>
                <p className="text-xl font-medium group-hover:text-blue-600 transition-colors">linkedin.com/in/vanganh</p>
              </a>
              <a href="#" className="group">
                <p className="text-sm uppercase tracking-widest text-gray-400 mb-1">GitHub</p>
                <p className="text-xl font-medium group-hover:text-blue-600 transition-colors">github.com/vanganh-dev</p>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-gray-100 bg-[#fbfbfd]">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-sm text-gray-500">
            © 2024 Nguyễn Văn A. Thiết kế phong cách Apple cho đồ án CNTT.
          </div>
          <div className="flex gap-8 text-sm text-gray-400">
            <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-black transition-colors">Terms of Use</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
