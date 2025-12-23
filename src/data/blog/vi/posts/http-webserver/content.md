
HTTP là giao thức lớp ứng dụng để truyền các tài liệu siêu văn bản. Bài viết hướng dẫn cấu trúc request/response, headers, status codes, và cách viết một web server đơn giản (ví dụ dùng Node.js hoặc Python).

## Cấu trúc HTTP Request

Một HTTP request gửi từ client đến server thường gồm:

**Method**  
	Định nghĩa hành động: `GET`, `POST`, `PUT`, `DELETE`, ...

**URL / Path**  
	Xác định tài nguyên trên server.

**Headers**  
	Thông tin bổ sung:  
	`Content-Type`, `Authorization`, `Cache-Control`.

**Body (tùy chọn)**  
	Dữ liệu gửi kèm (thường với POST hoặc PUT).

## Cấu trúc HTTP Response

Server trả về:

**Status Code**  
	Kết quả xử lý:  
	`200 OK`, `404 Not Found`, `500 Internal Server Error`.

**Headers**  
	Thông tin về response:  
	`Content-Type`, `Cache-Control`, `Set-Cookie`.

**Body**  
	Nội dung trả về: HTML, JSON, ảnh, ...

## Một số hành vi cơ bản của HTTP

**Stateless**  
	Mỗi request độc lập, server không lưu trạng thái client.

**Caching**  
	Trình duyệt hoặc proxy có thể cache response để tăng hiệu năng.

**Bảo mật**  
	HTTPS (HTTP over TLS) mã hóa dữ liệu, đảm bảo an toàn.

## Ví dụ: Web Server đơn giản với Node.js

```js
const http = require('http');

http.createServer((req, res) => {
	res.writeHead(200, { 'Content-Type': 'text/plain' });
	res.end('Hello world');
}).listen(3000);
```

*Ví dụ này tạo một HTTP server trả về "Hello world" cho mọi request.*