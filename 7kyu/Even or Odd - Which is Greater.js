/**
 * 7 kyu
 * Even or Odd - Which is Greater?
 * https://www.codewars.com/kata/57f7b8271e3d9283300000b4/javascript
 *
 * Compares the sum of even digits and odd digits in a string of digits.
 *
 * Iterates over each character in the input string, converts it to a number,
 * and adds it to either the even sum or odd sum depending on its parity.
 *
 * @param {string} str - A string consisting of numeric digits (e.g., "12345").
 * @returns {string} - A message indicating whether the sum of even digits
 *                     is greater than, less than, or equal to the sum of odd digits.
 *
 * @example
 * evenOrOdd("1234"); // Returns "Even is greater than Odd"
 *
 * @example
 * evenOrOdd("1357"); // Returns "Odd is greater than Even"
 *
 * @example
 * evenOrOdd("22");   // Returns "Even is greater than Odd"
 *
 * @example
 * evenOrOdd("11");   // Returns "Odd is greater than Even"
 *
 * @example
 * evenOrOdd("22");   // Returns "Even is greater than Odd"
 *
 * @example
 * evenOrOdd("123");  // Returns "Even and Odd are the same"
 */

function evenOrOdd(str) {
  let even = 0;
  let odd = 0;
  for (const each of str) {
    +each % 2 === 0 ? (even += +each) : (odd += +each);
  }
  return even > odd
    ? "Even is greater than Odd"
    : odd > even
      ? "Odd is greater than Even"
      : "Even and Odd are the same";
}
