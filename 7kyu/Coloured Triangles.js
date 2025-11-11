/**
 * 7 kyu
 * Coloured Triangles
 * https://www.codewars.com/kata/5a25ac6ac5e284cfbe000111/javascript
 *
 * Reduces a string of colours ('R', 'G', 'B') to a single character
 * by repeatedly combining adjacent pairs according to specific rules:
 * - Same colours stay the same (e.g. RR → R)
 * - Different colours produce the third colour:
 *   - B + G → R
 *   - R + G → B
 *   - B + R → G
 *
 * The process repeats until only one colour remains.
 *
 * @param {string} row - A string containing the characters 'R', 'G', and 'B'
 * @returns {string} - A single character ('R', 'G', or 'B') after reduction
 *
 * @example
 * triangle("RRGBRGBB") // "G"
 * triangle("RGBG")     // "B"
 * triangle("R")        // "R"
 */
function triangle(row) {
  let result = row;
  while (result.length > 1) {
    let newLine = [];
    for (let i = 0; i < result.length - 1; i++) {
      if (result[i] === result[i + 1]) newLine.push(result[i]);
      if (
        (result[i] === "B" && result[i + 1] === "G") ||
        (result[i] === "G" && result[i + 1] === "B")
      )
        newLine.push("R");
      if (
        (result[i] === "R" && result[i + 1] === "G") ||
        (result[i] === "G" && result[i + 1] === "R")
      )
        newLine.push("B");
      if (
        (result[i] === "B" && result[i + 1] === "R") ||
        (result[i] === "R" && result[i + 1] === "B")
      )
        newLine.push("G");
    }
    result = newLine.join("");
  }
  return result;
}
