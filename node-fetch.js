import 'dotenv/config';
import fetch from 'node-fetch';
import { HttpProxyAgent } from 'http-proxy-agent';

const agent = new HttpProxyAgent(`http://localhost:${process.env.PROXY_PORT}`);
try {
  const response = await fetch('https://www.google.com', { agent });
  console.log(response.status, response.statusText, response.headers);
} catch (error) {
  console.error(error);
}
