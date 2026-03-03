/**
 * 7 kyu
 * Number Pairs
 * https://www.codewars.com/kata/563b1f55a5f2079dc100008a/javascript
 *
 * Compares two arrays element-by-element and returns a new array
 * containing the larger number at each index.
 *
 * @param {number[]} a - The first array of numbers.
 * @param {number[]} b - The second array of numbers (must be the same length as `a`).
 * @returns {number[]} A new array where each element is the larger value
 * from the corresponding index of `a` and `b`.
 *
 * @example
 * getLargerNumbers([1, 4, 3], [2, 3, 5]);
 * // → [2, 4, 5]
 */

function getLargerNumbers(a, b) {
  let newArr = [];
  for (let i = 0; i < a.length; i++) {
    newArr.push(Math.max(a[i], b[i]));
  }
  return newArr;
}
