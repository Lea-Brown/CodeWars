/**
 * 6 kyu
 * zipWith
 * https://www.codewars.com/kata/5825792ada030e9601000782/javascript
 *
 * Applies a binary function to pairs of elements from two arrays,
 * producing a new array of results. Iteration stops at the length
 * of the shorter input array.
 *
 * @template A, B, C
 * @param {(a: A, b: B) => C} fn
 *        The function applied to each pair of elements.
 * @param {A[]} a0
 *        The first input array.
 * @param {B[]} a1
 *        The second input array.
 * @returns {C[]}
 *        An array containing the result of applying `fn` to each
 *        corresponding pair of elements.
 *
 * @example
 * // Add corresponding numbers
 * zipWith((a, b) => a + b, [1, 2, 3], [10, 20, 30]);
 * // → [11, 22, 33]
 *
 * @example
 * // Combine strings
 * zipWith((a, b) => `${a}-${b}`, ["x", "y"], ["A", "B"]);
 * // → ["x-A", "y-B"]
 *
 * @example
 * // Shortest array determines output length
 * zipWith((a, b) => a * b, [2, 4, 6], [10]);
 * // → [20]
 *
 * @example
 * // Zip objects
 * zipWith(
 *   (user, score) => ({ user, score }),
 *   ["alice", "bob"],
 *   [5, 7]
 * );
 * // → [{ user: "alice", score: 5 }, { user: "bob", score: 7 }]
 */
function zipWith(fn, a0, a1) {
  let result = [];
  const length = Math.min(a0.length, a1.length);
  for (let i = 0; i < length; i++) {
    result.push(fn(a0[i], a1[i]));
  }
  return result;
}
