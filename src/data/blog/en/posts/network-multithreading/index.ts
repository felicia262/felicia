import { BlogPost } from '../../../../../../types';
import content from './content.md?raw';

const post: BlogPost = {
  id: 'network-multithreading',
  title: 'Network Multithreading: Concurrency in Servers',
  excerpt: 'How servers use multithreading to handle many connections concurrently.',
  content,
  date: '17-12-2025',
  category: 'Systems',
  image: 'https://media.geeksforgeeks.org/wp-content/uploads/20220129182415/Screenshot88.jpg',
  readingTime: '5 min read',
  author: {
    name: 'Nguyen Thi Thanh Thao',
    avatar: 'images/martin_1.jpg'
  }
};

export default post;
export { post };
