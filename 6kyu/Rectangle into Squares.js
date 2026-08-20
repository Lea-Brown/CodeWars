/**
 * 6 kyu
 * Rectangle into Squares
 * https://www.codewars.com/kata/55466989aeecab5aac00003e/javascript
 *
 * Divides a rectangle into the largest possible squares.
 *
 * Uses the Euclidean algorithm to repeatedly find the largest square
 * that fits into the remaining rectangle.
 *
 * @param {number} lng - The length of the rectangle.
 * @param {number} wdth - The width of the rectangle.
 * @returns {number[] | null} An array containing the side lengths of
 * the squares, or null if the rectangle is already a square.
 *
 * @example
 * sqInRect(5, 3);
 * // [3, 2, 1, 1]
 *
 * @example
 * sqInRect(20, 14);
 * // [14, 6, 6, 2, 2, 2]
 *
 * @example
 * sqInRect(5, 5);
 * // null
 */
function sqInRect(lng, wdth) {
  if (lng === wdth) return null;
  let result = [];
  let big = Math.max(lng, wdth);
  let small = Math.min(lng, wdth);
  while (big > 0 && small > 0) {
    let bigTemp = big;
    result.push(small);
    bigTemp = big - small;
    big = Math.max(bigTemp, small);
    small = Math.min(bigTemp, small);
  }
  return result;
}

// ai. Best for larger sizes
function sqInRect(length, width) {
  if (length === width) return null;
  const squares = [];
  while (length > 0 && width > 0) {
    const square = Math.min(length, width);
    squares.push(square);
    if (length > width) {
      length -= width;
    } else {
      width -= length;
    }
  }
  return squares;
}
