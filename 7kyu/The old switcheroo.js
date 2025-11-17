/**
 * 7 kyu
 * The old switcheroo
 * https://www.codewars.com/kata/55d410c492e6ed767000004f/javascript
 *
 * Replaces every vowel in the input string with its 1-based index position.
 * Non-vowel characters remain unchanged.
 *
 * @param {string} str - The input string to process
 * @returns {string} A new string where vowels are replaced by their index
 *
 * @example
 * vowel2index("this")      // "th3s"
 * vowel2index("apple")     // "1ppl5"
 * vowel2index("CodeWars")  // "C2d5W7rs"
 */
function vowel2index(str) {
  let result = [];
  let vowels = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true,
    A: true,
    E: true,
    I: true,
    O: true,
    U: true,
  };
  for (let i = 0; i < str.length; i++) {
    result.push(vowels[str[i]] ? i + 1 : str[i]);
  }
  return result.join("");
}
