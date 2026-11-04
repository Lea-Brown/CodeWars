/**
 * 7 kyu
 * Failed Filter - Bug Fixing #3
 * https://www.codewars.com/kata/55c606e6babfc5b2c500007c/javascript
 *
 * Removes all numeric digits (0–9) from a string.
 *
 * @param {string} str - The input string.
 * @returns {string} The string with all numeric digits removed.
 *
 * @example
 * filterNumbers("Hello123"); // "Hello"
 *
 * @example
 * filterNumbers("123abc456"); // "abc"
 *
 * @example
 * filterNumbers("H3ll0 W0rld!"); // "Hll Wrld!"
 */
function filterNumbers(str) {
  let result = "";
  for (const char of str) {
    if (char < "0" || char > "9") {
      result += char;
    }
  }
  return result;
}
