/**
 * 7 kyu
 * Unique Sum
 * https://www.codewars.com/kata/56b1eb19247c01493a000065/javascript
 *
 * Calculates the sum of all unique values in an array.
 *
 * Duplicate values are counted only once. Returns `null` if the array is empty.
 *
 * @param {number[]} lst - An array of numbers.
 * @returns {number|null} The sum of the unique numbers, or `null` if the array is empty.
 *
 * @example
 * uniqueSum([1, 2, 3, 2, 1]);
 * // => 6
 *
 * @example
 * uniqueSum([5, 5, 5]);
 * // => 5
 *
 * @example
 * uniqueSum([]);
 * // => null
 */
function uniqueSum(lst) {
  if (lst.length === 0) return null;
  let set = new Set(lst);
  let count = 0;
  for (const each of set) {
    count += each;
  }
  return count;
}
