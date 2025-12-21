
import { BlogPost, Achievement, NavItem, Language } from './types';

export const NAV_ITEMS: Record<Language, NavItem[]> = {
  vi: [
    { label: 'Trang chủ', href: 'home' },
    { label: 'Giới thiệu', href: 'about' },
    { label: 'Blog Mạng', href: 'blog' },
    { label: 'Thành tựu', href: 'achievements' },
    { label: 'Liên hệ', href: 'contact' },
  ],
  en: [
    { label: 'Home', href: 'home' },
    { label: 'About', href: 'about' },
    { label: 'Network Blog', href: 'blog' },
    { label: 'Achievements', href: 'achievements' },
    { label: 'Contact', href: 'contact' },
  ]
};

export const CONTACT_INFO = {
  phone: '090 123 4567',
  email: 'nguyenvana.it@gmail.com',
  address: 'Hồ Chí Minh, Việt Nam'
};

// Fix: Added SOCIAL_LINKS which was missing and causing a compilation error in App.tsx
export const SOCIAL_LINKS = [
  { name: 'GitHub', url: 'https://github.com' },
  { name: 'LinkedIn', url: 'https://linkedin.com' },
  { name: 'Facebook', url: 'https://facebook.com' },
  { name: 'Instagram', url: 'https://instagram.com' }
];

export const BLOG_POSTS: Record<Language, BlogPost[]> = {
  vi: [
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
  ],
  en: [
    {
      id: 'intro-networking',
      title: 'Computer Networking Concepts: The Fundamentals',
      excerpt: 'Understand how computers connect and exchange data through intermediary devices.',
      content: 'Computer networking is a collection of computers and other hardware devices connected together through communication channels...',
      date: '2024-03-25',
      category: 'Basics',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'osi-tcp-ip',
      title: 'Detailed Analysis of OSI and TCP/IP Models',
      excerpt: 'Comparing the differences between the theoretical OSI 7-layer and practical TCP/IP 4-layer models.',
      content: 'The OSI model provides an abstract view of communication over a network, while TCP/IP is the practical protocol suite...',
      date: '2024-03-23',
      category: 'Architecture',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'socket-programming',
      title: 'Socket Programming: Inter-process Connectivity',
      excerpt: 'Guide on creating end-to-end connections between Client and Server via Sockets.',
      content: 'A socket is one endpoint of a two-way communication link between two programs running on the network...',
      date: '2024-03-21',
      category: 'Programming',
      image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'tcp-vs-udp',
      title: 'Core Differences Between TCP and UDP',
      excerpt: 'Why does TCP need a 3-way handshake while UDP focuses on transmission speed?',
      content: 'TCP (Transmission Control Protocol) ensures data reaches its destination accurately and in order...',
      date: '2024-03-19',
      category: 'Protocols',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'client-server-model',
      title: 'Client-Server Model: The Backbone of Web',
      excerpt: 'Discover how user-side requests are handled by centralized servers.',
      content: 'Client-Server is a distributed model where tasks are partitioned between resource or service providers...',
      date: '2024-03-17',
      category: 'Systems',
      image: 'https://images.unsplash.com/photo-1551703599-6b3e8379aa8c?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'network-multithreading',
      title: 'Handling Multithreading in Network Programming',
      excerpt: 'How to manage simultaneous client connections without freezing the server.',
      content: 'In a real-world network application, a Server must serve hundreds or thousands of clients simultaneously...',
      date: '2024-03-15',
      category: 'Performance',
      image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'http-webserver',
      title: 'HTTP and Building a Basic Web Server',
      excerpt: 'Understanding the structure of an HTTP Request/Response and writing a simple server.',
      content: 'HTTP is an application layer protocol for transmitting hypermedia documents...',
      date: '2024-03-13',
      category: 'Web Protocols',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'rest-api-basics',
      title: 'REST API Basics for IT Students',
      excerpt: 'REST software architecture helps build flexible and scalable systems.',
      content: 'REST is not a protocol but an architectural style. This article introduces RESTful principles...',
      date: '2024-03-11',
      category: 'API',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'simple-network-app',
      title: 'Building a Network App with Java/JavaScript',
      excerpt: 'Step-by-step guide to writing a simple Chat or File Transfer application.',
      content: 'Practice is the best way to learn. We will write a small Chat program using Java or Node.js...',
      date: '2024-03-09',
      category: 'Practice',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800'
    }
  ]
};

export const ACHIEVEMENTS: Record<Language, Achievement[]> = {
  vi: [
    {
      id: 'a1',
      title: 'Hệ thống Chat mã hóa End-to-End',
      description: 'Dự án Lập trình mạng sử dụng Java Socket và thuật toán AES để bảo mật tin nhắn.',
      type: 'Project',
      image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&q=80&w=800',
      images: [
        'https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&q=80&w=1200',
        'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200'
      ],
      link: '#'
    }
  ],
  en: [
    {
      id: 'a1',
      title: 'End-to-End Encrypted Chat System',
      description: 'Network programming project using Java Sockets and AES encryption to secure messages.',
      type: 'Project',
      image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&q=80&w=800',
      images: [
        'https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&q=80&w=1200',
        'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200'
      ],
      link: '#'
    }
  ]
};

export const TRANSLATIONS = {
  vi: {
    heroSub: 'Xin chào, tôi là',
    heroTitle: 'Nguyễn Văn A.',
    heroDesc: 'Sinh viên Công nghệ Thông tin đam mê hạ tầng mạng và lập trình ứng dụng tối giản.',
    explore: 'Khám phá thêm',
    viewBlog: 'Xem blog của tôi',
    aboutTitle: 'Về tôi.',
    aboutP1: 'Tôi là một sinh viên CNTT đam mê khám phá sự giao thoa giữa phần cứng và phần mềm...',
    aboutP2: 'Phương châm của tôi là "Làm cho nó hoạt động, sau đó làm cho nó tối giản"...',
    blogTitle: 'Blog Mạng.',
    blogDesc: 'Chia sẻ kiến thức về giao thức, hạ tầng và những trải nghiệm thực tế trong lập trình mạng.',
    achTitle: 'Thành tựu.',
    contactTitle: 'Hãy cùng kết nối.',
    contactDesc: 'Tôi luôn sẵn sàng thảo luận về các dự án mạng, cơ hội thực tập hoặc chỉ là một cuộc trò chuyện về công nghệ.',
    phone: 'Số điện thoại',
    email: 'Email cá nhân',
    copyright: '© 2024 Nguyễn Văn A. Thiết kế lấy cảm hứng từ sự tối giản của Apple.',
    searchPlaceholder: 'Tìm kiếm bài viết...',
    back: 'Quay lại',
    readMore: 'Đọc tiếp',
    viewDetails: 'Xem chi tiết',
    noResults: 'Không tìm thấy kết quả nào cho'
  },
  en: {
    heroSub: "Hi, I'm",
    heroTitle: 'Nguyen Van A.',
    heroDesc: 'IT Student passionate about network infrastructure and minimalist application development.',
    explore: 'Explore More',
    viewBlog: 'View my blog',
    aboutTitle: 'About me.',
    aboutP1: "I'm an IT student passionate about exploring the intersection of hardware and software...",
    aboutP2: 'My motto is "Make it work, then make it minimalist"...',
    blogTitle: 'Network Blog.',
    blogDesc: 'Sharing knowledge about protocols, infrastructure, and real-world network programming experiences.',
    achTitle: 'Achievements.',
    contactTitle: "Let's connect.",
    contactDesc: "I'm always open to discussing network projects, internship opportunities, or just a tech chat.",
    phone: 'Phone Number',
    email: 'Personal Email',
    copyright: '© 2024 Nguyen Van A. Inspired by Apple Minimalism.',
    searchPlaceholder: 'Search articles...',
    back: 'Back',
    readMore: 'Read More',
    viewDetails: 'View Details',
    noResults: 'No results found for'
  }
};
