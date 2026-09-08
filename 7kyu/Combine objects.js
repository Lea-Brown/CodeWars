/**
 * 7 kyu
 * Combine objects
 * https://www.codewars.com/kata/56bd9e4b0d0b64eaf5000819/javascript
 *
 * Combines multiple objects by adding values with matching keys.
 *
 * @param {...Object<string, number>} obj - Objects containing numeric values.
 * @returns {Object<string, number>} A new object containing the combined values.
 *
 * @example
 * combine({ a: 1, b: 2 }, { a: 3, c: 4 });
 * // { a: 4, b: 2, c: 4 }
 *
 * @example
 * combine({ apples: 5 }, { apples: 3 }, { apples: 2 });
 * // { apples: 10 }
 *
 * @example
 * combine({ a: 10, b: 20 }, { b: 5, c: 15 }, { a: 2, c: 5 });
 * // { a: 12, b: 25, c: 20 }
 */
function combine(...obj) {
  let result = {};
  for (const item of obj) {
    for (const [key, value] of Object.entries(item)) {
      result[key] = (result[key] ?? 0) + value;
    }
  }
  return result;
}
