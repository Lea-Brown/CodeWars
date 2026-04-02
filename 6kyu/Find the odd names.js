/**
 * 6 kyu
 * Coding Meetup #15 - Higher-Order Functions Series - Find the odd names
 * https://www.codewars.com/kata/583a8bde28019d615a000035/javascript
 *
 * Returns developers whose first name has an odd sum of character codes.
 *
 * Each character in the `firstName` string is converted to its UTF-16
 * character code using `charCodeAt()`. If the total sum of those codes
 * is odd, the person is included in the result.
 *
 * @param {Array<{ firstName: string }>} list - Array of developer objects.
 * @returns {Array<{ firstName: string }>} A new array containing only the developers whose first name character code sum is odd.
 *
 * @example
 * const devs = [
 *   { firstName: "Anna" },
 *   { firstName: "Bob" },
 *   { firstName: "Clara" }
 * ];
 *
 * const result = findOddNames(devs);
 * console.log(result);
 */

function findOddNames(list) {
  let result = [];
  for (const person of list) {
    let count = 0;
    for (const each of person.firstName) {
      count += each.charCodeAt(0);
    }
    if (count % 2 !== 0) result.push(person);
  }
  return result;
}
