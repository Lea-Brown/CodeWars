/**
 * 7 kyu
 * Number climber
 * https://www.codewars.com/kata/559760bae64c31556c00006b/javascript
 *
 * Generates the sequence of values obtained by repeatedly halving `n`,
 * rounding down for odd numbers, until reaching 1.
 *
 * The resulting array is returned in ascending order.
 *
 * @param {number} n - The positive integer to start the sequence from.
 * @returns {number[]} The sequence from 1 up to the original value of `n`.
 *
 * @example
 * climb(10);
 * // Returns: [1, 2, 5, 10]
 *
 * @example
 * climb(16);
 * // Returns: [1, 2, 4, 8, 16]
 *
 * @example
 * climb(25);
 * // Returns: [1, 3, 6, 12, 25]
 */
function climb(n) {
  let result = [n];
  while (n > 1) {
    n = n % 2 === 0 ? n / 2 : (n - 1) / 2;
    result.push(n);
  }
  return result.reverse();
}
