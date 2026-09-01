/**
 * 8 kyu
 * Interpreters: HQ9+
 * https://www.codewars.com/kata/591588d49f4056e13f000001/javascript
 *
 * Executes the HQ9+ programming language instructions.
 *
 * H returns "Hello World!".
 * Q returns the letter "Q".
 * 9 returns the 99 Bottles of Beer song.
 * Any other input returns undefined.
 *
 * @param {string} code - The HQ9+ instruction to execute.
 * @returns {string|undefined} The result of the instruction, or undefined for invalid input.
 *
 * @example
 * HQ9("H");
 * // "Hello World!"
 *
 * @example
 * HQ9("Q");
 * // "Q"
 *
 * @example
 * HQ9("9");
 * // Returns the complete 99 Bottles of Beer song.
 */
function HQ9(code) {
  if (code === "H") return "Hello World!";
  if (code === "Q") return "Q";
  if (code !== "9") return undefined;

  const lines = [];

  for (let i = 99; i > 0; i--) {
    const current = i === 1 ? "1 bottle" : `${i} bottles`;
    const next =
      i === 2 ? "1 bottle" : i === 1 ? "no more bottles" : `${i - 1} bottles`;

    lines.push(
      `${current} of beer on the wall, ${current} of beer.`,
      `Take one down and pass it around, ${next} of beer on the wall.`,
    );
  }

  lines.push(
    "No more bottles of beer on the wall, no more bottles of beer.",
    "Go to the store and buy some more, 99 bottles of beer on the wall.",
  );

  return lines.join("\n");
}
