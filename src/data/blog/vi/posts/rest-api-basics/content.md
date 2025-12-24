# RESTful API và thiết kế dịch vụ web

## Giới thiệu

REST (Representational State Transfer) không phải là một giao thức mà là một phong cách kiến trúc dùng để thiết kế các dịch vụ web. REST tận dụng trực tiếp các đặc điểm của giao thức HTTP để xây dựng hệ thống API đơn giản, dễ mở rộng và dễ bảo trì.

Bài viết này trình bày các nguyên tắc RESTful, cách sử dụng HTTP verbs, status codes và các lưu ý khi thiết kế endpoint cho API.

## Nguyên tắc cốt lõi của REST

REST dựa trên một số nguyên tắc thiết kế quan trọng nhằm đảm bảo hệ thống hoạt động hiệu quả và nhất quán.

**Tài nguyên (Resource):**  
Các thực thể trong hệ thống được mô hình hóa thành tài nguyên và được định danh duy nhất bằng URL, ví dụ như người dùng, đơn hàng hoặc sản phẩm.

**HTTP Verbs:**  
REST sử dụng các phương thức HTTP đúng với ý nghĩa của chúng, chẳng hạn GET để đọc dữ liệu, POST để tạo mới, PUT hoặc PATCH để cập nhật và DELETE để xóa tài nguyên.

**Stateless:**  
Mỗi request phải chứa đầy đủ thông tin cần thiết để server xử lý. Server không lưu trạng thái của client giữa các lần gọi, giúp hệ thống dễ mở rộng và cân bằng tải.

## Thiết kế endpoint RESTful

Khi thiết kế API theo phong cách REST, endpoint cần rõ ràng và dễ hiểu.

Endpoint nên sử dụng danh từ thay vì động từ, ví dụ `/users/123/orders` để biểu diễn các tài nguyên và mối quan hệ giữa chúng.

API nên trả về status code HTTP phù hợp với kết quả xử lý, ví dụ 201 Created khi tạo mới tài nguyên thành công hoặc 204 No Content khi xóa dữ liệu mà không cần trả về nội dung.

Việc phiên bản hóa API, chẳng hạn `/v1/`, giúp mở rộng hệ thống trong tương lai mà không ảnh hưởng đến các client cũ.

## Bảo mật và hiệu năng

Trong các hệ thống RESTful thực tế, bảo mật và hiệu năng là hai yếu tố quan trọng cần được xem xét.

Sử dụng HTTPS giúp mã hóa dữ liệu truyền trên mạng, bảo vệ thông tin khỏi bị nghe lén hoặc thay đổi trái phép.

Đối với các API trả về tập dữ liệu lớn, cần hỗ trợ các cơ chế phân trang, lọc và giới hạn số lượng bản ghi để giảm tải cho server và cải thiện hiệu năng.

## Ví dụ: RESTful API đơn giản với Express

Ví dụ dưới đây minh họa cách xây dựng một RESTful API cơ bản để quản lý người dùng bằng Node.js và Express.

```js
const express = require('express');
const app = express();

app.use(express.json());

let users = [{ id: 1, name: 'Alice' }];

app.get('/users', (req, res) => {
	res.json(users);
});

app.get('/users/:id', (req, res) => {
	const user = users.find(u => u.id == req.params.id);
	if (user) {
		res.json(user);
	} else {
		res.status(404).json({ error: 'Không tìm thấy user' });
	}
});

app.post('/users', (req, res) => {
	const newUser = { id: Date.now(), ...req.body };
	users.push(newUser);
	res.status(201).json(newUser);
});

app.listen(3000, () => {
	console.log('RESTful API đang chạy tại cổng 3000');
});
```

Ví dụ này minh họa cách xây dựng API RESTful đơn giản, sử dụng đúng HTTP verbs và status code để quản lý tài nguyên người dùng.

## Liên hệ với An ninh mạng

Trong lĩnh vực an ninh mạng, API RESTful thường là mục tiêu của các cuộc tấn công như injection, lộ dữ liệu hoặc truy cập trái phép. Việc thiết kế API rõ ràng, kiểm soát đầu vào và sử dụng các cơ chế xác thực, phân quyền là yếu tố quan trọng để bảo vệ hệ thống.

## Tổng kết

Thiết kế RESTful nhấn mạnh sự rõ ràng, dễ dự đoán và tận dụng tối đa các đặc điểm của giao thức HTTP. REST phù hợp với nhiều hệ thống web hiện đại, tuy nhiên trong một số trường hợp đặc thù, các kiến trúc khác như GraphQL hoặc gRPC có thể mang lại hiệu quả tốt hơn.