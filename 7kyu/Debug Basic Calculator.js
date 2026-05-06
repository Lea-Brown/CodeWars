/**
 * 7 kyu
 * Debug Basic Calculator
 * https://www.codewars.com/kata/56368f37d464c0a43c00007f/javascript
 *
 * Performs a basic arithmetic calculation between two numbers.
 *
 * @param {number} a - The first operand.
 * @param {"+"|"-"|"*"|"/"} o - The operator to apply.
 * @param {number} b - The second operand.
 * @returns {number|null} The result of the calculation, or null if:
 * - The operator is invalid
 * - Division by zero is attempted
 *
 * @example
 * calculate(5, "+", 3); // returns 8
 * calculate(10, "/", 2); // returns 5
 * calculate(10, "/", 0); // returns null
 * calculate(4, "^", 2); // returns null (unsupported operator)
 */

function calculate(a, o, b) {
  console.log(a, o, b);
  if (o === "+") return a + b;
  if (o === "-") return a - b;
  if (o === "/" && b !== 0) return a / b;
  if (o === "*") return a * b;
  return null;
}

// testing things with claude
function calculate(a, o, b) {
  const operations = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => (b !== 0 ? a / b : null),
  };
  return operations[o]?.(a, b) ?? null;
}
