/**
 * 7 kyu
 * Maximum Gap (Array Series #4)
 * https://www.codewars.com/kata/5a7893ef0025e9eb50000013/javascript
 *
 * Finds the largest gap between any two consecutive numbers
 * after sorting the array in ascending order.
 *
 * @param {number[]} numbers - An array of numbers to analyse.
 * @returns {number} The maximum gap between sorted consecutive values.
 *
 * @example
 * maxGap([3, 9, 1]);      // → 6
 * maxGap([10, 20, 30]);   // → 10
 * maxGap([5]);            // → 0
 */
function maxGap(numbers) {
  numbers.sort((a, b) => a - b);
  let gap = 0;
  for (let i = 1; i < numbers.length; i++) {
    const newGap = Math.abs(numbers[i] - numbers[i - 1]);
    if (newGap > gap) gap = newGap;
  }
  return gap;
}
