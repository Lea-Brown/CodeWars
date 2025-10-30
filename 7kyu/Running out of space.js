/**
 * 7 kyu
 * Running out of space
 * https://www.codewars.com/kata/56576f82ab83ee8268000059/javascript
 *
 * Builds a new array where each element is the concatenation of all previous elements.
 *
 * @param {string[]} array - An array of strings.
 * @returns {string[]} A new array where each string includes the previous ones.
 *
 * @example
 * spacey(['i', 'have', 'no', 'space']);
 * // ['i', 'ihave', 'ihaveno', 'ihavenospace']
 */
function spacey(array) {
  const result = [];
  let current = "";
  for (const str of array) {
    current += str;
    result.push(current);
  }
  return result;
}
