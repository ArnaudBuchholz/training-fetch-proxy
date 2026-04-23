import request from 'axios';

try {
  const response = await request.get('https://www.google.com');
  console.log(response.status, response.statusText, response.headers);
} catch (error) {
  console.error(error);
}
