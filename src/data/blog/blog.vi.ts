import { BlogPost } from '../../../types';

export const BLOG_VI: BlogPost[] = [
  {
    id: 'intro-networking',
    title: 'Khái niệm mạng máy tính: Những điều cơ bản nhất',
    excerpt: 'Tìm hiểu về cách các máy tính kết nối và trao đổi dữ liệu với nhau qua các thiết bị trung gian.',
    content: 'Mạng máy tính là một tập hợp các máy tính và thiết bị phần cứng khác được kết nối với nhau thông qua các kênh truyền thông để chia sẻ tài nguyên và thông tin...',
    date: '25-03-2024',
    category: 'Cơ bản',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'osi-tcp-ip',
    title: 'Phân tích Mô hình OSI và TCP/IP chi tiết',
    excerpt: 'So sánh sự khác biệt giữa mô hình lý thuyết OSI 7 lớp và mô hình thực tế TCP/IP 4 lớp.',
    content: 'Mô hình OSI cung cấp một cái nhìn trừu tượng về quá trình truyền tin qua mạng, trong khi TCP/IP là bộ giao thức thực tế đang vận hành internet ngày nay...',
    date: '23-03-2024',
    category: 'Kiến trúc',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'socket-programming',
    title: 'Lập trình Socket: Kết nối giữa các tiến trình',
    excerpt: 'Hướng dẫn cách tạo kết nối đầu cuối giữa Client và Server thông qua cơ chế Socket.',
    content: 'Socket là một điểm cuối (endpoint) của một liên kết truyền thông hai chiều giữa hai chương trình chạy trên mạng...',
    date: '21-03-2024',
    category: 'Lập trình',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'tcp-vs-udp',
    title: 'Sự khác biệt cốt lõi giữa TCP và UDP',
    excerpt: 'Tại sao TCP cần bắt tay 3 bước trong khi UDP lại chú trọng vào tốc độ truyền tải?',
    content: 'TCP (Transmission Control Protocol) đảm bảo dữ liệu đến đích chính xác và theo đúng thứ tự...',
    date: '19-03-2024',
    category: 'Giao thức',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'client-server-model',
    title: 'Mô hình Client-Server: Xương sống của Web',
    excerpt: 'Tìm hiểu cách các yêu cầu từ phía người dùng được xử lý bởi các máy chủ tập trung.',
    content: 'Client-Server là mô hình phân tán trong đó các nhiệm vụ được phân chia giữa các nhà cung cấp tài nguyên hoặc dịch vụ...',
    date: '17-03-2024',
    category: 'Hệ thống',
    image: 'https://images.unsplash.com/photo-1551703599-6b3e8379aa8c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'network-multithreading',
    title: 'Xử lý Multithreading trong lập trình mạng',
    excerpt: 'Cách quản lý đồng thời nhiều kết nối Client mà không làm treo hệ thống Server.',
    content: 'Trong một ứng dụng mạng thực tế, một Server phải phục vụ hàng trăm hoặc hàng nghìn Client cùng lúc...',
    date: '15-03-2024',
    category: 'Hiệu suất',
    image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'http-webserver',
    title: 'HTTP và Xây dựng Web Server cơ bản',
    excerpt: 'Tìm hiểu cấu trúc của một Request/Response HTTP và cách viết một Server đơn giản.',
    content: 'HTTP là giao thức lớp ứng dụng để truyền các tài liệu siêu văn bản...',
    date: '13-03-2024',
    category: 'Giao thức Web',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'rest-api-basics',
    title: 'REST API cơ bản cho sinh viên CNTT',
    excerpt: 'Kiến trúc phần mềm REST giúp xây dựng các hệ thống linh hoạt và dễ mở rộng.',
    content: 'REST không phải là một giao thức mà là một phong cách kiến trúc...',
    date: '11-03-2024',
    category: 'API',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'simple-network-app',
    title: 'Xây dựng Ứng dụng Mạng bằng Java/JavaScript',
    excerpt: 'Hướng dẫn từng bước viết ứng dụng Chat hoặc Transfer File đơn giản.',
    content: 'Thực hành là cách tốt nhất để học. Chúng ta sẽ cùng nhau viết một chương trình Chat nhỏ bằng Java...',
    date: '09-03-2024',
    category: 'Thực hành',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800'
  }
];
