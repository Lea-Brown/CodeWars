/**
 * 6 kyu
 * Find the Mine!
 * https://www.codewars.com/kata/528d9adf0e03778b9e00067e/javascript
 *
 * Finds the coordinates of the mine (represented by the value `1`)
 * within a 2D field.
 *
 * @param {number[][]} field - A 2D array where each element is either `0` or `1`.
 * @returns {[number, number] | undefined} The `[row, column]` of the mine,
 * or `undefined` if no mine is found.
 *
 * @example
 * mineLocation([
 *   [0, 0, 0],
 *   [0, 1, 0],
 *   [0, 0, 0]
 * ]);
 * // → [1, 1]
 */
function mineLocation(field) {
  for (let i = 0; i < field.length; i++) {
    for (let a = 0; a < field[i].length; a++) {
      if (field[i][a] === 1) return [i, a];
    }
  }
}
