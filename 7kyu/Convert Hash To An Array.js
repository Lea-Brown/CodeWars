/**
 * 7 kyu
 * Convert Hash To An Array
 * https://www.codewars.com/kata/59557b2a6e595316ab000046/javascript
 *
 * Converts an object into an array of key-value pairs.
 *
 * @param {Object} hash - The object to convert.
 * @returns {Array<[string, *]>} An array of key-value pairs.
 *
 * @example
 * convertHashToArray({ a: 1, b: 2 });
 * // [['a', 1], ['b', 2]]
 *
 * @example
 * convertHashToArray({ name: "John", age: 30 });
 * // [['name', 'John'], ['age', 30]]
 *
 * @example
 * convertHashToArray({});
 * // []
 */
function convertHashToArray(hash) {
  let result = [];
  for (const each in hash) {
    result.push([each, hash[each]]);
  }
  return result;
}

// cleaner
function convertHashToArray(hash) {
  return Object.entries(hash);
}
