/**
 * 6 kyu
 * Duplicate Arguments
 * https://www.codewars.com/kata/520d9c27e9940532eb00018e/javascript
 *
 * Returns `true` if any duplicate values exist in the provided arguments;
 * otherwise returns `false`.
 *
 * @param {...*} args - Values to check for duplicates.
 * @returns {boolean} `true` if at least one duplicate value is found, otherwise `false`.
 *
 * @example
 * solution(1, 2, 3);
 * // => false
 *
 * @example
 * solution(1, 2, 2, 3);
 * // => true
 *
 * @example
 * solution("a", "b", "a");
 * // => true
 */
function solution(...args) {
  const set = new Set(args);
  return args.length !== set.size;
}
