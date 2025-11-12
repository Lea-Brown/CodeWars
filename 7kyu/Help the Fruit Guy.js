/**
 * 7 kyu
 * Help the Fruit Guy
 * https://www.codewars.com/kata/557af4c6169ac832300000ba/javascript
 *
 * Removes the "rotten" prefix from fruit names in an array and returns them in lowercase.
 *
 * If the input is falsy (e.g. null, undefined, or empty), returns an empty array.
 *
 * @param {string[]} bagOfFruits - An array of fruit names, possibly containing "rotten" prefixes.
 * @returns {string[]} A new array with all fruit names normalised (no "rotten" prefix, all lowercase).
 *
 * @example
 * removeRotten(["apple", "rottenBanana", "rottenPear"]) // ["apple", "banana", "pear"]
 * removeRotten(null) // []
 */
function removeRotten(bagOfFruits) {
  if (!bagOfFruits) return [];
  return bagOfFruits.map((e) => {
    if (e.includes("rotten")) return e.split("rotten")[1].toLowerCase();
    return e;
  });
}
