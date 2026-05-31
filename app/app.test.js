const http = require('http');
const server = require('./app');

describe('App Tests', () => {
  afterAll(() => server.close());

  test('GET / returns 200 with message', (done) => {
    http.get('http://localhost:3000', (res) => {
      expect(res.statusCode).toBe(200);
      done();
    });
  });

  test('GET /health returns healthy status', (done) => {
    http.get('http://localhost:3000/health', (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const body = JSON.parse(data);
        expect(body.status).toBe('healthy');
        done();
      });
    });
  });
});