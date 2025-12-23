import { BlogPost } from '../../../../../../types';
import content from './content.md?raw';

const post: BlogPost = {
  id: 'tcp-vs-udp',
  title: 'Sự khác biệt cốt lõi giữa TCP và UDP',
  excerpt: 'Tại sao TCP cần bắt tay 3 bước trong khi UDP lại chú trọng vào tốc độ truyền tải?',
  content,
  date: '09-12-2025',
  category: 'Giao thức',
  image: 'https://devops.vinahost.vn/Image/TCP-UDP.png',
  readingTime: '3 min read',
  author: {
    name: 'Nguyễn Thị Thanh Thảo',
    avatar: 'images/martin_1.jpg'
  }
};

export default post;
export { post };