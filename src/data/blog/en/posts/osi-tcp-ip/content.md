# OSI and TCP/IP Network Models

## Why Do We Need Network Models?

When data is transmitted from one device to another, the process involves much more than simply sending and receiving information. It includes signal encoding, routing, error control, and session management.

To make network design, implementation, and troubleshooting easier, researchers divided the communication process into logical layers. Each layer is responsible for a specific function, making network development and fault analysis more structured and systematic.

## The OSI Model

OSI (Open Systems Interconnection) is a reference model consisting of seven layers that describe how data travels from a user application to a destination device across a network.

The seven layers of the OSI model are:

**Physical:**  
Transmits electrical, optical, or radio signals over physical media such as network cables or Wi-Fi.

**Data Link:**  
Encapsulates data into frames and delivers them within a local network based on MAC addresses.

**Network:**  
Routes packets between different networks using IP addresses.

**Transport:**  
Provides end-to-end data delivery, including error control and flow control (TCP, UDP).

**Session:**  
Manages and maintains communication sessions between two devices.

**Presentation:**  
Handles data encoding, compression, and formatting.

**Application:**  
Provides interfaces for user applications such as web services, email, and FTP.

The OSI model is highly academic and is widely used for teaching and network troubleshooting.

## TCP/IP – The Model of the Internet

TCP/IP is the practical networking model used to operate today’s Internet. Unlike OSI, TCP/IP was designed with real-world implementation in mind, resulting in a simpler structure with only four layers.

The four layers of the TCP/IP model are:

**Link:**  
Combines the functionality of the Physical and Data Link layers in OSI.

**Internet:**  
Corresponds to the Network layer and is responsible for IP routing.

**Transport:**  
Ensures data transmission between processes (TCP, UDP).

**Application:**  
Includes application-level protocols such as HTTP, FTP, SMTP, and DNS.

TCP/IP does not strictly separate layers like OSI, but it is more suitable for deploying and operating real-world network systems.

## Example: Analyzing HTTP Packets with Wireshark

Wireshark is a widely used tool for network traffic analysis. Using Wireshark, learners can directly observe how network layers operate in real environments.

Basic practice steps:

1. Open Wireshark and start capturing traffic on the active network interface.
2. Visit a website, for example http://neverssl.com.
3. In Wireshark, apply the `http` filter to display HTTP packets.
4. Select a packet to observe protocol layers such as Ethernet (Link), IP (Network), TCP (Transport), and HTTP (Application).

This practice helps learners visualize the relationship between the OSI and TCP/IP models through real network traffic.

## Quick Comparison Between OSI and TCP/IP

The OSI model is well suited for learning, research, and network troubleshooting due to its clear and detailed structure.

The TCP/IP model is widely used in practice because it is simple, efficient, and aligned with Internet architecture.

**Conclusion:**  
OSI helps explain how networks work conceptually, while TCP/IP is the model used to implement and operate real-world network systems.

## Relation to Cybersecurity

In cybersecurity, the OSI model is often used to classify attack types. For example, eavesdropping attacks are commonly associated with the Physical or Data Link layers, while web-based attacks mainly occur at the Application layer.

Understanding each layer enables learners to identify where an issue occurs and to select appropriate security controls and defensive strategies.
