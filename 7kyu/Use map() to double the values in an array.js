/**
 * 7 kyu
 * Use map() to double the values in an array
 * https://www.codewars.com/kata/53951fff369894e4f10007a9/javascrip
 *
 * Doubles every number in an array.
 *
 * @param {number[]} array - The input array of numbers.
 * @returns {number[]} A new array where each element is multiplied by 2.
 *
 * @example
 * double([1, 2, 3]);
 * // => [2, 4, 6]
 *
 * @example
 * double([10, -5, 0]);
 * // => [20, -10, 0]
 *
 * @example
 * double([]);
 * // => []
 */
const double = (array) => array.map((e) => e * 2);
