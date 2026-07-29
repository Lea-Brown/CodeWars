/**
 * 6 kyu
 * Only Duplicates
 * https://www.codewars.com/kata/5a1dc4baffe75f270200006b/javascript
 *
 * Returns a new string containing only the characters that appear
 * more than once in the input string. Characters are returned in
 * their original order, including repeated occurrences.
 *
 * @param {string} str - The string to filter.
 * @returns {string} A string containing only duplicate characters.
 *
 * @example
 * // Duplicate letters are preserved in their original positions.
 * onlyDuplicates("abccdefee");
 * // => "ccee"
 *
 * @example
 * // All occurrences of duplicated characters are included.
 * onlyDuplicates("hello");
 * // => "ll"
 *
 * @example
 * // No duplicate characters.
 * onlyDuplicates("abc");
 * // => ""
 */
function onlyDuplicates(str) {
  let obj = {};
  for (const each of str) {
    obj[each] = (obj[each] || 0) + 1;
  }
  let result = [];
  for (const each of str) {
    if (obj[each] > 1) result.push(each);
  }
  return result.join("");
}
