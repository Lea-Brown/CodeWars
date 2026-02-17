/**
 * 7 kyu
 * "Very Even" Numbers.
 * https://www.codewars.com/kata/58c9322bedb4235468000019/javascript
 *
 * Determines whether a number is "very even".
 *
 * A number is considered very even if repeatedly summing its digits
 * until a single digit remains results in an even number.
 *
 * @param {number} n - A non-negative integer.
 * @returns {boolean} Returns `true` if the final single-digit result is even, otherwise `false`.
 *
 * @example
 * isVeryEvenNumber(88); // true  -> 8 + 8 = 16 -> 1 + 6 = 7 (odd) ❌ actually false
 *
 * @example
 * isVeryEvenNumber(222); // true -> 2 + 2 + 2 = 6 (even)
 *
 * @example
 * isVeryEvenNumber(5); // false
 */

function isVeryEvenNumber(n) {
  while (n > 9) {
    let newNum = 0;
    for (const each of n.toString()) newNum += +each;
    n = newNum;
  }
  return n % 2 === 0;
}
