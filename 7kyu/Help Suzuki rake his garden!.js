/**
 * 7 kyu
 * Help Suzuki rake his garden!
 * https://www.codewars.com/kata/571c1e847beb0a8f8900153d/javascript
 *
 * Rakes a garden by turning every non-rock word into "gravel".
 *
 * @param {string} garden - A space-separated string representing garden items.
 * @returns {string} - A new string where every item except "rock" is replaced with "gravel".
 *
 * @example
 * rakeGarden("rock tree bush"); // "rock gravel gravel"
 * rakeGarden("rock rock flower"); // "rock rock gravel"
 */

function rakeGarden(garden) {
  let result = [];
  for (const each of garden.split(" ")) {
    result.push(each === "rock" ? "rock" : "gravel");
  }
  return result.join(" ");
}
