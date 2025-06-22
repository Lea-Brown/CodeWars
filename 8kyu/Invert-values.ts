/* 8 kyu
Invert values

https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad/typescript

Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

[1, 2, 3, 4, 5] --> [-1, -2, -3, -4, -5]
[1, -2, 3, -4, 5] --> [-1, 2, -3, 4, -5]
[] --> []
*/

export function invert(array: number[]): number[] {
  return array.map((each) => -each);
}
