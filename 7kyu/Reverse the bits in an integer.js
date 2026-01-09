/**
 * 7 kyu
 * Reverse the bits in an integer
 * https://www.codewars.com/kata/5959ec605595565f5c00002b/javascript
 *
 * Reverses the binary representation of a non-negative integer and returns
 * the resulting value as a base-10 number.
 *
 * The number is converted to a binary string (without leading zeros),
 * the bits are reversed, and the reversed binary string is parsed back
 * into a decimal number.
 *
 * @param {number} n - A non-negative integer to reverse at the bit level.
 * @returns {number} The decimal value of the reversed binary representation.
 *
 * @example
 * reverseBits(13) // 11  (13 → "1101" → "1011")
 * reverseBits(10) // 5   (10 → "1010" → "0101")
 * reverseBits(1)  // 1   ("1" → "1")
 */
const reverseBits = (n) =>
  parseInt(n.toString(2).split("").reverse().join(""), 2);
