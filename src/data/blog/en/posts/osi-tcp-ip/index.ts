import { BlogPost } from '../../../../../../types';
import content from './content.md?raw';

const post: BlogPost = {
  id: 'osi-tcp-ip',
  title: 'OSI & TCP/IP: Layered Network Models',
  excerpt: 'Understanding the OSI and TCP/IP models and their layers.',
  content,
  date: '25-11-2025',
  category: 'Networking',
  image: 'https://unifi.vn/wp-content/uploads/2024/03/osi-vs-tcp-ip2.jpg'
};

export default post;
export { post };
