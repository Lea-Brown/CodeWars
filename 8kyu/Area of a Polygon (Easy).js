/**
 * 8 kyu
 * Area of a Polygon (Easy)
 * https://www.codewars.com/kata/574758e396b130b63e00069b/javascript
 *
 * Calculates the area of a trapezoid.
 *
 * @param {number} A - The length of the first parallel side.
 * @param {number} B - The height of the trapezoid.
 * @param {number} C - The length of the second parallel side.
 * @param {number} D - D is half of B.
 * @returns {number} The area of the trapezoid.
 *
 * @example
 * polygonArea(4, 5, 8, 0);
 * // 30
 *
 * @example
 * polygonArea(3, 6, 7, 0);
 * // 30
 *
 * @example
 * polygonArea(10, 4, 6, 0);
 * // 32
 */
function polygonArea(A, B, C, D) {
  const topR = B * (C - A);
  const topT = 0.5 * topR;
  return A * B + (topR - topT);
}

// cleaner???
function polygonArea(A, B, C, D) {
  return A * B + 0.5 * B * (C - A);
}
