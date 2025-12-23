import { BlogPost } from '../../../../../../types';
import content from './content.md?raw';

const post: BlogPost = {
  id: 'intro-networking',
  title: 'Khái niệm mạng máy tính: Những điều cơ bản nhất',
  excerpt: 'Tìm hiểu về cách các máy tính kết nối và trao đổi dữ liệu với nhau qua các thiết bị trung gian.',
  content,
  date: '18-11-2025',
  category: 'Cơ bản',
  image: 'https://www.totolink.vn/public/uploads/img_article/Posts/690/mangmaytinhlagi.png'
};

export default post;
export { post };
