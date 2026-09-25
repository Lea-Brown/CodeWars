/**
 * 7 kyu
 * Replace every nth
 * https://www.codewars.com/kata/57fcaed83206fb15fd00027a/javascript
 *
 * Replaces every nth occurrence of a specified value in a string.
 *
 * @param {string} text - The original string.
 * @param {number} n - The occurrence interval at which to replace.
 * @param {string} oldValue - The character to replace.
 * @param {string} newValue - The replacement character.
 * @returns {string} The modified string.
 *
 * @example
 * replaceNth("abcdefabc", 2, "a", "X");
 * // "abcdefXbc"
 *
 * @example
 * replaceNth("aaaaaa", 2, "a", "X");
 * // "aXaXaX"
 *
 * @example
 * replaceNth("hello world", 1, "l", "L");
 * // "heLLo worLd"
 */
function replaceNth(text, n, oldValue, newValue) {
  if (n <= 0) return text;
  let result = [];
  let count = 0;
  for (const each of text) {
    if (each === oldValue) count++;
    if (each === oldValue && count % n === 0) {
      result.push(newValue);
    } else {
      result.push(each);
    }
  }
  return result.join("");
}
