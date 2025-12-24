# HTTP và Web Server cơ bản

## Giới thiệu

HTTP (HyperText Transfer Protocol) là giao thức lớp ứng dụng được sử dụng để truyền các tài liệu siêu văn bản trên World Wide Web. HTTP đóng vai trò nền tảng cho các ứng dụng web hiện đại, cho phép client (trình duyệt, ứng dụng) giao tiếp với server thông qua mô hình request–response.

Bài viết này trình bày cấu trúc của HTTP request và response, các header và status code quan trọng, đồng thời minh họa cách xây dựng một web server đơn giản bằng Node.js.

## Cấu trúc HTTP Request

Một HTTP request được gửi từ client đến server bao gồm các thành phần sau:

**Method**  
Xác định hành động mà client muốn thực hiện trên tài nguyên, ví dụ `GET`, `POST`, `PUT`, `DELETE`.

**URL / Path**  
Xác định tài nguyên cụ thể trên server mà client muốn truy cập.

**Headers**  
Chứa các thông tin bổ sung cho request, chẳng hạn như kiểu dữ liệu, xác thực hoặc cơ chế cache.  
Một số header phổ biến gồm `Content-Type`, `Authorization`, `Cache-Control`.

**Body (tùy chọn)**  
Chứa dữ liệu gửi kèm theo request, thường được sử dụng với các phương thức `POST` hoặc `PUT`.

## Cấu trúc HTTP Response

Sau khi xử lý request, server sẽ trả về một HTTP response bao gồm:

**Status Code**  
Cho biết kết quả xử lý của request, ví dụ `200 OK`, `404 Not Found`, `500 Internal Server Error`.

**Headers**  
Cung cấp thông tin về response, chẳng hạn như kiểu dữ liệu trả về, cơ chế cache hoặc cookie.  
Một số header thường gặp là `Content-Type`, `Cache-Control`, `Set-Cookie`.

**Body**  
Nội dung mà server trả về cho client, có thể là HTML, JSON, hình ảnh hoặc các dữ liệu khác.

## Một số đặc điểm quan trọng của HTTP

**Stateless**  
HTTP là giao thức không trạng thái, nghĩa là mỗi request được xử lý độc lập và server không lưu thông tin về các request trước đó của client.

**Caching**  
HTTP hỗ trợ cơ chế cache giúp trình duyệt hoặc proxy lưu trữ response, từ đó giảm tải cho server và cải thiện hiệu năng.

**Bảo mật**  
HTTPS (HTTP over TLS) được sử dụng để mã hóa dữ liệu trao đổi giữa client và server, giúp bảo vệ thông tin khỏi việc nghe lén hoặc sửa đổi trái phép.

## Ví dụ: Web Server đơn giản với Node.js

Ví dụ sau minh họa cách tạo một HTTP server cơ bản bằng Node.js. Server này lắng nghe request và trả về một chuỗi văn bản cho client.

```js
const http = require('http');

http.createServer((req, res) => {
	res.writeHead(200, { 'Content-Type': 'text/plain' });
	res.end('Hello world');
}).listen(3000);
```

Server trên sẽ phản hồi mọi request bằng nội dung “Hello world”, giúp minh họa rõ cơ chế request–response của HTTP.

## Liên hệ với các khái niệm mạng

HTTP hoạt động trên nền TCP, thừa hưởng các đặc tính như độ tin cậy và đảm bảo thứ tự gói tin. Việc hiểu rõ HTTP giúp người học nắm được cách các ứng dụng web giao tiếp và là bước nền quan trọng trước khi tiếp cận các kiến trúc như RESTful API hoặc các hệ thống web phức tạp hơn.

## Tổng kết

HTTP là giao thức cốt lõi của web, cung cấp cơ chế giao tiếp đơn giản nhưng mạnh mẽ giữa client và server. Việc nắm vững cấu trúc request–response và cách xây dựng web server cơ bản giúp người học hiểu sâu hơn cách hoạt động của các ứng dụng web hiện đại.