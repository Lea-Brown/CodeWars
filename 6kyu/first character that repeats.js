/**
 * 6 kyu
 * first character that repeats
 * https://www.codewars.com/kata/54f9f4d7c41722304e000bbb/javascript
 *
 * Returns the first character in a string that appears more than once.
 *
 * The function counts the occurrences of each character, then returns
 * the first character (based on its order in the original string) whose
 * total count is greater than 1.
 *
 * @param {string} s - The input string to search.
 * @returns {string|undefined} The first duplicate character, or `undefined`
 * if the string contains no duplicate characters.
 *
 * @example
 * firstDup("abca");
 * // Returns: "a"
 *
 * @example
 * firstDup("swiss");
 * // Returns: "s"
 *
 * @example
 * firstDup("abc");
 * // Returns: undefined
 */
function firstDup(s) {
  let obj = {};
  for (const each of s) {
    obj[each] = (obj[each] || 0) + 1;
  }
  for (const each of s) {
    if (obj[each] > 1) return each;
  }
  return undefined;
}
