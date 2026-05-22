/**
 * 7 kyu
 * Every possible sum of two digits
 * https://www.codewars.com/kata/5b4e474305f04bea11000148/javascript
 *
 * Generates all pairwise sums of digits in a number.
 *
 * Converts the number to a string, then for every digit at index `i`,
 * adds it to every following digit at index `a > i`. Each sum is pushed
 * into the result array in the order encountered.
 *
 * @param {number} num - The number whose digit pairs will be summed.
 * @returns {number[]} An array of sums for every unique digit pair.
 *
 * @example
 * // 1+2, 1+3, 2+3 → [3, 4, 5]
 * digits(123); // returns [3, 4, 5]
 *
 * @example
 * // 4+0, 4+7, 4+2, 0+7, 0+2, 7+2 → [4, 11, 6, 7, 2, 9]
 * digits(4072); // returns [4, 11, 6, 7, 2, 9]
 *
 * @example
 * // Works with repeated digits
 * // 5+5, 5+5, 5+5 → [10, 10, 10]
 * digits(555); // returns [10, 10, 10]
 */
function digits(num) {
  let result = [];
  const numStr = num.toString();
  for (let i = 0; i < numStr.length; i++) {
    for (let a = i + 1; a < numStr.length; a++) {
      result.push(+numStr[i] + +numStr[a]);
    }
  }
  return result;
}
