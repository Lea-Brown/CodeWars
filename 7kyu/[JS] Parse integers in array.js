/**
 * 7 kyu
 * [JS] Parse integers in array
 * https://www.codewars.com/kata/535d118ccdbf501816001101/javascript
 *
 * Converts an array of strings representing numbers into an array of integers.
 *
 * @param {string[]} intStrs - Array of numeric strings (e.g. ["1.9", "-2.3"]).
 * @returns {number[]} - Array of integers with decimal parts removed.
 *
 * @example
 * parseNumbers(["1.9", "2.7", "3.1"]) // [1, 2, 3]
 * parseNumbers(["-1.33", "4.99"])     // [-1, 4]
 * parseNumbers(["0", "12.5"])         // [0, 12]
 */
const parseNumbers = function (intStrs) {
  return intStrs.map((num) => Math.trunc(Number(num)));
};
