/**
 * 6 kyu
 * Remove the parentheses
 * https://www.codewars.com/kata/5f7c38eb54307c002a2b8cc8/javascript
 *
 * Removes all characters that appear inside any level of parentheses.
 *
 * Iterates through the string while tracking how many '(' are currently open.
 * Characters are only added to the result when no parentheses are open.
 *
 * @param {string} s - The input string containing zero or more parentheses.
 * @returns {string} A new string with all parenthesised content removed.
 *
 * @example
 * removeParentheses("a(bc)d")        // "ad"
 * removeParentheses("a(b(c)d)e")     // "ae"
 * removeParentheses("(hello)world")  // "world"
 */
function removeParentheses(s) {
  let result = [];
  let open = 0;
  for (const each of s) {
    if (each === "(") open++;
    if (open === 0) result.push(each);
    if (each === ")") open--;
  }
  return result.join("");
}
