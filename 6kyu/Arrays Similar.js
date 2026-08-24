/**
 * 6 kyu
 * Arrays Similar
 * https://www.codewars.com/kata/51e704f2d8dbace389000279/javascript
 *
 * Checks whether two arrays contain the same elements with the same
 * frequencies, regardless of their order.
 *
 * @param {Array<*>} arr1 - The first array to compare.
 * @param {Array<*>} arr2 - The second array to compare.
 * @returns {boolean} `true` if both arrays contain the same elements
 * with the same frequencies; otherwise, `false`.
 *
 * @example
 * arraysSimilar([1, 2, 3], [3, 1, 2]);
 * // true
 *
 * @example
 * arraysSimilar([1, 2, 2, 3], [2, 3, 2, 1]);
 * // true
 *
 * @example
 * arraysSimilar([1, 2, 2], [1, 1, 2]);
 * // false
 */
function arraysSimilar(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  const map = new Map();
  for (const each of arr1) {
    map.set(each, (map.get(each) ?? 0) + 1);
  }
  for (const each of arr2) {
    const count = map.get(each);
    if (count === undefined) return false;
    if (count === 0) return false;
    map.set(each, count - 1);
  }
  return true;
}
