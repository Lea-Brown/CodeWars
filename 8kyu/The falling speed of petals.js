/**
 * 8 kyu
 * The falling speed of petals
 * https://www.codewars.com/kata/5a0be7ea8ba914fc9c00006b/javascript
 *
 * Calculates how long (in seconds) it takes for a sakura petal to fall
 * from a height of 400 units, based on its falling speed.
 *
 * If the speed is zero or negative, the petal does not fall.
 *
 * @param {number} v - The falling speed of the petal (units per second).
 * @returns {number} Time in seconds for the petal to reach the ground.
 *
 * @example
 * // Petal falls at 10 units/sec
 * // 400 / 10 = 40 seconds
 * sakuraFall(10); // 40
 *
 * @example
 * // Petal falls at 50 units/sec
 * // 400 / 50 = 8 seconds
 * sakuraFall(50); // 8
 *
 * @example
 * // Speed is zero or negative → no fall
 * sakuraFall(0); // 0
 */
function sakuraFall(v) {
  if (v <= 0) return 0;
  return 400 / v;
}
