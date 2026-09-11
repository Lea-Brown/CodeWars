/**
 * 7 kyu
 * Heron's formula
 * https://www.codewars.com/kata/57aa218e72292d98d500240f/javascript
 *
 * Calculates the area of a triangle using Heron's formula.
 *
 * @param {number} a - Length of the first side.
 * @param {number} b - Length of the second side.
 * @param {number} c - Length of the third side.
 * @returns {number} The area of the triangle.
 *
 * @example
 * heron(3, 4, 5); // 6
 *
 * @example
 * heron(5, 5, 6); // 12
 *
 * @example
 * heron(7, 8, 9); // 26.832815729997478
 */
function heron(a, b, c) {
  const s = (a + b + c) / 2;
  return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}
