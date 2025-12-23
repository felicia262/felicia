import { BlogPost } from '../../../../../../types';
import content from './content.md?raw';

const post: BlogPost = {
  id: 'socket-programming',
  title: 'Lập trình Socket: Kết nối giữa các tiến trình',
  excerpt: 'Hướng dẫn cách tạo kết nối đầu cuối giữa Client và Server thông qua cơ chế Socket.',
  content,
  date: '02-12-2025',
  category: 'Lập trình',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmAdN82jJlvO8uvh1dZt3d2Lj6fSoVj2yK5Q&s',
  readingTime: '6 min read',
  author: {
    name: 'Nguyễn Thị Thanh Thảo',
    avatar: 'images/martin_1.jpg'
  }
};

export default post;
export { post };