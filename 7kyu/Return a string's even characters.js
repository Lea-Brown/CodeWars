/**
 * 7 kyu
 * Return a string's even characters.
 * https://www.codewars.com/kata/566044325f8fddc1c000002c/javascript
 *
 * Returns an array of characters located at even positions
 * (2nd, 4th, 6th, etc. — zero-based odd indices) in the string.
 *
 * If the string length is less than 2 or greater than 100,
 * the function returns the string "invalid string".
 *
 * @param {string} string - The input string to evaluate.
 * @returns {string[] | "invalid string"} An array of characters at even positions,
 * or "invalid string" if the input length is outside the allowed range.
 *
 * @example
 * evenChars("abcdef"); // ["b", "d", "f"]
 *
 * @example
 * evenChars("a"); // "invalid string"
 */

function evenChars(string) {
  if (string.length < 2 || string.length > 100) return "invalid string";
  let result = [];
  for (let i = 0; i < string.length; i++) {
    if (i % 2 !== 0) result.push(string[i]);
  }
  return result;
}
