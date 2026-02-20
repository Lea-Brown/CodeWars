/**
 * 7 kyu
 * sPoNgEbOb MeMe
 * https://www.codewars.com/kata/5982619d2671576e90000017/javascript
 *
 * Converts a string into "SpongeBob meme" casing by alternating
 * uppercase and lowercase characters starting with uppercase.
 *
 * Note: The alternation is index-based and does not skip spaces
 * or non-alphabetic characters.
 *
 * @param {string} sentence - The input string to transform.
 * @returns {string} The transformed string with alternating character casing.
 *
 * @example
 * spongeMeme("hello world");
 * // "HeLlO WoRlD"
 *
 * @example
 * spongeMeme("JavaScript");
 * // "JaVaScRiPt"
 *
 * @example
 * spongeMeme("123abc!");
 * // "123aBc!"
 */

function spongeMeme(sentence) {
  let result = [];
  for (let i = 0; i < sentence.length; i++) {
    result.push(
      i % 2 === 0 ? sentence[i].toUpperCase() : sentence[i].toLowerCase(),
    );
  }
  return result.join("");
}
