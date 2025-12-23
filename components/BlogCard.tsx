
import React from 'react';
import { BlogPost } from '../types';

interface BlogCardProps {
  post: BlogPost;
  index: number;
  readMoreLabel?: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, index, readMoreLabel }) => {
  return (
    <div 
      className="group bg-[#f5f5f7] rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-1 fade-in-up flex flex-col h-full"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="aspect-[16/9] overflow-hidden shrink-0">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-8 flex flex-col flex-1">
        <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-3 block">
          {post.category}
        </span>
        <h3 className="text-xl font-semibold mb-3 leading-tight group-hover:text-blue-600 transition-colors line-clamp-2 h-[3.5rem]">
          {post.title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3 flex-1">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-200/50">
          <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">{post.date}</span>
          <button className="text-blue-600 text-sm font-semibold group-hover:underline flex items-center gap-1">
            {readMoreLabel || 'Read More'}
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
