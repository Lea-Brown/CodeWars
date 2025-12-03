/**
 * 7 kyu
 * Valid Spacing
 * https://www.codewars.com/kata/5f77d62851f6bc0033616bd8/javascript
 *
 * Checks whether a string has valid spacing.
 * Valid spacing means:
 * - no leading or trailing spaces, and
 * - no consecutive spaces inside the string.
 *
 * @param {string} s - The input string to validate.
 * @returns {boolean} True if spacing is valid, otherwise false.
 *
 * @example
 * validSpacing("hello world");   // true
 * validSpacing(" hello world");  // false
 * validSpacing("hello  world");  // false
 * validSpacing("hello  ");       // false
 */
function validSpacing(s) {
  const trimmed = s.trim().replace(/\s+/g, " ");
  return s === trimmed;
}
