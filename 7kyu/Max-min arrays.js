/**
 * 7 kyu
 * Max-min arrays
 * https://www.codewars.com/kata/5a090c4e697598d0b9000004/javascript
 *
 * Sorts an array in ascending order, then alternates between the largest
 * and smallest remaining values to create a new array.
 *
 * @param {number[]} arr - The array of numbers to rearrange.
 * @returns {number[]} A new array with values alternating between largest
 * and smallest remaining values.
 *
 * @example
 * solve([1, 2, 3, 4, 5]); // [5, 1, 4, 2, 3]
 *
 * @example
 * solve([3, 1, 2, 4]); // [4, 1, 3, 2]
 *
 * @example
 * solve([7]); // [7]
 */
function solve(arr) {
  arr = arr.sort((a, b) => a - b);
  let result = [];
  while (arr.length > 0) {
    result.push(arr.pop());
    result.push(arr.shift());
  }
  if (result[result.length - 1] === undefined) result.pop();
  return result;
}
