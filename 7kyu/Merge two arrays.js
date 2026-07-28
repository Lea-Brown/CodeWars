/**
 * 7 kyu
 * Merge two arrays
 * https://www.codewars.com/kata/583af10620dda4da270000c5/javascript
 *
 * Merges two arrays by alternating their elements.
 * Elements from the first array are added first, followed by
 * the corresponding element from the second array. If one array
 * is longer, its remaining elements are appended in order.
 *
 * **Note:** This implementation skips falsy values such as
 * `0`, `false`, `""`, `null`, `undefined`, and `NaN` because
 * it checks elements using truthiness (`if (a[i])`).
 *
 * @template T, U
 * @param {T[]} a - The first array.
 * @param {U[]} b - The second array.
 * @returns {(T|U)[]} A new array with alternating elements from both arrays.
 *
 * @example
 * // Arrays of equal length
 * mergeArrays([1, 2, 3], ["a", "b", "c"]);
 * // Returns: [1, "a", 2, "b", 3, "c"]
 *
 * @example
 * // First array is longer
 * mergeArrays([1, 2, 3, 4], ["a", "b"]);
 * // Returns: [1, "a", 2, "b", 3, 4]
 *
 * @example
 * // Second array is longer
 * mergeArrays([1], ["a", "b", "c"]);
 * // Returns: [1, "a", "b", "c"]
 */
function mergeArrays(a, b) {
  let length = Math.max(a.length, b.length);
  let result = [];
  for (let i = 0; i < length; i++) {
    if (a[i]) result.push(a[i]);
    if (b[i]) result.push(b[i]);
  }
  return result;
}
