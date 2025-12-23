import { BlogPost } from '../../../../../../types';
import content from './content.md?raw';

const post: BlogPost = {
  id: 'osi-tcp-ip',
  title: 'Phân tích Mô hình OSI và TCP/IP chi tiết',
  excerpt: 'So sánh sự khác biệt giữa mô hình lý thuyết OSI 7 lớp và mô hình thực tế TCP/IP 4 lớp.',
  content,
  date: '25-11-2025',
  category: 'Kiến trúc',
  image: 'https://unifi.vn/wp-content/uploads/2024/03/osi-vs-tcp-ip2.jpg',
  readingTime: '4 min read',
  author: {
    name: 'Nguyễn Thị Thanh Thảo',
    avatar: 'images/martin_1.jpg'
  }
};

export default post;
export { post };