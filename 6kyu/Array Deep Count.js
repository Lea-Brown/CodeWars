/**
 * 6 kyu
 * Array Deep Count
 * https://www.codewars.com/kata/596f72bbe7cd7296d1000029/javascript
 *
 * Counts all elements in an array, including elements inside nested arrays.
 *
 * @param {Array<*>} a - The array to count.
 * @returns {number} The total number of elements, including nested elements.
 *
 * @example
 * deepCount([]);
 * // Returns: 0
 *
 * @example
 * deepCount([1, 2, 3, ["a", "b"]]);
 * // Returns: 5
 *
 * @example
 * deepCount([1, [2, [3, 4]], 5]);
 * // Returns: 6
 */
function deepCount(a) {
  return a.reduce((count, item) => {
    return count + 1 + (Array.isArray(item) ? deepCount(item) : 0);
  }, 0);
}
