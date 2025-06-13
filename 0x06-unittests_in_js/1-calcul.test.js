const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return 5 for SUM(1.2, 3.7)', () => {
      assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5);
    });

    it('should return 0 for SUM(-1.4, 1.4)', () => {
      assert.strictEqual(calculateNumber('SUM', -1.4, 1.4), 0);
    });
  });

  describe('SUBTRACT', () => {
    it('should return -4 for SUBTRACT(1.2, 4.5)', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.2, 4.5), -4);
    });

    it('should return 3 for SUBTRACT(5.6, 3.1)', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 5.6, 3.1), 3);
    });
  });

  describe('DIVIDE', () => {
    it('should return 2 for DIVIDE(4.4, 1.5)', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 4.4, 1.5), 2);
    });

    it('should return Error when dividing by 0 after rounding', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.3, 0.2), 'Error');
    });

    it('should return 4.5 for DIVIDE(8.5, 2.4)', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 8.5, 2.4), 4.5);
    });

    it('should return -4 for DIVIDE(-3.6, 1.4)', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -3.6, 1.4), -4);
    });
  });

  describe('Invalid type', () => {
    it('should throw error on invalid type', () => {
      assert.throws(() => calculateNumber('MULTIPLY', 2, 3), /Invalid type/);
    });
  });
});
