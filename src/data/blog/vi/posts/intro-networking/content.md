# Giới thiệu về Mạng máy tính

## Giới thiệu

Mạng máy tính là hệ thống các thiết bị kết nối với nhau để trao đổi dữ liệu và chia sẻ tài nguyên. Trong bối cảnh công nghệ thông tin hiện đại, mạng máy tính đóng vai trò nền tảng cho hầu hết các dịch vụ như truy cập Internet, hệ thống web, email, điện toán đám mây và các ứng dụng phân tán.

Bài viết này giới thiệu các thành phần cốt lõi, cách dữ liệu di chuyển giữa các máy và các ví dụ thực tế nhằm giúp người học hiểu rõ hoạt động của Internet trong đời sống hàng ngày.

## Mạng là gì?

Mạng máy tính là tập hợp các thiết bị như máy tính, điện thoại thông minh, máy chủ (server), switch và router được kết nối với nhau thông qua các phương tiện truyền dẫn có dây hoặc không dây.

Mạng cho phép các thiết bị giao tiếp, chia sẻ tài nguyên (ví dụ như máy in, không gian lưu trữ) và truy cập các dịch vụ tập trung một cách hiệu quả.

## Thành phần chính

**Host:** Là các điểm cuối như client và server, có nhiệm vụ tạo, gửi hoặc nhận dữ liệu trong mạng.

**Switch:** Là thiết bị chuyển mạch trong mạng LAN, thực hiện chuyển tiếp frame dựa trên địa chỉ MAC nhằm tối ưu tốc độ truyền dữ liệu trong mạng nội bộ.

**Router:** Là thiết bị định tuyến gói tin giữa các mạng khác nhau dựa trên địa chỉ IP, đóng vai trò kết nối các mạng LAN với WAN hoặc Internet.

**Cáp / Không dây:** Thuộc tầng vật lý, chịu trách nhiệm truyền tín hiệu giữa các thiết bị. Các công nghệ phổ biến bao gồm Ethernet, cáp quang và Wi-Fi.

## Dữ liệu di chuyển như thế nào?

Quá trình truyền dữ liệu trong mạng có thể được mô tả theo các bước sau:

1. Ứng dụng trên thiết bị client tạo dữ liệu gửi đi, ví dụ như một yêu cầu truy cập trang web.
2. Dữ liệu được đóng gói qua các tầng mạng, từ tầng ứng dụng xuống các tầng vận chuyển, mạng và liên kết dữ liệu.
3. Card mạng (NIC) gửi frame đến switch; router tiếp tục chuyển tiếp các gói tin đến mạng đích thông qua quá trình định tuyến.
4. Thiết bị đích nhận dữ liệu, giải đóng gói và chuyển cho ứng dụng tương ứng để xử lý.

## Các phạm vi mạng

**LAN (Local Area Network):** Là mạng cục bộ trong gia đình hoặc văn phòng, có tốc độ cao và phạm vi nhỏ.

**MAN (Metropolitan Area Network):** Là mạng phạm vi đô thị, thường được triển khai cho trường học, khu công nghiệp hoặc thành phố.

**WAN (Wide Area Network):** Là mạng diện rộng kết nối các khu vực địa lý xa nhau; Internet là ví dụ tiêu biểu nhất của WAN.

## Ví dụ thực tế

**Truy cập website:** Thiết bị thực hiện tra cứu DNS để xác định địa chỉ IP của máy chủ, sau đó thiết lập kết nối TCP hoặc UDP và trao đổi dữ liệu thông qua các gói HTTP request và response.

**Gửi email:** Việc gửi và nhận email sử dụng các giao thức SMTP, POP hoặc IMAP, chủ yếu hoạt động trên TCP nhằm đảm bảo độ tin cậy của dữ liệu.

## Liên hệ với An ninh mạng

Việc hiểu rõ cấu trúc và cơ chế hoạt động của mạng máy tính là nền tảng quan trọng trong lĩnh vực an ninh mạng. Các lỗ hổng bảo mật thường xuất phát từ việc cấu hình mạng không an toàn, thiết kế hệ thống chưa hợp lý hoặc lập trình mạng thiếu kiểm soát dữ liệu đầu vào.

Nắm vững kiến thức mạng giúp người học phân tích các hình thức tấn công phổ biến như nghe lén dữ liệu, tấn công từ chối dịch vụ (DoS) và giả mạo địa chỉ, từ đó đề xuất các biện pháp phòng thủ phù hợp.

## Tổng kết

Kiến thức nền tảng về mạng máy tính giúp người học hiểu rõ cách dữ liệu được truyền tải, cách các thiết bị tương tác và cách các dịch vụ Internet vận hành. Đây là cơ sở quan trọng để tiếp cận các nội dung nâng cao như giao thức TCP/IP, định tuyến mạng và các công cụ kiểm tra, giám sát mạng cơ bản như `ping`, `traceroute` và `netstat`.
