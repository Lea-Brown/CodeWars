/**
 * 7 kyu
 * Return substring instance count
 * https://www.codewars.com/kata/5168b125faced29f66000005/javascript
 *
 * Counts how many times a substring appears within a string.
 *
 * @param {string} fullText - The full text to search within.
 * @param {string} search - The substring to count.
 * @returns {number} The number of occurrences of `search` in `fullText`.
 *
 * @example
 * solution("hello world", "o");
 * // returns 2
 *
 * @example
 * solution("aaaa", "aa");
 * // returns 2
 */

function solution(fullText, search) {
  return fullText.split(search).length - 1;
}
