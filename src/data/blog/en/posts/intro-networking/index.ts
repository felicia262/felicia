import { BlogPost } from '../../../../../../types';
import content from './content.md?raw';

const post: BlogPost = {
  id: 'intro-networking',
  title: 'Introduction to Networking',
  excerpt: 'An overview of basic networking concepts and models.',
  content,
  date: '18-11-2025',
  category: 'Networking',
  image: 'https://www.totolink.vn/public/uploads/img_article/Posts/690/mangmaytinhlagi.png',
  readingTime: '5 min read',
  author: {
    name: 'Nguyen Thi Thanh Thao',
    avatar: 'images/martin_1.jpg'
  }
};

export default post;
export { post };
