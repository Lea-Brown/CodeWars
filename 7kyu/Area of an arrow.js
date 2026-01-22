/**
 * 7 kyu
 * Area of an arrow
 * https://www.codewars.com/kata/589478160c0f8a40870000bc/javascript
 *
 * Calculates the area of an arrow shape using its base and height.
 *
 * The formula used is: (a * b) / 4.
 *
 * @param {number} a - The length of the arrow base.
 * @param {number} b - The height of the arrow.
 * @returns {number} The calculated area of the arrow.
 *
 * @example
 * arrowArea(4, 2) // 2
 * arrowArea(10, 4) // 10
 */
const arrowArea = (a, b) => (a * b) / 4;
