/**
 * 6 kyu
 * N smallest elements in original order
 * https://www.codewars.com/kata/5aec1ed7de4c7f3517000079/javascript
 *
 * Returns the n smallest values from an array, preserving their original order
 * and handling duplicate values correctly.
 *
 * @param {number[]} array - The array of numbers to search.
 * @param {number} n - The number of smallest values to return.
 * @returns {number[]} An array of the n smallest values, in original order.
 *
 * @example
 * // Basic case: returns the 2 smallest values, in original order
 * firstNSmallest([5, 3, 8, 1, 9], 2);
 * // => [3, 1]
 *
 * @example
 * // Handles duplicate values correctly
 * firstNSmallest([4, 2, 2, 5, 1], 3);
 * // => [2, 2, 1]
 *
 * @example
 * // n is 0, or n is greater than or equal to array length
 * firstNSmallest([7, 2, 9], 0); // => []
 * firstNSmallest([7, 2], 5);    // => [7, 2]
 */
function firstNSmallest(array, n) {
  if (n === 0) return [];
  if (array.length <= n) return array;
  let result = [];
  let obj = {};
  const sorted = [...array].sort((a, b) => a - b);
  for (let i = 0; i < n; i++) {
    obj[sorted[i]] = (obj[sorted[i]] || 0) + 1;
  }
  for (const each of array) {
    if (obj[each] > 0) {
      result.push(each);
      obj[each]--;
    }
    if (result.length === n) return result;
  }
  return result;
}
