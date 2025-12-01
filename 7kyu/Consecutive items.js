/**
 * 7 kyu
 * Consecutive items
 * https://www.codewars.com/kata/5f6d533e1475f30001e47514/javascript
 *
 * Checks whether two values appear next to each other (in any order)
 * within an array.
 *
 * @param {Array} arr - The array to search through.
 * @param {*} a - The first value to look for.
 * @param {*} b - The second value to look for.
 * @returns {boolean} `true` if `a` and `b` appear consecutively, otherwise `false`.
 *
 * @example
 * consecutive(["x", "y", "z"], "y", "z"); // true
 * consecutive([1, 2, 3, 4], 3, 1);        // false
 * consecutive(["a", "b", "a"], "a", "b"); // true
 */
function consecutive(arr, a, b) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === a && arr[i - 1] === b) return true;
    if (arr[i] === b && arr[i - 1] === a) return true;
  }
  return false;
}
