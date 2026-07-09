/**
 * 6 kyu
 * Is Integer Array?
 * https://www.codewars.com/kata/52a112d9488f506ae7000b95/javascript
 *
 * Determines whether a value is an array containing only integers.
 *
 * @param {unknown} arr - The value to test.
 * @returns {arr is number[]} `true` if `arr` is an array and every element is an integer; otherwise, `false`.
 *
 * @example
 * isIntArray([1, 2, 3]);
 * // => true
 *
 * @example
 * isIntArray([1, 2.5, 3]);
 * // => false
 *
 * @example
 * isIntArray([]);
 * // => true
 */
function isIntArray(arr) {
  if (!Array.isArray(arr)) return false;
  for (const each of arr) {
    if (!Number.isInteger(each)) return false;
  }
  return true;
}
