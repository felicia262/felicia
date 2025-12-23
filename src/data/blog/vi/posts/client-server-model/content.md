Client-Server là mô hình phân tán trong đó các nhiệm vụ được phân chia giữa Client (người sử dụng) và Server (cung cấp dịch vụ). Bài viết giải thích luồng request-response, quản lý phiên, và các mô hình mở rộng (load balancing, caching).

## Một request diễn ra như thế nào?

Người dùng nhập URL. Trình duyệt gửi request. Server xử lý. Response được trả về. Trình duyệt hiển thị kết quả.

## Client và Server

Client là nơi người dùng thao tác. Server là nơi xử lý dữ liệu và logic nghiệp vụ.

## Ưu và nhược điểm

Mô hình này dễ quản lý và mở rộng nhưng server có thể trở thành điểm nghẽn.

**Kết luận:** Client-Server là nền móng của web hiện đại.