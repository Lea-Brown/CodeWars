/**
 * 7 kyu
 * Is It Negative Zero (-0)?
 * https://www.codewars.com/kata/5c5086287bc6600001c7589a/javascript
 *
 * Determines whether a value is negative zero (-0).
 *
 * In JavaScript, `-0` is distinct from `0`, but `===` cannot differentiate them.
 * This function uses `Object.is()` which correctly distinguishes `-0` from `0`.
 *
 * @param {number} n - The number to test.
 * @returns {boolean} Returns `true` if the value is `-0`, otherwise `false`.
 *
 * @example
 * isNegativeZero(-0); // true
 *
 * @example
 * isNegativeZero(0); // false
 *
 * @example
 * isNegativeZero(1); // false
 */

const isNegativeZero = (n) => Object.is(n, -0);
