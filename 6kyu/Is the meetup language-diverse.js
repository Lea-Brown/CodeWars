/**
 * 6 kyu
 * Coding Meetup #13 - Higher-Order Functions Series - Is the meetup language-diverse?
 * https://www.codewars.com/kata/58381907f8ac48ae070000de/javascript
 *
 * Determines whether the developer list is language diverse.
 *
 * A list is considered language diverse if the number of developers
 * using the most common language is no more than twice the number
 * using the least common language.
 *
 * @param {Array<{ language: string }>} list - Array of developer objects containing a language property.
 * @returns {boolean} Returns true if the language distribution is diverse, otherwise false.
 *
 * @example
 * const developers = [
 *   { language: 'JavaScript' },
 *   { language: 'Python' },
 *   { language: 'Ruby' },
 *   { language: 'JavaScript' }
 * ];
 *
 * isLanguageDiverse(developers);
 * // true
 */

function isLanguageDiverse(list) {
  let languages = {};
  for (const { language } of list) {
    languages[language] = (languages[language] || 0) + 1;
  }
  let small = Infinity;
  let large = 1;
  for (const each in languages) {
    if (languages[each] < small) small = languages[each];
    if (languages[each] > large) large = languages[each];
  }
  return large / small <= 2;
}
