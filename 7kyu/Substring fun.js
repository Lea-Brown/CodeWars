/**
 * 7 kyu
 * Substring fun
 * https://www.codewars.com/kata/565b112d09c1adfdd500019c/javascript
 *
 * Returns a string made from the nth character of each word,
 * where n is the index of the word in the array.
 *
 * Example:
 * index 0 -> words[0][0]
 * index 1 -> words[1][1]
 * index 2 -> words[2][2]
 *
 * @param {string[]} words - An array of strings.
 * @returns {string} A string composed of the nth character from each word.
 *
 * @example
 * nthChar(["yoda", "best", "has"]);
 * // "yes"
 */

function nthChar(words) {
  let result = [];
  for (let i = 0; i < words.length; i++) {
    result.push(words[i][i]);
  }
  return result.join("");
}
