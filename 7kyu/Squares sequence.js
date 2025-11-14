/**
 * 7 kyu
 * Squares sequence
 * https://www.codewars.com/kata/5546180ca783b6d2d5000062/javascript
 *
 * Generates an array of squared values, starting from an initial number.
 *
 * The first element is always `x`. Each following element is the square
 * of the previous one. If `n` is zero or negative, an empty array is returned.
 *
 * @param {number} x - The starting number.
 * @param {number} n - How many values to generate.
 * @returns {number[]} An array containing `n` numbers, each the square of the previous.
 *
 * @example
 * squares(2, 4); // [2, 4, 16, 256]
 */
function squares(x, n) {
  if (n <= 0) return [];

  let result = [x];

  for (let i = 0; i < n - 1; i++) {
    result.push(result[result.length - 1] ** 2);
  }

  return result;
}
