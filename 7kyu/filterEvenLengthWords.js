/**
 * 7 kyu
 * filterEvenLengthWords
 * https://www.codewars.com/kata/59564f3bcc15b5591a00004a/javascript
 *
 * Filters an array of words and returns only those whose length is even.
 *
 * @param {string[]} words - The list of words to evaluate.
 * @returns {string[]} An array containing only the words with an even number of characters.
 *
 * @example
 * filterEvenLengthWords(["hi", "hello", "test"]);
 * // ["hi", "test"]
 *
 * @example
 * filterEvenLengthWords(["one", "three", "five"]);
 * // []
 */
const filterEvenLengthWords = (words) =>
  words.filter((each) => each.length % 2 === 0);
