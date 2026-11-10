/**
 * 7 kyu
 * What's my golf score?
 * https://www.codewars.com/kata/59f7a0a77eb74bf96b00006a/javascript
 *
 * Calculates the total score relative to par for a round of golf.
 *
 * A positive result means the player scored over par.
 * A negative result means the player scored under par.
 * A result of zero means the player scored exactly par.
 *
 * @param {Array<number|string>} parList - The par value for each hole.
 * @param {Array<number|string>} scoreList - The player's score for each hole.
 * @returns {number} The total score relative to par.
 *
 * @example
 * golfScoreCalculator([4, 3, 5], [5, 3, 4]); // 0 (Even par)
 *
 * @example
 * golfScoreCalculator([4, 3, 5], [4, 4, 6]); // 2 (2 over par)
 *
 * @example
 * golfScoreCalculator([4, 3, 5], [3, 2, 4]); // -3 (3 under par)
 */
function golfScoreCalculator(parList, scoreList) {
  let count = 0;
  for (let i = 0; i < parList.length; i++) {
    count += +scoreList[i] - +parList[i];
  }
  return count;
}
