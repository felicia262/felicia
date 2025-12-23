REST không phải là một giao thức mà là một phong cách kiến trúc. Bài này giải thích các nguyên tắc RESTful, HTTP verbs, status codes và cách thiết kế endpoint hợp lý.

## Nguyên tắc cốt lõi

**Tài nguyên:** mô hình hóa các thực thể thành tài nguyên với URL duy nhất.
**HTTP verbs:** dùng đúng ý nghĩa (GET để đọc, POST để tạo, PUT/PATCH để cập nhật, DELETE để xóa).
**Stateless:** mỗi request chứa đủ thông tin, server không lưu trạng thái client giữa các lần gọi.

## Mẹo thiết kế

- Dùng danh từ cho endpoint (ví dụ: `/users/123/orders`).
- Trả về status code phù hợp (201 Created khi tạo mới, 204 No Content khi xóa thành công).
- Phiên bản hóa API (ví dụ: `/v1/`) để dễ mở rộng mà không phá vỡ hệ thống cũ.

## Bảo mật và hiệu năng

- Dùng HTTPS để mã hóa.
- Hỗ trợ phân trang, lọc dữ liệu để tránh trả về quá nhiều.

## Ví dụ: RESTful API đơn giản với Express

```js
const express = require('express');
const app = express();
app.use(express.json());

let users = [{ id: 1, name: 'Alice' }];

// Lấy tất cả user
app.get('/users', (req, res) => res.json(users));

// Lấy user theo ID
app.get('/users/:id', (req, res) => {
	const user = users.find(u => u.id == req.params.id);
	if (user) res.json(user);
	else res.status(404).json({ error: 'Không tìm thấy user' });
});

// Tạo user mới
app.post('/users', (req, res) => {
	const newUser = { id: Date.now(), ...req.body };
	users.push(newUser);
	res.status(201).json(newUser);
});

app.listen(3000, () => console.log('API chạy ở cổng 3000'));
```

*Ví dụ này minh họa cách xây dựng RESTful API đơn giản quản lý user.*

## Tổng kết

Thiết kế RESTful nhấn mạnh sự rõ ràng, dễ dự đoán và tận dụng tối đa HTTP. Nhiều hệ thống hiện đại hưởng lợi từ REST, nhưng đôi khi GraphQL hoặc gRPC sẽ phù hợp hơn.