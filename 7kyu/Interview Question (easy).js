/**
 * 7 kyu
 * Interview Question (easy)
 * https://www.codewars.com/kata/5b358a1e228d316283001892/javascript
 *
 * Converts a city name into a character frequency string.
 *
 * Each letter (excluding spaces) is lowercased and represented as
 * `letter:*****`, where the number of asterisks equals the number
 * of occurrences of that letter in the input string.
 *
 * @param {string} city - The input city name to analyse.
 * @returns {string} A comma-separated string representing character frequencies.
 *
 * @example
 * getStrings("Chicago") // "c:**,h:*,i:*,a:*,g:*,o:*"
 * getStrings("New York") // "n:*,e:*,w:*,y:*,o:*,r:*,k:*"
 */
function getStrings(city) {
  city = city.toLowerCase();
  let obj = {};
  for (const each of city) {
    if (each === " ") continue;
    obj[each] = (obj[each] || 0) + 1;
  }
  let result = [];
  for (const each in obj) {
    result.push(`${each}:${"*".repeat(obj[each])}`);
  }
  return result.join(",");
}
