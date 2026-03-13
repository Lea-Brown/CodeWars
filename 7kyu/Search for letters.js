/**
 * 7 kyu
 * Search for letters
 * https://www.codewars.com/kata/52dbae61ca039685460001ae/javascript
 *
 * Creates a 26-character binary string indicating which letters of the
 * English alphabet appear in the input string.
 *
 * Each position represents a letter:
 * - index 0 → 'a'
 * - index 1 → 'b'
 * - ...
 * - index 25 → 'z'
 *
 * If a letter appears at least once in the input (case-insensitive),
 * its position is set to `1`, otherwise `0`.
 * Non-alphabet characters are ignored.
 *
 * @param {string} string - The input string to analyse.
 * @returns {string} A 26-character string of 0s and 1s representing
 * the presence of letters a–z in the input.
 *
 * @example
 * change("aabBc");
 * // "11100000000000000000000000"
 *
 * @example
 * change("Hello!");
 * // "01001000000000000001000000"
 */

function change(string) {
  let result = new Array(26).fill(0);
  for (const each of string) {
    const check = each.toLowerCase().charCodeAt(0) - 97;
    if (check >= 0 && check <= 25) result[check] = 1;
  }
  return result.join("");
}
