/**
 * 6 kyu
 * Twisted Sum
 * https://www.codewars.com/kata/527e4141bb2ea5ea4f00072f/javascript
 *
 * Returns the sum of all digits for every number from 1 up to and including `n`.
 *
 * For example, if `n` is 12, the calculation is:
 * 1 + 2 + 3 + ... + 9 + (1 + 0) + (1 + 1) + (1 + 2) = 51
 *
 * @param {number} n - The positive integer to sum digits up to (inclusive).
 * @returns {number} The total sum of all digits from 1 through `n`.
 *
 * @example
 * twistedSum(3);
 * // => 6
 *
 * @example
 * twistedSum(10);
 * // => 46
 *
 * @example
 * twistedSum(12);
 * // => 51
 */
function twistedSum(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (i < 10) {
      count += i;
    } else {
      i.toString()
        .split("")
        .forEach((each) => (count += +each));
    }
  }
  return count;
}
