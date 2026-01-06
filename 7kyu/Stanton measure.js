/**
 * 7 kyu
 * Stanton measure
 * https://www.codewars.com/kata/59a1cdde9f922b83ee00003b/javascript
 *
 * Calculates the Stanton measure of an array of integers.
 *
 * The Stanton measure is defined as:
 * 1) Count how many times the number `1` appears in the array.
 * 2) Return how many times that count itself appears in the array.
 *
 * If `1` does not appear, or the derived count does not appear, the result is `0`.
 *
 * @param {number[]} a - An array of integers to analyse.
 * @returns {number} The Stanton measure of the array.
 *
 * @example
 * stantonMeasure([1, 4, 3, 2, 1, 2, 3, 2]) // 3
 * stantonMeasure([1, 1, 2, 2, 2])        // 3
 * stantonMeasure([3, 3, 3])              // 0
 */
function stantonMeasure(a) {
  let obj = {};
  for (const each of a) {
    obj[each] = (obj[each] || 0) + 1;
  }
  return obj[obj[1]] || 0;
}
