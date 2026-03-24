/**
 * 6 kyu
 * Coding Meetup #7 - Higher-Order Functions Series - Find the most senior developer
 * https://www.codewars.com/kata/582887f7d04efdaae3000090/javascript
 *
 * Returns the developer(s) with the highest age from a list.
 * If multiple developers share the same maximum age, all are returned.
 *
 * @param {Array<{age: number}>} list - Array of developer objects.
 * @returns {Array<{age: number}>} Array containing the oldest developer(s).
 *
 * @example
 * const devs = [
 *   { firstName: "Alice", age: 30 },
 *   { firstName: "Bob", age: 40 },
 *   { firstName: "Carol", age: 40 }
 * ];
 *
 * findSenior(devs);
 * // [
 * //   { firstName: "Bob", age: 40 },
 * //   { firstName: "Carol", age: 40 }
 * // ]
 */

function findSenior(list) {
  let result = [];
  let oldest = 0;
  for (const person of list) {
    if (person.age === oldest) {
      result.push(person);
    } else if (person.age > oldest) {
      result = [person];
      oldest = person.age;
    }
  }
  return result;
}
