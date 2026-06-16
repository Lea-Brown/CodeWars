/**
 * 7 kyu
 * Reduce My Fraction
 * https://www.codewars.com/kata/576400f2f716ca816d001614/javascript
 *
 * Reduces a fraction to its simplest form by dividing both numbers
 * by their greatest common divisor (GCD).
 *
 * @param {number[]} fraction - A two‑element array `[numerator, denominator]`.
 * @returns {number[]} A new fraction array reduced to lowest terms.
 *
 * @example
 * reduce([8, 12]); // → [2, 3]
 * reduce([3, 1]);  // → [3, 1]
 */
function reduce(fraction) {
  if (fraction[0] === 1 || fraction[1] === 1) return fraction;
  for (let i = Math.max(...fraction); i > 1; i--) {
    if (fraction[0] % i === 0 && fraction[1] % i === 0)
      return [fraction[0] / i, fraction[1] / i];
  }
  return fraction;
}
