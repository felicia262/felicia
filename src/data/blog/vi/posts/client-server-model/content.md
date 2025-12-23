Mô hình client-server là một kiến trúc phân tán cốt lõi, trong đó client gửi yêu cầu dịch vụ và server cung cấp dịch vụ. Dưới đây là mô hình request–response phổ biến, cách quản lý phiên làm việc và các kỹ thuật mở rộng quy mô trong hệ thống thực tế.

## Luồng request–response

1. Client (trình duyệt, ứng dụng) tạo một request (ví dụ: HTTP GET).
2. Request di chuyển qua mạng đến server.
3. Server xử lý logic, truy cập cơ sở dữ liệu và chuẩn bị response.
4. Response được gửi lại cho client và hiển thị cho người dùng.

## Trạng thái và phiên làm việc

Mô hình client-server có thể **stateless** (mỗi request độc lập) hoặc **stateful** (server lưu trạng thái phiên). Thiết kế RESTful ưu tiên server stateless, lưu trạng thái phiên ở phía client (cookie, token) hoặc trong kho lưu trữ chung.

## Các mô hình mở rộng

- Mở rộng dọc: tăng CPU/RAM cho server.
- Mở rộng ngang: thêm nhiều server phía sau load balancer.
- Caching: giảm tải bằng cách cache response (CDN, reverse proxy, cache trong RAM).

## Xử lý lỗi và tăng độ bền

Server có thể là điểm lỗi đơn; giảm thiểu bằng cách dự phòng, kiểm tra sức khỏe, chiến lược retry/backoff và circuit breaker.

## Tóm tắt

Client-server là nền tảng của web hiện đại. Hiểu về quản lý phiên, mô hình mở rộng và kỹ thuật chống lỗi là điều cần thiết để xây dựng dịch vụ vững chắc.