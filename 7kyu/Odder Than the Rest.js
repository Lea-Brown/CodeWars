/**
 * 7 kyu
 * Odder Than the Rest
 * https://www.codewars.com/kata/5983cba828b2f1fd55000114/javascript
 *
 * Returns the index of the first odd number in an array.
 *
 * Iterates through the array from left to right and stops
 * as soon as an odd number is found.
 *
 * @param {number[]} arr - Array of integers to search.
 * @returns {number} The index of the first odd number,
 * or -1 if no odd number exists.
 *
 * @example
 * oddOne([2, 4, 6, 7, 8])
 * // => 3
 *
 * @example
 * oddOne([2, 4, 6])
 * // => -1
 */

function oddOne(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) return i;
  }
  return -1;
}
