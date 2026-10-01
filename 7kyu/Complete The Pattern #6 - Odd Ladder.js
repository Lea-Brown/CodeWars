/**
 * 7 kyu
 * Complete The Pattern #6 - Odd Ladder
 * https://www.codewars.com/kata/5574940eae1cf7d520000076/javascript
 *
 * Creates a pattern of repeated odd numbers, with each row
 * containing the current odd number repeated that many times.
 *
 * @param {number} n - The maximum number to include in the pattern.
 * @returns {string} The generated pattern, with each row on a new line.
 *
 * @example
 * pattern(1);
 * // "1"
 *
 * @example
 * pattern(3);
 * // "1\n333"
 *
 * @example
 * pattern(5);
 * // "1\n333\n55555"
 */
function pattern(n) {
  let output = [];
  for (let i = 1; i <= n; i += 2) {
    output.push(Array(i).fill(i).join(""));
  }
  return output.join("\n");
}
