import { BlogPost } from '../../../../../../types';
import content from './content.md?raw';

const post: BlogPost = {
  id: 'tcp-vs-udp',
  title: 'TCP vs UDP: Reliable vs Unreliable Transport',
  excerpt: 'Compare TCP and UDP to choose the right transport protocol.',
  content,
  date: '09-12-2025',
  category: 'Networking',
  image: 'https://devops.vinahost.vn/Image/TCP-UDP.png'
};

export default post;
export { post };
