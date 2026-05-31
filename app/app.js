const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'healthy', version: process.env.APP_VERSION || '1.0.0' }));
    return;
  }
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ message: 'Hello from Kubernetes!', env: process.env.NODE_ENV }));
});

server.listen(3000, () => console.log('Server running on port 3000'));
module.exports = server;