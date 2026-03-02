/**
 * 7 kyu
 * Hit Count
 * https://www.codewars.com/kata/57b6f850a6fdc76523001162/javascript
 *
 * Generates incremental number arrays based on each digit in a string.
 *
 * For each character in the input string, an array is created starting at 0
 * and incrementing up to the numeric value of that character.
 *
 * @param {string} hitCount - A string consisting of numeric characters (0–9).
 * @returns {number[][]} An array of number arrays corresponding to each digit.
 *
 *  @example
 * counterEffect("125");
 * // Returns:
 * // [
 * //   [0, 1],
 * //   [0, 1, 2],
 * //   [0, 1, 2, 3, 4, 5]
 * // ]
 */

function counterEffect(hitCount) {
  let result = [];
  for (const each of hitCount) {
    let arr = [0];
    for (let i = 0; i < +each; i++) {
      arr.push(i + 1);
    }
    result.push(arr);
  }
  return result;
}
