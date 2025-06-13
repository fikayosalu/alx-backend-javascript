const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return 5 for SUM(1.2, 3.7)', () => {
      expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
    });

    it('should return 0 for SUM(-1.4, 1.4)', () => {
      expect(calculateNumber('SUM', -1.4, 1.4)).to.equal(0);
    });
  });

  describe('SUBTRACT', () => {
    it('should return -4 for SUBTRACT(1.2, 4.5)', () => {
      expect(calculateNumber('SUBTRACT', 1.2, 4.5)).to.equal(-4);
    });

    it('should return 3 for SUBTRACT(5.6, 3.1)', () => {
      expect(calculateNumber('SUBTRACT', 5.6, 3.1)).to.equal(3);
    });
  });

  describe('DIVIDE', () => {
    it('should return 2 for DIVIDE(4.4, 1.5)', () => {
      expect(calculateNumber('DIVIDE', 4.4, 1.5)).to.equal(2);
    });

    it('should return "Error" when dividing by 0 after rounding', () => {
      expect(calculateNumber('DIVIDE', 1.3, 0.2)).to.equal('Error');
    });

    it('should return 4.5 for DIVIDE(8.5, 2.4)', () => {
      expect(calculateNumber('DIVIDE', 8.5, 2.4)).to.equal(4.5);
    });

    it('should return -4 for DIVIDE(-3.6, 1.4)', () => {
      expect(calculateNumber('DIVIDE', -3.6, 1.4)).to.equal(-4);
    });
  });

  describe('Invalid type', () => {
    it('should throw error on invalid type', () => {
      expect(() => calculateNumber('MULTIPLY', 2, 3)).to.throw('Invalid type');
    });
  });
});