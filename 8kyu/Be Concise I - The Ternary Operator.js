/**
 * 8 kyu
 * Be Concise I - The Ternary Operator
 * https://www.codewars.com/kata/56f3f6a82010832b02000f38/javascript
 *
 * Returns a human‑readable description of a person's life stage
 * based on their age.
 *
 * @param {number} age - The person's age in years.
 * @returns {string} A string describing the age category:
 *  - "You're a(n) kid" for ages 12 and under
 *  - "You're a(n) teenager" for ages 13–17
 *  - "You're a(n) adult" for ages 18–64
 *  - "You're a(n) elderly" for ages 65+
 *
 * @example
 * describeAge(5);
 * // "You're a(n) kid"
 *
 * @example
 * describeAge(14);
 * // "You're a(n) teenager"
 *
 * @example
 * describeAge(30);
 * // "You're a(n) adult"
 *
 * @example
 * describeAge(80);
 * // "You're a(n) elderly"
 */
const describeAge = (age) =>
  age <= 12
    ? "You're a(n) kid"
    : age <= 17
      ? "You're a(n) teenager"
      : age <= 64
        ? "You're a(n) adult"
        : "You're a(n) elderly";
