/**
 * 7 kyu
 * Fix My Phone Numbers!
 * https://www.codewars.com/kata/596343a24489a8b2a00000a2/javascript
 *
 * Extracts all numeric characters from a string and validates whether
 * they form a UK-style phone number (11 digits starting with "0").
 *
 * Non-numeric characters are ignored (spaces included).
 *
 * @param {string} str - The input string potentially containing a phone number.
 * @returns {string} The cleaned 11-digit phone number if valid,
 * otherwise the string "Not a phone number".
 *
 * @example
 * isItANum("S:)0207ERGQREG88349F82!") // "02078834982"
 *
 * @example
 * isItANum("sjfniebienvr12312312312ehfWh") // "Not a phone number"
 *
 * @example
 * isItANum("020 7883 4982") // "02078834982"
 */

function isItANum(str) {
  let result = [];
  for (const each of str) {
    if (each === " ") continue;
    if (!Number.isNaN(Number(each))) result.push(each);
  }
  result = result.join("");
  if (result.length !== 11 || result[0] !== "0") return "Not a phone number";
  return result;
}
