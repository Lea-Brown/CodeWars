/**
 * 7 kyu
 * How many times should I go?
 * https://www.codewars.com/kata/57efcb78e77282f4790003d8/javascript
 *
 * Calculates how many times an individual purchase price fits into an annual price.
 * The result is rounded up to the nearest whole number.
 *
 * @param {number} annualPrice - The total annual price.
 * @param {number} individualPrice - The price of a single purchase.
 * @returns {number} The number of times the individual price fits into the annual price, rounded up.
 *
 * @example
 * // Individual price goes into annual price 3.33 times → rounded up to 4
 * howManyTimes(100, 30);
 * // → 4
 *
 * @example
 * howManyTimes(50, 10);
 * // → 5
 */

function howManyTimes(annualPrice, individualPrice) {
  return Math.ceil(annualPrice / individualPrice);
}
