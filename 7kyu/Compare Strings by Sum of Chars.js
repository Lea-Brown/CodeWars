/**
 * 7 kyu
 * Compare Strings by Sum of Chars
 * https://www.codewars.com/kata/576bb3c4b1abc497ec000065/javascript
 *
 * Compares two strings based on the sum of their uppercase character codes.
 *
 * If either string is `null`, it is treated as `"0"`. The comparison only sums
 * character codes for uppercase letters; if a string contains any lowercase
 * letters, its sum is considered `0`. Returns `true` if the computed sums are equal,
 * otherwise `false`.
 *
 * @param {string|null} s1 - The first string to compare. Can be null.
 * @param {string|null} s2 - The second string to compare. Can be null.
 * @return {boolean} `true` if the uppercase character code sums are equal, otherwise `false`.
 *
 * @example
 * compare("ABC", "ABC") // true
 * compare("A", "B") // false
 * compare("AbC", "XYZ") // false, because "AbC" contains a lowercase letter
 * compare(null, "0") // true
 */
function compare(s1, s2) {
  if (s1 === null) s1 = "0";
  if (s2 === null) s2 = "0";
  s1 = s1.toUpperCase();
  s2 = s2.toUpperCase();
  let one = 0;
  let two = 0;
  for (const each of s1) {
    if (each.toLowerCase() === each) {
      one = 0;
      break;
    }
    one += each.charCodeAt(0);
  }
  for (const each of s2) {
    if (each.toLowerCase() === each) {
      two = 0;
      break;
    }
    two += each.charCodeAt(0);
  }
  return one === two;
}
