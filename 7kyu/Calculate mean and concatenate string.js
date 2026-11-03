/**
 * 7 kyu
 * Calculate mean and concatenate string
 * https://www.codewars.com/kata/56f7493f5d7c12d1690000b6/javascript
 *
 * Calculates the mean of numeric characters in a string and returns
 * the remaining non-numeric characters as a separate string.
 *
 * @param {string} lst - The input string containing numbers and letters.
 * @returns {[number, string]} An array containing the mean of the digits
 * and a string of all non-numeric characters.
 *
 * @example
 * mean("123abc") // [2, "abc"]
 *
 * @example
 * mean("987xyz") // [8, "xyz"]
 *
 * @example
 * mean("2468hello") // [5, "hello"]
 */
function mean(lst) {
  let count = 0;
  let num = 0;
  let letters = [];
  const set = new Set(["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]);
  for (const each of lst) {
    if (set.has(each)) {
      count++;
      num += +each;
    } else {
      letters.push(each);
    }
  }
  return [num / count, letters.join("")];
}
