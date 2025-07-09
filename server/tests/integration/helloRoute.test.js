const request = require('supertest');
const app = require('../../src/app');

describe('GET /api/hello', () => {
  it('should respond with JSON and status 200', async () => {
    const response = await request(app).get('/api/hello');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: 'Hello from API' });
  });
});
