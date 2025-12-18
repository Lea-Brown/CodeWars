/**
 * 7 kyu
 * Simple Fun #37: House Numbers Sum
 * https://www.codewars.com/kata/58880c6e79a0a3e459000004/javascript
 *
 * Calculates the sum of numbers in an array up to (but not including) the first `0`.
 * Iteration stops immediately when `0` is encountered.
 *
 * @param {number[]} inputArray
 * An array of numbers representing house numbers.
 *
 * @returns {number}
 * The sum of the numbers before the first `0`.
 *
 * @example
 * houseNumbersSum([5, 1, 2, 3, 0, 1, 5, 0]) // 11
 * houseNumbersSum([4, 2, 1, 0])           // 7
 * houseNumbersSum([0, 10, 20])         // 0
 */
function houseNumbersSum(inputArray) {
  let count = 0;
  for (const each of inputArray) {
    if (each === 0) return count;
    count += each;
  }
}
