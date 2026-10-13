/**
 * 7 kyu
 * Sum Factorial
 * https://www.codewars.com/kata/56b0f6243196b9d42d000034/javascript
 *
 * Calculates the sum of the factorials of all numbers in an array.
 *
 * A factorial is the product of all positive integers up to a given number.
 * The factorial of 0 is 1.
 *
 * @param {number[]} arr - An array of non-negative integers.
 * @returns {number} The sum of the factorials of all numbers in the array.
 *
 * @example
 * sumFactorial([1, 2, 3]);
 * // Returns 9 (1! + 2! + 3! = 1 + 2 + 6)
 *
 * @example
 * sumFactorial([0, 4]);
 * // Returns 25 (0! + 4! = 1 + 24)
 *
 * @example
 * sumFactorial([3, 3, 2]);
 * // Returns 14 (3! + 3! + 2! = 6 + 6 + 2)
 */
function sumFactorial(arr) {
  let result = 0;
  for (const num of arr) {
    let factorial = 1;
    for (let i = 2; i <= num; i++) {
      factorial *= i;
    }
    result += factorial;
  }
  return result;
}
