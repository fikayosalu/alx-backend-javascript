const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return 4 for (1, 3)', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should round and return 5 for (1, 3.7)', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('should round and return 5 for (1.2, 3.7)', () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('should round and return 6 for (1.5, 3.7)', () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it('should handle negative values: (-1.2, -2.5) => -3', () => {
    assert.strictEqual(calculateNumber(-1.2, -2.5), -3);
  });

  it('should handle (0.4, -0.4) => 0', () => {
    assert.strictEqual(calculateNumber(0.4, -0.4), 0);
  });

  it('should return 0 for (0, 0)', () => {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });

  it('should round negative halves correctly: (-1.4, -0.5) => -2', () => {
    assert.strictEqual(calculateNumber(-1.4, -0.5), -1);
  });

  it('should round both up when over .5: (2.6, 2.6) => 6', () => {
    assert.strictEqual(calculateNumber(2.6, 2.6), 6);
  });

  it('should round (2.49, 2.49) to 4', () => {
    assert.strictEqual(calculateNumber(2.49, 2.49), 4);
  });
});