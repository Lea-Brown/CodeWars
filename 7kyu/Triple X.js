/**
 * 7 kyu
 * L2: Triple X
 * https://www.codewars.com/kata/568dc69683322417eb00002c/javascript
 *
 * Checks whether the first occurrence of 'x' in a string
 * is immediately followed by two more 'x' characters.
 *
 * In other words, returns true if the string contains "xxx"
 * starting at the first 'x' found, and no non-'x' characters
 * interrupt the sequence once it begins.
 *
 * @param {string} str - The input string to check.
 * @returns {boolean} True if the first 'x' starts a sequence of three consecutive 'x' characters; otherwise false.
 *
 * @example
 * tripleX("xxaxxx"); // false (first 'x' sequence is interrupted)
 * tripleX("abxxxcd"); // true
 * tripleX("xaxxx");   // false
 * tripleX("xxx");     // true
 * tripleX("abc");     // false
 */

function tripleX(str) {
  let count = 0;
  for (const char of str) {
    if (char === "x") {
      count++;
      if (count === 3) return true;
    } else if (count > 0) {
      return false;
    }
  }
  return false;
}
