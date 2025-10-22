/**
 * 8 kyu
 * Convert to Binary
 *
 * https://www.codewars.com/kata/59fca81a5712f9fa4700159a/typescript
 *
 * Converts a number to its binary representation.
 *
 * @param n - The decimal number to convert.
 * @returns The binary representation of the number.
 *
 * @example
 * toBinary(1);  // 1
 * toBinary(5);  // 101
 * toBinary(11); // 1011
 */
export function toBinary(n: number): number {
  return +n.toString(2);
}
