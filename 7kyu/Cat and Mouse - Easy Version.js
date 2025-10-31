/**
 * 7 kyu
 * Cat and Mouse - Easy Version
 * https://www.codewars.com/kata/57ee24e17b45eff6d6000164/javascript
 *
 * Determines whether the mouse escapes or is caught based on the number of dots between "C" and "m".
 *
 * @param {string} x - A string starting with "C", followed by dots, and ending with "m".
 * @returns {string} "Escaped!" if there are more than 3 dots, otherwise "Caught!".
 *
 * @example
 * catMouse("C.....m"); // "Escaped!"
 * catMouse("C...m");   // "Caught!"
 */
function catMouse(x) {
  let count = 0;
  let startCount = false;
  for (const each of x) {
    if (each === "m") return count > 3 ? "Escaped!" : "Caught!";
    if (startCount) count++;
    if (each === "C") startCount = true;
  }
}
