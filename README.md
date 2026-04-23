# training-fetch-proxy

Exploring how to use an HTTP proxy with Node.js

## How to

* clone and install dependencies with `npm install`
* run the proxy using `node reserve-proxy.js`

The proxy does not really act as a proxy : it always answer "hello world !" with some headers to validate if / how the proxy was requested (`x-proxy` and `x-proxy-url`).

Several samples were developped to understand how to use proxies :

* curl: `npm run curl`

```
> training-fetch-proxy@1.0.0 curl
> curl -I -x http://localhost:8989 http://www.google.com

HTTP/1.1 200 OK
x-proxy: reserve
x-proxy-url: http://www.google.com/
content-type: text/plain
content-length: 13
Date: Thu, 23 Apr 2026 17:01:30 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```

* axios: `npm run axios`

```
> training-fetch-proxy@1.0.0 axios
> HTTP_PROXY=http://localhost:8989 HTTPS_PROXY=http://localhost:8989 node axios

200 OK Object [AxiosHeaders] {
  'x-proxy': 'reserve',
  'x-proxy-url': 'https://www.google.com/',
  'content-type': 'text/plain',
  'content-length': '13',
  date: 'Thu, 23 Apr 2026 17:02:44 GMT',
  connection: 'keep-alive',
  'keep-alive': 'timeout=5'
}
```

* node-fetch: `npm run node-fetch`

```
> training-fetch-proxy@1.0.0 node-fetch
> node node-fetch

200 OK {
  connection: 'close',
  'content-length': '13',
  'content-type': 'text/plain',
  date: 'Thu, 23 Apr 2026 17:03:25 GMT',
  'x-proxy': 'reserve',
  'x-proxy-url': 'http://www.google.com:443/'
}
```

* ...