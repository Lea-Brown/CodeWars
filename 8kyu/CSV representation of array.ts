/**
 * 8 kyu
 * CSV representation of array
 * https://www.codewars.com/kata/5a34af40e1ce0eb1f5000036/typescript
 *
 * Converts a two-dimensional number array into a CSV-style string,
 * joining each inner array with commas and separating rows with newline characters ("\n").
 *
 * @param array - A two-dimensional array of numbers.
 * @returns A string where each row of numbers is separated by a newline.
 *
 * @example
 * toCsvText([[ -25, 21, 2, -33, 48 ], [ 30, 31, -32, 33, -34 ]]);
 * // '-25,21,2,-33,48\n30,31,-32,33,-34'
 */
export function toCsvText(array: number[][]): string {
  return array.join("\n");
}
