/**
 * 7 kyu
 * Reverser
 * https://www.codewars.com/kata/58069e4cf3c13ef3a6000168/javascript
 *
 * Reverses the digits of a positive integer.
 *
 * @param {number} n - The positive integer to reverse.
 * @returns {number} The number with its digits reversed.
 *
 * @example
 * reverse(12345); // 54321
 *
 * @example
 * reverse(42); // 24
 *
 * @example
 * reverse(9087); // 7809
 */
function reverse(n) {
  let reversed = 0;
  while (n > 0) {
    const digit = n % 10;
    reversed = reversed * 10 + digit;
    n = Math.floor(n / 10);
  }
  return reversed;
}
