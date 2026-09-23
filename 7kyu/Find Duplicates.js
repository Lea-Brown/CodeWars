/**
 * 7 kyu
 * Find Duplicates
 * https://www.codewars.com/kata/5558cc216a7a231ac9000022/javascript
 *
 * Finds all values that appear more than once in an array.
 *
 * Each duplicate value is included only once in the result,
 * in the order it is first detected as a duplicate.
 *
 * @param {Array<*>} arr - The array to check for duplicate values.
 * @returns {Array<*>} An array containing each duplicate value once.
 *
 * @example
 * duplicates([1, 2, 3, 2, 4, 1]);
 * // [2, 1]
 *
 * @example
 * duplicates(['a', 'b', 'a', 'c', 'b', 'b']);
 * // ['a', 'b']
 *
 * @example
 * duplicates([1, 2, 3, 4]);
 * // []
 */
function duplicates(arr) {
  const set = new Set();
  const dup = new Set();
  let result = [];
  for (const num of arr) {
    if (set.has(num) && !dup.has(num)) {
      result.push(num);
      dup.add(num);
    } else {
      set.add(num);
    }
  }
  return result;
}
