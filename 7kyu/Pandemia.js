/**
 * 7 kyu
 * Pandemia 🌡️
 * https://www.codewars.com/kata/5e2596a9ad937f002e510435/javascript
 *
 * Calculates the percentage of people infected.
 *
 * People are separated into groups by "X".
 * If a group contains at least one infected person ("1"),
 * everyone in that group is counted as infected.
 *
 * @param {string} s - A string containing "0" (healthy),
 *                     "1" (infected) and "X" (group separator).
 * @returns {number} The percentage of infected people.
 *
 * @example
 * infected("010000X000X1X010000")
 * // Returns: 73.33333333333333
 *
 * @example
 * infected("000000X000000")
 * // Returns: 0
 *
 * @example
 * infected("1111X1111")
 * // Returns: 100
 */
function infected(s) {
  let infected = 0;
  let total = 0;
  for (const each of s.split("X")) {
    let people = each.length;
    if (each.includes("1")) infected += people;
    total += people;
  }
  return (100 * infected) / total || 0;
}
