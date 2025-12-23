/**
 * 7 kyu
 * Average Scores
 * https://www.codewars.com/kata/57b68bc7b69bfc8209000307/javascript
 *
 * Calculates the rounded average (mean) of an array of numbers.
 *
 * The function sums all values in the `scores` array, divides by the
 * number of elements, and rounds the result to the nearest integer.
 *
 * @param {number[]} scores - An array of numeric scores to average.
 * @returns {number} The rounded average of the provided scores.
 *
 * @example
 * average([1, 2, 3]);        // 2
 * average([10, 20, 30, 40]); // 25
 * average([5]);             // 5
 */
function average(scores) {
  return Math.round(scores.reduce((acc, add) => acc + add, 0) / scores.length);
}
