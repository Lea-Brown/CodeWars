/**
 * 7 kyu
 * Array comparator
 * https://www.codewars.com/kata/561046a9f629a8aac000001d/javascript
 *
 * Counts how many elements in the second array also exist in the first array.
 *
 * Uses a Set for fast lookups, avoiding repeated searches through the first array.
 *
 * @param {Array<*>} v - The array of values to check against.
 * @param {Array<*>} r - The array of values to search for in v.
 * @returns {number} The number of matching elements, including duplicates in r.
 *
 * @example
 * matchArrays([1, 2, 3], [2, 3, 4]);
 * // Returns: 2
 *
 * @example
 * matchArrays(['a', 'b', 'c'], ['a', 'a', 'd']);
 * // Returns: 2
 *
 * @example
 * matchArrays([10, 20, 30], [40, 50, 60]);
 * // Returns: 0
 */
function matchArrays(v, r) {
  const set = new Set(v);
  let count = 0;
  for (const each of r) {
    if (set.has(each)) count++;
  }
  return count;
}
