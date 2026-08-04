/**
 * 8 kyu
 * Compare within margin
 * https://www.codewars.com/kata/56453a12fcee9a6c4700009c/javascript
 *
 * Compares two numbers, treating them as equal if they are within a given margin.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} [margin=0] - The maximum difference to treat as equal.
 * @returns {number} -1 if a is less than b (outside margin), 1 if a is greater than b (outside margin), or 0 if they are equal or within margin.
 *
 * @example
 * // Basic comparison, no margin
 * closeCompare(5, 10); // returns -1
 *
 * @example
 * // Values within the margin are treated as equal
 * closeCompare(10.02, 10.05, 0.1); // returns 0
 *
 * @example
 * // Values outside the margin compare normally
 * closeCompare(10.5, 10.0, 0.1); // returns 1
 */
function closeCompare(a, b, margin = 0) {
  const total = Math.abs(a - b);
  if (margin >= total) return 0;
  if (a < b) return -1;
  return 1;
}
