const { hasUncaughtExceptionCaptureCallback } = require('process');
var main = require('../index');
var assert = require('assert');
describe('Regular factorial value', function() {
    it('should return 120 for factorial(5)', function() {
        expect(factorialize(5)).toBe(120)
      });
});

describe('First two terms', function() {
  it('should return 1 for first two terms', function() {
      expect(factorialize(0)).toBe(1)
      expect(factorialize(1)).toBe(1)
    });
});