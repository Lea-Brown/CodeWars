/**
 * 7 kyu
 * Fizz / Buzz
 * https://www.codewars.com/kata/51dda84f91f5b5608b0004cc/javascript
 *
 * Counts how many numbers below a given limit are divisible by 3 only,
 * 5 only, or both 3 and 5.
 *
 * The returned array is structured as:
 * [countDivisibleBy3Only, countDivisibleBy5Only, countDivisibleByBoth]
 *
 * @param {number} limit - Upper bound (exclusive) to check numbers against.
 * @returns {[number, number, number]} Counts for multiples of 3, 5, and both.
 *
 * @example
 * countMultiples(16);
 * // Numbers: 1–15
 * // 3 only: 3,6,9,12 → 4
 * // 5 only: 5,10 → 2
 * // both: 15 → 1
 * // → [4, 2, 1]
 */

function solution(number) {
  const counts = [0, 0, 0];
  for (let i = 1; i < number; i++) {
    if (i % 15 === 0) {
      counts[2]++;
    } else if (i % 3 === 0) {
      counts[0]++;
    } else if (i % 5 === 0) {
      counts[1]++;
    }
  }
  return counts;
}
