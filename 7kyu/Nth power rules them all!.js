/**
 * 7 kyu
 * Nth power rules them all!
 * https://www.codewars.com/kata/58aed2cafab8faca1d000e20/javascript
 *
 * Calculates the sum of each number raised to a given power,
 * minus the original number.
 *
 * @param {number[]} a An array of numbers.
 * @param {number} n The power to raise each number to.
 * @returns {number} The calculated sum.
 *
 * @example
 * modifiedSum([1, 2, 3], 3); // 30
 *
 * @example
 * modifiedSum([4, 5], 2); // 32
 *
 * @example
 * modifiedSum([2, 3, 4], 4); // 344
 */
function modifiedSum(a, n) {
  let result = 0;
  for (const each of a) {
    result += Math.pow(each, n);
    result -= each;
  }
  return result;
}
