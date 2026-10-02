/**
 * 7 kyu
 * Make acronym
 * https://www.codewars.com/kata/57a60bad72292d3e93000a5a/javascript
 *
 * Converts a phrase into an acronym using the first letter of each word.
 *
 * @param {string} inp - The phrase to convert.
 * @returns {string} The acronym.
 *
 * @example
 * toAcronym("portable network graphics");
 * // "PNG"
 *
 * @example
 * toAcronym("random access memory");
 * // "RAM"
 *
 * @example
 * toAcronym("central processing unit");
 * // "CPU"
 */
function toAcronym(inp) {
  let result = [];
  for (const word of inp.split(" ")) {
    result.push(word[0].toUpperCase());
  }
  return result.join("");
}
