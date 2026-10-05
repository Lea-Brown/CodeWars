/**
 * 7 kyu
 * Are they square?
 * https://www.codewars.com/kata/56853c44b295170b73000007/javascript
 *
 * Checks whether every number in an array is a perfect square.
 *
 * @param {number[]} arr - The array of numbers to check.
 * @returns {boolean|undefined} True if every number is a perfect square,
 * false if any number is not, or undefined if the array is empty.
 *
 * @example
 * isSquare([1, 4, 9, 16]); // true
 *
 * @example
 * isSquare([1, 4, 10, 16]); // false
 *
 * @example
 * isSquare([]); // undefined
 */
function isSquare(arr) {
  if (arr.length === 0) return undefined;
  for (const num of arr) {
    if (!Number.isInteger(Math.sqrt(num))) return false;
  }
  return true;
}
