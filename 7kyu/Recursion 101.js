/**
 * 7 kyu
 * Recursion 101
 * https://www.codewars.com/kata/5b752a42b11814b09c00005d/javascript
 *
 * Repeatedly subtracts twice one number from the other until
 * either number is zero or neither number is at least twice the other.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {[number, number]} The final values of a and b.
 *
 * @example
 * solution(6, 1); // [2, 1]
 * @example
 * solution(1, 5); // [1, 3]
 * @example
 * solution(0, 7); // [0, 7]
 */
function solve(a, b) {
  while (a !== 0 && b !== 0) {
    if (a >= 2 * b) {
      a -= 2 * b;
    } else if (b >= 2 * a) {
      b -= 2 * a;
    } else {
      break;
    }
  }

  return [a, b];
}
