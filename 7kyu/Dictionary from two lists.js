/**
 * 7 kyu
 * Dictionary from two lists
 * https://www.codewars.com/kata/5533c2a50c4fea6832000101/javascript
 *
 * Creates an object by pairing keys with values by index.
 * If a value is missing or explicitly `undefined`, it is set to `null`.
 *
 * @param {Array<string|number>} keys
 *   An array of keys to be used for the object.
 * @param {Array<any>} values
 *   An array of values corresponding to each key.
 *
 * @returns {Object}
 *   An object where each key maps to its corresponding value,
 *   or `null` if the value is `undefined`.
 *
 * @example
 * createDict(["a", "b", "c"], [1, 2, 3])      // { a: 1, b: 2, c: 3 }
 * createDict(["a", "b"], [1])                // { a: 1, b: null }
 * createDict(["x", "y"], [undefined, false]) // { x: null, y: false }
 */
function createDict(keys, values) {
  let obj = {};
  for (let i = 0; i < keys.length; i++) {
    obj[keys[i]] = values[i] === undefined ? null : values[i];
  }
  return obj;
}
