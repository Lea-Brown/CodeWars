/**7 kyu
 * Sorting Dictionaries
 * https://www.codewars.com/kata/53da6a7e112bd15cbc000012/javascript
 *
 * Sorts an object's entries by value in descending order.
 * Converts single-digit numeric string keys to numbers.
 *
 * @param {Object<string, number>} dict - The object to sort.
 * @returns {[string | number, number][]} An array of key-value pairs sorted by value.
 *
 * @example
 * sortDict({ a: 3, b: 1, c: 2 });
 * // [['a', 3], ['c', 2], ['b', 1]]
 *
 * @example
 * sortDict({ '1': 10, '2': 30, '3': 20 });
 * // [[2, 30], [3, 20], [1, 10]]
 *
 * @example
 * sortDict({ a: 5, '1': 5, b: 10 });
 * // [['b', 10], ['a', 5], [1, 5]]
 */
function sortDict(dict) {
  return Object.entries(dict)
    .sort((a, b) => b[1] - a[1])
    .map(([key, value]) => [/^\d$/.test(key) ? +key : key, value]);
}
