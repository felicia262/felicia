import { BlogPost } from '../../../../../../types';
import content from './content.md?raw';

const post: BlogPost = {
  id: 'http-webserver',
  title: 'HTTP và Xây dựng Web Server cơ bản',
  excerpt: 'Tìm hiểu cấu trúc của một Request/Response HTTP và cách viết một Server đơn giản.',
  content,
  date: '17-12-2025',
  category: 'Giao thức Web',
  image: 'https://cloud.z.com/vn/wp-content/uploads/2023/06/web16243573287577.jpg'
};

export default post;
export { post };