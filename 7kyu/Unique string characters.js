/**
 * 7 kyu
 * Unique string characters
 * https://www.codewars.com/kata/5a262cfb8f27f217f700000b/javascript
 *
 * Returns the characters that appear in exactly one of the two input strings.
 * Characters that appear in both strings are excluded from the result.
 *
 * @param {string} a - The first input string. Should contain plain text only.
 * @param {string} b - The second input string. Should contain plain text only.
 * @return {string} A new string containing characters unique to `a` and `b`.
 *
 * @example
 * solve("abc", "bcd"); // "ad"
 *
 * @example
 * solve("hello", "world"); // "hewrd"
 */
function solve(a, b) {
  let objA = {};
  let objB = {};

  for (const each of a) {
    objA[each] = true;
  }
  for (const each of b) {
    objB[each] = true;
  }

  let result = "";

  for (const each of a) {
    if (!objB[each]) result += each;
  }
  for (const each of b) {
    if (!objA[each]) result += each;
  }

  return result;
}
