# HTTP Fundamentals: How the Web Communicates

**HTTP (Hypertext Transfer Protocol)** is the core application-layer protocol of the Web. It defines how clients and servers communicate through a **request–response** model. This article walks through HTTP’s structure, common methods and status codes, and a minimal server example.

---

## HTTP Request Structure

An HTTP request sent from client to server typically includes:

**Method**  
  Defines the action to perform: `GET`, `POST`, `PUT`, `DELETE`, …

**URL / Path**  
  Identifies the target resource on the server.

**Headers**  
  Metadata describing the request, such as:  
  `Content-Type`, `Authorization`, `Cache-Control`.

**Body (optional)**  
  Data payload, usually included with `POST` or `PUT`.

---

## HTTP Response Structure

A server responds with:

**Status Code**  
  Indicates the result of the request:  
  `200 OK`, `404 Not Found`, `500 Internal Server Error`.

**Headers**  
  Metadata about the response, e.g.:  
  `Content-Type`, `Cache-Control`, `Set-Cookie`.

 **Body**  
  The returned content: HTML, JSON, images, or other data.

---

## Fundamental HTTP Behaviors

**Statelessness**  
  Each request is handled independently; the server does not retain client state by default.

**Caching**  
  Responses can be cached by browsers or intermediary proxies to improve performance.

**Security**  
  HTTPS (HTTP over TLS) encrypts data, ensuring confidentiality and integrity.

---

## Simple HTTP Server Example (Node.js)

```js
const http = require('http');

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello world');
}).listen(3000);

