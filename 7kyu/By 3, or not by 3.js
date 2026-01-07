/**
 * 7 kyu
 * By 3, or not by 3? That is the question...
 * https://www.codewars.com/kata/59f7fc109f0e86d705000043/javascript
 *
 * Checks whether a given numeric string represents a number divisible by 3.
 *
 * The function converts the input string to a BigInt, allowing it to safely
 * handle very large integers that would overflow Number.
 *
 * @param {string} str - A string containing a valid integer representation.
 * @returns {boolean} `true` if the number is divisible by 3, otherwise `false`.
 *
 * @example
 * divisibleByThree("9") // true
 * divisibleByThree("10") // false
 * divisibleByThree("123456789123456789") // true
 */
const divisibleByThree = (str) => BigInt(str) % 3n === 0n;
