/**
 * 7 kyu
 * Length and two values.
 * https://www.codewars.com/kata/62a611067274990047f431a8/javascript
 *
 * Creates an array of length `n` where values alternate between `firstValue`
 * and `secondValue`, starting with `firstValue` at index 0.
 *
 * @param {number} n - The number of elements to generate.
 * @param {*} firstValue - The value to place at even indexes (0, 2, 4, ...).
 * @param {*} secondValue - The value to place at odd indexes (1, 3, 5, ...).
 * @returns {Array<*>} A new array with alternating values.
 *
 * @example
 * alternate(5, 'A', 'B') // ['A', 'B', 'A', 'B', 'A']
 * alternate(4, 1, 0)     // [1, 0, 1, 0]
 * alternate(3, true, false) // [true, false, true]
 */
function alternate(n, firstValue, secondValue) {
  let result = [];
  for (let i = 0; i < n; i++) {
    result.push(i % 2 === 0 ? firstValue : secondValue);
  }
  return result;
}
