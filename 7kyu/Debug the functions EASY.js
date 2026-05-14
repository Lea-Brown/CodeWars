/**
 * 7 kyu
 * Debug the functions EASY
 * https://www.codewars.com/kata/5844a422cbd2279a0c000281/javascript
 *
 * Multiplies all numeric elements in an array.
 *
 * Uses Array.prototype.reduce to accumulate a running product.
 * If the array is empty, the result defaults to 1.
 *
 * @param {number[]} arr - Array of numbers to multiply.
 * @returns {number} The product of all numbers in the array.
 *
 * @example
 * // 2 * 3 * 4 = 24
 * multi([2, 3, 4]); // returns 24
 *
 * @example
 * // Empty array → default value 1
 * multi([]); // returns 1
 */
function multi(arr) {
  return arr.reduce((acc, e) => acc * e, 1);
}

/**
 * Adds all numeric elements in an array.
 *
 * Uses Array.prototype.reduce to accumulate a running sum.
 * If the array is empty, the result defaults to 0.
 *
 * @param {number[]} arr - Array of numbers to add.
 * @returns {number} The sum of all numbers in the array.
 *
 * @example
 * // 5 + 10 + 2 = 17
 * add([5, 10, 2]); // returns 17
 *
 * @example
 * // Empty array → default value 0
 * add([]); // returns 0
 */
function add(arr) {
  return arr.reduce((acc, e) => acc + e, 0);
}

/**
 * Reverses a string.
 *
 * Splits the string into characters, reverses the order,
 * and joins them back together.
 *
 * @param {string} str - The string to reverse.
 * @returns {string} The reversed string.
 *
 * @example
 * reverse("hello"); // returns "olleh"
 *
 * @example
 * reverse("abc123"); // returns "321cba"
 */
function reverse(str) {
  return str.split("").reverse().join("");
}
