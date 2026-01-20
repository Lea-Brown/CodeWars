/**
 * 7 kyu
 * Nice Array
 * https://www.codewars.com/kata/59b844528bcb7735560000a0/javascript
 *
 * Checks whether an array of numbers is "nice".
 *
 * An array is considered nice if **every element** has at least one
 * neighbouring number in the array that is either `value - 1` or `value + 1`.
 * An empty array is not considered nice.
 *
 * Internally, this function builds a lookup object to allow O(1) average-time
 * existence checks for neighbouring values.
 *
 * @param {number[]} arr - An array of numbers to evaluate.
 * @returns {boolean} Returns `true` if the array is nice, otherwise `false`.
 *
 * @example
 * isNice([2, 3, 4]) // true (each number has a neighbour)
 * isNice([1, 3])    // false (no neighbours)
 * isNice([])        // false
 */
function isNice(arr) {
  if (arr.length === 0) return false;
  let obj = {};
  for (const each of arr) {
    obj[each] = true;
  }
  for (const each of arr) {
    if (!obj[each + 1] && !obj[each - 1]) return false;
  }
  return true;
}
