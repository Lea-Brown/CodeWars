/**
 * 7 kyu
 * Count strings in objects
 * https://www.codewars.com/kata/565b3542af398bfb50000003/javascript
 *
 * Counts all string values in an object, including nested objects and arrays.
 *
 * @param {Object} obj - The object to search for string values.
 * @returns {number} The total number of string values found.
 *
 * @example
 * strCount({ a: "hello", b: 123, c: "world" });
 * // Returns: 2
 *
 * @example
 * strCount({ a: "hello", b: { c: "world", d: 42 } });
 * // Returns: 2
 *
 * @example
 * strCount({ a: ["hello", "world"], b: { c: "test" } });
 * // Returns: 3
 */
function strCount(obj) {
  let count = 0;
  for (const value of Object.values(obj)) {
    if (typeof value === "string") {
      count++;
    } else if (value !== null && typeof value === "object") {
      count += strCount(value);
    }
  }
  return count;
}
