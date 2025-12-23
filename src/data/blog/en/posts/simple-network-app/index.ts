import { BlogPost } from '../../../../../../types';
import content from './content.md?raw';

const post: BlogPost = {
  id: 'simple-network-app',
  title: 'Building a Simple Network App',
  excerpt: 'Step-by-step guide to creating a basic client-server application.',
  content,
  date: '23-12-2025',
  category: 'Tutorial',
  image: 'https://cdn2.fptshop.com.vn/unsafe/800x0/java_web_02_9e87b9db0f.jpg',
  readingTime: '5 min read',
  author: {
    name: 'Nguyen Thi Thanh Thao',
    avatar: 'images/martin_1.jpg'
  }
};

export default post;
export { post };
