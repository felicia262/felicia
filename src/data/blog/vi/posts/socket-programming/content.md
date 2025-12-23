
## Socket giống như cuộc gọi điện thoại

Để hai người nói chuyện, cả hai cần số điện thoại và cùng nhấc máy. Socket trong lập trình mạng hoạt động tương tự như vậy.

## Socket là gì?

Socket là điểm cuối giao tiếp giữa hai tiến trình trên mạng. Hệ điều hành cung cấp thư viện socket (Berkeley sockets trên Unix, Winsock trên Windows).

## Quá trình giao tiếp TCP

1. Server tạo socket và bind vào địa chỉ/port.
2. Server lắng nghe kết nối đến.
3. Client kết nối tới server.
4. Server accept và trao đổi dữ liệu với client.

Ví dụ (Node.js):

```js
const net = require('net');
const server = net.createServer(socket => {
	socket.on('data', d => socket.write('Echo: ' + d));
});
server.listen(3000);
```

Ví dụ: TCP Client (Node.js)

```js
const net = require('net');
const client = net.createConnection({ port: 3000 }, () => {
	console.log('Đã kết nối server!');
	client.write('Xin chào server!');
});
client.on('data', data => {
	console.log('Nhận:', data.toString());
	client.end();
});
client.on('end', () => {
	console.log('Đã ngắt kết nối');
});
```

*Client này kết nối tới server TCP và gửi nhận dữ liệu.*

## Ứng dụng thực tế

Chat, game online, web server và hệ thống phân tán đều dựa trên socket.

**Kết luận:** Hiểu socket là hiểu gốc rễ của lập trình mạng.
