/**
 * 7 kyu
 * Pluck
 * https://www.codewars.com/kata/530017aac7c0f49926000084/javascript
 *
 * Extracts the values of a given property from an array of objects.
 *
 * @template T, K extends keyof T
 * @param {Array<T>} objs - The array of objects to pluck from.
 * @param {K} name - The property name to extract from each object.
 * @returns {Array<T[K]>} An array containing the values of the specified property.
 *
 * @example
 * // Basic usage
 * const users = [
 *   { id: 1, name: "Alice" },
 *   { id: 2, name: "Bob" }
 * ];
 * pluck(users, "name");
 * // → ["Alice", "Bob"]
 *
 * @example
 * // Extracting numbers
 * const items = [
 *   { price: 10, qty: 2 },
 *   { price: 15, qty: 1 }
 * ];
 * pluck(items, "price");
 * // → [10, 15]
 *
 * @example
 * // Works with mixed types
 * const records = [
 *   { active: true },
 *   { active: false }
 * ];
 * pluck(records, "active");
 * // → [true, false]
 */
function pluck(objs, name) {
  let result = [];
  for (const each of objs) {
    result.push(each[name]);
  }
  return result;
}
