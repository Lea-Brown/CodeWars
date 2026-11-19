/**
 * 7 kyu
 * Powers of 3
 * https://www.codewars.com/kata/57be674b93687de78c0001d9/javascript
 *
 * Returns the largest integer k such that 3 ** k is strictly less than n.
 *
 * @param {number} n - A positive integer.
 * @returns {number} The largest exponent k where 3 ** k < n.
 *
 * @example
 * largestPower(10); // 2 (3 ** 2 = 9)
 *
 * @example
 * largestPower(28); // 3 (3 ** 3 = 27)
 *
 * @example
 * largestPower(27); // 2 (3 ** 2 = 9, since 3 ** 3 is not less than 27)
 */
function largestPower(n) {
  let k = -1;
  while (3 ** (k + 1) < n) {
    k++;
  }
  return k;
}
