/**
 * 7 kyu
 * Band name generator
 * https://www.codewars.com/kata/59727ff285281a44e3000011/javascript
 *
 * Generates a band name from a given string.
 *
 * If the first and last characters of the string are the same,
 * the band name is created by capitalising the first letter,
 * removing the last character, and then appending the original string.
 *
 * Otherwise, the band name is prefixed with "The" and the first
 * letter of the string is capitalised.
 *
 * @param {string} str - The input word used to generate the band name.
 * @returns {string} The generated band name.
 *
 * @example
 * bandNameGenerator("alaska");  // "Alaskalaska"
 * bandNameGenerator("level");   // "Levelevel"
 * bandNameGenerator("dolphin"); // "The Dolphin"
 */
function bandNameGenerator(str) {
  return str[0] === str[str.length - 1]
    ? `${str[0].toUpperCase()}${str.slice(1, -1)}${str}`
    : `The ${str[0].toUpperCase()}${str.slice(1)}`;
}
