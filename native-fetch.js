console.log('NODE_USE_ENV_PROXY', process.env.NODE_USE_ENV_PROXY);
console.log('HTTP_PROXY', process.env.HTTP_PROXY);
console.log('HTTPS_PROXY', process.env.HTTPS_PROXY);
console.log('Requesting...');
try {
  const controller = new AbortController();
  setTimeout(() => controller.abort(), 250);
  const response = await fetch('http://www.google.com', {
    signal: controller.signal
  });
  console.log(response.status, response.statusText, response.headers);
} catch (error) {
  console.error(error);
}
