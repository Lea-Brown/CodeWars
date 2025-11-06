/**
 * Two Sum (6 kyu)
 * https://www.codewars.com/kata/52c31f8e6605bcc646000082/javascript
 *
 * Finds two distinct indices in an array whose values add up to the given target.
 *
 * @param {number[]} numbers - The array of numbers to search through.
 * @param {number} target - The target sum to find.
 * @returns {number[]} - An array containing the two indices whose values sum to the target.
 *
 * @example
 * twoSum([1, 2, 3], 4) // [0, 2]
 * twoSum([3, 2, 4], 6) // [1, 2]
 * twoSum([2, 7, 11, 15], 9) // [0, 1]
 */
function twoSum(numbers, target) {
  let map = {};
  for (let i = 0; i < numbers.length; i++) {
    const find = target - numbers[i];
    if (find in map) return [map[find], i];
    map[numbers[i]] = i;
  }
}
