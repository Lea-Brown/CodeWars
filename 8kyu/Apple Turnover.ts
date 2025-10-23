/**
 * 8 kyu
 * Alan Partridge II - Apple Turnover
 * https://www.codewars.com/kata/580a094553bd9ec5d800007d/typescript
 *
 * Returns a message based on whether the square of `x` is greater than 1000.
 *
 * @param x - The number (or string containing a number) to square.
 * @returns A message depending on the squared value of `x`.
 *
 * @example
 * apple("50"); // "It's hotter than the sun!!"
 * apple(4);    // "Help yourself to a honeycomb Yorkie for the glovebox."
 */
export function apple(x: number | string): string {
  return (+x) ** 2 > 1000
    ? "It's hotter than the sun!!"
    : "Help yourself to a honeycomb Yorkie for the glovebox.";
}
