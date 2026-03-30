/**
 * 7 kyu
 * Coding Meetup #12 - Higher-Order Functions Series - Find GitHub admins
 * https://www.codewars.com/kata/582dace555a1f4d859000058/javascript
 *
 * Returns developers from the list who use a specific language
 * and have GitHub admin status.
 *
 * @param {Object[]} list - Array of developer objects.
 * @param {string} list[].language - The developer's programming language.
 * @param {string} list[].githubAdmin - Whether the developer is a GitHub admin ("yes" or "no").
 * @param {string} lang - The language to filter developers by.
 * @returns {Object[]} Array of developers who match the language and are GitHub admins.
 *
 * @example
 * const devs = [
 *   { firstName: "Harry", language: "JavaScript", githubAdmin: "yes" },
 *   { firstName: "Anna", language: "Python", githubAdmin: "no" }
 * ];
 *
 * const result = findAdmin(devs, "JavaScript");
 * // [{ firstName: "Harry", language: "JavaScript", githubAdmin: "yes" }]
 */

function findAdmin(list, lang) {
  let result = [];
  for (const person of list) {
    if (person.language === lang && person.githubAdmin === "yes")
      result.push(person);
  }
  return result;
}
