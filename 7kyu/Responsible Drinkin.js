/**
 * 7 kyu
 * Responsible Drinking
 * https://www.codewars.com/kata/5aee86c5783bb432cd000018/javascript
 *
 * Calculates the total number of drinks from a string and returns
 * the equivalent hydration advice in glasses of water.
 *
 * Each numeric character in the string is treated as a drink count
 * and summed together.
 *
 * @param {string} s - Input string containing drink quantities (e.g. "1 beer, 2 shots").
 * @returns {string} A formatted string indicating how many glasses of water to drink.
 *
 * @example
 * hydrate("1 beer");
 * // "1 glass of water"
 *
 * @example
 * hydrate("2 beers and 1 shot");
 * // "3 glasses of water"
 *
 * @example
 * hydrate("1 beer, 2 shots, 1 wine");
 * // "4 glasses of water"
 */

function hydrate(s) {
  let count = 0;
  for (const each of s) {
    if (!Number.isNaN(Number(each))) count += +each;
  }
  return `${count} glass${count > 1 ? "es" : ""} of water`;
}
