/**
 * 7 kyu
 * Elevator Distance
 * https://www.codewars.com/kata/59f061773e532d0c87000d16/javascript
 *
 * Calculates the total distance traveled by an elevator given an array of floor numbers.
 *
 * The function sums the absolute differences between each consecutive pair of floors.
 *
 * @param {number[]} array - Array of floor numbers representing elevator stops.
 * @returns {number} - The total distance the elevator has traveled.
 *
 * @example
 * elevatorDistance([5, 2, 8]) // 9  (|5-2| + |2-8| = 3 + 6)
 * elevatorDistance([1, 2, 3]) // 2  (|1-2| + |2-3| = 1 + 1)
 * elevatorDistance([7, 1, 7, 1]) // 18  (|7-1| + |1-7| + |7-1| = 6 + 6 + 6)
 */
function elevatorDistance(array) {
  let count = 0;
  for (let i = 0; i < array.length - 1; i++) {
    count += Math.abs(array[i] - array[i + 1]);
  }
  return count;
}
