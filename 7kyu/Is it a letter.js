/**
 * 7 kyu
 * Is it a letter?
 * https://www.codewars.com/kata/57a06b07cf1fa58b2b000252/javascript
 *
 * Determines whether a given character is an English alphabet letter (A–Z or a–z).
 *
 * @param {string} character - A single character to evaluate.
 * @returns {boolean} True if the character is a letter, otherwise false.
 *
 * @example
 * isItLetter("A"); // true
 * isItLetter("g"); // true
 * isItLetter("5"); // false
 */
function isItLetter(character) {
  const code = character.charCodeAt(0);
  return (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
}
