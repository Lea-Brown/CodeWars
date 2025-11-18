/**
 * 7 kyu
 * Changing letters
 * https://www.codewars.com/kata/5831c204a31721e2ae000294/javascript
 *
 * Converts all lowercase vowels in a string to uppercase.
 *
 * Iterates through each character and replaces:
 *   a → A
 *   e → E
 *   i → I
 *   o → O
 *   u → U
 *
 * Uses a lookup table for O(1) vowel detection, making the
 * transformation fast and efficient even for long strings.
 *
 * @param {string} string - The input string to transform
 * @returns {string} A new string with lowercase vowels uppercased
 *
 * @example
 * swap("hello") // "hEllO"
 * swap("javascript") // "jAvAscrIpt"
 * swap("xyz") // "xyz" (no vowels changed)
 */
function swap(string) {
  const vowels = {
    a: "A",
    e: "E",
    i: "I",
    o: "O",
    u: "U",
  };
  let result = "";
  for (const each of string) {
    result += vowels[each] || each;
  }
  return result;
}
