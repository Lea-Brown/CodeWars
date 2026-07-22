/**
 * 6 kyu
 * Round by 0.5 steps
 * https://www.codewars.com/kata/51f1342c76b586046800002a/javascript
 *
 * Rounds a number to the nearest 0.5 using the following rules:
 * - Fraction < 0.25  → round down to the nearest integer.
 * - Fraction >= 0.75 → round up to the next integer.
 * - Otherwise        → round to the nearest 0.5.
 *
 * @param {number} n - The number to round.
 * @returns {number} The rounded value.
 *
 * @example
 * solution(3.1);
 * // Returns: 3
 *
 * @example
 * solution(3.4);
 * // Returns: 3.5
 *
 * @example
 * solution(3.9);
 * // Returns: 4
 */
function solution(n) {
  let num = n.toString().split(".");
  let test = +`0.${num[1]}`;
  if (test >= 0.75) return +num[0] + 1;
  if (test < 0.25) return +num[0];
  return +`${num[0]}.5`;
}

// better way of doing it
function solution(n) {
  return Math.round(n * 2) / 2;
}
