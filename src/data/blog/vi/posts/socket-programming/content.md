# Socket trong lập trình mạng

## Socket giống như cuộc gọi điện thoại

Để hai người có thể nói chuyện với nhau qua điện thoại, cả hai cần biết số điện thoại của đối phương và cùng tham gia vào cuộc gọi. Trong lập trình mạng, socket đóng vai trò tương tự như vậy.

Socket là “điểm tiếp xúc” cho phép hai tiến trình trên các thiết bị khác nhau giao tiếp với nhau thông qua mạng.

## Socket là gì?

Socket là điểm cuối giao tiếp giữa hai tiến trình trong mạng máy tính. Mỗi socket được xác định bởi một cặp địa chỉ gồm địa chỉ IP và số cổng (port).

Hệ điều hành cung cấp các thư viện socket để lập trình viên sử dụng, tiêu biểu như Berkeley Sockets trên hệ điều hành Unix/Linux và Winsock trên Windows. Các thư viện này cho phép ứng dụng gửi và nhận dữ liệu thông qua các giao thức như TCP hoặc UDP.

## Quá trình giao tiếp TCP

Giao tiếp TCP sử dụng kết nối hướng liên kết (connection-oriented). Quá trình trao đổi dữ liệu giữa client và server thường diễn ra theo các bước sau:

1. Server tạo socket và gán (bind) socket đó với một địa chỉ IP và port cụ thể.
2. Server đưa socket vào trạng thái lắng nghe (listen) các kết nối đến.
3. Client tạo socket và gửi yêu cầu kết nối tới server.
4. Server chấp nhận kết nối (accept) và hai bên bắt đầu trao đổi dữ liệu.

## Ví dụ: TCP Server (Node.js)

```js
const net = require('net');

const server = net.createServer(socket => {
	console.log('Client đã kết nối');

	socket.on('data', data => {
		console.log('Nhận từ client:', data.toString());
		socket.write('Echo: ' + data);
	});

	socket.on('end', () => {
		console.log('Client đã ngắt kết nối');
	});
});

server.listen(3000, () => {
	console.log('TCP Server đang lắng nghe tại port 3000');
});
```

Server tạo socket TCP, lắng nghe kết nối tại cổng 3000 và phản hồi lại dữ liệu mà client gửi đến.

## Ví dụ: TCP Client (Node.js)

``` js
const net = require('net');

const client = net.createConnection({ port: 3000 }, () => {
	console.log('Đã kết nối server');
	client.write('Xin chào server!');
});

client.on('data', data => {
	console.log('Nhận từ server:', data.toString());
	client.end();
});

client.on('end', () => {
	console.log('Đã đóng kết nối');
});
```

Client kết nối tới server TCP, gửi dữ liệu và nhận phản hồi trước khi đóng kết nối.

## Socket với UDP

Khác với TCP, UDP là giao thức không kết nối (connectionless). Dữ liệu được gửi đi mà không cần thiết lập kết nối trước và không đảm bảo đến nơi theo đúng thứ tự.

## Ví dụ: UDP Server (Node.js)

```js
const dgram = require('dgram');
const server = dgram.createSocket('udp4');

server.on('message', (msg, rinfo) => {
	console.log(`Nhận: ${msg} từ ${rinfo.address}:${rinfo.port}`);
});

server.bind(4000);
```

## Ví dụ: UDP Client (Node.js)

```js
const dgram = require('dgram');
const client = dgram.createSocket('udp4');

const message = Buffer.from('Hello UDP');
client.send(message, 4000, 'localhost', () => {
	console.log('Đã gửi gói tin UDP');
	client.close();
});
```

UDP thường được sử dụng trong các ứng dụng yêu cầu tốc độ cao và chấp nhận mất gói.

## Ứng dụng thực tế

Socket là nền tảng của nhiều hệ thống mạng như ứng dụng chat, game online, web server, dịch vụ API và các hệ thống phân tán.

## Liên hệ với An ninh mạng

Trong an ninh mạng, socket là điểm khởi đầu của nhiều hình thức tấn công như quét cổng, tấn công từ chối dịch vụ hoặc khai thác dịch vụ mạng. Hiểu rõ socket giúp phát hiện kết nối bất thường và triển khai biện pháp phòng vệ phù hợp.

## Tổng kết

Hiểu socket là hiểu nền tảng của lập trình mạng, từ đó tiếp cận các mô hình client-server, web server và REST API.
