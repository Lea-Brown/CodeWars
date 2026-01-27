/**
 * 7 kyu
 * Character Counter
 * https://www.codewars.com/kata/56786a687e9a88d1cf00005d/javascript
 *
 * Checks whether all characters in a string appear the same number of times.
 *
 * The function is case-insensitive and counts every character in the string.
 * It returns `true` if all characters have equal frequency, otherwise `false`.
 *
 * @param {string} s - The input string to validate.
 * @returns {boolean} `true` if all characters occur the same number of times, otherwise `false`.
 *
 * @example
 * validateWord('abcabc') // true
 * validateWord('Abcabc') // true (case-insensitive)
 * validateWord('abcabcd') // false
 * validateWord('wqqq') // false
 */
function validateWord(s) {
  let obj = {};
  for (const each of s.toLowerCase()) {
    obj[each] = (obj[each] || 0) + 1;
  }
  const count = Object.values(obj)[0];
  for (const each in obj) {
    if (obj[each] != count) return false;
  }
  return true;
}
