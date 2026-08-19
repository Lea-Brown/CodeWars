/**
 * 8 kyu
 * Be Concise III - Sum Squares
 * https://www.codewars.com/kata/56f8fe6a2e6c0dc83b0008a7/javascript
 *
 * Calculates the sum of squares of all numbers in an array.
 *
 * @param {number[]} array - The array of numbers to square and sum.
 * @returns {number} The sum of each number squared.
 *
 * @example
 * sumSquares([1, 2, 3]);
 * // returns 14 (1 + 4 + 9)
 *
 * @example
 * sumSquares([]);
 * // returns 0
 *
 * @example
 * sumSquares([-2, 5]);
 * // returns 29 (4 + 25)
 */
const sumSquares = (array) => array.reduce((acc, add) => (acc += add ** 2), 0);
