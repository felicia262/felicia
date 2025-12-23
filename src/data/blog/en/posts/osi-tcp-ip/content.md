## Why use network models?

Network models give us an organized way to think about the many steps data takes from one host to another. By separating responsibilities into layers, we can build, test and debug systems more effectively.

## The OSI model (conceptual)

OSI defines seven layers: Physical, Data Link, Network, Transport, Session, Presentation, and Application. It is a learning tool that clarifies responsibilities such as framing, routing, and application semantics.

## TCP/IP — the real-world model

TCP/IP is the suite used on the Internet. It combines responsibilities into four layers (Link, Internet, Transport, Application) and directly maps to widely-used protocols like IP, TCP, UDP and HTTP.

## Where they differ and why it matters

**OSI:** Great for teaching and diagnosing where a problem sits (e.g. physical vs. transport).
**TCP/IP:** Practical, implemented, and the model you'll use when troubleshooting real networks.

## Practical mapping

- Ethernet / Wi‑Fi → Link / Physical + Data Link
- IP → Network / Internet layer
- TCP / UDP → Transport layer
- HTTP / DNS / SSH → Application layer


## Example: Inspecting HTTP Traffic with Wireshark

1. Start Wireshark and begin capturing on your network interface.
2. Open a browser and visit a website (e.g., http://example.com).
3. In Wireshark, filter by `http` to see HTTP packets.
4. Click a packet to view its layers: Ethernet (Link), IP (Network), TCP (Transport), HTTP (Application).

*This hands-on shows how OSI/TCP-IP layers appear in real network traffic.*

## Quick summary

Use OSI as a study guide; use TCP/IP as the basis for real implementations and troubleshooting. Familiarity with both helps you reason about network problems and design robust systems.
TCP/IP is the model used in production networks.

**Conclusion:** Use OSI to understand concepts and TCP/IP to implement systems.
