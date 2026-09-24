/**
 * 7 kyu
 * Simple string reversal
 * https://www.codewars.com/kata/5a71939d373c2e634200008e/javascript
 *
 * Reverses the non-space characters in a string while keeping
 * all spaces in their original positions.
 *
 * @param {string} str - The string to process.
 * @returns {string} The string with its non-space characters reversed.
 *
 * @example
 * solve("hello world");
 * // "dlrow olleh"
 *
 * @example
 * solve("abc def ghi");
 * // "ihg fed cba"
 *
 * @example
 * solve("a b c");
 * // "c b a"
 */
function solve(str) {
  const newStr = str.replaceAll(" ", "").split("").reverse().join("");
  let result = [];
  let spacesCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      spacesCount++;
      result.push(" ");
    } else {
      result.push(newStr[i - spacesCount]);
    }
  }

  return result.join("");
}
