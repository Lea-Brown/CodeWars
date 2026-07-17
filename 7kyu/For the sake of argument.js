/**
 * 7 kyu
 * For the sake of argument
 * https://www.codewars.com/kata/5258b272e6925db09900386a/javascript
 *
 * Returns `true` if every provided argument is a number; otherwise returns `false`.
 *
 * @param {...number} args - Values to validate.
 * @returns {boolean} `true` when all arguments are numbers, otherwise `false`.
 *
 * @example
 * numbers(1, 2, 3);
 * // => true
 *
 * @example
 * numbers(1, "2", 3);
 * // => false
 *
 * @example
 * numbers();
 * // => true
 */
function numbers(...args) {
  for (const each of args) {
    if (typeof each !== "number") return false;
  }
  return true;
}
