import { BlogPost } from '../../../../../../types';
import content from './content.md?raw';

const post: BlogPost = {
  id: 'http-webserver',
  title: 'HTTP & Web Servers: How Requests Are Served',
  excerpt: 'Basics of HTTP and how web servers process requests and responses.',
  content,
  date: '17-12-2025',
  category: 'Web',
  image: 'https://cloud.z.com/vn/wp-content/uploads/2023/06/web16243573287577.jpg',
  readingTime: '4 min read',
  author: {
    name: 'Nguyen Thi Thanh Thao',
    avatar: 'images/martin_1.jpg'
  }
};

export default post;
export { post };
