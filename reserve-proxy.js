import 'dotenv/config';
import { log, serve } from 'reserve';

const server = log(serve({
  port: Number.parseInt(process.env.PROXY_PORT),
  mappings: [{
    custom: (request, response) => {
      return ['hello world !', {
        headers: {
          'x-proxy': 'reserve',
          'x-proxy-url': request.url
        }
      }];
    }
  }]
}), true);

const { promise, resolve, reject } = Promise.withResolvers();
server
  .on('ready', (event) => {
    console.log(`Proxy is up and running`, event);
    resolve();
  })
  .on('error', ({ reason }) => reject(reason));
await promise;
