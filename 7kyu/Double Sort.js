/**
 * 7 kyu
 * Double Sort
 * https://www.codewars.com/kata/57cc79ec484cf991c900018d/javascript
 *
 * Sorts an array by separating numbers and strings.
 *
 * - Numbers are sorted in ascending numerical order.
 * - Strings are sorted in ascending alphabetical order.
 * - Numbers always come before strings in the final result.
 *
 * @param {Array<number|string>} a
 *   An array containing numbers and strings.
 *
 * @returns {Array<number|string>}
 *   A new array with numbers first (sorted numerically),
 *   followed by strings (sorted alphabetically).
 *
 * @example
 * dbSort([6, 2, 3, "z", "a"]) // [2, 3, 6, "a", "z"]
 * dbSort(["b", 1, "a", 3])  // [1, 3, "a", "b"]
 */
function dbSort(a) {
  let nums = [];
  let strings = [];
  for (const each of a) {
    typeof each === "string" ? strings.push(each) : nums.push(each);
  }
  nums.sort((a, b) => a - b);
  strings.sort();
  return nums.concat(strings);
}
