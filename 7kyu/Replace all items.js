/**
 * 7 kyu
 * Replace all items
 * https://www.codewars.com/kata/57ae18c6e298a7a6d5000c7a/javascript
 *
 * Replaces all occurrences of a specified value in an array or string.
 *
 * @param {Array|string} seq - The array or string to search.
 * @param {*} find - The value to find.
 * @param {*} replace - The value to replace matches with.
 * @returns {Array|string} A new array or string with matching values replaced.
 *
 * @example
 * replaceAll([1, 2, 3, 2], 2, 9);
 * // Returns: [1, 9, 3, 9]
 *
 * @example
 * replaceAll("hello world", "o", "a");
 * // Returns: "hella warld"
 *
 * @example
 * replaceAll(["cat", "dog", "cat"], "cat", "bird");
 * // Returns: ["bird", "dog", "bird"]
 */
function replaceAll(seq, find, replace) {
  let result = [];
  for (const each of seq) {
    result.push(each === find ? replace : each);
  }
  return Array.isArray(seq) ? result : result.join("");
}
