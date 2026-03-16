/**
 * 7 kyu
 * Minimum Steps (Array Series #6)
 * https://www.codewars.com/kata/5a91a7c5fd8c061367000002/javascript
 *
 * Determines the minimum number of elements (after sorting ascending)
 * that must be summed so their total is greater than or equal to a
 * specified value.
 *
 * The function sorts the input array in ascending order, then
 * progressively subtracts each number from `value` until the
 * remaining value is less than or equal to zero.
 *
 * @param {number[]} numbers - Array of numbers to evaluate.
 * @param {number} value - Target value to reach or exceed.
 * @returns {number} The minimum number of elements required (excluding
 * the final element that causes the threshold to be met).
 *
 * @example
 * // 1 + 2 + 3 = 6 (>= 6), so 2 steps are needed before the final element
 * minimumSteps([4, 6, 3], 7);
 * // returns 1
 *
 * @example
 * minimumSteps([10, 9, 9, 8], 17);
 * // returns 1
 */

function minimumSteps(numbers, value) {
  numbers = numbers.sort((a, b) => a - b);
  let count = 0;
  for (const each of numbers) {
    value -= each;
    count++;
    if (value <= 0) return count - 1;
  }
  return 0;
}
