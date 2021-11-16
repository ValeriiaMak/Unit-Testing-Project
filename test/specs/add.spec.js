/* eslint-disable linebreak-style */
const Calculator = require('../../app/calculator');
const {expect} = require('chai');

describe('add positive scenarios', function() {
  let validator;
  beforeEach(function() {
    validator = new Calculator();
  });
  afterEach(function() {
    validator = null;
  });
  it('should return sum of integers', function() {
    expect(validator.add(1, 2, 3, 4)).to.be.equal(10);
  });
  it('should return sum of tree-digit numbers', function() {
    expect(validator.add(100, 200, 564)).to.be.equal(864);
  });
  it('should return sum of non integers', function() {
    expect(validator.add(1.5, 2)).to.be.equal(3.5);
  });
  it('should return sum of negative numbers', function() {
    expect(validator.add(-2000, -3000)).to.be.equal(-5000);
  });
  it('should return sum of mixed numbers', function() {
    expect(validator.add(1.5, 2345678, -765, 0)).to.be.equal(2344914.5);
  });
});

describe('add negative scenarios', function() {
  let validator;
  beforeEach(function() {
    validator = new Calculator();
  });
  afterEach(function() {
    validator = null;
  });
  it('should throw an error if there is a letter', function() {
    // eslint-disable-next-line max-len
    expect(() => validator.add('a', 2)).to.throw(`[a,2] is not an array of "Numbers"`);
  });
  it('should throw an error if there is an empty value', function() {
    // eslint-disable-next-line max-len
    expect(() => validator.add(' ', 2)).to.throw(`[ ,2] is not an array of "Numbers"`);
  });
  it('should throw an error if there is a spesial simbols', function() {
    // eslint-disable-next-line max-len
    expect(() => validator.add('_', 2)).to.throw(`[_,2] is not an array of "Numbers"`);
  });
});
