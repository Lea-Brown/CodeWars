/**
 * 7 kyu
 * Selective fear of numbers
 * https://www.codewars.com/kata/55b1fd84a24ad00b32000075/javascript
 *
 * Determines whether a specific number is considered "scary"
 * depending on the given day of the week.
 *
 * Rules:
 * - Monday: 12
 * - Tuesday: greater than 95
 * - Wednesday: 34
 * - Thursday: 0
 * - Friday: any even number
 * - Saturday: 56
 * - Sunday: 666 or -666
 *
 * @param {string} day - The day of the week (e.g. "Monday").
 * @param {number} num - The number to evaluate.
 * @returns {boolean} True if the number is considered scary for that day; otherwise false.
 *
 * @example
 * AmIAfraid("Monday", 12); // true
 *
 * @example
 * AmIAfraid("Friday", 4); // true
 *
 * @example
 * AmIAfraid("Sunday", 666); // true
 *
 * @example
 * AmIAfraid("Tuesday", 50); // false
 */

function AmIAfraid(day, num) {
  if (day === "Monday" && num === 12) return true;
  if (day === "Tuesday" && num > 95) return true;
  if (day === "Wednesday" && num === 34) return true;
  if (day === "Thursday" && num === 0) return true;
  if (day === "Friday" && num % 2 === 0) return true;
  if (day === "Saturday" && num === 56) return true;
  if (day === "Sunday" && (num === 666 || num === -666)) return true;
  return false;
}
