/**
 * 7 kyu
 * Find array
 * https://www.codewars.com/kata/59a2a3ba5eb5d4e609000055/javascript
 *
 * Returns the elements from the first array at the indexes specified in the second array.
 *
 * @param {Array} arr1 - The array containing the values.
 * @param {number[]} arr2 - An array of indexes to retrieve.
 * @returns {Array} A new array containing the values found at the specified indexes.
 *
 * @example
 * findArray([1, 2, 3, 4], [0, 2]);
 * // Returns: [1, 3]
 *
 * @example
 * findArray(['a', 'b', 'c'], [2, 0, 1]);
 * // Returns: ['c', 'a', 'b']
 *
 * @example
 * findArray([10, 20, 30], [1, 5, 0]);
 * // Returns: [20, 10]
 */
function findArray(arr1, arr2) {
  const result = [];
  for (const index of arr2) {
    if (arr1[index] !== undefined) result.push(arr1[index]);
  }
  return result;
}
