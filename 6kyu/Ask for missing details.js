/**
 * 6 kyu
 * Coding Meetup #16 - Higher-Order Functions Series - Ask for missing details
 * https://www.codewars.com/kata/583d972b8bbc0402cf000121/javascript
 *
 * Checks a list of people and adds a 'question' property to each person
 * who has a missing (null) field. Returns an array of people who had missing fields.
 *
 * @param {Array<Object>} list - Array of person objects to check.
 * Each person object can have any number of properties.
 * @returns {Array<Object>} Array of person objects that had at least one null property,
 * each with a 'question' property added for the first missing field.
 *
 * @example
 * const people = [
 *   { firstName: "Alice", lastName: null, age: 25 },
 *   { firstName: null, lastName: "Smith", age: 30 }
 * ];
 *
 * const result = askForMissingDetails(people);
 * console.log(result);
 * // [
 * //   { firstName: "Alice", lastName: null, age: 25, question: "Hi, could you please provide your lastName." },
 * //   { firstName: null, lastName: "Smith", age: 30, question: "Hi, could you please provide your firstName." }
 * // ]
 */

function askForMissingDetails(list) {
  let result = [];
  for (const person of list) {
    for (const each in person) {
      if (person[each] === null) {
        person.question = `Hi, could you please provide your ${each}.`;
        result.push(person);
        break;
      }
    }
  }
  return result;
}
