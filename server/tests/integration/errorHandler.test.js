const request = require('supertest');
const app = require('../../src/app');

describe('Error Handler Middleware', () => {
  it('should catch errors and respond with 500', async () => {
    const res = await request(app).get('/api/crash');
    expect(res.status).toBe(500);
    expect(res.body).toHaveProperty('error', 'Internal Server Error');
  });
});
