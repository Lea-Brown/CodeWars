/**
 * 7 kyu
 * Count the Ones
 * https://www.codewars.com/kata/5519e930cd82ff8a9a000216/javascript
 *
 * Counts the number of 1 bits in the binary representation of a number.
 * Uses Brian Kernighan's algorithm to remove the lowest set bit on each iteration.
 *
 * @param {number} x - The non-negative integer to check.
 * @returns {number} The number of set bits (1s) in the binary representation.
 *
 * @example
 * hammingWeight(10); // 2 (1010)
 *
 * @example
 * hammingWeight(21); // 3 (10101)
 *
 * @example
 * hammingWeight(255); // 8 (11111111)
 */
function hammingWeight(x) {
  let count = 0;
  while (x !== 0) {
    x &= x - 1;
    count++;
  }
  return count;
}
