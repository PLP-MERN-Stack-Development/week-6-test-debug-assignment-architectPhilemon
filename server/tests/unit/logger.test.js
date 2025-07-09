const logger = require('../../src/middleware/logger');

describe('Logger Middleware', () => {
  it('should call next() and log method + url', () => {
    const req = { method: 'GET', originalUrl: '/test' };
    const res = {};
    const next = jest.fn();

    console.log = jest.fn(); // Mock console.log

    logger(req, res, next);

    expect(console.log).toHaveBeenCalledWith('GET /test');
    expect(next).toHaveBeenCalled();
  });
});
