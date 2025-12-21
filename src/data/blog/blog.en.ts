import { BlogPost } from '../../../types';

export const BLOG_EN: BlogPost[] = [
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
];
