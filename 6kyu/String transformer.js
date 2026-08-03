/**
 * 6 kyu
 * String transformer
 * https://www.codewars.com/kata/5878520d52628a092f0002d0/javascript
 *
 * Reverses the word order in a string and swaps the case of each letter.
 *
 * @param {string} str - The string to transform.
 * @returns {string} The transformed string, with words reversed and case swapped.
 *
 * @example
 * stringTransformer("Hello World");
 * // returns "wORLD hELLO"
 *
 * @example
 * stringTransformer("JavaScript is fun");
 * // returns "FUN IS jAVAsCRIPT"
 *
 * @example
 * stringTransformer("ABC def");
 * // returns "DEF abc"
 */
function stringTransformer(str) {
  let temp = str.split(" ");
  let result = [];
  for (let i = temp.length - 1; i >= 0; i--) {
    let word = [];
    for (const each of temp[i]) {
      word.push(
        each.charCodeAt(0) >= 97 && each.charCodeAt(0) <= 122
          ? each.toUpperCase()
          : each.toLowerCase(),
      );
    }
    result.push(word.join(""));
  }
  return result.join(" ");
}
