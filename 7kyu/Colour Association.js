/**
 * 7 kyu
 * Colour Association
 * https://www.codewars.com/kata/56d6b7e43e8186c228000637/javascript
 *
 * Converts a 2D array of [key, value] pairs into an array of objects.
 *
 * @param {Array<[string, string]>} array - A 2D array where each element is a [key, value] pair.
 * @returns {Array<Record<string, string>>} An array of objects with dynamic keys mapped to their associated values.
 *
 * @example
 * colourAssociation([['banana', 'yellow'], ['sky', 'blue']]);
 * // → [{ banana: 'yellow' }, { sky: 'blue' }]
 */

function colourAssociation(array) {
  let result = [];
  for (const [key, value] of array) {
    result.push({ [key]: value });
  }
  return result;
}
