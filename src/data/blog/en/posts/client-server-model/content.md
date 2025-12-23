The client-server model is a core distributed architecture in which clients request services and servers provide them. Below we explore the common request–response pattern, session handling, and scaling techniques used in production systems.

## Request–response flow

1. Client (browser, app) generates a request (e.g., HTTP GET).
2. The request travels through the network to the server.
3. The server processes logic, accesses data stores, and prepares a response.
4. The response is sent back to the client and presented to the user.

## State and sessions

Client-server can be **stateless** (each request independent) or **stateful** (server keeps session). RESTful designs favor stateless servers where session state is stored on the client (cookies, tokens) or in a shared store.

## Scaling patterns

- Vertical scaling: give the server more CPU/RAM.
- Horizontal scaling:add more server instances behind a load balancer.
- Caching:reduce load by caching responses (CDNs, reverse proxies, in-memory caches).

## Failure modes and resilience

Servers can be points of failure; mitigate with redundancy, health checks, retry/backoff strategies, and circuit breakers.

## Summary

Client-server underpins the modern web. Familiarity with session management, scaling patterns, and fault-tolerance techniques is essential for building robust services.
