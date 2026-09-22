/**
 * 7 kyu
 * last digits of a number
 * https://www.codewars.com/kata/5cd5ba1ce4471a00256930c0/javascript
 *
 * Returns the last d digits of a number as an array of numbers.
 *
 * @param {number} n - The number to extract digits from.
 * @param {number} d - The number of digits to return.
 * @returns {number[]} An array containing the last d digits.
 *
 * @example
 * lastDigit(12345, 3);
 * // Returns [3, 4, 5]
 *
 * @example
 * lastDigit(9876, 2);
 * // Returns [7, 6]
 *
 * @example
 * lastDigit(12345, 0);
 * // Returns []
 */
function lastDigit(n, d) {
  if (d <= 0) return [];
  let str = n.toString().slice(-d);
  let result = [];
  for (const each of str) {
    result.push(+each);
  }
  return result;
}

// more readable
function lastDigit(n, d) {
  if (d <= 0) return [];
  return n
    .toString()
    .slice(-d)
    .split("")
    .map((each) => +each);
}
