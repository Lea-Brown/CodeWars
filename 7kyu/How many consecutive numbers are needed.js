/**
 * 7 kyu
 * How many consecutive numbers are needed?
 * https://www.codewars.com/kata/559cc2d2b802a5c94700000c/javascript
 *
 * Calculates how many numbers are missing to make an array of integers consecutive.
 *
 * The function determines the minimum and maximum values in the array and
 * calculates how many integers would be needed between them to form a fully
 * consecutive sequence.
 *
 * @param {number[]} array - An array of integers.
 * @returns {number} The number of missing integers required to make the sequence consecutive.
 *
 * @example
 * consecutive([4, 8, 6]);
 * // Expected range: 4,5,6,7,8
 * // Missing: 5,7
 * // Returns: 2
 *
 * @example
 * consecutive([1, 2, 3, 4]);
 * // Already consecutive
 * // Returns: 0
 *
 * @example
 * consecutive([]);
 * // Returns: 0
 */

function consecutive(array) {
  const { length } = array;
  if (length <= 1) return 0;
  let max = -Infinity;
  let min = Infinity;
  for (const each of array) {
    if (each > max) max = each;
    if (each < min) min = each;
  }
  return max - min - length + 1;
}
