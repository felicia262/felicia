Trong bài này ta xem xét các khác biệt chính giữa TCP và UDP: TCP đảm bảo độ tin cậy, thứ tự, và kiểm soát luồng — phù hợp cho ứng dụng cần truyền tải chính xác (ví dụ HTTP, FTP). UDP là giao thức không kết nối, nhẹ, nhanh, phù hợp cho truyền tải thời gian thực (ví dụ VoIP, streaming) nhưng không đảm bảo thứ tự hay độ tin cậy.


## So sánh nhanh

- **TCP:** kết nối, tin cậy, đảm bảo thứ tự, kiểm soát tắc nghẽn, phù hợp cho dữ liệu quan trọng (HTTP, FTP).
- **UDP:** không kết nối, nhẹ, không đảm bảo thứ tự, phù hợp truyền tải real-time (VoIP, streaming).

## Ví dụ: UDP Echo Server (Node.js)

```js
const dgram = require('dgram');
const server = dgram.createSocket('udp4');
server.on('message', (msg, rinfo) => {
	server.send(msg, rinfo.port, rinfo.address);
});
server.bind(41234);
```

*UDP server này nhận message và gửi lại cho client.*

## Khi nào dùng?

Chọn TCP cho dữ liệu quan trọng; chọn UDP cho các luồng real-time yêu cầu độ trễ thấp.