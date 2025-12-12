/**
 * 7 kyu
 * Count all the sheep on farm in the heights of New Zealand
 * https://www.codewars.com/kata/58e0f0bf92d04ccf0a000010/javascript
 *
 * Calculates how many sheep are still missing after counting those
 * seen on Friday and Saturday. It subtracts each day's counts directly
 * from the total and returns the remainder.
 *
 * @param {number[]} friday - Array of sheep counts reported on Friday.
 * @param {number[]} saturday - Array of sheep counts reported on Saturday.
 * @param {number} total - The total number of sheep expected.
 * @returns {number} The number of sheep still missing.
 *
 * @example
 * // Friday: [1, 2], Saturday: [3], total: 10 → missing: 4
 * lostSheep([1, 2], [3], 10);
 *
 * // Friday: [], Saturday: [5, 5], total: 15 → missing: 5
 * lostSheep([], [5, 5], 15);
 *
 * // Friday: [10], Saturday: [], total: 12 → missing: 2
 * lostSheep([10], [], 12);
 */
function lostSheep(friday, saturday, total) {
  for (const each of friday) {
    total -= each;
  }
  for (const each of saturday) {
    total -= each;
  }
  return total;
}
