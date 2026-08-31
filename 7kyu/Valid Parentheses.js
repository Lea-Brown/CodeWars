/**
 * 7 kyu
 * Valid Parentheses
 * https://www.codewars.com/kata/6411b91a5e71b915d237332d/javascript
 *
 * Checks whether a string contains valid, balanced parentheses.
 *
 * @param {string} parenStr - A string containing opening and closing parentheses.
 * @returns {boolean} `true` if the parentheses are valid, otherwise `false`.
 *
 * @example
 * validParentheses("()"); // true
 *
 * @example
 * validParentheses("(())"); // true
 *
 * @example
 * validParentheses("())("); // false
 */
function validParentheses(parenStr) {
  let count = 0;
  for (const each of parenStr) {
    if (each === "(") {
      count++;
    } else {
      count--;
      if (count < 0) return false;
    }
  }
  return count === 0;
}
