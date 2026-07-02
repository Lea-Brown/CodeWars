/**
 * 6 kyu
 * Where is my parent!?(cry)
 * https://www.codewars.com/kata/58539230879867a8cd00011c/javascript
 *
 * Sorts a string of letters so that children (lowercase) follow their parents (uppercase),
 * with each group ordered alphabetically and the first occurrence of each letter capitalised.
 *
 * The function:
 * 1. Lowercases the entire input.
 * 2. Sorts alphabetically.
 * 3. Uppercases the first occurrence of each letter group.
 *
 * @param {string} dancingBrigade - A string containing uppercase and lowercase letters.
 * @returns {string} A sorted string where each letter group begins with an uppercase parent.
 *
 * @example
 * findChildren("abBA")
 * // "Aabb"
 *
 * @example
 * findChildren("CbcBcA")
 * // "AaaBbbCcc"
 *
 * @example
 * findChildren("uUvV")
 * // "UuvVv"
 */
function findChildren(dancingBrigade) {
  dancingBrigade = dancingBrigade.toLowerCase().split("").sort();
  let result = [dancingBrigade[0].toUpperCase()];
  let cur = dancingBrigade[0];
  for (let i = 1; i < dancingBrigade.length; i++) {
    if (dancingBrigade[i] === cur) {
      result.push(dancingBrigade[i]);
    } else {
      result.push(dancingBrigade[i].toUpperCase());
      cur = dancingBrigade[i];
    }
  }
  return result.join("");
}
