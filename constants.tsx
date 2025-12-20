
import { BlogPost, Achievement, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Trang chủ', href: '#home' },
  { label: 'Giới thiệu', href: '#about' },
  { label: 'Blog Mạng', href: '#blog' },
  { label: 'Thành tựu', href: '#achievements' },
  { label: 'Liên hệ', href: '#contact' },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Tìm hiểu Mô hình OSI 7 lớp',
    excerpt: 'Hướng dẫn chi tiết về mô hình tham chiếu hệ thống mở OSI và vai trò của từng lớp.',
    content: 'Mô hình OSI (Open Systems Interconnection) là một mô hình thiết kế mạng giúp chuẩn hóa các giao thức truyền thông...',
    date: '2024-03-20',
    category: 'Network Architecture',
    image: 'https://picsum.photos/seed/osi/800/450'
  },
  {
    id: '2',
    title: 'Giao thức TCP và UDP khác nhau như thế nào?',
    excerpt: 'So sánh chi tiết giữa hai giao thức vận chuyển phổ biến nhất trong bộ giao thức TCP/IP.',
    content: 'TCP là giao thức hướng kết nối (connection-oriented), trong khi UDP là giao thức phi kết nối (connectionless)...',
    date: '2024-03-18',
    category: 'Protocols',
    image: 'https://picsum.photos/seed/tcpudp/800/450'
  },
  {
    id: '3',
    title: 'Phân tích Gói tin với Wireshark',
    excerpt: 'Hướng dẫn cơ bản cách sử dụng công cụ Wireshark để bắt và phân tích lưu lượng mạng.',
    content: 'Wireshark là một công cụ phân tích giao thức mạng mã nguồn mở hàng đầu thế giới...',
    date: '2024-03-15',
    category: 'Analysis Tools',
    image: 'https://picsum.photos/seed/wireshark/800/450'
  },
  {
    id: '4',
    title: 'Cơ chế hoạt động của DNS',
    excerpt: 'Làm thế nào Domain Name System biến tên miền thành địa chỉ IP mà máy tính hiểu được?',
    content: 'DNS được ví như cuốn danh bạ điện thoại của Internet...',
    date: '2024-03-12',
    category: 'Services',
    image: 'https://picsum.photos/seed/dns/800/450'
  },
  {
    id: '5',
    title: 'Lập trình Socket với Java',
    excerpt: 'Xây dựng ứng dụng Chat Client-Server đơn giản sử dụng Socket API trong ngôn ngữ Java.',
    content: 'Socket là một điểm cuối (endpoint) của một liên kết truyền thông hai chiều giữa hai chương trình...',
    date: '2024-03-10',
    category: 'Programming',
    image: 'https://picsum.photos/seed/socket/800/450'
  },
  {
    id: '6',
    title: 'HTTP vs HTTPS: Tại sao bảo mật lại quan trọng?',
    excerpt: 'Khám phá sự khác biệt về bảo mật và cách thức hoạt động của chứng chỉ SSL/TLS.',
    content: 'HTTPS là phiên bản bảo mật của HTTP, sử dụng giao thức SSL/TLS để mã hóa dữ liệu...',
    date: '2024-03-08',
    category: 'Web Security',
    image: 'https://picsum.photos/seed/http/800/450'
  },
  {
    id: '7',
    title: 'Cấu hình Định tuyến Tĩnh và Động',
    excerpt: 'Sự khác biệt giữa Static Routing và Dynamic Routing trong quản trị mạng doanh nghiệp.',
    content: 'Routing là quá trình chọn đường đi cho lưu lượng trong mạng hoặc qua nhiều mạng...',
    date: '2024-03-05',
    category: 'Routing',
    image: 'https://picsum.photos/seed/routing/800/450'
  },
  {
    id: '8',
    title: 'Tìm hiểu về NAT và Port Forwarding',
    excerpt: 'Cách thức Network Address Translation giúp bảo tồn địa chỉ IPv4 và quản lý truy cập nội bộ.',
    content: 'NAT cho phép một thiết bị, thường là router, hoạt động như một thực thể trung gian...',
    date: '2024-03-01',
    category: 'Security',
    image: 'https://picsum.photos/seed/nat/800/450'
  },
  {
    id: '9',
    title: 'Xu hướng Mạng 5G và Tương lai Internet',
    excerpt: 'Tại sao 5G lại là cuộc cách mạng cho IoT và tốc độ truy cập Internet toàn cầu?',
    content: '5G không chỉ là tốc độ nhanh hơn, mà còn là độ trễ cực thấp và khả năng kết nối hàng triệu thiết bị...',
    date: '2024-02-25',
    category: 'Technology',
    image: 'https://picsum.photos/seed/5g/800/450'
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'a1',
    title: 'Hệ thống Quản lý Thư viện',
    description: 'Dự án cuối kỳ môn Cơ sở dữ liệu, sử dụng Java Swing và MySQL với kiến trúc MVC.',
    type: 'Project',
    image: 'https://picsum.photos/seed/proj1/800/600',
    link: '#'
  },
  {
    id: 'a2',
    title: 'Chứng chỉ CCNA (200-301)',
    description: 'Chứng chỉ chuyên gia mạng của Cisco, nắm vững kiến thức về Routing, Switching và Security.',
    type: 'Certificate',
    image: 'https://picsum.photos/seed/cert1/800/600'
  },
  {
    id: 'a3',
    title: 'Giải Ba Olympic Tin học SV',
    description: 'Thành tích đạt được trong kỳ thi Olympic Tin học Sinh viên Toàn quốc năm 2023.',
    type: 'Competition',
    image: 'https://picsum.photos/seed/comp1/800/600'
  }
];
