/**
 * 7 kyu
 * The reject() function
 * https://www.codewars.com/kata/52988f3f7edba9839c00037d/javascript
 *
 * Rejects all elements in an array that satisfy the given predicate.
 *
 * @template T
 * @param {T[]} array - The input array to evaluate.
 * @param {(element: T) => boolean} predicate - A function returning `true` for elements to exclude.
 * @returns {T[]} A new array containing only the elements for which the predicate returned `false`.
 *
 * @example
 * reject([1, 2, 3, 4], (n) => n % 2 === 0);
 * // → [1, 3]
 */
const reject = (array, predicate) => array.filter((e) => !predicate(e));
