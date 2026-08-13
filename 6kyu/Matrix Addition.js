/**
 * 6 kyu
 * Matrix Addition
 * https://www.codewars.com/kata/526233aefd4764272800036f/javascript
 *
 * Adds two matrices together, element by element.
 *
 * Both matrices must have the same dimensions. The function does not
 * check this, so mismatched matrices will produce an incorrect or
 * incomplete result.
 *
 * @param {number[][]} a - The first matrix, as an array of rows.
 * @param {number[][]} b - The second matrix, as an array of rows.
 * @returns {number[][]} A new matrix containing the element-wise sum of `a` and `b`.
 *
 * @example
 * // 2x2 matrices
 * matrixAddition([[1, 2], [3, 4]], [[5, 6], [7, 8]]);
 * // returns [[6, 8], [10, 12]]
 *
 * @example
 * // 1x3 matrices (row vectors)
 * matrixAddition([[1, 2, 3]], [[10, 20, 30]]);
 * // returns [[11, 22, 33]]
 *
 * @example
 * // Matrices containing negative numbers
 * matrixAddition([[-1, 0], [2, -3]], [[4, 5], [-6, 7]]);
 * // returns [[3, 5], [-4, 4]]
 */
function matrixAddition(a, b) {
  let result = [];
  for (let i = 0; i < a.length; i++) {
    let arr = [];
    for (let j = 0; j < a[0].length; j++) {
      arr.push(a[i][j] + b[i][j]);
    }
    result.push(arr);
  }
  return result;
}
