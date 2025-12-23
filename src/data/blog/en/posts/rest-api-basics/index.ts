import { BlogPost } from '../../../../../../types';
import content from './content.md?raw';

const post: BlogPost = {
  id: 'rest-api-basics',
  title: 'REST API Basics: Designing HTTP APIs',
  excerpt: 'Principles of RESTful APIs and best practices for HTTP-based services.',
  content,
  date: '17-12-2025',
  category: 'API',
  image: 'https://topdev.vn/blog/wp-content/uploads/2019/04/restful-api.jpg'
};

export default post;
export { post };
