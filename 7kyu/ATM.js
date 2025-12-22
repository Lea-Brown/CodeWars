/**
 * 7 kyu
 * ATM
 * https://www.codewars.com/kata/5635e7cb49adc7b54500001c/javascript
 *
 * Calculates the minimum number of banknotes needed to make up a given amount.
 *
 * The function uses UK-style denominations: 500, 200, 100, 50, 20, and 10.
 * If the amount cannot be represented using multiples of 10, the function
 * returns -1.
 *
 * @param {number} n - The amount of money to convert into banknotes.
 * @returns {number} The minimum number of banknotes required, or -1 if invalid.
 *
 * @example
 * solve(770); // 4  (500 + 200 + 50 + 20)
 * solve(40);  // 2  (20 + 20)
 * solve(15);  // -1 (not divisible by 10)
 */
function solve(n) {
  if (n % 10 !== 0) return -1;
  let count = 0;
  while (n > 0) {
    if (n >= 500) {
      n -= 500;
      count++;
      continue;
    }
    if (n >= 200) {
      n -= 200;
      count++;
      continue;
    }
    if (n >= 100) {
      n -= 100;
      count++;
      continue;
    }
    if (n >= 50) {
      n -= 50;
      count++;
      continue;
    }
    if (n >= 20) {
      n -= 20;
      count++;
      continue;
    }
    if (n >= 10) {
      n -= 10;
      count++;
      continue;
    }
  }
  return count;
}
