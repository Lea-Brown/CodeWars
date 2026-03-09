/**
 * 7 kyu
 * Enumerable Magic #5- True for Just One?
 * https://www.codewars.com/kata/54599705cbae2aa60b0011a4/javascript
 *
 * Returns true if exactly one element matches the predicate.
 *
 * @param {Array} arr - The array to search.
 * @param {(value:any) => boolean} predicate - Function to test each element.
 * @returns {boolean}
 *
 * @example
 * one([1,2,3], x => x === 2) // true
 * one([1,2,3], x => x > 1)   // false
 */

function one(arr, fun) {
  let count = 0;
  for (const each of arr) {
    if (fun(each)) count++;
    if (count > 1) return false;
  }
  return count === 1;
}
