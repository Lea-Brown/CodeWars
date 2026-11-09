/**
 * 7 kyu
 * Only one
 * https://www.codewars.com/kata/5734c38da41454b7f700106e/javascript
 *
 * Checks whether exactly one value is strictly equal to `true`.
 *
 * @param {...boolean} values - The values to check.
 * @returns {boolean} `true` if exactly one value is `true`, otherwise `false`.
 *
 * @example
 * onlyOne(true, false, false); // true
 *
 * @example
 * onlyOne(true, true, false); // false
 *
 * @example
 * onlyOne(false, false, false); // false
 */
function onlyOne(...values) {
  let trueCount = 0;
  for (const value of values) {
    if (value === true) trueCount++;
    if (trueCount === 2) return false;
  }
  return trueCount === 1;
}
