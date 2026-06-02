/**
 * 7 kyu
 * The Office III - Broken Photocopier
 * https://www.codewars.com/kata/57ed56657b45ef922300002b/javascript
 *
 * Inverts each character in a binary string, turning "1" → "0" and "0" → "1".
 *
 * @param {string} x - A string consisting of binary characters ("0" and "1").
 * @returns {string} The inverted binary string.
 *
 * @example
 * broken("1010");
 * // returns "0101"
 *
 * @example
 * broken("000111");
 * // returns "111000"
 */
function broken(x) {
  let result = [];
  for (const each of x) {
    result.push(each === "1" ? "0" : "1");
  }
  return result.join("");
}
