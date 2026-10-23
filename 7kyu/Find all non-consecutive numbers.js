/**
 * 7 kyu
 * Find all non-consecutive numbers
 * https://www.codewars.com/kata/58f8b35fda19c0c79400020f/javascript
 *
 * Finds all elements in an array that are not consecutive.
 *
 * An element is non-consecutive if its absolute difference from the
 * previous element is greater than 1.
 *
 * @param {number[]} arr - The array of numbers to check.
 * @returns {{i: number, n: number}[]} An array of objects containing
 * the index and value of each non-consecutive element.
 *
 * @example
 * allNonConsecutive([1, 2, 4, 5, 7]);
 * // Returns: [{ i: 2, n: 4 }, { i: 4, n: 7 }]
 *
 * @example
 * allNonConsecutive([1, 2, 3, 4, 5]);
 * // Returns: []
 *
 * @example
 * allNonConsecutive([1, 3, 2, 6, 7]);
 * // Returns: [{ i: 1, n: 3 }, { i: 3, n: 6 }]
 */
function allNonConsecutive(arr) {
  let result = [];
  for (let i = 1; i < arr.length; i++) {
    if (Math.abs(arr[i - 1] - arr[i]) > 1) result.push({ i: i, n: arr[i] });
  }
  return result;
}
