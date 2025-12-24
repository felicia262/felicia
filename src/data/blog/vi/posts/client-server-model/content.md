# Mô hình Client–Server

## Giới thiệu

Mô hình client–server là một kiến trúc phân tán cốt lõi trong các hệ thống mạng và web hiện đại. Trong mô hình này, client gửi yêu cầu dịch vụ và server chịu trách nhiệm xử lý cũng như cung cấp phản hồi tương ứng. Hầu hết các ứng dụng Internet ngày nay, từ website, API cho đến ứng dụng di động, đều dựa trên kiến trúc client–server.

Bài viết này trình bày luồng request–response, cách quản lý trạng thái và phiên làm việc, cũng như các kỹ thuật mở rộng quy mô và tăng độ bền của hệ thống trong thực tế.

## Luồng Request–Response

Quá trình giao tiếp giữa client và server thường diễn ra theo các bước sau:

1. Client, chẳng hạn như trình duyệt hoặc ứng dụng, tạo một request (ví dụ HTTP GET hoặc POST).
2. Request được truyền qua mạng tới server.
3. Server xử lý logic nghiệp vụ, có thể truy cập cơ sở dữ liệu hoặc các dịch vụ khác.
4. Server tạo response và gửi lại cho client để hiển thị cho người dùng.

Mô hình request–response này giúp tách biệt rõ ràng giữa phía giao diện người dùng và phía xử lý dữ liệu.

## Trạng thái và Phiên làm việc

Hệ thống client–server có thể được thiết kế theo hai hướng:

**Stateless**  
Mỗi request được xử lý độc lập, server không lưu thông tin về các request trước đó của client. Thiết kế RESTful thường ưu tiên mô hình này để dễ mở rộng và giảm phụ thuộc trạng thái.

**Stateful**  
Server lưu trạng thái phiên làm việc của client, chẳng hạn như thông tin đăng nhập hoặc dữ liệu tạm thời. Trạng thái có thể được lưu trong bộ nhớ server hoặc trong các kho lưu trữ chung như Redis.

Trong thực tế, nhiều hệ thống kết hợp cả hai cách bằng cách lưu trạng thái phía client thông qua cookie hoặc token (JWT).

## Các mô hình mở rộng hệ thống

Để đáp ứng số lượng người dùng lớn, hệ thống client–server cần được mở rộng hợp lý:

**Mở rộng dọc**  
Tăng tài nguyên cho một server duy nhất, như CPU hoặc RAM. Cách này đơn giản nhưng có giới hạn vật lý.

**Mở rộng ngang**  
Triển khai nhiều server song song phía sau một bộ cân bằng tải (load balancer). Đây là phương pháp phổ biến trong các hệ thống web lớn.

**Caching**  
Sử dụng cache để giảm tải cho server, ví dụ cache trong RAM, reverse proxy hoặc CDN để lưu response tĩnh.

## Xử lý lỗi và tăng độ bền

Server có thể trở thành điểm lỗi đơn (single point of failure). Để giảm thiểu rủi ro, hệ thống thường áp dụng các kỹ thuật như:

- Kiểm tra sức khỏe server (health check).  
- Triển khai server dự phòng.  
- Cơ chế retry và backoff khi request thất bại.  
- Sử dụng circuit breaker để tránh lan truyền lỗi.

Những kỹ thuật này giúp hệ thống duy trì hoạt động ổn định ngay cả khi một phần gặp sự cố.

## Tổng kết

Mô hình client–server là nền tảng của các hệ thống web hiện đại. Việc hiểu rõ luồng request–response, quản lý phiên làm việc và các chiến lược mở rộng giúp người học thiết kế và triển khai các dịch vụ mạng có khả năng mở rộng, ổn định và đáng tin cậy.
