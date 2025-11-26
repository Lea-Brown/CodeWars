/**
 * 7 kyu
 * Return the closest number multiple of 10
 * https://www.codewars.com/kata/58249d08b81f70a2fc0001a4/javascript
 *
 * Returns the nearest multiple of 10 to the provided number.
 * Uses `Math.round` to determine whether to round up or down.
 *
 * @param {number} num - The number to round to the nearest multiple of 10.
 * @returns {number} The closest multiple of 10.
 *
 * @example
 * closestMultiple10(22); // 20
 * @example
 * closestMultiple10(25); // 30
 */
const closestMultiple10 = (num) => Math.round(num / 10) * 10;
