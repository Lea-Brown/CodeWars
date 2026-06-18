/**
 * 7 kyu
 * Check for prime numbers
 * https://www.codewars.com/kata/53daa9e5af55c184db00025f/javascript
 *
 * Determines whether a given number is prime.
 *
 * A prime number is an integer greater than 1 that has no divisors
 * other than 1 and itself. This function checks divisibility only
 * up to the square root of the number for efficiency.
 *
 * @param {number} n - The number to test for primality.
 * @returns {boolean} True if the number is prime, otherwise false.
 *
 * @example
 * isPrime(7);   // true
 * @example
 * isPrime(12);  // false
 */
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}
