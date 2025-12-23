## Vì sao cần mô hình mạng?

Khi dữ liệu đi từ máy này sang máy khác, rất nhiều công đoạn xảy ra. Để dễ thiết kế và phân tích, người ta chia quá trình này thành các lớp.

## Mô hình OSI gồm những gì?

OSI là mô hình gồm 7 lớp, từ Physical (vật lý) cho tới Application (ứng dụng). Mỗi lớp chỉ làm một nhiệm vụ cụ thể và không chồng chéo trách nhiệm.

## TCP/IP – mô hình của Internet

TCP/IP là mô hình thực tế đang vận hành Internet. Nó chỉ có 4 lớp và gộp nhiều chức năng của OSI để đơn giản hóa triển khai.


## Ví dụ: Phân tích gói tin HTTP với Wireshark

1. Mở Wireshark và bắt đầu capture trên card mạng.
2. Truy cập một website (ví dụ: http://example.com).
3. Trong Wireshark, lọc theo `http` để xem các gói HTTP.
4. Click vào một gói để xem các lớp: Ethernet (Link), IP (Network), TCP (Transport), HTTP (Application).

*Thực hành này giúp bạn thấy rõ các lớp OSI/TCP-IP trong lưu lượng mạng thực tế.*

## So sánh nhanh

OSI giúp học và phân tích lỗi.
TCP/IP giúp mạng hoạt động ngoài đời thật.

**Kết luận:** OSI để hiểu, TCP/IP để triển khai.