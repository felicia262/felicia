import { BlogPost } from '../../../../../../types';
import content from './content.md?raw';

const post: BlogPost = {
  id: 'socket-programming',
  title: 'Socket Programming: Building Networked Applications',
  excerpt: 'Basics of sockets and how to create networked programs.',
  content,
  date: '02-12-2025',
  category: 'Programming',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmAdN82jJlvO8uvh1dZt3d2Lj6fSoVj2yK5Q&s',
  readingTime: '6 min read',
  author: {
    name: 'Nguyen Thi Thanh Thao',
    avatar: 'images/martin_1.jpg'
  }
};

export default post;
export { post };
