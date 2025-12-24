# So sánh TCP và UDP

## Giới thiệu

Trong bài này, chúng ta xem xét các khác biệt chính giữa hai giao thức tầng vận chuyển là TCP và UDP. TCP tập trung vào độ tin cậy, đảm bảo dữ liệu được truyền đúng thứ tự và đầy đủ, trong khi UDP hướng đến tốc độ và độ trễ thấp, chấp nhận việc mất gói tin.

Việc lựa chọn TCP hay UDP phụ thuộc vào yêu cầu cụ thể của từng ứng dụng mạng.

## Đặc điểm của TCP

TCP (Transmission Control Protocol) là giao thức hướng kết nối, đảm bảo dữ liệu được truyền đi một cách chính xác và theo đúng thứ tự ban đầu. Trước khi truyền dữ liệu, TCP thiết lập kết nối giữa hai đầu thông qua quá trình bắt tay ba bước (three-way handshake).

TCP cung cấp các cơ chế kiểm soát luồng, kiểm soát tắc nghẽn và phát hiện, truyền lại gói tin bị mất. Nhờ đó, TCP phù hợp với các ứng dụng yêu cầu độ tin cậy cao như truyền file, truy cập web hoặc gửi email.

Các ứng dụng tiêu biểu sử dụng TCP bao gồm HTTP, HTTPS, FTP và SMTP.

## Đặc điểm của UDP

UDP (User Datagram Protocol) là giao thức không kết nối, không yêu cầu thiết lập phiên trước khi truyền dữ liệu. Mỗi gói tin UDP được gửi độc lập và không có cơ chế đảm bảo gói tin đến nơi, đúng thứ tự hay không bị trùng lặp.

UDP có cấu trúc đơn giản, overhead thấp và độ trễ nhỏ, giúp tăng tốc độ truyền dữ liệu. Vì vậy, UDP phù hợp với các ứng dụng thời gian thực, nơi tốc độ quan trọng hơn độ chính xác tuyệt đối.

Các ứng dụng thường sử dụng UDP bao gồm VoIP, streaming video, game online và DNS.

## So sánh nhanh giữa TCP và UDP

**TCP:**  
Giao thức hướng kết nối, đảm bảo độ tin cậy, đảm bảo thứ tự gói tin, có cơ chế kiểm soát luồng và tắc nghẽn. TCP phù hợp với các ứng dụng yêu cầu dữ liệu chính xác và đầy đủ như HTTP và FTP.

**UDP:**  
Giao thức không kết nối, nhẹ, nhanh, không đảm bảo thứ tự hay độ tin cậy. UDP phù hợp với các ứng dụng truyền tải thời gian thực như VoIP và streaming.

## Ví dụ: UDP Echo Server (Node.js)

Ví dụ dưới đây minh họa một UDP server đơn giản, có chức năng nhận dữ liệu từ client và gửi lại chính dữ liệu đó.

```js
const dgram = require('dgram');
const server = dgram.createSocket('udp4');

server.on('message', (msg, rinfo) => {
	server.send(msg, rinfo.port, rinfo.address);
});

server.bind(41234);
```

UDP server này lắng nghe các gói tin đến tại cổng 41234 và phản hồi lại dữ liệu cho client mà không cần thiết lập kết nối trước.

## Khi nào nên sử dụng TCP hoặc UDP?

TCP nên được sử dụng trong các trường hợp dữ liệu cần được truyền đầy đủ, chính xác và theo đúng thứ tự, chẳng hạn như truyền file, truy cập website hoặc giao tiếp client-server thông thường.

UDP phù hợp với các ứng dụng yêu cầu độ trễ thấp và có thể chấp nhận mất mát dữ liệu, ví dụ như cuộc gọi thoại, truyền hình trực tuyến hoặc các trò chơi trực tuyến thời gian thực.

## Tổng kết

TCP và UDP phục vụ những mục đích khác nhau trong truyền thông mạng. Việc hiểu rõ đặc điểm và sự khác biệt giữa hai giao thức giúp người học lựa chọn giải pháp phù hợp khi thiết kế và triển khai các ứng dụng mạng.