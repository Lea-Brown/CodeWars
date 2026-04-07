/**
 * 8 kyu
 * Enumerable Magic #1 - True for All?
 * https://www.codewars.com/kata/54598d1fcbae2ae05200112c/javascript
 *
 * Tests whether all elements in an array pass a given predicate function.
 *
 * @param {Array<any>} arr - The array of elements to test.
 * @param {(value: any) => boolean} fun - A predicate function that is called with each element.
 * @returns {boolean} Returns `true` if the predicate returns `true` for every element in the array; otherwise `false`.
 *
 * @example
 * const numbers = [2, 4, 6, 8];
 * const result = all(numbers, n => n % 2 === 0);
 * console.log(result); // true
 *
 * @example
 * const numbers = [2, 3, 6];
 * const result = all(numbers, n => n % 2 === 0);
 * console.log(result); // false
 */

function all(arr, fun) {
  for (const each of arr) {
    if (!fun(each)) return false;
  }
  return true;
}

// Better way
function all(arr, fun) {
  return arr.every(fun);
}
