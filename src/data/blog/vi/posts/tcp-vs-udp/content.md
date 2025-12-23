Trong bài này ta xem xét các khác biệt chính giữa TCP và UDP: TCP đảm bảo độ tin cậy, thứ tự, và kiểm soát luồng — phù hợp cho ứng dụng cần truyền tải chính xác (ví dụ HTTP, FTP). UDP là giao thức không kết nối, nhẹ, nhanh, phù hợp cho truyền tải thời gian thực (ví dụ VoIP, streaming) nhưng không đảm bảo thứ tự hay độ tin cậy.

## So sánh nhanh

- TCP: kết nối, kiểm tra lỗi, đảm bảo thứ tự, chậm hơn.
- UDP: không kết nối, không đảm bảo thứ tự, rất nhanh.

## Khi nào dùng?

Chọn TCP cho dữ liệu quan trọng; chọn UDP cho các luồng real-time yêu cầu độ trễ thấp.