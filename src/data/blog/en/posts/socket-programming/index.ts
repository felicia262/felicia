import { BlogPost } from '../../../../../../types';
import content from './content.md?raw';

const post: BlogPost = {
  id: 'socket-programming',
  title: 'Socket Programming: Building Networked Applications',
  excerpt: 'Basics of sockets and how to create networked programs.',
  content,
  date: '02-12-2025',
  category: 'Programming',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmAdN82jJlvO8uvh1dZt3d2Lj6fSoVj2yK5Q&s'
};

export default post;
export { post };
