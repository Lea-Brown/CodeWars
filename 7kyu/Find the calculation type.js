/**
 * 7 kyu
 * Find the calculation type
 * https://www.codewars.com/kata/5aca48db188ab3558e0030fa/javascript
 *
 * Determines the arithmetic operation that transforms `a` and `b` into `res`.
 *
 * Checks addition, subtraction, multiplication, and defaults to division
 * when none of the previous operations match.
 *
 * @param {number} a - The first operand.
 * @param {number} b - The second operand.
 * @param {number} res - The expected result of the operation.
 * @returns {string} The name of the arithmetic operation:
 * "addition", "subtraction", "multiplication", or "division".
 *
 * @example
 * calcType(1, 2, 3); // "addition"
 * @example
 * calcType(5, 3, 2); // "subtraction"
 */
function calcType(a, b, res) {
  if (a + b === res) return "addition";
  if (a - b === res) return "subtraction";
  if (a * b === res) return "multiplication";
  return "division";
}
