/**
 * 7 kyu
 * Adaptive Security System
 * https://www.codewars.com/kata/69b58aaee8f1deef7ece7d0e/javascript
 *
 * Counts how many hackers successfully breach the system.
 *
 * Each hacker attempts to breach using a numeric strength value.
 * If a hacker's strength is less than or equal to the current security level,
 * the system's security increases. Otherwise, the hacker causes a breach.
 *
 * @param {number[]} hackers - Array of numeric hacker strength values.
 * @param {number} securityLevel - Initial security level of the system.
 * @param {number} increase - Amount to increase security after a blocked attempt.
 * @returns {number} Number of successful breaches.
 *
 * @example
 * // Example 1:
 * // securityLevel = 5, increase = 2
 * // hackers = [3, 6, 4, 10]
 * // Step-by-step:
 * // 3 <= 5 → block → security = 7
 * // 6 <= 7 → block → security = 9
 * // 4 <= 9 → block → security = 11
 * // 10 <= 11 → block → security = 13
 * // Result: 0 breaches
 * breachAttempts([3, 6, 4, 10], 5, 2); // returns 0
 *
 * @example
 * // Example 2:
 * // securityLevel = 4, increase = 1
 * // hackers = [5, 3, 8]
 * // 5 > 4 → breach
 * // 3 <= 4 → block → security = 5
 * // 8 > 5 → breach
 * // Result: 2 breaches
 * breachAttempts([5, 3, 8], 4, 1); // returns 2
 */

function breachAttempts(hackers, securityLevel, increase) {
  let breach = 0;
  for (const each of hackers) {
    each <= securityLevel ? (securityLevel += increase) : breach++;
  }
  return breach;
}
