/**
 * 7 kyu
 * Ghostbusters (whitespace removal)
 * https://www.codewars.com/kata/5668e3800636a6cd6a000018/javascript
 *
 * Removes all spaces from a building name.
 *
 * @param {string} building - The name of the building.
 * @returns {string} The building name without spaces, or a message if there are no spaces.
 *
 * @example
 * ghostBusters("Sky Tower"); // "SkyTower"
 *
 * @example
 * ghostBusters("Haunted House"); // "HauntedHouse"
 *
 * @example
 * ghostBusters("Castle"); // "You just wanted my autograph didn't you?"
 */
function ghostBusters(building) {
  const word = building.replaceAll(" ", "");
  return word.length === building.length
    ? "You just wanted my autograph didn't you?"
    : word;
}
