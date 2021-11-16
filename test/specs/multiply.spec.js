/* eslint-disable linebreak-style */
const Calculator = require('../../app/calculator');
const {expect} = require('chai');

describe('multiply positive scenarios', function() {
  let validator;
  beforeEach(function() {
    validator = new Calculator();
  });
  afterEach(function() {
    validator = null;
  });
  it('should return multiply of integers', function() {
    expect(validator.multiply(1, 2, 3, 4)).to.be.equal(24);
  });
  it('should return multiply of tree-digit numbers', function() {
    expect(validator.multiply(100, 200, 564)).to.be.equal(11280000);
  });
  it('should return multiply of non integers', function() {
    expect(validator.multiply(1.5, 2)).to.be.equal(3);
  });
  it('should return multiply of negative numbers', function() {
    expect(validator.multiply(-2000, -3000)).to.be.equal(6000000);
  });
  it('should return multiply of mixed numbers', function() {
    expect(validator.multiply(1.5, 2345678, -765, 3)).to.be.equal(-8074996515);
  });
});

describe('multiply negative scenarios', function() {
  let validator;
  beforeEach(function() {
    validator = new Calculator();
  });
  afterEach(function() {
    validator = null;
  });
  it('should throw an error if there is a letter', function() {
    // eslint-disable-next-line max-len
    expect(() => validator.multiply('a', 2)).to.throw(`[a,2] is not an array of "Numbers"`);
  });
  it('should throw an error if there is an empty value', function() {
    // eslint-disable-next-line max-len
    expect(() => validator.multiply(' ', 2)).to.throw(`[ ,2] is not an array of "Numbers"`);
  });
  it('should throw an error if there is a spesial simbols', function() {
    // eslint-disable-next-line max-len
    expect(() => validator.multiply('_', 2)).to.throw(`[_,2] is not an array of "Numbers"`);
  });
});
