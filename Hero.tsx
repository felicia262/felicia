
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center bg-white px-6 pt-12 overflow-hidden">
      <div className="max-w-4xl text-center fade-in-up">
        <h2 className="text-lg md:text-xl font-medium text-blue-600 mb-4 tracking-tight">Xin chào, tôi là</h2>
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-none mb-8">
          Nguyễn Văn A.
        </h1>
        <p className="text-xl md:text-3xl text-gray-500 font-normal leading-relaxed max-w-2xl mx-auto mb-12">
          Sinh viên Công nghệ Thông tin đam mê hạ tầng mạng và lập trình ứng dụng tối giản.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a href="#about" className="px-8 py-3 bg-[#0071e3] text-white rounded-full font-medium hover:bg-[#0077ed] transition-colors">
            Khám phá thêm
          </a>
          <a href="#blog" className="text-[#0066cc] font-medium hover:underline flex items-center gap-1 group">
            Xem blog của tôi
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>
      <div className="mt-24 w-full max-w-5xl fade-in-up" style={{ animationDelay: '0.2s' }}>
        <img 
          src="images/workspace.jpg" 
          alt="Workspace setup" 
          className="rounded-3xl shadow-2xl w-full object-cover h-[400px] bg-gray-100"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'https://picsum.photos/seed/setup/1200/600';
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
