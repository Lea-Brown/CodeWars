/**
 * 7 kyu
 * Is every value in the array an array?
 * https://www.codewars.com/kata/582c81d982a0a65424000201/javascript
 *
 * Checks whether all elements in the given array are themselves arrays.
 *
 * @param {unknown[]} value - The array to check.
 * @returns {boolean} Returns true if every element in the array is an array; otherwise false.
 *
 * @example
 * arrCheck([[1], [2], [3]]) // true
 * arrCheck([[1], "a", []])  // false
 * arrCheck([])              // true (vacuous truth)
 */
const arrCheck = (value) => value.every((each) => Array.isArray(each));
