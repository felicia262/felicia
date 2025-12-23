
This article examines key differences between TCP and UDP and helps you choose the right transport protocol for your application.

## TCP at a glance

TCP (Transmission Control Protocol) provides a reliable, ordered, and congestion-aware byte stream. It establishes a connection (three-way handshake), performs retransmissions, and guarantees delivery order.

Use TCP for: HTTP, database replication, file transfer — any case where correctness matters.

## UDP at a glance

UDP (User Datagram Protocol) is connectionless and sends discrete datagrams with minimal overhead. It does not guarantee delivery, ordering, or duplicate suppression.

Use UDP for: live audio/video streaming, VoIP, DNS queries, or applications that implement their own recovery and prioritization.

## Quick comparison

**TCP:** connection-oriented, reliable, ordered, heavier; good for correctness.
**UDP:** connectionless, low-latency, lightweight, no built-in reliability; good for real-time data.


## Example: UDP Echo Server (Node.js)

```js
const dgram = require('dgram');
const server = dgram.createSocket('udp4');
server.on('message', (msg, rinfo) => {
	server.send(msg, rinfo.port, rinfo.address);
});
server.bind(41234);
```

*This UDP server echoes any message it receives.*

## Practical tips

- Prefer TCP for transactional or stateful services.
- Consider UDP when latency is critical and occasional loss is acceptable; combine with FEC or application-level retransmission if needed.

**Summary:** Choose TCP when you need reliability; choose UDP when you need speed and low latency and can tolerate packet loss.
