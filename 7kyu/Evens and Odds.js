/**
 * 7 kyu
 * Evens and Odds
 * https://www.codewars.com/kata/583ade15666df5a64e000058/javascript
 *
 * Converts a number to either binary or hexadecimal depending on its parity.
 * Even numbers are converted to binary; odd numbers are converted to hexadecimal.
 *
 * @param {number} num The number to convert.
 * @return {string} The converted string representation (binary for even, hex for odd).
 * @example
 * evensAndOdds(4);    // "100"
 * evensAndOdds(345);  // "159"
 * evensAndOdds(10);   // "1010"
 */
function evensAndOdds(num) {
  return num % 2 === 0 ? num.toString(2) : num.toString(16);
}
