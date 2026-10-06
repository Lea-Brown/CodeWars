/**
 * 7 kyu
 * Folding your way to the moon
 * https://www.codewars.com/kata/58f0ba42e89aa6158400000e/javascript
 *
 * Calculates the number of folds needed for a sheet to reach a given distance.
 *
 * @param {number} distance - The target distance.
 * @returns {number | null} The number of folds required, or null if the distance is negative.
 *
 * @example
 * foldTo(0); // 0
 *
 * @example
 * foldTo(0.0002); // 1
 *
 * @example
 * foldTo(1); // 14
 */
function foldTo(distance) {
  if (distance === 0) return 0;
  if (distance < 0) return null;
  let count = 0;
  let dist = 0.0001;
  while (dist < distance) {
    dist *= 2;
    count++;
  }
  return count;
}
