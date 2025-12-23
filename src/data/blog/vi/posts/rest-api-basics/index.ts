import { BlogPost } from '../../../../../../types';
import content from './content.md?raw';

const post: BlogPost = {
  id: 'rest-api-basics',
  title: 'REST API cơ bản cho sinh viên CNTT',
  excerpt: 'Kiến trúc phần mềm REST giúp xây dựng các hệ thống linh hoạt và dễ mở rộng.',
  content,
  date: '17-12-2025',
  category: 'API',
  image: 'https://topdev.vn/blog/wp-content/uploads/2019/04/restful-api.jpg',
  readingTime: '4 min read',
  author: {
    name: 'Nguyễn Thị Thanh Thảo',
    avatar: 'images/martin_1.jpg'
  }
};

export default post;
export { post };