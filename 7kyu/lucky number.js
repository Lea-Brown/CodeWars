/**
 * 7 kyu
 * lucky number
 * https://www.codewars.com/kata/55afed09237df73343000042/javascript
 *
 * Checks whether a number is a "lucky" number.
 *
 * A number is considered lucky if it is divisible by 9 with no remainder.
 *
 * @param {number} n - The number to check.
 * @returns {boolean} Returns true if the number is divisible by 9, otherwise false.
 *
 * @example
 * isLucky(9)   // true
 * isLucky(18)  // true
 * isLucky(7)   // false
 */
const isLucky = (n) => n % 9 === 0;
