/**
 * 7 kyu
 * Double Every Other
 * https://www.codewars.com/kata/5809c661f15835266900010a/javascript
 *
 * Doubles every element in an array whose index is odd.
 *
 * @param {number[]} a - The input array of numbers.
 * @returns {number[]} A new array where every element at an odd index is doubled.
 *
 * @example
 * // Basic usage
 * doubleEveryOther([1, 2, 3, 4]);
 * // → [1, 4, 3, 8]
 *
 * @example
 * // Works with negative numbers
 * doubleEveryOther([-1, -2, -3, -4]);
 * // → [-1, -4, -3, -8]
 *
 * @example
 * // Empty array returns empty array
 * doubleEveryOther([]);
 * // → []
 */

function doubleEveryOther(a) {
  return a.map((each, index) => (index % 2 !== 0 ? each * 2 : each));
}
