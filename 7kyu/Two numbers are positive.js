/**
 * 7 kyu
 * Two numbers are positive
 * https://www.codewars.com/kata/602db3215c22df000e8544f0/javascript
 *
 * Checks whether exactly two of the three provided values are positive numbers.
 *
 * A value is considered positive if it is greater than zero.
 *
 * @param {number} a - First value to check.
 * @param {number} b - Second value to check.
 * @param {number} c - Third value to check.
 * @returns {boolean} Returns true if exactly two values are positive; otherwise false.
 *
 * @example
 * twoArePositive(2, 4, -1); // true
 * twoArePositive(1, -3, 5); // true
 * twoArePositive(1, 2, 3);  // false
 * twoArePositive(-1, -2, 3); // false
 */
function twoArePositive(a, b, c) {
  let count = 0;
  if (a > 0) count++;
  if (b > 0) count++;
  if (c > 0) count++;
  return count === 2;
}
