/**
 * 7 kyu
 * Naughty or Nice?
 * https://www.codewars.com/kata/52a6b34e43c2484ac10000cd/javascript
 */

/**
 * Returns an array of names for all people who were marked as nice.
 *
 * @param {Array<{name: string, wasNice: boolean}>} people
 *   The list of people to evaluate.
 * @returns {string[]}
 *   A list of names belonging to people whose `wasNice` property is true.
 */
function getNiceNames(people) {
  let result = [];
  for (const person of people) {
    if (person.wasNice) result.push(person.name);
  }
  return result;
}

/**
 * Returns an array of names for all people who were marked as naughty.
 *
 * @param {Array<{name: string, wasNice: boolean}>} people
 *   The list of people to evaluate.
 * @returns {string[]}
 *   A list of names belonging to people whose `wasNice` property is false.
 */
function getNaughtyNames(people) {
  let result = [];
  for (const person of people) {
    if (person.wasNice === false) result.push(person.name);
  }
  return result;
}
