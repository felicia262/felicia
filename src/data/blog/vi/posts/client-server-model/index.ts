import { BlogPost } from '../../../../../../types';
import content from './content.md?raw';

const post: BlogPost = {
  id: 'client-server-model',
  title: 'Mô hình Client-Server: Xương sống của Web',
  excerpt: 'Tìm hiểu cách các yêu cầu từ phía người dùng được xử lý bởi các máy chủ tập trung.',
  content,
  date: '11-12-2025',
  category: 'Hệ thống',
  image: 'https://cloud-web-cms-v2.s3.cloud.cmctelecom.vn/02_cach_hoat_dong_cua_mo_hinh_client_server_la_gi_f9fde4288c.png'
};

export default post;
export { post };