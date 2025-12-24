# HTTP and Basic Web Server

## Introduction

HTTP (HyperText Transfer Protocol) is an application-layer protocol used to transfer hypertext documents on the World Wide Web. It serves as the foundation of modern web applications, enabling clients (such as browsers or applications) to communicate with servers through a request–response model.

This article presents the structure of HTTP requests and responses, important headers and status codes, and demonstrates how to build a simple web server using Node.js.

## HTTP Request Structure

An HTTP request sent from a client to a server consists of the following components:

**Method**  
Defines the action the client wants to perform on a resource, such as `GET`, `POST`, `PUT`, or `DELETE`.

**URL / Path**  
Identifies the specific resource on the server that the client wants to access.

**Headers**  
Contain additional information about the request, such as data format, authentication, or caching behavior.  
Common headers include `Content-Type`, `Authorization`, and `Cache-Control`.

**Body (optional)**  
Contains data sent along with the request, typically used with `POST` or `PUT` methods.

## HTTP Response Structure

After processing a request, the server returns an HTTP response that includes:

**Status Code**  
Indicates the result of the request processing, such as `200 OK`, `404 Not Found`, or `500 Internal Server Error`.

**Headers**  
Provide metadata about the response, such as returned content type, caching policy, or cookies.  
Common response headers include `Content-Type`, `Cache-Control`, and `Set-Cookie`.

**Body**  
The content returned to the client, which may be HTML, JSON, images, or other data formats.

## Key Characteristics of HTTP

**Stateless**  
HTTP is a stateless protocol, meaning each request is processed independently and the server does not retain information about previous client requests.

**Caching**  
HTTP supports caching mechanisms that allow browsers or proxies to store responses, reducing server load and improving performance.

**Security**  
HTTPS (HTTP over TLS) encrypts data exchanged between the client and server, protecting information from eavesdropping and unauthorized modification.

## Example: Simple Web Server with Node.js

The following example demonstrates how to create a basic HTTP server using Node.js. The server listens for incoming requests and returns a plain text response.

```js
const http = require('http');

http.createServer((req, res) => {
	res.writeHead(200, { 'Content-Type': 'text/plain' });
	res.end('Hello world');
}).listen(3000);
```

This server responds to all requests with the message “Hello world,” clearly illustrating the HTTP request–response mechanism.

## Relation to Networking Concepts

HTTP operates on top of TCP, inheriting properties such as reliability and ordered data delivery. Understanding HTTP helps learners grasp how web applications communicate and serves as an essential foundation before exploring architectures such as RESTful APIs or more complex web systems.

## Summary

HTTP is the core protocol of the web, providing a simple yet powerful communication mechanism between clients and servers. Mastering request–response structures and building basic web servers enables learners to gain deeper insight into how modern web applications function.