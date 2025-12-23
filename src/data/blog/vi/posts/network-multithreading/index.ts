import { BlogPost } from '../../../../../../types';
import content from './content.md?raw';

const post: BlogPost = {
  id: 'network-multithreading',
  title: 'Xử lý Multithreading trong lập trình mạng',
  excerpt: 'Cách quản lý đồng thời nhiều kết nối Client mà không làm treo hệ thống Server.',
  content,
  date: '17-12-2025',
  category: 'Hiệu suất',
  image: 'https://media.geeksforgeeks.org/wp-content/uploads/20220129182415/Screenshot88.jpg',
  readingTime: '5 min read',
  author: {
    name: 'Nguyễn Thị Thanh Thảo',
    avatar: 'images/martin_1.jpg'
  }
};

export default post;
export { post };