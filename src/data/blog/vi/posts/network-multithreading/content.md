Trong môi trường server, multithreading (hoặc đa tiến trình) cần được quản lý để phục vụ nhiều kết nối đồng thời mà không làm nghẽn tài nguyên. Bài viết mô tả kỹ thuật như thread pool, async IO, và event-driven architectures.


# Vấn đề đặt ra

Điều gì xảy ra khi 1000 client cùng kết nối vào một server chỉ xử lý tuần tự?

## Các mô hình phổ biến

- **Thread-per-connection:** mỗi kết nối là một thread riêng, đơn giản nhưng tốn tài nguyên.
- **Thread pool:** dùng một nhóm thread cố định để tiết kiệm tài nguyên.
- **Async I/O:** event loop (Node.js, libuv) phù hợp cho nhiều kết nối I/O-bound.
- **Process-based:** nhiều tiến trình OS, phù hợp cho workload CPU-bound hoặc cần cách ly.

## Ví dụ: Node.js Cluster tận dụng đa nhân CPU

```js
const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
	for (let i = 0; i < numCPUs; i++) cluster.fork();
} else {
	http.createServer((req, res) => {
		res.writeHead(200);
		res.end('Xử lý bởi worker ' + process.pid);
	}).listen(3000);
}
```

*Ví dụ này cho thấy cách tận dụng toàn bộ CPU để xử lý nhiều request song song.*

## Rủi ro

Race condition, deadlock và tiêu tốn tài nguyên là những vấn đề cần được kiểm soát.

**Kết luận:** Multithreading mạnh mẽ nhưng không hề đơn giản.