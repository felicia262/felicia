## Sockets are like phone calls

For two people to speak, both need a phone number and an open line. Sockets provide a similar endpoint for processes: an address (IP) and a port.

## What is a socket?

A socket is an API endpoint that programs use to send or receive data over the network. Operating systems expose sockets via libraries (Berkeley sockets in Unix, Winsock on Windows).

## Typical server flow (TCP)

1. Server creates a socket and binds it to an address and port.
2. Server listens for incoming connections.
3. Client connects to the server's address and port.
4. Server accepts the connection and exchanges data with the client.


Example (Node.js, simplified):

```js
const net = require('net');
const server = net.createServer(socket => {
	socket.on('data', d => socket.write('Echo: ' + d));
});
server.listen(3000);
```

Example: TCP Client (Node.js)

```js
const net = require('net');
const client = net.createConnection({ port: 3000 }, () => {
	console.log('Connected to server!');
	client.write('Hello server!');
});
client.on('data', data => {
	console.log('Received:', data.toString());
	client.end();
});
client.on('end', () => {
	console.log('Disconnected from server');
});
```

*This client connects to the TCP server and exchanges a message.*

## UDP vs TCP sockets

**TCP sockets:** connection-oriented, reliable, ordered delivery.
**UDP sockets:** connectionless, lower overhead, used for streaming or real-time apps.

## Why sockets matter

Sockets are the primitive building blocks of networked applications — web servers, chat apps, multiplayer games, and microservices all use sockets (directly or via higher-level libraries).

**Conclusion:** Understanding sockets and how the OS exposes them is key to building reliable networked systems.
