import 'dotenv/config';
import { ProxyAgent, fetch as undiciFetch } from 'undici';

const dispatcher = new ProxyAgent({
  uri: `http://localhost:${process.env.PROXY_PORT}`,
  proxyTunnel: false
});
try {
  const response = await undiciFetch('http://www.google.com', { dispatcher });
  console.log(response.status, response.statusText, response.headers);
} catch (error) {
  console.error(error);
}
