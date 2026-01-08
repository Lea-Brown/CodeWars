/**
 * 7 kyu
 * Computer problem series #1: Fill the Hard Disk Drive
 * https://www.codewars.com/kata/5d49c93d089c6e000ff8428c/javascript
 *
 * Calculates how many items can be saved onto a hard drive before running out of space.
 *
 * Iterates through the `sizes` array, subtracting each size from the available
 * hard drive capacity (`hd`). Stops once the capacity would drop below zero.
 *
 * @param {number[]} sizes - An array of file sizes to be saved, in order.
 * @param {number} hd - The total available hard drive space.
 * @returns {number} The number of items that can be saved before exceeding capacity.
 *
 * @example
 * save([4, 4, 4, 3, 3], 12) // 3
 * save([1, 2, 3, 4], 10)   // 4
 * save([5, 5, 5], 10)     // 2
 * save([], 10)            // 0
 */
function save(sizes, hd) {
  let count = 0;
  for (const each of sizes) {
    hd -= each;
    if (hd < 0) return count;
    count++;
  }
  return count;
}
