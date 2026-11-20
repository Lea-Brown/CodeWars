/**
 * 7 kyu
 * Words to sentence
 * https://www.codewars.com/kata/57a06005cf1fa5fbd5000216/javascript
 *
 * Joins an array of words into a single sentence, separated by spaces.
 *
 * @param {string[]} words - An array of words to join.
 * @returns {string} The words joined into a single string.
 *
 * @example
 * wordsToSentence(["Hello", "world"]);
 * // Returns: "Hello world"
 *
 * @example
 * wordsToSentence(["JavaScript", "is", "fun"]);
 * // Returns: "JavaScript is fun"
 *
 * @example
 * wordsToSentence(["One"]);
 * // Returns: "One"
 */
function wordsToSentence(words) {
  return words.join(" ");
}
