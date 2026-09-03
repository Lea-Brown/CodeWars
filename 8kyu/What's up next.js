/**
 * 8 kyu
 * What's up next?
 * https://www.codewars.com/kata/542ebbdb494db239f8000046/javascript
 *
 * Returns the item immediately following the specified item in a sequence.
 *
 * @param {Array} xs The sequence of items to search.
 * @param {*} item The item to find.
 * @returns {*} The item immediately following the specified item, or undefined.
 *
 * @example
 * nextItem([1, 2, 3, 4], 2);
 * // 3
 *
 * @example
 * nextItem(["a", "b", "c"], "a");
 * // "b"
 *
 * @example
 * nextItem([10, 20, 30], 30);
 * // undefined
 */
function nextItem(xs, item) {
  let previous = false;
  for (const value of xs) {
    if (previous) return value;
    if (value === item) previous = true;
  }
  return undefined;
}
