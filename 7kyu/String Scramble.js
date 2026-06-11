/**
 * 7 kyu
 * String Scramble
 * https://www.codewars.com/kata/5822d89270ca28c85c0000f3/javascript
 *
 * Rearranges the characters of a string based on a provided index mapping.
 *
 * Each character in `str` is placed into a new position determined by the
 * corresponding value in `arr`. For example, if `arr[i]` is `3`, then the
 * character `str[i]` will appear at index `3` in the output.
 *
 * @param {string} str - The input string whose characters will be rearranged.
 * @param {number[]} arr - An array of indices representing the new positions
 *   for each character in `str`. Must be the same length as `str`.
 * @returns {string} The scrambled string with characters placed in their
 *   mapped positions.
 *
 * @example
 * scramble("abcd", [2, 1, 3, 0]);
 * // → "dbac"
 *
 * @example
 * scramble("hello", [4, 3, 2, 1, 0]);
 * // → "olleh"
 */
function scramble(str, arr) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    obj[arr[i]] = str[i];
  }
  let result = [];
  for (let i = 0; i < str.length; i++) {
    result.push(obj[i]);
  }
  return result.join("");
}

// Found out you can add to an array like this.
function scramble(str, arr) {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    result[arr[i]] = str[i];
  }
  return result.join("");
}
