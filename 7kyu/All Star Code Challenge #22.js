/**
 * 7 kyu
 * All Star Code Challenge #22
 * https://www.codewars.com/kata/5865cff66b5699883f0001aa/javascript
 *
 * Converts a number of seconds into a human-readable string
 * representing hours and minutes.
 *
 * @param {number} seconds - The total number of seconds to convert.
 * @returns {string} A formatted string in the form
 * "X hour(s) and Y minute(s)".
 *
 * @example
 * toTime(3661) // "1 hour(s) and 1 minute(s)"
 * toTime(7200) // "2 hour(s) and 0 minute(s)"
 * toTime(59)   // "0 hour(s) and 0 minute(s)"
 */
function toTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  return `${hours} hour(s) and ${minutes} minute(s)`;
}
