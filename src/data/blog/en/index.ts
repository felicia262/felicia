import intro from './posts/intro-networking';
import osi from './posts/osi-tcp-ip';
import socket from './posts/socket-programming';
import tcpvsudp from './posts/tcp-vs-udp';
import clientserver from './posts/client-server-model';
import multithread from './posts/network-multithreading';
import httpserver from './posts/http-webserver';
import restapi from './posts/rest-api-basics';
import simpleapp from './posts/simple-network-app';
import { BlogPost } from '../../../../types';

export const BLOG_EN: BlogPost[] = [
  intro,
  osi,
  socket,
  tcpvsudp,
  clientserver,
  multithread,
  httpserver,
  restapi,
  simpleapp
];

export default BLOG_EN;
