/**
 * 7 kyu
 * Frequency sequence
 * https://www.codewars.com/kata/585a033e3a36cdc50a00011c/javascript
 *
 * Generates a frequency sequence for a string, where each character
 * is replaced by the number of times it appears in the string.
 *
 * @function [freqSeq](ca://s?q=Explain_freqSeq_function)
 * @param {string} str - The input string whose character frequencies are counted.
 * @param {string} sep - The separator used between frequency values.
 * @returns {string} A string of frequency counts joined by the given separator.
 *
 * @example
 * freqSeq("hello", "-");
 * // "1-1-2-2-1"
 *
 * @example
 * freqSeq("112233", ",");
 * // "2,2,2,2,2,2"
 *
 * @example
 * freqSeq("abracadabra", " ");
 * // "5 2 2 5 1 5 2 5 2 5 5"
 */
function freqSeq(str, sep) {
  let obj = {};
  for (const each of str) {
    obj[each] = (obj[each] || 0) + 1;
  }
  let result = [];
  for (const each of str) {
    result.push(obj[each]);
  }
  return result.join(sep);
}
