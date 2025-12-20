
import { BlogPost, Achievement, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Trang chủ', href: 'home' },
  { label: 'Giới thiệu', href: 'about' },
  { label: 'Blog Mạng', href: 'blog' },
  { label: 'Thành tựu', href: 'achievements' },
  { label: 'Liên hệ', href: 'contact' },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'osi-model',
    title: 'Giải mã Mô hình OSI 7 lớp trong thực tế',
    excerpt: 'Tại sao sinh viên CNTT cần nắm vững OSI? Phân tích luồng dữ liệu từ Application đến Physical layer.',
    content: 'Mô hình OSI (Open Systems Interconnection) không chỉ là lý thuyết suông. Trong lập trình mạng, việc hiểu rõ tầng Transport (TCP/UDP) hay Network (IP) giúp chúng ta debug lỗi kết nối hiệu quả hơn. Ví dụ, khi bạn viết code Socket, bạn đang làm việc trực tiếp tại tầng 5, 6, 7 của mô hình này...',
    date: '20-03-2024',
    category: 'Cơ sở hạ tầng',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'tcp-vs-udp',
    title: 'TCP hay UDP: Lựa chọn nào cho ứng dụng của bạn?',
    excerpt: 'So sánh cơ chế bắt tay 3 bước của TCP và tính nhanh nhẹn của UDP trong streaming.',
    content: 'TCP (Transmission Control Protocol) đảm bảo tin cậy nhưng chậm hơn do cơ chế kiểm soát luồng. UDP (User Datagram Protocol) lại phù hợp cho Game Online hoặc Video Call nơi tốc độ là ưu tiên hàng đầu. Trong môn Lập trình mạng, chúng ta thường bắt đầu với TCP Server để hiểu về stream-based communication...',
    date: '18-03-2024',
    category: 'Giao thức',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'socket-programming',
    title: 'Lập trình Socket: Cánh cửa kết nối thế giới',
    excerpt: 'Hướng dẫn xây dựng ứng dụng Chat Client-Server đầu tiên bằng Java/Python.',
    content: 'Socket là interface giữa ứng dụng và tầng vận chuyển. Quy trình chuẩn bao gồm: Socket() -> Bind() -> Listen() -> Accept(). Việc quản lý đa luồng (Multi-threading) khi có nhiều Client kết nối cùng lúc là thách thức lớn nhất mà sinh viên cần vượt qua...',
    date: '15-03-2024',
    category: 'Lập trình',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'dns-deep-dive',
    title: 'DNS - "Cuốn danh bạ" khổng lồ của Internet',
    excerpt: 'Tìm hiểu cách Recursive Resolver và Authoritative Name Server phối hợp để trả về IP.',
    content: 'Khi bạn gõ google.com, hàng loạt truy vấn DNS diễn ra ngầm. Hiểu về TTL (Time To Live) và các bản ghi A, CNAME, MX là kiến thức nền tảng để triển khai các hệ thống Web và Mail...',
    date: '12-03-2024',
    category: 'Dịch vụ mạng',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'http-evolution',
    title: 'Sự tiến hóa từ HTTP/1.1 đến HTTP/3',
    excerpt: 'Tại sao QUIC và UDP lại được chọn để thay thế TCP trong giao thức web mới nhất?',
    content: 'HTTP/1.1 gặp vấn đề Head-of-line blocking. HTTP/2 giải quyết bằng Multiplexing. Và giờ đây HTTP/3 sử dụng QUIC trên nền UDP để giảm thiểu độ trễ kết nối (0-RTT)...',
    date: '10-03-2024',
    category: 'Giao thức Web',
    image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'ip-addressing',
    title: 'IPv4 Subnetting và Thách thức IPv6',
    excerpt: 'Cách chia mạng con (Subnetting) để tối ưu hóa địa chỉ và lý do thế giới đang chuyển dịch sang IPv6.',
    content: 'Việc cạn kiệt địa chỉ IPv4 dẫn đến sự ra đời của NAT. Tuy nhiên, IPv6 với không gian địa chỉ khổng lồ mới là giải pháp lâu dài cho IoT và kỷ nguyên kết nối mới...',
    date: '08-03-2024',
    category: 'Địa chỉ hóa',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'network-security',
    title: 'Bảo mật tầng Transport: TLS/SSL hoạt động ra sao?',
    excerpt: 'Phân tích quá trình trao đổi khóa và mã hóa dữ liệu trong HTTPS.',
    content: 'Không có bảo mật, mọi dữ liệu Socket đều là bản rõ (plaintext). TLS cung cấp tính xác thực, mã hóa và toàn vẹn dữ liệu thông qua cơ chế Public Key Infrastructure (PKI)...',
    date: '05-03-2024',
    category: 'An ninh mạng',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'load-balancing',
    title: 'Cân bằng tải (Load Balancing) cho hệ thống lớn',
    excerpt: 'Các thuật toán Round Robin, Least Connections trong việc điều phối lưu lượng mạng.',
    content: 'Khi ứng dụng có hàng triệu người dùng, một Server đơn lẻ không thể đáp ứng. Load Balancer đóng vai trò như một cảnh sát giao thông điều hướng yêu cầu đến các Server rảnh rỗi...',
    date: '02-03-2024',
    category: 'Hệ thống',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'sdn-future',
    title: 'SDN - Tương lai của mạng điều khiển bằng phần mềm',
    excerpt: 'Tách biệt Control Plane và Forwarding Plane để tạo ra mạng linh hoạt hơn.',
    content: 'Software Defined Networking (SDN) cho phép quản trị viên mạng cấu hình toàn bộ hệ thống thông qua phần mềm thay vì tác động vào từng thiết bị phần cứng riêng lẻ...',
    date: '01-03-2024',
    category: 'Xu hướng',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800'
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'a1',
    title: 'Hệ thống Chat mã hóa End-to-End',
    description: 'Dự án Lập trình mạng sử dụng Java Socket và thuật toán AES để bảo mật tin nhắn giữa Client và Server.',
    type: 'Project',
    image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&q=80&w=800',
    link: '#'
  },
  {
    id: 'a2',
    title: 'Chứng chỉ Cisco CCNA',
    description: 'Nắm vững kỹ năng cấu hình Router, Switch và thiết kế hạ tầng mạng doanh nghiệp quy mô vừa.',
    type: 'Certificate',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'a3',
    title: 'Top 10 Cuộc thi An toàn Thông tin',
    description: 'Thành tích xuất sắc trong cuộc thi CTF (Capture The Flag) cấp trường năm 2023.',
    type: 'Competition',
    image: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&q=80&w=800'
  }
];
