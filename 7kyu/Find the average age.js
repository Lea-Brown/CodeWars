/**
 * 7 kyu
 * Coding Meetup #11 - Higher-Order Functions Series - Find the average age
 * https://www.codewars.com/kata/582ba36cc1901399a70005fc/javascript
 *
 * Calculates the average age from a list of objects.
 *
 * @param {Array<{ age: number }>} list - Array of objects containing an `age` property.
 * @returns {number} The rounded average age.
 *
 * @example
 * getAverageAge([{ age: 20 }, { age: 30 }, { age: 40 }]);
 * // => 30
 */

function getAverageAge(list) {
  let totalAge = 0;
  for (const each of list) {
    totalAge += each.age;
  }
  return Math.round(totalAge / list.length);
}

// found out you can do this
function getAverageAge(list) {
  let totalAge = 0;
  for (const { age } of list) {
    totalAge += age;
  }
  return Math.round(totalAge / list.length);
}
