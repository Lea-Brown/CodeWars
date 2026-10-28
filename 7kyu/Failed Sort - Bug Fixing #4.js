/**
 * 7 kyu
 * Failed Sort - Bug Fixing #4
 * https://www.codewars.com/kata/55c7f90ac8025ebee1000062/javascript
 *
 * Sorts the characters in a string in ascending numerical order.
 *
 * @param {string} value - The string containing characters to sort.
 * @returns {string} A new string with its characters sorted in ascending order.
 *
 * @example
 * sortString("321"); // "123"
 *
 * @example
 * sortString("987654"); // "456789"
 *
 * @example
 * sortString("314159"); // "113459"
 */
const sortString = (value) =>
  value
    .split("")
    .sort((a, b) => a - b)
    .join("");
