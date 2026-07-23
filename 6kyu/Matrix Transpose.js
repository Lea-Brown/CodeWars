/**
 * 6 kyu
 * Matrix Transpose
 * https://www.codewars.com/kata/52fba2a9adcd10b34300094c/javascript
 *
 * Transposes a 2D matrix (rows become columns).
 *
 * @param {Array<Array<any>>} matrix - A 2D array where each inner array represents a row.
 * @returns {Array<Array<any>>} A new matrix with rows and columns swapped.
 *
 * @example
 * // Example 1: 2 × 3 matrix
 * transpose([
 *   [1, 2, 3],
 *   [4, 5, 6]
 * ]);
 * // Returns:
 * // [
 * //   [1, 4],
 * //   [2, 5],
 * //   [3, 6]
 * // ]
 *
 * @example
 * // Example 2: 3 × 2 matrix
 * transpose([
 *   [1, 2],
 *   [3, 4],
 *   [5, 6]
 * ]);
 * // Returns:
 * // [
 * //   [1, 3, 5],
 * //   [2, 4, 6]
 * // ]
 *
 * @example
 * // Example 3: Matrix of strings
 * transpose([
 *   ["a", "b"],
 *   ["c", "d"],
 *   ["e", "f"]
 * ]);
 * // Returns:
 * // [
 * //   ["a", "c", "e"],
 * //   ["b", "d", "f"]
 * // ]
 */
function transpose(matrix) {
  let result = [];
  for (let i = 0; i < matrix[0].length; i++) {
    let arr = [];
    for (const each of matrix) {
      arr.push(each[i]);
    }
    result.push(arr);
  }
  return result;
}
