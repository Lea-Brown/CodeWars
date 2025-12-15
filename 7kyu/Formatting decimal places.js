/**
 * 7 kyu
 * Formatting decimal places #1
 * https://www.codewars.com/kata/5641c3f809bf31f008000042/javascript
 *
 * Truncates a number to **two decimal places** without rounding.
 *
 * The function converts the number to a string, iterates character by character,
 * and stops once two digits after the decimal point have been collected.
 *
 * @param {number} number - The input number to truncate.
 * @returns {number|undefined} The truncated number with up to two decimal places,
 * or `undefined` if the number has fewer than two decimal places.
 *
 * @example
 * twoDecimalPlaces(3.14159); // 3.14
 * twoDecimalPlaces(10.5);   // undefined
 * twoDecimalPlaces(7);      // undefined
 */
function twoDecimalPlaces(number) {
  const numStr = number.toString();
  let result = "";
  let startCount = false;
  let count = 0;

  for (const each of numStr) {
    result += each;
    if (startCount) count++;
    if (count === 2) return +result;
    if (each === ".") startCount = true;
  }
}
