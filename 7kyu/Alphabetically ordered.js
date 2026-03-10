/**
 * 7 kyu
 * Alphabetically ordered
 * https://www.codewars.com/kata/5a8059b1fd577709860000f6/javascript
 *
 * Checks if the characters in a string are in alphabetical order.
 *
 * Each character is compared by its Unicode value. The function
 * returns `true` if the string is empty, has one character, or
 * all characters are in ascending order.
 *
 * @param {string} s - The string to check.
 * @returns {boolean} `true` if the string is in alphabetical order, `false` otherwise.
 *
 * @example
 * alphabetic("abc");   // returns true
 * alphabetic("aab");   // returns true
 * alphabetic("cba");   // returns false
 * alphabetic("");      // returns true
 * alphabetic("z");     // returns true
 */

function alphabetic(s) {
  for (let i = 1; i < s.length; i++) {
    if (s[i - 1].charCodeAt(0) > s[i].charCodeAt(0)) return false;
  }
  return true;
}
