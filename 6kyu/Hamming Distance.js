/**
 * 6 kyu
 * Hamming Distance
 * https://www.codewars.com/kata/5410c0e6a0e736cf5b000e69/javascript
 *
 * Calculates the Hamming distance between two equal‑length strings.
 * The Hamming distance is the number of positions where the characters differ.
 *
 * @param {string} a - First string to compare.
 * @param {string} b - Second string to compare.
 * @returns {number} Number of differing character positions.
 *
 * @example
 * hamming("karolin", "kathrin"); // 3
 *
 * @example
 * hamming("1011101", "1001001"); // 2
 *
 * @example
 * hamming("abc", "abc"); // 0
 */
function hamming(a, b) {
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) count++;
  }
  return count;
}
