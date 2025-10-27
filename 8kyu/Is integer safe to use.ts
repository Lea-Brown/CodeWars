/**
 * 8 kyu
 * Is integer safe to use?
 * https://www.codewars.com/kata/55a4f9afeffe4231090000d6/typescript
 *
 * Checks whether a number is a safe integer (within 53-bit precision).
 *
 * @param n - The number to check.
 * @returns A boolean indicating whether the number is a safe integer.
 *
 * @example
 * safeInteger(9007199254740990); // true
 * safeInteger(-90);              // true
 * safeInteger(9007199254740992); // false
 */
export function safeInteger(n: number): boolean {
  return Number.isSafeInteger(n);
}
