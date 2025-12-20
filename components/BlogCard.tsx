
import React from 'react';
import { BlogPost } from '../types';

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, index }) => {
  return (
    <div 
      className="group bg-[#f5f5f7] rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-1 fade-in-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="aspect-[16/9] overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-8">
        <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-3 block">
          {post.category}
        </span>
        <h3 className="text-2xl font-semibold mb-3 leading-tight group-hover:text-blue-600 transition-colors">
          {post.title}
        </h3>
        <p className="text-gray-500 leading-relaxed mb-6 line-clamp-2">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-400">{post.date}</span>
          <button className="text-blue-600 font-medium group-hover:underline flex items-center gap-1">
            Đọc tiếp
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
