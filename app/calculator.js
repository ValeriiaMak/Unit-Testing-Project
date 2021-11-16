/* eslint-disable linebreak-style */
/**
 *
 * simple class
 * @class Calculator
 */
class Calculator {
  /**
   * Creates an instance of Calculator.
   * @memberof Calculator
   */
  constructor() {
  };

  /**
 *
 *
 * @param {Array} array
 * @return {Number}
 * @memberof Calculator
 */
  add(...arrayOfNumbers) {
    if (Array.isArray(arrayOfNumbers) &&
    arrayOfNumbers.every((item) => typeof item === 'number')) {
      return arrayOfNumbers.reduce((a, b) =>(a+b), 0);
    } else {
      throw new Error(`[${arrayOfNumbers}] is not an array of "Numbers"`);
    }
  }
  /**
   *
   *
   * @param {Array<Number>} arrayOfnumbers
   * @return {Number} 
   * @memberof Calculator
   */
  multiply(...arrayOfNumbers) {
    if (Array.isArray(arrayOfNumbers) &&
    arrayOfNumbers.every((item) => typeof item === 'number')) {
      return arrayOfNumbers.reduce((a, b) =>(a*b));
    } else {
      throw new Error(`[${arrayOfNumbers}] is not an array of "Numbers"`);
    }
  }
};
module.exports = Calculator;
