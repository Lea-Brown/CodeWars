/**
 * 7 kyu
 * Sum - Square Even, Root Odd
 * https://www.codewars.com/kata/5a4b16435f08299c7000274f/javascript
 *
 * Calculates the sum of squared even numbers and square roots of odd numbers.
 * Rounds the final result to 2 decimal places.
 *
 * @param {number[]} ns - An array of numbers.
 * @returns {number} The calculated total, rounded to 2 decimal places.
 *
 * @example
 * sumSquareEvenRootOdd([2, 3, 4, 5]); // 23.97
 *
 * @example
 * sumSquareEvenRootOdd([1, 2, 3]); // 6.41
 *
 * @example
 * sumSquareEvenRootOdd([6, 8, 10]); // 200
 */
function sumSquareEvenRootOdd(ns) {
  let total = 0;
  for (const num of ns) {
    total += num % 2 === 0 ? num ** 2 : Math.sqrt(num);
  }
  return +total.toFixed(2);
}
