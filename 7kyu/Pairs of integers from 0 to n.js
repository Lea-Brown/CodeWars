/**
 * 7 kyu
 * Pairs of integers from 0 to n
 * https://www.codewars.com/kata/588e27b7d1140d31cb000060/javascript
 *
 * Generates all pairs of numbers where the first number is less than
 * or equal to the second number, with both numbers ranging from 0 to n.
 *
 * @param {number} n - The maximum number in each pair.
 * @returns {number[][]} An array of pairs.
 *
 * @example
 * generatePairs(0); // [[0, 0]]
 *
 * @example
 * generatePairs(1); // [[0, 0], [0, 1], [1, 1]]
 *
 * @example
 * generatePairs(2);
 * // [[0, 0], [0, 1], [0, 2], [1, 1], [1, 2], [2, 2]]
 */
function generatePairs(n) {
  let result = [];
  for (let i = 0; i <= n; i++) {
    for (let j = i; j <= n; j++) {
      result.push([i, j]);
    }
  }
  return result;
}
