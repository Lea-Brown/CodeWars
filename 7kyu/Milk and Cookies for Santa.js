/**
 * 7 kyu
 * Milk and Cookies for Santa
 * https://www.codewars.com/kata/52af7bf41f5a1291a6000025/javascript
 *
 * Determines whether the given date falls on Christmas Eve (December 24th).
 *
 * @param {Date} date - A JavaScript Date object to evaluate.
 * @returns {boolean} True if the date is December 24th, otherwise false.
 *
 * @example
 * timeForMilkAndCookies(new Date(2023, 11, 24)); // true
 * @example
 * timeForMilkAndCookies(new Date(2023, 11, 25)); // false
 */
function timeForMilkAndCookies(date) {
  return date.getDate() === 24 && date.getMonth() + 1 === 12;
}
