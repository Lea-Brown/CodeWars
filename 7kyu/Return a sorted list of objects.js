/**
 * 7 kyu
 * Return a sorted list of objects
 * https://www.codewars.com/kata/52705ed65de62b733f000064/javascript
 *
 * Sorts a list of objects in descending order by a numeric property.
 *
 * **Note:** This mutates the original array because it uses `Array.prototype.sort()`.
 *
 * @template T
 * @param {keyof T} sortBy - The object property to sort by.
 * @param {T[]} list - The array of objects to sort.
 * @returns {T[]} The sorted array (same array instance).
 *
 * @example
 * const users = [
 *   { name: 'Alice', score: 42 },
 *   { name: 'Bob', score: 87 },
 *   { name: 'Charlie', score: 65 }
 * ];
 *
 * sortList('score', users);
 * // [
 * //   { name: 'Bob', score: 87 },
 * //   { name: 'Charlie', score: 65 },
 * //   { name: 'Alice', score: 42 }
 * // ]
 *
 * @example
 * const products = [
 *   { id: 1, stock: 8 },
 *   { id: 2, stock: 20 },
 *   { id: 3, stock: 12 }
 * ];
 *
 * sortList('stock', products);
 * // [
 * //   { id: 2, stock: 20 },
 * //   { id: 3, stock: 12 },
 * //   { id: 1, stock: 8 }
 * // ]
 *
 * @example
 * const players = [
 *   { name: 'Sam', points: 10 },
 *   { name: 'Lee', points: 30 },
 *   { name: 'Alex', points: 20 }
 * ];
 *
 * const sorted = sortList('points', players);
 * console.log(sorted[0].name); // "Lee"
 */
const sortList = (sortBy, list) => list.sort((a, b) => b[sortBy] - a[sortBy]);
