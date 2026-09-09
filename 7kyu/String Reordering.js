/**
 * 7 kyu
 * String Reordering
 * https://www.codewars.com/kata/5b047875de4c7f9af800011b/javascript
 *
 * Sorts an array of objects by their numeric keys, extracts their values,
 * and joins all values into a single space-separated sentence.
 *
 * @param {Object[]} arrayOfObjects - An array of objects containing numeric keys.
 * @returns {string} A sentence made from the object's values in key order.
 *
 * @example
 * sentence([{ 2: "world" }, { 1: "Hello" }]);
 * // "Hello world"
 *
 * @example
 * sentence([{ 3: "JavaScript" }, { 1: "I" }, { 2: "love" }]);
 * // "I love JavaScript"
 *
 * @example
 * sentence([{ 4: "today" }, { 2: "am" }, { 1: "I" }, { 3: "coding" }]);
 * // "I am coding today"
 */
function sentence(arrayOfObjects) {
  return arrayOfObjects
    .sort((a, b) => +Object.keys(a) - +Object.keys(b))
    .map((each) => Object.values(each))
    .join(" ");
}
