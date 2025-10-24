/**
 * 8 kyu
 * isReallyNaN
 * https://www.codewars.com/kata/56c24c58e0c0f741d4001aef/typescript
 *
 * Checks whether a value is NaN (Not-a-Number).
 *
 * @param val - The value to test.
 * @returns A boolean indicating whether the value is NaN.
 *
 * @example
 * isReallyNaN(37); // false
 * isReallyNaN(NaN); // true
 */
export function isReallyNaN(val: any): boolean {
  return Number.isNaN(val);
}
