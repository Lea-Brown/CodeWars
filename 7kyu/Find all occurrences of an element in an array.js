/**
 * 7 kyu
 * Find all occurrences of an element in an array
 * https://www.codewars.com/kata/59a9919107157a45220000e1/javascript
 *
 * Finds all indices in an array where the element strictly equals a given value.
 *
 * Iterates through the array and collects the index of every element that is
 * strictly equal (`===`) to the provided value.
 *
 * @param {number[]} array - The array to search through.
 * @param {number} n - The value to match against elements in the array.
 * @returns {number[]} An array of indices where the value was found. Returns an empty array if no matches exist.
 *
 * @example
 * findAll([1, 2, 3, 2], 2) // [1, 3]
 * findAll(['a', 'b', 'a'], 'a') // [0, 2]
 * findAll([true, false, true], true) // [0, 2]
 * findAll([1, 2, 3], 4) // []
 */
function findAll(array, n) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === n) result.push(i);
  }
  return result;
}
