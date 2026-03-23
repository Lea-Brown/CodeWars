/**
 * 7 kyu
 * Coding Meetup #5 - Higher-Order Functions Series - Prepare the count of languages
 * https://www.codewars.com/kata/5828713ed04efde70e000346/javascript
 *
 * Counts how many developers use each programming language.
 *
 * @param {Array<{ language: string }>} list - Array of developer objects containing a `language` property.
 * @returns {Record<string, number>} An object mapping each language to the number of occurrences.
 *
 * @example
 * const devs = [
 *   { language: "JavaScript" },
 *   { language: "Python" },
 *   { language: "JavaScript" }
 * ];
 *
 * countLanguages(devs);
 * // { JavaScript: 2, Python: 1 }
 */

function countLanguages(list) {
  let obj = {};
  for (const { language } of list) {
    obj[language] = (obj[language] || 0) + 1;
  }
  return obj;
}
