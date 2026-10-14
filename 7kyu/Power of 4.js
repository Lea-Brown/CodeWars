/**
 * 7 kyu
 * Power of 4
 * https://www.codewars.com/kata/544d114f84e41094a9000439/javascript
 *
 * Checks whether a number is a power of 4.
 *
 * @param {number} n - The number to check.
 * @returns {boolean} True if the number is a power of 4, otherwise false.
 *
 * @example
 * powerOf4(16); // true
 *
 * @example
 * powerOf4(12); // false
 *
 * @example
 * powerOf4(1); // true
 */
function powerOf4(n) {
  if (n < 1 || typeof n !== "number") return false;
  while (n % 4 === 0) {
    n /= 4;
  }
  return n === 1;
}
