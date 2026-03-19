/**
 * 7 kyu
 * Drone Fly-By
 * https://www.codewars.com/kata/58356a94f8358058f30004b5/javascript
 *
 * Simulates a drone flying over a row of lamps, turning them from "x" (off)
 * to "o" (on) based on the drone's length.
 *
 * @param {string} lamps - A string representing lamps, where each character is typically "x".
 * @param {string} drone - A string representing the drone's path/length.
 * @returns {string} A new string where the first N lamps are "o" (on),
 * where N is the length of the drone (capped at lamps length), and the rest remain "x".
 *
 * @example
 * flyBy("xxxxxx", "====T") // "ooooox"
 *
 * @example
 * flyBy("xxxxxx", "==========") // "oooooo"
 */

function flyBy(lamps, drone) {
  if (drone.length > lamps.length)
    return new Array(lamps.length).fill("o").join("");
  let missed = new Array(drone.length).fill("o");
  let hit = new Array(lamps.length - drone.length).fill("x");
  return missed.concat(hit).join("");
}
