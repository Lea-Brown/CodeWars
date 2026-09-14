/**
 * 7 kyu
 * Filter unused digits
 * https://www.codewars.com/kata/55de6173a8fbe814ee000061/javascript
 *
 * Returns the digits from 0 to 9 that do not appear in the given numbers.
 *
 * @param {...number} args - The numbers to check.
 * @returns {string} A string containing the unused digits.
 *
 * @example
 * unusedDigits(12, 34, 56, 78, 9);
 * // "0"
 *
 * @example
 * unusedDigits(123, 456);
 * // "0789"
 *
 * @example
 * unusedDigits(1234567890);
 * // ""
 */
function unusedDigits(...args) {
  let set = new Set();
  for (const num of args) {
    const numStr = num.toString();
    for (const each of numStr) {
      set.add(each);
      if (set.size === 10) return "";
    }
  }
  let result = "";
  for (let i = 0; i < 10; i++) {
    if (!set.has(i.toString())) result += i;
  }
  return result;
}
