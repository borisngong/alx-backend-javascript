const http = require('http');

const app = http.createServer((req, res) => {
  res.statusCode = 200; // HTTP status code for OK
  res.setHeader('Content-Type', 'text/plain'); // Set response content type
  res.end('Hello Holberton School!'); // Response body
});

app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

module.exports = app;
