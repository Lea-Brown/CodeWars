/**
 * 7 kyu
 * Battle of the characters (Easy)
 * https://www.codewars.com/kata/595519279be6c575b5000016/javascript
 *
 * Compares two strings by adding up the alphabet value of each character.
 * A = 1, B = 2, and so on up to Z = 26.
 * The string with the higher total wins. If the totals match, it's a tie.
 *
 * Note: this only works correctly with uppercase letters. Lowercase letters
 * will give the wrong totals, because the sum is based on uppercase character codes.
 *
 * @param {string} x - The first string to compare. Use uppercase letters only.
 * @param {string} y - The second string to compare. Use uppercase letters only.
 * @returns {string} The string with the higher total, or "Tie!" if the totals match.
 *
 * @example
 * battle("CAT", "DOG");
 * // returns "DOG" (CAT = 24, DOG = 26)
 *
 * @example
 * battle("AB", "C");
 * // returns "Tie!" (AB = 3, C = 3)
 *
 * @example
 * battle("A", "Z");
 * // returns "Z" (A = 1, Z = 26)
 */
function battle(x, y) {
  let one = 0;
  let two = 0;
  for (const each of x) {
    one += each.charCodeAt(0) - 64;
  }
  for (const each of y) {
    two += each.charCodeAt(0) - 64;
  }
  return one > two ? x : two > one ? y : "Tie!";
}
