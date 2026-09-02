/**
 * 8 kyu
 * Holiday VI - Shark Pontoon
 * https://www.codewars.com/kata/57e921d8b36340f1fd000059/javascript
 *
 * Determines whether you survive the shark attack.
 *
 * @param {number} pontoonDistance - Distance from you to the pontoon.
 * @param {number} sharkDistance - Distance from the shark to you.
 * @param {number} youSpeed - Your swimming speed.
 * @param {number} sharkSpeed - The shark's swimming speed.
 * @param {boolean} dolphin - Whether a dolphin is helping you.
 * @returns {"Alive!"|"Shark Bait!"} Whether you reach the pontoon before the shark.
 *
 * @example
 * shark(12, 50, 4, 6, false);
 * // "Alive!"
 *
 * @example
 * shark(12, 50, 4, 6, true);
 * // "Alive!"
 *
 * @example
 * shark(24, 36, 4, 6, false);
 * // "Shark Bait!"
 */
function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {
  const me = pontoonDistance / youSpeed;
  const shark = sharkDistance / (dolphin ? sharkSpeed / 2 : sharkSpeed);
  return me < shark ? "Alive!" : "Shark Bait!";
}
