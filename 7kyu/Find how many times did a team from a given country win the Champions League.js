/**
 * 7 kyu
 * Find how many times did a team from a given country win the Champions League?
 * https://www.codewars.com/kata/581b30af1ef8ee6aea0015b9/javascript
 *
 * Counts the number of objects in an array that have a matching country.
 *
 * @param {Array<{country: string}>} winnerList - Array of objects, each containing a `country` property.
 * @param {string} country - The country to count in the winner list.
 * @returns {number} The number of objects where `country` matches the specified value.
 *
 * @example
 * const winners = [
 *   { country: 'UK' },
 *   { country: 'US' },
 *   { country: 'UK' }
 * ];
 * countWins(winners, 'UK'); // returns 2
 */
function countWins(winnerList, country) {
  let count = 0;
  for (const each of winnerList) {
    if (each.country === country) count++;
  }
  return count;
}
