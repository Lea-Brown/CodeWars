/**
 * 7 kyu
 * Four/Seven
 * https://www.codewars.com/kata/5ff50f64c0afc50008861bf0/javascript
 *
 * Returns 7 if the input is 4, 4 if the input is 7, or 0 otherwise.
 *
 * @param {number} n - The number to check.
 * @returns {number} 7, 4, or 0 based on the input.
 *
 * @example
 * fourSeven(4); // Returns 7
 *
 * @example
 * fourSeven(7); // Returns 4
 *
 * @example
 * fourSeven(5); // Returns 0
 */
function fourSeven(n) {
  let obj = {
    4: 7,
    7: 4,
  };
  return obj[n] || 0;
}
