/**
 * 7 kyu
 * Find the index of the second occurrence of a letter in a string
 * https://www.codewars.com/kata/63f96036b15a210058300ca9/javascript
 *
 * Returns the index of the **second** occurrence of a given symbol in a string.
 *
 * Iterates through the string, counting matches of `symbol`.
 * When the second match is found, its index is returned.
 * If the symbol appears fewer than two times, `-1` is returned.
 *
 * @param {string} s - The string to search through.
 * @param {string} symbol - The character to find the second occurrence of.
 * @returns {number} The index of the second occurrence, or -1 if it does not exist.
 *
 * @example
 * secondSymbol("Hello world", "l"); // 3
 * @example
 * secondSymbol("abcabc", "a"); // 3
 * @example
 * secondSymbol("test", "x"); // -1
 */
function secondSymbol(s, symbol) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === symbol) {
      count++;
      if (count === 2) return i;
    }
  }
  return -1;
}
