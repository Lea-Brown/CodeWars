/**
 * 7 kyu
 * No Loops 1 - Small enough?
 * https://www.codewars.com/kata/57cc4853fa9fc57a6a0002c2/javascript
 *
 * Checks whether all numbers in an array are less than or equal to a given limit.
 *
 * @param {number[]} a - The array of numbers to check.
 * @param {number} limit - The maximum allowed value.
 * @returns {boolean} Returns true if every element in the array is
 * less than or equal to the limit, otherwise false.
 *
 * @example
 * smallEnough([1, 2, 3], 3); // true
 * smallEnough([1, 2, 4], 3); // false
 */
const smallEnough = (a, limit) =>
  a.filter((each) => each <= limit).length === a.length;
