/**
 * 7 kyu
 * Least Larger
 * https://www.codewars.com/kata/5f8341f6d030dc002a69d7e4/javascript
 *
 * Finds the index of the smallest value in an array that is
 * greater than the value at the specified index.
 *
 * @param {number[]} arr - The array of numbers to search.
 * @param {number} n - The index of the value to compare against.
 * @returns {number} The index of the least larger value, or -1 if none exists.
 *
 * @example
 * leastLarger([4, 1, 3, 5, 2], 1);
 * // Returns 0
 *
 * @example
 * leastLarger([1, 2, 3, 4, 5], 2);
 * // Returns 3
 *
 * @example
 * leastLarger([5, 4, 3, 2, 1], 0);
 * // Returns -1
 */
function leastLarger(arr, n) {
  let result = -1;
  let largest = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[n] && arr[i] < largest) {
      largest = arr[i];
      result = i;
    }
  }
  return result;
}
