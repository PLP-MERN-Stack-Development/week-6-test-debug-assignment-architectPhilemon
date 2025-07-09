// server/tests/integration/health.test.js
const request = require('supertest');
const app = require('../../src/app');

describe('Health Check API', () => {
  it('should return 200 OK', async () => {
    const res = await request(app).get('/api/health');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ status: 'ok' });
  });
});