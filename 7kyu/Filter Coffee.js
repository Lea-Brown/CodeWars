/**
 * 7 kyu
 * Filter Coffee
 * https://www.codewars.com/kata/56069d0c4af7f633910000d3/javascript
 *
 * Filters a list of prices to those within the given budget and returns them
 * as a comma‑separated, ascending‑sorted string.
 *
 * @param {number} budget - Maximum allowed price.
 * @param {number[]} prices - Array of numeric prices to evaluate.
 * @returns {string} Comma‑separated list of prices that are <= budget, sorted ascending.
 *
 * @example
 * search(50, [10, 60, 30, 50]); // "10,30,50"
 *
 * @example
 * search(20, [25, 5, 15]); // "5,15"
 */
function search(budget, prices) {
  let result = [];
  for (const each of prices) {
    if (each <= budget) result.push(each);
  }
  return result.sort((a, b) => a - b).join(",");
}
