/**
 * 7 kyu
 * Numbers to Objects
 * https://www.codewars.com/kata/57ced2c1c6fdc22123000316/javascript
 *
 * Converts an array of character codes into an array of objects.
 *
 * Each object uses the character code as its key and the corresponding
 * character as its value.
 *
 * @param {number[]} s - An array of character codes.
 * @returns {Object[]} An array of objects containing each character code and character.
 *
 * @example
 * numObj([118, 117, 120]);
 * // [{ 118: 'v' }, { 117: 'u' }, { 120: 'x' }]
 *
 * @example
 * numObj([65, 66, 67]);
 * // [{ 65: 'A' }, { 66: 'B' }, { 67: 'C' }]
 *
 * @example
 * numObj([97, 98, 99]);
 * // [{ 97: 'a' }, { 98: 'b' }, { 99: 'c' }]
 */
function numObj(s) {
  let result = [];
  for (const each of s) {
    result.push({ [each]: String.fromCharCode(each) });
  }
  return result;
}
