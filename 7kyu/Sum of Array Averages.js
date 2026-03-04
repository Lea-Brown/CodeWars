/**
 * 7 kyu
 * Sum of Array Averages
 * https://www.codewars.com/kata/56d5166ec87df55dbe000063/javascript
 *
 * Calculates the sum of the averages of nested number arrays.
 *
 * For each sub-array, its average is calculated and then all averages
 * are summed together. The final result is rounded down to the nearest integer.
 *
 * @param {number[][]} arr - An array of arrays containing numeric values.
 * @returns {number} The floored sum of the averages of each sub-array.
 *
 * @example
 * sumAverage([[1, 2, 3], [4, 5, 6]]);
 * // (2 + 5) = 7 → returns 7
 *
 * @example
 * sumAverage([[10, 20], [30]]);
 * // (15 + 30) = 45 → returns 45
 */

const sumAverage = (arr) => {
  let count = 0;
  for (const each of arr) {
    count += each.reduce((total, value) => total + value, 0) / each.length;
  }
  return Math.floor(count);
};
