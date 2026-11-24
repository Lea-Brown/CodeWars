/**
 * 7 kyu
 * MinMaxMin: Bounded Nums
 * https://www.codewars.com/kata/58d3487a643a3f6aa20000ff/javascript
 *
 * Finds the smallest missing integer between the minimum and maximum values.
 *
 * @param {number[]} array - An array of integers.
 * @returns {[number, number, number] | undefined} An array containing the minimum,
 * missing integer and maximum. Returns undefined if no integer is missing.
 *
 * @example
 * minMinMax([1, 2, 3, 4, 6]); // [1, 5, 6]
 *
 * @example
 * minMinMax([2, 4, 5, 6]); // [2, 3, 6]
 *
 * @example
 * minMinMax([10, 11, 12, 14]); // [10, 13, 14]
 */
function minMinMax(array) {
  const set = new Set(array);
  const min = Math.min(...array);
  const max = Math.max(...array);
  for (let i = min + 1; i < max; i++) {
    if (!set.has(i)) return [min, i, max];
  }
}
