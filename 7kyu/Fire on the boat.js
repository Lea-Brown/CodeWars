/**
 * 7 kyu
 * Holiday III - Fire on the boat
 * https://www.codewars.com/kata/57e8fba2f11c647abc000944/javascript
 *
 * Replaces every standalone word "Fire" in a sentence with "~~".
 *
 * @param {string} s - The input string containing words separated by spaces.
 * @returns {string} A new string where each occurrence of the word "Fire" is replaced with "~~".
 *
 * @example
 * // Returns "~~ is hot"
 * fireFight("Fire is hot");
 *
 * // Returns "Water Fire Fire" → "Water ~~ ~~"
 * fireFight("Water Fire Fire");
 *
 * // Returns "No fires here"
 * fireFight("No fires here"); // (Doesn't replace "fires", only exact "Fire")
 */
function fireFight(s) {
  return s
    .split(" ")
    .map((word) => (word === "Fire" ? "~~" : word))
    .join(" ");
}
