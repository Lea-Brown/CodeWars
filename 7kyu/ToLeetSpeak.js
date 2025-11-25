/**
 * 7 kyu
 * ToLeetSpeak
 * https://www.codewars.com/kata/57c1ab3949324c321600013f/javascript
 *
 * Converts a string into leet-speak by replacing specific uppercase letters
 * with their symbolic equivalents. Characters not present in the mapping
 * are returned unchanged.
 *
 * @param {string} str - The input string to convert. Should ideally be uppercase.
 * @return {string} The converted leet-speak string.
 *
 * @example
 * toLeetSpeak("HELLO"); // "#3LL0"
 *
 * @example
 * toLeetSpeak("TEST"); // "7E7T"
 */
function toLeetSpeak(str) {
  const alphabet = {
    A: "@",
    B: "8",
    C: "(",
    E: "3",
    G: "6",
    H: "#",
    I: "!",
    L: "1",
    O: "0",
    S: "$",
    T: "7",
    Z: "2",
  };
  let result = "";
  for (const each of str) {
    result += alphabet[each] || each;
  }
  return result;
}
