/**
 * 7 kyu
 * The Office IV - Find a Meeting Room
 * https://www.codewars.com/kata/57f604a21bd4fe771b00009c/javascript
 *
 * Finds the first available meeting room marked with "O".
 *
 * @param {string[]} x - An array representing rooms, where "O" means available and "X" means occupied.
 * @return {number|string} The index of the first available room, or the string
 * "None available!" if no rooms are free.
 *
 * @example
 * meeting(["X", "O", "X"]); // returns 1
 * @example
 * meeting(["X", "X"]); // returns "None available!"
 */
function meeting(x) {
  const room = x.indexOf("O");
  return room >= 0 ? room : "None available!";
}
