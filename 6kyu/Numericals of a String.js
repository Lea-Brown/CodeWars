/**
 * 6 kyu
 * Numericals of a String
 * https://www.codewars.com/kata/5b4070144d7d8bbfe7000001/javascript
 *
 * Counts running occurrences of each character in a string.
 *
 * For each character, the function counts how many times that character
 * has appeared so far, including the current one. It returns these counts
 * as one string, in the order the characters appear.
 *
 * @param {string} s - The input string.
 * @returns {string} A string of running counts, one count per character.
 *
 * @example
 * numericals("aab");
 * // returns "121"
 * // a -> 1st "a" (count 1), a -> 2nd "a" (count 2), b -> 1st "b" (count 1)
 *
 * @example
 * numericals("abcabc");
 * // returns "111222"
 * // a, b, c each appear once first (all count 1)
 * // then a, b, c each appear a second time (all count 2)
 *
 * @example
 * numericals("aaa");
 * // returns "123"
 * // each "a" adds 1 to the running count
 */
function numericals(s) {
  let obj = {};
  let result = [];
  for (const each of s) {
    obj[each] = (obj[each] || 0) + 1;
    result.push(obj[each]);
  }
  return result.join("");
}
