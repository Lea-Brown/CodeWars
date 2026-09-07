/**
 * 7 kyu
 * Disarium Number (Special Numbers Series #3)
 * https://www.codewars.com/kata/5a53a17bfd56cb9c14000003/javascript
 *
 * Checks whether a number is a Disarium number.
 *
 * A Disarium number is a number where the sum of each digit
 * raised to the power of its position equals the original number.
 *
 * @param {number} n - The number to check.
 * @returns {string} "Disarium !!" if the number is a Disarium number,
 * otherwise "Not !!".
 *
 * @example
 * disariumNumber(135);
 * // "Disarium !!"
 *
 * @example
 * disariumNumber(89);
 * // "Disarium !!"
 *
 * @example
 * disariumNumber(123);
 * // "Not !!"
 */
function disariumNumber(n) {
  let result = 0;
  let strNum = n.toString();
  for (let i = 0; i < strNum.length; i++) {
    result += Math.pow(+strNum[i], i + 1);
  }
  return result === n ? "Disarium !!" : "Not !!";
}
