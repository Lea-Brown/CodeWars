/**
 * 7 kyu
 * Numbers to Letters
 * https://www.codewars.com/kata/57ebaa8f7b45ef590c00000c/javascript
 *
 * Converts an array of numbers into a string using a reversed alphabet mapping.
 *
 * Numbers 1–26 map to 'z'–'a', 27 maps to '!', 28 to '?', and 29 to a space.
 *
 * @param {number[]} x - Array of numbers representing characters in the custom alphabet.
 * @returns {string} - The decoded string formed by joining the mapped characters.
 *
 * @example
 * switcher([24, 12, 23, 22, 4, 26, 9, 8]) // "codewars"
 * switcher([29, 24, 12, 23, 22, 4, 26, 9, 8, 27]) // " codewars!"
 */
function switcher(x) {
  const alphabet = {
    1: "z",
    2: "y",
    3: "x",
    4: "w",
    5: "v",
    6: "u",
    7: "t",
    8: "s",
    9: "r",
    10: "q",
    11: "p",
    12: "o",
    13: "n",
    14: "m",
    15: "l",
    16: "k",
    17: "j",
    18: "i",
    19: "h",
    20: "g",
    21: "f",
    22: "e",
    23: "d",
    24: "c",
    25: "b",
    26: "a",
    27: "!",
    28: "?",
    29: " ",
  };
  let result = [];
  for (const each of x) {
    result.push(alphabet[each]);
  }
  return result.join("");
}
