/**
 * 7 kyu
 * Arithmetic progression
 * https://www.codewars.com/kata/55caf1fd8063ddfa8e000018/javascript
 *
 * Generates the first n elements of an arithmetic sequence.
 *
 * @param {number} a - The first element of the sequence.
 * @param {number} d - The common difference between consecutive elements.
 * @param {number} n - The number of elements to generate.
 * @returns {string} The sequence elements as a comma-separated string.
 *
 * @example
 * arithmeticSequenceElements(1, 2, 5);
 * // "1, 3, 5, 7, 9"
 *
 * @example
 * arithmeticSequenceElements(5, 3, 4);
 * // "5, 8, 11, 14"
 *
 * @example
 * arithmeticSequenceElements(10, -2, 6);
 * // "10, 8, 6, 4, 2, 0"
 */
function arithmeticSequenceElements(a, d, n) {
  let result = [];
  let current = a;
  for (let i = 0; i < n; i++) {
    result.push(current.toString());
    current += d;
  }
  return result.join(", ");
}
