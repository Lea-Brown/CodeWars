/**
 * 7 kyu
 * Array Array Array
 * https://www.codewars.com/kata/57eb936de1051801d500008a/javascript
 *
 * Explodes a two‑element array into multiple copies of the original array,
 * based on the types and values of its elements.
 *
 * - If both elements are numbers, returns an array of length `x[0] + x[1]`.
 * - If the first element is a string and the second is a number, returns an array of length `x[1]`.
 * - If the first element is a number and the second is a string, returns an array of length `x[0]`.
 * - Otherwise, returns the string "Void!".
 *
 * @param {[string|number, string|number]} x - A two‑element array whose values determine the explosion count.
 * @returns {Array|String} An array filled with `x`, or the string "Void!" if no rule applies.
 *
 * @example
 * explode([2, 3]); // → [[2,3], [2,3], [2,3], [2,3], [2,3]]
 * @example
 * explode(["a", 4]); // → [["a",4], ["a",4], ["a",4], ["a",4]]
 * @example
 * explode([5, "b"]); // → five copies of [5,"b"]
 * @example
 * explode(["x", "y"]); // → "Void!"
 */
function explode(x) {
  if (typeof x[0] === "number" && typeof x[1] === "number")
    return Array(x[0] + x[1]).fill(x);
  if (typeof x[0] === "string" && typeof x[1] === "number")
    return Array(x[1]).fill(x);
  if (typeof x[1] === "string" && typeof x[0] === "number")
    return Array(x[0]).fill(x);
  return "Void!";
}
