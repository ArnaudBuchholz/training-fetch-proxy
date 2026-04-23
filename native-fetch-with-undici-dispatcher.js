import 'dotenv/config';
import { ProxyAgent, setGlobalDispatcher } from 'undici';

const dispatcher = new ProxyAgent({
  uri: `http://localhost:${process.env.PROXY_PORT}`,
  proxyTunnel: false
});
setGlobalDispatcher(dispatcher);

try {
  const response = await fetch('http://www.google.com');
  console.log(response.status, response.statusText, response.headers);
} catch (error) {
  console.error(error);
}
