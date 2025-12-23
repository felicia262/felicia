import { BlogPost } from '../../../../../../types';
import content from './content.md?raw';

const post: BlogPost = {
  id: 'client-server-model',
  title: 'Client-Server Model: The Backbone of the Web',
  excerpt: 'Learn how user requests are handled by centralized servers.',
  content,
  date: '11-12-2025',
  category: 'Systems',
  image: 'https://cloud-web-cms-v2.s3.cloud.cmctelecom.vn/02_cach_hoat_dong_cua_mo_hinh_client_server_la_gi_f9fde4288c.png',
  readingTime: '4 min read',
  author: {
    name: 'Nguyen Thi Thanh Thao',
    avatar: 'images/martin_1.jpg'
  }
};

export default post;
export { post };
