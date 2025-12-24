# Introduction to Computer Networking

## Introduction

Computer networking is a system of interconnected devices that exchange data and share resources. In the context of modern information technology, computer networks serve as the foundation for most services, including Internet access, web systems, email, cloud computing, and distributed applications.

This article introduces the core components of computer networks, explains how data moves between devices, and provides practical examples to help learners understand how the Internet operates in everyday life.

## What Is a Network?

A computer network is a collection of devices such as computers, smartphones, servers, switches, and routers that are connected through wired or wireless transmission media.

Networks enable devices to communicate, share resources (such as printers and storage), and access centralized services efficiently.

## Core Components

**Host:**  
Endpoints such as clients and servers that generate, send, or receive data within the network.

**Switch:**  
A switching device used in local area networks (LANs) to forward frames based on MAC addresses, optimizing data transmission speed within internal networks.

**Router:**  
A routing device that forwards packets between different networks based on IP addresses, playing a key role in connecting LANs to WANs or the Internet.

**Wired / Wireless Media:**  
Part of the physical layer, responsible for transmitting signals between devices. Common technologies include Ethernet, fiber optics, and Wi-Fi.

## How Does Data Travel?

The process of data transmission in a network can be described as follows:

1. An application on the client device generates data to be sent, such as a request to access a website.
2. The data is encapsulated through multiple network layers, from the application layer down to the transport, network, and data link layers.
3. The network interface card (NIC) sends frames to a switch; routers then forward packets toward the destination network through routing mechanisms.
4. The destination device receives the data, decapsulates it, and delivers it to the appropriate application for processing.

## Network Scopes

**LAN (Local Area Network):**  
A local network within a home or office environment, characterized by high speed and limited geographic coverage.

**MAN (Metropolitan Area Network):**  
A network covering a city or metropolitan area, commonly deployed for universities, industrial zones, or municipal infrastructure.

**WAN (Wide Area Network):**  
A wide-area network connecting geographically distant regions; the Internet is the most prominent example of a WAN.

## Practical Examples

**Accessing a Website:**  
A device performs a DNS lookup to resolve the server’s IP address, establishes a TCP or UDP connection, and exchanges data through HTTP request and response packets.

**Sending Email:**  
Email transmission relies on protocols such as SMTP, POP, or IMAP, primarily operating over TCP to ensure reliable data delivery.

## Relation to Cybersecurity

Understanding the structure and operation of computer networks is a critical foundation in the field of cybersecurity. Many security vulnerabilities arise from insecure network configurations, flawed system designs, or improper handling of network input data.

Strong networking knowledge enables learners to analyze common attack techniques such as packet sniffing, denial-of-service (DoS) attacks, and address spoofing, and to propose appropriate defensive measures.

## Summary

Fundamental knowledge of computer networking helps learners understand how data is transmitted, how devices interact, and how Internet services operate. This knowledge serves as a basis for exploring advanced topics such as the TCP/IP protocol suite, network routing, and essential network diagnostic and monitoring tools like `ping`, `traceroute`, and `netstat`.
