/**
 * 6 kyu
 * Street Fighter 2 - Character Selection
 * https://www.codewars.com/kata/5853213063adbd1b9b0000be/javascript
 *
 * Selects fighters from a 2-row by 6-column fighter grid. A cursor moves
 * through a sequence of directional moves, and the function returns the
 * fighter chosen at each step.
 *
 * The cursor position is a [row, column] pair.
 * - "left" and "right" move across columns and wrap around. Column 5
 *   wraps to column 0. Column 0 wraps to column 5.
 * - "up" and "down" move between the two rows. They stop at the edge.
 *   They do not wrap.
 *
 * Note: this function mutates the `position` array that is passed in.
 *
 * @param {string[][]} fighters - A 2-row grid of fighter names. Each row
 *   must have 6 columns (indices 0 to 5).
 * @param {[number, number]} position - The starting cursor position as
 *   [row, column]. Row must be 0 or 1. This array is mutated in place.
 * @param {string[]} moves - A sequence of moves. Each move is one of
 *   "left", "right", "up", "down".
 * @returns {string[]} The fighter selected after each move, in order.
 *
 * @example
 * // Move right twice. No wrap-around needed.
 * const fighters = [
 *   ["Ryu", "Ken", "Chun-Li", "Guile", "Blanka", "Zangief"],
 *   ["Dhalsim", "E.Honda", "M.Bison", "Vega", "Sagat", "Balrog"],
 * ];
 * streetFighterSelection(fighters, [0, 0], ["right", "right"]);
 * // returns ["Ken", "Chun-Li"]
 *
 * @example
 * // Move left from column 0. This wraps around to column 5.
 * const fighters = [
 *   ["Ryu", "Ken", "Chun-Li", "Guile", "Blanka", "Zangief"],
 *   ["Dhalsim", "E.Honda", "M.Bison", "Vega", "Sagat", "Balrog"],
 * ];
 * streetFighterSelection(fighters, [0, 0], ["left"]);
 * // returns ["Zangief"]
 *
 * @example
 * // Move down, then up twice. Row movement stops at the edge.
 * const fighters = [
 *   ["Ryu", "Ken", "Chun-Li", "Guile", "Blanka", "Zangief"],
 *   ["Dhalsim", "E.Honda", "M.Bison", "Vega", "Sagat", "Balrog"],
 * ];
 * streetFighterSelection(fighters, [0, 0], ["down", "up", "up"]);
 * // returns ["Dhalsim", "Ryu", "Ryu"]
 * // ("up" from row 0 has no effect, since row 0 is already the top row)
 */
function streetFighterSelection(fighters, position, moves) {
  let result = [];

  for (const each of moves) {
    if (each === "left" && position[1] === 0) {
      position[1] = 5;
    } else if (each === "left") {
      position[1]--;
    }

    if (each === "right" && position[1] === 5) {
      position[1] = 0;
    } else if (each === "right") {
      position[1]++;
    }

    if (each === "up" && position[0] === 1) {
      position[0] = 0;
    } else if (each === "up") {
    }

    if (each === "down" && position[0] === 0) {
      position[0] = 1;
    } else if (each === "down") {
    }

    result.push(fighters[position[0]][position[1]]);
  }

  return result;
}
