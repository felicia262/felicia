Mạng máy tính là hệ thống các thiết bị kết nối với nhau để trao đổi dữ liệu và chia sẻ tài nguyên. Bài viết này giới thiệu các thành phần cốt lõi, cách dữ liệu di chuyển giữa các máy, và ví dụ thực tế giúp bạn hiểu hoạt động Internet hàng ngày.

## Mạng là gì?

Mạng là tập hợp các thiết bị (máy tính, điện thoại, server, switch, router) kết nối qua dây hoặc không dây. Mạng cho phép giao tiếp, chia sẻ tài nguyên (máy in, lưu trữ), và truy cập dịch vụ tập trung.

## Thành phần chính

**Host:** Điểm cuối như client và server tạo hoặc nhận dữ liệu.
**Switch:** Thiết bị chuyển mạch trong LAN, chuyển frame dựa trên địa chỉ MAC.
**Router:** Định tuyến gói tin giữa các mạng dựa trên IP.
**Cáp / Không dây:** Tầng vật lý truyền tín hiệu (Ethernet, cáp quang, Wi‑Fi).

## Dữ liệu di chuyển như thế nào?

1. Ứng dụng trên client tạo dữ liệu gửi đi (ví dụ: truy vấn web).
2. Dữ liệu được đóng gói qua các tầng (ứng dụng → vận chuyển → mạng → liên kết).
3. NIC gửi frame đến switch; router chuyển tiếp gói tin đến mạng đích.
4. Máy đích nhận và chuyển dữ liệu cho ứng dụng nhận.

## Các phạm vi mạng

**LAN:** Mạng nội bộ gia đình, văn phòng — tốc độ cao, phạm vi nhỏ.
**MAN:** Mạng đô thị cho trường học, thành phố.
**WAN:** Kết nối liên tỉnh, quốc tế; Internet là WAN lớn nhất.

## Ví dụ thực tế

- Truy cập website: tra cứu DNS → kết nối TCP/UDP → luồng HTTP request/response.
- Gửi email: dùng giao thức SMTP và POP/IMAP qua TCP.

## Tóm tắt

Nắm vững kiến thức mạng giúp bạn xử lý sự cố, thiết kế hệ thống mở rộng, và hiểu về hiệu năng, bảo mật. Tiếp theo: tìm hiểu TCP/IP, định tuyến, và các lệnh kiểm tra mạng cơ bản (ping, traceroute, netstat).