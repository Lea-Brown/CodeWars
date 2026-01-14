/**
 * 7 kyu
 * makeBackronym
 * https://www.codewars.com/kata/55805ab490c73741b7000064/train/javascript
 *
 * Converts a string into a backronym by replacing each character with
 * a corresponding word from a predefined dictionary.
 *
 * Each character in the input string is converted to uppercase and used
 * as a key to look up a value in the global `dict` object.
 *
 * @param {string} string - The input string to convert into a backronym.
 * @returns {string} A space-separated string formed from dictionary values.
 *
 * @example
 * makeBackronym("abc") // "awesome bold confident"
 * makeBackronym("Code") // "creative original dynamic energetic"
 */
const makeBackronym = function (string) {
  let result = [];
  for (const each of string) {
    result.push(dict[each.toUpperCase()]);
  }
  return result.join(" ");
};
