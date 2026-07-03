/**
 * 6 kyu
 * Loose Change
 * https://www.codewars.com/kata/5571f712ddf00b54420000ee/javascript
 *
 * Calculates the number of US coins (quarters, dimes, nickels, pennies)
 * needed to make up a given amount of cents using a greedy algorithm.
 *
 * @function looseChange
 * @param {number} cents - The total amount of cents to convert.
 * @returns {Object} An object containing the count of each coin type.
 *
 * @example
 * // Basic usage:
 * looseChange(87);
 * // Returns:
 * // {
 * //   Quarters: 3,
 * //   Dimes: 1,
 * //   Nickels: 0,
 * //   Pennies: 2
 * // }
 *
 * @example
 * // Zero or small values:
 * looseChange(4);
 * // Returns:
 * // {
 * //   Quarters: 0,
 * //   Dimes: 0,
 * //   Nickels: 0,
 * //   Pennies: 4
 * // }
 *
 * @example
 * // Large values:
 * looseChange(250);
 * // Returns:
 * // {
 * //   Quarters: 10,
 * //   Dimes: 0,
 * //   Nickels: 0,
 * //   Pennies: 0
 * // }
 */
function looseChange(cents) {
  let obj = {
    Nickels: 0,
    Pennies: 0,
    Dimes: 0,
    Quarters: 0,
  };
  while (cents >= 1) {
    if (cents >= 25) {
      obj["Quarters"]++;
      cents -= 25;
    } else if (cents >= 10) {
      obj["Dimes"]++;
      cents -= 10;
    } else if (cents >= 5) {
      obj["Nickels"]++;
      cents -= 5;
    } else if (cents >= 1) {
      obj["Pennies"]++;
      cents -= 1;
    }
  }
  return obj;
}
