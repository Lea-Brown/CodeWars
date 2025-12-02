/**
 * 7 kyu
 * Find the lucky numbers
 * https://www.codewars.com/kata/580435ab150cca22650001fb/javascript
 *
 * Filters an array of values and returns only those that contain
 * the digit `"7"` in their string representation.
 *
 * @param {Array<*>} x - The input array containing any values that can be converted to strings.
 * @returns {number[]} An array of numbers whose string form includes the digit `"7"`.
 *
 * @example
 * filterLucky([1, 7, 17, 23]);      // returns [7, 17]
 * filterLucky(["27", "abc", 71]);   // returns [27, 71]
 */
var filterLucky = (x) => {
  let result = [];
  for (const each of x) {
    const num = each.toString();
    for (const each of num) {
      if (each === "7") {
        result.push(+num);
        break;
      }
    }
  }
  return result;
};
