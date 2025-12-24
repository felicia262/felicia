# Mô hình mạng OSI và TCP/IP

## Vì sao cần mô hình mạng?

Khi dữ liệu được truyền từ máy này sang máy khác, quá trình đó không chỉ đơn thuần là gửi và nhận thông tin mà bao gồm rất nhiều công đoạn như mã hóa tín hiệu, định tuyến, kiểm soát lỗi và quản lý phiên giao tiếp.  

Để việc thiết kế, triển khai và phân tích hệ thống mạng trở nên dễ dàng hơn, các nhà nghiên cứu đã chia toàn bộ quá trình truyền thông thành các lớp logic. Mỗi lớp đảm nhiệm một chức năng cụ thể, giúp việc phát triển và khắc phục sự cố mạng trở nên rõ ràng và có hệ thống.

## Mô hình OSI gồm những gì?

OSI (Open Systems Interconnection) là mô hình tham chiếu gồm 7 lớp, mô tả cách dữ liệu được truyền từ ứng dụng của người dùng đến thiết bị đích thông qua mạng.

Bảy lớp của mô hình OSI bao gồm:

**Physical (Vật lý):** Truyền tín hiệu điện, quang hoặc sóng vô tuyến qua môi trường vật lý như cáp mạng hoặc Wi-Fi.

**Data Link (Liên kết dữ liệu):** Đóng gói dữ liệu thành frame và truyền trong mạng cục bộ dựa trên địa chỉ MAC.

**Network (Mạng):** Định tuyến gói tin giữa các mạng khác nhau dựa trên địa chỉ IP.

**Transport (Vận chuyển):** Đảm bảo việc truyền dữ liệu đầu cuối, kiểm soát lỗi và luồng dữ liệu (TCP, UDP).

**Session (Phiên):** Quản lý và duy trì phiên giao tiếp giữa hai thiết bị.

**Presentation (Trình diễn):** Chịu trách nhiệm mã hóa, nén và định dạng dữ liệu.

**Application (Ứng dụng):** Cung cấp giao diện cho các ứng dụng người dùng như web, email, FTP.

Mô hình OSI mang tính học thuật cao, được sử dụng rộng rãi trong giảng dạy và phân tích sự cố mạng.

## TCP/IP – mô hình của Internet

TCP/IP là mô hình mạng thực tế đang được sử dụng để vận hành Internet ngày nay. Khác với OSI, TCP/IP được thiết kế hướng đến triển khai thực tế, do đó cấu trúc đơn giản hơn và chỉ bao gồm 4 lớp.

Bốn lớp của mô hình TCP/IP bao gồm:

**Link:** Kết hợp chức năng của Physical và Data Link trong OSI.

**Internet:** Tương ứng với lớp Network, chịu trách nhiệm định tuyến IP.

**Transport:** Đảm bảo truyền dữ liệu giữa các tiến trình (TCP, UDP).

**Application:** Bao gồm các giao thức ứng dụng như HTTP, FTP, SMTP, DNS.

TCP/IP không phân tách rõ ràng các lớp như OSI, nhưng lại phù hợp cho việc triển khai và vận hành hệ thống mạng thực tế.

## Ví dụ: Phân tích gói tin HTTP với Wireshark

Wireshark là công cụ phổ biến dùng để phân tích lưu lượng mạng. Thông qua Wireshark, người học có thể quan sát trực tiếp cách các lớp mạng hoạt động trong thực tế.

Các bước thực hành cơ bản:

1. Mở Wireshark và bắt đầu capture trên card mạng đang sử dụng.
2. Truy cập một website, ví dụ http://neverssl.com.
3. Trong Wireshark, sử dụng bộ lọc `http` để hiển thị các gói tin HTTP.
4. Chọn một gói tin bất kỳ để quan sát các lớp giao thức bao gồm Ethernet (Link), IP (Network), TCP (Transport) và HTTP (Application).

Thực hành này giúp người học trực quan hóa mối liên hệ giữa mô hình OSI và TCP/IP thông qua lưu lượng mạng thực tế.

## So sánh nhanh giữa OSI và TCP/IP

Mô hình OSI phù hợp cho việc học tập, nghiên cứu và phân tích lỗi mạng do có cấu trúc rõ ràng và chi tiết.

Mô hình TCP/IP được sử dụng rộng rãi trong thực tế vì đơn giản, hiệu quả và phù hợp với kiến trúc Internet.

**Kết luận:** Mô hình OSI giúp hiểu bản chất hoạt động của mạng, trong khi TCP/IP là mô hình được sử dụng để triển khai và vận hành các hệ thống mạng ngoài thực tế.

## Liên hệ với An ninh mạng

Trong lĩnh vực an ninh mạng, mô hình OSI thường được sử dụng để phân loại các hình thức tấn công. Ví dụ, tấn công nghe lén thường liên quan đến lớp Physical hoặc Data Link, trong khi tấn công web chủ yếu xảy ra ở lớp Application.

Việc hiểu rõ từng lớp giúp người học xác định vị trí xảy ra sự cố, từ đó lựa chọn biện pháp phòng thủ và kiểm soát an ninh phù hợp.
