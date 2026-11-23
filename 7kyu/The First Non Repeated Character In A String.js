/**
 * 7 kyu
 * The First Non Repeated Character In A String
 * https://www.codewars.com/kata/570f6436b29c708a32000826/javascript
 *
 * Returns the first character that appears only once in a string.
 *
 * @param {string} s - The string to search.
 * @returns {string | null} The first non-repeated character, or null if every character repeats.
 *
 * @example
 * firstNonRepeated("swiss"); // "w"
 *
 * @example
 * firstNonRepeated("aabbcdd"); // "c"
 *
 * @example
 * firstNonRepeated("aabbcc"); // null
 */
function firstNonRepeated(s) {
  let obj = {};
  for (const each of s) {
    obj[each] = (obj[each] || 0) + 1;
  }
  for (const each in obj) {
    if (obj[each] === 1) return each;
  }
  return null;
}
