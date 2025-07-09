const { divide } = require('../../src/utils/math');

describe('Divide Function', () => {
  test('divides two numbers', () => {
    expect(divide(10, 2)).toBe(5);
  });

  test('handles divide by zero', () => {
    expect(() => divide(10, 0)).toThrow('Cannot divide by zero');
  });
});
