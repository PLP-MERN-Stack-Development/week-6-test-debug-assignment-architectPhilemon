// server/tests/unit/mathUtils.test.js
const { add, multiply } = require('../../src/utils/math.js');
describe('Math Utils', () => {
  test('adds two numbers', () => {
    expect(add(3, 7)).toBe(10);
  });

  test('multiplies two numbers', () => {
    expect(multiply(3, 5)).toBe(15);
  });
});
