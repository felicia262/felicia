import { BlogPost } from '../../../../../../types';
import content from './content.md?raw';

const post: BlogPost = {
  id: 'simple-network-app',
  title: 'Xây dựng Ứng dụng Mạng bằng Java/JavaScript',
  excerpt: 'Hướng dẫn từng bước viết ứng dụng Chat hoặc Transfer File đơn giản.',
  content,
  date: '23-12-2025',
  category: 'Thực hành',
  image: 'https://cdn2.fptshop.com.vn/unsafe/800x0/java_web_02_9e87b9db0f.jpg'
};

export default post;
export { post };