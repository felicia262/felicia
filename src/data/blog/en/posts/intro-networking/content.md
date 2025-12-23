Computer networks are systems of interconnected devices that exchange data and share resources. This article introduces the core building blocks, the way data flows between hosts, and practical examples so you can understand how everyday Internet activities work.

## What is a network?

A network is a collection of devices (computers, phones, servers, switches, routers) connected using physical or wireless media. Networks enable communication, resource sharing (printers, storage), and access to centralized services.

## Key components

**Hosts:** Endpoints such as clients and servers that generate or consume data.
**Switches:** Local devices that forward frames inside a LAN based on MAC addresses.
**Routers:** Devices that forward packets across networks using IP routing.
**Cables / Wireless:** The physical layer carrying signals (Ethernet, fiber, Wi‑Fi).

## How data moves (brief)

1. An application on the client creates data to send (e.g., a web request).
2. Data is encapsulated through layers (application → transport → network → link).
3. The NIC transmits frames to the local switch; routers forward packets towards the destination network.
4. The destination host decapsulates and hands data to the receiving application.

## Network scopes

**LAN (Local Area Network):** Home, office or lab networks — high speed, limited area.
**MAN (Metropolitan Area Network):** City-level networks for campuses or municipalities.
**WAN (Wide Area Network):** Connects cities and countries; the Internet is the largest WAN.

## Practical examples

- Visiting a website: DNS lookup → TCP/UDP connection → HTTP request/response flow.
- Sending an email: SMTP and POP/IMAP protocols over TCP.

## Summary

Understanding networking basics helps you debug connectivity issues, design scalable systems, and reason about performance and security. Next steps: learn TCP/IP internals, routing, and basic network troubleshooting commands (ping, traceroute, netstat).
