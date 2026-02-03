/**
 * 7 kyu
 * Filter Long Words
 * https://www.codewars.com/kata/5697fb83f41965761f000052/javascript
 *
 * Filters words in a sentence that are longer than a given length.
 *
 * The sentence is split by spaces, and only words with a character
 * count greater than `n` are returned.
 *
 * @param {string} sentence - The input sentence containing words separated by spaces.
 * @param {number} n - The minimum word length (exclusive).
 * @returns {string[]} An array of words longer than `n`.
 *
 * @example
 * filterLongWords("The quick brown fox jumps", 4) // ["quick", "brown", "jumps"]
 * filterLongWords("Hello world", 5) // []
 */
const filterLongWords = (sentence, n) =>
  sentence.split(" ").filter((word) => word.length > n);
