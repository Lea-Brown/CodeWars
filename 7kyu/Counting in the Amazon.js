/**
 * 7 kyu
 * Counting in the Amazon
 * https://www.codewars.com/kata/55b95c76e08bd5eef100001e/javascript
 *
 * Converts a number into the Arara counting system.
 *
 * The Arara system counts in repeating groups of "adak" (2) and "anane" (1),
 * with predefined phrases for values 1–8. For numbers larger than 8, the
 * function repeatedly subtracts 8 and appends the corresponding phrase.
 *
 * @param {number} n - The number to convert into Arara counting.
 * @returns {string} A space‑separated string representing the Arara count.
 *
 * @example
 * countArara(3);   // "adak anane"
 * @example
 * countArara(10);  // "adak adak adak adak anane"
 */
function countArara(n) {
  let obj = {
    1: "anane",
    2: "adak",
    3: "adak anane",
    4: "adak adak",
    5: "adak adak anane",
    6: "adak adak adak",
    7: "adak adak adak anane",
    8: "adak adak adak adak",
  };
  let result = [];
  while (n > 0) {
    if (n > 8) {
      result.push(obj[8]);
      n -= 8;
    } else {
      result.push(obj[n]);
      n -= n;
    }
  }
  return result.join(" ");
}
