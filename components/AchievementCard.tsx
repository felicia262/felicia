
import React from 'react';
import { Achievement } from '../types';

interface AchievementCardProps {
  item: Achievement;
  index: number;
  onClick?: () => void;
}

const AchievementCard: React.FC<AchievementCardProps> = ({ item, index, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="relative aspect-[4/5] md:aspect-[3/4] rounded-3xl overflow-hidden group shadow-sm fade-in-up cursor-pointer"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <img 
        src={item.image} 
        alt={item.title} 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 text-white">
        <span className="text-xs font-medium uppercase tracking-[0.2em] mb-2 opacity-80">
          {item.type}
        </span>
        <h3 className="text-3xl font-bold mb-4 tracking-tight">
          {item.title}
        </h3>
        <p className="text-sm opacity-90 leading-relaxed mb-6 max-w-md line-clamp-2">
          {Array.isArray(item.description) ? item.description[0] : item.description}
        </p>
        <button className="w-fit px-6 py-2 bg-white/20 backdrop-blur-md text-white border border-white/30 rounded-full text-sm font-semibold hover:bg-white hover:text-black transition-all">
          Xem chi tiết
        </button>
      </div>
    </div>
  );
};

export default AchievementCard;
