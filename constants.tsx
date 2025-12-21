
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
  phone: '0899923998',
  email: 'Felicia.nguyenthanh@gmail.com',
  address: 'Hồ Chí Minh, Việt Nam'
};

export const SOCIAL_LINKS = [
  { name: 'GitHub', url: 'https://github.com' },
  { name: 'LinkedIn', url: 'https://linkedin.com' },
  { name: 'Facebook', url: 'https://www.facebook.com/share/1akaZaTPbx/?mibextid=wwXIfr' },
  { name: 'Instagram', url: 'https://www.instagram.com/_ngn.thao26/' }
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
      title: 'Cuộc thi CTF - The Maze Of Shadows',
      description: `
      The Maze Of Shadows là một cuộc thi CTF (Capture The Flag) mang tính thử thách cao, tập trung vào các kỹ năng an toàn thông tin và tư duy giải quyết vấn đề. Cuộc thi được thiết kế như một “mê cung bóng tối”, nơi người tham gia phải lần lượt vượt qua các thử thách thuộc nhiều lĩnh vực khác nhau như Cryptography, Web Security, Reverse Engineering, Forensics và Pwn.

      Trong quá trình tham gia, tôi đã rèn luyện khả năng phân tích lỗ hổng, tư duy logic, làm việc dưới áp lực thời gian, cũng như kỹ năng tìm kiếm và khai thác thông tin ẩn trong hệ thống. Cuộc thi không chỉ giúp tôi củng cố kiến thức nền tảng về an ninh mạng mà còn nâng cao tinh thần làm việc nhóm và khả năng tự học, tự nghiên cứu khi đối mặt với những bài toán mới và khó.
      `,
      type: 'Competition',
      image: 'images/chungnhan_131522.png',
      images: [
        'images/chungnhan_131522.png',
        'images/8FAowZT.jpg',
      ],
    },
    {
      id: 'a2',
      title: 'Vòng Chung Kết Cuộc thi "Sinh viên với ANTT 2025"',
      description: `
      Vòng Chung Kết cuộc thi "Sinh viên với An toàn Thông tin 2025" là chặng thi quan trọng, nơi các đội xuất sắc nhất được lựa chọn sau các vòng loại. Cuộc thi tập trung đánh giá kiến thức nền tảng và kỹ năng thực hành trong lĩnh vực an toàn thông tin, bao gồm phân tích lỗ hổng, bảo mật hệ thống, an ninh mạng và xử lý các tình huống tấn công thực tế.

      Thông qua việc tham gia vòng chung kết, tôi đã có cơ hội áp dụng kiến thức đã học vào bài toán thực tiễn, nâng cao tư duy phân tích, khả năng làm việc nhóm và kỹ năng giải quyết vấn đề dưới áp lực thời gian. Đây là trải nghiệm quan trọng giúp tôi củng cố định hướng theo đuổi lĩnh vực an toàn thông tin trong tương lai.
      `,

      type: 'Competition',
      image: 'images/lGnIlP.jpg',
      images: [
        'images/lGnIlP.jpg',
        'images/chungnhan_132594.png',
        'images/E0hS9Ns.jpg',
        'images/9lOhXsw.jpg',
      ],
    },
    {
      id: 'a3',
      title: 'Cisco Networking Academy – Introduction to Cybersecurity',
      description: 'Hoàn thành khóa Introduction to Cybersecurity do Cisco Networking Academy phối hợp HUTECH tổ chức, bao gồm tổng quan mối đe dọa, quy trình bảo vệ mạng và vai trò của đội phản ứng.',
      type: 'Certificate',
      image: 'images/Introduction_to_Cybersecurity.jpg',
      images: [
        'images/Introduction_to_Cybersecurity.jpg',
      ],
    },
        {
      id: 'a4',
      title: 'Cisco Networking Academy – Networking Basics',
      description: 'Chứng chỉ Networking Basics giúp tôi nắm vững mô hình OSI, địa chỉ IP, định tuyến cơ bản và thiết kế mạng nhỏ. Các bài lab tập trung vào cấu hình thiết bị SOHO, kiểm tra lưu lượng và củng cố ý thức bảo mật ngay từ lớp truy cập.',
      type: 'Certificate',
      image: 'images/Networking_Basics.jpg',
      images: [
        'images/Networking_Basics.jpg',
      ],
    },
       {
      id: 'a5',
      title: 'Cisco Networking Academy – JavaScript Essentials 1',
      description: 'Khóa JavaScript Essentials 1 giúp tôi củng cố nền tảng lập trình JavaScript với cú pháp ES6, thao tác biến/hàm, làm việc với DOM và sự kiện để xây dựng front-end ổn định và an toàn hơn.',
      type: 'Certificate',
      image: 'images/JavaScript_Essentials_1_certificate.jpg',
      images: [
        'images/JavaScript_Essentials_1_certificate.jpg',
      ],
    },
       {
      id: 'a6',
      title: 'Cisco Networking Academy – JavaScript Essentials 2',
      description: 'Khóa JavaScript Essentials 2 mở rộng sang quản lý bất đồng bộ, thao tác API REST, xử lý lỗi tinh gọn và viết mã module hóa để phục vụ các dự án front-end thực tế trong môi trường NetAcad.',
      type: 'Certificate',
      image: 'images/JavaScript_Essentials_2_certificate.jpg',
      images: [
        'images/JavaScript_Essentials_2_certificate.jpg',
      ],
    },
  ],
  en: [
    {
      id: 'a1',
      title: 'CTF Competition – The Maze Of Shadows',
      description: `
      The Maze Of Shadows is a challenging Capture The Flag (CTF) competition that focuses on information security skills and problem-solving thinking. The competition is designed as a “maze of shadows,” where participants must overcome a series of challenges across multiple domains, including Cryptography, Web Security, Reverse Engineering, Forensics, and Pwn.

      Through participating in the competition, I strengthened my vulnerability analysis skills, logical thinking, and ability to work under time pressure, as well as my capability to search for and exploit hidden information within systems. The competition not only reinforced my foundational knowledge of cybersecurity but also enhanced my teamwork skills and self-learning ability when facing complex and unfamiliar problems.
      `,
      type: 'Competition',
      image: 'images/chungnhan_131522.png',
      images: [
        'images/chungnhan_131522.png',
        'images/8FAowZT.jpg',
      ],
    },
    {
      id: 'a2',
      title: 'Final Round – "Students with Information Security 2025" Competition',
      description: `
      The Final Round of the "Students with Information Security 2025" competition represents a key stage where the most outstanding teams are selected after the preliminary rounds. The competition evaluates both fundamental knowledge and practical skills in information security, including vulnerability analysis, system security, network security, and real-world attack scenario handling.

      By participating in the final round, I had the opportunity to apply theoretical knowledge to practical challenges, improving my analytical thinking, teamwork abilities, and problem-solving skills under time constraints. This experience played an important role in strengthening my commitment to pursuing a career in information security.
      `,
      type: 'Competition',
      image: 'images/lGnIlP.jpg',
      images: [
        'images/lGnIlP.jpg',
        'images/chungnhan_132594.png',
        'images/E0hS9Ns.jpg',
        'images/9lOhXsw.jpg',
      ],
    },
    {
      id: 'a3',
      title: 'Cisco Networking Academy – Introduction to Cybersecurity',
      description: 'Completed the Introduction to Cybersecurity course organized by Cisco Networking Academy in collaboration with HUTECH, covering an overview of cyber threats, network protection processes, and the role of incident response teams.',
      type: 'Certificate',
      image: 'images/Introduction_to_Cybersecurity.jpg',
      images: [
        'images/Introduction_to_Cybersecurity.jpg',
      ],
    },
    {
      id: 'a4',
      title: 'Cisco Networking Academy – Networking Basics',
      description: 'The Networking Basics certificate helped me gain a solid understanding of the OSI model, IP addressing, basic routing, and small network design. Hands-on labs focused on configuring SOHO devices, traffic inspection, and reinforcing security awareness at the access layer.',
      type: 'Certificate',
      image: 'images/Networking_Basics.jpg',
      images: [
        'images/Networking_Basics.jpg',
      ],
    },
    {
      id: 'a5',
      title: 'Cisco Networking Academy – JavaScript Essentials 1',
      description: 'The JavaScript Essentials 1 course strengthened my foundational JavaScript programming skills, including ES6 syntax, variables and functions, DOM manipulation, and event handling to build more stable and secure front-end applications.',
      type: 'Certificate',
      image: 'images/JavaScript_Essentials_1_certificate.jpg',
      images: [
        'images/JavaScript_Essentials_1_certificate.jpg',
      ],
    },
    {
      id: 'a6',
      title: 'Cisco Networking Academy – JavaScript Essentials 2',
      description: 'The JavaScript Essentials 2 course expanded my knowledge into asynchronous programming, REST API interaction, clean error handling, and modular code writing to support real-world front-end projects within the NetAcad environment.',
      type: 'Certificate',
      image: 'images/JavaScript_Essentials_2_certificate.jpg',
      images: [
        'images/JavaScript_Essentials_2_certificate.jpg',
      ],
},

  ]
};

export const TRANSLATIONS = {
  vi: {
    heroSub: 'Xin chào, mình là',
    heroTitle: 'Nguyễn Thị Thanh Thảo.',
    heroDesc: 'Sinh viên Công nghệ Thông tin đam mê hạ tầng mạng và lập trình ứng dụng.',
    explore: 'Khám phá thêm',
    viewBlog: 'Xem blog của mình',
    aboutTitle: 'Về mình.',
    aboutP1: 'Mình là sinh viên năm 4 ngành Công nghệ Thông tin, chuyên ngành An ninh mạng. Trong quá trình học tập, mình tập trung vào việc nắm vững kiến thức nền tảng về mạng máy tính, hệ điều hành và các nguyên lý bảo mật, đồng thời rèn luyện tư duy phân tích và giải quyết vấn đề thông qua các bài tập và đồ án thực hành.',
    aboutP2: 'Mình quan tâm đến việc xây dựng hệ thống an toàn và ổn định, từ bảo mật mạng, ứng dụng web đến cách phát hiện và xử lý các rủi ro an ninh. Mục tiêu của mình là tiếp tục học hỏi, tích lũy kinh nghiệm thực tế và từng bước phát triển trong lĩnh vực an toàn thông tin.',
    blogTitle: 'Blog Mạng.',
    blogDesc: 'Chia sẻ kiến thức về giao thức, hạ tầng và những trải nghiệm thực tế trong lập trình mạng.',
    achTitle: 'Thành tựu.',
    contactTitle: 'Hãy cùng kết nối.',
    contactDesc: 'Mình luôn sẵn sàng thảo luận về các dự án mạng, cơ hội thực tập hoặc chỉ là một cuộc trò chuyện về công nghệ.',
    phone: 'Số điện thoại',
    email: 'Email cá nhân',
    copyright: '© 2025 Nguyễn Thị Thanh Thảo.',
    searchPlaceholder: 'Tìm kiếm bài viết...',
    back: 'Quay lại',
    readMore: 'Đọc tiếp',
    viewDetails: 'Xem chi tiết',
    noResults: 'Không tìm thấy kết quả nào cho'
  },
  en: {
    heroSub: "Hi, I'm",
    heroTitle: 'Nguyễn Thị Thanh Thảo.',
    heroDesc: 'IT Student passionate about network infrastructure and minimalist application development.',
    explore: 'Explore More',
    viewBlog: 'View my blog',
    aboutTitle: 'About me.',
    aboutP1: 'I am a fourth-year Information Technology student specializing in Cybersecurity. During my studies, I focus on building a solid foundation in computer networks, operating systems, and security principles, while developing analytical thinking and problem-solving skills through coursework and practical projects.',
    aboutP2: 'I am interested in building secure and reliable systems, from network and web application security to identifying and mitigating security risks. My goal is to continue learning, gain practical experience, and gradually grow within the field of information security.',
    blogTitle: 'Network Blog.',
    blogDesc: 'Sharing knowledge about protocols, infrastructure, and real-world network programming experiences.',
    achTitle: 'Achievements.',
    contactTitle: "Let's connect.",
    contactDesc: "I'm always open to discussing network projects, internship opportunities, or just a tech chat.",
    phone: 'Phone Number',
    email: 'Personal Email',
    copyright: '© 2025 Nguyễn Thị Thanh Thảo.',
    searchPlaceholder: 'Search articles...',
    back: 'Back',
    readMore: 'Read More',
    viewDetails: 'View Details',
    noResults: 'No results found for'
  }
};
